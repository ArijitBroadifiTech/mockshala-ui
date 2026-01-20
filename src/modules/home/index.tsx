import Hero from "./components/hero";
import PopularExam from "./components/popularExam";
import WhyChoose from "./components/whyChoose";

function HomeModule() {
  return (
    <div className="text-center space-y-25 bg-gray-100/50 w-full h-screen ">
      <Hero />
      <PopularExam/>
      <WhyChoose />
    </div>
  );
}

export default HomeModule;
