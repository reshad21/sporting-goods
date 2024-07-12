import AddProductModal from "@/components/product/AddProductModal";
import Container from "@/components/ui/Container";
import { TProductdata } from "@/components/ui/ProductCard";
import SingleProductRow from "@/components/ui/SingleProductRow";
import { useGetAllProductsQuery } from "@/redux/features/Product/productApi";

const ManageProduct = () => {
  const {
    data: products,
    isLoading,
    isError,
  } = useGetAllProductsQuery(undefined);

  if (isError) return <div>An error has occurred!</div>;
  if (isLoading) return <div>An error has occurred!</div>;
  return (
    <Container>
      <div className="my-5">
        <AddProductModal />
      </div>
      <table className="w-full border-2 border-slate-300 mb-5">
        <thead>
          <tr>
            <th className="border border-slate-300">Title</th>
            <th className="border border-slate-300">Price</th>
            <th className="border border-slate-300">Update</th>
            <th className="border border-slate-300">Delete</th>
            <th className="border border-slate-300">View</th>
          </tr>
        </thead>
        <tbody>
          {products?.data?.map((product: TProductdata) => (
            <SingleProductRow {...product} key={product._id} />
          ))}
        </tbody>
      </table>
    </Container>
  );
};

export default ManageProduct;
