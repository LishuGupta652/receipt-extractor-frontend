import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText } from 'lucide-react';
import LandingPage from './landing-page';
import FilePreview from './file-preview';
import Loader from './loader';
import ExtractionResult from './extraction-result';

type ExtractorState = 'landing' | 'preview' | 'loading' | 'result' | 'error';

const ReceiptExtractor = () => {
  const API_BASE = (() => {
    return (import.meta as any).env?.VITE_API_BASE_URL ?? '';
  })();

  const [extractorState, setExtractorState] = useState<ExtractorState>('landing');
  const [file, setFile] = useState<File | null>(null);
  const [extractionData, setExtractionData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setExtractorState('preview');
    }
  };

  const handleCancel = () => {
    setFile(null);
    setExtractorState('landing');
  };

  const handleSubmit = async () => {
    if (!file) return;

    setExtractorState('loading');

    const formData = new FormData();
    formData.append('file', file);

    try {
      const url = API_BASE ? `${API_BASE}/receipt-extractor/extract-receipt-details` : '/receipt-extractor/extract-receipt-details';
      const response = await fetch(url, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to extract receipt details');
      }

      const data = await response.json();
      setExtractionData(data);
      setExtractorState('result');
    } catch (error) {
      setError('An error occurred while extracting the receipt. Please try again.');
      setExtractorState('error');
    }
  };

  const handleNewExtraction = () => {
    setFile(null);
    setExtractionData(null);
    setError(null);
    setExtractorState('landing');
  };

  const renderContent = () => {
    switch (extractorState) {
      case 'landing':
        return <LandingPage onFileChange={handleFileChange} />;
      case 'preview':
        return <FilePreview file={file!} onCancel={handleCancel} onSubmit={handleSubmit} />;
      case 'loading':
        return <Loader />;
      case 'result':
        return (
          <ExtractionResult
            imageUrl={URL.createObjectURL(file!)}
            details={extractionData}
            onNewExtraction={handleNewExtraction}
          />
        );
      case 'error':
        return (
          <div className="text-center">
            <p className="text-red-500 mb-4">{error}</p>
            <button 
              onClick={handleNewExtraction} 
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Link to="/" className="flex items-center mr-4 text-gray-600 hover:text-gray-900">
                <ArrowLeft className="h-5 w-5 mr-1" />
                Back
              </Link>
              <FileText className="h-8 w-8 text-blue-600 mr-3" />
              <h1 className="text-2xl font-bold text-gray-900">Receipt Extractor</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {renderContent()}
      </main>
    </div>
  );
};

export default ReceiptExtractor;
