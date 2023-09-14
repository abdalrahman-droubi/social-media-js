const postData = async(url,body)=>{
    const response = await fetch(`https://jsonplaceholder.typicode.com/${url}`, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify(body),
      });
      const Data = await response.json();
      console.log(Data);
      return Data
}