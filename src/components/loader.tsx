import { FileText, Zap, CheckCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

const Loader = () => {
  const [currentStep, setCurrentStep] = useState(0);
  
  const steps = [
    { icon: FileText, text: "Analyzing receipt image...", color: "text-blue-600" },
    { icon: Zap, text: "Processing with AI...", color: "text-green-600" },
    { icon: CheckCircle, text: "Extracting details...", color: "text-purple-600" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 1500);

    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="relative">
        {/* Main loader circle */}
        <div className="w-24 h-24 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
        
        {/* Inner pulsing circle */}
        <div className="absolute inset-4 bg-blue-50 rounded-full animate-pulse"></div>
        
        {/* Icon in center */}
        <div className="absolute inset-0 flex items-center justify-center">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Icon
                key={index}
                className={`w-8 h-8 transition-all duration-500 ${
                  index === currentStep 
                    ? `${step.color} scale-100 opacity-100` 
                    : 'text-gray-400 scale-75 opacity-50'
                } ${index === currentStep ? 'animate-bounce' : ''}`}
                style={{
                  position: index === currentStep ? 'static' : 'absolute',
                }}
              />
            );
          })}
        </div>
      </div>

      {/* Progress text */}
      <div className="mt-8 text-center">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Processing Your Receipt
        </h3>
        <p className={`text-lg transition-all duration-500 ${steps[currentStep].color} font-medium`}>
          {steps[currentStep].text}
        </p>
        
        {/* Progress dots */}
        <div className="flex justify-center mt-4 space-x-2">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentStep ? 'bg-blue-500 scale-125' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Tips */}
      <div className="mt-8 max-w-md text-center">
        <p className="text-sm text-gray-500">
          💡 <strong>Tip:</strong> For best results, ensure your receipt is well-lit and all text is clearly visible.
        </p>
      </div>
    </div>
  );
};

export default Loader;
