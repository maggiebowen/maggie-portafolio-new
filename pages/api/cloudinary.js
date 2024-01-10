/* eslint-disable import/prefer-default-export */

export async function search(options = {}) {
  const params = {
    ...options,
  };

  if (options.nextCursor) {
    params.next_cursor = options.nextCursor;
    delete params.nextCursor;
  }

  const paramString = Object.keys(params)
    .map((key) => `${key}=${encodeURIComponent(params[key])}`)
    .join('&');
  console.log('Request Payload:', paramString);
  const results = await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/resources/search?${paramString}`,
    {
      headers: {
        Authorization: `Basic ${Buffer.from(
          `${process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY}:${process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET}`,
        ).toString('base64')}`,
      },
    },
  ).then((r) => r.json());

  return results;
}

export function mapImageResources(resources) {
  return resources.map((resource) => {
    const { width, height } = resource;
    return {
      id: resource.asset_id,
      title: resource.public_id,
      image: resource.secure_url,
      width,
      height,
    };
  });
}

export async function getPhotographyFolders() {
  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/folders/photography`,
    {
      headers: {
        Authorization: `Basic ${Buffer.from(
          `${process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY}:${process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET}`,
        ).toString('base64')}`,
      },
    },
  ).then((r) => r.json());

  return response;
}

export async function getVisualArtFolders() {
  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/folders/visual-art`,
    {
      headers: {
        Authorization: `Basic ${Buffer.from(
          `${process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY}:${process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET}`,
        ).toString('base64')}`,
      },
    },
  ).then((r) => r.json());

  return response;
}
