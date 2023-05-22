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
            <iframe scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Santa%20Sarah+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" width="100%" height="400" frameborder="0"></iframe>
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
        filter: grayscale(30%);
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