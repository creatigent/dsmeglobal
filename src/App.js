import React, { lazy, Suspense, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "./components/Loader";
import { loadFull } from "tsparticles";
import Footer from "./components/Footer";
import Portfolio__detail from "./screens/Portfolio__detail";
import "./styles/App.scss";
import "./styles/Footer.scss";
import "./styles/portfoliodetail.scss";
import "./styles/About__sec.scss";
import "animate.css";
import "swiper/css";
import ContactSection from "./components/ContactSection";
import Services from "./screens/Services";
import ServicesWebDev from "./screens/ServicesWebDev";
import ServiceUIUX from "./screens/ServiceUIUX";
import ServiceMobDev from "./screens/ServiceMobDev";
import QuoteScreen from "./screens/QuoteScreen";
const MeetUs = lazy(() => import("./screens/MeetUs"));
const Home = lazy(() => import("./screens/Home"));
const ContactUs = lazy(() => import("./screens/ContactUs"));
const ServiceDetails = lazy(() => import("./screens/ServiceDetails"));
const Portfolio = lazy(() => import("./screens/Portfolio"));
const Pricing = lazy(() => import("./screens/Pricing"));
const AboutUs = lazy(() => import("./screens/AboutUs"));
const Blogs = lazy(() => import("./screens/Blogs"));
const BlogDetails = lazy(() => import("./screens/BlogDetails"));
const Careers = lazy(() => import("./screens/Careers"));
const Header = lazy(() => import("./components/Header"));
const BackgroundParticals = lazy(() => import("./BackgroundParticals"));

export default function App() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };
  const [isContactSection, setIsContactSection] = useState(true);

  return (
    <Suspense fallback={<Loader style={{ height: "100vh" }} />}>
      <BackgroundParticals particlesInit={particlesInit} />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/web-dev" element={<ServicesWebDev />} />
        <Route path="/services/uiux" element={<ServiceUIUX />} />
        <Route path="/services/mob-dev" element={<ServiceMobDev />} />
        <Route path="/service-details" element={<ServiceDetails />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/blog-details" element={<BlogDetails />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route
          path="/quote"
          element={<QuoteScreen setIsContactSection={setIsContactSection} />}
        />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/portfolio-detail" element={<Portfolio__detail />} />
        <Route path="/meet-us" element={<MeetUs />} />
      </Routes>
      {isContactSection ? <ContactSection /> : null}
      <Footer />
    </Suspense>
  );
}
