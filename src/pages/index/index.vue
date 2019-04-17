<template>
  <div class="home">
    <CommonHead />
    <Swiper />
    <div class="environment">
      <div class="row">
        <div class="col-sm-0 col-sm-4 col-md-4 col-lg-4 col-xs-12">
          <div class="thumbnail">
            <img src="../../images/envir.png"
                 alt="">
            <div class="caption">
              <p class="list-group-item-p">人居环境建设</p>
            </div>
          </div>
        </div>
        <div class="col-sm-0 col-sm-4 col-md-4 col-lg-4 col-xs-12">
          <div class="thumbnail">
            <img src="../../images/innocuity.png"
                 alt="">
            <div class="caption">
              <p class="list-group-item-p">无害化</p>
            </div>
          </div>
        </div>
        <div class="col-sm-0 col-sm-4 col-md-4 col-lg-4 col-xs-12">
          <div class="thumbnail">
            <img src="../../images/integration.png"
                 alt="">
            <div class="caption">
              <p class="list-group-item-p">厕所洗浴厨房一体化</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="intro wrap"
         @click="blowimg">
      <!-- <img src="../../images/intro.png"
           alt=""
           class="img-responsive"> -->
      <div class="intro_text">
        <p class="intro_title">为农村厕所革命和生态文明建设做出贡献</p>
        <p>生态洁是国内唯一一家取得驰名商标的环保厕所和污水处理设备研发制造企业</p>
        <p>专注产品研发近20年，在全国10多个省区累计使用超过100万套</p>
        <ul class="instro-radius-ul">
          <li class="instro-radius">
            <h4>ISO</h4>
            <p class="tix">体系认证</p>
            <p class="tix">
              <strong class="zl">3</strong>个</p>
          </li>
          <li class="instro-radius">
            <h4>50+</h4>
            <p class="zl">专利</p>
          </li>
          <li class="instro-radius">
            <p class="tix">核心技术</p>
            <p class="tix">列入国家</p>
            <p class="jh">
              <strong class="four">863</strong>计划</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="row scheme">
      <div class="col-sm-13 col-sm-6 col-md-6 col-lg-6 col-xs-6">
        <div class="thumbnail">
          <h2>产品中心</h2>
          <p class="top">农村户厕一体化生物处理建设</p>
          <p class="center">利用微生物降解原理，对生活污水进行截流、吸附和分解，最终实现对污水完全净化并循环利用的新型农村生活污水处理设备</p>
          <router-link to="/product"
                       class="all">了解所有产品</router-link>
          <img src="../../images/product.png"
               alt="">
        </div>
      </div>
      <div class="col-sm-13 col-sm-6 col-md-6 col-lg-6 col-xs-6">
        <div class="thumbnail">
          <h2>互联网+智慧方案</h2>
          <p class="top">农村户厕一体化生物处理设备</p>
          <p class="center">利用微生物降解原理，对生活污水进行截流、吸附和分解，最终实现对污水完全净化并循环利用的新型农村生活污水处理设备</p>
          <router-link to="/net"
                       class="all">了解所有方案</router-link>
          <img src="../../images/fa.png"
               alt="">
        </div>
      </div>
    </div>
    <div class="container-fluid map">
      <h4>产品覆盖分布图</h4>
      <img src="../../images/map.png"
           alt=""
           class="img-responsive center-block">
      <div class="spure_div">
        <span class="spure"></span>
        <span class="spure_text">已安装的省份</span>
      </div>
    </div>
    <div class="container-fluid map">
      <h4>新闻中心</h4>
      <div class="row examples">
        <div class="col-sm-6 col-md-6 col-xs-12 col-lg-6"
             v-for="(item,index) in examples"
             :key="index">
          <div class="thumbnail">
            <img :src="item.img"
                 class="center-block"
                 @click="showimage(item.img)">
            <div class="caption">
              <p class="title">{{item.title}}</p>
              <p class="detail">{{item.detail}}</p>
              <router-link :to="'/newsDetail?id='+item.id"
                           class="learn_detail"
                           @click="learn_detail(item)">了解详情</router-link>
            </div>
          </div>
        </div>
      </div>
      <p class="more_news_p">
        <router-link class="more_news"
                     to="/news">查看更多新闻</router-link>
      </p>
    </div>
    <div id="ShowImage_Form"
         class="modal">
      <div class="modal-body"
           @click="close">
        <div id="img_show"
             @click="close">
        </div>
      </div>
    </div>
    <div class="container">
      <div class="responsive-div">
        <div class="row">
          <div class="bottom_intro bottom_intro2 col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <h4>褒奖</h4>
            <div class="col-sm-6 col-lg-4 col-md-4 col-xs-6"
                 v-for="(item,index) in examples2"
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
        </div>
      </div>
    </div>
    <CommonFoot />
  </div>
