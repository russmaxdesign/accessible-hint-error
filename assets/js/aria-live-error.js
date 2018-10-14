(function() {

    var input = document.getElementById('example02'),
        error = input.nextElementSibling;

    input.addEventListener('blur', function() {
        // if field is invalid
        if(true) {
            error.innerHTML = 'Error: Must be a valid address value';
            input.className += ' form-input--error';
        }

    }, false);

})();
