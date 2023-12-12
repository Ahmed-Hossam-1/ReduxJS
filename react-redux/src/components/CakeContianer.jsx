import { buyCake } from "../redux/cake/cakeAction";
import { connect } from "react-redux";

const CakeContianer = (props) => {
  return (
    <div>
      <h1>Number of Cake - {props.numOfCakes}</h1>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => {
      dispatch(buyCake());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContianer);
