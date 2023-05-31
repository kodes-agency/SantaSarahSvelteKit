<script>
    import "../../app.css";
    import Header from "$lib/components/global/Header.svelte";
    import Footer from "$lib/components/global/Footer.svelte";
    import Language from "$lib/components/global/Language.svelte";
    import AgeConsent from "$lib/components/global/AgeConsent.svelte";
    import '@beyonk/gdpr-cookie-consent-banner/style.css' // optional, you can also define your own styles
    import { Banner as GdprBanner } from '@beyonk/gdpr-cookie-consent-banner'
    import { gsap } from "gsap/dist/gsap";
    
    
    export let data;

    function initAnalytics () {
        // do something with segment.io or google analytics etc
    }
    function initTracking () {
        (g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=`https://maps.${c}apis.com/maps/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})({
            key: "AIzaSyBiC2VtbYqBF9LiGUlRqQVyZ8O_NtG0I74",
            v: "weekly",
        });
    }
    function initNecessary () {
        // do something with segment.io or google analytics etc
    }
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
<Language
    locale = {data.locale}
></Language>
<AgeConsent
    content = {data.menu.ageConsent.data.attributes}
    imgUrl = {data.imgUrl}
></AgeConsent>
<GdprBanner 
    heading={data.menu.cookiesGdpr.data.attributes.cookieHeading}
    description = {data.menu.cookiesGdpr.data.attributes.cookieDescription}
    cookieName="gdpr_cookie_consent"
    acceptLabel={data.menu.cookiesGdpr.data.attributes.cookieAcceptLabel}
    rejectLabel={data.menu.cookiesGdpr.data.attributes.cookieRejectLabel}
    closeLabel={data.menu.cookiesGdpr.data.attributes.cookieCloseLabel}
    choices={{
        necessary: {
            label: `${data.menu.cookiesGdpr.data.attributes.cookieNecessaryLabel}`,
            description: `${data.menu.cookiesGdpr.data.attributes.cookieNecessaryDescription}`,
            value: true
        },
        tracking: {
            label: `${data.menu.cookiesGdpr.data.attributes.cookieTrackingLabel}`,
            description: `${data.menu.cookiesGdpr.data.attributes.cookieTrackingDescription}`,
            value: true
        },
        analytics: {
            label: `${data.menu.cookiesGdpr.data.attributes.cookieAnalyticsLabel}`,
            description: `${data.menu.cookiesGdpr.data.attributes.cookieAnalyticsDescription}`,
            value: true
        },
        marketing: false
    }}
    on:analytics={initAnalytics}
    on:tracking={initTracking}
    on:necessary={initNecessary}
/>
<main class="body">
    <slot></slot>
</main>
<Footer
    menu = {data.menu}
></Footer>


<style>

    :global(.cookieConsentWrapper){
        background-color: var(--bg-color);
    }

    :global(.cookieConsent__Button){
        border: 1px solid var(--dark-brown-color);
        background-color: transparent;
        text-transform: uppercase;
        font-size: 15px;
        padding-top: 6px;
        padding-bottom: 6px;
        padding-left : 20px;
        padding-right : 20px;
        border-radius: 3px;
        transition: all 0.3s ease-in-out;
        font-family: 'Sofia Sans', sans-serif;
        color: var(--dark-brown-color);
    }

    :global(.cookieConsent__Button:hover){
        background-color: var(--dark-brown-color);
        color: var(--bg-color);
    }

    :global(.cookieConsent__Title){
        font-family: 'Sofia Sans', sans-serif;
        color: var(--dark-brown-color);
    }

    :global(.cookieConsent__Description a){
        color: var(--dark-brown-color);
    }

    :global(.cookieConsentOperations__List){
        background-color: var(--bg-color);
        border-radius: 3px;
    }

    :global(.cookieConsentOperations__List span, .cookieConsentOperations__List label){
        color: var(--dark-brown-color);
    }

    :global(.cookieConsentOperations__List label){
        font-family: 'Sofia Sans', sans-serif;
    }

    :global(.cookieConsentOperations__Item label::after){
        background: var(--light-brown-color);
    }

    :global(.cookieConsentOperations__Item input:checked+label::after){
        background: var(--dark-brown-color);
    }
        
    :global(.cookieConsentToggle){
        background: var(--bg-color);
        color: var(--light-brown-color);
        right: 3vw;
        bottom: 5.5vh;
    }

    :global(.cookieConsentToggle:hover){
        transform: scale(1.1);
        background: var(--dark-brown-color);
        color: var(--bg-color);
    }



</style>