<script>
    import Hero from "$lib/components/pages/home/Hero.svelte";
    import About from "$lib/components/pages/home/About.svelte";
    import Container from "$lib/components/global/Container.svelte";
    import Diary from "$lib/components/pages/home/Diary.svelte";
    import News from "$lib/components/pages/home/News.svelte";
    import LinkSection from "$lib/components/pages/home/LinkSection.svelte";
    import FeaturedWines from "$lib/components/pages/home/FeaturedWines.svelte";
    import {gsap} from "gsap/dist/gsap";
    import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
    import { onDestroy, onMount } from "svelte";
    import { logoColor, iconColor } from "$lib/functions/store.js";
    import { navigating } from "$app/stores";

    gsap.registerPlugin(ScrollTrigger);

    export let data    

    let links1 = [
        {
            img: data.home?.aboutLinkImage?.data.attributes.formats.web.url,
            title: data.home?.aboutLink,
            link: "/about"
        },
        {
            img: data.home?.winesLinkImage?.data.attributes.formats.web.url,
            title: data.home?.winesLink,
            link: "/wines"
        }
    ]
    let links2 = [
        {
            img: data.home?.cellerLinkImage?.data.attributes.formats.web.url,
            title: data.home?.cellerLink,
            link: "/celler"
        },
        {
            img: data.home?.vinyardLinkImage?.data.attributes.formats.web.url,
            title: data.home?.vinyardLink,
            link: "/vinyard"
        },
        {
            img: data.home?.visitsLinkImage?.data.attributes.formats.web.url,
            title: data.home?.visitsLink,
            link: "/visits"
        },
        {
            img: data.home?.b2bLinkImage?.data.attributes.formats.web.url,
            title: data.home?.b2bLink,
            link: "/b2b"
        }
    ]

    let homePage

    onMount(()=>{
        const vh = (coef) => window.innerHeight * (coef/100);
        $logoColor = "none"
        $iconColor = "white"

        const ctx = gsap.context(()=>{
            ScrollTrigger.create({
                trigger: homePage,
                start: vh(100)+"top",
                onEnter: () => {
                    $logoColor = "black"
                    $iconColor = "black"
                },
                onEnterBack: () => {
                    $logoColor = "black"
                    $iconColor = "black"
                },
                onLeave: () => {
                    $logoColor = "none"
                    $iconColor = "white"
                },
                onLeaveBack: () => {
                    $logoColor = "none"
                    $iconColor = "white"
                }
            })
        })

        return () => {
            ctx.revert()
        }
    })

    onDestroy(()=>{
        $logoColor = "black"
        $iconColor = "black"
    })


</script>

<div class="home-page" bind:this={homePage}>
    <Container>
        <Hero
            title={data.home?.heroHeading}
            subTitle={data.home?.heroSubheading}
            bgImg={data.home?.heroImage?.data.attributes.formats.web.url}
            imgUrl={data.imgUrl}
        ></Hero>
        <About
            img={data.home?.aboutImage?.data.attributes.formats.web.url}
            imgUrl={data.imgUrl}
            text={data.home?.aboutText}
            button={data.home?.aboutButton}
        >
        </About>
        <Diary
            title={data.home?.diaryHeading}
            diary={data.home?.featuredDiary.data}
            imgUrl={data.imgUrl}
            locale={data.locale}
        ></Diary>
        <News
            title={data.home?.newsHeading}
            news={data.home?.featuredNews.data}
            locale={data.locale}
        ></News>
        <LinkSection
            links={links1}
            imgUrl={data.imgUrl}
        ></LinkSection>
        <FeaturedWines
            title={data.home?.featuredWinesHeading}
            subTitle={data.home?.featuredWinesSubheading}
            wines={data.home?.featuredWines.data}
            button={data.home?.featuredButton}
            imgUrl={data.imgUrl}
        ></FeaturedWines>
        <LinkSection
            links={links2}
            imgUrl={data.imgUrl}
        ></LinkSection>
    </Container>
</div>
