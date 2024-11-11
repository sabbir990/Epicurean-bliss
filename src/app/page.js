import Banner from "@/Components/Banner";
import EstateSection from "@/Components/EstateSection";
import Footer from "@/Components/Footer";
import NewsLetter from "@/Components/NewsLetter";

export default function Home() {
  return (
    <div>
      <Banner />
      <div className="mt-10">
        <EstateSection />
      </div>
      <div className="mt-10">
        <NewsLetter />
      </div>
      <Footer />
    </div>
  );
}
