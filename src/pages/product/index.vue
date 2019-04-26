<template>
  <div class="unify">
    <CommonHead />
    <div class="container-fluid">
      <div class="col-lg- xi-col-lg-">
        <div class="row row_col1">
          <div class="col-lg-0 col-lg-6 col-md-10 col-sm-10 col-xs-12">
            <h4>响应习主席"厕所革命"的号召<br />为实施乡村振兴战略贡献力量</h4>
          </div>
        </div>
        <div class="row row_col2">
          <div class="col-lg-13 col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <p>积极参与农村人居环境整治三年行动方案，为实施乡村振兴战略贡献力量</p>
          </div>
        </div>
      </div>
      <ul class="nav nav-tabs nav-justified">
        <li role="presentation"
            :class="index===click?'active nav-tabs-hover':'nav-tabs-hover'"
            v-for="(item,index) in items"
            :key="index">
          <a @click="changeActive(index)">{{item.name}}
            <span :class="click===0?'line1':'line2'"
                  v-if="click===index"></span>
          </a>
        </li>
      </ul>
      <div class="hahah1">
        <div class="container responsive-div">
          <div class="row-lg-1 center-auto">
            <div class="row row_col1">
              <div class="bes_1 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <h4>科学解决农村厕所、生活污水处理问题</h4>
              </div>
            </div>
            <div class="row row_col2">
              <div class="bes_2 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <p>利用微生物降解原理，对生活污水进行截流、吸附和分解， <br />最终实现对厕所、生活污水的无害化处理和循环利用。
                </p>
              </div>
            </div>
            <router-link to="/expression">
              <p class="text-muted">查看应用案例 ></p>
            </router-link>
          </div>
        </div>
      </div>
      <div class="hahah2">
        <div class="container responsive-div2">
          <div class="container">
            <div class="row-lg-2 center-auto">
              <div class="row row_col1">
                <div class="bes_1 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <h4>适合中国农村实情的新型农村污水处理设备</h4>
                </div>
              </div>
              <div class="row row_col2">
                <div class="bes_2 col-lg-7 col-md-12 col-sm-12 col-xs-12">
                  <p>与中科院微生物合作，针对中国农村生活所排放的粪便、生活污水特点，开发出适合中国农村实情的新型农村污水处理设备。
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="row row_list">
            <div class="col-md-3 col-lg-3 col-sm-4 col-xs-6">
              <h5>
                <a>一体化</a>
              </h5>
              <ul>
                <li>一机多用，一步到位。</li>
                <li>厕所、厨房、洗浴一体化处理。</li>
              </ul>
            </div>
            <div class="col-md-3 col-lg-3 col-sm-4 col-xs-6">
              <h5>
                <a>无害化</a>
              </h5>
              <ul>
                <li>排放符合《城镇污水处理厂污染物综合排放标准》，出水达到一级 B 标准，彻底解决农村主要污染源。</li>
              </ul>
            </div>
            <div class="col-md-3 col-lg-3 col-sm-4 col-xs-6">
              <h5>
                <a>智能化</a>
              </h5>
              <ul>
                <li>户厕设备由智能物联网 IoT 设备控制驱动，实现故障报警、动态远程控制等功能，与智能管护 App 打通实现高效运维。</li>
              </ul>
            </div>
            <div class="col-md-3 col-lg-3 col-sm-4 col-xs-6">
              <h5>
                <a>中水与肥效回用</a>
              </h5>
              <ul>
                <li>设备人性化设计，支持中水回田灌溉、冲厕等。</li>
                <li>支持安全、便捷地肥效回用</li>
              </ul>
            </div>
            <div class="col-md-3 col-lg-3 col-sm-4 col-xs-6">
              <h5>
                <a>适用范围广</a>
              </h5>
              <ul>
                <li>适用于平原、干旱、高原、高寒等地区。</li>
              </ul>
            </div>
            <div class="col-md-3 col-lg-3 col-sm-4 col-xs-6">
              <h5>
                <a>维护简单</a>
              </h5>
              <ul>
                <li>自动化故障报警， 平时无需专业人员维修。</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="hahah2">
        <div class="container responsive-div2"
             v-if="click ===1">
          <div class="container">
            <div class="row-lg-2 center-auto">
              <div class="row row_col1">
                <div class="bes_1 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <h4>产品特点</h4>
                </div>
              </div>
            </div>
          </div>
          <div class="row row_list">
            <div class="col-md-3 col-lg-3 col-sm-4 col-xs-12">
              <h5>
                <a>免除污染</a>
              </h5>
              <ul>
                <li>直接将人的排泄物原位处理，一年可减少36万吨+清洁水</li>
              </ul>
            </div>
            <div class="col-md-3 col-lg-3 col-sm-4 col-xs-12">
              <h5>
                <a>经济节能</a>
              </h5>
              <ul>
                <li>运行费用低廉、无须冲水，一年可节水1000吨+，可节约清运、处理费用10000+元</li>
              </ul>
            </div>
            <div class="col-md-3 col-lg-3 col-sm-4 col-xs-12">
              <h5>
                <a>安装方便</a>
              </h5>
              <ul>
                <li>无需铺设排污管网，可根据地形随处安放，建设费用低</li>
              </ul>
            </div>
            <div class="col-md-3 col-lg-3 col-sm-4 col-xs-12">
              <h5>
                <a>外形美观</a>
              </h5>
              <ul>
                <li>外观造型和文化色彩具多样性，具有景观效应，提升城市、旅游景区形象</li>
              </ul>
            </div>
            <div class="col-md-3 col-lg-3 col-sm-4 col-xs-12">
              <h5>
                <a>用途广泛</a>
              </h5>
              <ul>
                <li>适用于城镇、风景名胜区、广场、公园、居民小区、车站、码头等人员密集场所，以及火车、轮船上</li>
              </ul>
            </div>
            <div class="col-md-3 col-lg-3 col-sm-4 col-xs-12">
              <h5>
                <a>产品多样</a>
              </h5>
              <ul>
                <li>水循环式、泡沫封堵式、水冲式、打包式等多种产品类型</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div v-if="click===0"
           :class="click_group===0?'container responsive-div3 responsive-div3_single':click_group===1?'container responsive-div3 responsive-div3_much':'container responsive-div3 responsive-div3_center'">
        <div class="list-group">
          <h4>产品类型</h4>
          <div>
            <a :class="index === click_group?'list-group-item active':'list-group-item'"
               v-for="(item,index) in list_group_items"
               :key="index"
               @click="changegroup(index)">
              {{item}}
            </a>
          </div>
        </div>
      </div>
      <div class="hahah3">
        <div class="container responsive-div4"
             v-if="click===0">
          <div class="col-lg-">
            <div class="row row_col1">
              <div class="col-lg-01 col-lg-0 col-lg-4 col-md-4 col-sm-6 col-xs-10">
                <h4>设备原理及工作流程</h4>
              </div>
            </div>
            <div class="row row_col2">
              <div class="col-lg-01 col-lg-13 col-lg-5 col-md-5 col-sm-5 col-xs-8">
                <p>采用倒置 A2/O 和接触氧化法工艺的基础上，通过在降解反应器内添加一定优化配置的生物强化菌剂，对污染物进行高效降解，实现对污水的精华并循环再利用的产品。</p>
                <p>排出的水指标符合国家排放标准，可用于绿化、灌溉等。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container responsive-div5"
           v-if="click===0">
        <ul>
          <li class="one">
            <h4>处理技术参数</h4>
            <img src="../../images/parameter.png"
                 alt=""
                 class="img-responsive center-block">
          </li>
          <li class="two">
            <h4>污水处理指标</h4>
            <img src="../../images/index.png"
                 alt=""
                 class="img-responsive center-block">
          </li>
        </ul>
      </div>
      <div class="hahah6">
        <div class="responsive-div6"
             v-if="click===0">
          <div class="catch-btn catch-btn-left"
               @click="ic_left"></div>
          <h4>应用案例</h4>
          <div class="row">
            <div class="row-div col-sm-6 col-md-4 col-xs-12 col-lg-4"
                 v-for="(item,index) in examples"
                 :key="index">
              <div class="thumbnail"
                   @click="showimage(item.img)"
                   :style="'background:url('+item.img+') no-repeat center center/100% 100%;'">
                <div class="caption">
                  <h5>{{item.text}}</h5>
                </div>
              </div>
            </div>
          </div>
          <div class="catch-btn catch-btn-right"
               @click="ic_right"></div>
          <router-link to="/expression">
            <p class="more">查看更多应用案例</p>
          </router-link>
        </div>
      </div>
      <CommonFoot />
      <div id="ShowImage_Form"
           class="modal">
        <div class="modal-header">
          <button data-dismiss="modal"
                  class="close"
                  type="button"></button>
        </div>
        <div class="modal-body"
             @click="close">
          <div id="img_show"
               @click="close">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CommonHead from '@/components/head'
