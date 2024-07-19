import { z } from "zod";
import { Product } from "../interface/Product";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import instance from "../axios";

type Props = {
  onSubmitProduct: (data: Product) => void;
};

const ProductSchema = z.object({
  title: z.string().min(6),
  price: z.number().min(0),
  description: z.string().optional(),
});

const ProductForm = ({ onSubmitProduct }: Props) => {
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Product>({
    resolver: zodResolver(ProductSchema),
  });

  if (id) {
    useEffect(() => {
      (async () => {
        try {
          const { data } = await instance.get(`/products/${id}`);
          reset(data);
        } catch (error) {
          console.log(error);
        }
      })();
    }, [id]);
  }
  return (
    <div>
      <form
        action=""
        onSubmit={handleSubmit((data) => onSubmitProduct({ ...data, id }))}
      >
        <h1>{id ? "Edit product" : "Add new product"}</h1>
        <div className="*:mb-3">
          <label htmlFor="title" className="form-lable">
            title
          </label>
          <input
            type="text"
            className="form-control"
            {...register("title", { required: true })}
          />
          {errors.title && (
            <p className="text-danger">{errors.title.message}</p>
          )}
        </div>
        <div className="*:mb-3">
          <label htmlFor="price" className="form-lable">
            price
          </label>
          <input
            type="text"
            className="form-control"
            {...register("price", { required: true, valueAsNumber: true })}
          />
          {errors.price && (
            <p className="text-danger">{errors.price.message}</p>
          )}
        </div>
        <div className="*:mb-3">
          <label htmlFor="description" className="form-lable">
            description
          </label>
          <input
            type="text"
            className="form-control"
            {...register("description")}
          />
        </div>
        <div className="mb-3">
          <button className="bg-blue-500">
            {id ? "Edit Product" : "Add new product"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
