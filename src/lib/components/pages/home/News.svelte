<script>
    import { getDate } from '$lib/functions/date'
    import { onMount } from 'svelte'
    export let title = "Заглавие"
    export let news
    export let locale


    onMount(() => {
        const news = document.querySelectorAll('.new')
        const innerLine = document.querySelectorAll('.inner-line')

        for(let i = 0; i < news.length-1; i++) {
            innerLine[i].style.display = 'block'
        }
    })

</script>

<section>
    <div class="section-wrapper">
        <div class="heading-wrapper">
            <div class="line"></div>
            <a href="/news">
                <h2>{title}</h2>
            </a>
            <div class="line"></div>
        </div>
        <div class="news-wrapper">
            {#each news as element }
            <a href="/news/{element.id}">
                <article class="new">
                    <p class="date sofia-font">{getDate(new Date(element.attributes.publicationDate), locale)}</p>
                    <p class="title">{element.attributes.title}</p>
                    <div class="line-news"></div>
                    <div class="inner-line"></div>
                </article>
            </a>
            {/each}
        </div>
        <div class="line"></div>
    </div>
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .section-wrapper {     
        width: 85vw;
        display: inherit;   
        flex-direction: column;
        gap: 6vh;
    }

    h2 {
        font-size: 30px;
        font-style: italic;
    }

    .heading-wrapper {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 3vw;
    }

    .line {
        height: 1px;
        width: 100%;
        background-color: var(--light-brown-color);
    }

    .inner-line{
        height: 1px;
        width: 250px;
        background-color: var(--light-brown-color);
        margin-top: 10px;
        display: none;
    }

    .date {
        font-size: 15px;
        color: var(--dark-brown-color);
        text-transform: uppercase;
    }

    .title {
        color: var(--gray-color);
        font-style: italic;
        max-width: 650px;
    }

    .news-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 3vh;
    }

    article {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1vh;
    }

    p {
        text-align: center;
    }

    @media only screen and (max-width: 765px) {

    }
</style>