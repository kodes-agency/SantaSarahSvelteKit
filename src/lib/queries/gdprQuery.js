export function query(locale) {
  let query = {
      query: ` {
        gdprPage(locale: "${locale}") {
          data {
            attributes {
              pageHeading
              pageContent
            }
          }
        }
      }`
  }
  return query
}


