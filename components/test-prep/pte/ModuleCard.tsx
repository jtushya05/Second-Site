'use client';

import { Container } from '../../ui/container'; // Adjusted path

interface ModuleCardProps {
  title: string;
  description: string;
  features: { icon: JSX.Element; text: string }[];
}

export default function ModuleCard({ title, description, features }: ModuleCardProps) {
  return (
    <div className="border rounded-lg p-4">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <ul className="mt-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            {feature.icon}
            <span className="ml-2">{feature.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
