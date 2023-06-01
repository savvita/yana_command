import './App.css';
import Main from "./pages/Main";
import UserPage from "./pages/UserPage";

import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
       <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/user' element={<UserPage/>}></Route>
       </Routes>
     </BrowserRouter>
  );
}

export default App;
