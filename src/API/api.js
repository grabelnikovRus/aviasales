class HttpError extends Error {
    constructor(message) {
        super(message);
        this.name = 'HttpError';
    }
}

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
        if (response.status === 500) throw new HttpError('Server error, a new request will be sent');
        return response.json()
    }
}

export default new ServiceAPI();

export { HttpError };