import axios from 'axios';

const baseConfig = {
  BASE_URL: 'https://pixabay.com/api/',
  pageId: 1,
  key: '35035540-8bd526b593fab0e390d7ded9d',
  per_page: 12,
};

export const fetchImagesWithQuery = async (
  searchQuery,
  pageId = baseConfig.pageId
) => {
  const { BASE_URL, key, per_page } = baseConfig;
  const response = await axios.get(
    `${BASE_URL}?q=${searchQuery}&page=${pageId}&key=${key}&image_type=photo&orientation=horizontal&per_page=${per_page}`
  );
  return response.data;
};
