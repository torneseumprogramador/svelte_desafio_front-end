<script>
	import { onMount } from 'svelte';
	import Header from "../../componentes/header.svelte";
	import Menu from "../../componentes/menu.svelte";
	import Footer from "../../componentes/footer.svelte";
	import ProdutoService from '../../servicos/ProdutoServico';
  import { Link } from 'svelte-routing';

	let produtos = [];
  let loading = true;
  let error = null;

	const excluir = async produtoId => {
		if(confirm('Confirma exclusão?')){
			loading = true;

			try {
				await ProdutoService.excluirPorId(produtoId);
				carregar();
			} catch (err) {
				error = err.message;
			} finally {
				loading = false;
			}
		}
	}

	const carregar = async () => {
		try {
      produtos = await ProdutoService.todos();
    } catch (err) {
      error = err.message;
    } finally {
      loading = false;
    }
	}

	onMount(() => {
    carregar()
  });
</script>

<Header></Header>
<Menu></Menu>
<section class="page-section cta">
	<div class="container">
		<div class="row">
			<div class="col-xl-9 mx-auto">
				<div class="cta-inner bg-faded text-center rounded">
					<h2 class="section-heading mb-4 row">
						<div class="col-10">
							<span class="section-heading-upper">Produtos</span>
						</div>
						<div class="col-2" style="text-align:right">
							<Link class="btn btn-primary" to="/produtos/novo">Novo</Link>
						</div>
					</h2>
					<hr>
					{#if loading}
            <p>Loading...</p>
          {:else if error}
            <p>Error: {error}</p>
          {:else}
            <table class="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nome</th>
                  <th>Preço</th>
                  <th>Descrição</th>
                  <th>Data de Criação</th>
                  <th>Data de Modificação</th>
                  <th>Quantidade em Estoque</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {#each produtos as produto}
                  <tr>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>{produto.preco}</td>
                    <td>{produto.descricao}</td>
                    <td>{new Date(produto.data_criacao).toLocaleDateString('pt-br')}</td>
                    <td>{new Date(produto.data_modificacao).toLocaleDateString('pt-br')}</td>
                    <td>{produto.quantidade_estoque}</td>
                    <td class="row" style="width: 180px;">
											<div class="col-6"><Link class="btn btn-warning" to="/produtos/{produto.id}">Alterar</Link></div>
											<div class="col-6"><button class="btn btn-danger" on:click={() => excluir(produto.id)}>Excluir</button></div>
										</td>
                  </tr>
                {/each}
              </tbody>
            </table>
          {/if}
				</div>
			</div>
		</div>
	</div>
</section>
<Footer></Footer>
