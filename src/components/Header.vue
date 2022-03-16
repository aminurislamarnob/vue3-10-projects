<template>
    <header class="mb-4">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <a class="navbar-brand" href="#">
            <img alt="Vue logo" class="logo" src="@/assets/logo.svg" height="50" />
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                <RouterLink to="/" class="nav-link">Home</RouterLink>
                </li>
                <li class="nav-item">
                <RouterLink to="/markdown" class="nav-link">Markdown</RouterLink>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    </header>
</template>