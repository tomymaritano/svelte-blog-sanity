<script lang="ts">
  export let post: {
    title: string;
    slug: string;
    date: string;
    excerpt: string;
    imageUrl?: string;
  };
</script>

<a href={`/posts/${post.slug}`} class="block group hover:scale-[1.01] transition-transform duration-300">
  <div class="rounded-2xl overflow-hidden shadow-md border border-white/10 backdrop-blur-md bg-white/5">
    {#if post.imageUrl}
      <img src={post.imageUrl} alt={post.title} class="w-full h-80 object-cover object-center" />
    {/if}
    <div class="p-6 space-y-2">
      <h2 class="text-2xl font-semibold text-white">{post.title}</h2>
      <p class="text-sm text-zinc-400">{post.date}</p>
      <p class="text-zinc-300 line-clamp-3">{post.excerpt}</p>
    </div>
  </div>
</a>
