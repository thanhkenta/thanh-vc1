<template>
	<div>
		<todo-menu  v-bind:tasks="tasks"></todo-menu>
		<todo-list></todo-list>
	</div>
</template>

<script>
	import Contents1 from './contents1';
	import Contents2 from './contents2';

	export default{
		data(){
			return {
	      	    tasks: [
			      {
			        title: 'Make todo list',
			        completed: true,
			        check:true,
			      },
			      {
			        title: 'Go skydiving',
			        completed: true,
			        check:true,
			      },
			      {
			        title: 'Thanh',
			        completed: false,
			        check:false,
			      }
				],
				search: ''

		    }
		},
		components:{
			'todo-menu' :Contents1,
			'todo-list' :Contents2
		},
		
		methods:{

		}
	};
</script>

<style>
	
</style>