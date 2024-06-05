
// Show input error message
function showInputError(input, message) {
    const formControl = input.parentElement;
    formControl.className =
        'form-input error animate__animated animate__headShake';
    const small = formControl.querySelector('small');
    small.innerText = message;
    setTimeout(function () {
        formControl.className = 'form-input error';
    }, 500);
}

// Show success outline
function showInputSuccess(input) {
    const formControl = input.parentElement;
    formControl.className =
        'form-input success animate__animated animate__bounceIn ';
}

// Check email validity
function checkEmailValidity(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value)) {
        showInputSuccess(input);
    } else {
        showInputError(input, 'Email is not valid');
    }
}

// Check required fields
function checkRequiredFields(inputArr) {
    inputArr.forEach(function (input) {
        if (input.value.trim() === '') {
            showInputError(input, `${getFieldName(input)}` + ' is required');
        } else {
            showInputSuccess(input);
        }
    });
}

// Check input length
function checkInputLength(input, min, max) {
    if (input.value.length < min) {
        showInputError(
            input,
            `${getFieldName(input)} must be at least ${min} characters`
        );
    } else if (input.value.length > max) {
        showInputError(
            input,
            `${getFieldName(input)} must be less than ${max} characters`
        );
    } else {
        showInputSuccess(input);
    }
}

// Check Username
function checkUsername(input) {
    const usr = /^[0-9a-zA-Z]+$/;
    if (!usr.test(input.value)) {
        showInputError(input, 'Username can only contain letters or numbers');
    }
}

// Check passwords match
function checkPasswordMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showInputError(input2, 'Password does not match');
    }
}
// Make fieldname first letter uppercase
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

const form = document.getElementById('form');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('password2');

document.getElementById('signupBtn').addEventListener('click', function() {
    document.querySelector('.sig').style.display = 'block'; // show signup form
});

document.getElementById('closeModalBtn').addEventListener('click', function() {
    document.querySelector('.sig').style.display = 'none';
});

// Event Listeners
form.addEventListener('submit', function (e) {
    e.preventDefault();

    checkRequiredFields([usernameInput, emailInput, passwordInput, confirmPasswordInput]);
    checkInputLength(usernameInput, 3, 15);
    checkInputLength(passwordInput, 6, 25);
    checkInputLength(confirmPasswordInput, 6, 25);
    checkEmailValidity(emailInput);
    checkPasswordMatch(passwordInput, confirmPasswordInput);
    checkUsername(usernameInput);
});

//--------------------------------------------------------------------------------------

const formLI = document.getElementById('formLI');
const usernameInputLI = document.getElementById('usernameLI');
const passwordInputLI = document.getElementById('passwordLI');


document.getElementById('loginBtn').addEventListener('click', function() {
    document.querySelector('.log').style.display = 'block';
});

document.getElementById('closeModalBtnLI').addEventListener('click', function() {
    document.querySelector('.log').style.display = 'none';
});

// Event Listeners
form.addEventListener('submit', function (e) {
    e.preventDefault();

    checkRequiredFields([usernameInputLI, passwordInputLI]);
    checkInputLength(usernameInputLI, 3, 15);
    checkInputLength(passwordInputLI, 6, 25);
    checkUsername(usernameInputLI);
});

//---------------------------------------------------------------------------------


document.addEventListener("DOMContentLoaded", function() {
    const exploreOffersContainer = document.getElementById("exploreOffersContainer");
    const exploreOffers = Array.from(exploreOffersContainer.getElementsByClassName("explore-card"));
    const itemsPerPage = 6; // Number of elements to show at a time
    let startIndex = 0;

    function showElements(startIndex) {
        exploreOffers.forEach((offer, i) => {
            if (i >= startIndex && i < startIndex + itemsPerPage) {
                offer.style.display = "block";
            } else {
                offer.style.display = "none";
            }
        });

        // Update visibility of navigation buttons based on the current start index
        document.getElementById("prevExplore").style.visibility = startIndex <= 0 ? "hidden" : "visible";
        document.getElementById("nextExplore").style.visibility = startIndex >= exploreOffers.length - itemsPerPage ? "hidden" : "visible";
    }

    document.getElementById("nextExplore").addEventListener("click", function() {
        if (startIndex < exploreOffers.length - itemsPerPage) {
            startIndex++;
            showElements(startIndex);
        }
    });

    document.getElementById("prevExplore").addEventListener("click", function() {
        if (startIndex > 0) {
            startIndex--;
            showElements(startIndex);
        }
    });

    showElements(startIndex); // Initialize with the first set of elements
});





