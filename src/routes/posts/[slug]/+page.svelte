<script lang="ts">
  import { PortableText } from '@portabletext/svelte';
  import { goto } from '$app/navigation';

  export let data: {
    post: {
      title: string;
      imageUrl?: string;
      body: any;
    };
    prev?: { slug: string; title: string };
    next?: { slug: string; title: string };
  };

  const { post, prev, next } = data;
</script>

<article class="max-w-4xl mx-auto py-20 px-6 text-white flex flex-col gap-12">
  <header class="space-y-4">
    <h1 class="text-4xl font-extrabold tracking-tight leading-tight">{post.title}</h1>

    {#if post.imageUrl}
      <img
        src={post.imageUrl}
        alt={post.title}
        class="w-full rounded-3xl shadow-xl border border-white/10"
      />
    {/if}
  </header>

  <section class="prose prose-invert dark:prose-invert prose-zinc prose-lg max-w-none leading-relaxed">
    <PortableText value={post.body} />
  </section>

  <footer class="mt-16 pt-6 border-t border-white/10">
    <div class="flex flex-col sm:flex-row justify-between items-center gap-6 text-sm text-zinc-400">
      {#if prev}
        <button
          on:click={() => goto(`/posts/${prev.slug}`)}
          class="hover:text-teal-400 transition"
        >
          ← {prev.title}
        </button>
      {/if}

      <button
        on:click={() => history.back()}
        class="px-4 py-2 border border-white/10 rounded-xl hover:border-teal-400 hover:text-teal-400 transition"
      >
        Volver
      </button>

      {#if next}
        <button
          on:click={() => goto(`/posts/${next.slug}`)}
          class="hover:text-teal-400 transition"
        >
          {next.title} →
        </button>
      {/if}
    </div>
  </footer>
</article>
