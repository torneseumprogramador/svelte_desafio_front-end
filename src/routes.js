import Home from './paginas/home.svelte';
import Sobre from './paginas/sobre.svelte';
import Produtos from './paginas/produtos/produtos.svelte';
import NotFound from './paginas/notFound.svelte';

const routes = [
  { path: '/', component: Home },
  { path: '/produtos', component: Produtos },
  { path: '/sobre', component: Sobre },
  { path: '*', component: NotFound },
];

export default routes;
