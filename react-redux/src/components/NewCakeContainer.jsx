import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux/cake/cakeAction";
import { useState } from "react";
import { BUY_CAKE } from "../redux/cake/actionTypes";

const NewCakeContainer = () => {
  const [number, setNumber] = useState(1);
  const state = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <>
      ==================NewCakeContainer==================
      <h1>Number of Cake - {state}</h1>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => dispatch(buyCake(number))}>
        buy {number} cake
      </button>
    </>
  );
};

export default NewCakeContainer;
