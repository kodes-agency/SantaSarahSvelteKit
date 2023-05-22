export function query(locale) {
    let query = {
        query: ` {
          aboutPage(locale: "${locale}") {
            data {
              attributes {
                aboutPageLayout {
                  __typename
                  ...on ComponentGlobalTitleNText {
                    minorHeading
                    majorHeading
                    text
                    marker
                  }
                  ... on ComponentGlobalImage {
                    image {
                      data {
                        attributes {
                          formats
                          alternativeText
                        }
                      }
                    }
                    imageOrientation
                    description
                  }
                }
              }
            }
          }
        }`
    }
    return query
}


