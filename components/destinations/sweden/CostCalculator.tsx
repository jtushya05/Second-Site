'use client';

import { useState } from 'react';
import { Container } from '@/components/ui/container';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Calculator, Building2, Bus, Coffee, BookOpen } from 'lucide-react';

const expenses = [
  {
    icon: Building2,
    name: 'Accommodation',
    min: 4000,
    max: 9000,
    description: 'Student housing or private rentals in major cities.',
  },
  {
    icon: BookOpen,
    name: 'Course Materials',
    min: 500,
    max: 1000,
    description: 'Books and academic supplies.',
  },
  {
    icon: Bus,
    name: 'Transportation',
    min: 300,
    max: 800,
    description: 'Public transport passes or bike rentals.',
  },
  {
    icon: Coffee,
    name: 'Living Expenses',
    min: 2500,
    max: 4500,
    description: 'Food, utilities, and personal essentials.',
  },
];

export default function CostCalculator() {
  const [tuition, setTuition] = useState(120000); // Annual tuition fees in SEK
  const [accommodation, setAccommodation] = useState(7000);
  const [living, setLiving] = useState(3500);
  const [transport, setTransport] = useState(600);
  const [materials, setMaterials] = useState(800);

  const monthlyTotal = accommodation + living + transport + materials;
  const yearlyTotal = monthlyTotal * 12 + tuition;

  return (
    <section className="py-24 bg-yellow-50">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-blue-800">Cost Calculator</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-700">
            Plan your budget with our Sweden-specific cost calculator.
          </p>
        </div>
        <div className="mx-auto max-w-4xl">
          <Card>
            <CardContent className="p-6">
              <div className="mb-8">
                <h3 className="mb-4 text-xl font-semibold text-blue-800">Annual Tuition Fees (SEK)</h3>
                <Input
                  type="number"
                  value={tuition}
                  onChange={(e) => setTuition(Number(e.target.value))}
                  min="0"
                  className="max-w-[200px] border-blue-500"
                />
              </div>
              <div className="mb-8">
                <h3 className="mb-4 text-xl font-semibold text-blue-800">Monthly Living Costs (SEK)</h3>
                <div className="grid gap-6 md:grid-cols-2">
                  {expenses.map((expense) => {
                    const Icon = expense.icon;
                    return (
                      <div key={expense.name} className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Icon className="h-5 w-5 text-yellow-500" />
                          <label className="font-medium text-blue-800">{expense.name}</label>
                        </div>
                        <Input
                          type="number"
                          value={
                            expense.name === 'Accommodation'
                              ? accommodation
                              : expense.name === 'Living Expenses'
                              ? living
                              : expense.name === 'Transportation'
                              ? transport
                              : materials
                          }
                          onChange={(e) => {
                            const value = Number(e.target.value);
                            if (expense.name === 'Accommodation') setAccommodation(value);
                            if (expense.name === 'Living Expenses') setLiving(value);
                            if (expense.name === 'Transportation') setTransport(value);
                            if (expense.name === 'Course Materials') setMaterials(value);
                          }}
                          min="0"
                          className="w-full border-blue-500"
                        />
                        <p className="text-sm text-gray-600">
                          Typical range: SEK {expense.min} - SEK {expense.max}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="rounded-lg bg-blue-50 p-6">
                <div className="mb-4 flex items-center gap-2">
                  <Calculator className="h-6 w-6 text-yellow-500" />
                  <h3 className="text-xl font-semibold text-blue-800">Total Costs</h3>
                </div>
                <div className="space-y-2">
                  <p className="flex items-center justify-between">
                    <span>Monthly Living Costs:</span>
                    <span className="font-semibold">SEK {monthlyTotal.toLocaleString()}</span>
                  </p>
                  <p className="flex items-center justify-between">
                    <span>Annual Living Costs:</span>
                    <span className="font-semibold">SEK {(monthlyTotal * 12).toLocaleString()}</span>
                  </p>
                  <p className="flex items-center justify-between">
                    <span>Annual Tuition:</span>
                    <span className="font-semibold">SEK {tuition.toLocaleString()}</span>
                  </p>
                  <div className="mt-4 border-t pt-4">
                    <p className="flex items-center justify-between text-lg font-bold">
                      <span>Total Annual Cost:</span>
                      <span className="text-yellow-500">SEK {yearlyTotal.toLocaleString()}</span>
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
}
