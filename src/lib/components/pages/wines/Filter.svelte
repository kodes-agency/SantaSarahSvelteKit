<script>
    import { filter } from '$lib/functions/store'
    import { invalidate } from '$app/navigation';
</script>

<section>
    <div class="filter-wrapper">
        <button aria-label="Filter button - All wines" class="filter-item" on:click={()=>{filter.set('all')}}>All</button>
        <button aria-label="Filter button - Red wines" class="filter-item" on:click={()=>{filter.set('red')}}>Red</button>
        <button aria-label="Filter button - White wines" class="filter-item" on:click={()=>{filter.set('white')}}>White</button>
        <button aria-label="Filter button - Rose wines" class="filter-item" on:click={()=>{filter.set('rose')}}>Rosé</button>
        <button aria-label="Filter button - Collection wines" class="filter-item" on:click={()=>{filter.set('collection')}}>Collection</button>
    </div>
</section>

<style>

</style>