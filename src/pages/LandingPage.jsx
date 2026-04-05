import Navbar from "@/components/Navbar";
import HomePage from "./HomePage";
import LandingPage2 from "./LandingPage2";
import LandingPage3 from "./LandingPage3";
import Footer from "./Footer";

function LandingPage() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-gray-50">
      
      {/* Sticky Navbar */}
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      {/* Main Content with consistent spacing */}
      <main className="flex flex-col gap-20">
        <HomePage />
        <LandingPage2 />
        <LandingPage3 />
      </main>

      <Footer />
    </div>
  )
} export default LandingPage
