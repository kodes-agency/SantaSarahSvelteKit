<script>
    export let menu;
    import { menuState, animationClose, animationOpen } from "$lib/functions/store.js";
    import gsap from "gsap/dist/gsap"
    import { onMount } from "svelte";
    let menuData = menu.menu.data.attributes;
    let contact = menu.contactPage.data.attributes;

    function clickHandle() {
        console.log('close')
        $menuState = true
        const closeTl = gsap.timeline({
            onStart: () => {
                $animationClose = true
            },
            onComplete: () => {
                $animationClose = false
            }
        })
        
        if ($animationOpen) {
            
            return
        }
        closeTl.to('.menu-section-wrapper', {
            duration: 0.7,
            opacity: 0,
            ease: "Sine.easeOut",
            y: -30,
        }, '-=0.5')

        
        closeTl.to('.modal-menu', {
            duration: 0.5,
            opacity: 0,
            ease: 'power2.inOut',
        })
        
        gsap.set('.nav-wrapper', {
            opacity: 1,
        })
        
        closeTl.set('.modal-menu', {
            display: 'none',
            opacity: 1,
        })

        closeTl.set('.menu-section-wrapper', {
            opacity: 1,
            y: 0,
        })
    }

</script>

<section>
    <div class="menu-section-wrapper">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <button class="icon" on:click={clickHandle}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_452_187)">
                <path d="M10.94 10L19.6734 1.26671C19.9334 1.00671 19.9334 0.586714 19.6734 0.326714C19.4134 0.0667139 18.9934 0.0667139 18.7334 0.326714L10 9.06005L1.26671 0.326714C1.00671 0.0667139 0.586714 0.0667139 0.326714 0.326714C0.0667139 0.586714 0.0667139 1.00671 0.326714 1.26671L9.06005 10L0.326714 18.7334C0.0667139 18.9934 0.0667139 19.4134 0.326714 19.6734C0.460047 19.8067 0.626714 19.8667 0.800047 19.8667C0.973381 19.8667 1.14005 19.8 1.27338 19.6734L10 10.94L18.7334 19.6734C18.8667 19.8067 19.0334 19.8667 19.2067 19.8667C19.38 19.8667 19.5467 19.8 19.68 19.6734C19.94 19.4134 19.94 18.9934 19.68 18.7334L10.94 10Z" fill="#222221"/>
                </g>
                <defs>
                <clipPath id="clip0_452_187">
                <rect width="20" height="20" fill="white"/>
                </clipPath>
                </defs>
            </svg> 
        </button>
        <a on:click={clickHandle} href="/" data-sveltekit-reload>   
            <svg width="96" height="105" viewBox="0 0 96 105" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_144_2602)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.8644 93.4571V92.4939C19.9069 92.0925 21.4827 91.6109 21.5941 91.5868C21.7294 91.5547 21.984 91.5788 21.984 91.7153V93.6096C23.3449 92.2209 24.4989 91.5868 25.2947 91.5868C27.0933 91.5868 27.9289 93.8745 27.9289 95.7849V102.905C27.9289 103.306 28.1836 103.86 28.4781 103.86H29.2261V104.944H25.1196V103.86H25.7404C26.0667 103.86 26.4328 103.25 26.4328 102.929V95.8892C26.4328 94.7414 26.0508 93.1119 24.3556 93.2163C23.3529 93.2805 22.5252 93.9788 21.984 95.0464V102.905C21.984 103.306 22.3342 103.86 22.6287 103.86H23.2653V104.944H19.1747V103.86H19.7955C20.1218 103.86 20.4879 103.25 20.4879 102.929V94.2196C20.4879 93.7782 20.1456 93.4571 19.8989 93.4571H18.8564H18.8644ZM31.6296 101.58V93.5213H30.0856V92.1487C30.6029 92.1648 31.1123 92.1808 31.6296 92.1969V88.9941L33.1496 87.9908V92.2209C34.224 92.2209 35.3063 92.2691 36.3966 92.2049V93.5454L33.1496 93.5614V101.693C33.1496 103.033 33.8261 103.547 34.6856 103.547C35.1472 103.547 35.6485 103.515 36.3091 103.202V104.414C35.561 104.759 34.7413 104.952 33.7067 104.952C33.5237 104.952 32.9029 104.871 32.3219 104.414C31.6534 103.892 31.6296 102.544 31.6296 101.572V101.58ZM85.2132 83.897V82.677L88.0703 82.2676C88.2453 82.2435 88.4284 82.38 88.4284 82.7331V93.9146C89.6858 91.8678 91.0785 91.6671 91.8823 91.6671C93.6809 91.6671 94.5165 93.8584 94.5165 95.7769V102.897C94.5165 103.298 94.7712 103.852 95.0657 103.852H95.8137V104.936H91.7072V103.852H92.328C92.6543 103.852 93.0204 103.242 93.0204 102.921V96.1301C93.0204 94.9822 92.4951 93.3287 90.792 93.441C89.7893 93.5053 88.9616 94.2919 88.4204 95.3595V102.897C88.4204 103.298 88.7706 103.852 89.065 103.852H89.7017V104.936H85.6111V103.852H86.2319C86.5582 103.852 86.9242 103.242 86.9242 102.921V84.8442C86.9242 84.1459 86.5184 83.897 85.9852 83.897H85.1973H85.2132ZM69.5193 93.4892V92.4457C70.6176 92.2691 71.9148 91.5547 72.0262 91.5306C72.2252 91.4825 72.4957 91.5948 72.4957 91.9561V96.5796C72.8618 95.1588 73.204 94.324 73.6338 93.3929C74.1829 92.1969 74.8435 91.4985 75.5279 91.4905C76.4113 91.4905 76.7773 92.1246 76.7853 92.9996C76.7853 93.5133 75.8621 94.0992 75.6154 93.9066C75.4642 93.73 75.2016 93.6979 74.9708 93.714C73.8248 93.7862 72.8618 96.8605 72.5037 98.6987V102.897C72.5037 103.298 72.8539 103.852 73.1483 103.852H74.4774V104.936H69.6944V103.852H70.3151C70.6414 103.852 71.0075 103.242 71.0075 102.921V94.316C71.0075 93.9307 70.6255 93.4892 70.2515 93.4892H69.5273H69.5193ZM1.19679 101.219C1.19679 102.664 2.56563 103.555 3.92651 103.555C6.40156 103.555 7.07802 101.516 7.06211 99.3167C7.04619 97.5348 6.50502 96.1541 4.07772 94.7976C1.89713 93.5695 0.512375 91.7955 0.512375 89.1868C0.512375 85.7352 2.54972 83.4716 5.75694 83.4716C6.6244 83.4716 7.99323 83.6643 8.57419 83.9693V88.7132H7.47594L7.3884 86.3774C7.34861 85.39 6.30606 84.8201 5.38289 84.8041C3.66389 84.7639 2.31892 86.7707 2.31892 88.4965C2.31892 90.5995 2.89988 91.5306 5.27147 92.839C7.53165 94.0912 8.92436 96.0498 8.92436 98.6184C8.92436 100.537 8.62194 102.463 7.18944 103.715C6.06731 104.695 4.56318 104.992 3.06701 104.992C2.20751 104.992 0.97396 104.574 0.170166 104.125L0.241791 99.2686C0.512375 99.2525 0.894377 99.2605 1.18884 99.2605V101.219H1.19679ZM41.5138 99.0117L42.8031 98.8913V101.845C42.5564 102.126 41.9993 102.744 41.6889 102.921C40.9568 103.338 40.0018 103.539 39.4288 103.057C38.6966 102.439 38.7762 100.721 39.2457 100.135C39.763 99.4853 40.6464 99.092 41.5218 99.0197L41.5138 99.0117ZM42.9145 103.21L42.9464 104.269C42.9543 104.598 43.1612 104.815 43.6228 104.815H45.5646V103.732H45.0155C44.5619 103.732 44.2834 103.29 44.2834 102.704V95.4397C44.2674 92.7668 42.8747 91.6591 41.3865 91.6591C39.7471 91.6751 38.5772 93.5293 37.9405 94.5568L38.6807 95.1026C39.5322 93.7862 40.2883 93.0879 41.1557 93.0879C42.3893 93.0638 42.8031 94.019 42.8031 95.0464V97.8318C41.1876 97.896 38.9274 98.0966 37.853 99.8305C37.1686 100.946 37.1527 102.68 37.8132 103.78C38.2589 104.518 39.0229 104.879 39.9779 104.871C40.6225 104.871 41.1875 104.679 41.8481 104.189C42.1187 103.988 42.628 103.547 42.9066 103.202L42.9145 103.21ZM13.9938 99.0117L15.2831 98.8913V101.845C15.0364 102.126 14.4793 102.744 14.1689 102.921C13.4368 103.338 12.4817 103.539 11.9087 103.057C11.1766 102.439 11.2562 100.721 11.7257 100.135C12.243 99.4853 13.1264 99.092 14.0018 99.0197L13.9938 99.0117ZM15.3945 103.21L15.4263 104.269C15.4343 104.598 15.6412 104.815 16.1028 104.815H18.0446V103.732H17.4955C17.0419 103.732 16.7633 103.29 16.7633 102.704V95.4397C16.7474 92.7668 15.3547 91.6591 13.8665 91.6591C12.2271 91.6751 11.0572 93.5293 10.4205 94.5568L11.1607 95.1026C12.0122 93.7862 12.7682 93.0879 13.6357 93.0879C14.8693 93.0638 15.2831 94.019 15.2831 95.0464V97.8318C13.6675 97.896 11.4074 98.0966 10.333 99.8305C9.64857 100.946 9.63266 102.68 10.2932 103.78C10.7389 104.518 11.5029 104.879 12.4579 104.871C13.1025 104.871 13.6675 104.679 14.3281 104.189C14.5987 103.988 15.108 103.547 15.3866 103.202L15.3945 103.21ZM64.5135 99.0117L65.8028 98.8913V101.845C65.5561 102.126 64.999 102.744 64.6886 102.921C63.9564 103.338 63.0014 103.539 62.4284 103.057C61.6962 102.439 61.7758 100.721 62.2454 100.135C62.7627 99.4853 63.646 99.092 64.5215 99.0197L64.5135 99.0117ZM65.9142 103.21L65.946 104.269C65.954 104.598 66.1609 104.815 66.6225 104.815H68.5643V103.732H68.0152C67.5616 103.732 67.283 103.29 67.283 102.704V95.4397C67.2671 92.7668 65.8744 91.6591 64.3862 91.6591C62.7467 91.6751 61.5769 93.5293 60.9402 94.5568L61.6803 95.1026C62.5319 93.7862 63.2879 93.0879 64.1554 93.0879C65.3889 93.0638 65.8028 94.019 65.8028 95.0464V97.8318C64.1872 97.896 61.927 98.0966 60.8527 99.8305C60.1682 100.946 60.1523 102.68 60.8129 103.78C61.2585 104.518 62.0225 104.879 62.9775 104.871C63.6222 104.871 64.1872 104.679 64.8478 104.189C65.1183 103.988 65.6277 103.547 65.9062 103.202L65.9142 103.21ZM51.5891 101.211C51.5891 102.656 52.958 103.547 54.3188 103.547C56.7939 103.547 57.4704 101.508 57.4544 99.3087C57.4385 97.5267 56.8974 96.1461 54.4701 94.7896C52.2895 93.5614 50.9047 91.7875 50.9047 89.1787C50.9047 85.7272 52.9421 83.4636 56.1493 83.4636C57.0167 83.4636 58.3856 83.6562 58.9665 83.9613V88.7052H57.8683L57.7807 86.3693C57.7409 85.382 56.6984 84.8121 55.7752 84.7961C54.0562 84.7559 52.7113 86.7626 52.7113 88.4884C52.7113 90.5915 53.2922 91.5226 55.6638 92.831C57.924 94.0832 59.3167 96.0418 59.3167 98.6104C59.3167 100.529 59.0143 102.455 57.5818 103.707C56.4596 104.687 54.9555 104.984 53.4593 104.984C52.5998 104.984 51.3663 104.566 50.5625 104.117L50.6341 99.2605C50.9047 99.2445 51.2867 99.2525 51.5812 99.2525V101.211H51.5891ZM80.7326 99.0037L82.0219 98.8833V101.837C81.7752 102.118 81.2181 102.736 80.9077 102.913C80.1756 103.33 79.2206 103.531 78.6476 103.049C77.9154 102.431 77.995 100.713 78.4645 100.127C78.9818 99.4773 79.8652 99.084 80.7406 99.0117L80.7326 99.0037ZM82.1333 103.202L82.1651 104.261C82.1731 104.59 82.38 104.807 82.8416 104.807H84.7834V103.724H84.2343C83.7807 103.724 83.5022 103.282 83.5022 102.696V95.4317C83.4862 92.7587 82.0935 91.651 80.6053 91.651C78.9659 91.6671 77.796 93.5213 77.1593 94.5488L77.8995 95.0946C78.751 93.7782 79.507 93.0798 80.3745 93.0798C81.6081 93.0557 82.0219 94.0109 82.0219 95.0384V97.8237C80.4063 97.8879 78.1462 98.0886 77.0718 99.8224C76.3874 100.938 76.3715 102.672 77.032 103.772C77.4777 104.51 78.2417 104.871 79.1967 104.863C79.8413 104.863 80.4063 104.671 81.0669 104.181C81.3375 103.98 81.8468 103.539 82.1254 103.194L82.1333 103.202Z" fill="#575756"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M48 55.482C53.9847 59.3028 61.0597 60.563 68.079 59.9048C73.419 59.4071 78.3691 57.9302 82.9611 55.5622C86.8925 53.5395 90.5772 50.8504 93.9038 47.6959C92.4952 47.5835 90.6329 48.041 89.0492 48.7795C84.9586 52.3354 81.0511 54.1896 75.3211 54.9281C71.501 55.4178 67.5696 55.3616 63.9884 54.6793C60.4548 54.013 56.8736 52.6645 53.8733 50.6899C65.9063 38.786 64.8319 11.5427 48 -0.00805664C30.3643 11.8236 30.3006 38.6014 42.1267 50.6899C39.1264 52.6645 35.5452 54.005 32.0117 54.6793C28.4304 55.3616 24.499 55.4178 20.679 54.9281C14.9489 54.1896 11.0334 52.3354 6.95079 48.7795C5.36708 48.041 3.50482 47.5835 2.09619 47.6959C5.42279 50.8504 9.10751 53.5395 13.0389 55.5622C17.6389 57.9302 22.581 59.3991 27.9211 59.9048C34.9403 60.563 42.0153 59.2948 48 55.482ZM48 45.7132C59.2054 37.887 56.213 12.0484 48 4.10975C38.633 12.0484 36.7946 37.887 48 45.7132Z" fill="#575756"/>
                </g>
                <defs>
                <clipPath id="clip0_144_2602">
                <rect width="95.6436" height="105" fill="white" transform="translate(0.178223)"/>
                </clipPath>
                </defs>
            </svg>
        </a>
        <div class="links-container-wrapper">
            <div class="links-container">
                <p class="heading sofia-font">{menuData.wineEstate}</p>
                <div class="links-wrapper">
                    <a on:click={clickHandle} href="/celler">{menuData.linkCeller}</a>
                    <a on:click={clickHandle} href="/vinyard">{menuData.linkVinyard}</a>
                    <a on:click={clickHandle} href="/visits">{menuData.linkVisits}</a>
                </div>
            </div>
            <div class="links-container">
                <a on:click={clickHandle} href="/wines">
                    <p class="heading sofia-font">{menuData.ourWines}</p>
                </a>
                <div class="links-wrapper">
                    <a on:click={clickHandle} href="/wines">{menuData.linkWhites}</a>
                    <a on:click={clickHandle} href="/wines">{menuData.linkReds}</a>
                    <a on:click={clickHandle} href="/wines">{menuData.linkRoses}</a>
                    <a on:click={clickHandle} href="/wines">{menuData.linkCollections}</a>
                </div>
            </div>
            <div class="links-container">
                <p class="heading sofia-font">{menuData.contactUs}</p>
                <div class="links-wrapper">
                    <a on:click={clickHandle} href="/b2b">{menuData.linkB2b}</a>
                    <a on:click={clickHandle} href="/contact">{menuData.linkContact}</a>
                </div>
            </div>
        </div>
        <div class="about-container-wrapper">
            <p class="heading sofia-font">{menuData.aboutUs}</p>
            <div class="about-container">
                <a on:click={clickHandle} href="/about">{menuData.linkPhilosophy}</a>
                <a on:click={clickHandle} href="/about#history">{menuData.linkHistory}</a>
                <a on:click={clickHandle} href="/about#team">{menuData.linkTeam}</a>
                <a on:click={clickHandle} href="/diary">{menuData.linkDiary}</a>
                <a on:click={clickHandle} href="/news">{menuData.linkNews}</a>
            </div>
        </div>
        <div class="contact-container-wrapper desktop">
            <div class="contact-wrapper">
                <p>{contact.addressLine1} </p>
                <p>{contact.addressLine2}</p>
                <p>{contact.addressLine3}</p>
                <p>{contact.phoneNumber}</p>
                <p>{contact.email}</p>
            </div>
            <div class="law-links">
                <a on:click={clickHandle} href="/gdpr">{menuData.linkGDPR}</a>
                <a on:click={clickHandle} href="/policy">{menuData.linkPolicy}</a>
            </div>
        </div>
    </div>
