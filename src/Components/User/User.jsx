import clsx from "clsx";
import style from "./User.module.css";

const User = ({ name, balance, email, isOpenToWork }) => {
  return (
    <li className={style.card}>
      <h2>{name}</h2>
      <p>{balance}</p>
      <p>{email}</p>
      <p
        className={clsx(
          style.status,
          isOpenToWork ? style.greenAccent : style.redAccent
        )}
      >
        {isOpenToWork ? "Looking for a job" : "Not looking for work"}
      </p>
      <button>Delete</button>
    </li>
  );
};

export default User;