import CommonFoot from '@/components/foot'
export default {
  metaInfo: {
    title: '生态洁环保科技股份有限公司',
    meta: [
      {
        name: 'keywords',
        content: '生态洁环保科技股份有限公司'
      },
      {
        name: 'description',
        content: '生态洁环保科技股份有限公司'
      }
    ]
  },
  name: 'unify',
  data () {
    return {
      items: [{ name: '农村户厕污水一体化生物处理设备', href: 'product' }, { name: '生物环保厕所', href: 'washroom' }],
      click: 0,
      list_group_items: ['STJ-单户式', 'STJ-多户式', 'STJ-村集中式'],
      click_group: 0,
      examples: [],
      examples1: [
        { text: '内蒙鄂托克旗', img: require('../../images/l3/l1.jpg') },
        { text: '新疆喀什', img: require('../../images/l3/l2.jpg') },
        { text: '广西上林县', img: require('../../images/l3/l3.jpg') }
      ],
      examples2: [
        { text: '微生物降解', img: require('../../images/c1/c1.jpg') },
        { text: '街头站立式', img: require('../../images/c1/c2.jpg') },
        { text: '泡沫封堵式', img: require('../../images/c1/c3.jpg') }
      ],
      examples3: [
        { text: '陕西洛川县', img: require('../../images/l3/l4.jpg') },
        { text: '青海门源县', img: require('../../images/l3/l5.jpg') },
        { text: '宁夏利通区', img: require('../../images/l3/l6.jpg') }
      ],
      examples4: [
        { text: '微生物降解', img: require('../../images/c1/c1.jpg') },
        { text: '街头站立式', img: require('../../images/c1/c2.jpg') },
        { text: '泡沫封堵式', img: require('../../images/c1/c3.jpg') }
      ],
      examples5: [
        { text: '宁夏灵武市', img: require('../../images/l3/l7.jpg') },
        { text: '山东齐河县', img: require('../../images/l3/l8.jpg') },
        { text: '山东荣成市', img: require('../../images/l3/l9.jpg') }
      ],
      examples6: [
        { text: '微生物降解', img: require('../../images/c1/c1.jpg') },
        { text: '街头站立式', img: require('../../images/c1/c2.jpg') },
        { text: '泡沫封堵式', img: require('../../images/c1/c3.jpg') }
      ],
    }
  },
  created () {
    this.examples = this.examples1
  },
  methods: {
    ic_left () {
      if (this.examples === this.examples1) {
        this.examples = this.examples3
      } else if (this.examples === this.examples3) {
        this.examples = this.examples3
      } else if (this.examples === this.examples5) {
        this.examples = this.examples1
      }
    },
    ic_right () {
      if (this.examples === this.examples1) {
        this.examples = this.examples5
      } else if (this.examples === this.examples5) {
        this.examples = this.examples5
      } else if (this.examples === this.examples3) {
        this.examples = this.examples1
      }
    },
    changeActive (index) {
      if (index) {
        location.href = '/#/washroom'
      } else {
        location.href = '/#/product'
      }
    },
    changegroup (index) {
      this.click_group = index
    },
    showimage (source) {
      $("#ShowImage_Form").find("#img_show").html("<img src='" + source + "' class='carousel-inner img-responsive img-rounded' />");
      $("#ShowImage_Form").modal();
    },
    close () {
      $("#ShowImage_Form").modal('hide');
    }
  },
  components: {
    CommonHead,
    CommonFoot
  }
}
</script>

