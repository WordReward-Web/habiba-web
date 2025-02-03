"use client";
import { InputGroup, FormControl, Spinner } from "react-bootstrap";
import styles from "./searchBar.module.css";
import { BsSearch } from "react-icons/bs";
import { useEffect, useLayoutEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

const SearchBar = ({ placeholderTxt = "Search" }) => {
  const [searchTerm, setSearchTerm] = useState(""); // State for the input value
  const searchParams = useSearchParams();
  const router = useRouter();

  useLayoutEffect(() => {
    setSearchTerm(searchParams.get("search") || ""); // Update the input value when the URL changes
  }, []);

  // Debounce timer
  useEffect(() => {
    const handler = setTimeout(() => {
      const params = new URLSearchParams(searchParams?.toString() || "");

      if (searchTerm) {
        params.set("search", searchTerm); // Add/update the search parameter
        params.set("page", 1); // Add/update the search parameter
      } else {
        params.delete("search"); // Remove the search parameter if empty
      }

      // Update the URL while preserving other query parameters
      router.push(`/shop?${params.toString()}`);
    }, 300); // 300ms debounce

    return () => clearTimeout(handler); // Cleanup on unmount or changes
  }, [searchTerm, searchParams, router]);

  return (
    <div className="w-100 position-relative">
      <InputGroup
        className={`${styles.searchBar} position-relative align-items-center`}
      >
        <FormControl
          placeholder={placeholderTxt}
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          className={`p-2 ${styles.searchInput}`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          autoComplete="off" //to avoide show suggestions when focus on the input
        />
        <i className={styles[`right`]}>
          <BsSearch />
        </i>
      </InputGroup>
    </div>
  );
};

export default SearchBar;
