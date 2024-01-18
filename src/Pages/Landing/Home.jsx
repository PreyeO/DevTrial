import Companies from "../../Components/Sections/Companies";
import Features from "../../Components/Sections/Features";
import Hero from "../../Components/Sections/Hero";

const Home = () => {
  return (
    <main className=" font-barlow text-white text-center">
      <Hero />
      <Features />
      <Companies />
    </main>
  );
};

export default Home;
