import './App.css';
import Main from "./pages/Main";

import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
       <Routes>
        <Route path='/' element={<Main/>}></Route>
       </Routes>
     </BrowserRouter>
  );
}

export default App;
