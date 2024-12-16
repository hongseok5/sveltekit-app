<script>
	import Header from '$lib/Header.svelte';
	import Sidebar from '$lib/Sidebar.svelte';
	import Footer from '$lib/Footer.svelte';
  </script>
  
  <div style="display: grid; grid-template-rows: auto 1fr auto; height: 100vh;">
	<header>
	  <Header />
	</header>
	<div style="display: grid; grid-template-columns: 250px 1fr;">
	  <aside>
		<Sidebar />
	  </aside>
	  <main>
		<slot />
	  </main>
	</div>
	<footer>
	  <Footer />
	</footer>
  </div>
  