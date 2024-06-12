const loginEmailInput = document.querySelector('.l-email-input');
const loginPasswordInput = document.querySelector('.l-pass-input');
const signInBtn = document.querySelector('.sign-in');

const welcomeTxt = document.querySelector('.welcome-txt');
const logoutBtn = document.querySelector('.logout-logo');
const home = document.querySelector('#home');

const loginPage = document.querySelector('#loginPage');
const emailAlert = document.querySelector('email-field > span');
const passwordAlert = document.querySelector('password-field > span');

let usersList;

if (localStorage.getItem('users')) {
    usersList = JSON.parse(localStorage.getItem('users'));
} else {
    usersList = [];
}

function checkData() {
    let checker = 0;
    if (loginEmailInput.value !== '' && loginPasswordInput.value !== '') {
        for (let i = 0; i < usersList.length; i++) {
            if (loginEmailInput.value === usersList[i].email && loginPasswordInput.value === usersList[i].password) {
                welcomeTxt.innerHTML = `Welcome, ${usersList[i].name} !`
                home.classList.remove('d-none');
                loginPage.classList.add('d-none');
                checker++
                clearFields();
                break;
            }
        }

        if (checker < 1) {
            swal("Invalid email or password");
        }
    } else {
        swal("Please Enter Your Account");
    }
}

function clearFields() {
    loginEmailInput.value = '';
    loginPasswordInput.value = '';
}

signInBtn.addEventListener('click', checkData);

logoutBtn.addEventListener('click', function () {
    home.classList.add('d-none');
    loginPage.classList.remove('d-none');
})