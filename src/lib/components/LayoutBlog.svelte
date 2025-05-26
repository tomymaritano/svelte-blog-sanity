<!-- src/lib/components/LayoutBlog.svelte -->
<script>
  import Navbar from './Navbar.svelte';
  import Footer from './Footer.svelte';
  export let title = '';
</script>

<div class="min-h-screen flex flex-col bg-gradient-to-tr from-zinc-900 via-black to-zinc-950 text-white">
  <Navbar {title} />
  
  <main class="flex-1 w-full px-6 py-16 max-w-4xl mx-auto">
    <slot />
  </main>
  
  <Footer />
</div>
