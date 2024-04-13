import React from 'react';
import Header from './snippets/Header';
import Footer from './snippets/Footer';
import Sidebar from './snippets/Sidebar';
import AnnouncementBar from './snippets/Announcements';
import News from './pages/News';

function App() {
  return (
    <div>
      <AnnouncementBar />
      <Header />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ flex: 1, padding: '20px' }}>
          <News />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
