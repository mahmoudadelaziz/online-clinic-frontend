async function findDoctors(location) {
    // This function returns an array of users with the name entered in the form
    const req = await fetch(`https://dummyjson.com/users/filter?key=address.city&value=${location}`);
    const myData = await req.json();
    const arr = myData.users; // An array of user objects
    let namesList = [];
    arr.forEach((element) => {namesList.push(element.firstName)})
    console.log(namesList)
    return namesList
  } export default findDoctors