</section>

<style>
    section {
        background-color: var(--bg-color);
        position: absolute;
        top:0px;
        width: 100%;
    }

    .menu-section-wrapper {
        z-index: 100;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        height: 100vh;
        position: relative;

    }

    .icon {
        position: absolute;
        top: 4vh;
        right: 4vh;
        background-color: transparent;
        border: none;
        z-index: 20;
    }

    .links-container-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        gap: 5vw;
    }

    .links-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        min-width: 20vw;
    }

    .links-wrapper{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1vh;
    }

    a,p {
        text-align: center;
    }

    .heading {
        text-transform: uppercase;
        color: var(--light-brown-color);
        padding-bottom: 3vh;
        font-style: normal;
    }

    a {
        font-family: 'Times New Roman', Times, serif;
        color: var(--gray-color);
        font-style: italic;
    }

    .about-container {
        display: flex;
        flex-direction: row;
        gap: 5vh;
        padding-inline: 5vw;
    }

    .contact-container-wrapper p, .contact-container-wrapper a {
        color: var(--light-brown-color);
        font-size: 16px;
    }

    .contact-container-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4vh;
    }

    .law-links {
        display: flex;
        flex-direction: row;
        gap: 5vw;
    }

    .links-wrapper a:hover, .about-container a:hover{
        text-decoration: underline;
    }

    @media only screen and (max-width: 765px) {
        .desktop {
            display: none;
        }

        .links-container-wrapper {
            flex-direction: column;
            gap: 4vh;
        }

        .links-container {
            gap: 0.5vh;
        }

        .links-wrapper {
            gap: 0.5vh;
        }

        .heading {
            padding-bottom: 1vh;
        }

        .about-container {
            flex-direction: column;
            gap: 0.5vh;
            max-width: 300px;
        }

        .about-container-wrapper {
            gap: 0vh;
            margin-top: -3vh;
        }

        .contact-container-wrapper {
            gap: 0vh;
        }

        .law-links {
            flex-direction: column;
            gap: 0vh;
        }

        a {
            font-size: 22px;
        }

        .icon {
            top: 3vh;
            right: 2vh;
        }

    
    }
</style>