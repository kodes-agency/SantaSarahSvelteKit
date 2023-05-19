const localUri = "http://localhost:3000"
const graphUri = "https://api.santa-sarah.com/graphql"
const imageUri = "https://api.santa-sarah.com"

const localeBg = "bg"
const localeEn = "en"
const localeDe = "de"

export async function handle({ event, resolve }) {
    event.locals.apiUri = graphUri
    event.locals.locale = localeBg
    event.locals.imgUrl = imageUri

    return await resolve(event)
}