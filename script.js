fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', {
    //method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OGU3MDFkYjNmNTUyZTBhNTFjMDlkNDMxMzdiZDI3MCIsIm5iZiI6MTY4ODczMDA1NC44NzgsInN1YiI6IjY0YTdmOWM2OTY1MjIwMDExZGYwOGU3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YhX8YDb0OF8ovacEzdWjUTSWr0xZLaZOItyxsnzgVMI'
    }
})
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data.results)

        /* 1 - Pegar a referência da tag onde os card serão inseridos */
        const container = document.getElementById('featuredMovies');
        container.innerHTML = '';

        const cardsMovies = data.results.map(function (i) {
            const card = `
            <div class="col-6 col-sm-4 col-md-3 mb-4">
                <div class="movie-card">
                    <img src="https://media.themoviedb.org/t/p/w440_and_h660_face/${i.poster_path}"
                        class="card-img-top" alt="${i.original_title}">
                    <div class="card-body movie-info">
                        <div class="movie-title">${i.original_title}</div>
                        <div class="movie-date">${i.release_date}</div>
                    </div>
                </div>
            </div>`
            
            console.log(card)

            /* += ele adiciona cada item, mantendo o anterior, ou seja, adciona um após o  outro sem sobrescrever */
            container.innerHTML += card;

        })

        /* 
        criar o card no formato 

        <div class="col-6 col-sm-4 col-md-3">
                <div class="movie-card">
                    <img src="https://media.themoviedb.org/t/p/w440_and_h660_face/pyok1kZJCfyuFapYXzHcy7BLlQa.jpg"
                        class="card-img-top" alt="...">
                    <div class="card-body movie-info">
                        <div class="movie-title">O Hobbit</div>
                        <div class="movie-date">10/10/2025</div>
                    </div>
                </div>
            </div>
        */
        /* Vou percorrer cada item */
        /* const cardsMovies = data.results.map(function (movie) {
            const card = document.createElement('div');
            card.classList.add('col-6', 'col-sm-4', 'col-md-3', 'mb-4');

            card.innerHTML = `
                <div class="movie-card">
                    <img src="https://media.themoviedb.org/t/p/w440_and_h660_face/${movie.poster_path}"
                        class="card-img-top" alt="${movie.title}">
                    <div class="card-body movie-info">
                        <div class="movie-title">${movie.title}</div>
                        <div class="movie-date">${movie.release_date}</div>
                    </div>
                </div>
            `;

            container.appendChild(card);
        }) */

    })
    .catch(function (error) {
        console.error('Error:', error);
    });