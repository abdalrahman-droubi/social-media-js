const fetchData = async (url) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/${url}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`${error} in fetch data ${url}`);
  }
};
