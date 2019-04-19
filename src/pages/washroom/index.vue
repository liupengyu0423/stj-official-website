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
      <div class="hahah1">
        <div class="container responsive-div"
             v-if="click===1">
          <div class="row-lg-1 center-auto">
            <div class="row row_col1">
              <div class="bes_1 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <h4>生物环保厕所</h4>
              </div>
            </div>
            <div class="row row_col2">
              <div class="bes_2 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <p>利用经过优化的微生物菌剂，对人体排泄物进行高效分解，并将微量残<br />留物转化成生态有机肥的高科技产品。
                </p>
              </div>
            </div>
            <a href="/expression">
              <p class="text-muted">查看应用案例 ></p>
            </a>
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
      </div>
      <div class="hahah6">
        <div class="responsive-div6"
             v-if="click===1">
          <h4>产品展示</h4>
          <div class="row">
            <div class="row-div col-sm-6 col-md-4 col-xs-6 col-lg-4"
                 v-for="(item,index) in examples2"
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
        </div>
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
      items: [{ name: '农村户厕污水一体化生物处理设备', href: 'unify' }, { name: '生物环保厕所', href: 'washroom' }],
      click: 1,
      list_group_items: ['STJ-单户式', 'STJ-多户式', 'STJ-村集中式'],
      click_group: 0,
      examples: [],
      examples1: [
        { text: '内蒙鄂托克旗', img: require('../../images/l3/l1.jpg') },
        { text: '新疆喀什', img: require('../../images/l3/l2.jpg') },
        { text: '广西上林县', img: require('../../images/l3/l3.jpg') }
      ],
      examples2: [
        { text: '街头站立式环保厕所', img: require('../../images/c2/c1.jpg') },
        { text: '街头站立式环保厕所', img: require('../../images/c2/c2.jpg') },
        { text: '微生物降解环保厕所', img: require('../../images/c2/c3.jpg') },
        { text: '微生物降解环保厕所', img: require('../../images/c2/c4.jpg') },
        { text: '泡沫封堵式环保厕所', img: require('../../images/c2/c5.jpg') },
        { text: '水循环式环保厕所', img: require('../../images/c2/c6.jpg') },
        { text: '水冲式环保厕所', img: require('../../images/c2/c7.jpg') },
        { text: '流动环保厕所', img: require('../../images/c2/c8.jpg') },
        { text: '单体环保厕所', img: require('../../images/c2/c9.jpg') },
        { text: '单体环保厕所', img: require('../../images/c2/c10.jpg') },
        { text: '广场舞用环保厕所', img: require('../../images/c2/c11.jpg') },
        { text: '旅游景点环保厕所', img: require('../../images/c2/c12.jpg') },
        { text: '拖车式环保厕所', img: require('../../images/c2/c13.jpg') },
        { text: '固定式环保厕所', img: require('../../images/c2/c14.jpg') },
        { text: '火车用环保厕所', img: require('../../images/c2/c15.jpg') }
      ],
      examples3: [
        { text: '陕西洛川县', img: require('../../images/l3/l4.jpg') },
        { text: '青海门源县', img: require('../../images/l3/l5.jpg') },
        { text: '宁夏利通区', img: require('../../images/l3/l6.jpg') }
      ],
      examples5: [
        { text: '宁夏灵武市', img: require('../../images/l3/l7.jpg') },
        { text: '山东齐河县', img: require('../../images/l3/l8.jpg') },
        { text: '山东荣成市', img: require('../../images/l3/l9.jpg') }
      ]
    }
  },
  created () {
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
    more () {
      this.$router.push('/expression')
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
  padding: 90px 0 150px 56px;
}
@media (min-width: 1440px) {
  .xi-col-lg-.col-lg- {
    padding: 180px 0 299px 200px;
  }
}
.row_col2 {
  margin-top: 2%;
  p {
    font-family: PingFangSC-Regular;
    font-size: 18px;
    color: #303030;
  }
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
  background: #fff;
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
.nav-tabs.nav-justified {
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  z-index: 1000;
  background: #fff;
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
  width: 1440px;
  height: 560px;
  margin: 0 auto !important;
  background: url('../../images/wrashroom.png') #ebf4f4 no-repeat;
  background-size: 693px 460px;
  background-position: 90% center;
}
.responsive-div2 {
  width: 1440px;
  min-height: 910px;
  margin: 0 auto !important;
  background: #08a5a7;
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
      line-height: 40px;
      width: 70%;
      border-bottom: 1px solid #e1e1e1;
      font-family: PingFangSC-Semibold;
      a {
        display: inline-block;
        font-size: 24px;
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
.row_col1 .bes_1,
.row_col2 .bes_2 {
  padding-left: 0;
}
.bes_1 h4 {
  font-size: 32px;
  color: #303030;
  padding: 120px 0 32px 140px;
  font-family: PingFangSC-Semibold;
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
    }
    .list-group-item {
      font-size: 12px !important;
      width: 110px;
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
        font-size: 9px;
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
    margin-top: 20px;
  }
  h4 {
    font-family: PingFangSC-Semibold;
    font-size: 16px;
  }
}
.catch-btn {
  width: 50px;
  height: 50px;
}
.catch-btn-left {
  position: absolute;
  top: 346px;
  left: -60px;
  background: url('../../images/ic_left.png') no-repeat center center/cover;
}
.catch-btn-right {
  background: url('../../images/ic_right.png') no-repeat center center/cover;
  position: absolute;
  top: 346px;
  right: -40px;
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
@media (min-width: 768px) and (max-width: 1024px) {
  .catch-btn {
    width: 80px;
    height: 80px;
  }
  .catch-btn-left {
    position: absolute;
    top: 346px;
    left: -60px;
    background: url('../../images/ic_left.png') no-repeat center center/cover;
  }
  .catch-btn-right {
    background: url('../../images/ic_right.png') no-repeat center center/cover;
    position: absolute;
    top: 346px;
    right: -80px;
  }
}
.responsive-div6 {
  position: relative;
  width: 1161px;
  // height: 708px;
  margin: 0 auto;
  // padding: 60px 10% 50px !important;
  box-sizing: border-box;
  // background: #ebf4f4;
  // margin-top: 50px;
  .row-div {
    width: 377px;
    height: 240px;
    padding: 0 7.5px;
    // margin-right: 15px;
    margin-bottom: 72px;
  }
  h4 {
    margin-bottom: 88px;
    padding-top: 120px;
    text-align: center;
    font-family: PingFangSC-Semibold;
    font-size: 32px;
  }
  .thumbnail {
    width: 100%;
    height: 100%;
    position: relative;
    border: none;
    padding: 0;
    border-radius: 0;
  }
  // @media screen and (max-width: 550px) {
  //   .thumbnail {
  //     height: 16vh;
  //   }
  // }
  img {
    width: 100%;
    height: 12vw;
    margin: 0;
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
    }
  }
  .more {
    font-size: 9px;
    color: #747c77;
    text-align: center;
    font-family: PingFangSC-Light;
  }
}
.row {
  margin-left: 0;
  margin-right: 0;
  margin: 0 auto;
}
</style>