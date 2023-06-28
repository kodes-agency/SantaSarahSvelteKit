const localUri = "http://localhost:3000"
const graphUri = "https://api.santa-sarah.com/graphql"
const imageUri = "https://api.santa-sarah.com"

const localeBg = "bg"
const localeEn = "en"
const localeDe = "de"

let local

function locale(event, lang, geo){
    if(event.params.lang == "bg" || event.params.lang == "en" || event.params.lang == "de"){
        event.cookies.set('lang', event.params.lang, {httpOnly: false})
        return local = event.params.lang
    }
    
    if(lang == "bg" || lang == "en" || lang == "de"){
        return local = lang
    }

    if(geo == "Sofia") {
        return local = localeBg
    } else if(geo == "Berlin") {
        return local = localeDe
    } else {
        return local = localeEn
    }
}


export async function handle({ event, resolve }) {
    const geo = event.cookies.get('geo')
    const lang = event.cookies.get('lang')
    
    locale(event, lang, geo)
    event.locals.locale = local
    event.locals.apiUri = graphUri
    event.locals.imgUrl = imageUri

    if(geo == undefined && event.url.pathname == "/" && lang == undefined){
        return new Response(null, {
            status: 302,
            headers: {location: "/lang"}
        })
    }

    const response = await resolve(event, {
        transformPageChunk: ({html}) => html.replace("%lang%", local),
    })
    return response
}