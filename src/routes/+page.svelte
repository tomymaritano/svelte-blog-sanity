<script lang="ts">
  import LayoutBlog from '$lib/components/LayoutBlog.svelte';
  import PostCard from '$lib/components/PostCard.svelte';
  export let data;
</script>

<LayoutBlog title="Hacklab.dog">
  <section
    class="grid gap-2 px-4 py-16 min-w-full mx-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
  >
    {#each data.posts as post}
      <PostCard {post} />
    {/each}
  </section>
</LayoutBlog>
