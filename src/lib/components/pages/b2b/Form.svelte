<script>
    import {page} from "$app/stores"
    import { onMount } from "svelte";
    export let formData

    let modal

    onMount(()=>{
        modal = document.querySelector('.success-modal')
    })

    function submitHandler(e){  
        e.preventDefault()
        modal.style.display = "none"
    }

</script>
<section>
    <div class="form-wrapper">
        {#if $page?.form?.success}
        <div class="success-modal">
            <h4>{formData.thankYouHeading}</h4>
            <p>{formData.thankYouSubheading}</p>
            <button on:click={submitHandler} class="basic-button sofia-font">{formData.thankYouButton}</button>
        </div>
        {/if}
        {#if !$page.form }
        <h3>{formData.formHeading}</h3>
            <form method="POST">
                <div class="inline-fields-container-wrapper">
                    <div class="inline-field-container">
                        <label class="sofia-font" for="contactPerson">{formData.contactNameField}</label>
                        <input required type="text" name="contactPerson" id="contactPerson">
                    </div>
                    <div class="inline-field-container">
                        <label class="sofia-font" for="companyName">{formData.companyNameField}</label>
                        <input type="text" name="companyName" id="companyName">
                    </div>
                </div>
                <div class="check-fields-container-wrapper">
                    <p class="check-heading">
                        {formData.businessActivity}
                    </p>
                    <p class="check-subheading sofia-font">
                        {formData.chooseOption}
                    </p>
                    <div class="check-fields-container">
                        <div class="check-field-container">
                            <input required type="radio" name="businessActivity" id="privatePerson" value="частно лице">
                            <label for="privatePerson">{formData.privatePerson}</label>
                        </div>
                        <div class="check-field-container">
                            <input required type="radio" name="businessActivity" id="company" value="търговец">
                            <label for="company">{formData.company}</label>
                        </div>
                        <div class="check-field-container">
                            <input required type="radio" name="businessActivity" id="horeca" value="хорека">
                            <label for="horeca">{formData.horeca}</label>
                        </div>
                    </div>
                </div>

                <div class="check-fields-container-wrapper">
                    <p class="check-heading">
                        {formData.interests}
                    </p>
                    <p class="check-subheading sofia-font">
                        {formData.chooseOption}
                    </p>
                    <div class="check-fields-container">
                        <div class="check-field-container">
                            <input value="Бели вина" type="checkbox" name="whiteWines" id="whiteWines">
                            <label for="whiteWines">{formData.whiteWines}</label>
                        </div>
                        <div class="check-field-container">
                            <input value="Червени вина" type="checkbox" name="redWines" id="redWines">
                            <label for="redWines">{formData.redWines}</label>
                        </div>
                        <div class="check-field-container">
                            <input value="Розе вина" type="checkbox" name="roseWines" id="roseWines">
                            <label for="roseWines">{formData.roseWines}</label>
                        </div>
                        <div class="check-field-container">
                            <input value="Колекционни вина" type="checkbox" name="collectionWines" id="collectionWines">
                            <label for="collectionWines">{formData.collectionWines}</label>
                        </div>
                        <div class="check-field-container">
                            <input value="посещения" type="checkbox" name="visits" id="visits">
                            <label for="visits">{formData.visits}</label>
                        </div>
                    </div>
                </div>

                <div class="check-fields-container-wrapper">
                    <p class="check-heading">
                        {formData.knowledge}
                    </p>
                    <p class="check-subheading sofia-font">
                        {formData.chooseOption}
                    </p>
                    <div class="check-fields-container">
                        <div class="check-field-container">
                            <input required value="true" type="radio" name="knowledge" id="knowledge-yes">
                            <label class="yes" for="knowledge-yes">{formData.yes}</label>
                        </div>
                        <div class="check-field-container">
                            <input required value="false" type="radio" name="knowledge" id="knowledge-no">
                            <label class="yes" for="knowledge-no">{formData.no}</label>
                        </div>
                    </div>
                </div>

                <div class="check-fields-container-wrapper">
                    <p class="check-heading">
                        {formData.curentOffering}
                    </p>
                    <p class="check-subheading sofia-font">
                        {formData.chooseOption}
                    </p>
                    <div class="check-fields-container">
                        <div class="check-field-container">
                            <input value="true" type="radio" name="offering" id="offering-yes">
                            <label class="yes" for="offering-yes">{formData.yes}</label>
                        </div>
                        <div class="check-field-container">
                            <input value="false" type="radio" name="offering" id="offering-no">
                            <label class="yes" for="offering-no">{formData.no}</label>
                        </div>
                    </div>
                </div>

                <div class="inline-fields-container-wrapper">
                    <div class="inline-field-container">
                        <label class="sofia-font" for="phoneNumber">{formData.phoneNumber}</label>
                        <input required type="text" name="phoneNumber" id="phoneNumber">
                    </div>
                    <div class="inline-field-container">
                        <label class="sofia-font" for="email">{formData.email}</label>
                        <input required type="email" name="email" id="email">
                    </div>
                </div>

                <button class="basic-button sofia-font">{formData.buttonTextSend}</button>
            </form>
        {/if}
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
        gap: 5vw;
        align-items: center;
        flex-wrap: wrap;
    }

    .check-fields-container {
        gap: 5vh
    }

    .check-field-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 0.5vw;
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

    input[type="text"], input[type="email"] {
        border-radius: 3px;
        border: 1px solid var(--dark-brown-color);
        background-color: transparent;
        height: 40px;
        font-size: 16px;
        text-align: center;
        color: var(--gray-color);
    }

    
    input {
        border-radius: 3px;
        border: 1px solid var(--dark-brown-color);
        background-color: transparent;
        /* height: 30px; */
        font-size: 16px;
        text-align: center;
        color: var(--gray-color);
    }
    
    input[type="checkbox"]{
        /* width: 30px; */
        /* height: 20px; */
    }

    label {
        color: var(--gray-color);
        font-size: 16px;
    }

    button {
        background-color: transparent;
        padding-left : 80px;
        padding-right : 80px;
        margin-top: 5vh;
    }

    button:hover {
        color: var(--bg-color);
    }

    .yes {
        text-transform: uppercase;
    }

    .success-modal {
        position: fixed;
        top: 0px;
        width: 100%;
        min-height: 70vh;
        height: 100svh;
        background-color: var(--bg-color);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 7vh;
        padding: 5vw;
    }

    .success-modal > h4 {
        color: var(--gray-color);
        font-size: 40px;
        text-align: center;
    }

    .success-modal > p {
        color: var(--gray-color);
        font-size: 25px;
        text-align: center;
    }

    .success-modal > button:hover {
        background-color: var(--dark-brown-color);
        color: var(--bg-color);
    }


    @media only screen and (max-width: 655px) {
        .inline-fields-container-wrapper {
            gap: 2vh;
        }

        button {
            margin-top: 2vh;
        }

        input[type="text"], input[type="email"] {
            width: 90vw;
            height: 5vh;
        }

        h3 {
            font-size: 30px;
        }

        .check-field-container {
            gap: 1.5vw;
        }

        .check-fields-container {
            gap: 2vh;
        }

        .success-modal {
            gap: 4vh;
        }

        .success-modal > h4 {
            font-size: 30px;
        }

        .success-modal > p {
            font-size: 20px;
        }
    }

</style>