import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import YearsMenuDisplay from './Components/YearsMenuDisplay';
import EventsMenuDisplay from './Components/EventsMenuDisplay';
import ImageDisplay from './Components/ImageDisplay';

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path='year' element={<EventsMenuDisplay />} />
          <Route path='images' element={<ImageDisplay />} />
          <Route path='/' element={<YearsMenuDisplay />} />
          {/* <Route path='/' element={<ImageDisplay />} /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
