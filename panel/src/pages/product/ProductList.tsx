import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import { Card, IconButton, Typography } from "@material-tailwind/react";

import moment from "moment";
import Loader from "../../components/Loader";
import BreadCrumb from "../../components/BreadCrumb";
import { Link } from "react-router-dom";
import { useGet } from "../../components/ApiClient";
import { getImgUrl } from "../../utils/getImgUrl";

export default function ProductList() {
  const { isSuccess, data, isPending } = useGet("/product/allproduct");

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

  return (
    <Card {...({} as any)} className="w-full">
      <BreadCrumb firstPage={"Products"} />

      <table className="w-full table-auto text-left">
        <thead>
          <tr>
            <td colSpan={TABLE_HEAD.length} className="p-4 text-right">
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
                        className="font-bold capitalize"
                        {...({} as any)}
                      >
                        <div className="w-16">
                          <img src={getImgUrl(image)} alt="alt" />
                        </div>
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        className="font-bold capitalize"
                        {...({} as any)}
                      >
                        {price}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        className="font-bold capitalize"
                        {...({} as any)}
                      >
                        {category?.name}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        className="text-xs capitalize"
                        {...({} as any)}
                      >
                        {description}
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
                        {createdBy || "Admin"}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-1">
                        <Link to={_id}>
                          <IconButton variant="text" size="sm" {...({} as any)}>
                            <PencilIcon className="h-4 w-4 text-gray-900" />
                          </IconButton>
                        </Link>
                        <IconButton
                          //   onClick={() => {
                          //     setDeleteId(_id);
                          //   }}
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
