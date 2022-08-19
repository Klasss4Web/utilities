const handleFilter = (e) => {
  const keyword = e.target.value;

  if (keyword !== "") {
    const results = products.filter((product) => {
      return product.name.toLowerCase().includes(keyword.toLowerCase());
      // Use the toLowerCase() method to make it case-insensitive
    });
    setFilteredData(results);
  } else {
    setFilteredData(products);
  }
};

console.log("filteredData", filteredData);
