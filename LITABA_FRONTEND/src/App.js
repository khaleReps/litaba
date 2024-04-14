import React from 'react';
import Header from './snippets/Header';
import Footer from './snippets/Footer';
import Sidebar from './snippets/Sidebar';
import AnnouncementBar from './snippets/Announcements';
import News from './pages/News';

function App() {
  return (
    <div className="">
      <AnnouncementBar />
      {/* <Header />
      <div className="">
        <Sidebar />
        <div className="">
          <News />
        </div>
      </div>
      <Footer /> */}
    </div>
  );
}

export default App;
