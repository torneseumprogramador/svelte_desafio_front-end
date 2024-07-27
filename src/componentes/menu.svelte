<script>
  import { Link } from 'svelte-routing';
</script>

<nav class="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
  <div class="container">
    <a class="navbar-brand text-uppercase fw-bold d-lg-none" href="/">Start Bootstrap</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto">
        <li class="nav-item px-lg-4"><Link class="nav-link text-uppercase" to="/">Home</Link></li>
        <li class="nav-item px-lg-4"><Link class="nav-link text-uppercase" to="/sobre">Sobre</Link></li>
        <li class="nav-item px-lg-4"><Link class="nav-link text-uppercase" to="/produtos">Produtos</Link></li>
        <li class="nav-item px-lg-4"><Link class="nav-link text-uppercase" to="/login">Login</Link></li>
      </ul>
    </div>
  </div>
</nav>