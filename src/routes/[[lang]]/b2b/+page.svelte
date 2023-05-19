<script>
    import Layout from "$lib/components/global/Layout.svelte";
    import HeroImage from "$lib/components/global/HeroImage.svelte";
    export let data

    import { logoColor, iconColor } from "$lib/functions/store.js";
    import { onDestroy, onMount } from "svelte";
    import gsap from "gsap/dist/gsap";
    import ScrollTrigger from "gsap/dist/ScrollTrigger";

    gsap.registerPlugin(ScrollTrigger);

    let b2bPage

    onMount(()=>{
      const vh = (coef) => window.innerHeight * (coef/100);
        $logoColor = "white"
        $iconColor = "white"
        ScrollTrigger.create({
            trigger: b2bPage,
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
                $logoColor = "white"
                $iconColor = "white"
            },
            onLeaveBack: () => {
                $logoColor = "white"
                $iconColor = "white"
            }
        })
    })

    onDestroy(()=>{
      $logoColor = "black"
      $iconColor = "black"
    })
  </script>

<div class="b2b-page" bind:this={b2bPage}>
  <HeroImage
    img={data.b2b?.heroImage}
    imgUrl={data.imgUrl}
  >
  </HeroImage>
  <Layout
    layout={data.b2b?.b2bPageLayout}
    imgUrl={data.imgUrl}
  ></Layout>
</div>
  