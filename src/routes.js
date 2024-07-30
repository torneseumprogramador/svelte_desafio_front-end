import Home from './paginas/home.svelte';
import Sobre from './paginas/sobre.svelte';
import Login from './paginas/login.svelte';
import Produtos from './paginas/produtos/produtos.svelte';
import NovoProduto from './paginas/produtos/novo_produto.svelte';
import AlterarProduto from './paginas/produtos/alterar_produto.svelte';
import NotFound from './paginas/notFound.svelte';

const routes = [
  { path: '/', component: Home },
  { path: '/produtos', component: Produtos },
  { path: '/produtos/novo', component: NovoProduto },
  { path: '/produtos/:id', component: AlterarProduto },
  { path: '/sobre', component: Sobre },
  { path: '/login', component: Login },
  { path: '*', component: NotFound },
];

export default routes;
