import Hero from "./components/hero";
import PopularExam from "./components/popularExam";

function HomeModule() {
  return (
    <div className="text-center space-y-10 bg-background w-full h-screen ">
      <Hero />
      <PopularExam/>
     
    </div>
  );
}

export default HomeModule;
