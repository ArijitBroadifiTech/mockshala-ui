import type { BannerResponse } from "../model/home-model";
import axios, { type AxiosResponse } from 'axios'
import { apiUrl, BASE_URL } from "../url";

export const homeAPI = {
    getBannerData : async (): Promise<BannerResponse> =>{
        const response: AxiosResponse<BannerResponse> = await axios.get(`${BASE_URL}${apiUrl.banners}`)

        return response.data
       
    }
}