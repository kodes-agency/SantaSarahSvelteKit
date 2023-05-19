<script>
    export let img
    export let link
    export let title
</script>

<a href={link}>
    <div class="link-wrapper" style="background-image: url({img});">
        <p class="sofia-font">{title}</p>
    </div>
</a>

<style>
    div {
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        aspect-ratio: 4/3;
        width: 35vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    p {
        font-size: 15px;
        color: var(--white-color);
        text-transform: uppercase;
        border: 1px solid var(--white-color);
        border-radius: 3px;
        padding-block: 5px;
        padding-inline: 20px;
    }

    @media only screen and (max-width: 765px) {
        div {
            width: 94vw;
        }

        div {
            aspect-ratio: 5/3.4;
        }
    }
</style>