<template>
  <div id="AppContainer" class="container-fluid d-flex flex-column">
    <div class="row h-100">
      <div
        id="SideNav"
        class="col border-end border-dark-subtle bg-dark-subtle"
      >
        <nav class="nav nav-pills flex-column justify-content-start mt-4 fs-5">
          <RouterLink
            to="/"
            class="nav-link"
            :class="{ active: $route.name == 'SignIn' }"
          >
            <i class="bi bi-house-door me-2"></i>Home
          </RouterLink>
          <RouterLink
            to="/Clocking"
            class="nav-link"
            :class="{ active: $route.name == 'Clocking' }"
          >
            <i class="bi bi-clock me-2" />Clocking
          </RouterLink>
          <a class="nav-link"> <i class="bi bi-clock me-2" />Manage Time</a>
        </nav>
      </div>
      <div class="col d-flex flex-column">
        <div
          id="HeaderRow"
          class="row bg-body border-bottom align-items-center"
          style="height: 50px"
        >
          <div class="col">{{ $route.name }}</div>
          <div class="col-auto">
            <RouterLink to="/Account">
              Account<i class="bi bi-person ms-2"></i>
            </RouterLink>
          </div>
        </div>
        <div class="row h-100">
          <RouterView />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { RouterView } from "vue-router";
import { PrimeIcons } from "primevue/api";

export default defineComponent({
  components: {
    RouterView,
  },
  setup() {
    const isCollapse = ref(false);

    const handleOpen = (key: string, keyPath: string[]) => {
      console.log(key, keyPath);
    };
    const handleClose = (key: string, keyPath: string[]) => {
      console.log(key, keyPath);
    };

    return {
      isCollapse,
      handleOpen,
      handleClose,
      items: [
        { label: "Home", icon: PrimeIcons.HOME },
        { label: "Clocking", icon: PrimeIcons.CLOCK },
      ],
    };
  },
});
</script>

<style lang="scss">
html,
body {
  height: 100%;
}

body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}

#AppContainer {
  min-height: 100%;
  height: 100%;
  min-width: 100%;
  width: 100%;
}

#SideNav {
  max-width: 215px;
  min-width: auto;
}
</style>
