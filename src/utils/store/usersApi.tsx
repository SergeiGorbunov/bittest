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
      query: ({ page = 1, search = "" }: { page: number; search: string }) => ({
        url: `user/list/`,
        method: "GET",
        params: { page, search },
      }),
    }),
  }),
});

export const { useGetUserByIdQuery, useGetPageWithUsersQuery } = userApi;
