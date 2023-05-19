<script>
    import Layout from "$lib/components/global/Layout.svelte";
    import HeroImage from "$lib/components/global/HeroImage.svelte";
    export let data
  </script>

  <HeroImage
    img={data.b2b?.heroImage}
    imgUrl={data.imgUrl}
  >
  </HeroImage>
  <Layout
    layout={data.b2b?.b2bPageLayout}
    imgUrl={data.imgUrl}
  ></Layout>
  