<script>
    import { getDate } from '$lib/functions/date'
    export let news
    export let locale

    const diary = news.map((element) => {
        return {
            id: element.id,
            title: element.attributes.title,
            content: element.attributes.content,
            publicationDate: new Date(element.attributes.publicationDate),
        }
    })

    
    const sortedDiary = diary.sort((objA, objB) => Number(objB.publicationDate) - Number(objA.publicationDate),);
    
    const years = [...new Set(sortedDiary.map((element) => element.publicationDate.getFullYear()))];
    
    const newDieary = years.map((year) => {
        return {
            year: year,
            diary: sortedDiary.filter((element) => element.publicationDate.getFullYear() === year),
        }
    })
    
    const currentDiary = newDieary.filter((element) => element.year === new Date().getFullYear());
</script>

<section>
    <div class="section-wrapper">
        {#each currentDiary[0].diary as element }
        <a href="/news/{element.id}">
            <div class="news-item">
                <p class="date sofia-font">{getDate(element.publicationDate, locale)}</p>
                <h4 class="title">{element.title}</h4>
                <p class="content">{@html element.content.slice(0, 50)+"..."}</p>
            </div>
        </a>
        {/each}
    </div>
</section>

<style>

    .section-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 5vh;
    }

    .news-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1.5vh;
    }

    h4, p {
        text-align: center;
    }

    .date {
        text-transform: uppercase;
        color: var(--light-brown-color);
        font-size: 18px;
    }

    h4 {
        font-size: 25px;
        color: var(--gray-color);
        font-style: italic;
    }

    .content {
        font-size: 16px;
        color: var(--gray-color);
    }

    @media only screen and (max-width: 765px) {
        h4 {
            font-size: 20px;
        }
    }



</style>