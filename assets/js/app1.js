// Get DOM Elements
const modal = document.querySelector('#my-modal');
const modalBtn = document.querySelector('#modal-btn');
const closeBtn = document.querySelector('.close');

// Events
modalBtn.addEventListener('click', function (openModal) {
    if (e.target == modal) {
        modal.style.display = 'block';
    }
})


closeBtn.addEventListener('click', function (closeModal) {
            modal.style.display = 'none';
        }

        window.addEventListener('click', function (outsideClick) {
            if (e.target == modal) {
                modal.style.display = 'none';
            }
        })

        // Open
        // function openModal() {
        //     modal.style.display = 'block';

        // }

        // Close
        // function closeModal() {
        //     modal.style.display = 'none';
        // }

        // Close If Outside Click. Change 'modal' to background of home page of school savings.
        // function outsideClick(e) {
        //     if (e.target == modal) {
        //         modal.style.display = 'none';
        //     }}