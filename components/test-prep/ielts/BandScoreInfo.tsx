'use client';

import { Card, CardContent } from '@/components/ui/card';

const bandScores = [
  {
    band: '9',
    level: 'Expert',
    description: 'Complete mastery of English'
  },
  {
    band: '8',
    level: 'Very Good',
    description: 'Fully operational command'
  },
  {
    band: '7',
    level: 'Good',
    description: 'Operational command with occasional inaccuracies'
  },
  {
    band: '6',
    level: 'Competent',
    description: 'Generally effective command'
  },
  {
    band: '5',
    level: 'Modest',
    description: 'Partial command'
  }
];

export default function BandScoreInfo() {
  return (
    <section className="mb-16">
      <h2 className="mb-8 text-3xl font-bold">Understanding IELTS Band Scores</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {bandScores.map((score) => (
          <Card key={score.band}>
            <CardContent className="p-6">
              <div className="mb-4 flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-2xl font-bold text-blue-600">
                  {score.band}
                </span>
                <h3 className="text-xl font-semibold">{score.level}</h3>
              </div>
              <p className="text-gray-600">{score.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}