import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "bitTest",
  baseQuery: fetchBaseQuery({ baseUrl: "https://test.gefara.xyz/api/v1/" }),
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => ({
        url: "user/list",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllUsersQuery } = userApi;
