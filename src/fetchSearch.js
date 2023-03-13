async function fetchSearch({ queryKey }) {
    const { doctorName } = queryKey[1];
    const res = await fetch(
      `https://dummyjson.com/users/search?q=${doctorName}`
    );
  
    if (!res.ok)
      throw new Error(`Doctor search not okay: ${doctorName}`);
  
    return res.json();
  }
  
  export default fetchSearch;