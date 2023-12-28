import { useState } from "react";
import {
  useCreateUserMutation,
  useGetUsersQuery,
} from "./feature/user/api/apiSlice";

const Users = () => {
  // const dispatch = useDispatch();
  // const { users, isLoading, error } = useSelector((state) => state.user);
  const [inputValue, setInputValue] = useState("");
  const { data: users, isLoading, error } = useGetUsersQuery();

  const [createUser, { isError, isLoading: loadCreate, isSuccess }] =
    useCreateUserMutation();

    /*{
    onSuccess: () => {
      dispatch(fetchUsers());
    },
  }*/

  const addUser = () => {
    createUser(inputValue);
    setInputValue("");
  };
  return (
    <div>
      {isLoading && !error && <h1>Loading...</h1>}
      {!isLoading && error ? <p>Error : {error}</p> : null}
      {!isLoading && users && <div>Total: {users.length}</div>}

      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addUser}>Add user</button>
      </div>
      <div>
        {!isLoading &&
          users?.map((user, index) => <div key={index}>{user.name}</div>)}
      </div>
    </div>
  );
};

export default Users;
