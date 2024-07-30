<script>
    import { Router, Route } from 'svelte-routing';
    import routes from './routes.js';
</script>

<Router>
    {#each routes as { path, component, componentProps }}
        <Route {path} let:params>
            <svelte:component this={component} {params} {...componentProps} />
        </Route>
    {/each}
</Router>
