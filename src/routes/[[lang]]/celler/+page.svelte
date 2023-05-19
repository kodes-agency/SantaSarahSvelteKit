<script>
    import Layout from "$lib/components/global/Layout.svelte";
    import HeroImage from "$lib/components/global/HeroImage.svelte";
    export let data
  </script>

  <HeroImage
    img={data.celler?.heroImage}
    imgUrl={data.imgUrl}
  >
  </HeroImage>
  <Layout
    layout={data.celler?.cellerPageLayout}
    imgUrl={data.imgUrl}
  ></Layout>
  