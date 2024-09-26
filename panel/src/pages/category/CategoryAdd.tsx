import { Card } from "@material-tailwind/react";

import BreadCrumb from "../../components/BreadCrumb";
import { useForm, SubmitHandler } from "react-hook-form";
import Loader from "../../components/Loader";
import { usePost } from "../../components/ApiClient";
import { useNavigate } from "react-router-dom";

type Inputs = {
  name: string;
  discription: string;
};

export default function CategoryAdd() {
  const { request, isPending, isSuccess } = usePost(`/product/create-category`);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const newCategory = {
      name: data.name,
      description: data.discription,
    };

    request(newCategory);
  };

  if (isPending) {
    return <Loader />;
  }
  if (isSuccess) {
    navigate("/categories");
  }

  return (
    <Card {...({} as any)} className="w-full">
      <BreadCrumb
        firstPage={"Categorei"}
        firstLink="/categories"
        secondPage="Add New Category"
      />

      <form
        className="m-4 flex flex-col gap-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <input
            className="border border-black/50 w-full px-5 py-2"
            {...register("name", { required: true })}
            placeholder="Category Name"
          />
          {errors.name && (
            <span className="text-xs text-red-600">Name is required*</span>
          )}
        </div>

        <div>
          <input
            className="border border-black/50 w-full px-5 py-2"
            {...register("discription", { required: true })}
            placeholder="Category Discription"
          />

          {errors.discription && (
            <span className="text-xs text-red-600">
              Discription is required*
            </span>
          )}
        </div>

        <button
          type="submit"
          className=" bg-black/70 text-white px-5 py-2 rounded-[5px] cursor-pointer w-44"
        >
          Add To Category
        </button>
      </form>
    </Card>
  );
}
