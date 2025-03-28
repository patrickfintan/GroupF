import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import ReadStories from './component/ReadStories';
import FeedBack from './component/FeedBack';
import Contact from './component/contact';
import HomePage from './component/HomePage';
import ReadStory from './component/ReadStory';

function App() {
  return (
    <Router>
      <Navbar/> {/* Include the Navbar */}
      <Routes>
        <Route path = "/" element={<ReadStory/>} />
        <Route path="/ReadStories" element={<ReadStories/>} />
        <Route path="/FeedBack" element = {<FeedBack/>}/>
        <Route path="/Contact" element = {<Contact/>}/>
      </Routes>
    </Router>
  );
}

export default App;
