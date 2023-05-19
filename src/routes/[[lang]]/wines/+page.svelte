<script>
    import {gsap} from 'gsap/dist/gsap'
    import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
    gsap.registerPlugin(ScrollTrigger);
    import { onMount } from 'svelte';
    export let data
    let imgs
    let wines
    let winesWrapperHeight
    import { logoColor, iconColor } from "$lib/functions/store.js";
    
    function enterEffectHandler(event) {
        wines.forEach((wine)=>{
            if(wine.id != event.target.id){
                wine.style.opacity = '0.25'
                imgs.forEach((img)=>{
                    if(img.id == event.target.id){
                        img.style.opacity = '1'
                    }
                })
            }
        })
    }

    function leaveEffectHandler(event) {
        wines.forEach((wine)=>{
            if(wine.id != event.target.id){
                wine.style.opacity = '1'
                imgs.forEach((img)=>{
                    if(img.id == event.target.id){
                        img.style.opacity = '0'
                    }
                })
            }
        })
    }

    onMount(()=>{
        $logoColor = "black"
        $iconColor = "black"
        let mm = gsap.matchMedia()
        imgs = document.querySelectorAll('.wine-img')  
        wines = document.querySelectorAll('.wine-item-wrapper')
        winesWrapperHeight = document.querySelector('.wines-wrapper').clientHeight
        const imgWrapper = document.querySelector('.wine-img-absolute-wrapper')

        mm.add("(max-width: 768px)", ()=>{
            wines.forEach((wine)=>{
                gsap.from(wine, {
                    scrollTrigger: {
                        trigger: wine,
                        start: 'top 40%',
                        end: 'bottom 30%',
                        toggleActions: 'play reset play reset'
                    },
                    opacity: 0.2,
                    ease: 'none'
                })
            })
        })

        imgWrapper.style.height = `${winesWrapperHeight}px`


        wines.forEach((wine)=>{
            wine.addEventListener('mouseenter', (event)=>{
                enterEffectHandler(event)
            })

            wine.addEventListener('mouseleave', (event)=>{
                leaveEffectHandler(event)
            })
        })
    })

</script>

<section>
    <div class="section-wrapper">
        <div class="headings-wrapper">
            <h2 class="sofia-font">
                {data.wines?.winesPage.data.attributes.heroHeading}
            </h2>
            <div class="line"></div>
            <h3>
                {data.wines?.winesPage.data.attributes.heroSubheading}
            </h3>
        </div>
        <div class="wines-wrapper">
            <div class="wine-img-absolute-wrapper">
                <div class="wine-img-wrapper">
                    {#each data.wines.vinas.data as element, id }
                        <img class="wine-img" id="{id}" src="{data.imgUrl+element.attributes.image.data.attributes.formats.web.url}" alt="{element.attributes.alternativeText}">
                    {/each}
                </div>
            </div>
            {#each data.wines.vinas.data as element,id }
                <a href="/wines/{element.id}">
                    <div class="wine-item-wrapper" id={id}>
                        <img class="wine-img-mobile" id="{id}" src="{data.imgUrl+element.attributes.image.data.attributes.formats.web.url}" alt="{element.attributes.alternativeText}">
                        <h5>{element.attributes.name}</h5>
                        <p class="year">{new Date(element.attributes.wineDetails.year).getFullYear()}</p>
                        <p class="description">{element.attributes.shortDescription}</p>
                    </div>
                </a>
            {/each}
        </div>
    </div>
</section>

<style>
    .section-wrapper {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: start;
        gap: 10vh;
        padding-inline: 3vw;
        padding-top: 30vh;
        padding-bottom: 10vh;
    }

    .headings-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2vh;
    }

    h2 {
        font-size: 20px;
        text-transform: uppercase;
    }

    h3 {
        font-size: 40px;
        color: var(--gray-color);
    }
    
    .line {
        height: 1px;
        width: 50px;
        background-color: var(--light-brown-color);
    }

    .wines-wrapper {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 30vw;
    }

    .wine-item-wrapper {
        max-width: 350px;
        padding-block: 5vh;
        display: flex;
        flex-direction: column;
        gap: 1.5vh;
        transition: all 0.5s ease-in-out;
    }

    h5,p {
        text-align: center;
        font-style: italic;
    }

    h5 {
        font-size: 22xpx;
    }

    .description {
        font-size: 18px;
    }

    h5, .description {
        color: var(--gray-color);
        font-family: 'Times New Roman', Times, serif;
    }

    .year {
        color: var(--dark-brown-color);
        font-size: 18px;
    }

    .wine-img-absolute-wrapper{
        position: absolute;
        top: 50vh;
        right: 0px;
        width: 100%;
        height: 1200px;
        z-index: -1;
    }

    .wine-img-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: -webkit-sticky;
        position: sticky;
        top: 100px;
        height: 70vh;
    }

    .wine-img {
        position: absolute;
        top: 0px;
        height: 70vh;
        opacity: 0;
        transition: all 0.4s ease-in-out;
    }

    .wine-img-mobile {
        display: none;
    }

    @media only screen and (max-width: 765px) {
        .section-wrapper {
            padding-top: 15vh;
            gap: 5vh
        }

        .wine-img-absolute-wrapper{
            display: none;
        }

        .wine-item-wrapper {
            padding-block: 0vh;
            gap: 1vh;
        }

        .wines-wrapper {
            grid-template-columns: 1fr;
            row-gap: 0vh;
        }

        h2 {
            font-size: 18px;
        }

        h3 {
            font-size: 30px;
        }

        .wine-img-mobile {
            display: block;
            height: 70vw;
            object-fit: contain;
            transform: rotate(90deg);
            margin-bottom: -19vw;
        }
    }
    
</style>