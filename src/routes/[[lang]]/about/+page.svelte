<script>
  import Layout from "$lib/components/global/Layout.svelte";
  export let data
</script>

<Layout
  layout={data.about?.aboutPageLayout}
  imgUrl={data.imgUrl}
></Layout>
