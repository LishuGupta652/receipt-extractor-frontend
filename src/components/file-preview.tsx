
import { Button } from './ui/button';
import { FileText, X } from 'lucide-react';

type FilePreviewProps = {
  file: File;
  onCancel: () => void;
  onSubmit: () => void;
};

const FilePreview = ({ file, onCancel, onSubmit }: FilePreviewProps) => {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-4 border-b border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900">Preview Receipt</h3>
          <p className="text-sm text-gray-600">Review your file before processing</p>
        </div>

        {/* File Info */}
        <div className="p-6">
          <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
            <div className="bg-blue-100 p-3 rounded-lg">
              <FileText className="w-8 h-8 text-blue-600" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-gray-900 truncate">{file.name}</p>
              <p className="text-sm text-gray-500">
                {(file.size / 1024 / 1024).toFixed(2)} MB • {file.type}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end mt-6 space-x-3">
            <Button onClick={onCancel} variant="outline" size="lg">
              <X className="w-4 h-4 mr-2" />
              Cancel
            </Button>
            <Button onClick={onSubmit} variant="gradient" size="lg">
              Extract Details
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilePreview;
