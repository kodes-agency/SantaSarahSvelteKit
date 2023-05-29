<script>
    import { gsap } from 'gsap/dist/gsap'
    import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
    import { onMount } from 'svelte';
    import { filter } from '$lib/functions/store'
    import { page } from '$app/stores'

    export let data
    gsap.registerPlugin(ScrollTrigger);
    let mm = gsap.matchMedia()

    let wineList = data.wines.vinas.data

    let imgs
    let wines
    let winesWrapperHeight
    let imgWrapper
    let filterHeading
    let filterStatus = false
    const ctx = gsap.context({})

    function filterHandler(){
        ctx.revert()
        setTimeout(()=>{
            ctx.add(()=>{
                mm.add("(min-width: 769px)", ()=>{
                    imgs = document.querySelectorAll('.wine-img')  
                    wines = document.querySelectorAll('.wine-item-wrapper')
                    imgWrapper = document.querySelector('.wine-img-absolute-wrapper')
                    winesWrapperHeight = document.querySelector('.wines-wrapper').clientHeight
                    if(imgWrapper){
                        imgWrapper.style.height = `${winesWrapperHeight}px`
                    }
                    wines.forEach((wine)=>{
                        wine.addEventListener('mouseenter', (event)=>{
                            enterEffectHandler(event)
                        })
            
                        wine.addEventListener('mouseleave', (event)=>{
                            leaveEffectHandler(event)
                        })
                    })
                })
                mm.add("(max-width: 768px)", ()=>{
                    document.querySelectorAll('.wine-item-wrapper').forEach((wine)=>{
                        gsap.from(wine, {
                            scrollTrigger: {
                                trigger: wine,
                                start: 'top 35%',
                                end: 'bottom 30%',
                                toggleActions: 'play reset play reset'
                            },
                            opacity: 0.2,
                            duration: 0.01,
                            ease: 'none'
                        })
                    })
                })
            })
        }, 500)
        
    }


    $: { 
        if($filter == 'all'){
                wineList = data.wines.vinas.data
    
        } else {
            wineList = data.wines.vinas.data.filter((wine)=>{
                return wine.attributes.wineType.data.attributes.filterName == $filter
            })
        }
    }



    async function setFilter (value){
        $filter = value
        if($filter == 'all'){
            wineList = await data.wines.vinas.data
        } else {
            wineList = await data.wines.vinas.data.filter((wine)=>{
                return wine.attributes.wineType.data.attributes.filterName == $filter
            })
        }

        filterHandler()
    }

    
    function enterEffectHandler(event) {
        wines.forEach((wine)=>{
            wine.style.opacity = '0.25'
            imgs.forEach((img)=>{
                img.style.opacity = '0'
            })

            event.target.style.opacity = '1'
            imgs.forEach((img)=>{
                if(img.id == event.target.id){
                    img.style.opacity = '1'
                }
            })
        })
    }

    function leaveEffectHandler(event) {
        wines.forEach((wine)=>{
            wine.style.opacity = '1'
            imgs.forEach((img)=>{
                img.style.opacity = '0'
            })
        })
    }

    function filterButtonHandler(){
        const tlOpen = gsap.timeline()
        const tlClose = gsap.timeline()

        let filterContainer = document.querySelector('.filter-container')
        let filterWrapper = document.querySelector('.filter-wrapper')
        let wineWrapper = document.querySelector('.wine-img-absolute-wrapper')
        if(filterStatus == false){
            gsap.set(wineWrapper, {
                top: "calc(50vh + 230px)"
            })

            tlOpen.to(filterContainer, {
                zIndex: 1,
                height: '200px',
                opacity: 1,
                duration: 0.5,
                ease: 'power2.inOut',
            })

            tlOpen.to(filterWrapper, {
                opacity: 1,
                duration: 0.5,
                ease: 'power2.inOut'
            }, '-=0.2')
            
        } else {
            gsap.set(wineWrapper, {
                top: "50vh"
            })

            tlClose.to(filterWrapper, {
                opacity: 0,
                duration: 0.5,
                ease: 'power2.inOut'
            })

            tlClose.to(filterContainer, {
                height: '0px',
                duration: 0.5,
                opacity: 0,
                ease: 'power2.inOut',
                zIndex: -1,
            }, '-=0.2')

        }

        filterStatus = !filterStatus
    }

    onMount(()=>{
        let links = document.querySelectorAll('.menu-link')
        if($page.url.pathname == '/wines'){
            links.forEach((link)=>{
                link.addEventListener('click', ()=>{
                    filterHandler()
                })
            })
        }

        filterHandler()
        return(()=>{
            ctx.revert()
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
            <h3 class="filter-heading" bind:this={filterHeading}>
                {#if $filter == 'all' }
                   {data.wines?.winesPage.data.attributes.heroSubheading}
                {:else}
                    {wineList[0].attributes?.wineType?.data?.attributes?.wineType}
                {/if}
            </h3>

            <section class="filter-section">
                <button on:click={()=>{filterButtonHandler()}} class="filter-button sofia-font">
                    {#if filterStatus }
                        {data.wines?.winesPage.data.attributes.hideFilters} ↑
                    {:else}
                        {data.wines?.winesPage.data.attributes.showFilters} ↓
                    {/if}
                </button>
                <div class="filter-container">
                    <div class="filter-wrapper">
                        <button class="filter-item sofia-font" on:click={()=>{setFilter("all")}}>
                                {data.wines?.winesPage.data.attributes.heroSubheading}
                        </button>
                        <div class="category-wrapper">
                            {#each data.wines.wineTypes.data as element }
                                <button class="filter-item sofia-font" on:click={()=>{setFilter(element.attributes.filterName)}}>{element.attributes.wineType}</button>
                            {/each}
                        </div>
                    </div>
                            
                </div>
            </section>
        </div>
        <div class="wines-wrapper" bind:this={winesWrapperHeight}>
            <div class="wine-img-absolute-wrapper">
                <div class="wine-img-wrapper">
                    {#each wineList as element }
                        {#if element.attributes.image?.data?.attributes }
                            <img height="300px" loading="lazy" class="wine-img" id="{element.id}" src="{data.imgUrl+element.attributes.image?.data?.attributes.formats.web.url}" alt="{element.attributes.image?.data?.attributes.alternativeText}">
                        {/if}
                    {/each}
                </div>
            </div>
            {#each wineList as element }
                <a href="/wines/{element.id}">
                    <div class="wine-item-wrapper" id={element.id}>
                        {#if element.attributes.image?.data?.attributes}
                            <img height="300px" loading="lazy" class="wine-img-mobile" id="{element.id}" src="{data.imgUrl+element.attributes.image?.data?.attributes.formats.web.url}" alt="{element.attributes.alternativeText}">
                        {/if}
                        <h5>{element.attributes.name}</h5>
                        <p class="year">{new Date(element.attributes.harvestYear).getFullYear()}</p>
                        <p class="description">{element.attributes.shortDescription}</p>
                    </div>
                </a>
            {/each}
        </div>
    </div>
</section>

<style>
    .section-wrapper {
        min-height: 150vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: start;
        gap: 10vh;
        padding-top: 30vh;
        padding-bottom: 10vh;
    }

    .headings-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2vh;
        width: 100%;
    }

    h2 {
        font-size: 20px;
        text-transform: uppercase;
    }

    h3 {
        font-size: 40px;
        color: var(--gray-color);
    }

    .filter-heading {
        transition: all 0.5s ease-in-out;
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
        padding-left : 3vw;
        padding-right : 3vw;
    }

    .wine-item-wrapper {
        max-width: 350px;
        padding-top: 5vh;
        padding-bottom: 5vh;
        display: flex;
        flex-direction: column;
        gap: 1.5vh;
        transition: all 0.5s ease-in-out;
    }

    .filter-section {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2vh;
        width: 100%;
    }

    .filter-container {
        background-color: var(--bg-color);
        mix-blend-mode: multiply;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 0;
        z-index: -1;
    }

    .filter-wrapper {
        opacity: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;
        gap: 4vh;
        padding-left : 5vw;
        padding-right : 5vw;
    }

    .category-wrapper {
        display: flex;
        flex-direction: row;
        gap: 10vh;
    }

    button {
        background-color: transparent;
        border: none;
        font-size: 18px;
        color: var(--light-brown-color);
        cursor: pointer;
        transition: all 0.5s ease-in-out;
        text-transform: uppercase;
    }

    button:hover {
        text-decoration: underline;
    }

    .filter-button{
        font-size: 14px;
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
            padding-top: 0vh;
            padding-bottom: 0vh;
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

        .category-wrapper {
            flex-direction: column;
            gap: 1vh;
        }

        .filter-wrapper {
            gap: 1.5vh;
        }
    }
    
</style>