Vue.component('task-list', {

  template: `
    <div>
      <form action="" class="form-inline">
        <div class="form-group"><label for=""></label><input type="text" placeholder="Task" class="form-control" v-model="newTask.task"></div>
        <button class="btn btn-default" @click="addTask">Add Task</button>
      </form>
      <ul class="list-group">
        <task v-for="task in tasks">
          {{ task.task }}
        </task>
      </ul>
    </div>
  `,
  data(){
    return {
      newTask: {
        task: '',
        complete: false,
      },
      tasks: [
        {task: 'Go to store', complete: true},
        {task: 'Read email', complete: false},
        {task: 'Don\'t cry', complete: false}
      ]
    };
  },
  methods: {
    addTask() {
      let {task, complete} = this.newTask

      this.tasks.push({
        task,
        complete,
      })
    },
  }
});

Vue.component('task',{
  template: `
    <li class="list-group-item" v-show="isVisible">
    <input type="checkbox" aria-label="..." @click="isVisible=false">
    <slot></slot>
    </li>
    `,
  data () {
    return {
      isVisible:true,
    }
  }
})

new Vue({
  el: '#root'
});
