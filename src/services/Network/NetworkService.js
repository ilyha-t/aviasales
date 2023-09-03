import {BASE_URL} from "../../config/config";

export default class NetworkService {
    async initiationSearch() {
        const response = await fetch(`${BASE_URL}/search`);

        if(response.ok) {
            return await response.json();
        } else {
            throw Error('NetworkService exception');
        }
    }

    async getTickets(searchId) {
        const response = await fetch(`${BASE_URL}/tickets?searchId=${searchId}`);

        if(response.ok) {
            return await response.json();
        } else {
            throw Error('NetworkService exception');
        }
    }
}