import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/home-page';
import ReceiptExtractor from './components/receipt-extractor';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/extractor" element={<ReceiptExtractor />} />
      </Routes>
    </Router>
  );
};

export default App;