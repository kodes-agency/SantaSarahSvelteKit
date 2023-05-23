<script>
    import { filter } from '$lib/functions/store'
    import { invalidate } from '$app/navigation';
</script>

<section>
    <div class="filter-wrapper">
        <button class="filter-item" on:click={()=>{filter.set('all')}}>All</button>
        <button class="filter-item" on:click={()=>{filter.set('red')}}>Red</button>
        <button class="filter-item" on:click={()=>{filter.set('white')}}>White</button>
        <button class="filter-item" on:click={()=>{filter.set('rose')}}>Rosé</button>
        <button class="filter-item" on:click={()=>{filter.set('collection')}}>Collection</button>
    </div>
</section>

<style>

</style>