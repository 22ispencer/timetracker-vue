<template>
  <div class="row justify-content-center">
    <div class="col-lg-4 col-md-6 col-sm-12 d-flex align-items-center">
      <div id="SignInCard" class="card w-100">
        <div class="card-body">
          <h3 class="card-title">Sign In</h3>
          <form class="">
            <div class="form-floating mb-3">
              <input
                id="UsernameTB"
                class="form-control"
                type="text"
                v-model="userData.userName"
                placeholder="Username"
                required
              />
              <label for="UsernameTB" class="form-label">Username</label>
            </div>
            <div class="form-floating mb-3">
              <input
                id="PasswordTB"
                class="form-control"
                type="password"
                v-model="userData.password"
                placeholder="Password"
                required
              />
              <label for="PasswordTB" class="form-label">Password</label>
            </div>
            <div class="d-flex">
              <button
                id="SignInButton"
                class="btn btn-lg btn-primary m-auto"
                @click="signIn"
                type="submit"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const userData = ref({
      userName: "",
      password: "",
    });
    const validSignIn = ref(true);

    function signIn() {
      if (userData.value.userName == "" || userData.value.password == "") {
        validSignIn.value = false;
      }
    }
    return {
      userData,
      signIn,
      validSignIn,
    };
  },
});
</script>

<style scoped lang="scss">
h1,
h2,
h3,
h4,
h5 {
  text-align: center;
}
</style>
