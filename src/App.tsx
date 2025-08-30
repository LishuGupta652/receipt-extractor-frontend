import React, { useState } from 'react';
import LandingPage from './components/landing-page';
import FilePreview from './components/file-preview';
import Loader from './components/loader';
import ExtractionResult from './components/extraction-result';

type AppState = 'landing' | 'preview' | 'loading' | 'result' | 'error';

const App = () => {
  const API_BASE = (() => {
    return (import.meta as any).env?.VITE_API_BASE_URL ?? '';
  })();

  const [appState, setAppState] = useState<AppState>('landing');
  const [file, setFile] = useState<File | null>(null);
  const [extractionData, setExtractionData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setAppState('preview');
    }
  };

  const handleCancel = () => {
    setFile(null);
    setAppState('landing');
  };

  const handleSubmit = async () => {
    if (!file) return;

    setAppState('loading');

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
      setAppState('result');
    } catch (error) {
      setError('An error occurred while extracting the receipt. Please try again.');
      setAppState('error');
    }
  };

  const handleNewExtraction = () => {
    setFile(null);
    setExtractionData(null);
    setError(null);
    setAppState('landing');
  };

  const renderContent = () => {
    switch (appState) {
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
            <p className="text-red-500">{error}</p>
            <button onClick={handleNewExtraction} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">
              Try Again
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return <div className="w-full p-8">{renderContent()}</div>;
};

export default App;