<script>
    export let title = "Заглавие"
    export let subTitle = "Подзаглавие"
    export let button = "Виж всички"
    export let wines
    export let imgUrl
</script>

<section>
    <div class="section-wrapper">
        <div class="heading-wrapper">
            <h2>{title}</h2>
            <h3>{subTitle}</h3>
        </div>
        <div class="wines-wrapper">
            {#each wines as element }
            <a href="/wines/{element.id}">
                <div class="item-wrapper">
                    <img src={imgUrl+element.attributes.image.data.attributes.formats.web.url} alt="">
                    <p class="year">{new Date(element.attributes.wineDetails.year).getFullYear()}</p>
                    <p class="title">{element.attributes.name}</p>
                </div>
            </a>
            {/each}
        </div>
        <a href="/wines" class="basic-button">{button}</a>
    </div>
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .section-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 7vh;
        width: 70vw;
    }

    .heading-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1vh;
    }

    .wines-wrapper {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        align-items: start;
        gap: 5vw;
        width: 100%;
    }

    .item-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.5vh;
        padding-bottom: 1.5vh;
        border-bottom: 1px solid var(--light-border-color);
        border-radius: 3px;
    }

    img {
        height: 305px;
    }

    h2,h3 {
        text-align: center;
    }

    h2 {
        font-size: 40px;
        color: var(--gray-color);
    }

    h3 {
        font-size: 30px;
        font-style: italic;
    }

    p {
        text-align: center;
    }

    .title {
        font-style: italic;
        color: var(--gray-color);
    }

    .year {
        font-size: 15px;
        color: var(--dark-brown-color);

    }

    @media only screen and (max-width: 765px) {
        .wines-wrapper {
            grid-template-columns: 1fr;
            gap: 5vh;
        }

        h2 {
            font-size: 30px
        }

        h3 {
            font-size: 25px;
        }
    }


</style>