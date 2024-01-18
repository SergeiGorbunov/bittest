import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "bitTest",
  baseQuery: fetchBaseQuery({ baseUrl: "https://test.gefara.xyz/api/v1/" }),
  endpoints: (builder) => ({
    getUserById: builder.query({
      query: (id) => ({
        url: `user/list/${id}`,
        method: "GET",
      }),
    }),
    getPageWithUsers: builder.query({
      query: ({ ...props }) => ({
        url: `user/list/?page=${props.page}?search=${props.search}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetUserByIdQuery, useGetPageWithUsersQuery } = userApi;
