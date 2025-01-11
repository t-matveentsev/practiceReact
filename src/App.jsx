import Header from "./components/Header/Header";
import User from "./components/User/User";
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";
import style from "./App.module.css";
import userData from "./assets/users.json";
import img from "./assets/IMG_3807.JPG";
import { GiAgave } from "react-icons/gi";

const App = () => {
  return (
    <>
      <Header />
      <Modal title="Test modal" />
      <Button>Click</Button>
      <Button>
        <GiAgave />
      </Button>
      <h2>Lesson 2. Styles</h2>
      <ul>
        {userData.map((user) => (
          <User key={user.id} {...user} />
        ))}
      </ul>
      <div className={style.wrapper}>
        <div className={style.boxOne}>First Box</div>
        <div className={style.boxTwo}>Second Box</div>
      </div>
      <img src={img} alt="" />
    </>
  );
};

export default App;
