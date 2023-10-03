import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Main from './pages/Main';
import Sale from './pages/Sale/Sale';
import Rent from './pages/Rent/Rent';
import NotFound from './pages/NotFound';
import NewAnnouncement from './pages/NewAnnouncement/NewAnnouncement';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Main />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/new-announcement" element={<NewAnnouncement />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
