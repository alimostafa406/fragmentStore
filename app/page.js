import CategoriesCarousel from "./components/Categories";
import HeroSlider from "./components/HeroSlider";
import ProductCarousel from "./components/ProductCarousel";
import ProductGrid from "./components/ProductGrid";


export default function Home() {
  return (
    <main className="bg-gray-50">
          <HeroSlider />
          <ProductCarousel />
          <CategoriesCarousel />
          <ProductGrid />
    </main>
  );
}
