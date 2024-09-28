import { Card } from "@material-tailwind/react";

import BreadCrumb from "../../components/BreadCrumb";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useGet, usePut } from "../../components/ApiClient";
import Loader from "../../components/Loader";

type Inputs = {
  name: string;
  description: string;
};

type Params = {
  id: string;
};

export default function CategoryEdit() {
  const { id } = useParams<Params>();
  const { data, isPending } = useGet(`/product/categori?id=${id}`);
  const navigate = useNavigate();
  const { isSuccess: updateSucessfull, request } = usePut(
    `/product/update-category?id=${id}`
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  if (updateSucessfull) {
    navigate("/categories");
  }
  if (isPending) {
    return <Loader />;
  }

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const updateCategory = {
      name: data?.name,
      description: data?.description,
    };
    request(updateCategory);
  };

  return (
    <Card {...({} as any)} className="w-full">
      <BreadCrumb
        firstPage={"Categorei"}
        firstLink="/categories"
        secondPage="Edit Category"
      />

      <form
        className="m-4 flex flex-col gap-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <input
            className="border border-black/50 w-full px-5 py-2"
            defaultValue={data?.name}
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
            defaultValue={data?.description}
            {...register("description", { required: true })}
            placeholder="Category Description"
          />

          {errors.description && (
            <span className="text-xs text-red-600">
              Description is required*
            </span>
          )}
        </div>

        <button
          type="submit"
          className=" bg-black/70 text-white px-5 py-2 rounded-[5px] cursor-pointer w-44"
        >
          Update Category
        </button>
      </form>
    </Card>
  );
}
