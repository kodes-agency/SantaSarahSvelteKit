<script>
  import Archive from "$lib/components/pages/diary/Archive.svelte";
  import Diary from "$lib/components/pages/home/Diary.svelte";

    export let data
</script>

<section>
    <div class="section-wrapper">
        <h1>{data.diary.diaryPage.data.attributes.heroHeading}</h1>
        <Diary
            diary = {data.diary.diaryPage.data.attributes.featuredStories.data}
            locale = {data.locale}
            imgUrl = {data.imgUrl}
        ></Diary>
        <Archive
            diaries = {data.diary.diaries.data}
            locale = {data.locale}
        >
        </Archive>
    </div>
</section>

<style>
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

    @media only screen and (max-width: 765px) {
        .section-wrapper {
            padding-top: 20vh;
            padding-bottom: 5vh;
            gap: 5vh;
        }

        h1 {
            font-size: 30px;
            text-align: center;
        }
    }
</style>