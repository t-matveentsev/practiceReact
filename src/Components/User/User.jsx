import style from "./User.module.css";

const User = ({ name, balance, email }) => {
  return (
    <li className={style.card}>
      <h2>{name}</h2>
      <p>{balance}</p>
      <p>{email}</p>
      <button>Delete</button>
    </li>
  );
};

export default User;
