<script>

  export let data
</script>

<section>
  <div class="section-wrapper">
    <h1>{data.policy.pageHeading}</h1>
    <p>{@html data.policy.content}</p>
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
</style>