</template>

<script>
import CommonHead from '@/components/head'
import CommonFoot from '@/components/foot'
import Swiper from '@/components/swiper'
export default {
  name: 'home',
  data () {
    return {
      examples: [
        { title: '四川省农业厅副厅长杨波参观公司产品', img: require('../../images/n1/n1.jpg'), id: 0, date: '2019-03-08', detail: '3月8日，四川省农业厅副厅长杨波及各地市负责农村改厕的领导、专家在德阳市罗江区领导的陪同下参观公司安装在罗江区金山镇大井村的农村户厕一体化生物处理设备，公司讲解员向与会的领导、专家详细介绍了产品的工艺和性能。杨厅长对公司的产品提出了好评并希望这种产品能为四川省农村环境治理作出贡献，与会的领导、专家也对生态洁的一体化生物处理设备称赞不已。' },
        { title: '农业农村部部长韩长赋参观公司产品', img: require('../../images/n1/n2.jpg'), id: 1, date: '2019-10-09', detail: '2018年10月9日，全国首届农村卫生厕所新技术新产品展示交流会在山东淄博国际会展中心盛大开幕，生态洁公司受邀参加。交流会期间，农业农村部部长韩长赋到公司展位参观了公司产品并进行了指导。韩部长对生态洁公司的农村户厕一体化生物处理设备给予了充分肯定，赞扬公司产品将农村改厕和污水处理结合在一起，一步到位，是一种真正意义上的“厕所革命”好产品。' },
        { title: '住建部总工程师陈宜明参观公司产品', img: require('../../images/n1/n3.jpg'), id: 2, date: '2019-03-08', detail: '2018年10月13日，住建部总工程师陈宜明到第七届中国国际住宅产业暨建筑工业化产品与设备博览会生态洁公司展位参观。在公司展品旁，他详细了解了农村户厕一体化生物处理设备的工艺、运行、维护等情况，对农村改厕和一体化生物处理模式大加赞赏，希望生态洁公司再接再厉。继续为全国农村“厕所革命”做出更大的贡献。本次展会由住房和城乡建设部主办。' },
        { title: '山东省莱芜市莱城区领导观摩生态洁产品', img: require('../../images/n1/n4.jpg'), id: 3, date: '2019-03-08', detail: ' 2018年6月19日，莱芜市莱城区委书记马宝岭，区长秦蕾带领区五大班子以及区直部门及各乡镇领导观摩公司安装在口镇的农村户厕一体化生物处理设备。在口镇林家庄和栖龙湾村安装现场。马书记及各位领导详细询问了设备运行情况，并提出了指导意见。希望生态洁继续努力，为莱芜的农村厕改和污水治理工作作出持续贡献' }
      ],
      examples2: [
        { text: '低碳单位', img: require('../../images/ry/r10.jpg') },
        { text: '科技进步', img: require('../../images/ry/r11.jpg') },
        { text: '厕所大赛', img: require('../../images/ry/r12.jpg') },
        { text: '消费满意', img: require('../../images/ry/r13.jpg') },
        { text: '环保单位', img: require('../../images/ry/r14.jpg') },
        { text: '创业基地', img: require('../../images/ry/r15.jpg') }
      ]
    }
  },
  components: {
    CommonHead,
    CommonFoot,
    Swiper
  },
  created () {
  },
  methods: {
    blowimg () {
      console.log($('img.intro_img').zoomify())
      $('img.intro_img').zoomify();
    },
    learn_detail (news) {
      localStorage.setItem('news', JSON.stringify(news))
    },
    showimage (source) {
      $("#ShowImage_Form").find("#img_show").html("<img src='" + source + "' class='carousel-inner img-responsive img-rounded' />");
      $("#ShowImage_Form").modal();
    },
    close () {
      $("#ShowImage_Form").modal('hide');
    }
  }
}
</script>

