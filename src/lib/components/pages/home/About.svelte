<script>
    export let img
    export let imgUrl
    export let text = "Текст"
    export let button = "Клик"
</script>

<section>
    <div class="section-wrapper">
        <img width="500" height="500" loading="lazy" src={imgUrl+img} alt="">
        <div class="text-wrapper">
            <p>
                {@html text}
            </p>
        </div>
        <a title="About page" aria-label="About page" href="/about" class="basic-button">{button}</a>
    </div>
</section>

<style>
    .section-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 7vh;
        padding-left : 5vw;
        padding-right : 5vw;
    }

    img {
        width: 380px;
        height: auto;
    }

    p {
        text-align: center;
        max-width: 750px;
        color: var(--grat-color);
        font-style: italic;
        line-height: 30px;
    }

    .text-wrapper {
        display: flex;
        flex-direction: column;
        gap: 2vh;
    }

    @media only screen and (max-width: 765px) {
        img {
            width: 60vw;
        }

        p {
            font-size: 18px;
            line-height: 25px;
        }
    }
</style>