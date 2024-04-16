export function createGallaryMarkup(array) {
  return array
    .map(
      ({largeImageURL, webformatURL, tags, likes, views, comments, downloads}) => 
     `<li class="gallery-item">
         <div class ="foto">
          <a href="${largeImageURL}">
           <img src="${webformatURL}" alt="${tags}"></a></div>
         <div class = "under-photo">
          <div class ="info">
           <h3>Likes</h3>
            <p>${likes}</p></div>
          <div class ="info">
           <h3>Views</h3>
            <p>${views}</p></div>
          <div class ="info">
           <h3>Comments</h3>
            <p>${comments}</p></div>
          <div class ="info"> 
           <h3>Downloads</h3>
            <p>${downloads}</p></div>
        </div>
      </li>`
    )
    .join('');
}