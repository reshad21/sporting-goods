import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        // getAllProducts: builder.query({
        //     query: () => ({
        //         url: '/products',
        //         method: 'GET',
        //     }),
        //     providesTags: ['sports']
        // }),

        //* better filter approch
        getAllProducts: builder.query({
            query: (category) => {
                const params = new URLSearchParams();
                if (category) {
                    params.append('category', category);
                }
                return {
                    url: `/products`,
                    method: 'GET',
                    params: params
                }
            },
            providesTags: ['sports']
        }),


        getProductById: builder.query({
            query: (id) => ({
                url: `/product/${id}`,
                method: 'GET',
            }),
            providesTags: (id) => [{ type: 'sports', id }]
        }),

        getAllFilterProducts: builder.query({
            query: ({ category, brand, rating, price }) => {
                console.log("RTK QUERY = >", category, brand, rating, price);

                // Using URLSearchParams to construct query string
                const params = new URLSearchParams();

                if (category) params.append('category', category);
                if (brand) params.append('brand', brand);
                if (rating !== null) params.append('rating', rating.toString());
                if (price !== null) params.append('price', price.toString());

                return {
                    url: `/products?${params.toString()}`,
                    method: 'GET'
                };
            }
        }),

        searchProducts: builder.query({
            query: (searchTerm) => {
                const params = new URLSearchParams();
                if (searchTerm) {
                    params.append('searchTerm', searchTerm);
                }
                return {
                    url: `/products/search`,
                    method: 'GET',
                    params: params,
                };
            },
            providesTags: ['sports'],
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

    }),
});

export const { useAddProductsMutation, useGetAllProductsQuery, useGetAllFilterProductsQuery, useSearchProductsQuery, useDeleteProductMutation, useUpdateProductMutation, useGetProductByIdQuery, } = productApi;