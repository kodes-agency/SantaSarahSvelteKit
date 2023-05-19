<script>
    import Layout from "$lib/components/global/Layout.svelte";
    import HeroImage from "$lib/components/global/HeroImage.svelte";
    export let data

    import { logoColor, iconColor } from "$lib/functions/store.js";
    import { onDestroy, onMount } from "svelte";
    import {gsap} from "gsap/dist/gsap";
    import {ScrollTrigger} from "gsap/dist/ScrollTrigger";

    gsap.registerPlugin(ScrollTrigger);
    let cellerPage

    onMount(()=>{
      const vh = (coef) => window.innerHeight * (coef/100);
        $logoColor = "white"
        $iconColor = "white"
      const ctx = gsap.context(()=>{
        ScrollTrigger.create({
            trigger: cellerPage,
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
        return () => {
            ctx.revert()
        }
      })
    })

    onDestroy(()=>{
      $logoColor = "black"
      $iconColor = "black"
    })
  </script>

<div class="celler-page" bind:this={cellerPage}>
  <HeroImage
    img={data.celler?.heroImage}
    imgUrl={data.imgUrl}
  >
  </HeroImage>
  <Layout
    layout={data.celler?.cellerPageLayout}
    imgUrl={data.imgUrl}
  ></Layout>
</div>
  