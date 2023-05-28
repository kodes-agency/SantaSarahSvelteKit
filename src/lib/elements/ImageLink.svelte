<script>
    import { onMount } from "svelte";

    export let img
    export let link
    export let title


    onMount(()=>{
        const div = document.querySelectorAll('.link-wrapper')
        div.forEach((div)=>{
            div.addEventListener('mouseenter', ()=>{
                div.style.backgroundSize = '105%'
                div.childNodes.forEach((child)=>{
                    child.style.backgroundColor = 'var(--bg-color)'
                    child.style.color = 'var(--dark-brown-color)'
            })
            })
            div.addEventListener('mouseleave', ()=>{
                div.style.backgroundSize = '100%'
                div.childNodes.forEach((child)=>{
                    child.style.backgroundColor = 'transparent'
                    child.style.color = 'var(--bg-color)'
            })
            })
        })

    })
</script>

<a href={link}>
    <div class="link-wrapper" style="background-image: url({img});">
        <p class="sofia-font">{title}</p>
    </div>
</a>

<style>

    div {
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: center;
        width: 43.5vw;
        height: 50vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        transition: all 1s ease-in-out;
    }

    p {
        font-size: 15px;
        color: var(--white-color);
        text-transform: uppercase;
        border: 1px solid var(--white-color);
        border-radius: 3px;
        padding-top: 5px;
        padding-bottom: 5px;
        padding-left : 20px;
        padding-right : 20px;
    }

    @media only screen and (max-width: 765px) {
        div {
            width: 90vw;
            height: 35vh;
        }

        
    }
</style>