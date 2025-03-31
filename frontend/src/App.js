import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import ReadStories from './component/ReadStories';
import FeedBack from './component/FeedBack';
import Contact from './component/contact';
import HomePage from './component/HomePage';
import ReadStory from './component/ReadStory';

function App() {
  const movies = [
    {
      image: 'https://via.placeholder.com/80x120',
      title: 'Movie Title 1',
      published: true,
      category: 'Action',
      Rating: '5',
      author: { name: 'John Doe', email: 'john.doe@example.com' },
    },
    {
      image: 'https://via.placeholder.com/80x120',
      title: 'Movie Title 2',
      published: false,
      category: 'Comedy',
      Rating: '4',
      author: { name: 'Jane Doe', email: 'jane.doe@example.com' },
    },
    {
      image: 'https://via.placeholder.com/80x120',
      title: 'Movie Title 3',
      published: true,
      category: 'Drama',
      Rating: '3',
      author: { name: 'Alice Smith', email: 'alice.smith@example.com' },
    },
  ];

  return (
    <Router>
      <Navbar/> {/* Include the Navbar */}
      <Routes>
        <Route path = "/" element={<ReadStory/>} />
        <Route path="/ReadStories" element={<ReadStories movies = {movies}/>} />
        <Route path="/FeedBack" element = {<FeedBack/>}/>
        <Route path="/Contact" element = {<Contact/>}/>
      </Routes>
    </Router>
  );
}

export default App;
