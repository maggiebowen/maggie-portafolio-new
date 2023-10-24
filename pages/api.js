// const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_URL = 'http://localhost:7000';

// eslint-disable-next-line import/prefer-default-export
export const getImages = async () => {
  const response = await fetch(`${API_URL}/photos`);
  const responseJson = await response.json();

  return responseJson;
};
