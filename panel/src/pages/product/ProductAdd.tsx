import { Card } from "@material-tailwind/react";
import BreadCrumb from "../../components/BreadCrumb";
import { useForm, SubmitHandler } from "react-hook-form";
import { MdImage } from "react-icons/md";
import { useState } from "react";
import { useGet, usePost } from "../../components/ApiClient";
import Loader from "../../components/Loader";
import { useNavigate } from "react-router-dom";

type Inputs = {
  name: string;
  price: string;
  image: string;
  category: string;
  description: string;
};

export default function ProductAdd() {
  const { data: categoryData, isPending } = useGet("/product/categories");
  const { request, isSuccess } = usePost("/product/create-product");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("price", data.price);
    formData.append("description", data.description);
    formData.append("category", data.category);
    if (selectedImage) {
      formData.append("image", selectedImage); // Append the selected image file
    }

    request(formData);
  };

  const handleImageChange = (e: any) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
      setSelectedImage(file); // Store the selected image file
    }
  };

  if (isPending) {
    return <Loader />;
  }
  if (isSuccess) {
    navigate("/products");
  }

  return (
    <Card {...({} as any)} className="w-full">
      <BreadCrumb
        firstPage={"Products"}
        firstLink="/products"
        secondPage="Add New Product"
      />

      <form
        className="m-4 flex flex-col gap-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <select
            className="border border-black/50 w-full px-5 py-2"
            {...register("category", { required: true })}
            defaultValue={categoryData[0]._id}
          >
            {categoryData.map((item: any) => (
              <option key={item._id} value={item._id}>
                {item.name}
              </option>
            ))}
          </select>
          {errors.category && (
            <span className="text-xs text-red-600">Category is required*</span>
          )}
        </div>

        <div>
          <input
            className="border border-black/50 w-full px-5 py-2"
            {...register("name", { required: true })}
            placeholder="Name"
          />
          {errors.name && (
            <span className="text-xs text-red-600">Name is required*</span>
          )}
        </div>

        <div>
          <input
            className="border border-black/50 w-full px-5 py-2"
            {...register("price", { required: true })}
            placeholder="Price"
          />
          {errors.price && (
            <span className="text-xs text-red-600">Price is required*</span>
          )}
        </div>

        <div>
          <input
            className="border border-black/50 w-full px-5 py-2"
            {...register("description", { required: true })}
            placeholder="Description"
          />
          {errors.description && (
            <span className="text-xs text-red-600">
              Description is required*
            </span>
          )}
        </div>

        {/* Image Input */}
        <div className="flex items-center">
          <label
            htmlFor="image-upload"
            className="flex items-center cursor-pointer"
          >
            <MdImage className="text-gray-500 mr-2" size={24} />
            <span>Upload Image</span>
          </label>
          <input
            id="image-upload"
            type="file"
            accept="image/*"
            className="hidden"
            {...register("image", { required: true })}
            onChange={handleImageChange}
          />
        </div>
        {errors.image && (
          <span className="text-xs text-red-600">Image is required*</span>
        )}

        {/* Image Preview */}
        {imagePreview && (
          <div className="mt-4">
            <img
              src={imagePreview}
              alt="Selected"
              className="w-1/2 object-cover border border-gray-300"
            />
          </div>
        )}

        <button
          type="submit"
          className="bg-black/70 text-white px-5 py-2 rounded-[5px] cursor-pointer w-44 mt-10"
        >
          Create Product
        </button>
      </form>
    </Card>
  );
}
