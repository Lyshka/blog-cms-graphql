import { useState, useEffect } from "react";

import Link from "next/link";

import { getCategories } from "../services";
import Head from "next/head";

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <>
      <Head>
        <title>Blog CMS Lyshka</title>
      </Head>

      <div className="container mx-auto px-10 mb-8">
        <div className="border-b-2 w-full inline-block border-blue-500 py-8">
          <div className="flex justify-center items-center">
            <Link href={"/"}>
              <span className="cursor-pointer font-bold text-4xl text-white">
                Blog Lyshka
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
