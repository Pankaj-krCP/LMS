"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaFacebookF, FaDiscord, FaTwitter, FaGithub } from "react-icons/fa";

const ClientFooter = () => {
  const path = usePathname();
  const isHome = path.split("/")[1] === "";

  return (
    <div
      className={`${!isHome && "hidden"} border-t shadow dark:border-gray-600`}
    >
      <div className="w-full max-w-screen-xl mx-auto p-6">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            href="#"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              CodingSync
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0">
            <li>
              <Link href="#" className="hover:underline me-4 md:me-6">
                About
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-2 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-6" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm sm:text-center">
            © 2024{" "}
            <Link href="#" className="hover:underline">
              CodingSync™
            </Link>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a href="#" className="hover:text-gray-900 dark:hover:text-white">
              <FaFacebookF />
              <span className="sr-only">Facebook page</span>
            </a>
            <a
              href="#"
              className="hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <FaDiscord />
              <span className="sr-only">Discord community</span>
            </a>
            <a
              href="#"
              className="hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <FaTwitter />
              <span className="sr-only">Twitter page</span>
            </a>
            <a
              href="#"
              className="hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <FaGithub />
              <span className="sr-only">GitHub account</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientFooter;
