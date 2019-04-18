<template>
  <div class="unify">
    <CommonHead />
    <div class="container-fluid">
      <div class="col-lg- xi-col-lg-">
        <div class="row row_col1">
          <div class="col-lg-0 col-lg-6 col-md-6 col-sm-10 col-xs-10">
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
          <a @click="changeActive(index)">{{item.name}}</a>
        </li>
      </ul>
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
      <div class="container responsive-div2">
        <div class="container">
          <div class="row-lg-2 center-auto">
            <div class="row row_col1">
              <div class="bes_1 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <h4>适合中国农村实情的新型农村污水处理设备</h4>
              </div>
            </div>
            <div class="row row_col2">
              <div class="bes_2 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <p>与中科院微生物合作，针对中国农村生活所排放的粪便、生活污水特点，<br />开发出适合中国农村实情的新型农村污水处理设备。
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="row row_list">
          <div class="col-md-3 col-lg-3 col-sm-4 col-xs-12">
            <h5>
              <a>一体化</a>
            </h5>
            <ul>
              <li>一机多用，一步到位。</li>
              <li>厕所、厨房、洗浴一体化处理。</li>
            </ul>
          </div>
          <div class="col-md-3 col-lg-3 col-sm-4 col-xs-12">
            <h5>
              <a>无害化</a>
            </h5>
            <ul>
              <li>排放符合《城镇污水处理厂污染物综合排放标准》，出水达到一级 B 标准，彻底解决农村主要污染源。</li>
            </ul>
          </div>
          <div class="col-md-3 col-lg-3 col-sm-4 col-xs-12">
            <h5>
              <a>智能化</a>
            </h5>
            <ul>
              <li>户厕设备由智能物联网 IoT 设备控制驱动，实现故障报警、动态远程控制等功能，与智能管护 App 打通实现高效运维。</li>
            </ul>
          </div>
        </div>
        <div class="row row_list">
          <div class="col-md-3 col-lg-3 col-sm-4 col-xs-12">
            <h5>
              <a>中水与肥效回用</a>
            </h5>
            <ul>
              <li>设备人性化设计，支持中水回田灌溉、冲厕等。</li>
              <li>支持安全、便捷地肥效回用</li>
            </ul>
          </div>
          <div class="col-md-3 col-lg-3 col-sm-4 col-xs-12">
            <h5>
              <a>适用范围广</a>
            </h5>
            <ul>
              <li>适用于平原、干旱、高原、高寒等地区。</li>
            </ul>
          </div>
          <div class="col-md-3 col-lg-3 col-sm-4 col-xs-12">
            <h5>
              <a>维护简单</a>
            </h5>
            <ul>
              <li>自动化故障报警， 平时无需专业人员维修。</li>
            </ul>
          </div>
        </div>
      </div>
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
        </div>
        <div class="row row_list">
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
      <div v-if="click===0"
           :class="click_group===0?'container responsive-div3 responsive-div3_single':click_group===1?'container responsive-div3 responsive-div3_much':'container responsive-div3 responsive-div3_center'">
        <div class="list-group">
          <h4>产品类型</h4>
          <a :class="index === click_group?'list-group-item active':'list-group-item'"
             v-for="(item,index) in list_group_items"
             :key="index"
             @click="changegroup(index)">
            {{item}}
          </a>
        </div>
      </div>
      <div class="container responsive-div4"
           v-if="click===0">
        <div class="col-lg-">
          <div class="row row_col1">
            <div class="col-lg-0 col-lg-4 col-md-4 col-sm-6 col-xs-10">
              <h4>设备原理及工作流程</h4>
            </div>
          </div>
          <div class="row row_col2">
            <div class="col-lg-13 col-lg-3 col-md-3 col-sm-3 col-xs-8">
              <p>采用倒置 A2/O 和接触氧化法工艺的基础上，通过在降解反应器内添加一定优化配置的生物强化菌剂，对污染物进行高效降解，实现对污水的精华并循环再利用的产品。 <br/>排出的水指标符合国家排放标准，可用于绿化、灌溉等。</p>
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
      <div class="responsive-div6"
           v-if="click===0">
        <h4>应用案例</h4>
        <div class="row">
          <div class="col-sm-6 col-md-4 col-xs-6 col-lg-4"
               v-for="(item,index) in examples"
               :key="index">
            <div class="thumbnail"
                 @click="showimage(item.img)"
                 :style="'background:url('+item.img+') no-repeat;background-size:cover'">
              <div class="caption">
                <h5>{{item.text}}</h5>
              </div>
            </div>
          </div>
        </div>
        <router-link to="/expression">
          <p class="more">查看更多应用案例</p>
        </router-link>
      </div>
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
    <CommonFoot />
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
      examples: [
        { text: '长城', img: require('../../images/y1/y1.jpg') },
        { text: '奥林匹克', img: require('../../images/y1/y2.jpg') },
        { text: '上海奉贤', img: require('../../images/y1/y3.jpg') }
      ],
      examples2: [
        { text: '微生物降解', img: require('../../images/c1/c1.jpg') },
        { text: '街头站立式', img: require('../../images/c1/c2.jpg') },
        { text: '泡沫封堵式', img: require('../../images/c1/c3.jpg') }
      ]
    }
  },
  methods: {
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
.list-group-item {
  display: inline-block;
  flex: 1;
  padding: 0;
  font-size: 0 !important;
  border: none;
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
  padding: 180px 0 299px 56px;
}
.row_col2 {
  margin-top: 2%;
  p {
    font-family: PingFangSC-Regular;
    font-size: 18px;
    color: #303030;
  }
}

.col-lg-0 h4 {
  color: #1aa8aa;
  font-family: PingFangSC-Regular;
  font-size: 32px;
}

.col-lg-13 p {
  color: #303030;
  font-family: PingFangSC-Regular;
  font-size: 18px;
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
.nav-tabs-hover.active {
  color: #1aa8aa;
}
.nav-tabs-hover.active a {
  color: #1aa8aa !important;
  border-bottom: 2px solid #40f2d0 !important;
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
.responsive-div {
  width: 100%;
  background: url('../../images/wc.png') #ebf4f4 no-repeat;
  background-size: contain;
  background-position: 90% center;
}
.responsive-div2 {
  width: 100%;
  background: #08a5a7;
  .img-responsive {
    float: right;
    display: inline-block;
  }
  .row_list {
    padding: 0 0 40px 140px;
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

.bes_1 h4 {
  font-size: 32px;
  color: #303030;
  padding: 60px 0 16px 140px;
  font-family: PingFangSC-Semibold;
}
.bes_2 p {
  font-size: 18px;
  color: #303030;
  padding: 0 0 44px 140px;
  font-family: PingFangSC-Regular;
}
.text-muted {
  font-size: 18px;
  padding: 0 0 85px 140px;
  font-family: PingFangSC-Light;
}
.responsive-div3 {
  width: 100%;
  padding: 60px 0 0 !important;
  // .img-responsive-container {
  //   background: #ebf4f4;
  //   width: 400px;
  //   height: 400px;
  //   border-radius: 50%;
  //   float: right;
  // }
  .list-group {
    flex-direction: column;
    padding: 0 0 120px 70px;
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
      padding: 13px 0;
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
  background-size: contain;
  background-position: 70% center;
}
.responsive-div3_much {
  background: url('../../images/much.png') no-repeat;
  background-size: contain;
  background-position: 70% center;
}
.responsive-div3_center {
  background: url('../../images/center.png') no-repeat;
  background-size: contain;
  background-position: 70% center;
}
.responsive-div4 {
  width: 100%;
  background: url('../../images/theory.png') no-repeat #e8f6f4;
  background-size: contain;
  background-position: 80% center;
  .col-lg- {
    width: 100%;
    padding: 60px 0 370px 70px;
    h4 {
      color: #303030;
      font-family: PingFangSC-Semibold;
    }
    .col-lg-13 {
      p {
        font-size: 18px;
      }
    }
  }
}
.responsive-div5 {
  width: 100%;
  text-align: center;
  padding-bottom: 50px !important;
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
.responsive-div6 {
  padding: 60px 10% 50px !important;
  box-sizing: border-box;
  background: #ebf4f4;
  // margin-top: 50px;
  h4 {
    text-align: center;
    margin-bottom: 44px;
    font-family: PingFangSC-Semibold;
    font-size: 32px;
    background-size: auto 100%;
    background-position: center;
  }
  .thumbnail {
    width: 377px;
    height: 240px;
    position: relative;
    border: none;
    padding: 0;
    background-size: auto 100%;
    background-position: center;
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
        font-size: 10px;
        width: 100% !important;
      }
    }
  }
  @media screen and (max-width: 550px) {
    .thumbnail {
      width: 40vw;
      height: 16vh;
    }
  }
  img {
    width: 100%;
    height: 12vw;
    margin: 0;
  }
  .more {
    font-size: 9px;
    color: #747c77;
    text-align: center;
    font-family: PingFangSC-Light;
  }
}
.row {
  margin-right: 0;
}
</style>