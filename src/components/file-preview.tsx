
import Button from './ui/button';
import { FileText, X } from 'lucide-react';

type FilePreviewProps = {
  file: File;
  onCancel: () => void;
  onSubmit: () => void;
};

const FilePreview = ({ file, onCancel, onSubmit }: FilePreviewProps) => {
  return (
    <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
      <div className="flex items-center space-x-4">
        <FileText className="w-12 h-12 text-gray-400" />
        <div>
          <p className="font-semibold">{file.name}</p>
          <p className="text-sm text-gray-500">
            {(file.size / 1024 / 1024).toFixed(2)} MB
          </p>
        </div>
      </div>
      <div className="flex justify-end mt-6 space-x-4">
        <Button onClick={onCancel} variant="secondary">
          <X className="w-5 h-5 mr-2" />
          Cancel
        </Button>
        <Button onClick={onSubmit}>
          Extract Details
        </Button>
      </div>
    </div>
  );
};

export default FilePreview;
