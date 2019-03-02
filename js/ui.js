class UI {
    constructor() {
         // App inicialization
        this.init();
    }
    // Method when the app starts
    init() {
        // Display category in <select>
        this.printCategories();

        // Select the result
        this.result = document.getElementById('result');
    }
    // Display Events from the API
    displayEvents(events) {
        console.log(events);
        // Build the Template
        let HTMLTemplate = '';

        // Loop Events and Print the Result
        events.forEach(eventInfo => {
            HTMLTemplate += `
                <div class="col-md-4 mt-4">
                    <div class="card">
                        <div class="card-body">
                            <img class="img-fluid mb-2" src="${eventInfo.logo !== null ? eventInfo.logo.url : ''}">

                            <div class="card-text">
                                <h2 class="text-center card-title">${eventInfo.name.text}</h2>
                                <p class="lead text-info">Event Information</p>
                                <p>${eventInfo.description.text.substring(0,200)}...</p>
                                <span class="badge badge-primary">Capacity: ${eventInfo.capacity}</span>
                                <span class="badge badge-secondary">Date & Time: ${eventInfo.start.local}</span>

                                <a href="${eventInfo.url}" target="_blank" class="btn btn-block btn-primary mt-4">Get Tickets</a>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });

        this.result.innerHTML = HTMLTemplate;
    }

    // Print the Categories
    printCategories() {
        const categoriesList = eventbride.getCategoriesAPI()
            .then(categories => {
                // console.log(categories.categories.categories);
                const categoriesList = categories.categories.categories;
                const categoriesSelect = document.querySelector('#category');

                //Insert a categories into a <select> 
                // console.log(categoriesList);
                categoriesList.forEach(category => {
                    // Create the <option>
                    const option = document.createElement('option');
                    option.value = category.id;
                    option.appendChild(document.createTextNode(category.name_localized));
                    categoriesSelect.appendChild(option);
                })
            })
            .catch(error => console.log(error));
    }

    // Display the Message
    printMessage(message, className) {
        // Create a div
        const div = document.createElement('div');
        div.className = className;
        // Add the Text
        div.appendChild(document.createTextNode(message));

        //Insert into the HTML
        const searchDiv = document.querySelector('#search-events');
        searchDiv.appendChild(div);

        // Remove the Alert after 3s
        setTimeout(() => {
            this.removeMessage();
        }, 3000);
    }

    // Remove the Message
    removeMessage() {
        const alert = document.querySelector('.alert');
        if(alert) {
            alert.remove();
        }
    }
}