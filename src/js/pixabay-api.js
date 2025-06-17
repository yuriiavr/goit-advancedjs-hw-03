const API_KEY = '50907676-d0d9b555ff9217a4c5273e1b0';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query) {
  const url = new URL(BASE_URL);
  url.searchParams.append('key', API_KEY);
  url.searchParams.append('q', query);
  url.searchParams.append('image_type', 'photo');
  url.searchParams.append('orientation', 'horizontal');
  url.searchParams.append('safesearch', 'true');

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Network error');
  }

  return await response.json();
}
