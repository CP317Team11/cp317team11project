document.addEventListener('DOMContentLoaded', function() {
    const events = [
        { id: 1, name: 'Tech Conference 2024', date: '2024-10-10' },
        { id: 2, name: 'Art & Craft Exhibition', date: '2024-11-15' },
        { id: 3, name: 'Music Fest 2024', date: '2024-12-01' }
    ];

    const eventList = document.querySelector('.event-list');
    const eventSelect = document.getElementById('event');

    // Load events into the event list and registration form
    events.forEach(event => {
        const eventItem = document.createElement('div');
        eventItem.className = 'event';
        eventItem.innerHTML = `<h3>${event.name}</h3><p>Date: ${event.date}</p>`;
        eventList.appendChild(eventItem);

        const option = document.createElement('option');
        option.value = event.id;
        option.textContent = `${event.name} (${event.date})`;
        eventSelect.appendChild(option);
    });

    // Handle form submission
    const form = document.getElementById('registration-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const eventId = document.getElementById('event').value;

        alert(`Thank you for registering, ${name}! You've been registered for event ID: ${eventId}.`);
        form.reset();
    });
});
