<script>
	import { Router, Route } from 'svelte-routing';
	import routes from './routes.js';
  </script>
  
<Router>
	{#each routes as { path, component }}
		<Route {path} component={component} />
	{/each}
</Router>
