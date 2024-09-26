import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form1 from './components/Form1';
import Form2 from './components/Form2';
import Form3 from './components/Form3';
import Nav from './components/nav';
import ReactForm1 from './components/ReactForm1';

function App() {
  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
        <Route path="/" element={<Form1 />}/>
        <Route path="/form2" element={<Form2 />}/>
        <Route path="/form3" element={<Form3 />}/>
        <Route path="/react" element={<ReactForm1 />}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
