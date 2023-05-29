export function query(locale, id) {
    let query = {
        query: ` {
          vina(id:${id}, locale:"${locale}") {
            data {
              attributes {
                name
                longDescription
                harvestYear
                image {
                  data {
                    attributes {
                      alternativeText
                      formats
                    }
                  }
                }
                wineDetails {
                  year
                  alchohol
                  acids
                  sugars
                  temperatureC
                  temperatureF
                  volumeNCount {
                    bottlesProduced
                    volume
                  }
                  closing {
                    data {
                      attributes {
                        capType
                      }
                    }
                  }
                }
                wineAwards {
                  awardDescription
                  year
                }
                wineInformation {
                  vinification
                  maturation
                  degustaion
                  food
                }
                winePasspordPDF {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
          
          singleWinePage(locale: "${locale}") {
            data {
              attributes {
                heroHeading
                alchohol
                acid
                sugars
                volume
                closing
                year
                bottlesProduced
                temperature
                rewardsHeading
                vinification
                maturation
                degustaion
                food
                buttonText
                unit
              }
            }
          }
        }`
    }
    return query
}


