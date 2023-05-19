export function query(locale) {
    let query = {
        query: ` {
          diaryPage(locale: "${locale}") {
            data {
              attributes {
                heroHeading
                featuredStories {
                  data {
                    id
                    attributes {
                      image {
                        data {
                          attributes {
                            formats
                            alternativeText
                          }
                        }
                      }
                      title
                      publicationDate
                      content
                    }
                  }
                }
              }
            }
          }
          
          diaries(locale: "${locale}") {
            data {
              id
              attributes {
                publicationDate
                title
              }
            }
          }
        }`
    }
    return query
}


