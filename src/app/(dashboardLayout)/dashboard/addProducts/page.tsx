"use client";
import { addProducts } from "@/utils/AddProducts";
import { useForm, SubmitHandler } from "react-hook-form";

export type ProductValues = {
  image: string;
  title: string;
  price: number;
  discount: number;
  rating: number;
  category: string;
  description: string;
};

const AddProducts = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProductValues>();

  const onSubmit: SubmitHandler<ProductValues> = async (data) => {
    try {
      const res = await addProducts(data);
      console.log(res);
      reset();
    } catch (err: any) {
      console.error(err.message);
      throw new Error(err.message);
    }
  };

  return (
    <div>
      <div className="my-10">
        <h1 className="text-center text-4xl mb-5">Add your product</h1>
        <div className="">
          <div className="card w-[50%] mx-auto h-[80%] shadow-xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Image *</span>
                </label>
                <input
                  {...register("image", { required: true })}
                  placeholder="image here"
                  className="input input-bordered"
                />
                {errors.image && (
                  <small className="text-red-500 ">Image is required</small>
                )}
              </div>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Title *</span>
                </label>
                <input
                  {...register("title", { required: true })}
                  placeholder="title"
                  className="input input-bordered"
                />
                {errors.title && (
                  <small className="text-red-500 ">Title is required</small>
                )}
              </div>
              <div className="flex justify-between gap-5">
                <div className="form-control  w-full">
                  <label className="label">
                    <span className="label-text">Price *</span>
                  </label>
                  <input
                    type="number"
                    min={1}
                    {...register("price", { required: true })}
                    placeholder="price"
                    className="input input-bordered"
                  />
                  {errors.price && (
                    <small className="text-red-500 ">Price is required</small>
                  )}
                </div>
                <div className="form-control  w-full">
                  <label className="label">
                    <span className="label-text">Discount price *</span>
                  </label>
                  <input
                    type="number"
                    min={1}
                    {...register("discount", { required: true })}
                    placeholder="discount"
                    className="input input-bordered"
                  />
                  {errors.discount && (
                    <small className="text-red-500 ">Price is required</small>
                  )}
                </div>
              </div>
              <div className="flex justify-between gap-5">
                <div className="form-control  w-full">
                  <label className="label">
                    <span className="label-text">Rating *</span>
                  </label>
                  <input
                    type="number"
                    min={1}
                    {...register("rating", { required: true })}
                    placeholder="rating"
                    className="input input-bordered"
                  />
                  {errors.price && (
                    <small className="text-red-500 ">Rating is required</small>
                  )}
                </div>
                <div className="form-control  w-full">
                  <label className="label">
                    <span className="label-text">Category *</span>
                  </label>
                  <select
                    {...register("category", { required: true })}
                    className="select select-bordered w-full"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select Category
                    </option>
                    <option value="meat">Meat</option>
                    <option value="fish">Fish</option>
                    <option value="vegetable">Vegetable</option>
                    <option value="fruits">Fruits</option>
                    <option value="noodles">Noodles</option>
                    <option value="fastfood">FastFood</option>
                  </select>
                  {errors.category && (
                    <small className="text-red-500 ">
                      Category is required
                    </small>
                  )}
                </div>
              </div>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Description *</span>
                </label>
                <input
                  {...register("description", { required: true })}
                  placeholder="description"
                  className="input input-bordered"
                />
                {errors.description && (
                  <small className="text-red-500 ">
                    Description is required
                  </small>
                )}
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-accent btn-outline">
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProducts;
