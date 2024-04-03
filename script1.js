const container = document.getElementById("container");
const block = document.getElementById("block");

let left = 0;
let topPos = 0;
const step = 5;

function moveBlock(direction) {
    switch (direction) {
        case "ArrowUp":
            topPos = Math.max(topPos - step, 0);
            break;
        case "ArrowDown":
            topPos = Math.min(topPos + step, container.clientHeight - block.clientHeight);
            break;
        case "ArrowLeft":
            left = Math.max(left - step, 0);
            break;
        case "ArrowRight":
            left = Math.min(left + step, container.clientWidth - block.clientWidth);
            break;
    }
    block.style.left = left + "px";
    block.style.top = topPos + "px";
}

document.addEventListener("keydown", function(event) {
    const key = event.key;
    if (key.startsWith("Arrow")) {
        event.preventDefault();
        moveBlock(key);
    }
});
