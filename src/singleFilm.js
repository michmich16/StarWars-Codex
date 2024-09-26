export const singleFilm = `query Film($filmId: ID) {
    film(id: $filmId) {
      producers
      title
      openingCrawl
    }
  }`;