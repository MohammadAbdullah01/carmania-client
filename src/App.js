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
import Dashboard from './pages/Dashboard/Dashboard';
import MyOrders from './pages/Dashboard/MyOrders';
import RequireAdmin from './pages/shared/RequireAuth/RequireAdmin';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './firebase/firebase.init';
import useRole from './hooks/useRole';
import MyCars from './pages/Dashboard/MyCars';
import AddCar from './pages/Dashboard/AddCar';
import { useEffect, useState } from 'react';
import RequireSeller from './pages/shared/RequireAuth/RequireSeller';
import RequireUser from './pages/shared/RequireAuth/RequireUser';
import ViewAllSellers from './pages/Dashboard/ViewAllSellers';
import ViewAllBuyers from './pages/Dashboard/ViewAllBuyers';

function App() {
  const products = [
    {
      name: "Zooman SD",
      category: "microbus",
      sellerName: "Mohammad Abdullah",
      img: "https://s-media-cache-ak0.pinimg.com/736x/5d/8c/6c/5d8c6c1faf0a6abc942a85dffd8ac88f.jpg",
      originalPrice: 35500,
      resalePrice: 25600,
      yearsOfUse: 5,
      postDate: "22-11-2022",
      location: "Nawabgonj, Dhaka",
      sellerEmail: "mohammadabdullah@gmail.com",
      sold: false,
      advertised: false
    },
    {
      name: "VW Camper Van",
      category: "microbus",
      sellerName: "Mustak",
      img: "https://live.staticflickr.com/5468/6964323866_94811969cc_b.jpg",
      originalPrice: 40500,
      resalePrice: 29000,
      yearsOfUse: 2,
      postDate: "30-10-2022",
      location: "Bandura, Barisal",
      sellerEmail: "mustak@gmail.com",
      sold: false,
      advertised: false
    },
    {
      name: "Volkswagen",
      category: "microbus",
      sellerName: "Minhaz",
      img: "https://images7.alphacoders.com/328/328809.jpg",
      originalPrice: 50000,
      resalePrice: 35800,
      yearsOfUse: 2,
      postDate: "26-10-2022",
      location: "85-LA, New York",
      sellerEmail: "minhaz@gmail.com",
      sold: false,
      advertised: false
    },

    {
      name: "Emission Zero",
      category: "electric",
      sellerName: "Mohammad Abdullah",
      img: "https://www.discoverev.co.uk/images/comparison/top-5-used-electric-cars-under-10k/smart_5/smart_5[6012]_480px.jpg",
      originalPrice: 25000,
      resalePrice: 18500,
      yearsOfUse: 3,
      postDate: "20-10-2022",
      location: "Nawabgonj, Dhaka",
      sellerEmail: "mohammadabdullah@gmail.com",
      sold: false,
      advertised: false
    },
    {
      name: "Hava Driven",
      category: "electric",
      sellerName: "Mustak",
      img: "https://i.ytimg.com/vi/N7qLp2XvdjY/maxresdefault.jpg",
      originalPrice: 18500,
      resalePrice: 16500,
      yearsOfUse: 1,
      postDate: "1-09-2022",
      location: "Bandura, Barisal",
      sellerEmail: "mustak@gmail.com",
      sold: false,
      advertised: false
    },
    {
      name: "Singuls-300",
      category: "electric",
      sellerName: "Minhaz",
      img: "https://carsguide-res.cloudinary.com/image/upload/f_auto%2Cfl_lossy%2Cq_auto%2Ct_default/v1/editorial/dp/images/uploads/holden-volt-Hero.jpg",
      originalPrice: 40000,
      resalePrice: 38600,
      yearsOfUse: 3,
      postDate: "20-10-2022",
      location: "85-LA, New York",
      sellerEmail: "minhaz@gmail.com",
      sold: false,
      advertised: false
    },

    {
      name: "Lion-S8",
      category: "luxury",
      sellerName: "Mohammad Abdullah",
      img: "https://peplifestyle.com/wp-content/uploads/2021/06/IMG_2216.jpg",
      originalPrice: 90000,
      resalePrice: 75500,
      yearsOfUse: 1,
      postDate: "30-08-2022",
      location: "Nawabgonj, Dhaka",
      sellerEmail: "mohammadabdullah@gmail.com",
      sold: false,
      advertised: false
    },
    {
      name: "Falcon MS",
      category: "luxury",
      sellerName: "Mustak",
      img: "https://www.usedcars-cars.com/wp-content/uploads/2019/03/second-hand-cars-for-sale-near-me-cheap-fresh-cheap-vehicles-for-sale-near-me-elegant-used-cars-for-sell-by-owner-of-second-hand-cars-for-sale-near-me-cheap.jpg",
      originalPrice: 120000,
      resalePrice: 90500,
      yearsOfUse: 2,
      postDate: "15-06-2022",
      location: "Bandura, Barisal",
      sellerEmail: "mustak@gmail.com",
      sold: false,
      advertised: false
    },
    {
      name: "Eagle 5N",
      category: "luxury",
      sellerName: "Minhaz",
      img: "https://luxuryride.in/wp-content/uploads/2018/10/Untitled-2.jpg",
      originalPrice: 150000,
      resalePrice: 120000,
      yearsOfUse: 1,
      postDate: "05-11-2022",
      location: "85-LA, New York",
      sellerEmail: "minhaz@gmail.com",
      sold: false,
      advertised: false
    }
  ]
  const [reLoad, setReload] = useState(false)
  const [user, loading, error] = useAuthState(auth);
  const [userRole, userLoading] = useRole(user, reLoad, setReload);
  const [thisRouteReload, setThisRouteReload] = useState(false)
  useEffect(() => {
    fetch(`https://carmania-server-render.onrender.com/orders/{user.?email}`)
      .then(res => res.json())
      .then(data => {
        setThisRouteReload(!thisRouteReload)
      })
    fetch(`https://carmania-server-render.onrender.com/sellercars/${user?.email}`)
      .then(res => res.json())
      .then(data => {
        setThisRouteReload(!thisRouteReload)
      })
  }, [user, userRole])
  return (
    <>
      <Container className="App">
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login reLoad={reLoad} setReload={setReload} />} />
          <Route path="/signup" element={<Signup reLoad={reLoad} setReload={setReload} />} />
          <Route path="/blogs" element={<Blogs />} />
          {/* dashboard for users  */}
          {userRole == "user" && <> <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
            <Route index element={<RequireUser><MyOrders /></RequireUser>}></Route>
          </Route> </>}
          {/* dashboard for sellers  */}
          {userRole == "seller" && <> <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
            <Route index element={<RequireSeller><MyCars /></RequireSeller>}></Route>
            <Route path="AddCar" element={<RequireSeller><AddCar /></RequireSeller>}></Route>
          </Route> </>}
          {/* dashboard for admin  */}
          {userRole == "admin" && <> <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
            <Route index element={<RequireAdmin><ViewAllSellers /></RequireAdmin>}></Route>
            <Route path="allbuyers" element={<RequireAdmin><ViewAllBuyers /></RequireAdmin>}></Route>
          </Route> </>}

          {/* <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
            <Route index element={<MyOrders />}></Route>
            <Route index element={<MyCars />}></Route>
            <Route path="addcar" element={<AddCar />}></Route>
          </Route> */}


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
