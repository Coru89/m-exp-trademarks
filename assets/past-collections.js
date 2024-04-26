const modalButtons = document.querySelectorAll('.past-collection__overlay-button');
const bodyEl = document.querySelector('body');
const modalEls = document.querySelectorAll('.past-collection__modal');
const closeEls = document.querySelectorAll('#bs-close-modal');
const overlayEl = document.querySelector('.past-collection__modal-overlay');

function closeModal(modalEl) {
    if (!modalEl.classList.contains('bs-modal'))
    return;

    if (!overlayEl) return;
    overlayEl.classList.remove('past-collection__modal-overlay--active');

    modalEl.classList.remove('past-collection__modal--open');
    modalEl.classList.remove('open');
    bodyEl.classList.remove('bs-modal-open');
}

function openModal(e) {
    const modalEl = e.currentTarget.parentElement.querySelector('.past-collection__modal');

    if (!modalEl.classList.contains('bs-modal'))
    return;

    if (!overlayEl) return;
    overlayEl.classList.add('past-collection__modal-overlay--active');

    modalEl.classList.add('open');
    modalEl.classList.add('past-collection__modal--open');
    bodyEl.classList.add('bs-modal-open');
}

modalButtons.forEach(button => {
    button.addEventListener('click', openModal);
});

// close modal when clicking close button
closeEls.forEach(button => {
    button.addEventListener('click', (e) => {
        const currentModalEl = e.currentTarget.closest('.past-collection__modal');
        closeModal(currentModalEl);
    });
});

// close modal when clicking outside
overlayEl.addEventListener('click', () => {
    modalEls.forEach(modal => {
        closeModal(modal);
    });
});

// close on esc key press
document.onkeydown = function(evt) {
    evt = evt || window.event;
    var isEscape = false;
    if ("key" in evt) {
        isEscape = (evt.key === "Escape" || evt.key === "Esc");
    } else {
        isEscape = (evt.keyCode === 27);
    }
    if (isEscape) {
        modalEls.forEach(modal => {
            closeModal(modal);
        });
    }
};

