<script>
    import Layout from "$lib/components/global/Layout.svelte";
    import HeroImage from "$lib/components/global/HeroImage.svelte";
    export let data
  </script>

  <HeroImage
    img={data.vinyard?.heroImage}
    imgUrl={data.imgUrl}
  >
  </HeroImage>
  <Layout
    layout={data.vinyard?.vinyardPageLayout}
    imgUrl={data.imgUrl}
  ></Layout>
  