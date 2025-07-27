axios
  .get("/api/movies")
  .then((res) => {
    const movies = res.data.results;
    const container = document.getElementById("movie-list");

    movies.forEach((movie) => {
      const card = document.createElement("div");
      card.className = "movie-card";
      card.innerHTML = `
        <div class="movie-image">
          <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${
        movie.title
      }">
          <div class="overlay">
            <a href="#" class="details detail-btn" data-id="${
              movie.id
            }">Details</a>
            <a href="#" class="buy">Ticket</a>
          </div>
        </div>
        <h3>${movie.title}</h3>
        <div class="genre">
          <span>${movie.original_language.toUpperCase()}</span>
        </div>
      `;
      container.appendChild(card);
    });
  })
  .catch((err) => console.error("Gagal fetch movie:", err));
