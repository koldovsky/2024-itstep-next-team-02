import Features from './components/features/features';
import FlashSale from './components/flashSales/FlashSale';
import FlashSaleGoods from './components/flashSalesGoods/FlashSaleGoods';
import NewArrival from './components/newArrival/NewArrival';
import NewArrivalItems from './components/newArrivalItems/newArrivalItems';
import Slider from './components/sliderOnHeader/Slider';
import ViewAllButton from './components/viewAllButton/ViewAllButton';

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
    </div>
  );
}

export default Home;
