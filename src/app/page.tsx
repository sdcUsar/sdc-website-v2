import Footer from "@/components/Footer";
import HeroBanner from "@/components/Hero Section/HeroBanner";
import Navbar from "@/components/Navbar/Navbar";
import PhotoAlbum from "@/components/PhotoAlbum";
import AboutUs from "@/components/about-us/about";

export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <HeroBanner />
      <AboutUs />
      {/* Add other sections or components here */}
      <main className="flex min-h-screen flex-col items-center justify-between bg-black">
        <PhotoAlbum />
      <Footer />
      </main>
      
    </div>
  );
}
