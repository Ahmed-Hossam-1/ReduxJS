import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux/cake/cakeAction";

const HooksCakeContainer = () => {
  const state = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Number of Cake - {state}</h1>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  );
};

export default HooksCakeContainer;
