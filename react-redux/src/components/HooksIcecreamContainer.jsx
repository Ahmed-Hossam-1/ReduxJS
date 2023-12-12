import { useSelector, useDispatch } from "react-redux";
import { buyIcecream } from "../redux/icecream/icecreamActions";

const HooksIcecreamContainer = () => {
  const state = useSelector((state) => state.iceCream.numOfIceCreams);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Number of Icecream - {state}</h1>
      <button onClick={() => dispatch(buyIcecream())}>Buy Icecream</button>
    </div>
  );
};

export default HooksIcecreamContainer;
