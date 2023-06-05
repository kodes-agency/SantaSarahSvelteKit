<script>

  export let data
</script>

<section>
  <div class="section-wrapper">
    <h1>{data.gdpr.pageHeading}</h1>
    <div class="policy-content">{@html data.gdpr.pageContent}</div>
  </div>
</section>

<style>
  .section-wrapper {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 10vh;
    padding: 15vw;
  }

  h1 {
    font-size: 40px;
    color: var(--gray-color);
    font-style: italic;
  }

  @media only screen and (max-width: 765px) {
    .section-wrapper {
      padding: 5vw;
      padding-top: 20vh;
      gap: 5vh;
    }

    h1 {
      font-size: 30px;
    }
  }



</style>