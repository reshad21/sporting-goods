import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        getAllProducts: builder.query({
            query: () => ({
                url: '/products',
                method: 'GET',
            }),
            providesTags: ['sports']
        }),

        addProducts: builder.mutation({
            query: (data) => {
                console.log("inside base api=>", data);
                return {
                    url: '/product',
                    method: 'POST',
                    body: data,
                }
            },
            invalidatesTags: ['sports']
        }),
    }),
});

export const { useAddProductsMutation, useGetAllProductsQuery } = productApi;