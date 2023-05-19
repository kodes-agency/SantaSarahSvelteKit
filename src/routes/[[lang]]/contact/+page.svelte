<script>
    export let data
</script>

<section>
    <div class="section-wrapper">
        <h1>{data.contact.heroHeading}</h1>
        <div class="contact-grid-wrapper">
            <div class="contacts-wrapper">
                <p>{data.contact.addressLine1}</p>
                <p>{data.contact.addressLine2}</p>
                <p>{data.contact.addressLine3}</p>
            </div>
            <div class="contacts-wrapper">
                <a href="tel:{data.contact.phoneNumber}" target="_blank">
                    <p>{data.contact.phoneNumber}</p>
                </a>
                <a href="mailto:{data.contact.email}" target="_blank">
                    <p>{data.contact.email}</p>
                </a>
                <p>{data.contact.website}</p>
            </div>
        </div>
        <div class="map">
            <!-- svelte-ignore a11y-missing-attribute -->
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11585.81385634693!2d27.520498744177758!3d42.79737962315145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a42996ad82a695%3A0x7ebd7d11f3fa62a7!2z0YPQu9C40YbQsCDQmNCy0LDQudC70L4sIDgyMjUgR29yaXRzYQ!5e0!3m2!1sen!2sbg!4v1684491507049!5m2!1sen!2sbg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
</section>

<style>
    .section-wrapper {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        justify-content: center;
        align-items: center;
        gap: 10vh;
        padding-top: 30vh;
        padding-bottom: 10vh;
    }

    h1 {
        font-size: 40px;
        color: var(--gray-color);
    }

    .contact-grid-wrapper {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 10vw;
    }

    p {
        font-style: italic;
        text-align: center;
    }

    .contacts-wrapper {
        display: flex;
        flex-direction: column;
        gap: 1vh
    }

    .map {
        width: 100%;
    }

    .map > iframe {
        width: 100%;
        height: 35vh;
    }

    @media only screen and (max-width: 765px) {
        .contact-grid-wrapper {
            grid-template-columns: 1fr;
        }

        .map > iframe {
            height: 50vh;
        }

        .section-wrapper {
            padding-top: 15vh;
            gap: 7vh
        }

        h1 {
            font-size: 30px;
        }
    }
</style>