<style lang="scss" scoped>
.environment .row {
  display: flex;
  padding: 0;
  img {
    width: 100%;
  }
  .thumbnail {
    margin-bottom: 0;
  }
}
.bottom_intro {
  h4 {
    font-size: 30px;
    font-family: PingFangSC-Thin;
    color: #424644;
  }
}
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
.intro {
  margin-top: 0;
  width: 100%;
  height: 702px;
  position: relative;
  pointer-events: auto;
  background: url('../../images/intro.png') no-repeat center center;
  background-position: auto 100%;
  background-size: cover;
  .intro_img {
    width: 100%;
  }
  .intro_text {
    position: absolute;
    top: 0;
    text-align: center;
    width: 100%;
    padding-top: 1px; /*no*/
    p {
      color: #fff;
      // line-height: 3vw;
      font-size: 24px;
      font-family: PingFangSC-Thin;
    }
    .intro_title {
      font-size: 32px;
      margin-top: 120px;
      margin-bottom: 40px;
      font-family: PingFangSC-Semibold;
    }
  }
}
.scheme {
  background-image: linear-gradient(
    -180deg,
    #ebf4f4 0%,
    #ffffff 50%,
    #ebf4f4 100%
  );
  padding-left: 79px;
  .scheme_left {
    background: url('../../images/product.png') no-repeat;
    background-size: contain;
  }
  .thumbnail {
    margin-bottom: 0;
  }
}
.col-sm-13 {
  padding-left: 64px !important;
}
.thumbnail {
  padding: 0 !important;
  border: none;
  background: none;
}
.col-md-0 {
  padding: 0;
}
.row {
  margin: 0;
  padding: 0;
}
.list-group-item {
  position: relative;
}
.list-group-item-p {
  color: #fff;
  position: absolute;
  top: 48px;
  font-size: 32px;
  width: 100%;
  text-align: center;
  font-family: PingFangSC-Regular;
}
.environment {
  .row {
    .col-sm-0 {
      padding: 0 !important;
    }
  }
}
.thumbnail .caption {
  padding: 0;
}
.instro-radius-ul {
  display: flex;
  justify-content: space-around;
  margin-top: 80px;
}
.instro-radius {
  width: 172px;
  height: 172px;
  border: 1px solid #fff;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  h4 {
    color: #fff;
    font-size: 56px;
  }
  .tix {
    font-size: 24px !important;
  }
  .zl {
    font-size: 32px !important;
  }
  .jh {
    font-size: 23px !important;
  }
  .four {
    font-size: 40px !important;
  }
}
.col-sm-13 {
  h2 {
    font-size: 38px;
    color: #1aa8aa;
    padding-top: 120px;
    margin-bottom: 35.5px;
  }
  .top {
    font-size: 22px;
    color: #3e403f;
    margin-bottom: 10px;
  }
  .center {
    font-size: 16px;
    color: #3e403f;
    width: 404px;
  }
  .all {
    float: left;
    color: #1aa8aa;
    font-size: 16px;
    margin-top: 38.1px;
  }
  img {
    display: inline;
    margin-top: -8vw;
  }
}
.map {
  padding-bottom: 30px;
  h4 {
    font-family: PingFangSC-Thin;
    text-align: center;
    padding: 120px 0 102px 0;
    font-size: 32px;
  }
  .spure_div {
    float: left;
    margin-left: 140px;
  }
  .spure {
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #3dc4aa;
  }
  .spure_text {
    color: #303030;
    font-size: 18px;
    margin-left: 6px;
  }
  .thumbnail {
    display: flex;
    img {
      width: 50%;
      height: 20vh;
      margin-right: 2%;
      display: inline-block;
    }
    .learn_detail {
      font-size: 12px;
      color: #7a7e7c;
    }
    .detail {
      font-size: 14px;
      height: 80%;
      overflow: hidden;
      color: #303030;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
    }
    .title {
      font-size: 18px;
      color: #303030;
      margin-top: 0.5vw;
      width: 20vw;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  .examples {
    > div {
      margin-bottom: 37px;
      padding-left: 96px;
      padding-bottom: 33px;
      border-bottom: 1px solid #ebebeb;
      .caption {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
    }
    .title {
      margin-bottom: 16px;
    }
    .detail {
      margin-bottom: 26px;
    }
  }
}
.col-md-6,
.col-lg-6,
.col-sm-6,
.col-xs-6 {
  padding: 0;
  margin: 0;
}
.more_news_p {
  text-align: center;
}
.more_news {
  border: 1px solid #ebebeb;
  font-size: 16px;
  color: #747c77;
  padding: 0.5vw 0.9vw;
  margin-top: 1.95vw;
}
.responsive-div {
  padding: 10px 0;
  box-sizing: border-box;
  h4 {
    text-align: center;
    margin-bottom: 2vw;
  }
  .col-xs-6 .thumbnail {
    height: 18vh;
  }
  .thumbnail {
    height: 30vh;
    position: relative;
    border: none;
    margin-bottom: 32px;
    margin-left: 20px;
    background-size: auto 100%;
    background-position: center;
  }
  img {
    width: 100%;
    height: auto;
    margin: 0;
  }
  .caption {
    position: absolute;
    bottom: 0px;
    background: rgba(255, 255, 255, 0.88);
    width: 100%;
    padding: 8px 0 7px 14px;
    h5 {
      color: #303030;
      font-family: PingFangSC-Regular;
      font-size: 18px;
    }
  }
  .more {
    font-size: 9px;
    font-size: 0.9rem;
    color: #747c77;
    text-align: center;
  }
}
</style>