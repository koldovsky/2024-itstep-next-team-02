import FlashSale from './components/flashSales/FlashSale';
import FlashSaleGoods from './components/flashSalesGoods/FlashSaleGoods';
import Slider from './components/sliderOnHeader/Slider';
import ViewAllButton from './components/viewAllButton/ViewAllButton';

function Home() {
  return (
    <div>
      <Slider />
      <FlashSale />
      <FlashSaleGoods />
      <ViewAllButton />
    </div>
  );
}

export default Home;
