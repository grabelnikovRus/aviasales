class ServiceAPI {
    constructor() {
        this.urlSearchId = 'https://front-test.beta.aviasales.ru/search';
        this.urlGetTickets = 'https://front-test.beta.aviasales.ru/tickets';
    }

    async getSearchId() {
        const response = await fetch(this.urlSearchId);
        if (!response.ok) throw new Error('Error getting ID');
        return response.json();
    }

    async getAviaTickets(id) {
        const response = await fetch(`${this.urlGetTickets}?searchId=${id}`);
        if (!response.ok) throw new Error('500');
        return response.json()
    }
}

export default new ServiceAPI();