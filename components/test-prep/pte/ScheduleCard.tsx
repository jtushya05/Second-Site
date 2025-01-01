'use client';

interface ScheduleCardProps {
  title: string;
  detail: string;
  icon: JSX.Element;
}

export default function ScheduleCard({ title, detail, icon }: ScheduleCardProps) {
  return (
    <div className="border rounded-lg p-4">
      <div className="flex items-center">
        {icon}
        <h3 className="ml-2 text-xl font-bold">{title}</h3>
      </div>
      <p className="text-gray-600">{detail}</p>
    </div>
  );
}
