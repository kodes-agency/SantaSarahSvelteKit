<script>
    import { onMount } from "svelte";
    import { page } from '$app/stores'

    

</script>

<div class="section-wrapper">
    <a class="sofia-font selected" href="/bg">бг</a>
    <a class="sofia-font" href="/en">еn</a>
    <a class="sofia-font" href="/de">de</a>
</div>

<style>
    .section-wrapper {
        position: fixed;
        top: 85vh;
        left: 3vw;
        display: flex;
        flex-direction: column;
        z-index: 100;
    }

    a {
        text-transform: uppercase;
        font-size: 23px;
        font-weight: lighter;
        background-color: transparent;
        border: none;
        margin: 0px;
        padding: 0px;
        color: var(--light-brown-color);
    }

    .selected {
        font-weight: bold;
    }
</style>