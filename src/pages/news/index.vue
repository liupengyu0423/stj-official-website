<template>
  <div class="news">
    <CommonHead />
    <div class="container container_banner">
      <div class="row">
        <div class="col-lg-3 col-md-4 col-sm-8 col-xs-12">
          <h4>新闻中心
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
          <div class="caption caption2">
            <p class="title"
               @click="learn_detail(item)">{{item.title}}</p>
            <p class="date">{{item.date}}</p>
            <p class="detail">{{item.detail}}</p>
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
          <a href="#mao"
             :class="num==='one'?'active':''"
             @click="tab('one')">1</a>
        </li>
        <li>
          <a href="#mao"
             :class="num==='two'?'active':''"
             @click="tab('two')">2</a>
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
        { title: '四川省农业厅副厅长杨波参观公司产品', img: require('../../images/n2/n1.jpg'), id: 0, date: '2019-03-08', detail: '3月8日，四川省农业厅副厅长杨波及各地市负责农村改厕的领导、专家在德阳市罗江区领导的陪同下参观公司安装在罗江区金山镇大井村的农村户厕一体化生物处理设备，公司讲解员向与会的领导、专家详细介绍了产品的工艺和性能。杨厅长对公司的产品提出了好评并希望这种产品能为四川省农村环境治理作出贡献，与会的领导、专家也对生态洁的一体化生物处理设备称赞不已。' },
        { title: '住建部总工程师陈宜明参观公司产品', img: require('../../images/n2/n2.jpg'), id: 1, date: '2018-10-13', detail: '2018年10月13日，住建部总工程师陈宜明到第七届中国国际住宅产业暨建筑工业化产品与设备博览会生态洁公司展位参观。在公司展品旁，他详细了解了农村户厕一体化生物处理设备的工艺、运行、维护等情况，对农村改厕和一体化生物处理模式大加赞赏，希望生态洁公司再接再厉。继续为全国农村“厕所革命”做出更大的贡献。' },
        { title: '农业农村部部长韩长赋参观公司产品', img: require('../../images/n2/n3.jpg'), id: 2, date: '2018-11-08', detail: '交流会期间，农业农村部部长韩长赋到公司展位参观了公司产品并进行了指导。韩部长对生态洁公司的农村户厕一体化生物处理设备给予了充分肯定，赞扬公司产品将农村改厕和污水处理结合在一起，一步到位，是一种真正意义上的“厕所革命”好产品。' },
        { title: '青岛市即墨区住建局领导来生态洁参观考察', img: require('../../images/n2/n4.jpg'), id: 3, date: '2018-12-10', detail: '公司参观考察。陈天桥一行对生态洁公司的实力及专业水平给予高度评价，对农村户厕一体化生物处理设备避免了传统改厕模式中后期粪便的抽取以及二次处理问题尤为赞赏。认为这种产品很值得推广。' },
        { title: '山东省莱芜市莱城区领导观摩生态洁产品', img: require('../../images/n2/n5.jpg'), id: 4, date: '2018-06-19', detail: '2018年6月19日，莱芜市莱城区委书记马宝岭，区长秦蕾带领区五大班子以及区直部门及各乡镇领导观摩公司安装在口镇的农村户厕一体化生物处理设备。在口镇林家庄和栖龙湾村安装现场。马书记及各位领导详细询问了设备运行情况，并提出了指导意见。希望生态洁继续努力，为莱芜的农村厕改和污水治理工作作出持续贡献。' },
        { title: '山东省临沂市费县住建局领导参观考察生态洁', img: require('../../images/n2/n6.jpg'), id: 5, date: '2018-06-14', detail: '2018年6月14日，山东省临沂市费县住建局陈士文局长、王淑涛副局长等四人莅临生态洁公司考察指导。考察期间，公司领导向陈局长一行介绍了生态洁农村户厕一体化生物处理设备的研发安装使用情况，并到设备安装现场进行了观摩。陈局长一行对生态洁公司的产品表示出浓厚的兴趣，对生态洁的整体实力表示了高度的赞赏和肯定。称赞生态洁为推进厕所革命，助力乡村振兴作出了贡献。' },
        { title: '四川省农业厅副厅长杨波参观公司产品', img: require('../../images/n2/n7.jpg'), id: 6, date: '2019-03-08', detail: '四川省农业厅副厅长杨波及各地市负责农村改厕的领导、专家在德阳市罗江区领导的陪同下参观公司安装在罗江区金山镇…' },
        { title: '2018年元旦惊喜贺词！！', img: require('../../images/n2/n8.jpg'), id: 7, date: '2018-01-01', detail: '紫气东来，万象更新。值此2018年元旦来临之际，我们怀着感恩的心情，向所有帮助过我们的领导和朋友致以亲切的问候和诚挚的谢意!元旦将至，再次感谢领导和朋友们对生态洁公司的支持与厚爱！恭祝您们在新的一年大展宏图、阖家幸福、身体健康、平安如意!' },
        { title: '央视采访山东省莱芜市市长梅建华谈户厕改造', img: require('../../images/n2/n9.jpg'), id: 8, date: '2018-02-01', detail: '近日全国人大代表、山东省莱芜市市长梅建华在接受央视网采访时表示：厕所改造关系千千万万个家庭既是一件好事同时也是一件难事需要继续努力推进厕所革命' }
      ],
      examples2: [
        { title: '甘肃省瓜州县领导参观公司产品', img: require('../../images/n2/n10.jpg'), id: 1, date: '2010-10-12', detail: '2010年10月12日，山东省委书记姜异康率全省转方式调结构现场观摩团来莱芜市观摩考察。在视察高新技术产业展区时，姜书记对我公司展示于展区内的产品大加赞扬，连称“不简单”。高新技术产业展区汇集了莱芜市内多家高新技术企业的最新高新技术成果，我公司研发生产的生活污水生物集成处理设备位列其内。走到公司产品示范模型前时，姜书记停住了脚步。公司技术人员详细介绍了产品研发、生产和推广情况。在听取介绍时，姜书记频频点头，表示赞许。' },
        { title: '山东省环保厅谢峰副厅长来公司检查指导工作', img: require('../../images/n2/n11.jpg'), id: 2, date: '2013-03-06', detail: '2013年3月6日，山东省环保厅副厅长谢峰一行在莱芜市环保局长毕占明陪同下来公司检查指导工作。谢峰副厅长一行先后观看了公司发展宣传片，参观了公司产品，并实地参观了生态厕所和污水处理设备运行情况。谢峰对我公司在环保工作方面所做的工作给予充分肯定，并对下一步的发展提出了指导性意见。他表示，省环保厅将按照省委、省政府发展全省环保产业基地的指示精神，积极支持并高度关注生态洁的发展。' },
        { title: '参加山东省第七届消费者满意单位表彰大会', img: require('../../images/n2/n12.jpg'), id: 3, date: '2008-11-04', detail: '2008年11月4日，由省消协、省文明办、省纠风办、省整规办、省经贸委、省中小企业办、省工商局、省质监局、省药监局、省卫生厅、省物价局、省总工会、省通信管理局等13个单位共同组织的山东省第七届消费者满意单位表彰大会在济南隆重召开，生态洁公司作为2008年山东省第七届消费者满意单位参加了表彰会。获奖后，公司领导表示，获得消费者满意单位既是企业的荣誉，同时对企业来说将是更大责任。生态洁将一如既往的牢固树立“一切为了消费者”的原则，想消费者所想，急消费者所急，切实达到消费者满意，树立和维护好良好的企业形象。' },
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
      } else {
        this.examples = this.examples2
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
  .row.examples .col-xs-4 {
    width: 31% !important;
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
        .detail {
          font-size: 14px !important; /*no*/
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
    background: url('../../images/news_banner.png') no-repeat center center;
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
  .row {
    margin-right: 0;
    margin-left: 0;
  }
  .row.examples {
    // padding: 2% 2%;
    // display: flex;
    // flex-wrap: wrap;
    // align-items: center;
    // justify-content: center;
    // display: inline-block;
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
    .caption.caption2 {
      padding: 0;
      display: inline;
      // margin-top: 2.8vw;
      .title {
        font-size: 18px;
        color: #3e403f;
        font-family: PingFangSC-Regular;
        margin: 10px 0;
        margin: 28px 0 8px;
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
        margin-bottom: 8px;
        color: #7a7e7c;
        font-family: PingFangSC-Light;
        margin-bottom: 12px;
      }
      .detail {
        font-size: 14px;
        color: #3e403f;
        font-family: PingFangSC-Light;
        margin: 0 0 16px;
        display: -webkit-box;
        /* ! autoprefixer: off */
        -webkit-box-orient: vertical;
        /* autoprefixer: on */
        -webkit-line-clamp: 2;
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
  @media (min-width: 1440px) {
    .row.examples {
      width: 1380px; /* no */
      margin: 0 auto;
    }
  }
  // @media (min-width: 1300px) {
  //   .row.examples {
  //     padding: 60px 25px 11% !important; /* no */
  //   }
  // }
  // @media (min-width: 1400px) {
  //   .row.examples {
  //     padding: 60px 40px 11% !important; /* no */
  //   }
  // }
  // @media (min-width: 1600px) {
  //   .row.examples {
  //     padding: 60px 100px 11% !important; /* no */
  //   }
  // }
  // @media (min-width: 1800px) {
  //   .row.examples {
  //     padding: 60px 200px 11% !important; /* no */
  //   }
  // }
  // @media (min-width: 2100px) {
  //   .row.examples {
  //     padding: 60px 300px 11% !important; /* no */
  //   }
  // }
  // @media (min-width: 2500px) {
  //   .row.examples {
  //     padding: 60px 400px 11% !important; /* no */
  //   }
  // }
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
    .detail {
      font-size: 16px !important; /*no*/
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
  .news .row.examples {
    padding-left: 0;
    padding-right: 0;
    display: initial !important;
  }
}
</style>