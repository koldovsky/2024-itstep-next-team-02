import Categories from './components/categories/Categories';
import CategoriesGoods from './components/categoriesGoods/CategoriesGoods';
import FlashSale from './components/flashSales/FlashSale';
import FlashSaleGoods from './components/flashSalesGoods/FlashSaleGoods';
import Line from './components/line/Line';
import Slider from './components/sliderOnHeader/Slider';
import ViewAllButton from './components/viewAllButton/ViewAllButton';


function Home() {
  return (
    <div>
      <Slider />
      <FlashSale />
      <FlashSaleGoods />
      <ViewAllButton />
      <Line />
      <Categories />

      <Line />
    </div>
  );
}

export default Home;
