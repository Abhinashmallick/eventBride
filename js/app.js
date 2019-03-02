//Instanciate both classes

const eventbride = new EventBride();
const ui = new UI();

// console.log(eventbride);

// Listener for the submit button
document.getElementById('submitBtn').addEventListener('click', (event) => {
    event.preventDefault();

    // get values from form
    const eventName = document.getElementById('event-name').value;
    const category = document.getElementById('category').value;

    // console.log(eventName + ' : ' + category);

    if(eventName !== '') {
        // console.log('success');
        // Query Event Bride API
        eventbride.queryAPI(eventName, category)
            .then(events => {
                // console.log(events.events.events.length);
                // Check for events
                const eventList = events.events.events;
                if(eventList.length > 0) {
                    // Print the Events
                    ui.displayEvents(eventList);
                } else {
                    // There are no events, print a Message
                    ui.printMessage('No Results Found', 'alert alert-danger text-center mt-4');
                }
            })

    } else {
        // console.log('failed');
        // Print a Message
        ui.printMessage('Add an Event or City', 'alert alert-danger text-center mt-4');
    }

})


