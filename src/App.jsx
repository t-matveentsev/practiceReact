import Header from "./components/Header/Header";
import User from "./components/User/User";
import style from "./App.module.css";

import userData from "./assets/users.json";

const App = () => {
  return (
    <>
      <Header />
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
    </>
  );
};

export default App;
