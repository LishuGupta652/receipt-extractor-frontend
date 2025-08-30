
import React from 'react';
import Input from './ui/input';
import { Upload } from 'lucide-react';

type LandingPageProps = {
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const LandingPage = ({ onFileChange }: LandingPageProps) => {
  const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
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
  };

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Receipt Extractor</h1>
      <p className="text-lg text-gray-600 mb-8">
        Upload a receipt to automatically extract its details.
      </p>
      <div className="flex items-center justify-center w-full">
        <label
          htmlFor="dropzone-file"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          className="relative flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <Upload className="w-10 h-10 mb-3 text-gray-400" />
            <p className="mb-2 text-sm text-gray-500">
              <span className="font-semibold">Click to upload</span> or drag and drop
            </p>
            <p className="text-xs text-gray-500">
              JPG, JPEG, PNG (max. 5MB)
            </p>
          </div>
          <Input
            id="dropzone-file"
            onChange={onFileChange}
            accept=".jpg,.jpeg,.png"
            className="absolute inset-0 w-full h-full opacity-0"
          />
        </label>
      </div>
    </div>
  );
};

export default LandingPage;
