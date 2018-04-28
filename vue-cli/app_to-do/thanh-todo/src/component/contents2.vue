<template id="task-item">
    <li class="tasks__item">
      <!--thực hiện sự kiện chuyển đổi viêc hoànthanh -->
      <!--chỉ kích hoạt phương thức xử lí nếu event.target là chính phần tử được click,
  chứ không phải là một phần tử con-->
  	  	<input type="checkbox" :class="className" @click="$emit('complete')" v-model="task.check">
     	<button :class="className"
          @click.self="$emit('complete')"
      >
        {{ task.title }}
      	</button>
      <!--thực hiện sự kiện xóa 1 đơn vị -->
     	<button class="tasks__item__remove button alert pull-right"
              @click="$emit('remove')"
      >
        <i class="fa fa-times"></i>
        </button>
        <button class="edit button alert pull-right"  type="button" data-toggle="modal" data-target="#myModal" @click="$emit('edit')">
      		EDIT
        </button>

    <div class="modal fade" id="myModal" role="dialog">
	    <div class="modal-dialog modal-sm">
	      <div class="modal-content">
	        <div class="modal-header">
	          <button type="button" class="close" data-dismiss="modal">&times;</button>
	          <h4 class="modal-title">Edit Task</h4>
	        </div>
	        <div class="modal-body">
	          <input type="text" ref="input" id="edit_input">
	        </div>
	        <div class="modal-footer">
	          <button type="button" class="btn btn-danger" data-dismiss="modal" @click="$emit('save')"><i class="fa fa-save"></i>Save</button>
	          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
	        </div>
	      </div>
	    </div>
    </div>
    </li>
</template>

<script>
	export default {
		props:['task'], // tạo props task theo v-for -> lặp để lấy 
		computed: {
	    className() {
	      let classes = ['tasks__item__toggle'];
	      if (this.task.completed) {
	        classes.push('tasks__item__toggle--completed');
	      }
	      return classes.join(' ');
	    }
	  }
	}
</script>

<style>
	
</style>