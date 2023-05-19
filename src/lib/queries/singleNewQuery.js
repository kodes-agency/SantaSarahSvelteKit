export function query(locale,id) {
    let query = {
        query: ` {
          new(id: ${id}, locale: "${locale}") {
            data {
              attributes {
                title
                publicationDate
                content
                image {
                  data {
                    attributes {
                      formats
                      alternativeText
                    }
                  }
                }
              }
            }
          }
        
          homePage(locale: "${locale}") {
            data {
              attributes {
                featuredNews {
                  data {
                    id
                    attributes {
                      publicationDate
                      title
                    }
                  }
                }
              }
            }
          }
        
          singleNewsPage(locale: "${locale}") {
            data {
              attributes {
                heroHeading
                secondaryHeading
              }
            }
          }
        }`
    }
    return query
}


