<script>
    import { onMount } from "svelte";
    export let locale
    let buttons

    function setLanguage(lang) {
        document.cookie = `lang=${lang}; path=/;`
        window.location.reload()
    } 

    onMount(() => {
        buttons = document.querySelectorAll('.lang-buttons')
        buttons.forEach(button => {
            button.style.fontWeight = "lighter"
            if(button.id == locale){
                button.style.fontWeight = "bold"
            }
        })
    })
</script>

    <div class="section-wrapper">
        <button id="bg" on:click={()=>{setLanguage("bg")}} class="sofia-font lang-buttons">бг</button>
        <button id="en" on:click={()=>{setLanguage("en")}} class="sofia-font lang-buttons">еn</button>
        <button id="de" on:click={()=>{setLanguage("de")}} class="sofia-font lang-buttons">de</button>
    </div>

<style>
    .section-wrapper {
        position: fixed;
        bottom: 5.5vh;
        left: 3vw;
        display: flex;
        flex-direction: column;
        z-index: 100;
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