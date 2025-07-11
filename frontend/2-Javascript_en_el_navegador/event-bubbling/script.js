const outer = document.getElementById("outer");
const middle = document.getElementById("middle");
const inner = document.getElementById("inner");
const useCaptureCheckbox = document.getElementById("useCapture");
const preventDefaultCheckbox = document.getElementById("preventDefault");
const stopPropagationCheckbox = document.getElementById("stopPropagation");
const demoLink = document.getElementById("demoLink");

const boxes = [inner, middle, outer];
let lastHighlightPromise = Promise.resolve();

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function handleBoxClick(event) {
  if (stopPropagationCheckbox.checked) {
    event.stopPropagation();
  }

  const element = event.currentTarget;

  // Chain the highlights using the previous promise
  lastHighlightPromise = lastHighlightPromise.then(async () => {
    element.classList.add("highlight");
    await wait(500);
    element.classList.remove("highlight");
  });
}

async function updateEventListeners() {
  // Remove existing listeners
  boxes.forEach((box) => {
    box.removeEventListener("click", handleBoxClick, true);
    box.removeEventListener("click", handleBoxClick, false);
  });
  await fetch("https://jsonplaceholder.typicode.com/posts");
  // Add new listeners with current capture setting
  const useCapture = useCaptureCheckbox.checked;
  boxes.forEach((box) => {
    box.addEventListener("click", handleBoxClick, useCapture);
  });
}

// Initial setup
updateEventListeners();

// Update listeners when checkbox changes
useCaptureCheckbox.addEventListener("change", updateEventListeners);

function handleLinkClick(event) {
  this.style.backgroundColor = "#ffeb3b";
  if (preventDefaultCheckbox.checked) {
    event.preventDefault();
    console.log("Link click prevented");
  }
}

// Add link click handler
demoLink.addEventListener("click", handleLinkClick);

// Event delegation example
const delegationList = document.getElementById("delegationList");

function handleDelegatedClick(event) {
  // Only handle clicks on list items
  if (event.target.tagName === "LI") {
    console.log("Clicked item:", event.target.textContent);
    console.log("Event target:", event.target);
    console.log("Current target:", event.currentTarget);

    // Add a temporary highlight effect
    event.target.style.backgroundColor = "#ffeb3b";
    setTimeout(() => {
      event.target.style.backgroundColor = "";
    }, 500);
  }
}

delegationList.addEventListener("click", handleDelegatedClick);