<style lang="scss" scoped>
.modal-header {
  border-bottom: none !important;
}
.nav-tabs-hover.active {
  color: #1aa8aa;
  // border-bottom: 2px solid #40f2d0 !important;
}
.nav-tabs-hover.active a {
  color: #1aa8aa !important;
  border-bottom: 2px solid #40f2d0 !important;
}
@media (max-width: 760px) {
  .line1,
  .line2 {
    display: inline-block;
    width: 100px;
    height: 2px; /*no*/
    background: #40f2d0;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -34px;
  }
  .nav-tabs-hover.active {
    color: #1aa8aa;
    // border-bottom: 2px solid #40f2d0 !important;
  }
  .nav-tabs-hover.active a {
    color: #1aa8aa !important;
    border-bottom: none !important;
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
  .xi-col-lg-.col-lg- {
    padding: 180px 0 0 26px !important;
  }
  .responsive-div3,
  .responsive-div4 {
    background-size: 693px 460px;
    background-position: center 30px !important;
    width: 100% !important;
    height: 980px !important;
    .list-group,
    .col-lg- {
      padding-top: 400px !important;
    }
  }
  .responsive-div {
    width: 100% !important;
    height: auto !important;
    background: #ebf4f4 !important;
    .row-lg-1 {
      padding-top: 116px !important;
      padding-bottom: 103px !important;
    }
    .bes_1 h4 {
      padding-top: 0 !important;
    }
    .text-muted {
      padding-bottom: 0 !important;
    }
  }
  .responsive-div2,
  .responsive-div3 {
    width: 100% !important;
  }
  .responsive-div4 {
    width: 100% !important;
    height: 850px !important;
    background: url('../../images/wwww.png') no-repeat center 380px !important;
    background-size: contain !important;
    .col-lg- {
      padding: 120px 0 370px 140px !important;
    }
  }
  .responsive-div5,
  .responsive-div6 {
    width: 100% !important;
    height: auto !important;
    img {
      padding: 0 20px;
    }
    .two {
      margin-top: 72px !important; /*no*/
    }
  }
  .responsive-div6 {
    height: auto !important;
    .catch-btn-left {
      width: 50px;
      height: 50px;
      top: 407px;
      left: 10px;
      display: none;
    }
    .catch-btn-right {
      width: 50px;
      height: 50px;
      top: 407px;
      right: 10px;
      display: none;
    }
    .row {
      // padding-left: 80px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      padding-left: 0 !important;
    }
    .row-div {
      width: 600px !important;
      height: 384px !important;
      margin-bottom: 20px !important;
    }
    .more {
      font-size: 24px !important;
      padding-bottom: 221px !important;
    }
    .caption {
      h5 {
        font-size: 24px !important;
      }
    }
  }
  .row_list {
    .col-md-3,
    .col-lg-3,
    .col-sm-4,
    .col-xs-12 {
      margin-left: 0 !important;
    }
  }
  .xi-col-lg- {
    .col-lg-13 p {
      width: 65%;
    }
  }
  .nav-tabs.nav-justified {
    display: flex;
    justify-content: space-between;
  }
  .nav-tabs.nav-justified > li {
    width: 50% !important;
    padding: 15.5px 40px !important; /*no*/
    &:last-of-type {
      line-height: 60px;
    }
  }
  .nav-tabs.nav-justified > li > a {
    border-radius: 0;
    font-size: 11px !important; /*no*/
    font-family: PingFangSC-Medium;
    color: #1aa8aa;
    cursor: pointer;
  }
  .responsive-div {
    text-align: center;
    .bes_1 h4 {
      padding-left: 0 !important;
    }
    .bes_2 p {
      padding-left: 0 !important;
    }
    .text-muted {
      padding-left: 0 !important;
    }
    .bes_2 {
      padding-right: 0 !important;
    }
  }
  .responsive-div2 {
    .row-lg-2 {
      text-align: center;
    }
    .bes_1 h4 {
      font-size: 18px !important; /*no*/
      padding-left: 70px !important; /*no*/
      padding-right: 70px !important; /*no*/
    }
    .bes_2 p {
      padding-left: 0 !important;
      font-size: 11px !important; /*no*/
      padding-left: 70px !important; /*no*/
      padding-right: 70px !important; /*no*/
      padding-bottom: 0 !important;
    }
    .text-muted {
      padding-left: 0 !important;
    }
    .bes_2 {
      padding-right: 0 !important;
    }
    .row_list {
      padding-left: 60px !important;
      > div {
        height: 230px !important;
        margin-top: 36.5px !important; /*no*/
        li {
          font-size: 11px !important; /*no*/
          margin-top: 10px !important; /*no*/
        }
      }
    }
    .row_list h5 {
      font-size: 14px !important; /*no*/
      font-family: PingFangSC-Semibold;
    }
  }
  .responsive-div3 .list-group {
    padding-left: 0 !important;
    text-align: center;
    > div {
      a {
        margin: auto;
      }
    }
    .list-group-item {
      border-radius: 0;
    }
  }
  .responsive-div4 {
    .col-lg- {
      padding-left: 31px !important;
      padding-right: 31px !important;
      text-align: center;
      .col-xs-8,
      .col-xs-10 {
        width: 100%;
      }
    }
  }
}
.list-group-item {
  display: block;
  flex: 1;
  padding: 0;
  font-size: 0 !important;
  border: none;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
  }
}
.list-group {
  display: flex;
  margin-bottom: 0;
}
.navbar {
  margin-bottom: 0;
}
.container-fluid {
  padding: 0;
  margin: 0;
  position: relative;
  // margin-bottom: 210px;
}
.xi-col-lg-.col-lg- {
  width: 100%;
  background: url('../../images/unify.png') no-repeat;
  background-size: cover;
  height: 680px;
  padding: 180px 0 0 56px;
}
@media (min-width: 1440px) {
  .xi-col-lg-.col-lg- {
    padding: 180px 0 299px 200px;
  }
}
.row_col2 {
  // margin-top: 2%;
  p {
    font-family: PingFangSC-Regular;
    font-size: 18px;
    color: #303030;
  }
}
.col-lg-01 {
  padding-left: 0;
  padding-right: 0;
}
.col-lg-0 h4 {
  color: #1aa8aa;
  font-family: PingFangSC-Regular;
  font-size: 40px;
  margin-bottom: 29px;
}

