export function mutation(email, phoneNumber, currentOffering, knowledge, interests, businessActivity, companyName, contactPerson) {
    let mutation = {
        mutation: ` {
            createMessage(
                data:{
                    email: "${email}",
                    phoneNumber:"${phoneNumber}",
                    currentOffering: ${currentOffering},
                    knowledge: ${knowledge},
                    interests: "${interests}",
                    businessActivity: "${businessActivity}",
                    companyName: "${companyName}",
                    contactPerson: "${contactPerson}"
                }
            ) {
                data {
                    attributes {
                        contactPerson
                        companyName
                        businessActivity
                        interests
                        knowledge
                        currentOffering
                        phoneNumber
                        email
                    }
                }
            }
        }`
    }
    return mutation
}


