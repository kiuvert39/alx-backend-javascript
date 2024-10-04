import { uploadPhoto, createUser } from './utils';

export default function getResponseFromAPI() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([photoResponse, userResponse]) => ({
      photo: photoResponse,
      user: userResponse,
    }))
    .catch(() => {
      console.error('Error occurred while fetching data');
    });
}
