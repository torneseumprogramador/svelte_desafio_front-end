<script>
	import Header from "../componentes/header.svelte";
	import Footer from "../componentes/footer.svelte";
	import LoginServico from "../servicos/LoginServico"
	import { navigate } from 'svelte-routing';

	let login = { email: '', senha: '' };
	let loading = false;
	let error = null;

	const logar = async () => {
		try{
			const res = await LoginServico.login(login);
			LoginServico.setLocalStorage(res.token);
			navigate('/');
		}
		catch(e){
			error = e?.response?.data || e?.message
		}
	}
</script>

<Header></Header>
<section class="page-section cta">
	<div class="container">
		<div class="row">
			<div class="col-xl-9 mx-auto">
				<div class="cta-inner bg-faded text-center rounded">
					<h2 class="section-heading mb-4">
						<span class="section-heading-upper">Login</span>
					</h2>
					<hr>
					  <form on:submit|preventDefault={logar} style="text-align: left;">
						<div class="form-group">
						  <label for="email">Email</label>
						  <input
							type="text"
							class="form-control"
							id="email"
							bind:value={login.email}
							required
						  />
						</div>
						<div class="form-group">
						  <label for="preco">Senha</label>
						  <input
							type="password"
							class="form-control"
							id="senha"
							bind:value={login.senha}
							required
						  />
						</div>
						{#if error}
						  <div class="alert alert-danger">{error}</div>
						{/if}
						<button type="submit" class="btn btn-primary" style="margin-top: 20px;" disabled={loading}>
						  {loading ? 'Logando...' : 'Logar'}
						</button>
					  </form>
				</div>
			</div>
		</div>
	</div>
</section>
<Footer></Footer>
