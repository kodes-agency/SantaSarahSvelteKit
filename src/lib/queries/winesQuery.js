export function query(locale) {
    let query = {
        query: ` {
          winesPage(locale: "${locale}") {
            data {
              attributes {
                heroHeading
                heroSubheading
              }
            }
          }
          
          vinas(locale: "${locale}") {
            data {
              id
              attributes {
                name
                shortDescription
                image {
                  data {
                    attributes {
                      formats
                      alternativeText
                    }
                  }
                }
                wineDetails {
                  year
                }
              }
            }
          }
        }`
    }
    return query
}


