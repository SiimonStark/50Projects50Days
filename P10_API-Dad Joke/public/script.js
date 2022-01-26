const url = 'https://icanhazdadjoke.com';
const config = {
    headers: {
        'Accept': 'application/json'
    }
};

const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke);

generateJoke();

function handleErrors(response) {
    if (!response.ok) throw Error(response.statusText);
    return response.json();
}

function generateJoke() {
    const loading = '<div class="fa-3x"><i class="fas fa-spinner fa-spin"></i></div>';
    jokeEl.innerHTML = loading;
    fetch(url, config).then(handleErrors)
        .then(function (response) {
            jokeEl.innerHTML = response.joke;
        }).catch(function (error) {
            console.log(error);
        });
}