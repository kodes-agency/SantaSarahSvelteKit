<script>
    export let layout
    export let imgUrl

</script>

<section>
    <div class="layout-section section-wrapper">
        {#each layout as element }
            {#if element.__typename == 'ComponentGlobalImage' }
                <div class="{element.imageOrientation}">
                    <img class="img-img" width="500" loading="lazy" src="{imgUrl+element.image.data.attributes.formats.web.url}" alt="{element.description}">
                    <p>{element.description}</p>
                </div>
            {/if}
            {#if element.__typename == 'ComponentGlobalTitleNText' }
            <div class="title-text-wrapper" id={element.marker}>
                {#if element.marker }
                    <div class="space"></div>
                {/if}
                    <div class="upper-heading-wrapper">
                        <h2 class="sofia-font">{element.minorHeading}</h2>
                        <div class="line"></div>
                    </div>
                    <h3>{element.majorHeading}</h3>
                    <p class="title-text-content">{@html element.text}</p>
                </div>
            {/if}
            {#if element.__typename == 'ComponentGlobalTextEditor' }
                <div class="text-editor-wrapper">
                    <h2 class="text-editor-heading">
                        {element.heading}
                    </h2>
                    <div class="text-editor-content">{@html element.text}</div>
                </div>
            {/if}
            {#if element.__typename == 'ComponentGlobalParagraph' }
                <div class="paragraph-wrapper">
                    <p class="paragraph-content">{@html element.text}</p>
                </div>
            {/if}
        {/each}
    </div>
</section>

<style>
    .section-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 15vh;
        padding-left : 15vw;
        padding-right : 15vw;
        padding-top : 15vh;
        padding-bottom : 30vh;
    }

    p {
        line-height: 30px;
    }

    /* Image style */

    .horizontal, .verticle {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1vh;
    }

    .horizontal > img {
        width: 50vw;
        aspect-ratio: 5/3;
        object-fit: cover;
        object-position: center;
    }

    .horizontal > p {
        text-align: center;
        font-style: italic;
    }

    .verticle > img {
        height: 80vh;
        aspect-ratio: 4/5;
        object-fit: cover;
        object-position: center;
    }

    .verticle > p {
        text-align: center;
        font-style: italic;
    }



    /* Title Text style */

    h2,h3,p {
        text-align: center;
    }

    .title-text-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 5vh;
    }

    .upper-heading-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
    }

    .line {
        height: 1px;
        width: 50px;
        background-color: var(--light-brown-color);
    }

    .title-text-wrapper > h3 {
        font-size: 40px;
        color: var(--gray-color);
    }

    .title-text-content {
        text-align: center;
        font-style: italic;
    }


    /* Text Editor style */

    .text-editor-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 5vh;
    }

    .text-editor-heading {
        font-size: 40px;
        color: var(--gray-color);
    }

    :global(.text-editor-content li, .text-editor-content i) {
        font-style: italic;
    }

    :global(.text-editor-content strong) {
        font-weight: bold;
    }

    :global(.text-editor-content p) {
        padding-top: 20px;
        padding-bottom: 20px;
    }

    /* Paragraph style */

    .paragraph-content {
        text-align: center;
        font-style: italic;
    }

    /* OTHERs */

    .space {
        height: 10vh;
    }

    @media only screen and (max-width: 765px) {
        .section-wrapper {
            padding-left : 5vw;
            padding-right : 5vw;
            gap: 8vh;
            padding-top : 15vh;
            padding-bottom : 15vh;
        }

        .horizontal > img {
            width: 90vw;
        }

        .verticle > img {
            height: 60vh;
        }

        p {
            line-height: 28px;
        }

        .title-text-wrapper {
            gap: 3vh;
        }

        .text-editor-wrapper {
            gap: 2vh;
        }

        :global(.text-editor-content li) {
            margin-left: 5vw;
        }

        .text-editor-heading {
            font-size: 30px;
        }

        .title-text-wrapper > h3 {
        font-size: 30px;
        }

        h2 {
            font-size: 20px;
        }
    }
</style>