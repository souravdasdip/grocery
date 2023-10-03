"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useDebounce } from "use-debounce";

const Search = ({ search }: { search?: string }) => {
  const router = useRouter();
  const initialRender = useRef(true);
  const [text, settext] = useState(search);
  const [query] = useDebounce(text, 500);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }

    if (!query) {
      router.push(`/`, { scroll: false });
    } else {
      router.push(`/?search=${query}#product__section`, { scroll: false });
    }
  }, [query]);

  return (
    <div className="relative  rounded-md shadow-sm w-4/5 sm:w-1/3  mx-auto">
      {/* <div className="bg-black pointer-events-none absolute inset-y-0 left-0 flex items-center">
      </div> */}
      <input
        className="bg-black/10 block w-full pointer-events-auto rounded-md border-0 py-3 pl-2 text-gray-500 placeholder:text-gray-500 focus:outline-none"
        value={text}
        placeholder="Search products..."
        onChange={(e) => settext(e.target.value)}
      />
    </div>
  );
};

export default Search;
