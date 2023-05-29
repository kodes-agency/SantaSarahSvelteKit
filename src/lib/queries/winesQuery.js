export function query(locale) {
    let query = {
        query: ` {
          winesPage(locale: "${locale}") {
            data {
              attributes {
                heroHeading
                heroSubheading
                showFilters
                hideFilters
              }
            }
          }
          
          vinas(locale: "${locale}", pagination: {page: 1, pageSize:100}) {
            data {
              id
              attributes {
                wineType {
                  data {
                    attributes {
                      wineType
                      filterName
                    }
                  }
                }
                name
                harvestYear
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

          wineTypes(locale: "${locale}") {
            data {
              attributes {
                filterName
                wineType
              }
            }
          }
        }`
    }
    return query
}


