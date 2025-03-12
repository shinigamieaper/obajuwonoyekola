import React from "react";

interface CardProps {
  title: string;
  icon: React.ReactNode;
  des: string;
  children?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ title, icon, des, children }) => {
  return (
    <div className="relative p-6 rounded-xl bg-[#111] border border-gray-700 text-white">
      <div className="absolute top-4 right-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300">{des}</p>
      <div className="mt-4">{children}</div>
    </div>
  );
};
