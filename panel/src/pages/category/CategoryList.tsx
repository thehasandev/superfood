import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import { Card, IconButton, Typography } from "@material-tailwind/react";
import { useDelete, useGet } from "../../components/ApiClient";
import moment from "moment";
import Loader from "../../components/Loader";
import BreadCrumb from "../../components/BreadCrumb";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function CategoryList() {
  const [deleteId, setDeleteId] = useState("");
  const { isSuccess, data, isPending, refetch } = useGet("/product/categories");
  const { request: deleteRequest, isSuccess: deleteSuccessFull } = useDelete(
    `/product/delete-category?id=${deleteId}`
  );

  useEffect(() => {
    if (deleteId) {
      deleteRequest();
    }
  }, [deleteId, deleteRequest]);

  useEffect(() => {
    if (deleteSuccessFull && refetch) {
      refetch();
    }
  }, [deleteSuccessFull, refetch]);

  if (isPending) {
    return <Loader />;
  }

  const TABLE_HEAD = [
    "ID",
    "Categories",
    "CreatedAt",
    "UpdateAt",
    "CreatedBy",
    "Action",
  ];

  return (
    <Card {...({} as any)} className="w-full">
      <BreadCrumb firstPage={"Categoreis"} />

      <table className="w-full table-auto text-left">
        <thead>
          <tr>
            <td colSpan={TABLE_HEAD.length} className="p-4 text-right">
              <Link to={"/categorie/add"}>
                <button className="px-4 py-2 bg-black/70 rounded-[4px] text-white text-sm">
                  Create Category
                </button>
              </Link>
            </td>
          </tr>
        </thead>
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="p-4 pt-10">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-bold leading-none"
                  {...({} as any)}
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {isSuccess && data.length > 0 ? (
            data
              .slice()
              .reverse()
              .map(
                (
                  { _id, name, createdAt, createdBy, updateAt }: any,
                  index: number // Reverse the array for LIFO
                ) => (
                  <tr key={index}>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        {...({} as any)}
                      >
                        {data.length - index}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        className="font-bold capitalize"
                        {...({} as any)}
                      >
                        {name}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        className="font-normal text-gray-600"
                        {...({} as any)}
                      >
                        {moment(createdAt)
                          .format("MMMM Do YYYY, h:mm:ss a")
                          .toLowerCase()}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        className="font-normal text-gray-600"
                        {...({} as any)}
                      >
                        {moment(updateAt)
                          .format("MMMM Do YYYY, h:mm:ss a")
                          .toLowerCase()}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        className="font-normal text-gray-600"
                        {...({} as any)}
                      >
                        {createdBy || "Admin"}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-1">
                        <IconButton variant="text" size="sm" {...({} as any)}>
                          <PencilIcon className="h-4 w-4 text-gray-900" />
                        </IconButton>
                        <IconButton
                          onClick={() => {
                            setDeleteId(_id);
                          }}
                          variant="text"
                          size="sm"
                          {...({} as any)}
                        >
                          <TrashIcon className="h-4 w-4 text-red-600" />
                        </IconButton>
                      </div>
                    </td>
                  </tr>
                )
              )
          ) : (
            <tr>
              <td colSpan={TABLE_HEAD.length} className="p-4 text-center">
                <Typography
                  variant="small"
                  className="font-normal text-gray-600"
                  {...({} as any)}
                >
                  No categories found.
                </Typography>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </Card>
  );
}
