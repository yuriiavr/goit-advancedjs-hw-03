import axios from 'axios';

export async function fetchImages(query) {
  const API_KEY = '50907676-d0d9b555ff9217a4c5273e1b0';
  const BASE_URL = 'https://pixabay.com/api/';

  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });

  return response.data;
}
