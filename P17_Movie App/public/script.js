const API_URL = 'https://api.themoviedb.org/3';
const API_IMG = 'https://image.tmbd.org/t/p/w1280';
const API_KEY = '&api_key=47999827637b7e92639261a1662ded73';
const ROUTE_POPULAR = '/discover/movie?sort_by=popularity.desc';
const ROUTE_SEARCH = '/search/movie?';

const form = document.getElementById('form');
const search = document.getElementById('search');

// Get initial movies
getMovies(API_URL + ROUTE_POPULAR + API_KEY);

async function getMovies(url) {
    const res = await fetch(url);
    const data = await res.json();
    console.log({ url, data: data.results });
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