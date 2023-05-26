export function query(locale) {
    let query = {
        query: ` {
          menu(locale: "${locale}") {
            data {
              attributes {
                wineEstate
                ourWines
                contactUs
                aboutUs
                linkCeller
                linkVisits
                linkWhites
                linkReds
                linkRoses
                linkCollections
                linkB2b
                linkContact
                linkHistory
                linkPhilosophy
                linkTeam
                linkDiary
                linkNews
                linkGDPR
                linkPolicy
                linkVinyard
              }
            }
          }
          
          contactPage(locale: "${locale}") {
            data {
              attributes {
                addressLine1
                addressLine2
                addressLine3
                phoneNumber
                email
              }
            }
          }

          seo(locale: "${locale}") {
            data {
              attributes {
                seoTitle
                seoDescription
                seoKeywords
              }
            }
          }

          cookiesGdpr(locale: "${locale}"){
            data {
              attributes {
                cookieHeading
                cookieDescription
                cookieAcceptLabel
                cookieRejectLabel
                cookieCloseLabel
                cookieNecessaryLabel
                cookieNecessaryDescription
                cookieTrackingLabel
                cookieTrackingDescription
                cookieAnalyticsLabel
                cookieAnalyticsDescription
              }
            }
          }

          ageConsent(locale:"${locale}"){
            data {
              attributes {
                heroHeading
                heroSubheading
                approveButton
                denyButton
                policyText
                denyHeading
                denySubheading
                bgImage {
                  data {
                    attributes {
                      formats
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


