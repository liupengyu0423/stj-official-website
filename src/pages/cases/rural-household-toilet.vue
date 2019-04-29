<template>
  <div class="expression">
    <CommonHead />
    <div class="container container_banner">
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <h4>专注产品研发近20年， <br />在全国10多个省区累计使用超过100万套<br /> 全国80%的市场占有率
          </h4>
        </div>
      </div>
    </div>
    <ul class="nav nav-tabs nav-justified">
      <li role="presentation"
          :class="index===click?'active nav-tabs-hover':'nav-tabs-hover'"
          v-for="(item,index) in items"
          :key="index">
        <a class="changeActiveA"
           @click="changeActive(index)">{{item.name}}
          <span :class="click===0?'line1':'line2'"
                v-if="click===index"></span>
        </a>
      </li>
    </ul>
    <div class="row examples">
      <div class="col-sm-6 col-md-4 col-xs-12 col-lg-4"
           v-for="(item,index) in click===0?examples1:examples2"
           :key="index">
        <div class="thumbnail"
             @click="showimage(item.img)"
             :style="'background:url('+item.img+') no-repeat center center/cover'">
          <div class="caption">
            <h5>{{item.text}}</h5>
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
  name: 'expression',
  components: {
    CommonHead,
    CommonFoot
  },
  data () {
    return {
      items: [{ name: '农村户厕污水一体化生物处理设备', href: 'unify' }, { name: '生物环保厕所', href: 'wrashroom' }],
      click: 0,
      examples1: [
        { text: '内蒙鄂托克旗', img: require('../../images/l3/l1.jpg') },
        { text: '新疆喀什', img: require('../../images/l3/l2.jpg') },
        { text: '广西上林县', img: require('../../images/l3/l3.jpg') },
        { text: '陕西洛川县', img: require('../../images/l3/l4.jpg') },
        { text: '青海门源县', img: require('../../images/l3/l5.jpg') },
        { text: '宁夏利通区', img: require('../../images/l3/l6.jpg') },
        { text: '宁夏灵武市', img: require('../../images/l3/l7.jpg') },
        { text: '山东齐河县', img: require('../../images/l3/l8.jpg') },
        { text: '山东荣成市', img: require('../../images/l3/l9.jpg') }
      ],
      examples2: [
        { text: '北京八达岭长城', img: require('../../images/y2/y1.jpg') },
        { text: '奥林匹克水上公园', img: require('../../images/y2/y2.jpg') },
        { text: '上海奉贤', img: require('../../images/y2/y3.jpg') },
        { text: '宁波', img: require('../../images/y2/y4.jpg') },
        { text: '西安北门', img: require('../../images/y2/y5.jpg') },
        { text: '西安街头', img: require('../../images/y2/y6.jpg') },
        { text: '重庆街头', img: require('../../images/y2/y7.jpg') },
        { text: '新疆阿克苏多浪公园', img: require('../../images/y2/y8.jpg') },
        { text: '济南泉城广场', img: require('../../images/y2/y9.jpg') },
        { text: '青岛世园会', img: require('../../images/y2/y10.jpg') },
        { text: '青岛奥帆赛', img: require('../../images/y2/y11.jpg') },
        { text: '泰山西天门', img: require('../../images/y2/y12.jpg') },
        { text: '曲阜孔庙', img: require('../../images/y2/y13.jpg') },
        { text: '威海海边', img: require('../../images/y2/y14.jpg') },
        { text: '济南铁路局', img: require('../../images/y2/y15.jpg') }
      ]
    }
  },
  methods: {
    changeActive (index) {
      if (index) {
        location.href = '/cases/bio-toilet'
      } else {
        location.href = '/cases/rural-household-toilet'
      }
      this.click = index
    },
    showimage (source) {
      $("#ShowImage_Form").find("#img_show").html("<img src='" + source + "' class='carousel-inner img-responsive img-rounded' />");
      $("#ShowImage_Form").modal();
    },
    close () {
      $("#ShowImage_Form").modal('hide');
    }
  },
  created () {
    _gaq.push(['_trackEvent', 'jump', '应用案例', 'examples']);
  }
}
</script>

