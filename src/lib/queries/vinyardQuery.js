export function query(locale) {
    let query = {
        query: ` {
          vinyardPage(locale: "${locale}") {
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
                vinyardPageLayout {
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


