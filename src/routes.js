import Home from './paginas/home.svelte';
import Sobre from './paginas/sobre.svelte';
import NotFound from './paginas/notFound.svelte';

const routes = [
  { path: '/', component: Home },
  { path: '/sobre', component: Sobre },
  { path: '*', component: NotFound },
];

export default routes;