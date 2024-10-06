import { IoMdHome } from "react-icons/io";
import { Link } from "react-router-dom";

// Define the types for your props
interface BreadcrumbProps {
  firstPage: string;
  secondPage?: string;
  thirdPage?: string;
  firstLink?: string; // Add firstLink here
  secondLink?: string;
  thirdLink?: string;
}

export default function BreadCrumb({
  firstPage,
  secondPage,
  thirdPage,
  firstLink = "/", // Set default to home
  secondLink,
  thirdLink,
}: BreadcrumbProps) {
  return (
    <div className="ml-4 mt-5 bg-white flex items-center text-black">
      <Link to="/home" className="flex items-center">
        <IoMdHome />
      </Link>

      <span className="mx-2">/</span>
      <span>
        {secondPage || thirdPage ? (
          <Link to={firstLink}>
            {" "}
            {/* Updated */}
            {firstPage}
          </Link>
        ) : (
          firstPage
        )}
      </span>

      {secondPage && (
        <>
          <span className="mx-2">/</span>
          <span>
            {thirdPage ? (
              <Link to={secondLink || "#"}>{secondPage}</Link>
            ) : (
              secondPage
            )}
          </span>
        </>
      )}

      {thirdPage && (
        <>
          <span className="mx-2">/</span>
          <Link to={thirdLink || "#"}>{thirdPage}</Link>
        </>
      )}
    </div>
  );
}
