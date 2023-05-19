export function query(locale) {
    let query = {
        query: ` {
          b2BPage(locale: "${locale}") {
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
                b2bPageLayout {
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
          
          contactForm(locale: "${locale}") {
            data {
              attributes {
                contactNameField
                companyNameField
                businessActivity
                privatePerson
                company
                horeca
                interests
                whiteWines
                redWines
                roseWines
                collectionWines
                visits
                knowledge
                curentOffering
                phoneNumber
                email
                yes
                no
                chooseOption
                formHeading
                buttonTextSend
                thankYouHeading
                thankYouSubheading
                thankYouButton
              }
            }
          }
        }`
    }
    return query
}


