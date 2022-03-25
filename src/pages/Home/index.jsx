import Banner from "../../components/Banner";
import Layout from "../../components/Layout";
import Restaurants from "../../components/Restaurants";

const Home = () => {
  return (
    <div className="home-container">
      <Layout>
        <Banner />
        <Restaurants />
      </Layout>
    </div>
  );
};

export default Home;
