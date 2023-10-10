<template>
  <div class="row align-items-center" style="margin-bottom 100px;">
    <div class="col-lg-4 offset-lg-2 col-md-6" :span="8" :offset="4">
      <div class="card">
        <div class="card-body text-center">
          <h3 class="card-title m-0">Weekly Hours</h3>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Item 1</li>
          <li class="list-group-item">Item 2</li>
        </ul>
      </div>
    </div>
    <div class="col-lg-4 col-md-6" :span="8">
      <div class="card">
        <div class="card-body">
          <h3
            class="card-Title border-bottom border-2 text-center"
            :style="{
              '--bs-border-color': isClocked
                ? 'var(--bs-success-border-subtle)'
                : 'inherit',
            }"
          >
            <CurrentClock />
          </h3>
          <form class="row">
            <div class="col-12 mb-2">
              <label for="ProjectSelect">Project</label>
              <select class="form-select">
                <option>-- Select Project --</option>
                <option>Timekeeping</option>
                <option>Package Tracker</option>
                <option>J3</option>
              </select>
            </div>
            <div class="col-12 mb-2">
              <label for="TaskSelect">Task</label>
              <select class="form-select">
                <option>-- Select Task --</option>
                <option>Programming</option>
              </select>
            </div>
            <div class="col-6">
              <button
                class="btn w-100"
                :style="{
                  backgroundColor: isClocked ? 'green' : 'var(--bs-primary)',
                }"
              >
                {{ isClocked ? "Change Task" : "Clock In" }}
              </button>
            </div>
            <div class="col-6">
              <button class="btn btn-primary w-100">Clock Out</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import CurrentClock from "./CurrentClock.vue";

export default defineComponent({
  components: {
    CurrentClock,
  },
  setup() {
    const isClocked = ref(true);
    return {
      isClocked,
    };
  },
});
</script>

<style scoped lang="scss">
.el-col {
  text-align: center;
}
</style>
