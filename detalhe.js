const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get('id');

fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=pt-BR`, {
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OGU3MDFkYjNmNTUyZTBhNTFjMDlkNDMxMzdiZDI3MCIsIm5iZiI6MTY4ODczMDA1NC44NzgsInN1YiI6IjY0YTdmOWM2OTY1MjIwMDExZGYwOGU3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YhX8YDb0OF8ovacEzdWjUTSWr0xZLaZOItyxsnzgVMI'
    }
})
    .then(response => response.json())
    .then(movie => {

        /* document.body.style.backgroundImage = `
        linear-gradient(rgba(13,37,63,0.9), rgba(13,37,63,0.95)),
        url('https://image.tmdb.org/t/p/original${movie.backdrop_path}')
        `; */

        /* remover o linear-gradient */
        document.body.style.backgroundImage = `
        url('https://image.tmdb.org/t/p/original${movie.backdrop_path}')
        `;

        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundAttachment = "fixed";
        document.body.style.backgroundRepeat = "no-repeat";

        const container = document.getElementById('movieDetails');

        container.innerHTML = `
            <div class="container py-5">
                <div class="row bg-dark bg-opacity-75 p-4 rounded-4 shadow-lg">
                    <div class="col-md-4">
                        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" 
                            class="img-fluid rounded">
                    </div>
                    <div class="col-md-8 text-white">
                        <h1>${movie.title}</h1>
                        <p><strong>Data:</strong> ${movie.release_date}</p>
                        <p><strong>Nota:</strong> ⭐ ${movie.vote_average}</p>
                        <p class="mt-3">${movie.overview}</p>
                    </div>
                </div>
            </div>`;
    })
    .catch(error => console.error(error));