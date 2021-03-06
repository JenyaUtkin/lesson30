const sendForm = () => {
    const errorMessage = 'Что-то пошло не так';
    const loadMessage = 'Загрузка...';
    const successMessage = 'Спасибо! Мы скоро с вами свяжемся!';
    const statusMessage = document.createElement('div');
    
    statusMessage.style.cssText = 'font-size: 2rem; color: #fff;';

    document.body.addEventListener('input', (event) => {
    if (event.target.matches('.form-phone')) {
        event.target.value = event.target.value.replace(/[^0-9+]/ig, "");
        event.target.value = event.target.value.substring(0, 12);
    }
    if (
        event.target.name === 'user_name' ||
        event.target.name === 'user_message'
    ) {
        event.target.value = event.target.value.replace(/[^а-яА-ЯёЁ]+$/ig, "");
    }

    });

    document.body.addEventListener('submit', (event) => {
    event.preventDefault();
    const form = event.target;
    form.append(statusMessage);
    statusMessage.textContent = loadMessage;
    const formData = new FormData(form);

    postData(formData)
        .then((response) => {
        if (response.status !== 200) {
            throw new Error('status network not 200');
        }
        statusMessage.textContent = successMessage;
        form.reset();
        })
        .catch((error) => {
        statusMessage.textContent = errorMessage;
        console.log(error);
        });
    });
    const postData = (formData) => {
    return fetch('./server.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(formData))
    });
    };
};
export default sendForm;