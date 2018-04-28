<template id="task-list">

	<!-- <div>
	  	Total Todo Count <span class = "badge"> {{ todos.length }} </span>  
		<ul class = "list-group" v-for="todo in todos">  
		    <li> {{ todo.title }} </li>
		</ul>  
	  	</div> -->
	<div class="content">
		<section class="tasks">
			<div class="in-search">
				<h1>
			        Tasks 
			        <transition name="fade">
			          <small v-if="incomplete">({{ incomplete }})</small>
			        </transition>
	     		</h1>
	     		<!-- <div class="search">
	     			<input type="text" v-model="search" placeholder="search">
	     			
	     		</div> -->
	     		
			</div>
	      
	        <div class="tasks__new input-group">
		        <input type="text"
		               class="input-group-field"
		               v-model="newTask"
		               @keyup.enter="addTask"
		               placeholder="New task"
		        >
		        <span class="input-group-button">
		          <button @click="addTask" 
		                  class="button"
		          >
		            <i class="fa fa-plus"></i> Add
		          </button>
		        </span>
	        </div>
		     <div class="searchh">
		  		<input type="input" placeholder="search" v-model="search">
		    </div>
	      <!-- <div class="tasks__clear button-group pull-right">
	        <button class="button warning small"
	                @click="clearCompleted"
	        >
	          <i class="fa fa-check"></i> Clear Completed
	        </button>
	        <button class="button alert small"
	                @click="clearAll"
	        >
	          <i class="fa fa-trash"></i> Clear All
	        </button>
	        </div> -->
	        <div class="selection">
	      		<ul class="nav nav-pills">
				    <li class="active"><a data-toggle="pill" href="#home">All</a></li>
				    <li><a data-toggle="pill" href="#menu1">Done</a></li>
				    <li><a data-toggle="pill" href="#menu2">Doing</a></li>
			  	</ul>
			  
			    <div class="tab-content">
				    <div id="home" class="tab-pane fade in active">
						
				      	 <!-- <task-item v-for="(task, index) in tasks"      lúc chưa thêm search-->
				      	 <task-item v-for="(task, index) in filteredTasks"
	                     @remove="removeTask(index)"
	                     @complete="completeTask(task)"
	                     @edit="edits(task)"
	                     @save="saves(task,index)"
	                     :task="task"
	                     :key="task"
	         			 ></task-item>

				    </div>
				    <div id="menu1" class="tab-pane fade">
				      	<!-- <task-item v-for="(task, index) in doneTasks"    lấy task done khi chưa có search-->
				      	<task-item v-for="(task, index) in filteredTasks_done"
	                     @remove="removeTask(index)"
	                     @complete="completeTask(task)"
	                     @edit="edits(task)"
	                     :task="task"
	                     :key="task"
	          			></task-item>

				    </div>
				    <div id="menu2" class="tab-pane fade">
				     	 <!-- <task-item v-for="(task, index) in doingTasks" -->
				     	 <task-item v-for="(task, index) in filteredTasks_doing"
	                     @remove="removeTask(index)"
	                     @complete="completeTask(task)"
	                     @edit="edits(task)"
	                     :task="task"
	                     :key="task"
	         			 ></task-item>
				    </div>
				   
			    </div>
	        </div>
	        <hr>
			<div class="finish">
				<ul>
					<li>Total : <small>({{complete}})</small></li>
					<li>Done : <small>({{doneComplete}})</small></li>
					<li>Doing : <small>({{incomplete}})</small></li>
				</ul>
			</div>
    </section>
	</div>
	
</template>
<script>
	import taskitem from './contents2';

	export default {
		// add từ contents2
		components:{
			'task-item' :taskitem
		},
		//props: ['todos'],  của phần test
		props:['tasks'],
	  data() {
	    return {
	      newTask: '',
	      search: ''
	    };
	  },

	computed: {
		//số task all
		complete: function () {
			return this.tasks.length;
		},
		//số task hoàn thành
		doneComplete(){
			return this.tasks.filter(this.isCompleted).length;
		},
	    //số task chưa hoàn thành
	    incomplete() {
	      //đếm số task chưa hoàn thành với đk là false
	      return this.tasks.filter(this.inProgress).length;
	    },

	    //task done true
	    doneTasks: function () {
	    	return this.tasks.filter(function(task){
	    		return task.completed
	    	})
	    },
	    //task doing false
	    doingTasks () {
	    	return this.tasks.filter(task => {
	    		return !task.completed
	    	})
	    },
console.log(obj);
	    //search ALl
        filteredTasks: function () {
        	const _this = this
            return this.tasks.filter(function (task) {
                return task.title.toLowerCase().indexOf(_this.search.toLowerCase()) >= 0;
            });
        },
        //search done
        filteredTasks_done:function(){
        	const _this = this
        	return this.doneTasks.filter(function(task){
        		return task.title.toLowerCase().indexOf(_this.search.toLowerCase()) >=0;
        	});
        },
        //search doing
        filteredTasks_doing:function(){
        	const _this = this
        	return this.doingTasks.filter(function(task){
        		return task.title.toLowerCase().indexOf(_this.search.toLowerCase()) >=0;
        	});
        }	    
	  },
	methods: {
	     //nếu tồn tại newTask thì task ban đầu thêm title(đã điền) và      default là chưa hthanh
	    addTask() {
	      if (this.newTask) {
	        this.tasks.push({
	          title: this.newTask,
	          completed: false
	        });
	        this.newTask = '';
	      }
	    },
	    //chuyển chưa hoàn thành <=>hoàn thành
	    completeTask(task) {
	      task.completed = ! task.completed;
	      task.check = ! task.check;
	    },
	    //xóa đi vị trí hiện tại
	    removeTask(index) {
	    	let cf=confirm("Xác nhận xóa")
	    	if (cf) {
	    		this.tasks.splice(index, 1);
	    	}
	    },
	    //sửa
	    edits(task){
	    	document.getElementById("edit_input").value = task.title;
	    },
	    /*edits(task){
	    	this.$refs.input.value = task.title;    //lấy nd từ value của input có ref="input"
	    },*//*
	    edits(event){
	    	event.target.value = task.title;		//target trả về phần tử các kích hoạt sự kiện   lấy value từ input
	    },*/
	    //save
	    saves(task,index){
	    	console.log(index);
	    	if (task) {
	    		task.title = document.getElementById("edit_input").value;
	    	}
	    	
	    },


	    // lọc ra lấy false (loại bỏ true)
	    clearCompleted() {  
	      this.tasks = this.tasks.filter(this.inProgress);
	    },
	    //xóa sạch = rỗng
	    clearAll() {
	      this.tasks = [];
	    },
	    //chuyển ngược lại thành false để lấy task chưa hthanh
	    inProgress(task) {
	      return ! this.isCompleted(task);
	    },
	    //lấy true : đã hoanthanh
	    isCompleted(task) {
	      return task.completed;
	    },

	    //search
	    full_search:function(task){
	    	return task.title.indexOf(this.search) != -1;
	    }
	  }
	}

</script>

<style>
	
</style>