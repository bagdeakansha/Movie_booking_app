const container = document.querySelector('.seat-container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
const timeSelect = document.getElementById('time');
const bookButton = document.getElementById('book-button');
const bookingDetails = document.getElementById('booking-details');
const bookedMovie = document.getElementById('booked-movie');
const bookedTime = document.getElementById('booked-time');
const bookedSeats = document.getElementById('booked-seats');
const bookedTotal = document.getElementById('booked-total');

let ticketPrice = +movieSelect.value;

function updateSelectedCountAndTotal() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');

    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));

    const selectedSeatsCount = selectedSeats.length;

    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
}

// Movie select event
movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value;
    updateSelectedCountAndTotal();
});

// Seat click event
container.addEventListener('click', e => {
    if (
        e.target.classList.contains('seat') &&
        !e.target.classList.contains('occupied')
    ) {
        e.target.classList.toggle('selected');

        updateSelectedCountAndTotal();
    }
});

// Book button event
bookButton.addEventListener('click', () => {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const selectedSeatsCount = selectedSeats.length;

    if (selectedSeatsCount > 0) {
        const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));
        
        bookedMovie.innerText = movieSelect.options[movieSelect.selectedIndex].text;
        bookedTime.innerText = timeSelect.options[timeSelect.selectedIndex].text;
        bookedSeats.innerText = seatsIndex.join(', ');
        bookedTotal.innerText = selectedSeatsCount * ticketPrice;

        bookingDetails.classList.remove('hidden');
    } else {
        alert('Please select at least one seat to book.');
    }
});
