const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.allFilmTitles = function(){
  const filmTitles= this.films.map((film) => {
    return film.title;
  });
  return filmTitles;
};

Cinema.prototype.findByTitle = function(title) {

// const found = array1.find(element => element > 10);
  const film = this.films.find(film => film.title === title);
  return film;
};

Cinema.prototype.findByGenre = function(genre) {
  const film =this.films.find(film => film.genre === genre);
  return film;
};

Cinema.prototype.filmsFromYear = function(year) {
  const isYear = this.films.some(film => film.year === year);
  return isYear; 
};

Cinema.prototype.filmsOverLength = function(length) {
  return this.films.every(film => film.length > length);
};

Cinema.prototype.totalMinutes = function() {
  return this.films.reduce((total, film) => {
    return total += film.length;
  }, 0);
  };

//  this also works
//  Cinema.prototype.totalMinutes = function() {
//   const total = this.films.map(film => film.length).reduce((prev, curr) => prev + curr, 0);
//   return total;

// };


Cinema.prototype.filmsByProperty = function(property, value) {

  const findProperty = this.films.filter(film => film[property] === value);
  return findProperty;
};





module.exports = Cinema;
