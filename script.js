const albumsIDs = ["1146381", "81763"];
async function toggleArtist23(id) {
  const response = await fetch(
    "https://deezerdevs-deezer.p.rapidapi.com/album/" + id, //query
    {
      headers: {
        "x-rapidapi-key": "5a5e031fd8msh210af9e647b3834p1c116ejsn3b5700d24f69",
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
      },
    }
  );
  const data = await response.json();
  console.log(data);
  displayAlbum(await data);
  displayAlbum2(await data);
  displayAlbum3(await data);
  displayAlbum4(await data);
  return data;
}
const displayAlbum = (data) => {
  let albumContainer = document.querySelector(".album-1");
  albumContainer.innerHTML = `${data.title} </br>`;
};
const placeAlbums = () => {
  albumsIDs.forEach((id) => {
    toggleArtist23(id);
  });
  placeAlbums2();
  placeAlbums3();
  placeAlbums4();
};
const displayAlbum2 = (data) => {
  let albumContainer = document.querySelector(".album-2");
  albumContainer.innerHTML = `${data.title} </br>`;
};
const placeAlbums2 = () => {
  albumsIDs.forEach((id) => {
    toggleArtist23(id);
  });
};
const displayAlbum3 = (data) => {
  let albumContainer = document.querySelector(".album-3");
  albumContainer.innerHTML = `${data.title} </br>`;
};
const placeAlbums3 = () => {
  albumsIDs.forEach((id) => {
    toggleArtist23(id);
  });
};
const displayAlbum4 = (data) => {
  let albumContainer = document.querySelector(".album-4");
  albumContainer.innerHTML = `${data.title} </br>`;
};
const placeAlbums4 = () => {
  albumsIDs.forEach((id) => {
    toggleArtist23(id);
  });
};
