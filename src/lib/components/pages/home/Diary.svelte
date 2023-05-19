<script>
    import { getDate } from '$lib/functions/date'
    export let title
    export let diary
    export let imgUrl
    export let locale

    const smth = "<u>something</u>"
</script>

<section>
    <div class="section-wrapper">
        {#if title }        
            <a href="/diary">
                <h2 class="sofia-font">{title}</h2>
            </a>
            <div class="line"></div>
        {/if}
        <div class="diary-wrapper">
            {#each diary as element }
            <a class="diary-item" href="/diary/{element.id}">
                <img src={imgUrl+element.attributes.image.data.attributes.formats.web.url} alt="">
                <div>
                    <p class="date sofia-font">{getDate(new Date(element.attributes.publicationDate), locale)}</p>
                    <p class="title">{element.attributes.title}</p>
                </div>
                <p class="short-description">{element.attributes.content.replace(/<[^>]+>/g, '').slice(0, 80)+"..."}</p>
            </a>
            {/each}
        </div>       
    </div>
</section>

<style>
    .section-wrapper {
        padding-inline: 5vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2vh;
    }

    h2 {
        text-transform: uppercase;
    }

    .diary-wrapper {
        display: flex;
        flex-direction: row;
        align-items: start;
        justify-content: center;
        gap: 4vw;
    }

    .diary-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2vh;
        max-width: 300px;
    }

    .line {
        width: 50px;
        height: 1px;
        background-color: var(--light-brown-color);
        margin-bottom: 20px;
    }

    img {
        border-radius: 50%;
        width: 150px;
        height: 150px;
        object-fit: cover;
        object-position: center;
    }

    p {
        text-align: center;
    }

    .date {
        font-size: 15px;
        text-transform: uppercase;
        color: var(--dark-brown-color);
    }

    .title {
        font-style: italic;
        color: var(--gray-color);
        font-size: 18px;
    }

    .short-description {
        font-size: 18px;
        line-height: 22px;
        color: var(--light-brown-color);
    }

    a > div {
        display: flex;
        flex-direction: column;
        gap: 1vh;
    }

    @media only screen and (max-width: 765px) {
        h2 {
            font-size: 18px;
        }

        img {
            width: 20vw;
            height: 20vw;
        }

        .section-wrapper {
            padding-inline: 4vw;
            gap: 1vh
        }

        .diary-wrapper {
            justify-content: space-between;
        }

        .date {
            font-size: 14px;
        }

        .title {
            font-size: 16px;;
        }

        .short-description {
            display: none;
        }

        .diary-item {
            gap: 1vh;
            max-width: 30vw;
        }
    }

    

</style>