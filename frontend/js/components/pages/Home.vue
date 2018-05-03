<template>
	<div class="container">
		<img src="/images/logo.svg" width="240">
		<h1 id="main">
			DA VINCI
		</h1>
		<p id="description">
			We are a group of highly skilled, talented developers on Discord. <br>
			We build great software.
		</p>
		<button class="btn btn-lg mt-3" id="button">SEE PROJECTS <span class="ml-2 fa fa-chevron-right"></span></button>
	</div>
</template>

<style scoped>
	@import url('https://fonts.googleapis.com/css?family=Fredericka+the+Great');

	.container {
		text-align: center;
	}

	#main {
		/* Other good fonts: Abril Fatface, Cinzel, Limelight */
		font-family: 'Fredericka the Great', cursive;
		font-size: 128px;
		/* margin-top: 15vh; */
		margin-left: -10px;
	}

	#description {
		margin-top: 32px;
		font-size: 18px;
		font-weight: 300;
	}

	#button {
		background: none;
		border: 2px solid #222;
		font-size: 16px;
		padding: 14px 32px;
	}
</style>

<script>
	export default {
		metaInfo: {
			title: 'Home',
		}
	};
</script>
