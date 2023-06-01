const localUri = "http://localhost:3000"
const graphUri = "https://api.santa-sarah.com/graphql"
const imageUri = "https://api.santa-sarah.com"

const localeBg = "bg"
const localeEn = "en"
const localeDe = "de"

let local 

function locale(event, lang){
    if(lang === localeBg || event.params.lang === localeBg){
        return local = localeBg
    }
    if(lang === localeEn || event.params.lang === localeEn){
        return local = localeEn
    }
    if(lang === localeDe || event.params.lang === localeDe){
        return local = localeDe
    }

    if(geo == "Sofia") {
        local = localeBg
    } else if(geo == "Berlin") {
        local = localeDe
    } else {
        local = localeEn
    }
}

const geo = Intl.DateTimeFormat().resolvedOptions().timeZone.split('/')[1]


export async function handle({ event, resolve }) {
    const lang = event.cookies.get('lang')

    locale(event, lang)
    console.log("locale", local)
    console.log("geo", geo)
    event.locals.locale = local
    event.locals.apiUri = graphUri
    event.locals.imgUrl = imageUri
    return await resolve(event)
}