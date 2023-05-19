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
        }`
    }
    return query
}


