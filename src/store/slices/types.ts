export interface Artwork {
  id: number;
  title: string;
  thumbnail?: Thumbnail;
  image_id: string;
  description: string;
  artist_display: string;
}
interface Thumbnail {
  lqip: string;
}
