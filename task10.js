fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(response => {
    if (!response.ok) {
      throw new Error("HTTP error! Status: " + response.status);
    }
    return response.json();
  })
  .then(user => {
    console.log("Name: " + user.name);
  })
  .catch(error => {
    console.error("Error fetching user details: " + error.message);
  });
