<script>
    import { getDate } from '$lib/functions/monthYear'
    export let data
    $: pageData = data.singleWine.singleWinePage.data.attributes
    $: wineData = data.singleWine.vina.data.attributes



</script>

<section>
    <div class="section-wrapper">
        <!-- Main section -->
        <div class="main-section">
            <p class="upper-heading sofia-font">{pageData.heroHeading}</p>
            <div class="line-heading"></div>
            <div class="wine-meta">
                <h1>
                    {wineData.name}
                </h1>
                <p class="year sofia-font">
                    {new Date(wineData.harvestYear).getFullYear()}
                </p>
                {#if wineData.image?.data?.attributes }
                    <img height="600px" loading="lazy" src="{data.imgUrl+wineData.image?.data?.attributes.formats.web.url}" alt="{wineData.image?.data?.attributes.alternativeText}">
                {/if}
                <p class="description">
                    {wineData.longDescription}
                </p>
            </div>
        </div>

        <!-- Technical information section -->
        <div class="t-d-section">
            <div class="t-d-item">
                <p class="t-d-name sofia-font">{pageData.alchohol}</p>
                <p class="t-d-content">{wineData.wineDetails.alchohol}</p>
            </div>
            <div class="t-d-item">
                <p class="t-d-name sofia-font">{pageData.acid}</p>
                <p class="t-d-content">{wineData.wineDetails.acids}</p>
            </div>
            <div class="t-d-item">
                <p class="t-d-name sofia-font">{pageData.sugars}</p>
                <p class="t-d-content">{wineData.wineDetails.sugars}</p>
            </div>
            <div class="t-d-item">
                <p class="t-d-name sofia-font">{pageData.volume}</p>

                <div class="row">
                    {#each wineData.wineDetails.volumeNCount as element, id }
                        <p class="t-d-content">
                            {#if id > 0 }
                                <span>&#160/</span>
                            {/if}
                            {element.volume} {pageData.unit}
                        </p>
                    {/each}
                </div>
            </div>
            <div class="t-d-item">
                <p class="t-d-name sofia-font">{pageData.closing}</p>
                <p class="t-d-content">
                    {#each wineData.wineDetails.closing.data as element }
                        <p>{element.attributes.capType}</p>
                    {/each}
                </p>
            </div>
            <div class="t-d-item">
                <p class="t-d-name sofia-font">{pageData.year}</p>
                <p class="t-d-content t-d-year">{getDate(new Date(wineData.wineDetails.year), data.locale)}</p>
            </div>
            <div class="t-d-item">
                <p class="t-d-name sofia-font">{pageData.bottlesProduced}</p>

                <div class="row">
                    {#each wineData.wineDetails.volumeNCount as element, id }
                        <p class="t-d-content">
                            {#if id > 0 }
                                <span>&#160/</span>
                            {/if}
                            {element.bottlesProduced}
                        </p>
                    {/each}
                </div>
                
            </div>
            <div class="t-d-item">
                <p class="t-d-name sofia-font">{pageData.temperature}</p>
                <p class="t-d-content">{wineData.wineDetails.temperatureC} °C / {wineData.wineDetails.temperatureF} °F</p>
            </div>
        </div>

        <!-- Awards section -->
        {#if wineData.wineAwards[0]}            
            <div class="awards-section">
                <div class="awards-heading-wrapper">
                    <div class="awards-line"></div>
                    <h3>
                        {pageData.rewardsHeading}
                    </h3>
                    <div class="awards-line"></div>
                </div>
                <div class="awards-wrapper">
                    {#each wineData.wineAwards as element }
                        <div class="award-item">
                            <p class="award-year">{element.year}</p>
                            <p class="award-description">{element.awardDescription}</p>
                        </div>
                    {/each}
                </div>
                <div class="awards-line"></div>
            </div>
        {/if}

        <!-- Wine information section -->
        <div class="information-wrapper">
            <div class="information-item-wrapper">
                <h3>{pageData.vinification}</h3>
                <p>{wineData.wineInformation.vinification}</p>
            </div>
            <div class="information-item-wrapper">
                <h3>{pageData.maturation}</h3>
                <p>{wineData.wineInformation.maturation}</p>
            </div>
            <div class="information-item-wrapper">
                <h3>{pageData.degustaion}</h3>
                <p>{wineData.wineInformation.degustaion}</p>
            </div>
            <div class="information-item-wrapper">
                <h3>{pageData.food}</h3>
                <p>{wineData.wineInformation.food}</p>
            </div>
        </div>
        {#if wineData.winePasspordPDF?.data?.attributes }  
            <a class="basic-button" href="{data.imgUrl+wineData.winePasspordPDF.data.attributes.url}" download target="_blank">{pageData.buttonText}</a>
        {/if}

    </div>
</section>

<style>

    /* Mian section */
    .section-wrapper {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10vh;
        padding-left : 10vw;
        padding-right : 10vw;
        padding-top: 20vh;
        padding-bottom: 20vh;
    }

    .main-section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2vh;
    }

    .upper-heading {
        text-transform: uppercase;
        color: var(--light-brown-color);
    }

    .line-heading {
        width: 50px;
        height: 1px;
        background-color: var(--light-brown-color);
        margin-bottom: 5vh;
    }

    .wine-meta {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-self: center;
        gap: 3vh;
    }

    .wine-meta > h1 {
        color: var(--gray-color);
        font-size: 40px;
        text-align: center;
    }

    .wine-meta > .year {
        color: var(--light-brown-color);
    }

    .wine-meta > img {
        transform: rotate(90deg);
        height: 60vw;
        margin-top: -18vw;
        margin-bottom: -18vw;
    }

    .wine-meta > .description {
        text-align: center;
        font-style: italic;
        line-height: 30px;
        max-width: 70vw;
    }



    /* Technical details section*/

    .t-d-section {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
        gap: 5vw;
        width: 60vw;
    }

    .t-d-item {
        min-width: 200px;
    }

    .t-d-item > p {
        text-align: center;
    }

    .t-d-name {
        color: var(--light-brown-color);
    }

    .t-d-content {
        font-style: italic;
        padding-top: 10px;
    }

    .t-d-year {
        text-transform: lowercase;
    }

    .row {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }




    /* Awards section*/

    .awards-section {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 5vh
    }

    .awards-heading-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 2vw;
        width: 60vw;
    }

    .awards-line {
        width: 100%;
        height: 1px;
        background-color: var(--light-brown-color);
    }

    .awards-heading-wrapper > h3 {
        font-size: 30px;
    }

    .awards-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 4vh
    }

    .award-item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: 400px;
        gap: 1vh;
    }

    .award-item > p {
        text-align: center;
    }

    .award-year {
        color: var(--light-brown-color);
    }

    .award-description {
        font-style: italic;
    }




    /* Wine information section */

    .information-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-left : 10vw;
        padding-right : 10vw;
        padding-top: 5vh;
        padding-bottom: 5vh;
        gap: 10vh;
    }

    .information-item-wrapper {
        display: flex;
        flex-direction: column;
        gap: 5vh;
    }

    .information-item-wrapper > h3 {
        text-align: center;
        font-size: 40px;
        color: var(--gray-color)
    }

    .information-item-wrapper > p {
        text-align: center;
        font-style: italic;
        line-height: 30px;
    }


    @media only screen and (max-width: 900px) {
        .section-wrapper {
            padding-left : 5vw;
            padding-right : 5vw;
            padding-top: 15vh;
            padding-bottom: 15vh;
        }

        .line-heading {
            margin-bottom: 2vh;
        }

        .wine-meta > h1 {
            font-size: 30px;
        }

        .wine-meta > img {
            height: 80vw;
            margin-top: -28vw;
            margin-bottom: -25vw;
        }

        .wine-meta > .description {
            max-width: 85vw;
        }

        .awards-heading-wrapper {
            width: 90vw;
        }

        .information-wrapper {
            padding-left : 5vw;
            padding-right : 5vw;
            padding-top: 0vh;
            padding-bottom: 0vh;
            gap: 6vh;
        }

        .information-item-wrapper {
            gap: 2vh
        }

        .information-item-wrapper > h3 {
            font-size: 30px;
        }

    }

</style>