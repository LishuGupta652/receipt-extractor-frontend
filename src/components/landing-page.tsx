
import { useState } from 'react';
import Input from './ui/input';
import { Upload, FileText, Image, Sparkles } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

type LandingPageProps = {
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const LandingPage = ({ onFileChange }: LandingPageProps) => {
  const [isDragOver, setIsDragOver] = useState(false);

  const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer?.files && e.dataTransfer.files.length > 0) {
      const syntheticEvent = {
        target: { files: e.dataTransfer.files },
      } as unknown as React.ChangeEvent<HTMLInputElement>;
      onFileChange(syntheticEvent);
      e.dataTransfer.clearData();
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-6">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 rounded-2xl">
            <FileText className="w-10 h-10 text-white" />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Upload Your Receipt
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Drop your receipt image below and let our AI extract all the important details automatically.
        </p>
        
        <div className="flex flex-wrap justify-center gap-2 mt-6">
          <Badge variant="secondary">
            <Sparkles className="w-3 h-3 mr-1" />
            AI-Powered
          </Badge>
          <Badge variant="secondary">Fast Processing</Badge>
          <Badge variant="secondary">Secure</Badge>
        </div>
      </div>

      {/* Upload Area */}
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <label
            htmlFor="dropzone-file"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            className={`relative flex flex-col items-center justify-center w-full h-80 cursor-pointer transition-all duration-300 ${
              isDragOver 
                ? 'bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-300' 
                : 'bg-gradient-to-br from-gray-50 to-blue-50 hover:from-blue-50 hover:to-indigo-50'
            } border-2 border-dashed border-gray-300 hover:border-blue-300 rounded-lg group`}
          >
            {/* Background decoration */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5" />
            
            <div className="relative z-10 flex flex-col items-center justify-center pt-5 pb-6">
              <div className={`p-4 rounded-full mb-4 transition-all duration-300 ${
                isDragOver 
                  ? 'bg-blue-100 scale-110' 
                  : 'bg-gray-100 group-hover:bg-blue-100 group-hover:scale-110'
              }`}>
                <Upload className={`w-12 h-12 transition-colors duration-300 ${
                  isDragOver 
                    ? 'text-blue-600' 
                    : 'text-gray-400 group-hover:text-blue-600'
                }`} />
              </div>
              
              <div className="text-center">
                <p className="mb-2 text-lg font-medium text-gray-700">
                  <span className="font-semibold text-blue-600">Click to upload</span> or drag and drop
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  Your receipt will be processed instantly
                </p>
                
                {/* Supported formats */}
                <div className="flex items-center justify-center space-x-6 text-xs text-gray-400">
                  <div className="flex items-center">
                    <Image className="w-4 h-4 mr-1" />
                    JPG
                  </div>
                  <div className="flex items-center">
                    <Image className="w-4 h-4 mr-1" />
                    PNG
                  </div>
                  <div className="flex items-center">
                    <Image className="w-4 h-4 mr-1" />
                    JPEG
                  </div>
                  <span>•</span>
                  <span>Max 10MB</span>
                </div>
              </div>
            </div>
            
            <Input
              id="dropzone-file"
              onChange={onFileChange}
              accept=".jpg,.jpeg,.png"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              type="file"
            />
          </label>
        </CardContent>
      </Card>

      {/* Tips */}
      <div className="mt-8 grid md:grid-cols-3 gap-4 text-center">
        <div className="p-4">
          <div className="text-blue-600 font-semibold mb-1">📸 Clear Image</div>
          <p className="text-sm text-gray-600">Ensure all text is readable and well-lit</p>
        </div>
        <div className="p-4">
          <div className="text-green-600 font-semibold mb-1">⚡ Fast Processing</div>
          <p className="text-sm text-gray-600">Results in under 3 seconds</p>
        </div>
        <div className="p-4">
          <div className="text-purple-600 font-semibold mb-1">🔒 Secure</div>
          <p className="text-sm text-gray-600">Your data is never stored permanently</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
