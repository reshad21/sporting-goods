import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        updateProduct: builder.mutation({
            query: ({ id, data }) => {
                console.log("Updating product with id:", id, "and data:", data);
                return {
                    url: `/product/${id}`,
                    method: 'PUT',
                    body: data,
                }
            },
            invalidatesTags: ['sports']
        }),

        getAllProducts: builder.query({
            query: () => ({
                url: '/products',
                method: 'GET',
            }),
            providesTags: ['sports']
        }),

        getProductById: builder.query({
            query: (id) => ({
                url: `/product/${id}`,
                method: 'GET',
            }),
            providesTags: (result, error, id) => [{ type: 'sports', id }]
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

        deleteProduct: builder.mutation({
            query: (id) => {
                console.log("Deleting todo with id:", id);
                return {
                    url: `/product/${id}`,
                    method: 'DELETE',
                }
            },
            invalidatesTags: ['sports']
        }),


    }),
});

export const { useAddProductsMutation, useGetAllProductsQuery, useDeleteProductMutation, useUpdateProductMutation, useGetProductByIdQuery } = productApi;