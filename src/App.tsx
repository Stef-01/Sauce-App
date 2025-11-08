import { Background } from "./components/Background";
import { Footer } from "./sections/Footer";
import { MainContent } from "./sections/MainContent";
import { Navbar } from "./sections/Navbar/Navbar";

export function App() {
  return (
    <>
      <Background />
      <Navbar />
      <MainContent />
      <Footer />
    </>
  );
}
