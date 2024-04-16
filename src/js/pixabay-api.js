import axios from "axios";
  const API_KEY = '43389081-54498f1f4f67c480986af9037';
  const baseUrl = 'https://pixabay.com';
  const endPoint = '/api/';
export async function getPhotos(q, page, limit) {
  const parametr = new URLSearchParams({
    key: API_KEY, 
    q,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: page,
    per_page: 15,
  });

  try {
    const getData = await axios.get(`${baseUrl}${endPoint}?${parametr}`);
    return getData;
  } catch (error) {
    console.log(error);
  }

}