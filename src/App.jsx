// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Alert from './components/Alert';
import WelcomeSection from './components/WelcomeSection';
import FeaturedArtistSection from './components/FeaturedArtistSection';
import WhyRangShalaSection from './components/WhyRangShalaSection';
import Artwork from './components/Artwork';
import AcrylicPaintings from './components/AcrylicPaintings';
import MandalaArt from './components/MandalaArt';
import Anime from './components/Anime';
import Drawings from './components/Drawings';
import OilPainting from './components/OilPainting';
import ArtworkGallery from './components/ArtworkGallery';
import ArtworkDetail from './components/ArtworkDetail';
import Ayushi from './components/Ayushi';
import AddArtworkForm from './components/AddArtworkForm';
import Niyati from './components/Niyati';
import Bespoke from './components/Bespoke';
import Artist from './components/Artist';
import JoinUs from './components/JoinUs';
import CuratorConsult from './components/CuratorConsult';
import Login from './components/Login';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import AdminLogin from './components/AdminLogin'; // Add this import
import Footer from './components/Footer';
import AdminDashboard from './components/AdminDashboard';
import AddAcrylicPainting from './components/AddAcrylicPainting';
import AddOilPainting from './components/AddOilPainting'; // New import
import AddMandalaArt from './components/AddMandalaArt'; // New import
import AddAnimeDrawings from './components/AddAnimeDrawings'; // New import
import AddDrawing from './components/AddDrawing';
import './App.css';

const Home = () => (
  <>
    <WelcomeSection />
    <FeaturedArtistSection />
    <WhyRangShalaSection />
    <Artwork />
  </>
);

const About = () => <h2>About Us Page</h2>;
const Search = () => <h2>Search Page</h2>;
const Profile = () => <h2>Profile Page</h2>;
const Admin = () => <h2>Admin Panel</h2>;
const NotFound = () => <h2>404 - Page Not Found</h2>;

function App() {
  return (
    <Router>
      <div>
        <Header />
        <div style={{ margin: '20px' }}>
          <Alert successMessage={null} errorMessage={null} message={null} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/artist" element={<Artist />} />
            <Route path="/bespoke" element={<Bespoke />} />
            <Route path="/artwork" element={<Artwork />} />
            <Route path="/join" element={<JoinUs />} />
            <Route path="/consult" element={<CuratorConsult />} />
            <Route path="/niyati" element={<Niyati />} />
            <Route path="/ayushi" element={<Ayushi />} />
            <Route path="/search" element={<Search />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} /> {/* Add this route */}
            <Route path="/admin" element={<AdminLogin />} /> 
            <Route path="/admin-dashboard" element={<AdminDashboard />} />  
            <Route path="/admin/add-acrylic-painting" element={<AddArtworkForm artworkType="Acrylic Painting" />} />
            <Route path="/admin/add-oil-painting" element={<AddArtworkForm artworkType="Oil Painting" />} />
            <Route path="/admin/add-mandala-art" element={<AddArtworkForm artworkType="Mandala Art" />} />
            <Route path="/admin/add-anime-drawings" element={<AddArtworkForm artworkType="Anime Drawing" />} />
            <Route path="/admin/add-drawing" element={<AddArtworkForm artworkType="Drawing" />} />
            <Route path="/acrylic-paintings" element={<AcrylicPaintings />} />
            <Route path="/mandala-art" element={<MandalaArt />} />
            <Route path="/anime" element={<Anime />} />
            <Route path="/drawings" element={<Drawings />} />
            <Route path="/oil-painting" element={<OilPainting />} />
            <Route path="/artwork-gallery" element={<ArtworkGallery />} />
            <Route path="/artwork-detail" element={<ArtworkDetail />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
