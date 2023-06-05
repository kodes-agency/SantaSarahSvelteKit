<script>
    import Archive from "$lib/components/pages/news/Archive.svelte";
    import Current from "$lib/components/pages/news/Current.svelte";
    import Diary from "$lib/components/pages/news/Diary.svelte";
    export let data
  </script>
  
  <section>
      <div class="section-wrapper">
          <h1>{data.news.newsPage.data.attributes.heroHeading}</h1>
          <div class="colums-wrapper">
              <div class="left-column">
                <Current
                    news = {data.news.news.data}
                    locale = {data.locale}
                ></Current>
                <div class="archive-section desktop">
                    <Archive
                    news = {data.news.news.data}
                    locale = {data.locale}
                    >
                    </Archive>
                </div>
            </div>
            <div class="right-column">
                <div class="diary-heading-wrapper">
                    <h4 class="sofia-font">{data.news.newsPage.data.attributes.diaryHeading}</h4>
                    <div class="line"></div>  
                </div>
                <Diary
                    diary = {data.news.homePage.data.attributes.featuredDiary.data}
                    imgUrl = {data.imgUrl}
                    locale = {data.locale}
                ></Diary>
            </div>
        </div>
        <div class="mobile">
            <Archive
            news = {data.news.news.data}
            locale = {data.locale}
            >
            </Archive>
        </div>
    </div>
  </section>
  
  <style>
    .mobile {
        display: none;
    }

    .archive-section {
        padding-top: 10vh;
    }


    .section-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        gap: 10vh;
        padding-top: 30vh;
        padding-bottom: 10vh;
    }

    h1 {
        font-size: 40px;
        color: var(--gray-color);
    }

    h4 {
        text-transform: uppercase;
        text-align: center;
    }

    .line {
        width: 50px;
        height: 1px;
        background-color: var(--light-brown-color);
    }

    .colums-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        padding-left : 7vw;
        padding-right : 7vw;
        gap: 5vw;
        width: 100%;
    }

    .right-column {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .left-column {
        max-width: 60vw;
    }

    .diary-heading-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2vh;
        padding-bottom: 3vh;
    }

    @media only screen and (max-width: 765px) {
        .section-wrapper {
            padding-top: 20vh;
            padding-bottom: 5vh;
            gap: 5vh;
        }

        .mobile {
            display: block;
        }

        .desktop {
            display: none;
        }

        .colums-wrapper {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 10vh;
            padding-left : 0px;
            padding-right : 0px;
        }

        .right-column {
            display: none;
        }

        

        .left-column {
            width: 90vw;
        }

        h1 {
            font-size: 30px;
        }
    }
  </style>