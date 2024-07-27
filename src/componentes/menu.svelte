<script>
	import  { link } from 'svelte-spa-router';
  </script>
  
  <nav class="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
    <div class="container">
      <a class="navbar-brand text-uppercase fw-bold d-lg-none" href="/">Start Bootstrap</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="/" use:link>Home</a></li>
          <li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="/sobre" use:link>Sobre</a></li>
          <li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="/produtos" use:link>Produtos</a></li>
          <li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="/login" use:link>Login</a></li>
        </ul>
      </div>
    </div>
  </nav>  