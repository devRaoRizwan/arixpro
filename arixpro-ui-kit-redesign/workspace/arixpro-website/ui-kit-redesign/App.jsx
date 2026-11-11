// App.jsx - react-router-dom, multi-page
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; import Services from './pages/Services'; import Work from './pages/Work';
import WorkDetail from './pages/WorkDetail'; import Process from './pages/Process'; import About from './pages/About'; import Contact from './pages/Contact';
import Navbar from './components/Navbar'; import Footer from './components/Footer';
export default function App(){ return (<BrowserRouter><Navbar/><Routes><Route path="/" element={<Home/>}/><Route path="/services" element={<Services/>}/><Route path="/work" element={<Work/>}/><Route path="/work/:slug" element={<WorkDetail/>}/><Route path="/process" element={<Process/>}/><Route path="/about" element={<About/>}/><Route path="/contact" element={<Contact/>}/></Routes><Footer/></BrowserRouter>); }
