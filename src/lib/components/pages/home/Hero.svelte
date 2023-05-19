<script>
    import heroLogo from "$lib/assets/home/heroLogo.svg"

    export let logo = heroLogo
    export let title = "Главно заглавие"
    export let subTitle = "Подзаглавие"
    export let bgImg
    export let imgUrl
</script>

<section>
    <div class="section-wrapper" style="background-image: url({imgUrl+bgImg});">
        <img src={logo} alt="" style="mix-blend-mode: normal;">
        <h1>
            {title}
        </h1>
        <p class="sofia-font">
            {subTitle}
        </p>
        <svg width="49" height="25" viewBox="0 0 49 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="23.4062" y="23.8638" width="33.7483" height="1.60706" transform="rotate(-45 23.4062 23.8638)" fill="#F5F3E4"/>
            <rect width="33.7483" height="1.60706" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 25.8203 23.8638)" fill="#F5F3E4"/>
        </svg>
    </div>
      
</section>

<style>
    .section-wrapper {
        height: 100vh;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 5vh;
        position: relative;
        
    }

    h1, p {
        color: var(--white-color);
        text-align: center;
    }

    h1 {
        font-style: italic;
        font-size: 40px;
        max-width: 750px;
        padding-inline: 5vw;
    }

    p {
        text-transform: uppercase;
    }

    svg {
        position: absolute;
        top: 91vh;
        left: 50%;
        transform: translateX(-50%);
    }

    @media only screen and (max-width: 765px) {
        h1 {
            font-size: 30px;
        }
        p {
            font-size: 18px;
        }
    }
</style>

