<script>
  export let title = "Welcome to my blog";
  export let subtitle = "Pensamientos sobre desarrollo, IA, UX y tecnología emergente.";
  export let backgroundUrl = "https://images.unsplash.com/photo-1639755507638-e34150b56db2?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; // podés usar una URL local o externa
</script>

<section class="relative w-full h-[45vh] flex items-center justify-center overflow-hidden">
  <!-- Fondo con imagen -->
  <div
    class="absolute inset-0 bg-cover bg-center z-0"
    style="background-image: url('{backgroundUrl}')"
  ></div>

  <!-- Capa de oscurecimiento para legibilidad -->
  <div class="absolute inset-0 bg-black/70 backdrop-blur-xs z-10"></div>

  <!-- Contenido -->
  <div class="relative z-20 text-center px-6">
    <h1 class="text-2xl sm:text-3xl tracking-tight text-white mb-4">
      {title}
    </h1>
    <p class="text-zinc-300 text-md max-w-2xl mx-auto">{subtitle}</p>
  </div>
</section>
