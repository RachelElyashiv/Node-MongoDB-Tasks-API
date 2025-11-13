class Service {
    constructor(repo) {
        this.repo = repo;
        console.log('Injected repository:', this.repo);
    }
    async getAll(query) {
        try {
            return await this.repo.getAll(query);
        }
        catch (error) {
            console.log(error);
            throw Error('error getting the list of data');
        }
    }
    async get(id) {
        try {
            const item = await this.repo.get(id);

            if (!item) {
                const error = new Error('Item not found');

                error.statusCode = 404;
                throw error;
            }

            return item;
        } catch (errors) {
            throw errors;
        }
    }

    async insert(data) {
        try {
            const item = await this.repo.insert(data);

            if (item) {
                return item;
            }
            throw new Error('Something wrong happened');

        } catch (error) {
            throw error;
        }
    }

    async update(id, data) {
        try {
            const item = await this.repo.update(id, data, { 'new': true });

            return item;
        } catch (errors) {
            throw errors;
        }
    }

    async delete(id) {
        try {
            const item = await this.repo.delete(id);

            if (!item) {
                const error = new Error('Item not found');

                error.statusCode = 404;
                throw error;
            } else {
                return item;
            }
        } catch (errors) {
            throw errors;
        }
    }
}

module.exports = Service;