import Banner from "../../components/Banner";
import Layout from "../../components/Layout";
import "./home.scss";

const Home = () => {
  return (
    <div className="home-container">
      <Layout>
        <Banner />
        <div>Filters goes here</div>
        <div>Nearby restaurants goes here</div>
      </Layout>
    </div>
  );
};

export default Home;
