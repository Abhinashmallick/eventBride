class EventBride {
    // Constructor when intanciate
    constructor() {
        this.auth_token = 'K2VHH3E3JQTULVV4R5D7';
        this.orderby = 'date';
    }

    // Get the events from the API
    async queryAPI(eventName, category) {
        const eventsResponse = await fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${eventName}&sort_by=${this.orderby}&categories=${category}&token=${this.auth_token}`);
        
        // Wait for response and return as JSON
        const events = await eventsResponse.json();

        return {
            events
        }
    }


    // Get catagories from the API
    async getCategoriesAPI() {
        // Query the API
        const categoriesResponse = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.auth_token}`);

        // Hold for the response and then return as JSON
        const categories = await categoriesResponse.json();

        return {
            categories
        }
    }
}