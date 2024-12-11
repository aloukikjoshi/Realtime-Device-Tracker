const socket = io();

function sendLocation() {
    if (!navigator.geolocation) {
        return alert('Geolocation is not supported by your browser.');
    }

    navigator.geolocation.getCurrentPosition((position) => {
        socket.emit('send-location', {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        });
    }, () => {
        alert('Unable to fetch location.');
    });
}

document.querySelector('#send-location').addEventListener('click', sendLocation);

socket.on('receive-location', (data) => {
    console.log(`User ${data.id} is at latitude: ${data.latitude}, longitude: ${data.longitude}`);
});