<script>
    import { getDate } from '$lib/functions/date'
    export let data
</script>

<section>
    <div class="section-wrapper">
        <div class="heading-wrapper">
            <h1 class="sofia-font">{data.singleDiary.singleDiaryPage.data.attributes.heroHeading}</h1>
            <div class="line"></div>
        </div>
        <article>
            <h2>
                {data.singleDiary.diary.data.attributes.title}
            </h2>
            <div class="column-content">
                <div class="left-column">
                    <p class="date">
                        {getDate(new Date(data.singleDiary.diary.data.attributes.publicationDate), data.locale)}
                    </p>
                    <p class="diary-content">
                        {@html data.singleDiary.diary.data.attributes.content}
                    </p>
                </div>
                <div class="right-column desktop">
                    {#each data.singleDiary.homePage.data.attributes.featuredDiary.data as element }
                        <a title="Link to a diray article - {element.attributes.title}" aria-label="Link to a diray article - {element.attributes.title}" href="/diary/{element.id}">
                            <div class="diary-item">
                                <p class="diary-date sofia-font">{getDate(new Date(element.attributes.publicationDate), data.locale)}</p>
                                <p class="diary-title">{element.attributes.title}</p>
                            </div>
                        </a>
                    {/each}
                </div>
            </div>
            <div class="imgs">
                <img width="500" height="500" loading="lazy" src="{data.imgUrl+data.singleDiary.diary.data.attributes.image.data.attributes.formats.web.url}" alt="{data.singleDiary.diary.data.attributes.image.data.attributes.alternativeText}">
                    {#each data.singleDiary.diary.data.attributes.gallery.data as element }
                        <img width="500" height="500" loading="lazy" src="{data.imgUrl+element.attributes.formats.web.url}" alt="{element.attributes.alternativeText}">
                    {/each}
            </div>
        
            <div class="right-column mobile">
                {#each data.singleDiary.homePage.data.attributes.featuredDiary.data as element }
                    <a title="Link to a diary article - {element.attributes.title}" aria-label="Link to a diary article - {element.attributes.title}" href="/diary/{element.id}">
                        <div class="diary-item">
                            <p class="diary-date sofia-font">{getDate(new Date(element.attributes.publicationDate), data.locale)}</p>
                            <p class="diary-title">{element.attributes.title}</p>
                        </div>
                    </a>
                {/each}
            </div>
        </article>
    </div>
</section>

<style>
    .desktop {
        display: flex;
    }

    .mobile {
        display: none;
    }

    .section-wrapper {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: start;
        padding-top: 30vh;
        padding-bottom: 30vh;
    }

    .line {
        width: 50px;
        height: 1px;
        background-color: var(--light-brown-color);
        margin: 20px 0;
    }

    .heading-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    h1 {
        text-transform: uppercase;
        padding-left: 3vw;
        padding-right: 3vw;
    }

    article {
        width: 75vw
    }

    article > h2 {
        text-align: center;
        font-size: 35px;
        color: var(--gray-color);
        padding-top: 5vh;
        padding-bottom: 5vh;
    }

    .diary-content {
        line-height: 30px;
    }

    :global(.diary-content h1) {
        font-size: 25px;
        line-height: 35px;
        padding-top: 20px;
    }

    :global(.diary-content h2) {
        font-size: 25px;
        line-height: 35px;
        padding-top: 20px;
    }

    :global(.diary-content h3) {
        font-size: 25px;
        line-height: 35px;
        padding-top: 20px;
    }

    :global(.diary-content h4) {
        font-size: 25px;
        line-height: 35px;
        padding-top: 20px;
    }

    :global(.diary-content h5) {
        font-size: 25px;
        line-height: 35px;
        padding-top: 20px;
    }

    .date {
        text-align: center;
        font-size: 25px;
        font-style: italic;
        text-transform: lowercase;
        padding-top: 5vh;
        padding-bottom: 5vh;
    }

    .column-content {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .left-column {
        width: 45vw;
    }

    .right-column {
        width: 20vw;
        padding-top: 14vh;
        display: flex;
        flex-direction: column;
        gap: 5vh;
    }

    .right-column p {
        font-size: 16px;
    }

    .diary-date {
        text-transform: uppercase;
    }

    .diary-title {
        font-style: italic;
        color: var(--light-brown-color)
    }

    .imgs {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10vh;
        padding-top: 10vh;
    }

    .imgs img {
        width: 50vw;
        height: 70vh;
        object-fit: contain;
    }

    .mobile {
        display: none;
    }

    @media only screen and (max-width: 765px) {
        .section-wrapper {
            padding-top: 15vh;
            padding-bottom: 15vh;
        }

        h1 {
            text-align: center;
        }

        article > h2 {
            font-size: 25px;
            padding-top: 2vh;
            padding-bottom: 2vh;
        }

        article {
            width: 90vw

        }

        .column-content {
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        .date {
            padding-top: 2vh;
            padding-bottom: 2vh;
        }

        .left-column {
            width: 100%;
        }

        .right-column {
            width: 100%;
            padding-top: 0;
        }

        .imgs {
            padding-top: 0;
        }

        .imgs img {
            max-width: 100%;
            max-height: 100%;
        }

        .desktop {
            display: none;
        }

        .mobile {
            display: flex;
        }

        .mobile p {
            text-align: center;
        }

        img {
            padding-top: 5vh;
            padding-bottom: 5vh;
        }

    }

</style>