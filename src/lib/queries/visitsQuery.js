export function query(locale) {
    let query = {
        query: ` {
          visitsPage(locale: "${locale}") {
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
                visitsPageLayout {
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
                  ...on ComponentGlobalTextEditor {
                    heading
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


