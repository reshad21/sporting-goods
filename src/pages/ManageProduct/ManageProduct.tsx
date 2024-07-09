import AddProductModal from "@/components/product/AddProductModal";
import Container from "@/components/ui/Container";
import SingleProductRow from "@/components/ui/SingleProductRow";

const ManageProduct = () => {
  return (
    <Container>
      <div className="my-5">
        <AddProductModal />
      </div>
      <table className="w-full border-collapse border border-slate-400 ...">
        <thead>
          <tr>
            <th className="border border-slate-300 ...">Title</th>
            <th className="border border-slate-300 ...">Price</th>
            <th className="border border-slate-300 ...">Update</th>
            <th className="border border-slate-300 ...">Delete</th>
            <th className="border border-slate-300 ...">View</th>
          </tr>
        </thead>
        <tbody>
          <SingleProductRow />
          <SingleProductRow />
          <SingleProductRow />
          <SingleProductRow />
          <SingleProductRow />
          <SingleProductRow />
          <SingleProductRow />
          <SingleProductRow />
        </tbody>
      </table>
    </Container>
  );
};

export default ManageProduct;
