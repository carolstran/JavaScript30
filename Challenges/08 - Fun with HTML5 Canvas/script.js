const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

// "Sizing up" our canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Line styles
ctx.strokeStyle = '#BADA55'; // <-- Best color name
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 65;

// Creating a flag. When mouse down, we will set to true and it will draw to canvas.
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;

function draw(e) {
    if (!isDrawing) return; // Stops the function from running when they are not mouse down
    console.log(e);
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    // Start from
    ctx.moveTo(lastX, lastY);
    // Go to
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();

    [lastX, lastY] = [e.offsetX, e.offsetY]; // ES6 trick - destructuring an array

    hue++;
}

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
