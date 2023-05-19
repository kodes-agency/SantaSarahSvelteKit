export function query(locale) {
    let query = {
        query: ` {
          contactPage(locale: "${locale}") {
            data {
              attributes {
                heroHeading
                addressLine1
                addressLine2
                addressLine3
                email
                phoneNumber
                website
              }
            }
          }
        }`
    }
    return query
}


