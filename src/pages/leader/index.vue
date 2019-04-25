<template>
  <div class="news">
    <CommonHead />
    <div class="container container_banner">
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-9">
          <h4>生态洁产品受到国家领导关注<br>被中央电视台报道
          </h4>
        </div>
      </div>
    </div>
    <div class="row examples"
         id="mao">
      <div class="col-sm-4 col-md-4 col-xs-12 col-lg-4 col-sm"
           v-for="(item,index) in examples"
           :key="index">
        <div class="thumbnail">
          <img :src="item.img"
               @click="showimage(item.img)">
          <div class="caption">
            <p class="title"
               @click="learn_detail(item)">{{item.title}}</p>
            <p class="date">{{item.date}}</p>
            <!-- <p class="detail">{{item.detail}}</p> -->
            <a class="learn_detail"
               @click="learn_detail(item)">了解详情</a>
          </div>
        </div>
      </div>
    </div>
    <nav aria-label="Page navigation"
         class="nav">
      <ul class="pagination">
        <li>
          <a aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li>
          <a :class="num==='one'?'active':''"
             href="#mao"
             @click="tab('one')">1</a>
        </li>
        <li>
          <a aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
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
import 'lib-flexible'
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
  name: 'news',
  data () {
    return {
      num: 'one',
      examples: [],
      examples1: [
        { title: '国家副主席王岐山关注公司产品', img: require('../../images/l1/l1.jpg'), id: 0, date: '2019-03-08', detail: '' },
        { title: '全国人大常委会原副委员长、中华全', img: require('../../images/l1/l2.jpg'), id: 1, date: '2019-02-01', detail: '' },
        { title: '全国人大常委会原副委员长路甬祥参观公', img: require('../../images/l1/l3.jpg'), id: 2, date: '2019-01-01', detail: '' },
        { title: '农业农村部部长韩长赋参观公司产品', img: require('../../images/l1/l4.jpg'), id: 3, date: '2018-10-08', detail: '' },
        { title: '山东省省长龚正检查指导公司户厕改造工', img: require('../../images/l1/l5.jpg'), id: 4, date: '2018-07-03', detail: '' },
        { title: '原国家知识产权局长田力普来公司考察', img: require('../../images/l1/l6.jpg'), id: 5, date: '2018-02-19', detail: '' },
        { title: '河南省委常委、统战部部长孙守刚指导公', img: require('../../images/l1/l7.jpg'), id: 6, date: '2018-02-08', detail: '' },
        { title: '住房和城乡建设部总经济师赵晖参观公司', img: require('../../images/l1/l8.jpg'), id: 7, date: '2017-12-01', detail: '' },
        { title: '住房和城乡建设部总经济师赵晖参观公司', img: require('../../images/l1/l9.jpg'), id: 8, date: '2017-05-08', detail: '' }
      ]
    }
  },
  components: {
    CommonHead,
    CommonFoot
  },
  created () {
    this.examples = this.examples1
  },
  methods: {
    learn_detail (news) {
      location.href = '/#/newsDetail?id' + news.id
      localStorage.setItem('news', JSON.stringify(news))
    },
    showimage (source) {
      $("#ShowImage_Form").find("#img_show").html("<img src='" + source + "' class='carousel-inner img-responsive img-rounded' />");
      $("#ShowImage_Form").modal();
    },
    close () {
      $("#ShowImage_Form").modal('hide');
    },
    tab (num) {
      this.num = num
      if (num === 'one') {
        this.examples = this.examples1
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.modal-header {
  border-bottom: none !important;
}
@media (max-width: 760px) {
  .news .container {
    padding: 146px 0 146px 20px !important;
  }
  .row.examples .col-xs-4 {
    width: 33% !important;
    padding-left: 10px !important;
    padding-right: 10px !important;
  }
  .row {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }
  .row.examples {
    padding: 38px 30px !important; /*no*/
    .thumbnail {
      padding: 38px 20px !important;
      img {
        height: 194px !important; /*no*/
      }
      .caption {
        .title {
          font-size: 32px !important;
        }
        .date {
          font-size: 22px !important;
        }
        .learn_detail {
          font-size: 22px !important;
        }
      }
    }
    > div.col-sm {
      padding-left: 0 !important;
      padding-right: 0 !important;
    }
  }
  .news .pagination > li > a {
    font-size: 14px !important; /*no*/
  }
}
.news {
  .container_banner {
    background: url('../../images/leader_banner.png') no-repeat center center;
    background-size: cover;
  }
  .col-sm {
    border-bottom: 1px solid #ebebeb;
    padding-top: 4.6vw;
  }
  .pagination > li > a,
  .pagination > li > span {
    color: #000;
    font-size: 18px;
  }
  .active {
    color: #1aa8aa !important;
  }
  .nav {
    text-align: center;
  }
  .pagination {
    a {
      border: none;
    }
  }
  // .row {
  //   margin-right: 0;
  // }
  .row.examples {
    padding: 2% 2%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    h4 {
      font-size: 40px;
      text-align: center;
      margin-bottom: 20px;
      font-family: PingFangSC-Regular;
    }
    .thumbnail {
      position: relative;
      border: none;
      // margin-bottom: 10px;
    }
    .thumbnail a > img,
    .thumbnail > img {
      margin: 0;
      width: 100%;
      height: 18vw;
      cursor: pointer;
      &:hover {
        opacity: 0.8;
      }
    }
    .caption {
      padding: 0;
      display: inline;
      // margin-top: 2.8vw;
      .title {
        font-size: 18px;
        color: #3e403f;
        font-family: PingFangSC-Regular;
        margin: 28px 0 18px;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        cursor: pointer;
        &:hover {
          color: #1aa8aa;
        }
      }
      .date {
        font-size: 12px;
        font-family: PingFangSC-Light;
        margin-bottom: 12px;
      }
      .detail {
        font-size: 14px;
        color: #3e403f;
        font-family: PingFangSC-Light;
        margin: 0 0 16px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
      }
      .learn_detail {
        font-size: 12px;
        color: #7a7e7c;
        font-family: PingFangSC-Light;
      }
    }
    @media (min-width: 1441px) {
      .col-sm-4,
      .col-lg-4,
      .col-md-4,
      .col-xs-4 {
        width: 460px; /* no */
        padding: 60px 47.5px; /* no */
      }
      .thumbnail {
        margin-bottom: 0; /* no */
      }
      .thumbnail > img {
        margin: 0; /* no */
        width: 380px; /* no */
        height: 246px; /* no */
      }
    }
  }
  // @media (min-width: 1440px) {
  //   .row.examples {
  //     padding: 0 50px; /* no */
  //   }
  // }
  // @media (min-width: 1300px) {
  //   .row.examples {
  //     padding: 60px 150px 11% !important; /* no */
  //   }
  // }
  // @media (min-width: 2560px) {
  //   .row.examples {
  //     padding: 60px 500px 11% !important; /* no */
  //   }
  // }
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
      padding: 60px 400px 11% !important; /* no */
    }
  }
  .navbar {
    margin-bottom: 0;
  }
  .navbar-default {
    border: none;
  }
  .container {
    margin: 0;
    width: 100%;
    padding: 146px 0 146px 56px;
    // background: #1aa8aa;
    h4 {
      line-height: 54px;
      color: #f8faf9;
      font-family: PingFangSC-Regular;
      font-size: 40px;
    }
  }
}
@media (min-width: 768px) and (max-width: 1024px) {
  .caption {
    .title {
      font-size: 20px !important; /*no*/
    }
    .date {
      font-size: 16px !important; /*no*/
    }
    .learn_detail {
      font-size: 16px !important; /*no*/
    }
  }
  .news .pagination > li > a,
  .news .pagination > li > span {
    font-size: 16px !important; /*no*/
  }
}
</style>