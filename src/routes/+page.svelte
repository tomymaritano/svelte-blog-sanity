<script lang="ts">
  import LayoutBlog from '$lib/components/LayoutBlog.svelte';
  import PostCard from '$lib/components/PostCard.svelte';
  import Hero from '$lib/components/Hero.svelte';

  export let data;
</script>

<LayoutBlog title="Hacklab.dog">
  <Hero
    title="Welcome to my blog"
    subtitle="Pensamientos sobre desarrollo, IA, UX y tecnología emergente."
  />

  <section
    class="grid gap-8 px-4 py-16 max-w-6xl mx-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
  >
    {#each data.posts as post}
      <PostCard {post} />
    {/each}
  </section>
</LayoutBlog>
