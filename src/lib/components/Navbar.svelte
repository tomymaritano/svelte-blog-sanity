<script>
  let isOpen = false;
  export let title = "Hacklab.blog";
</script>

<nav class="sticky top-0 z-50 w-full backdrop-blur-md bg-zinc-900/80 border-b border-white/10 shadow-md">
  <div class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
    <!-- Logo -->
    <a href="/" class="text-white font-semi bold text-2xl tracking-tight hover:text-teal-400 transition">
      {title}
    </a>

    <!-- Desktop Menu -->
    <div class="hidden md:flex items-center gap-8">
      <a href="https://hacklab.dog" class="text-zinc-300 hover:text-teal-400 transition text-sm">Home</a>
      <div class="flex gap-4 text-xl text-zinc-300">
        <a href="https://github.com/tomasmaritano" target="_blank" aria-label="GitHub" class="hover:text-teal-400">
          <i class="fa-brands fa-github"></i>
        </a>
        <a href="https://linkedin.com/in/tomasmaritano" target="_blank" aria-label="LinkedIn" class="hover:text-teal-400">
          <i class="fa-brands fa-linkedin"></i>
        </a>
      </div>
    </div>

    <!-- Mobile Menu Button -->
    <button
      on:click={() => (isOpen = !isOpen)}
      aria-label="Toggle menu"
      aria-expanded={isOpen}
      class="md:hidden text-white text-2xl focus:outline-none"
    >
      <i class="fa-solid fa-bars"></i>
    </button>
  </div>

  <!-- Mobile Dropdown Menu -->
  {#if isOpen}
    <div
      class="md:hidden px-6 pb-4 space-y-4 text-sm text-zinc-300 bg-zinc-900/90 transition-all duration-200"
    >
      <a href="https://hacklab.dog" class="block hover:text-teal-400 transition">Home</a>
      <div class="flex gap-6 text-xl mt-2">
        <a href="https://github.com/tomasmaritano" target="_blank" aria-label="GitHub" class="hover:text-teal-400">
          <i class="fa-brands fa-github"></i>
        </a>
        <a href="https://linkedin.com/in/tomasmaritano" target="_blank" aria-label="LinkedIn" class="hover:text-teal-400">
          <i class="fa-brands fa-linkedin"></i>
        </a>
      </div>
    </div>
  {/if}
</nav>
