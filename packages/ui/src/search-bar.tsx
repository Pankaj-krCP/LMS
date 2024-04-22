import { FC } from "react";

interface Props {
  className: string;
  search: string;
  setSearch: Function;
}

const SearchBar: FC<Props> = ({ className, search, setSearch }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search here"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        className={`${className} border rounded-lg dark:border-gray-600 dark:bg-gray-900 shadow-lg outline-none focus:ring-1 focus:ring-blue-200`}
      />
    </div>
  );
};

export default SearchBar;
