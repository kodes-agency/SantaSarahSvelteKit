<script>
    import { getDate } from '$lib/functions/date'
    export let news
    export let locale

    const diary = news.map((element) => {
        return {
            id: element.id,
            title: element.attributes.title,
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

    const pastDiary = newDieary.filter((element) => element.year < new Date().getFullYear());

</script>

<section>
    {#each pastDiary as element }
    <div class="year-wrapper">
        <div class="heading-wrapper">
            <p class="year-heading sofia-font">{element.year}</p>
            <div class="line"></div>
        </div>
        <div class="year-archive-wrapper">
            {#each element.diary as diary }
                <a href="/news/{diary.id}">
                    <div class="item">
                        <p class="date sofia-font">{getDate(new Date(diary.publicationDate), locale)}</p>
                        <p class="title">{diary.title}</p>
                    </div>
                </a>
            {/each}
        </div>
    </div>
    {/each}
</section>

<style>
    section {
        width: 70vw;
    }

    .year-wrapper {
        padding-block: 10vh;
        display: flex;
        flex-direction: column;
        gap: 5vh;
    }

    .year-heading {
        font-size: 25px;
        color: var(--light-brown-color);
    }

    .year-archive-wrapper {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        column-gap: 5vw;
        row-gap: 3vh;
    }

    .heading-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-self: center;
    }

    .date {
        font-size: 18px;
        color: var(--gray-color);
        text-transform: uppercase;
    }

    .title {
        font-size: 18px;
        color: var(--light-brown-color);
        font-style: italic;
    }

    .line {
        width: 50px;
        height: 1px;
        background-color: var(--light-brown-color);
        margin-block: 2vh;
    }

    @media only screen and (max-width: 765px) {
        .year-wrapper {
            gap: 1vh;
            padding-block: 2vh;
        }

        section {
            width: 90vw;
        }

        .date, .title {
            text-align: center;
        }

    }
</style>