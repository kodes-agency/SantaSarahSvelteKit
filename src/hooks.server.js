const localUri = "http://localhost:3000"
const graphUri = "https://api.santa-sarah.com/graphql"
const imageUri = "https://api.santa-sarah.com"

const localeBg = "bg"
const localeEn = "en"
const localeDe = "de"


const geo = Intl.DateTimeFormat().resolvedOptions().timeZone.split('/')[1]


export async function handle({ event, resolve }) {
    const lang = event.cookies.get('lang')
    event.locals.locale = localeBg
    if(geo == "Sofia") {
        event.locals.locale = localeBg
    } else if(geo == "Berlin") {
        event.locals.locale = localeDe
    } else {
        event.locals.locale = localeEn
    }


    if(lang === localeBg || event.params.lang === localeBg){
        event.locals.locale = localeBg
    }
    if(lang === localeEn || event.params.lang === localeEn){
        event.locals.locale = localeEn
    }
    if(lang === localeDe || event.params.lang === localeDe){
        event.locals.locale = localeDe
    }

    event.locals.apiUri = graphUri
    event.locals.imgUrl = imageUri
    return await resolve(event)
}