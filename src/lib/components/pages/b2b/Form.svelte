<script>
    export let form
</script>
<section>
    <div class="form-wrapper">
        <h3>{form.formHeading}</h3>
        <form method="POST">
            <div class="inline-fields-container-wrapper">
                <div class="inline-field-container">
                    <label class="sofia-font" for="contactPerson">{form.contactNameField}</label>
                    <input type="text" name="contactPerson" id="contactPerson">
                </div>
                <div class="inline-field-container">
                    <label class="sofia-font" for="companyName">{form.companyNameField}</label>
                    <input type="text" name="companyName" id="companyName">
                </div>
            </div>
            <div class="check-fields-container-wrapper">
                <p class="check-heading">
                    {form.businessActivity}
                </p>
                <p class="check-subheading sofia-font">
                    {form.chooseOption}
                </p>
                <div class="check-fields-container">
                    <div class="check-field-container">
                        <input type="radio" name="businessActivity" id="privatePerson" value="частно лице">
                        <label for="privatePerson">{form.privatePerson}</label>
                    </div>
                    <div class="check-field-container">
                        <input type="radio" name="businessActivity" id="company" value="търговец">
                        <label for="company">{form.company}</label>
                    </div>
                    <div class="check-field-container">
                        <input type="radio" name="businessActivity" id="horeca" value="хорека">
                        <label for="horeca">{form.horeca}</label>
                    </div>
                </div>
            </div>

            <div class="check-fields-container-wrapper">
                <p class="check-heading">
                    {form.interests}
                </p>
                <p class="check-subheading sofia-font">
                    {form.chooseOption}
                </p>
                <div class="check-fields-container">
                    <div class="check-field-container">
                        <input value="Бели вина" type="checkbox" name="whiteWines" id="whiteWines">
                        <label for="whiteWines">{form.whiteWines}</label>
                    </div>
                    <div class="check-field-container">
                        <input value="Червени вина" type="checkbox" name="redWines" id="redWines">
                        <label for="redWines">{form.redWines}</label>
                    </div>
                    <div class="check-field-container">
                        <input value="Розе вина" type="checkbox" name="roseWines" id="roseWines">
                        <label for="roseWines">{form.roseWines}</label>
                    </div>
                    <div class="check-field-container">
                        <input value="Колекционни вина" type="checkbox" name="collectionWines" id="collectionWines">
                        <label for="collectionWines">{form.collectionWines}</label>
                    </div>
                    <div class="check-field-container">
                        <input value="посещения" type="checkbox" name="visits" id="visits">
                        <label for="visits">{form.visits}</label>
                    </div>
                </div>
            </div>

            <div class="check-fields-container-wrapper">
                <p class="check-heading">
                    {form.knowledge}
                </p>
                <p class="check-subheading sofia-font">
                    {form.chooseOption}
                </p>
                <div class="check-fields-container">
                    <div class="check-field-container">
                        <input value="true" type="radio" name="knowledge" id="knowledge-yes">
                        <label class="yes" for="knowledge-yes">{form.yes}</label>
                    </div>
                    <div class="check-field-container">
                        <input value="false" type="radio" name="knowledge" id="knowledge-no">
                        <label class="yes" for="knowledge-no">{form.no}</label>
                    </div>
                </div>
            </div>

            <div class="check-fields-container-wrapper">
                <p class="check-heading">
                    {form.curentOffering}
                </p>
                <p class="check-subheading sofia-font">
                    {form.chooseOption}
                </p>
                <div class="check-fields-container">
                    <div class="check-field-container">
                        <input value="true" type="radio" name="offering" id="offering-yes">
                        <label class="yes" for="offering-yes">{form.yes}</label>
                    </div>
                    <div class="check-field-container">
                        <input value="false" type="radio" name="offering" id="offering-no">
                        <label class="yes" for="offering-no">{form.no}</label>
                    </div>
                </div>
            </div>

            <div class="inline-fields-container-wrapper">
                <div class="inline-field-container">
                    <label class="sofia-font" for="phoneNumber">{form.phoneNumber}</label>
                    <input type="text" name="phoneNumber" id="phoneNumber">
                </div>
                <div class="inline-field-container">
                    <label class="sofia-font" for="email">{form.email}</label>
                    <input type="email" name="email" id="email">
                </div>
            </div>

            <button class="basic-button sofia-font">{form.buttonTextSend}</button>
        </form>
    </div>
</section>

<style> 
    .form-wrapper {
        gap: 5vh;
        padding-bottom: 10vh;
    }

    .form-wrapper, form, .check-fields-container-wrapper, .inline-field-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .check-fields-container-wrapper, .inline-field-container {
        gap: 1vh;
    }

    form {
        gap: 4vh;
        max-width: 80vw;
    }

    label {
        white-space: nowrap;
    }

    .inline-fields-container-wrapper, .check-fields-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 10vw;
        align-items: center;
        flex-wrap: wrap;
    }

    .check-fields-container {
        gap: 1vh
    }

    .check-field-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 1vw;
        flex-wrap: nowrap;
        padding-top: 1vh;
    }

    h3 {
        font-size: 40px;
        color: var(--gray-color);
        text-align: center;
    }

    p {
        text-align: center;
    }

    .sofia-font {
        font-size: 14px;
        color: var(--light-brown-color)
    }

    
    input {
        border-radius: 3px;
        border: 1px solid var(--dark-brown-color);
        background-color: transparent;
        height: 30px;
        font-size: 16px;
        text-align: center;
        color: var(--gray-color);
        
    }
    
    input[type="checkbox"]{
        width: 30px;
        height: 20px;
    }

    label {
        color: var(--gray-color);
        font-size: 16px;
    }

    button {
        background-color: transparent;
        padding-inline: 80px;
        margin-top: 5vh;
    }

    button:hover {
        color: var(--bg-color);
    }

    .yes {
        text-transform: uppercase;
    }


    @media only screen and (max-width: 655px) {
        .inline-fields-container-wrapper {
            gap: 2vh;
        }

        button {
            margin-top: 2vh;
        }

        input[type="text"]{
            width: 90vw;
            height: 5vh;
        }

        h3 {
            font-size: 30px;
        }
    }


</style>