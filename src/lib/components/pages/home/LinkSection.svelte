<script>
    import ImageLink from "$lib/elements/ImageLink.svelte";
    export let links
    export let imgUrl
</script>

<section>
    <div class="section-wrapper">
        {#each links as element }
            <ImageLink
                img={imgUrl+element.img}
                title={element.title}
                link={element.link}
            ></ImageLink>
        {/each}
    </div>
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    .section-wrapper {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        justify-content: center;
        gap: 3vw;
        width: 90vw;    
    }

    @media only screen and (max-width: 765px) {
        .section-wrapper {
            grid-template-columns: 1fr;
            width: auto;
            gap: 0vw;
        }
    }
</style>