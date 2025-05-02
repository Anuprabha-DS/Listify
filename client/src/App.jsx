import "./app.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/register';
import NewTask from './Components/Task';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<NewTask />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App
