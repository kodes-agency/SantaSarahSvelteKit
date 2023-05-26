import { query } from '$lib/queries/b2bQuery'
import { mutation } from '$lib/queries/b2bMutation'

let uri

export const load = async ({fetch, locals}) => {
  uri = locals.apiUri
  const fetchOptions = {
    method: 'POST',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(query(locals.locale))
  }
  
  const response = await fetch(uri,fetchOptions)

  if(response.status === 404) {
    throw new Error('Page not found');
  } else if (response.status === 500){
    throw new Error('Server error');
  } else if (!response.ok){
    throw new Error(`HTTP error! status: ${response.status}`)
  }

  const json = await response.json()

  return {
    imgUrl: locals.imgUrl,
    locale: locals.locale,
    b2b: json?.data.b2BPage?.data?.attributes,
    form: json?.data.contactForm.data?.attributes
  }
}

export const actions = {
  default: async ({request}) =>{
    const data = await request.formData()

    const email = data.get('email')
    const phoneNumber = data.get('phoneNumber')
    const currentOffering = JSON.parse(data.get('offering'))
    const knowledge = JSON.parse(data.get('knowledge'))
    const redWines = data.getAll('redWines')
    const whiteWines = data.getAll('whiteWines')
    const roseWines = data.getAll('roseWines')
    const collectionWines = data.getAll('collectionWines')
    const visits = data.getAll('visits')
    const businessActivity = data.get('businessActivity')
    const companyName = data.get('companyName')
    const contactPerson = data.get('contactPerson')

    const interestsArray = [...redWines, ...whiteWines, ...roseWines, ...collectionWines, ...visits]
    const interests = interestsArray.join(', ')


    const fetchOptions = {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        data: {
          "email": email,
          "phoneNumber": phoneNumber,
          "currentOffering": currentOffering,
          "knowledge": knowledge,
          "interests": interests,
          "businessActivity": businessActivity,
          "companyName": companyName,
          "contactPerson": contactPerson
        }
      })
    }
    
    const response = await fetch("https://api.santa-sarah.com/api/messages",fetchOptions)
  
    const json = await response.json()

  }
}