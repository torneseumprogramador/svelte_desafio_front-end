<script>
    import { onMount } from 'svelte';
    import { navigate } from 'svelte-routing';
    import LoginService from '../servicos/LoginServico';

    export let component;
    export let params;

    let authStatus = LoginService.tokenValido();

    onMount(() => {
        if (!authStatus) {
            navigate('/login');
        }
    });
</script>

{#if authStatus}
    <svelte:component this={component} {...params} />
{:else}
    <p>Redirecionando...</p>
{/if}