.col-lg-13 p {
  color: #303030;
  font-family: PingFangSC-Regular;
  font-size: 22px;
}
.nav {
  box-shadow: #eee 2px 4px 5px;
}
.nav-tabs-hover {
  padding: 29px 0;
  text-align: center;
}
.nav-tabs-hover a {
  color: #303030 !important;
  display: inline;
  font-size: 16px;
  padding: 0 15px 29px;
  // border-bottom: 1px solid #fff;
}

.nav-tabs > li > a {
  border: none;
}
.nav-tabs.nav-justified {
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  z-index: 1000;
  background: #fff;
}
.nav-tabs.nav-justified > li > a {
  border-bottom: none;
  cursor: pointer;
}
.nav-tabs.nav-justified > .active > a,
.nav-tabs.nav-justified > .active > a:focus,
.nav-tabs.nav-justified > .active > a:hover {
  border: none;
}
.nav > li > a:focus,
.nav > li > a:hover {
  background: #fff;
  color: #525b68;
}
.nav-tabs > li > a:hover {
  border-color: #fff;
}
.container {
  margin: 0 !important;
  padding: 0 !important;
}
.hahah1 {
  width: 100%;
  background: #ebf4f4;
}
.hahah2 {
  width: 100%;
  background: #08a5a7;
}
.hahah3 {
  width: 100%;
  background: #e8f6f4;
}
.hahah6 {
  width: 100%;
  background: #ebf4f4;
}
.responsive-div {
  width: 1440px;
  height: 560px;
  margin: 0 auto !important;
  background: #ebf4f4;
  background-size: 693px 460px;
  background-position: 90% center;
}
.responsive-div2 {
  width: 1440px;
  min-height: 910px;
  margin: 0 auto !important;
  .img-responsive {
    float: right;
    display: inline-block;
  }
  .row_list {
    padding: 0 0 118px 140px;
    // line-height: 23px;
    h5 {
      font-size: 14px;
      margin-top: 30px;
      // line-height: 40px;
      // padding: 9px 0;
      width: 70%;
      border-bottom: 1px solid #e1e1e1;
      font-family: PingFangSC-Semibold;
      a {
        font-size: 24px;
        display: inline-block;
        padding: 9px 0;
        height: 100%;
        color: #fff;
        border-bottom: 1px solid #fff; /*no*/
      }
    }
    &:first-of-type {
      h5 {
        margin-top: 0;
        font-family: PingFangSC-Semibold;
      }
    }
    li {
      font-size: 14px;
      font-family: PingFangSC-Regular;
      width: 80%;
      &:first-of-type {
        margin-top: 10px;
      }
    }
    div {
      // margin: 0 90px 60px 0;
    }
    .col-md-3,
    .col-lg-3,
    .col-sm-4,
    .col-xs-12 {
      margin-left: 100px;
      &:first-of-type,
      &:nth-of-type(4) {
        margin-left: 0;
      }
    }
    @media (max-width: 998px) {
      .col-md-3,
      .col-lg-3,
      .col-sm-4,
      .col-xs-12 {
        margin-left: 0;
        &:first-of-type {
          margin-left: 0;
        }
      }
    }
  }
  .row .col-md-3,
  .row .col-md-4 {
    h5,
    ul > li {
      color: #fff;
    }
    ul,
    li {
      list-style: inside;
    }
  }
}
.row-lg-2 {
  .bes_1 h4,
  .bes_2 p {
    color: #fff;
  }
  .bes_1 h4 {
    font-size: 32px;
    font-family: PingFangSC-Semibold;
  }
  .bes_2 p {
    font-size: 18px;
    font-family: PingFangSC-Regular;
  }
}
.row_col1 .bes_1,
.row_col2 .bes_2 {
  padding-left: 0;
  padding-right: 0;
}
.bes_1 h4 {
  font-size: 32px;
  color: #303030;
  padding: 120px 0 32px 140px;
  font-family: PingFangSC-Semibold;
}
.responsive-div {
  .bes_1 h4,
  .bes_2 p,
  .text-muted {
    padding-left: 0;
    text-align: center;
  }
}
.bes_2 p {
  font-size: 18px;
  color: #303030;
  padding: 0 0 88px 140px;
  font-family: PingFangSC-Regular;
}
.text-muted {
  font-size: 18px;
  padding: 0 0 85px 140px;
  font-family: PingFangSC-Light;
}
.responsive-div3 {
  width: 1440px;
  height: 702px;
  margin: 0 auto !important;
  padding: 119px 0 0 !important;
  // .img-responsive-container {
  //   background: #ebf4f4;
  //   width: 400px;
  //   height: 400px;
  //   border-radius: 50%;
  //   float: right;
  // }
  .list-group {
    flex-direction: column;
    padding: 0 0 120px 140px;
    h4 {
      margin-bottom: 30px;
      font-family: PingFangSC-Semibold;
      font-size: 32px;
    }
    .list-group-item {
      font-size: 24px !important;
      width: 220px;
      color: #a5a5a5;
      border-bottom: 1px solid #dadada;
      padding: 27px 0;
      background: transparent !important;
      font-family: PingFangSC-Light;
      a.list-group-item,
      button.list-group-item {
        color: #a5a5a5;
        border-bottom: 1px solid #dadada;
      }
    }
  }
  .list-group-item.active,
  .list-group-item.active:focus,
  .list-group-item.active:hover {
    color: #303030;
    border-bottom: 1px solid #1aa8aa;
  }
}
.responsive-div3_single {
  background: url('../../images/single.png') no-repeat;
  background-size: 546px 505px;
  background-position: 70% center;
}
.responsive-div3_much {
  background: url('../../images/much.png') no-repeat;
  background-size: 546px 505px;
  background-position: 70% center;
}
.responsive-div3_center {
  background: url('../../images/center.png') no-repeat;
  background-size: 546px 505px;
  background-position: 70% center;
}
.responsive-div4 {
  width: 1440px;
  height: 1100px;
  margin: 0 auto !important;
  background: url('../../images/wwww.png') no-repeat center 360px;
  // background-size: 1106px 626px;
  .col-lg- {
    width: 100%;
    padding: 120px 0 370px 140px;
    h4 {
      color: #303030;
      font-family: PingFangSC-Semibold;
    }
    .col-lg-13 {
      p {
        font-size: 18px;
        &:last-of-type {
          margin-top: 30px;
        }
      }
    }
  }
}
.responsive-div5 {
  width: 1440px;
  // height: ;
  text-align: center;
  margin: 0 auto !important;
  padding-bottom: 110px !important;
  .one {
    margin-top: 60px;
  }
  .two {
    margin-top: 45px;
  }
  img {
    margin-top: 42px;
  }
  h4 {
    font-family: PingFangSC-Semibold;
    font-size: 32px;
  }
}
.catch-btn {
  width: 50px;
  height: 50px;
}
.catch-btn-left {
  position: absolute;
  top: 340px;
  left: -60px;
  background: url('../../images/ic_left.png') no-repeat center center/cover;
  cursor: pointer;
}
.catch-btn-right {
  background: url('../../images/ic_right.png') no-repeat center center/cover;
  position: absolute;
  top: 340px;
  right: -60px;
  cursor: pointer;
}
@media (max-width: 768px) {
  .catch-btn {
    width: 80px;
    height: 80px;
  }
  .catch-btn-left {
    position: absolute;
    top: 346px;
    left: -80px;
    background: url('../../images/ic_left.png') no-repeat center center/cover;
  }
  .catch-btn-right {
    background: url('../../images/ic_right.png') no-repeat center center/cover;
    position: absolute;
    top: 346px;
    right: -60px;
  }
  .bottom_intro {
    margin-left: 40px;
  }
}
.responsive-div6 {
  position: relative;
  width: 1161px;
  height: 708px;
  margin: 0 auto;
  // padding: 0 140px !important;
  box-sizing: border-box;
  background: #ebf4f4;
  .row {
    padding-left: 15px;
  }
  .row-div {
    width: 377px;
    height: 240px;
    padding: 0 7.5px;
  }
  h4 {
    text-align: center;
    margin-bottom: 88px;
    padding-top: 120px;
    font-family: PingFangSC-Semibold;
    font-size: 32px;
    background-size: auto 100%;
    background-position: center;
  }
  .thumbnail {
    width: 100%;
    height: 100%;
    position: relative;
    border: none;
    padding: 0;
    border: 1px solid #e8e8e8 !important;
    border-radius: 0;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
    .caption {
      position: absolute;
      bottom: 0;
      background: #1aa8aa;
      width: 100%;
      opacity: 0.8;
      padding: 3%;
      h5 {
        color: #fff;
        font-family: PingFangSC-Regular;
        font-size: 18px;
        width: 100% !important;
        margin: 0 !important;
        line-height: 20px;
      }
    }
  }
  // @media screen and (max-width: 550px) {
  //   .thumbnail {
  //     width: 40vw;
  //     height: 16vh;
  //   }
  // }
  img {
    width: 100%;
    height: 12vw;
    margin: 0;
  }
  .more {
    margin-top: 88px;
    font-size: 18px;
    color: #747c77;
    text-align: center;
    font-family: PingFangSC-Light;
    margin-bottom: 0;
  }
}
.row {
  margin-right: 0;
  margin-left: 0;
}
@media (min-width: 768px) and (max-width: 1024px) {
  .xi-col-lg- {
    .col-lg-0 h4 {
      font-size: 40px !important; /*no*/
    }
    .col-lg-13 p {
      width: 60%;
      font-size: 22px !important; /*no*/
    }
  }
  .xi-col-lg-.col-lg- {
    height: auto !important;
    padding: 180px 0 301px 70px !important; /*no*/
  }
  .responsive-div4 {
    background-size: contain !important;
    background-position: center 400px !important; /*no*/
    height: auto !important;
    .col-lg- {
      padding: 120px 80px 715px !important; /*no*/
      text-align: center;
      .col-lg-01 {
        width: 100%;
      }
      .col-lg-13 p {
        font-size: 22px !important; /*no*/
      }
      h4 {
        font-size: 36px !important; /*no*/
      }
    }
  }
  .responsive-div6 {
    width: 100% !important;
    height: 750px !important;
    .row {
      display: flex;
      justify-content: space-around;
      padding-left: 0 !important;
    }
    .catch-btn {
      width: 40px !important; /*no*/
      height: 40px !important; /*no*/
    }
    .catch-btn-left {
      left: -5px !important;
      display: none;
    }
    .catch-btn-right {
      right: -5px !important;
      display: none;
    }
    h4 {
      font-size: 28px !important; /*no*/
    }
    .row-div {
      width: 309px !important; /*no*/
      height: 198px !important; /*no*/
    }
    .more {
      font-size: 16px !important; /*no*/
    }
    .caption {
      height: auto;
    }
    .thumbnail .caption h5 {
      font-size: 20px !important; /*no*/
    }
  }
  .nav,
  .nav-tabs,
  .nav-justified {
    padding-left: 32px;
  }
  .nav-tabs-hover {
    a {
      font-size: 20px !important; /*no*/
    }
  }
  .responsive-div {
    height: auto !important; /*no*/
    background: #ebf4f4 !important;
    background-position: right bottom !important; /*no*/
    text-align: center;
  }
  .bes_1,
  .bes_2 {
    padding-right: 0 !important;
  }
  .bes_1 h4 {
    font-size: 36px !important; /*no*/
    padding-top: 116px !important; /*no*/
    padding-bottom: 29px !important; /*no*/
    padding-left: 0 !important;
  }
  .bes_2 p {
    font-size: 22px !important; /*no*/
    padding-bottom: 84px !important; /*no*/
    padding-left: 0 !important;
    margin-top: 30px !important; /*no*/
  }
  .text-muted {
    font-size: 24px !important; /*no*/
    padding-bottom: 103px !important; /*no*/
    padding-left: 0 !important;
  }
  .responsive-div3 {
    h4 {
      font-size: 36px !important; /*no*/
    }
    .list-group .list-group-item {
      font-size: 18px !important; /*no*/
    }
  }
  .responsive-div2 {
    .row_list .col-md-3,
    .row_list .col-lg-3,
    .row_list .col-sm-4,
    .row_list .col-xs-12 {
      margin-left: 0 !important; /*no*/
    }
    .container {
      width: 100%;
    }
    .bes_1 {
      padding-right: 0 !important; /*no*/
    }
    .bes_1 h4,
    .bes_2 p {
      width: 100%;
      padding-left: 70px !important;
      padding-right: 70px !important;
      padding-bottom: 0 !important;
      text-align: center;
    }
    .row_list h5 a {
      font-size: 26px !important; /*no*/
    }
    .row_list {
      > div {
        width: 50% !important; /*no*/
        height: 180px !important; /*no*/
        margin-top: 40px !important; /*no*/
      }
      li {
        font-size: 18px !important; /*no*/
        margin-top: 20px !important;
      }
    }
  }
  .responsive-div5 {
    h4 {
      font-size: 28px !important; /*no*/
    }
  }
}
@media (min-width: 768px) and (max-width: 800px) {
  .responsive-div6 {
    // width: 1161px !important;
    height: 708px !important;
    .row-div {
      width: 452px !important;
      height: 251px !important;
    }
    .caption {
      height: auto;
    }
    .thumbnail .caption h5 {
      font-size: 14px !important; /*no*/
    }
    .catch-btn-left {
      left: -80px !important;
    }
    .catch-btn-right {
      right: -80px !important;
    }
  }
}
</style>