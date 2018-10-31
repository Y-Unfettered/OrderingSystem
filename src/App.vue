<template>
  <div id="app">
    <div class="container">
      <appHeader></appHeader>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
    <br>
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-4">
          <router-view name="orderingGuide"></router-view>
        </div>
        <div class="col-sm-12 col-md-4">
          <router-view name="delivery"></router-view>
        </div>
        <div class="col-sm-12 col-md-4">
          <router-view name="history"></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import Menu from "./components/Menu";
import Home from "./components/Home";
import About from "./components/about/About";
import Login from "./components/Login";
import Register from "./components/Register";
import Admin from "./components/Admin";

export default {
  name: "app",
  components: {
    appHeader: Header,
    appMenu: Menu,
    appHome: Home,
    appAbout: About,
    appLogin: Login,
    appRegister: Register,
    appAdmin: Admin
  }
};
</script>

<style>
</style>
