<script>
    import "../../app.css";
    import Header from "$lib/components/global/Header.svelte";
    import Footer from "$lib/components/global/Footer.svelte";

    export let data;

</script>

<svelte:head>
    <title>{data.menu.seo.data.attributes.seoTitle}</title>
    <meta name="title" content="{data.menu.seo.data.attributes.seoTitle}">
    <meta name="description" content="{data.menu.seo.data.attributes.seoDescription}">
    <meta name="keywords" content="{data.menu.seo.data.attributes.seoKeywords}">
</svelte:head>

<Header
    menu = {data.menu}
></Header>
<div>
    <h2>There was an error</h2>
</div>
<Footer></Footer>


<style>

div {
    height: 100vh;
    width: 100%;
    background-color: var(--bg-color);
    display: flex;
    justify-content: center;
    align-items: center;
}


</style>