<style lang="scss" scoped>
.modal-header {
  border-bottom: none !important;
}
.expression {
  .navbar-sticky {
    position: static;
  }
}
@media (max-width: 760px) {
  .expression .row.examples > div.col-xs-6 {
    width: 47% !important;
  }
  .expression .row.examples {
    display: flex;
    padding-top: 100px !important;
    padding-bottom: 200px !important;
    > div {
      width: 600px !important;
      height: 384px !important;
      margin-bottom: 10px !important;
    }
  }
  .expression .nav-tabs.nav-justified {
    display: flex;
    li {
      width: 50%;
    }
  }
  .nav-tabs.nav-justified > li {
    width: 50% !important;
    padding: 15.5px 40px !important; /*no*/
    &:last-of-type {
      line-height: 60px;
    }
  }
  .nav-tabs.nav-justified > li a {
    font-family: PingFangSC-Medium;
    padding: 0 !important;
    font-size: 11px !important; /*no*/
  }
  .expression .row.examples .thumbnail .caption h5 {
    font-size: 24px !important;
  }
}
.expression {
  .nav {
    box-shadow: #eee 2px 4px 5px;
  }
  @media (min-width: 1300px) {
    .row.examples {
      padding: 60px 25px 11% !important; /* no */
    }
  }
  @media (min-width: 1400px) {
    .row.examples {
      padding: 60px 40px 11% !important; /* no */
    }
  }
  @media (min-width: 1600px) {
    .row.examples {
      padding: 60px 100px 11% !important; /* no */
    }
  }
  @media (min-width: 1800px) {
    .row.examples {
      padding: 60px 200px 11% !important; /* no */
    }
  }
  @media (min-width: 2100px) {
    .row.examples {
      padding: 60px 300px 11% !important; /* no */
    }
  }
  @media (min-width: 2500px) {
    .row.examples {
      padding: 60px 600px 11% !important; /* no */
    }
  }
  .container_banner {
    background: url('../../images/expre_banner.png') no-repeat center center;
    background-size: cover;
  }
  .line1,
  .line2 {
    display: inline-block;
    width: 100px;
    height: 2px; /*no*/
    background: #40f2d0;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -50px;
  }
  .changeActiveA {
    width: 100%;
    display: inline-block !important;
    position: static;
  }
  .navbar {
    margin-bottom: 0;
  }
  .container {
    margin: 0;
    width: 100%;
    padding: 8% 5%;
    // background: #f8faf9;
    h4 {
      line-height: 30px;
      color: #fff;
      font-family: PingFangSC-Regular;
      font-size: 40px;
      line-height: 54px;
    }
  }
  .row {
    margin-right: 0;
  }
  .nav-tabs.nav-justified {
    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: 0;
    z-index: 1000;
    background: #fff;
  }
  .nav-tabs-hover {
    padding: 29px 0;
    text-align: center;
    position: relative;
  }
  .nav-tabs-hover.active {
    color: #1aa8aa;
  }
  .nav-tabs-hover a {
    color: #303030 !important;
    display: inline;
    font-size: 16px;
  }
  .nav-tabs-hover.active a {
    color: #1aa8aa !important;
  }
  .nav-tabs > li > a {
    border: none;
  }
  .nav-tabs.nav-justified > li > a {
    border-bottom: none;
    padding: 0 15px 0;
    cursor: pointer;
  }
  .nav-tabs.nav-justified {
    // border-bottom: 1px solid #f3f3f3;
  }
  .nav-tabs.nav-justified > li > a {
    border-bottom: none;
  }
  .nav-tabs.nav-justified > .active > a,
  .nav-tabs.nav-justified > .active > a:focus,
  .nav-tabs.nav-justified > .active > a:hover {
    border: none;
    color: #525b68;
  }
  .nav > .active > a,
  .nav > li > a:focus,
  .nav > li > a:hover {
    background: #fff;
    color: #1aa8aa !important;
    border-bottom: 1px solid #1aa8aa;
  }
  .nav-tabs > li > a:hover {
    border-color: #fff;
  }
  .row.examples {
    // width: 80vw;
    padding: 60px 0 11%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    .col-sm-4,
    .col-lg-4,
    .col-md-4,
    .col-xs-4 {
      margin: 27px 8px;
      // margin-left: 0.5vw;
    }
    .bottom_intro2 {
      padding: 0;
      padding-left: 6vw;
    }
    h4 {
      text-align: center;
      margin-bottom: 2vw;
    }
    .thumbnail {
      height: 100%;
      position: relative;
      border: none;
      border-radius: 0 !important;
      padding: 0;
      background-size: auto 100%;
      background-position: center;
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
        h5 {
          color: #fff;
          font-family: PingFangSC-Regular;
          font-size: 18px;
          width: 100% !important;
          margin: 0 !important;
          line-height: 21.5px;
        }
      }
    }
    > div {
      width: 432px;
      height: 274px;
    }
    // @media screen and (max-width: 700px) {
    //   > div {
    //     width: 45%; /* no */
    //     height: 120px; /* no */
    //   }
    // }
    @media screen and (min-width: 1440px) {
      > div {
        width: 432px; /* no */
        height: 274px; /* no */
      }
      .thumbnail {
        width: 100%; /* no */
        height: 100%; /* no */
      }
      .col-sm-4,
      .col-lg-4,
      .col-md-4,
      .col-xs-4 {
        margin: 27px 8px; /* no */
      }
    }
    @media screen and (max-width: 550px) {
      .col-sm-6,
      .col-md-4,
      .col-xs-6,
      .col-lg-4 {
        padding-right: 6px;
        padding-left: 6px;
      }
    }
  }
}
</style>