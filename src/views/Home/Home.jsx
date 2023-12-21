import "./index.scss";
import Headermenu from "../../components/Headermenu/Headermenu";
import Organizer from "../../components/Organizer/Organizer";

const Home = ({ data }) => {
  return (
    <div className="home">
      <Headermenu />
      <div className="home__organizer">
        <Organizer
          key={data.id}
          data={data}
        />
      </div>
    </div>
  );
};

export default Home;
