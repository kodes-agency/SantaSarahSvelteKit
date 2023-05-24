<script>
    export let img
    export let imgUrl
</script>

<section>
    <img src="{imgUrl+img.data.attributes.formats.web.url}" alt="{img.data.attributes.alternativeText}">
    <svg width="49" height="25" viewBox="0 0 49 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="23.4062" y="23.8638" width="33.7483" height="1.60706" transform="rotate(-45 23.4062 23.8638)" fill="#F5F3E4"/>
        <rect width="33.7483" height="1.60706" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 25.8203 23.8638)" fill="#F5F3E4"/>
    </svg>
</section>


<style>
    section {
        position: relative;
    }

    img {
        width: 100%;
        height: 100vh;
        object-fit: cover;
        z-index: 0;
    }

    svg {
        position: absolute;
        bottom: 40px;
        left: 50%;
        transform: translateX(-50%);
    }

    @media only screen and (max-width: 765px) {
        img {
            height: 100svh;
        }
    }

</style>