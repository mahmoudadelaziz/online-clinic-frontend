const fetchDoctorsData = async () => {
    try {
      setLoading(true);
      let queryStr = `?pageSize=${PAGE_SIZE}&page=${page}`;
      if (selectedCity) {
        queryStr += `&governorate=${selectedCity}`;
      }
      if (selectedSpec) {
        queryStr += `&spec=${selectedSpec}`;
      }
      if (search) {
        queryStr += `&search=${search}`;
      }
      const {
        data: { data, numberOfPages },
      } = await axios.get(`/user/doctor/info${queryStr}`);
      console.log(`/user/doctor/info${queryStr}`);
      setNumberOfPages(numberOfPages);
      setDoctors(data);
      setLoading(false);
      setIsSearch(false);
    } catch (error) {
      setError(true);
    }
  };