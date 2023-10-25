// const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_URL = 'http://localhost:7000';

// eslint-disable-next-line import/prefer-default-export
export const getImages = async (nextCursor) => {
  const params = new URLSearchParams();

  if (nextCursor) {
    params.append('next_cursor', nextCursor);
  }

  const response = await fetch(`${API_URL}/photos?${params}`);
  const responseJson = await response.json();

  return responseJson;
};
