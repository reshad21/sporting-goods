import { baseApi } from "../../api/baseApi";

const filterApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllFilterProducts: builder.query({
            query: ({ category, brand, rating, price }) => {
                console.log("RTK QUERY = >", category, brand, rating, price);
                let queryStr = `products?`;
                if (category) queryStr += `category=${category}&`;
                if (brand) queryStr += `brand=${brand}&`;
                if (rating) queryStr += `rating=${rating}&`;
                if (price) queryStr += `price=${price}&`;
                return queryStr.slice(0, -1);
            },
        }),
    }),
});

export const { useGetAllFilterProductsQuery } = filterApi;