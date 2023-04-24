<script>
  import AddTodo from "$lib/components/todo/AddTodo.svelte";
  import TodoSection from "$lib/components/todo/TodoSection.svelte";

</script>
<svelte:head>
  <title>Home</title>
  <meta name="description" content="Todo app built in sveltekit" />
</svelte:head>

<div
>
  <main
    class="mx-auto min-h-screen max-w-none rounded-none bg-cream-four
					px-5 py-10 outline-none md:min-h-max md:max-w-[60rem] md:rounded-2xl md:px-8 md:outline md:outline-4
					md:outline-offset-8 md:outline-cream-four
					"
  >
    <h1 class="text-2xl font-bold text-gray-three">Dashboard</h1>
    <div class="mt-10">
      <AddTodo />
      <TodoSection/>
    </div>
  </main>
</div>
