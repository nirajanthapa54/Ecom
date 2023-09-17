import FeatureProduct from './component/FeatureProduct';
import HeroSection from './component/HeroSection';
import Services from './component/Services';
import Trusted from './component/Trusted';

const Home = () => {
  const data = {
    name: "thapa store",
  };

  return (
    <>
      <HeroSection myData={data} />
     <FeatureProduct/>
     <Services/>
      <Trusted />
    </>
  );
};

export default Home;