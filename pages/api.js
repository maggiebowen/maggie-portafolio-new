const API_URL = process.env.REACT_APP_API_URL;

// eslint-disable-next-line import/prefer-default-export
export const getImages = async () => {
  const response = await fetch(`${API_URL}/photos`);
  const responseJson = await response.json();

  return responseJson;
};
