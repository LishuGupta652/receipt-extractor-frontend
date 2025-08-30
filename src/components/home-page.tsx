import { Link } from 'react-router-dom';
import { Upload, Zap, Shield, FileText, ArrowRight, Star } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">Receipt Extractor</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
                How it works
              </a>
              <Link 
                to="/extractor"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-medium transition-colors"
              >
                Get Started
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-50/20 to-purple-50/20"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-6 py-3 bg-blue-100 text-blue-800 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow">
              <Star className="w-4 h-4 mr-2 text-yellow-500 fill-current" />
              Trusted by 10,000+ users
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Extract Receipt Details
            <span className="text-blue-600 block mt-2">
              Instantly with AI
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Upload any receipt and get structured data extracted automatically. 
            Perfect for expense tracking, accounting, and business management.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
            <Link 
              to="/extractor"
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-xl text-lg font-semibold transition-all duration-300 inline-flex items-center justify-center shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1"
            >
              Start Extracting
              <ArrowRight className="ml-3 h-6 w-6" />
            </Link>
            <a 
              href="#features"
              className="bg-white border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 text-gray-700 px-10 py-5 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Learn More
            </a>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-5xl font-bold text-blue-600 mb-3">99.9%</div>
              <div className="text-gray-600 font-medium text-lg">Accuracy Rate</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-5xl font-bold text-green-600 mb-3">&lt;3s</div>
              <div className="text-gray-600 font-medium text-lg">Processing Time</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-5xl font-bold text-purple-600 mb-3">10k+</div>
              <div className="text-gray-600 font-medium text-lg">Happy Users</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Receipt Extractor?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful features designed to make receipt processing effortless and accurate
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            <div className="group bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-10 text-center hover:from-blue-100 hover:to-blue-200 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <Upload className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Easy Upload</h3>
              <p className="text-gray-600 leading-relaxed">
                Simply drag and drop your receipt images or click to upload. Supports JPG, PNG, and JPEG formats up to 10MB.
              </p>
            </div>
            
            <div className="group bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-10 text-center hover:from-green-100 hover:to-green-200 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
              <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-green-700 rounded-xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <Zap className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Lightning Fast</h3>
              <p className="text-gray-600 leading-relaxed">
                AI-powered OCR technology processes your receipts in under 3 seconds, not minutes. Get instant results every time.
              </p>
            </div>
            
            <div className="group bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-10 text-center hover:from-purple-100 hover:to-purple-200 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Secure & Private</h3>
              <p className="text-gray-600 leading-relaxed">
                Your receipt data is processed securely with bank-level encryption and never stored permanently on our servers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">How It Works</h2>
            <p className="text-xl text-gray-600">Simple steps to extract your receipt data</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                  <span className="text-3xl font-bold text-white">1</span>
                </div>
                {/* Connection line for desktop */}
                <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-blue-300 to-green-300 -z-10"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Upload Receipt</h3>
              <p className="text-gray-600 leading-relaxed">Upload your receipt image by dragging and dropping or clicking to browse files.</p>
            </div>
            
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-gradient-to-r from-green-600 to-green-700 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                  <span className="text-3xl font-bold text-white">2</span>
                </div>
                {/* Connection line for desktop */}
                <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-green-300 to-purple-300 -z-10"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Processing</h3>
              <p className="text-gray-600 leading-relaxed">Our advanced AI analyzes your receipt and extracts key information automatically.</p>
            </div>
            
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                  <span className="text-3xl font-bold text-white">3</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Get Results</h3>
              <p className="text-gray-600 leading-relaxed">Download your structured data in JSON or CSV format for easy integration.</p>
            </div>
          </div>

          <div className="text-center">
            <Link 
              to="/extractor"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-5 rounded-xl text-lg font-semibold transition-all duration-300 inline-flex items-center shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              Try It Now
              <ArrowRight className="ml-3 h-6 w-6" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <FileText className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-bold">Receipt Extractor</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Extract receipt details instantly with AI technology. 
                Perfect for expense tracking and business management.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#features" className="text-gray-400 hover:text-white transition-colors block">Features</a>
                <a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors block">How it works</a>
                <Link to="/extractor" className="text-gray-400 hover:text-white transition-colors block">Get Started</Link>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Receipt Extractor. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
