export const allFilms = `query AllFilms {
    allFilms {
      films {
        id
        created
        director
        episodeID
        openingCrawl
        title
        releaseDate
      }
    }
  }`;