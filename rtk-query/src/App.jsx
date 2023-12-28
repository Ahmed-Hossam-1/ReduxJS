// import { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchUsers } from "./feature/user/actions";

import Users from "./users";

const App = () => {
  // const dispatch = useDispatch();
  // const { users, isLoading, error } = useSelector((state) => state.user);

  // useEffect(() => {
  //   dispatch(fetchUsers());
  // }, [dispatch]);

  return (
    <div>
      {/* <h1>
        {isLoading && <div>isLoading...</div>}
        {users.map((user) => (
          <div key={user.id}>{user.name}</div>
        ))}
        {error && !isLoading && <div>{error}</div>}
      </h1> */}
      <Users />
    </div>
  );
};

export default App;

// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// export interface Post {
//   id: string
//   name: string
// }

// type PostsResponse = Post[]

// export const api = createApi({
//   baseQuery: fetchBaseQuery({ baseUrl: '/' }),
//   tagTypes: ['Post'],
//   endpoints: (build) => ({
//     getPosts: build.query<PostsResponse, void>({
//       query: () => 'posts',
//       providesTags: (result) =>
//         result
//           ? [
//               ...result.map(({ id }) => ({ type: 'Post' as const, id })),
//               { type: 'Post', id: 'LIST' },
//             ]
//           : [{ type: 'Post', id: 'LIST' }],
//     }),
//     addPost: build.mutation<Post, Partial<Post>>({
//       query: (body) => ({
//         url: `posts`,
//         method: 'POST',
//         body,
//       }),
//       invalidatesTags: [{ type: 'Post', id: 'LIST' }],
//     }),
//     getPost: build.query<Post, string>({
//       query: (id) => `posts/${id}`,
//       providesTags: (result, error, id) => [{ type: 'Post', id }],
//     }),
//     updatePost: build.mutation<void, Pick<Post, 'id'> & Partial<Post>>({
//       query: ({ id, ...patch }) => ({
//         url: `posts/${id}`,
//         method: 'PUT',
//         body: patch,
//       }),
//       invalidatesTags: (result, error, { id }) => [{ type: 'Post', id }],
//     }),
//     deletePost: build.mutation<{ success: boolean; id: number }, number>({
//       query(id) {
//         return {
//           url: `posts/${id}`,
//           method: 'DELETE',
//         }
//       },
//       invalidatesTags: (result, error, id) => [{ type: 'Post', id }],
//     }),
//   }),
// })

// export const {
//   useGetPostQuery,
//   useGetPostsQuery,
//   useAddPostMutation,
//   useUpdatePostMutation,
//   useDeletePostMutation,
// } = api
