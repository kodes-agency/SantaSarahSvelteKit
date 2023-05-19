<script>
  import Layout from "$lib/components/global/Layout.svelte";
  export let data
  import { onMount } from "svelte";
    import { logoColor, iconColor } from "$lib/functions/store.js";

    onMount(()=>{
        $logoColor = "black"
        $iconColor = "black"
    })
</script>

<Layout
  layout={data.about?.aboutPageLayout}
  imgUrl={data.imgUrl}
></Layout>
