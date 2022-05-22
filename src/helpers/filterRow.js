export const filterRow = (array, searchValue) => {
  return array.filter(({ title }) =>
    title
      .toString()
      .toLowerCase()
      .includes(searchValue.toString().toLowerCase())
  );
};
