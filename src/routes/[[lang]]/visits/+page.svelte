<script>
    import Layout from "$lib/components/global/Layout.svelte";
    import HeroImage from "$lib/components/global/HeroImage.svelte";
    export let data
  </script>

  <HeroImage
    img={data.visits?.heroImage}
    imgUrl={data.imgUrl}
  >
  </HeroImage>
  <Layout
    layout={data.visits?.visitsPageLayout}
    imgUrl={data.imgUrl}
  ></Layout>
  