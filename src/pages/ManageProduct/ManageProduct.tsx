import AddProductModal from "@/components/product/AddProductModal";
import Container from "@/components/ui/Container";
import { TProductdata } from "@/components/ui/ProductCard";
import SingleProductRow from "@/components/ui/SingleProductRow";
import Spinner from "@/components/ui/Spinner";
import { useGetAllProductsQuery } from "@/redux/features/Product/productApi";
import "react-loading-skeleton/dist/skeleton.css";

const ManageProduct = () => {
  const {
    data: products,
    isLoading,
    isError,
  } = useGetAllProductsQuery(undefined, {
    pollingInterval: 30000, // Poll every 30 seconds
  });

  if (isError) return <div>An error has occurred!</div>;
  if (isLoading) return <Spinner />;

  return (
    <Container>
      <div className="my-5 text-end">
        <AddProductModal />
      </div>
      <table className="w-full border-2 border-slate-300 mb-5 rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-slate-100">
            <th className="border border-slate-300 p-2">Title</th>
            <th className="border border-slate-300 p-2">Price</th>
            <th className="border border-slate-300 p-2">Update</th>
            <th className="border border-slate-300 p-2">Delete</th>
            <th className="border border-slate-300 p-2">View</th>
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
