<script>
  let isOpen = false;
  export let title = "Hacklab.dog";
</script>

<nav class="w-full backdrop-blur-md bg-zinc-900/80 border-b border-white/10 shadow-md sticky top-0 z-50">
  <div class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
    <!-- Logo -->
    <a href="/" class="text-white font-bold text-2xl tracking-tight hover:text-teal-400 transition">
      {title}
    </a>

    <!-- Desktop menu -->
    <div class="hidden md:flex items-center gap-8">
      <a href="/" class="text-zinc-300 hover:text-teal-400 transition text-sm">Home</a>
      
      <div class="flex gap-4 text-white text-xl">
        <a
          href="https://github.com/tu_usuario"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          class="hover:text-teal-400 transition"
        >
          <i class="fa-brands fa-github"></i>
        </a>
        <a
          href="https://linkedin.com/in/tu_usuario"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          class="hover:text-teal-400 transition"
        >
          <i class="fa-brands fa-linkedin"></i>
        </a>
      </div>
    </div>

    <!-- Mobile toggle -->
    <button
      class="md:hidden text-white text-2xl focus:outline-none"
      on:click={() => (isOpen = !isOpen)}
      aria-label="Toggle menu"
    >
      <i class="fa-solid fa-bars"></i>
    </button>
  </div>

  <!-- Mobile menu -->
  {#if isOpen}
    <div class="md:hidden px-6 pb-4 space-y-4 text-sm text-zinc-300 bg-zinc-900/80">
      <a href="/" class="block hover:text-teal-400 transition">Home</a>
      <div class="flex gap-6 text-white text-xl mt-2">
        <a href="https://github.com/tu_usuario" target="_blank" rel="noopener" class="hover:text-teal-400" aria-label="GitHub">
          <i class="fa-brands fa-github"></i>
        </a>
        <a href="https://linkedin.com/in/tu_usuario" target="_blank" rel="noopener" class="hover:text-teal-400" aria-label="LinkedIn">
          <i class="fa-brands fa-linkedin"></i>
        </a>
      </div>
    </div>
  {/if}
</nav>
