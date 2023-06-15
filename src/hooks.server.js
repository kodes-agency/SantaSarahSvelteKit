const localUri = "http://localhost:3000"
const graphUri = "https://api.santa-sarah.com/graphql"
const imageUri = "https://api.santa-sarah.com"

const localeBg = "bg"
const localeEn = "en"
const localeDe = "de"

let local 

function locale(event, lang, geo){

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


export async function handle({ event, resolve }) {
    const lang = event.cookies.get('lang')
    const geo = event.cookies.get('geo')
    
    
    locale(event, lang, geo)
    event.locals.locale = localeBg
    event.locals.apiUri = graphUri
    event.locals.imgUrl = imageUri

    if(geo == undefined && event.url.pathname == "/" && lang == undefined){
        return new Response(null, {
            status: 302,
            headers: {location: "/lang"}
        })
    }

    const response = await resolve(event)
    return response
}