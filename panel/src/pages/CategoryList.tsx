import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import { Card, IconButton, Typography } from "@material-tailwind/react";
import { useGet } from "../components/ApiClient";
import moment from "moment";
import Loader from "../components/Loader";

// Define a type for your category data

export default function CategoryList() {
  const { isSuccess, data, isPending } = useGet("/product/categories");

  // Handle loading state
  if (isPending) {
    return <Loader />;
  }

  const TABLE_HEAD = ["ID", "Categories", "CreatedAt", "CreatedBy", "Action"];

  return (
    <Card {...({} as any)} className="w-full">
      <table className="w-full table-auto text-left">
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
                  { name, createdAt, createdBy }: any,
                  index: number // Reverse the array for LIFO
                ) => (
                  <tr key={index}>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        {...({} as any)}
                      >
                        {index + 1}
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
                        {createdBy}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-1">
                        <IconButton variant="text" size="sm" {...({} as any)}>
                          <PencilIcon className="h-4 w-4 text-gray-900" />
                        </IconButton>
                        <IconButton variant="text" size="sm" {...({} as any)}>
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
