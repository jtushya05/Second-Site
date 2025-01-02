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
    min: 300,
    max: 800,
    description: 'Student housing or shared apartments'
  },
  {
    icon: BookOpen,
    name: 'Course Materials',
    min: 50,
    max: 100,
    description: 'Books and supplies'
  },
  {
    icon: Bus,
    name: 'Transportation',
    min: 30,
    max: 80,
    description: 'Semester ticket for public transport'
  },
  {
    icon: Coffee,
    name: 'Living Expenses',
    min: 300,
    max: 500,
    description: 'Food, utilities, and personal items'
  }
];

export default function CostCalculator() {
  const [tuition, setTuition] = useState(0); // Most public universities are tuition-free
  const [accommodation, setAccommodation] = useState(500);
  const [living, setLiving] = useState(400);
  const [transport, setTransport] = useState(50);
  const [materials, setMaterials] = useState(75);

  const monthlyTotal = accommodation + living + transport + materials;
  const yearlyTotal = (monthlyTotal * 12) + tuition;

  return (
    <section className="py-24">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Cost Calculator</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Plan your budget with our comprehensive cost calculator
          </p>
        </div>
        
        <div className="mx-auto max-w-4xl">
          <Card>
            <CardContent className="p-6">
              <div className="mb-8">
                <h3 className="mb-4 text-xl font-semibold">Semester Fees (€)</h3>
                <Input
                  type="number"
                  value={tuition}
                  onChange={(e) => setTuition(Number(e.target.value))}
                  min="0"
                  className="max-w-[200px]"
                />
                <p className="mt-2 text-sm text-gray-500">
                  Most public universities only charge semester fees (€100-350)
                </p>
              </div>

              <div className="mb-8">
                <h3 className="mb-4 text-xl font-semibold">Monthly Living Costs (€)</h3>
                <div className="grid gap-6 md:grid-cols-2">
                  {expenses.map((expense) => {
                    const Icon = expense.icon;
                    return (
                      <div key={expense.name} className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Icon className="h-5 w-5 text-gray-500" />
                          <label className="font-medium">{expense.name}</label>
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
                        <p className="text-sm text-gray-500">
                          Typical range: €{expense.min} - €{expense.max}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="rounded-lg bg-yellow-50 p-6">
                <div className="mb-4 flex items-center gap-2">
                  <Calculator className="h-6 w-6 text-yellow-600" />
                  <h3 className="text-xl font-semibold">Total Costs</h3>
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
                    <span>Annual Tuition/Fees:</span>
                    <span className="font-semibold">€{tuition.toLocaleString()}</span>
                  </p>
                  <div className="mt-4 border-t pt-4">
                    <p className="flex items-center justify-between text-lg font-bold">
                      <span>Total Annual Cost:</span>
                      <span className="text-yellow-600">€{yearlyTotal.toLocaleString()}</span>
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