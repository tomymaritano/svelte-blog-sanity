<script lang="ts">
  import { PortableText } from '@portabletext/svelte';
  import { goto } from '$app/navigation';
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';

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

<Navbar title="Hacklab.dog" />

<article class="max-w-4xl mx-auto py-16 px-6 flex flex-col gap-16 text-white">
  <!-- Imagen -->
  {#if post.imageUrl}
    <div class="overflow-hidden rounded-3xl border border-white/10 shadow-xl aspect-[16/9]">
      <img
        src={post.imageUrl}
        alt={post.title}
        class="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
        loading="lazy"
      />
    </div>
  {/if}

  <!-- Título -->
  <h1 class="text-4xl sm:text-5xl font-extrabold tracking-tight text-center">
    {post.title}
  </h1>

  <!-- Contenido -->
  <section
    class="prose prose-invert prose-zinc prose-lg dark:prose-invert max-w-none leading-relaxed
    prose-headings:text-white prose-a:text-teal-400 hover:prose-a:text-teal-300
    prose-strong:text-white prose-blockquote:border-l-teal-500 prose-blockquote:pl-4
    prose-img:rounded-xl prose-img:shadow-lg prose-pre:bg-zinc-900 prose-code:text-teal-400"
  >
    <PortableText value={post.body} />
  </section>

  <!-- Navegación -->
  <footer class="pt-12 mt-12 border-t border-white/10">
    <div class="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-zinc-400">
      {#if prev}
        <button on:click={() => goto(`/posts/${prev.slug}`)} class="hover:text-teal-400 transition">
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
        <button on:click={() => goto(`/posts/${next.slug}`)} class="hover:text-teal-400 transition">
          {next.title} →
        </button>
      {/if}
    </div>
  </footer>
</article>

<Footer />
  