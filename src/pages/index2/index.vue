<template>
  <div class="container is-fluid">
    <div class="subtitle is-3">Add todo list</div>
    <div class="field">
      <div class="control">
        <input class="input is-info" @input="handleInput" :value="todo" />
      </div>
    </div>
    <button class="button is-primary is-light" @click="handleAdd">Add +</button>
  </div>
</template>

<script>
import { ref } from 'veigar';
import { useMainStore } from '@/store';

export default {
  setup() {
    const todo = ref('');
    const store = useMainStore();

    const handleInput = e => {
      todo.value = e.detail.value;
    };

    const handleAdd = () => {
      store.addTodo(todo.value);

      tt.navigateBack({
        detal: 1,
      });
    };

    return {
      handleInput,
      todo,
      handleAdd,
    };
  },
};
</script>

<style>
.container {
  text-align: center;
  margin-top: 30px;
}
</style>
