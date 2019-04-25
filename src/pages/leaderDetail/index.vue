<template>
  <div class="detail">
    <CommonHead />
    <div class="container">
      <h4>{{data.title}}</h4>
      <p class="detail_mid">
        <span>{{data.date}}</span>
        <span>来源：生态洁</span>
      </p>
      <img :src="data.img"
           @click="showimage(data.img)"
           alt=""
           class="img-responsive center-block">
      <p class="data_detail">{{data.detail}}</p>
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
  name: 'detail',
  data () {
    return {
      data: {}
    }
  },
  created () {
    this.data = JSON.parse(localStorage.getItem('news'))
  },
  methods: {
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
.detail {
  .container {
    margin-bottom: 3em;
    h4 {
      text-align: center;
      padding: 44px 0 17px;
      font-family: PingFangSC-Regular;
      font-size: 38px;
      color: #000000;
    }
    .detail_mid {
      display: flex;
      justify-content: space-between;
      padding-bottom: 14.5px;
      border-bottom: 1px solid #f3f3f3;
      span {
        font-family: PingFangSC-Light;
        font-size: 14px;
        color: #7a7e7c;
      }
    }
    .img-responsive {
      width: 803px;
      height: 520px;
      margin-top: 53.5px;
    }
    .data_detail {
      margin: 45px 0 20px 0;
      font-family: PingFangSC-Light;
      font-size: 18px;
    }
  }
}
@media (max-width: 760px) {
  .detail .container .detail_mid span {
    font-size: 22px !important;
  }
}
@media (min-width: 768px) and (max-width: 1024px) {
  .detail .container p.detail_mid span {
    font-size: 16px !important; /*no*/
  }
}
</style>