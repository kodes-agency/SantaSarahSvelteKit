<script>
    import "../../app.css";
    import Header from "$lib/components/global/Header.svelte";
    import Footer from "$lib/components/global/Footer.svelte";
    import Language from "$lib/components/global/Language.svelte";
    export let data;

</script>

<Header
    menu = {data.menu}
></Header>
<Language></Language>
<main>
    <slot></slot>
</main>
<Footer></Footer>
