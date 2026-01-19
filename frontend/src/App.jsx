import { Routes, Route } from "react-router-dom"

import Header from "./components/Header"
import About from "./components/About"
import WhyChooseUs from "./components/WhyChooseUs"
import Services from "./components/Services"
import Pricing from "./components/Pricing"
import Reviews from "./components/Reviews"
import Footer from "./components/Footer"

import Gallery from "./pages/Gallery"
import Hero from "./components/Hero"
import NavigationBar from "./components/NavigationBar"
import BookAppointment from "./pages/BookAppointement"
import InquiryForm from "./pages/InquiryForm"

function App() {
  return (
    <>
      <Header />

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <WhyChooseUs />
              <Services />
              <Pricing />
              <Reviews />
            </>
          }
        />

        {/* Gallery Page */}
        <Route path="/gallery" element={<Gallery />} />
        {/* Apointment Form */}
        <Route path="/book-appointment" element={<BookAppointment />} />
        {/* Inquiry Form */}
        <Route path="/inquiry" element={<InquiryForm />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
