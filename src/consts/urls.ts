import Config from 'react-native-config';

export const BASE_URL = Config.BASE_URL;
export const IMAGES_BASE_URL = Config.IMAGES_BASE_URL;

export const ARTIC_REQUESTS = {
  ARTWORKS: '/api/v1/artworks/',
};

export const ARTIC_QUERY_PARAMS = {
  FIELDS: '?fields=id,title,thumbnail,image_id,description,artist_display',
};
