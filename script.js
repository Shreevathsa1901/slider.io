// Selecting all necessary DOM elements
const imgSlider = document.querySelector('.img-slider');
const items = document.querySelectorAll('.item');
const imgItems = document.querySelectorAll('.img-item');
const infoItems = document.querySelectorAll('.info-item');

const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

let colors = ['#3674be','#d26181','#ceb13d','#c6414c','#171f2b','#50aa61'];

let indexSlider = 0; // Tracks the overall rotation index
let index = 0; // Tracks the currently active image index

// Function to handle slider rotation and active image/info updates
const slider = () => {
    // Rotate the entire slider
    imgSlider.style.transform = `rotate(${indexSlider * 60}deg)`; // Adjust the 60-degree increment based on item count

    // Rotate individual items to counteract the rotation of the parent slider
    items.forEach(item => {
        item.style.transform = `rotate(${indexSlider * -60}deg)`;
    });

    // Update the active image
    document.querySelector('.img-item.active').classList.remove('active');
    imgItems[index].classList.add('active');

    // Update the active info item
    document.querySelector('.info-item.active').classList.remove('active');
    infoItems[index].classList.add('active');

    document.body.style.background = colors[index];
};

// Event listener for the "Next" button
nextBtn.addEventListener('click', () => {
    indexSlider++; // Increment the slider rotation index

    index++;
    if (index >= imgItems.length) {
        index = 0; // Wrap around to the first image
    }

    slider(); // Update the slider and active elements
});

// Event listener for the "Previous" button
prevBtn.addEventListener('click', () => {
    indexSlider--; // Decrement the slider rotation index

    index--;
    if (index < 0) {
        index = imgItems.length - 1; // Wrap around to the last image
    }

    slider(); // Update the slider and active elements
});
