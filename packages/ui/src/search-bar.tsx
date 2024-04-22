const SearchBar = () => {
  return (
    <>
      <input
        type="text"
        placeholder="Search here"
        value={""}
        className="p-4 w-[50%] border rounded-lg dark:border-gray-600 shadow-lg mt-10 outline-none focus:ring-2 focus:ring-blue-500"
      />
    </>
  );
};

export default SearchBar;
