import { Card } from "@material-tailwind/react";
import BreadCrumb from "../../components/BreadCrumb";
import { useForm, SubmitHandler } from "react-hook-form";
import { useGet, usePut } from "../../components/ApiClient";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import { useState, useRef, useEffect } from "react";

type Inputs = {
  name: string;
  image: FileList;
  description: string;
  price: string;
  category: string;
};

type Params = {
  id: string;
};

export default function ProductEdit() {
  const { id } = useParams<Params>();
  const { data, isPending } = useGet(`/product/single-product?id=${id}`);
  const navigate = useNavigate();
  const { isSuccess: updateSucessfull, request } = usePut(
    `/product/update-product?id=${id}`
  );

  const [files, setFiles] = useState("");
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    const testData = new FormData();
    testData.append("name", data.name);
    testData.append("price", data.price);
    testData.append("description", data.description);
    testData.append("category", data.category);
    testData.append("image", files);

    request(formData);
  };

  if (isPending) {
    return <Loader />;
  }

  if (!previewImage && data.image) {
    setPreviewImage(data.image);
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      setFiles(file);
      setPreviewImage(URL.createObjectURL(file));
    } else {
      console.log("No file selected.");
    }
  };

  const handleImageClick = () => {
    imageInputRef.current?.click();
  };

  return (
    <Card {...({} as any)} className="w-full">
      <BreadCrumb
        firstPage="Products"
        firstLink="/products"
        secondPage="Edit Product"
      />

      <form
        className="m-4 flex flex-col gap-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <p className="text-xs mb-1 font-bold text-black/50">Name</p>
          <input
            className="border border-black/50 w-full px-5 py-2"
            {...register("name", { required: true })}
            placeholder="Product Name"
            defaultValue={data.name}
          />
          {errors.name && (
            <span className="text-xs text-red-600">
              Product name is required*
            </span>
          )}
        </div>

        <div>
          <p className="text-xs mb-1 font-bold text-black/50">Price</p>
          <input
            className="border border-black/50 w-full px-5 py-2"
            {...register("price", { required: true })}
            placeholder="Product Price"
            defaultValue={data.price}
          />
          {errors.price && (
            <span className="text-xs text-red-600">
              Product price is required*
            </span>
          )}
        </div>

        <div>
          <p className="text-xs mb-1 font-bold text-black/50">Description</p>
          <input
            className="border border-black/50 w-full px-5 py-2"
            {...register("description", { required: true })}
            placeholder="Product Description"
            defaultValue={data.description}
          />
          {errors.description && (
            <span className="text-xs text-red-600">
              Product description is required*
            </span>
          )}
        </div>

        <div>
          <p className="text-xs mb-1 font-bold text-black/50">Image</p>
          {previewImage && (
            <div className="mb-4">
              <img
                src={
                  previewImage.startsWith("blob:")
                    ? previewImage
                    : `http://localhost:8000/${previewImage}`
                }
                alt="Current Product"
                className="w-96 object-cover cursor-pointer"
                onClick={handleImageClick}
              />
            </div>
          )}

          <input
            className="hidden"
            type="file"
            {...register("image", { required: !previewImage })}
            placeholder="Product Image"
            onChange={handleImageChange}
            ref={imageInputRef}
          />
          {errors.image && (
            <span className="text-xs text-red-600">
              Product image is required*
            </span>
          )}
        </div>

        <div>
          <select
            className="border border-black/50 w-full px-5 py-2 hidden"
            {...register("category", { required: true })}
            defaultValue={data.category._id}
            value={data.category._id}
          >
            <option value={data.category._id}>{data.category.name}</option>
          </select>
          {errors.category && (
            <span className="text-xs text-red-600">Category is required*</span>
          )}
        </div>

        <button
          type="submit"
          className="bg-black/70 text-white px-5 py-2 rounded-[5px] cursor-pointer w-44"
        >
          Update Product
        </button>
      </form>
    </Card>
  );
}
