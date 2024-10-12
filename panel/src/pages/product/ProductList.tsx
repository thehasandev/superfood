import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import { Card, IconButton, Typography, Button } from "@material-tailwind/react";
import moment from "moment";
import Loader from "../../components/Loader";
import BreadCrumb from "../../components/BreadCrumb";
import { Link } from "react-router-dom";
import { useDelete, useGet } from "../../components/ApiClient";
import { getImgUrl } from "../../utils/getImgUrl";
import { useEffect, useState } from "react";


export default function ProductList() {
  const [deleteId, setDeleteId] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const { isSuccess, data, isPending, refetch } = useGet("/product/allproduct");
  const { request: deleteRequest, isSuccess: deleteSuccessFull } = useDelete(
    `product/delete-product?id=${deleteId}`
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
    "Name",
    "Image",
    "Price",
    "Category",
    "Description",
    "CreatedAt",
    "CreatedBy",
    "Action",
  ];

  // Pagination Logic
  const totalItems = data?.length || 0;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const currentData = data
    ?.slice()
    .reverse()
    .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div>
      <Card {...({} as any)} className="w-full">
        <BreadCrumb firstPage={"Products"} />

        <table className="w-full table-auto text-left">
          <thead>
            <tr>
              <td colSpan={TABLE_HEAD.length} className="pr-4 text-right">
                <Link to={"/product/add"}>
                  <button className="px-4 py-2 bg-black/70 rounded-[4px] text-white text-sm">
                    Create Product
                  </button>
                </Link>
              </td>
            </tr>
          </thead>
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th key={head} className="p-4 pt-5">
                  <Typography
                    {...({} as any)}
                    variant="small"
                    color="blue-gray"
                    className="font-bold leading-none"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {isSuccess && currentData.length > 0 ? (
              currentData.map(
                (
                  {
                    _id,
                    name,
                    image,
                    price,
                    category,
                    description,
                    createdAt,
                    createdBy,
                  }: any,
                  index: number
                ) => (
                  <tr key={index}>
                    <td className="p-4">
                      <Typography
                        {...({} as any)}
                        variant="small"
                        color="blue-gray"
                      >
                        {totalItems - (currentPage - 1) * itemsPerPage - index}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        {...({} as any)}
                        variant="small"
                        className="font-bold capitalize"
                      >
                        {name}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        {...({} as any)}
                        variant="small"
                        className="font-bold capitalize"
                      >
                        <div className="w-16">
                          <img src={getImgUrl(image)} alt="alt" />
                        </div>
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        {...({} as any)}
                        variant="small"
                        className="font-bold capitalize"
                      >
                        {price}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        {...({} as any)}
                        variant="small"
                        className="font-bold capitalize"
                      >
                        {category?.name}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        {...({} as any)}
                        variant="small"
                        className="text-xs capitalize"
                      >
                        {description}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        {...({} as any)}
                        variant="small"
                        className="font-normal text-gray-600"
                      >
                        {moment(createdAt)
                          .format("MMMM Do YYYY, h:mm:ss a")
                          .toLowerCase()}
                      </Typography>
                    </td>

                    <td className="p-4">
                      <Typography
                        {...({} as any)}
                        variant="small"
                        className="font-normal text-gray-600"
                      >
                        {createdBy?.name || "Admin"}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-1">
                        <Link to={_id}>
                          <IconButton {...({} as any)} variant="text" size="sm">
                            <PencilIcon className="h-4 w-4 text-gray-900" />
                          </IconButton>
                        </Link>
                        <IconButton
                          {...({} as any)}
                          onClick={() => {
                            setDeleteId(_id);
                          }}
                          variant="text"
                          size="sm"
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
                    {...({} as any)}
                    variant="small"
                    className="font-normal text-gray-600"
                  >
                    No products found.
                  </Typography>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </Card>
      {/* Pagination Controls */}

      <div className="absolute bottom-1 right-12">
        <div className="flex gap-2 items-center justify-end">
          <Button
            {...({} as any)}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            size="sm"
            className="text-sm rounded-sm capitalize"
          >
            Previous
          </Button>
          <Typography
            {...({} as any)}
            className="mx-4 text-sm"
          >{`Page ${currentPage} of ${totalPages}`}</Typography>
          <Button
            {...({} as any)}
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            size="sm"
            className="text-sm rounded-sm capitalize"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
