import { mapApiClient } from "./map-api-client";

export class MapApi {
  static getAddress(address: string) {
    return mapApiClient
    .get(`/?text=${address}&format=json&apiKey=${import.meta.env.VITE_GEOAPIFY_API_KEY}`)
    .then((resp) => resp.data);
  }
}
