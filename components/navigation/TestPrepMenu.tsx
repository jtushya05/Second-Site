'use client';

import Image from 'next/image';
import Link from 'next/link';
import { testPrep } from '@/src/data/navigation';

export default function TestPrepMenu() {
  return (
    <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
      {testPrep.map((test) => (
        <Link
          key={test.path}
          href={test.path}
          className="flex items-center gap-3 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/50 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
        >
          <div className="relative h-10 w-10 overflow-hidden rounded-md">
            <Image
              src={test.logo}
              alt={test.name}
              fill
              className="object-cover"
            />
          </div>
          <span>{test.name}</span>
        </Link>
      ))}
    </div>
  );
}