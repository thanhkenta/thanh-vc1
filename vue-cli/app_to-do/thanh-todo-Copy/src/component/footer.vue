<template>
	<footer>
		<p>{{copyright}}</p>
	</footer>
</template>

<script>
	export default {
		data(){
			return {
				copyright:'Copyright 2018 Vue VCcloud'
			}
		}
	}
</script>

<style scoped>
	footer{
		padding:10px;
		margin-top:20px;
		background: lightgreen;
	}
	p{
		text-align: center;
		margin: 0px;
	}
</style>