// import logo from './logo.svg';
// import './App.css';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Footer from './pages/shared/Footer/Footer';
import Login from './pages/shared/Login/Login';
import NavBar from './pages/shared/Navbar/Navbar';
import Signup from './pages/shared/Signup/Signup';
import { Toaster } from 'react-hot-toast';
import Blogs from './pages/Blogs/Blogs';
import NotFound from './pages/shared/NotFound/NotFound';
import RequireAuth from './pages/shared/RequireAuth/RequireAuth';
import Cars from './pages/home/Cars.js/Cars';

function App() {
  return (
    <>
      <Container className="App">
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/blogs" element={<RequireAuth><Blogs /></RequireAuth>} />
          <Route path="/category/:cartCategory" element={<RequireAuth><Cars /></RequireAuth>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <Toaster />
      </Container>

    </>
  );
}

export default App;
