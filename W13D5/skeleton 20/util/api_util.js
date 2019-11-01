const fetchSearchGiphys = (searchTerm) => {
  return $.ajax({
      type: "GET",
      url: `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dM79nPXasqEHVDQFcfTYChlsuhrDDVZz&limit=2`
  })
};

export default fetchSearchGiphys; 