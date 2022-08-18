let captcha = document.querySelector('.captcha');
let user_input = document.querySelector('.user-input');
let check_btn = document.querySelector('.check-btn');
let generate_btn = document.querySelector('.generate-btn');
let message = document.querySelector('.message');
let container = document.querySelector('.container');

let captchaCharacter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q',
    'R', 'S', 'T', 'U', 'V', 'X', 'Y', 'Z',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
    's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 2, 4, 5, 6, 7, 8, 9];

let generateCaptcha = () => {
    captcha.innerHTML = '';
    message.style.visibility = "hidden";
    for (let i = 0; i < 6; i++) {
        let randomCaptcha = captchaCharacter[Math.floor(Math.random() * captchaCharacter.length)]
        captcha.innerHTML += ' ' + randomCaptcha;
    }
}

let captchaCheck = () => {
    let rightCaptcha = captcha.textContent;
    let userInput = user_input.value;

    if (rightCaptcha.replaceAll(' ', '') == userInput.replaceAll(' ', '')) {
        message.innerHTML = '<i class="fa-solid fa-circle-check"></i> Captcha matched. You are not a robot';
        message.style.color = 'green';
        container.style.height = '330px';
        generate_btn.style.top = '80%';
        check_btn.style.top = '68%';
        message.style.display = "block";
        message.style.visibility = "visible";
    } else {
        message.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Captcha not matched. Please try again.';
        message.style.color = 'red';
        container.style.height = '330px';
        generate_btn.style.top = '80%';
        check_btn.style.top = '68%';
        message.style.display = "block";
        message.style.visibility = "visible";
    }
}

check_btn.addEventListener('click', () => {
    if (user_input.value != '') {
        captchaCheck();
    } else {
        user_input.classList.add('input-shaked')
        setTimeout(() => {
            user_input.classList.remove('input-shaked')
        }, 400)
    }
})

generate_btn.addEventListener('click', generateCaptcha)

generateCaptcha();