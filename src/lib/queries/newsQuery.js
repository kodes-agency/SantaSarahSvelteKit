export function query(locale) {
    let query = {
        query: ` {
          news(locale: "${locale}") {
            data {
              id
              attributes {
                publicationDate
                title
                content
              }
            }
          }
          
          newsPage(locale: "${locale}") {
            data {
              attributes {
                heroHeading
                diaryHeading
              }
            }
          }
          
          homePage(locale: "${locale}") {
            data {
              attributes {
                featuredDiary {
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
                      content
                      publicationDate
                    }
                  }
                }
              }
            }
          }
        }`
    }
    return query
}


