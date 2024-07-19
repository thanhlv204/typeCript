import { Link } from "react-router-dom";
import { Product } from "../interface/Product";

type Props = {
  products: Product[];
  removeProduct: (id: number) => void;
};

const Dashboard = ({ products, removeProduct }: Props) => {
  return (
    <div>
      <h1>Hello admin</h1>
      <Link to={`/product-add`} className="btn btn-primary">
        Add new product
      </Link>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>{item.description}</td>
              <td>
                <Link
                  to={`/product-edit/${item.id}`}
                  className="btn btn-warning mb-3"
                >
                  UPdate
                </Link>
                <button
                  onClick={() => removeProduct(item.id!)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
