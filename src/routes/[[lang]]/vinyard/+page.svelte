<script>
    import Layout from "$lib/components/global/Layout.svelte";
    import HeroImage from "$lib/components/global/HeroImage.svelte";
    export let data

    import { logoColor, iconColor } from "$lib/functions/store.js";
    import { onDestroy, onMount } from "svelte";
    import gsap from "gsap/dist/gsap";
    import ScrollTrigger from "gsap/dist/ScrollTrigger";

    let vinyardPage

    gsap.registerPlugin(ScrollTrigger);

    onMount(()=>{
      const vh = (coef) => window.innerHeight * (coef/100);
        $logoColor = "white"
        $iconColor = "white"

      const ctx = gsap.context(()=>{
        ScrollTrigger.create({
            trigger: vinyardPage,
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

<div class="vinyard-page" bind:this={vinyardPage}>
  <HeroImage
    img={data.vinyard?.heroImage}
    imgUrl={data.imgUrl}
  >
  </HeroImage>
  <Layout
    layout={data.vinyard?.vinyardPageLayout}
    imgUrl={data.imgUrl}
  ></Layout>
</div>
  