export function query(locale) {
    let query = {
        query: ` {
          homePage(locale: "${locale}") {
            data {
              attributes {
                heroHeading
                heroSubheading
                heroImage {
                  data {
                    attributes {
                      formats
                      alternativeText
                    }
                  }
                }
                aboutImage {
                  data {
                    attributes {
                      formats
                      alternativeText
                    }
                  }
                }
                aboutText
                aboutButton
                diaryHeading
                newsHeading
                featuredWinesHeading
                featuredWinesSubheading
                featuredWines {
                  data {
                    id
                    attributes {
                      name
                      image {
                        data {
                          attributes {
                            formats
                            alternativeText
                          }
                        }
                      }
                      harvestYear
                    }
                  }
                }
                featuredButton
                aboutLink
                winesLink
                vinyardLink
                cellerLink
                visitsLink
                b2bLink
                b2bLinkImage {
                  data {
                    attributes {
                      formats
                      alternativeText
                    }
                  }
                }
                visitsLinkImage {
                  data {
                    attributes {
                      formats
                      alternativeText
                    }
                  }
                }
                cellerLinkImage {
                  data {
                    attributes {
                      formats
                      alternativeText
                    }
                  }
                }
                vinyardLinkImage {
                  data {
                    attributes {
                      formats
                      alternativeText
                    }
                  }
                }
                winesLinkImage {
                  data {
                    attributes {
                      formats
                      alternativeText
                    }
                  }
                }
                aboutLinkImage {
                  data {
                    attributes {
                      formats
                      alternativeText
                    }
                  }
                }
                featuredNews {
                  data {
                    id
                    attributes {
                      publicationDate
                      title
                    }
                  }
                }
                featuredDiary {
                  data {
                    id
                    attributes {
                      title
                      publicationDate
                      image {
                        data {
                          attributes {
                            formats
                            alternativeText
                          }
                        }
                      }
                      content
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


