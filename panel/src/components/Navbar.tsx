import React from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ChevronRightIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = React.useState<number>(0);

  const handleOpen = (value: number) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Card
      {...({} as any)}
      className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5"
    >
      {/* Sidebar Title and Avatar */}
      <div className="mb-4 p-4">
        {/* Avatar image */}
        <div className="mt-4 flex items-center">
          <img
            src="https://via.placeholder.com/40"
            alt="Avatar"
            className="h-14 w-14 rounded-full"
          />
          <Typography
            {...({} as any)}
            variant="small"
            className="ml-4 font-medium"
          >
            Username
          </Typography>
        </div>
      </div>

      <List {...({} as any)}>
        {/* Dashboard Menu */}
        <Accordion
          {...({} as any)}
          open={open === 1}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                open === 1 ? "rotate-180" : ""
              }`}
            />
          }
        >
          <ListItem {...({} as any)} className="p-0" selected={open === 1}>
            <AccordionHeader
              {...({} as any)}
              onClick={() => handleOpen(1)}
              className="border-b-0 p-3"
            >
              <ListItemPrefix {...({} as any)}>
                <PresentationChartBarIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Typography
                {...({} as any)}
                color="blue-gray"
                className="mr-auto font-normal"
              >
                Dashboard
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List {...({} as any)} className="p-0">
              <Link to={"/products"}>
                <ListItem className="text-sm text-black/50" {...({} as any)}>
                  <ListItemPrefix {...({} as any)}>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Products
                </ListItem>
              </Link>
              <Link to={"/categories"}>
                <ListItem className="text-sm text-black/50" {...({} as any)}>
                  <ListItemPrefix {...({} as any)}>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Categories
                </ListItem>
              </Link>
            </List>
          </AccordionBody>
        </Accordion>
      </List>
    </Card>
  );
}
