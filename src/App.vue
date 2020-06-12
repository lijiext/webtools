<template>
  <div>
    <el-container>
      <el-main>
        <el-card shadow="hover">
          <div slot="header">
            <span>二维码生成</span>
          </div>
          <el-input
            placeholder="请输入内容"
            v-model="input"
            maxlength="300"
            show-word-limit
            style="width: 90%;"
          ></el-input>
          <el-button
            type="primary"
            style="margin-left: 10px;width: 9%"
            @click="clear"
            >清空</el-button
          >
          <div style="text-align: center">
            <vue-qrcode v-model="input" type="image/jpeg" v-if="input" />
          </div>
        </el-card>
        <el-card style="margin-top: 20px" shadow="hover">
          <div slot="header">
            <span>Base64转换</span>
          </div>
          <el-input
            rows="5"
            placeholder="明文"
            resize="none"
            type="textarea"
            v-model="plaintext"
            class="base64input"
            style="width: 46%"
          />
          <el-button
            type="plain"
            style="margin: 0 1%;height: 116px"
            @click="exchange"
            ><i class="iconfont icon-Exchange"></i
          ></el-button>
          <el-input
            placeholder="密文"
            rows="5"
            resize="none"
            type="textarea"
            class="base64input"
            v-model="encodedtext"
            style="width: 46%"
          />
        </el-card>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import VueQrcode from "vue-qrcode";
import { Base64 } from "js-base64";
export default {
  name: "App",
  components: {
    VueQrcode
  },
  data() {
    return {
      input: "",
      plaintext: "",
      encodedtext: ""
    };
  },
  methods: {
    clear() {
      if (this.input) {
        this.input = "";
      } else {
        this.$message({
          message: "请输入内容！",
          type: "error"
        });
      }
    },
    exchange() {
      if (this.plaintext) {
        this.encodedtext = Base64.encode(this.plaintext);
      } else {
        this.plaintext = Base64.decode(this.encodedtext);
      }
    }
  }
};
</script>
<style>
body {
  min-width: 1200px;
  overflow: hidden;
}
@font-face {
  font-family: "iconfont";
  src: url("//at.alicdn.com/t/font_1881653_m7pcx9w4lr.eot?t=1591953368536"); /* IE9 */
  src: url("//at.alicdn.com/t/font_1881653_m7pcx9w4lr.eot?t=1591953368536#iefix")
      format("embedded-opentype"),
    /* IE6-IE8 */
      url("data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAK8AAsAAAAABnQAAAJuAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCCcAp8gQkBNgIkAwgLBgAEIAWEbQcyG7EFyK6wKcO9SICFcw1bYPbGL+ANQBQPz9+POvf9N5kUkRitkTQ8LTDa2yCLK7IE6w2Wf//XNAU0Kq+6LKsIFfqD/APOpeRgm5N7U2p+LNw6YiaY2eQ1sKXtRjsPg3iM0kqQ0jLcq7yerFNt34SWaEKEUJgsSZg9uKZ+TRskD2hunRSVHAk4sOmAoppGtpGMfMPYBS/wOIFaPeoy29P1Dsoye1wgbh1Lg3LBLcssVi1UNizN4rUK1ek+jVfR9+OXhagmqSjYBfvnExP6XzkJxV15cxYgPAS0ugIFpoBMHDeGd+UEY+TUhvMGwLFyg6/KMjCJo+oF++vs7HrQBQXPJPREj5qdQE7aR4DpSTuR2ugKHj75M+eHSjGX1RXN8fQgeM+zigwGVyypvxvhGKj9rdWU96mC7WNbgZx0TffR/jPrAGVZfEwJBIcDr8shXP6r6zL40uVH5CzLbJiV6h1bgh8kHFiXDbFtTFkTNlqTkUljE2rVooTtrf6majruJh6qddyTtUp3BoVqQ2gmTUGFOktQqdoa1Jo0W12nDcuJXIMJLwBCszdIGn2GQrN3NJN+oUKnf6jUHAXUOo22LeuMxFV1i0kTMlGf0UmjULlmqca5G7KOvsZ5ccQ8EKeODztSl2MzComXmJEOVlc6haqJApyC08j3I4ybyCVDmnYnca+liqY3NY0ygKotjGgEMSHdFXIYIiEVtBbVyuc3iOXIp+GOojrvAWEpp3PU0dQegM4U4aCiR3kldWLpEkJBCosE0BQMIj5fBMXNg1zEIJrsCcFYT8tppoYqmturgh/IZ2XY2hRO/0L1zsWwtdAiAAAAAA==")
      format("woff2"),
    url("//at.alicdn.com/t/font_1881653_m7pcx9w4lr.woff?t=1591953368536")
      format("woff"),
    url("//at.alicdn.com/t/font_1881653_m7pcx9w4lr.ttf?t=1591953368536")
      format("truetype"),
    /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
      url("//at.alicdn.com/t/font_1881653_m7pcx9w4lr.svg?t=1591953368536#iconfont")
      format("svg"); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-Exchange:before {
  content: "\e625";
}

textarea {
  font-family: "微软雅黑", Arial, sans-serif;
}
</style>
