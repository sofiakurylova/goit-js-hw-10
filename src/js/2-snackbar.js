// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form')
// const delayInput = document.querySelector('input[name="delay"]');
// const promiseInput = document.querySelector('input[name="state"]');
// const createBtn = document.querySelector('.notif-btn');

// let isSuccess;
// let delay;

// delayInput.addEventListener('input', (evt) => {
//     delay = evt.currentTarget.value;
// })

// promiseInput.addEventListener('change', (event) => {
//     if (event.target.value === 'fulfilled') {
//         isSuccess = true;
//     } else if(event.target.value === 'rejected') {isSuccess = false;}
// })



form.addEventListener('submit', event => {
    event.preventDefault();

    const delay = Number(form.elements.delay.value);
    const state = form.elements.state.value;

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if(state === "fulfilled") {
                resolve();
            } else {
                reject();
            }
        }, delay)
    })
    promise
        .then(() => iziToast.success({
                    message: `✅ Fulfilled promise in ${delay}ms`,
                    closeOnClick: true,
                    position: "topRight",
                }))
        .catch(() => iziToast.error({
                    message: `❌ Rejected promise in ${delay}ms`,
                    closeOnClick: true,
                    position: "topRight",
                }));
})
