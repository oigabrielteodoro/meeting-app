import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';

import Pages from './pages';

import { GlobalStyle } from './App.styled';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Pages.Meeting />} />
        </Routes>
      </Router>
    </>
  );
}
