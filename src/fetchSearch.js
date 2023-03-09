async function fetchSearch({ queryKey }) {
    const { name, location, specialization } = queryKey[1];
    const res = await fetch(`https://dummyjson.com/users/filter?key=hair.color&value=Brown`);
  
    if (!res.ok)
      throw new Error(`pet search not okay: ${name}, ${location}, ${specialization}`);
  
    return res.json();
  }
  
  export default fetchSearch;