import Header from "./components/Header/Header";
import User from "./components/User/User";
import styles from "./components/User/User.module.css";

import userData from "./assets/users.json";

const App = () => {
  return (
    <>
      <Header />
      <h2>Lesson 2. Styles</h2>
      <ul className={styles.wrapper}>
        {userData.map((user) => (
          <User key={user.id} {...user} />
        ))}
      </ul>
    </>
  );
};

export default App;
