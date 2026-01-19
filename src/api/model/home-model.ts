interface BannerData {
  _id: string;
  title: string;
  position: number;
  redirectUrl: string;
  image: string;
  imageForMobile: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export interface BannerResponse {
  error: boolean;
  status: boolean;
  statusCode: number;
  responseTimestamp: string;
  totalCount: number;
  hasNext: boolean;
  page: number;
  data: BannerData[];
}