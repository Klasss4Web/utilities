const handleFilter = (e, users, setFilteredData) => {
  const keyword = e.target.value;

  if (keyword !== "") {
    const filteredResult = users?.filter((user) => {
      return (
        product?.name.toLowerCase()?.includes(keyword?.toLowerCase()) ||
        user?.email.toLowerCase()?.includes(keyword?.toLowerCase())
      );
    });
    setFilteredData(filteredResult);
  } else {
    setFilteredData(users);
  }
};

console.log("filteredData", filteredData);
