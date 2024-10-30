import Features from './components/features/features';
import FlashSale from './components/flashSales/FlashSale';
import FlashSaleGoods from './components/flashSalesGoods/FlashSaleGoods';
import NewArrival from './components/newArrival/NewArrival';
import NewArrivalItems from './components/newArrivalItems/newArrivalItems';
import Categories from './components/categories/Categories';
import CategoriesGoods from './components/categoriesGoods/CategoriesGoods';
import FlashSale from './components/flashSales/FlashSale';
import FlashSaleGoods from './components/flashSalesGoods/FlashSaleGoods';
import Line from './components/line/Line';
import Slider from './components/sliderOnHeader/Slider';
import ViewAllButton from './components/viewAllButton/ViewAllButton';
import BestSellProducts from "./components/bestSellProducts";


function Home() {
  return (
    <div>
      <Slider />
      <FlashSale />
      <FlashSaleGoods />
      <NewArrival/>
      <NewArrivalItems/>
      <Features/>
      <ViewAllButton />
      <Line />
      <Categories />

      <Line />
      <BestSellProducts />;
    </div>
  );
}

export default Home;
