const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get('id');

const options = {
  headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OGU3MDFkYjNmNTUyZTBhNTFjMDlkNDMxMzdiZDI3MCIsIm5iZiI6MTY4ODczMDA1NC44NzgsInN1YiI6IjY0YTdmOWM2OTY1MjIwMDExZGYwOGU3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YhX8YDb0OF8ovacEzdWjUTSWr0xZLaZOItyxsnzgVMI'
    }
};

const formatDate = (date) =>
  new Date(date).toLocaleDateString('pt-BR');

fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=pt-BR`, options)
  .then(res => res.json())
  .then(movie => {

    /* 🔥 BACKGROUND EM TELA CHEIA */
    document.body.style.backgroundImage = `
      url('https://image.tmdb.org/t/p/original${movie.backdrop_path}')
    `;

    const container = document.getElementById('movieDetails');

    const genres = movie.genres.map(g => g.name).join(', ');
    const year = movie.release_date.split('-')[0];
    const runtime = `${movie.runtime} min`;

    container.innerHTML = `
      <div class="row align-items-center">

        <div class="col-md-4">
          <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" 
               class="img-fluid poster-img">
        </div>

        <div class="col-md-8">

          <h1 class="display-5 fw-bold movieTitle">
            ${movie.title} <span class="fw-light">(${year})</span>
          </h1>

          <p class="text-light ">
            ${formatDate(movie.release_date)} • ${genres} • ${runtime}
          </p>

          <div class="d-flex align-items-center gap-3 my-3">
            <div class="rating-circle">
              ${Math.round(movie.vote_average * 10)}%
            </div>
            <span class="movieTitle">Avaliação dos usuários</span>
          </div>

          <h5 class="fst-italic mt-4">${movie.tagline || ''}</h5>

          <h4 class="mt-4 movieTitle">Sinopse</h4>
          <p class="movieTitle">${movie.overview}</p>

        </div>
      </div>
    `;
  })
  .catch(err => console.error(err));