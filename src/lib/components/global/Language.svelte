<script>
    import { onMount } from "svelte";
    import { page } from "$app/stores";
    export let locale
    let buttons
    let section

    $: $page
    
    
    let links = ["/[[lang]]/wines/[slug]", "/[[lang]]/news/[slug]", "/[[lang]]/diary/[slug]"]

    function setLanguage(lang) {
        document.cookie = `lang=${lang}; path=/;`
        window.location.reload()
    } 

    function getGeo(){
        const geo = Intl.DateTimeFormat().resolvedOptions().timeZone.split('/')[1]
        document.cookie = `geo=${geo}; path=/;`
    }

    onMount(() => {
        getGeo()
    })
</script>

    {#if $page.route.id == "/[[lang]]/wines/[slug]"}
        <div></div>
    {:else if $page.route.id == "/[[lang]]/news/[slug]"}
        <div></div>
    {:else if $page.route.id == "/[[lang]]/diary/[slug]"}
        <div></div>
    {:else}
        <div class="section-wrapper" bind:this={section}>
            <button class='sofia-font lang-buttons {locale == "bg" ? "bold" : ""}' id="bg" on:click={()=>{setLanguage("bg")}}>бг</button>
            <button class='sofia-font lang-buttons {locale == "en" ? "bold" : ""}' id="en" on:click={()=>{setLanguage("en")}}>еn</button>
            <button class='sofia-font lang-buttons {locale == "de" ? "bold" : ""}' id="de" on:click={()=>{setLanguage("de")}}>de</button>
        </div>
    {/if}

<style>
    .section-wrapper {
        position: fixed;
        bottom: 5.5vh;
        left: 3vw;
        display: flex;
        flex-direction: column;
        z-index: 100;
    }

    .bold {
        font-weight: bold;
    }

    button {
        text-transform: uppercase;
        font-size: 23px;
        font-weight: lighter;
        background-color: transparent;
        border: none;
        margin: 0px;
        padding: 0px;
        color: var(--light-brown-color);
        cursor: pointer;
    }
</style>