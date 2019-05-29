<template>
	<main class="page page--home">
		<section class="intro">
			<h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit</h1>
			<h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit</h2>
			<h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit</h3>
			<h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit</h4>
			<h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit</h5>
			<h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit</h6>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
		</section>
	</main>
</template>

<style lang="scss">
@import '~tools';

.page {
	// general page styles
	&--home {
		// specific home styles
	}
}

.intro {
	height: 100vh;
	width: 100vw;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
}
</style>
