const User = ({ name, balance, picture }) => {
  return (
    <div>
      <h2>{name}</h2>
      <img src={picture} alt="" />
      <p>{balance}</p>
    </div>
  );
};

export default User;
