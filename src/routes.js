import Home from './paginas/home.svelte';
import Sobre from './paginas/sobre.svelte';
import NotFound from './paginas/notFound.svelte';

const routes = {
  '/': Home,
  '/sobre': Sobre,
  '*': NotFound,
};

export default routes;
