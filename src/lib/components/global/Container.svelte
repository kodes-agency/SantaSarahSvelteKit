<div>
    <slot></slot>
</div>

<style>
    div {
        display: flex;
        flex-direction: column;
        gap: 15vh;
        padding-bottom: 10vh;
    }

    @media only screen and (max-width: 765px) {
        div {
            gap: 8vh
        }
    }
</style>