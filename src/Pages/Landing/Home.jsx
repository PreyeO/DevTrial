import Companies from "../../Components/Sections/Companies";
import Features from "../../Components/Sections/Features";
import Hero from "../../Components/Sections/Hero";
import Footer from "../../Layouts/Footer";

const Home = () => {
  return (
    <main className=" font-barlow text-white text-center">
      <Hero />
      <Features />
      <Companies />
      <Footer />
    </main>
  );
};

export default Home;
