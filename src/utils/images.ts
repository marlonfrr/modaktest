import {IMAGES_BASE_URL} from '../consts/urls';

export const getFullImageUrl = (imageId: string) => {
  return `${IMAGES_BASE_URL}/${imageId}/full/843,/0/default.jpg`;
};
