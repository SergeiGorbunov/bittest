import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const transactionsApi = createApi({
  reducerPath: "transactionsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://test.gefara.xyz/api/v1/" }),
  endpoints: (builder) => ({
    getPageWithTransactions: builder.query({
      query: (id) => ({
        url: `/user/${id}/transactions`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetPageWithTransactionsQuery } = transactionsApi;

export default transactionsApi;
