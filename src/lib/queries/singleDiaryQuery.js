export function query(locale, id) {
    let query = {
        query: ` {
          singleDiaryPage(locale: "${locale}") {
            data { 
              attributes {
                heroHeading
              }
            }
          }
          
          diary(id:${id}, locale: "${locale}"){
            data {
              id
              attributes {
                title
                publicationDate
                content
                gallery {
                  data {
                    attributes {
                      formats
                      alternativeText
                    }
                  }
                }
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
                featuredDiary {
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
        }`
    }
    return query
}


