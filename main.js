// To organize the code a function that setup the events is created
// and keep them all inside
function setUpEvents() {
    // Get modal element
    var modal = document.getElementById('simpleModal');
    // Get open modal
    var openModal = modal.style.display = 'block';
    // Get close button
    var closeBtn = document.getElementById('closeBtn');
    // Listen to close button
    closeBtn.addEventListener("click", closeButton);
    // Function to close button
    function closeButton() {
        var closeModal = modal.style.display = 'none';
    }
};
// Once the page is loaded this function fires up the function
//created above. 
window.onload = function() {
    setUpEvents();
};