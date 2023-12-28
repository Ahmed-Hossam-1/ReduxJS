import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../../utils/api";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ["Users"], // Define tag // name tag Revalidate (useGetUsersQuery)
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => `/users`, // name route
      providesTags: ["Users"], // request again // name tag Revalidate
    }),
    createUser: builder.mutation({
      query: (name) => ({
        // send data to server
        url: `/users`, // name route
        method: "POST",
        body: { name },
      }),
      invalidatesTags: ["Users"], // request again // name tag Revalidate
    }),
  }),
});

export const { useGetUsersQuery, useCreateUserMutation } = apiSlice;
