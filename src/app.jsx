// import { RouterProvider } from 'react-router-dom';
// import { router } from './routes';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AlgorithmPage from './pages/algorithm.page';
import AllAlgorithmPage from './pages/all-algorithm.page';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AlgorithmPage />} />
        <Route path="/all" element={<AllAlgorithmPage />} />
        <Route path="/:algoName" element={<AlgorithmPage />} />
      </Routes>
    </Router>
  );
}

export default App;
