import { Routes, Route } from 'react-router-dom';
// import Home from './components/Home'
// import About from './components/About'
// import Contact from './components/Contact'
import Layout from './components/Layouts'
import './App.scss';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </>
  )}
export default App;