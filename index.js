window.addEventListener('DOMContentLoaded', () => {
    registerActionButtons();
});

const chatBotResponses = {
    1: "1 Laborum nostrud elit ullamco minim quis laboris laboris nulla ut mollit occaecat officia.",
    2: "2 Id aliquip mollit do in ea dolor eiusmod. Lorem elit cupidatat aute eu velit excepteur veniam eu."
}

/** @param {MouseEvent} evt */
function onClick(evt) {
    let button = evt.target;
    button.classList.add("button-chatbot--action--clicked");
    
    let action = evt.target.dataset.action;
}

function registerActionButtons() {
    document.querySelectorAll(".button--chatbot--action").forEach((el) => {
        addClickListener(el, onClick);
    });
    console.debug("Action buttons registered");
}

function addClickListener(el, callback) {
    el.addEventListener('touchstart', (evt) => {
        handleInteraction(evt, callback);
    });
    el.addEventListener('click', (evt) => {
        handleInteraction(evt, callback);
    });

    /** @param {Event} evt */
    function handleInteraction(evt, callback) {
        evt.preventDefault();
        callback(evt);
    }
}