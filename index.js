body {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f4f4f9;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.toolbar {
    background: #333;
    color: white;
    width: 100%;
    padding: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.2);
}

canvas {
    background: white;
    margin-top: 20px;
    border-radius: 8px;
    box-shadow: 0 0 20px rgba(0,0,0,0.1);
    cursor: crosshair;
    border: 1px solid #ccc;
}

button {
    padding: 8px 15px;
    background: #ff4757;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
}

button:hover {
    background: #ff6b81;
}
