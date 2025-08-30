import { ReactNode } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  badge?: string;
  iconColor?: string;
}

const FeatureCard = ({ icon, title, description, badge, iconColor = 'blue' }: FeatureCardProps) => {
  const iconBgClasses = {
    blue: "bg-blue-100",
    green: "bg-green-100", 
    purple: "bg-purple-100",
    orange: "bg-orange-100",
    red: "bg-red-100",
    indigo: "bg-indigo-100",
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardHeader className="text-center">
        <div className={`${iconBgClasses[iconColor as keyof typeof iconBgClasses]} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200`}>
          {icon}
        </div>
        {badge && (
          <Badge variant="secondary" className="mx-auto w-fit mb-2">
            {badge}
          </Badge>
        )}
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-center text-gray-600 leading-relaxed">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export { FeatureCard };
