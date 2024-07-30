import Home from './paginas/home.svelte';
import Sobre from './paginas/sobre.svelte';
import Login from './paginas/login.svelte';
import Produtos from './paginas/produtos/produtos.svelte';
import NovoProduto from './paginas/produtos/novo_produto.svelte';
import AlterarProduto from './paginas/produtos/alterar_produto.svelte';
import NotFound from './paginas/notFound.svelte';
import ProtectedRoute from './guard/ProtectedRoute.svelte';

const routes = [
  { path: '/', component: ProtectedRoute, componentProps: { component: Home } },
  { path: '/produtos', component: ProtectedRoute, componentProps: { component: Produtos } },
  { path: '/produtos/novo', component: ProtectedRoute, componentProps: { component: NovoProduto } },
  { path: '/produtos/:id', component: ProtectedRoute, componentProps: { component: AlterarProduto } },
  { path: '/sobre', component: ProtectedRoute, componentProps: { component: Sobre } },
 
  { path: '/login', component: Login },
  { path: '*', component: NotFound },
];

export default routes;
