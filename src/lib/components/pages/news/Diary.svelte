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
            <a title="Wine diary page" aria-label="Wine diary page" href="/diary">
                <h2 class="sofia-font">{title}</h2>
            </a>
            <svg width="50" height="1" viewBox="0 0 50 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="50" y1="0.5" y2="0.5" stroke="#847748"/>
            </svg>
        {/if}
        <div class="diary-wrapper">
            {#each diary as element }
            <a title="Link to a diary article - {element.attributes.title}" aria-label="Link to a diary article - {element.attributes.title}" class="diary-item" href="/diary/{element.id}">
                <img width="80" height="80" loading="lazy" src={imgUrl+element.attributes.image.data.attributes.formats.web.url} alt="">
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

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 4vh;
    }

    h2 {
        text-transform: uppercase;
    }

    .diary-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
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
        img {
            width: 20vw;
            height: 20vw;
        }

        .section-wrapper {
            padding-left : 5vw;
            padding-right : 5vw;
        }

        .diary-wrapper {
            justify-content: start;
            align-items: start;
            flex-direction: row;
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
            gap: vh;
            max-width: 30vw;
        }


    }

    

</style>