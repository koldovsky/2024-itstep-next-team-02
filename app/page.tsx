import Features from "./components/features/features";
import FlashSale from "./components/flashSales/FlashSale";
import NewArrival from "./components/newArrival/NewArrival";
import NewArrivalItems from "./components/newArrivalItems/newArrivalItems";
import Categories from "./components/categories/Categories";
import Line from "./components/line/Line";
import Slider from "./components/sliderOnHeader/Slider";
import ViewAllButton from "./components/viewAllButton/ViewAllButton";
import BestSellProducts from "./components/bestSellProducts";
import ExploreOurProducts from "./components/exploreOurProducts/ExploreOurProducts";

function Home() {
  return (
    <div>
      <Slider />
      <FlashSale />
      <Line />
      <Categories />
      <Line />
      <BestSellProducts /> 
      <Line />
      <ExploreOurProducts />
      <Line />
      <NewArrival />
      <NewArrivalItems />
      <Features />
      <ViewAllButton />
    </div>
  );
}

export default Home;
