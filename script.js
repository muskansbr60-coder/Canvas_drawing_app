const canvas = document.getElementById('paintCanvas');
const ctx = canvas.getContext('2d');
const colorPicker = document.getElementById('colorPicker');
const brushSize = document.getElementById('brushSize');
const clearBtn = document.getElementById('clearBtn');

// Canvas Size bura kar diya hai yahan
canvas.width = 900; 
canvas.height = 500;

let drawing = false;

canvas.addEventListener('mousedown', () => drawing = true);
canvas.addEventListener('mouseup', () => { 
    drawing = false; 
    ctx.beginPath(); 
});

canvas.addEventListener('mousemove', (e) => {
    if (!drawing) return;

    ctx.lineWidth = brushSize.value; // Brush size yahan se change hoga
    ctx.strokeStyle = colorPicker.value; // Color yahan se
    ctx.lineCap = 'round';

    const rect = canvas.getBoundingClientRect();
    ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
});

clearBtn.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});
