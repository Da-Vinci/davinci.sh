<template>
	<div>
		<nav class="navbar navbar-expand navbar-light bg-faded fixed-top">
			<div class="container">
				<router-link :to="{name: 'home'}" class="navbar-brand" exact>
					<img src="/images/logo.svg" alt="DA VINCI" height="74" title="Da Vinci">
				</router-link>

				<ul class="navbar-nav mr-auto ml-3">
					<router-link :to="{name: 'home'}" tag="li" class="nav-item" exact>
						<a class="nav-link">Home</a>
					</router-link>
					<router-link :to="{name: 'projects'}" tag="li" class="nav-item">
						<a class="nav-link">Projects</a>
					</router-link>
				</ul>
			</div>
		</nav>
	</div>
</template>
