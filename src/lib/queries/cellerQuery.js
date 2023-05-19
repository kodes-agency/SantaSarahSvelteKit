export function query(locale) {
    let query = {
        query: ` {
          cellerPage(locale: "${locale}") {
            data {
              attributes {
                heroImage {
                  data {
                    attributes {
                      formats
                      alternativeText
                    }
                  }
                }
                cellerPageLayout {
                  __typename
                  ...on ComponentGlobalImage {
                    image {
                      data {
                        attributes {
                          formats
                          alternativeText
                        }
                      }
                    }
                    description
                    imageOrientation
                  }
                  ...on ComponentGlobalParagraph {
                    text
                  }
                  ...on ComponentGlobalTitleNText {
                    minorHeading
                    majorHeading
                    text
                  }
                }
              }
            }
          }
        }`
    }
    return query
}


