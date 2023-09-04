import {BASE_URL} from "../../config/config";

export default class NetworkService {
    async initiationSearch() {
        try {
            const response = await fetch(`${BASE_URL}/search`);
            return await response.json();
        } catch (e) {
            throw Error('Network Service exception');
        }
    }

    async getTickets(searchId) {
        try {
            const response = await fetch(`${BASE_URL}/tickets?searchId=${searchId}`);
            return await response.json();
        } catch (e) {
            throw Error('Network Service exception');
        }
    }
}