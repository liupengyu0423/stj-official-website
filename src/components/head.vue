<template>
  <nav :class="hash==='#/about'||hash==='#/product'||hash==='#/washroom'||hash==='#/expression'?'navbar navbar-default':'navbar navbar-default navbar-sticky'"
       role="navigation">
    <div class="container-fluid">
      <div class="navbar-header nav-title">
        <button type="button"
                class="navbar-toggle"
                data-toggle="collapse"
                data-target=".navbar-collapse">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand"
           href="#"><img src="../images/stj_logo.png"
               alt="Brand"></a>
        <span class="float">400-618-9911</span>
      </div>
    </div>
    <div class="collapse navbar-collapse navbar-right is-collapse">
      <ul class="nav navbar-nav navbar-right">
        <li v-for="(item,index) in tab"
            :key="index"
            v-if="item.tab_C!=='产品中心'">
          <router-link :to="item.tab_E"
                       class="dropdown-toggle router-link-one">{{item.tab_C}}</router-link>
          <div class="line"></div>
        </li>
        <li v-else
            class="dropdown">
          <a href="#"
             class="dropdown-toggle"
             data-toggle="dropdown"
             role="button"
             aria-haspopup="true"
             aria-expanded="false">产品中心
            <span class="caret"></span>
          </a>
          <ul class="dropdown-menu">
            <li v-for="(detail,index) in item_tab"
                :key="index">
              <router-link :to="detail.tab_E">{{detail.tab_C}}</router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>

  </nav>
</template>

<script>
export default {
  name: 'CommonHead',
  data () {
    return {
      tab: [
        { tab_C: '首页', tab_E: 'index' },
        { tab_C: '产品中心', tab_E: 'product' },
        { tab_C: '互联网+', tab_E: 'net' },
        { tab_C: '应用案例', tab_E: 'expression' },
        { tab_C: '领导关怀', tab_E: 'leader' },
        { tab_C: '新闻中心', tab_E: 'news' },
        { tab_C: '关于我们', tab_E: 'about' }
      ],
      item_tab: [
        { tab_C: '农村户厕污水一体化生物处理设备', tab_E: 'product' },
        { tab_C: '生物环保厕所', tab_E: 'washroom' }
      ],
      hash: ''
    }
  },
  created () {
    this.hash = location.hash
    console.log(location.hash)
  }
}
</script>

<style lang="scss" scoped>
@media (max-width: 760px) {
  .container-fluid {
    padding: 0 !important;
  }
  .nav > li > a {
    font-size: 14px !important; /*no*/
  }
  .navbar-default .navbar-nav .open .dropdown-menu > li > a {
    color: #fff !important;
  }
  .navbar-brand {
    padding: 20px 0 18px 24px !important;
    img {
      width: 213px !important;
      height: 60px !important;
    }
  }
  .float {
    font-size: 24px !important;
    color: #1aa8aa !important;
    font-family: PingFangSC-Medium;
    margin-top: 28px !important;
    margin-right: 63px !important;
  }
  .navbar-toggle {
    border: none !important;
    border-radius: 0 !important;
    margin-right: 0 !important;
    padding: 16px 25px 16px 0 !important;
  }
  .navbar-default .navbar-toggle:focus,
  .navbar-default .navbar-toggle:hover {
    background-color: #ffffff;
  }
  .navbar-default .navbar-toggle .icon-bar {
    background-color: #1aa8aa !important;
  }
  .navbar-toggle .icon-bar {
    width: 32px !important;
  }
  .container-fluid > .navbar-header {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }
}
.caret {
  border-top: 10px dashed #fff;
}
@media (min-width: 768px) and (max-width: 1024px) {
  .navbar-brand {
    padding: 4px 20px !important;
  }
}
@media (min-width: 1024px) {
  .navbar-brand {
    padding: 10px 40px !important;
  }
}
@media (min-width: 770px) {
  .caret {
    border-top: 4px dashed #fff;
  }
}
.navbar {
  border-radius: 0;
}
.navbar-header {
  width: 100%;
}
.float {
  float: right;
  margin: 23px 56px 16px 0;
  color: #1aa8aa;
  font-size: 18px;
}
.navbar-default {
  background: #1aa8aa;
}
.navbar-sticky {
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  z-index: 99999999;
}
.container-fluid {
  background: #fff;
}
.dropdown-toggle {
  color: #fff !important;
}
.navbar-brand {
  padding: 15px 56px;
}
.container-fluid {
  min-height: 64px;
}
.open .dropdown-toggle {
  background: #1aa8aa !important;
}
.dropdown-menu > li > a:focus,
.dropdown-menu > li > a:hover {
  background: #fff;
  color: #1aa8aa;
}
.router-link-one.router-link-exact-active {
  border-bottom: 2px solid #40f2d0;
}
.nav > li > a {
  padding: 10px 5px;
  margin: 0 15px;
  font-size: 14px;
}
.navbar {
  margin-bottom: 0px;
  border: none;
}
.navbar-right {
  margin-right: 0;
}
@media (min-width: 768px) {
  .navbar-right {
    padding-right: 39px;
  }
}
@media (min-width: 992px) {
  .navbar-right {
    margin-right: 80px;
  }
}
@media (min-width: 1200px) {
  .navbar-right {
    padding-right: 80px;
  }
}
.dropdown-menu > li > a {
  padding: 12px 26px;
}
@media (min-width: 768px) {
  .navbar-right .dropdown-menu {
    right: auto;
  }
}
</style>
