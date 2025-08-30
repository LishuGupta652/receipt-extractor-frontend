import { ReactNode } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';

interface StepCardProps {
  step: number;
  title: string;
  description: string;
  icon?: ReactNode;
}

const StepCard = ({ step, title, description, icon }: StepCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <CardHeader className="text-center relative z-10">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-200">
          {icon || step}
        </div>
        <CardTitle className="text-xl group-hover:text-blue-700 transition-colors">
          {title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="relative z-10">
        <CardDescription className="text-center text-gray-600 leading-relaxed">
          {description}
        </CardDescription>
      </CardContent>
      
      {/* Step connector line (hidden on last item) */}
      <div className="hidden lg:block absolute top-8 -right-12 w-24 h-0.5 bg-gradient-to-r from-blue-300 to-transparent" />
    </Card>
  );
};

export { StepCard };
