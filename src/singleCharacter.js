export const singleCharacter = `query Person($personId: ID) {
    person(id: $personId) {
      name
      gender
      birthYear
      skinColor
      hairColor
      eyeColor
      height
      mass
      id
      homeworld {
        name
        id
      }
    }
  }`;