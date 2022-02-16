const API_URL = 'https://api.themoviedb.org/3';
const API_IMG = 'https://image.tmdb.org/t/p/w1280';
const API_KEY = '&api_key=47999827637b7e92639261a1662ded73';
const ROUTE_POPULAR = '/discover/movie?sort_by=popularity.desc';
const ROUTE_SEARCH = '/search/movie?';

const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');

// Get initial movies
getMovies(API_URL + ROUTE_POPULAR + API_KEY);

async function getMovies(url) {
    const res = await fetch(url);
    const data = await res.json();
    console.log({ url, data: data.results });

    showMovies(data.results);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchTerm = '&query="' + search.value;

    if (searchTerm && searchTerm !== '') {
        getMovies(API_URL + ROUTE_SEARCH + API_KEY + searchTerm);

        search.value = '';
    } else {
        window.location.reload();
    }
});

function showMovies(movies) {
    main.innerHTML = '';

    movies.forEach((movie) => {
        const { title, id, poster_path, vote_average, overview } = movie;



        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML =
            `<img src="${API_IMG + poster_path}" alt="${title}">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                ${overview}
            </div>`;

        main.appendChild(movieEl);
    });
}

function getClassByRate(vote) {
    if (vote >= 8) {
        return 'green';
    } else if (vote >= 5) {
        return 'orange';
    } else {
        return 'red';
    }
}