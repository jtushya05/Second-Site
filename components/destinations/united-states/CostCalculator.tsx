'use client';

import { useState } from 'react';
import { Container } from '@/components/ui/container';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function CostCalculator() {
  const [tuition, setTuition] = useState(35000);
  const [living, setLiving] = useState(15000);

  const totalCost = tuition + living;

  return (
    <section className="py-24">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Cost Calculator</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Estimate your annual expenses for studying in the USA
          </p>
        </div>
        
        <div className="mx-auto max-w-3xl">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div>
                  <label className="mb-2 block font-medium">Annual Tuition</label>
                  <Input
                    type="number"
                    value={tuition}
                    onChange={(e) => setTuition(Number(e.target.value))}
                    min="0"
                    className="text-lg"
                  />
                </div>
                
                <div>
                  <label className="mb-2 block font-medium">Living Expenses</label>
                  <Input
                    type="number"
                    value={living}
                    onChange={(e) => setLiving(Number(e.target.value))}
                    min="0"
                    className="text-lg"
                  />
                </div>

                <div className="rounded-lg bg-blue-50 p-6">
                  <h3 className="mb-4 text-xl font-semibold">Estimated Total Cost</h3>
                  <p className="text-3xl font-bold text-blue-600">
                    ${totalCost.toLocaleString()}
                  </p>
                  <p className="mt-2 text-sm text-gray-600">
                    *This is an estimate. Actual costs may vary based on location, lifestyle, and specific university fees.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
}