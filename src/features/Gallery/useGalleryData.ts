import {useState} from 'react';
import {useAppDispatch} from '../../store/hooks';
import {axiosClient} from '../../utils/axiosClient';
import {ARTIC_QUERY_PARAMS, ARTIC_REQUESTS} from '../../consts/urls';
import {Artwork} from '../../store/slices/types';
import {
  getArtworksSuccess,
  getArtworksError,
} from '../../store/slices/gallerySlice';

export const useGalleryData = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const getArtworks = async (page: number) => {
    try {
      setLoading(true);
      const url = `${ARTIC_REQUESTS.ARTWORKS}${ARTIC_QUERY_PARAMS.FIELDS}&page=${page}`;
      const {data} = await axiosClient.get(url);
      const res: Artwork[] = data.data;
      dispatch(getArtworksSuccess(res));
    } catch (error) {
      dispatch(getArtworksError());
    } finally {
      setLoading(false);
    }
  };

  return {loading, getArtworks};
};

export default useGalleryData;
