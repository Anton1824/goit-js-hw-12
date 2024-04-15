export function getPhotos(q) {
  const parametr = new URLSearchParams({
    key: '43389081-54498f1f4f67c480986af9037',
    q,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`https://pixabay.com/api/?${parametr}` 
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}