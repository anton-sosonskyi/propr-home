import { agentApiClient } from "./agent-api-client";

export class AgentApi {
  static getAddress(address: string) {
    return agentApiClient
    .get(`/?text=${address}&format=json&apiKey=${import.meta.env.VITE_GEOAPIFY_API_KEY}`)
    .then((resp) => resp.data);
  }
}
