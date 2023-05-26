export function query(locale) {
  let query = {
      query: ` {
        policy(locale: "${locale}") {
          data {
            attributes {
              pageHeading
              content
            }
          }
        }
      }`
  }
  return query
}


