<template>
  <q-page class="bg-grey-3 column">
    <div class="row q-pa-sm bg-primary">
      <q-input class="col"
        square
        filled
        bg-color="white"
        placeholder="Add Task"
        v-model="newTask" 
        @keyup.enter="createTask()"
        dense>
        <template v-slot:append>
          <q-btn round dense flat icon="add" @click="createTask()"/>
        </template>
      </q-input>
    </div>
    <q-list class="bg-white" separator bordered>
      <q-item
        v-for="(task, index) in tasks"
        :key="task.title"
        @click="task.done = !task.done"
        clickable
        v-ripple
        :class="{ 'done bg-blue-1': task.done }"
      >
        <q-item-section avatar>
          <q-checkbox
            class="no-pointer-events"
            v-model="task.done"
            color="primary"
          />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ task.title }}</q-item-label>
        </q-item-section>
        <q-item-section v-if="task.done" side>
          <q-btn
            flat
            dense
            round
            color="primary"
            icon="delete"
            @click.stop="removeTask(index)"
          />
        </q-item-section>
      </q-item>
    </q-list>
    <div 
    v-if="!tasks.length"
    class="no-task absolute-center">
      <q-icon name="check"
        size="100px"
        color="primary"></q-icon>
      <div class="text-h5 text-primary text-center">
        No Tasks
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      newTask: '',
      tasks: [],
    };
  },
  methods: {
    removeTask(index) {
      this.$q
        .dialog({
          title: "Confirm",
          message: "Really Delete?",
        })
        .onOk(() => {
          this.tasks.splice(index, 1);
          this.$q.notify({
          message: 'Task Deleted.'
      })
      });
    },
    createTask(){
      if(this.newTask !== ''){
        this.tasks.push({
        title: this.newTask,
        done: false
      })
      this.newTask = ''
      }    
    }
  }
};
</script>

<style lang="scss">
.done {
  .q-item__label {
    text-decoration: line-through;
    color: #bbb;
  }

.no-task{
  opacity: 0.5;
}
}
</style>
