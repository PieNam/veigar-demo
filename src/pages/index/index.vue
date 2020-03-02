<template>
  <div class="container">
    <div>todo list</div>
    <div class="todo-list">
      <div class="no-checked">未完成</div>
      <div v-for="(item, index) in state.todoList" :key="index">
        <div v-if="item.status === STATUS.NOTCHECKED" class="todo">
          <div class="text">
            {{ item.text }}
          </div>
          <view @click="handleCheck(item)"><checkbox />完成</view>
        </div>
      </div>
      <div class="no-checked">已完成</div>
      <div v-for="(item, index) in state.todoList" :key="index">
        <div v-if="item.status === STATUS.CHECKED" class="todo">
          <div class="text">
            {{ item.text }}
          </div>
          <view @click="handleNotCheck(item)"><checkbox />撤回</view>
        </div>
      </div>
    </div>
    <view class="button is-primary" @click="handleClick">Add todo list</view>
  </div>
</template>

<script lang="ts">
import { useMainStore, STATUS } from '@/store';

export default {
  setup() {
    const store = useMainStore();

    // setTimeout(() => {
    //   store.checkTodo(0);
    // }, 2000);

    const handleClick = () => {
      tt.navigateTo({
        url: '/pages/index2/index', // 指定页面的url
      });
    };

    const handleCheck = (item: any) => {
      console.log(item);
      store.checkTodo(item.id);
    };

    const handleNotCheck = (item: any) => {
      store.deleteTodo(item.id);
      console.log(store);
    };

    return {
      handleClick,
      state: store.state,
      STATUS,
      handleCheck,
      handleNotCheck,
    };
  },
};
</script>

<style>
.container {
  padding: 20px;
  display: flex;
  width: 100vw;
  flex-direction: column;
  align-items: center;
}

.no-checked {
  margin-top: 20px;
}

.todo-list {
  width: 100%;
  margin: 30px 0;
}

.todo {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  border: 1px solid #ccc;
}

.text {
  margin-right: 30px;
}
</style>
