<script>
  export let produto = { nome: '', preco: '', descricao: '', quantidade_estoque: '' };
  export let salvar;
  export let loading = false;
  export let error = null;
</script>

<form on:submit|preventDefault={salvar} style="text-align: left;">
  <div class="form-group">
    <label for="nome">Nome</label>
    <input
      type="text"
      class="form-control"
      id="nome"
      bind:value={produto.nome}
      required
    />
  </div>
  <div class="form-group">
    <label for="preco">Preço</label>
    <input
      type="number"
      class="form-control"
      id="preco"
      bind:value={produto.preco}
      required
      step="0.01"
    />
  </div>
  <div class="form-group">
    <label for="descricao">Descrição</label>
    <textarea
      class="form-control"
      id="descricao"
      bind:value={produto.descricao}
    ></textarea>
  </div>
  <div class="form-group">
    <label for="quantidade_estoque">Quantidade em Estoque</label>
    <input
      type="number"
      class="form-control"
      id="quantidade_estoque"
      bind:value={produto.quantidade_estoque}
      required
    />
  </div>
  {#if error}
    <div class="alert alert-danger">{error}</div>
  {/if}
  <button type="submit" class="btn btn-primary" style="margin-top: 20px;" disabled={loading}>
    {loading ? 'Salvando...' : 'Salvar'}
  </button>
</form>
