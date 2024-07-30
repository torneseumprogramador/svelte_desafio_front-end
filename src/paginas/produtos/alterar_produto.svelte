<script>
	import { onMount } from 'svelte';
  import Header from "../../componentes/header.svelte";
  import Menu from "../../componentes/menu.svelte";
  import Footer from "../../componentes/footer.svelte";
  import ProdutoService from '../../servicos/ProdutoServico';
  import ProdutoForm from "./produto_form.svelte";
  import { Link, navigate } from 'svelte-routing';


  let loading = false;
  let loadingForm = false;
  let error = null;
  let produto = {};
  export let id;

  const salvar = async () => {
    loadingForm = true;

    try {
      await ProdutoService.salvar(produto);
      navigate('/produtos');
    } catch (err) {
      error = err.message;
    } finally {
      loadingForm = false;
    }
  }
  
  onMount(async () => {
    try {
      produto = await ProdutoService.buscarPorId(id);
      loading = true;
    } catch (err) {
      error = err.message;
    }
  });

</script>

<Header />
<Menu />
<section class="page-section cta">
  <div class="container">
    <div class="row">
      <div class="col-xl-9 mx-auto">
        <div class="cta-inner bg-faded text-center rounded">
          <h2 class="section-heading mb-4 row">
            <div class="col-10">
              <span class="section-heading-upper">Novo Produto</span>
            </div>
            <div class="col-2" style="text-align:right">
              <Link class="btn btn-default" to="/produtos">Voltar</Link>
            </div>
          </h2>
          <hr />
          {#if loading}
            <ProdutoForm {produto} {salvar} {loadingForm} {error} />
          {/if}
        </div>
      </div>
    </div>
  </div>
</section>
<Footer />
