import { FC } from "react";
import { FaSearch } from "react-icons/fa";

interface Props {
  className: string;
  search: string;
  setSearch: Function;
}

const SearchBar: FC<Props> = ({ className, search, setSearch }) => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search here"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        className={`${className} pr-10 border rounded-lg dark:border-gray-600 dark:bg-slate-900 outline-none focus:ring-1 focus:ring-blue-200`}
      />
      <div className="absolute right-3 top-3">
        <FaSearch fill="gray" className="h-5 w-5" />
      </div>
    </div>
  );
};

export default SearchBar;
