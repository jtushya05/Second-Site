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
    min: 500,
    max: 1800,
    description: 'Student housing or private rentals in Ireland',
  },
  {
    icon: BookOpen,
    name: 'Course Materials',
    min: 120,
    max: 350,
    description: 'Books and academic supplies',
  },
  {
    icon: Bus,
    name: 'Transportation',
    min: 100,
    max: 250,
    description: 'Public transport pass or bike rentals',
  },
  {
    icon: Coffee,
    name: 'Living Expenses',
    min: 450,
    max: 900,
    description: 'Food, utilities, and personal essentials',
  },
];

export default function CostCalculator() {
  const [tuition, setTuition] = useState(15000);
  const [accommodation, setAccommodation] = useState(1000);
  const [living, setLiving] = useState(600);
  const [transport, setTransport] = useState(200);
  const [materials, setMaterials] = useState(150);

  const monthlyTotal = accommodation + living + transport + materials;
  const yearlyTotal = (monthlyTotal * 12) + tuition;

  return (
    <section className="py-24 bg-orange-50">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-green-700">Cost Calculator</h2>
          <p className="mx-auto max-w-2xl text-lg text-green-600">
            Plan your budget with our Ireland cost calculator
          </p>
        </div>
        <div className="mx-auto max-w-4xl">
          <Card>
            <CardContent className="p-6">
              <div className="mb-8">
                <h3 className="mb-4 text-xl font-semibold text-green-700">Annual Tuition Fees (€)</h3>
                <Input
                  type="number"
                  value={tuition}
                  onChange={(e) => setTuition(Number(e.target.value))}
                  min="0"
                  className="max-w-[200px]"
                />
              </div>
              <div className="mb-8">
                <h3 className="mb-4 text-xl font-semibold text-green-700">Monthly Living Costs (€)</h3>
                <div className="grid gap-6 md:grid-cols-2">
                  {expenses.map((expense) => {
                    const Icon = expense.icon;
                    return (
                      <div key={expense.name} className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Icon className="h-5 w-5 text-green-600" />
                          <label className="font-medium text-green-700">{expense.name}</label>
                        </div>
                        <Input
                          type="number"
                          value={
                            expense.name === 'Accommodation' ? accommodation :
                            expense.name === 'Living Expenses' ? living :
                            expense.name === 'Transportation' ? transport :
                            materials
                          }
                          onChange={(e) => {
                            const value = Number(e.target.value);
                            if (expense.name === 'Accommodation') setAccommodation(value);
                            if (expense.name === 'Living Expenses') setLiving(value);
                            if (expense.name === 'Transportation') setTransport(value);
                            if (expense.name === 'Course Materials') setMaterials(value);
                          }}
                          min="0"
                          className="w-full"
                        />
                        <p className="text-sm text-green-600">
                          Typical range: €{expense.min} - €{expense.max}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="rounded-lg bg-green-50 p-6">
                <div className="mb-4 flex items-center gap-2">
                  <Calculator className="h-6 w-6 text-green-600" />
                  <h3 className="text-xl font-semibold text-green-700">Total Costs</h3>
                </div>
                <div className="space-y-2">
                  <p className="flex items-center justify-between">
                    <span>Monthly Living Costs:</span>
                    <span className="font-semibold">€{monthlyTotal.toLocaleString()}</span>
                  </p>
                  <p className="flex items-center justify-between">
                    <span>Annual Living Costs:</span>
                    <span className="font-semibold">€{(monthlyTotal * 12).toLocaleString()}</span>
                  </p>
                  <p className="flex items-center justify-between">
                    <span>Annual Tuition:</span>
                    <span className="font-semibold">€{tuition.toLocaleString()}</span>
                  </p>
                  <div className="mt-4 border-t pt-4">
                    <p className="flex items-center justify-between text-lg font-bold">
                      <span>Total Annual Cost:</span>
                      <span className="text-green-700">€{yearlyTotal.toLocaleString()}</span>
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
