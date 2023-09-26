const fetchData = async (url) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/${url}`);
    if (!response.ok) {
      throw new Error(`${response.status}`)
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`${error.message} in fetch data ${url}`);
    return [];
  }
};
