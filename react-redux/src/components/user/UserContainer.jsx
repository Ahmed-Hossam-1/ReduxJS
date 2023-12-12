import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../../redux/userRedux/userActions";
import { connect } from "react-redux";

const UserContainer = (/*{ userData, fetchUsers }*/) => {
  const users = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  console.log(users?.users[0]?.name);
  return (
    <div>
      <h2>Users</h2>
      {users?.loading && <p>Loading...</p>}
      {users?.error && <p>{users?.error}</p>}
      {users?.users?.map((user, i) => (
        <p key={i}>{user.name}</p>
      ))}
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     userData: state.user,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchUsers: () => dispatch(fetchUsers()),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
export default UserContainer;
