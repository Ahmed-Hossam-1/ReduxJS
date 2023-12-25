import { useDispatch, useSelector } from "react-redux";
import { order, reStock } from "./feature/cake/cakeSlice";
import { useEffect } from "react";
import { fetchUsers } from "./feature/user/userSlice";

const App = () => {
  const cake = useSelector((state) => state.cake);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  console.log(user);
  return (
    <div>
      <h1>Number of cakes: {cake.numberOfCakes}</h1>
      <button onClick={() => dispatch(order())}>Buy Cake</button>
      <button onClick={() => dispatch(reStock(5))}>reStock</button>
      <h1>Users</h1>
      {user.loading ? (
        <h2>Loading...</h2>
      ) : user.error ? (
        <h2>{user.error}</h2>
      ) : (
        <div>
          {user.users.map((user) => (
            <p key={user.id}>{user.name}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
