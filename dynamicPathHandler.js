//function to remove the slug
const dynamicPathhandler = (path) => {
  const route = path
    ?.split("/")
    ?.slice(1, -1)
    ?.map((el) => el.replace(/^/, "/"))
    .join("");

  return route;
};
