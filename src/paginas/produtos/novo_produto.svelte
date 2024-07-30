<script>
  import Header from "../../componentes/header.svelte";
  import Menu from "../../componentes/menu.svelte";
  import Footer from "../../componentes/footer.svelte";
  import ProdutoService from '../../servicos/ProdutoServico';
  import ProdutoForm from "./produto_form.svelte";
  import { Link } from 'svelte-routing';
  import { navigate } from 'svelte-routing';

  let loading = false;
  let error = null;
  let produto = { nome: '', preco: '', descricao: '', quantidade_estoque: '' };

  const salvar = async () => {
    loading = true;

    try {
      await ProdutoService.salvar(produto);
      navigate('/produtos');
    } catch (err) {
      error = err.message;
    } finally {
      loading = false;
    }
  }

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
          <ProdutoForm {produto} {salvar} {loading} {error} />
        </div>
      </div>
    </div>
  </div>
</section>
<Footer />
