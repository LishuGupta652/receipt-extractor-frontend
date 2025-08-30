import React from 'react';
import { Link } from 'react-router-dom';
import { Upload, Zap, Shield, FileText, ArrowRight, Star, CheckCircle } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
      <section className="py-20 lg:py-32 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-1/4 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
        
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
          <div className="mb-8">
            <Badge variant="secondary" className="text-sm px-4 py-2 bg-white/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 shadow-sm">
              <Star className="w-4 h-4 mr-2 text-yellow-500" />
              Trusted by 10,000+ users
            </Badge>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Extract Receipt Details
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent block mt-2">
              with AI Technology
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Upload any receipt and get structured data extracted automatically. 
            Perfect for expense tracking, accounting, and business management.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link 
              to="/extractor"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Start Extracting
              <ArrowRight className="ml-3 h-5 w-5 inline" />
            </Link>
            <a 
              href="#how-it-works"
              className="bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-700 px-10 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:shadow-lg transition-all duration-200"
            >
              Learn More
            </a>
          </div>
          
          {/* Enhanced Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">99.9%</div>
              <div className="text-sm text-gray-600 font-medium mt-1">Accuracy Rate</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
              <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">&lt;3s</div>
              <div className="text-sm text-gray-600 font-medium mt-1">Processing Time</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">10k+</div>
              <div className="text-sm text-gray-600 font-medium mt-1">Happy Users</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose Receipt Extractor?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful features designed to make receipt processing effortless and accurate
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Upload className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Easy Upload</h3>
              <p className="text-gray-600 leading-relaxed">
                Simply drag and drop your receipt images or click to upload. 
                Supports JPG, PNG, and JPEG formats up to 10MB.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Lightning Fast</h3>
              <p className="text-gray-600 leading-relaxed">
                AI-powered OCR technology processes your receipts in under 3 seconds. 
                Get instant results every time.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Secure & Private</h3>
              <p className="text-gray-600 leading-relaxed">
                Your receipt data is processed securely with bank-level encryption 
                and never stored permanently on our servers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get started in 3 simple steps and see the magic happen
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center relative">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6 text-xl font-bold shadow-lg">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Upload Receipt</h3>
              <p className="text-gray-600 leading-relaxed">
                Take a photo or upload an image of your receipt. 
                Our system accepts multiple formats and sizes.
              </p>
            </div>

            <div className="text-center relative">
              <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6 text-xl font-bold shadow-lg">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">AI Processing</h3>
              <p className="text-gray-600 leading-relaxed">
                Our advanced AI analyzes and extracts all important information 
                automatically in seconds.
              </p>
            </div>

            <div className="text-center relative">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6 text-xl font-bold shadow-lg">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Get Results</h3>
              <p className="text-gray-600 leading-relaxed">
                Review the structured data and export it in your preferred format 
                for immediate use.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link 
              to="/extractor"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Try It Now
              <ArrowRight className="ml-3 h-5 w-5 inline" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-xl mr-4 shadow-lg">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Receipt Extractor</span>
              </div>
              <p className="text-gray-300 leading-relaxed max-w-md text-lg">
                Transform your receipt processing with AI-powered technology. 
                Fast, accurate, and secure document extraction.
              </p>
            </div>

            {/* Links */}
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-white">Product</h3>
                <ul className="space-y-3">
                  <li><a href="#features" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Features</a></li>
                  <li><a href="#how-it-works" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">How it Works</a></li>
                  <li><Link to="/extractor" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Try Now</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4 text-white">Support</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Help Center</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Privacy Policy</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Terms of Service</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Receipt Extractor. Built with ❤️ for seamless receipt processing.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
