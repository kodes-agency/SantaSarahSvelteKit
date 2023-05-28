<script>
    import Layout from "$lib/components/global/Layout.svelte";
    import HeroImage from "$lib/components/global/HeroImage.svelte";
    import Form from "$lib/components/pages/b2b/Form.svelte";

    import { logoColor, iconColor } from "$lib/functions/store.js";
    import { onMount } from "svelte";
    export let data

    let heroHeight
    function scrollHandler (){
        let scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
            if(scrollTop + 50 > heroHeight){
                $logoColor = "black"
                $iconColor = "black"
            } else {
                $logoColor = "white"
                $iconColor = "white"
            }
    }

    onMount(()=>{
        $logoColor = "white"
        $iconColor = "white"
        heroHeight = document.querySelector('.hero-img').offsetHeight

        document.addEventListener('scroll', scrollHandler)

        return () => {
            document.removeEventListener('scroll', scrollHandler)
            $logoColor = "black"
            $iconColor = "black"
        }
    })
  </script>

<div class="hero-img">
  <HeroImage
    img={data.b2b?.heroImage}
    imgUrl={data.imgUrl}
  >
  </HeroImage>
</div>
<Layout
  layout={data.b2b?.b2bPageLayout}
  imgUrl={data.imgUrl}
></Layout>
<Form
  formData={data.form}
></Form>
