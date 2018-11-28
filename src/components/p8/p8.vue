<template>
  <div class="p8">
    <div class="p8_team">
      <div class="title">Team Founders</div>
      <div class="team_area">
        <div class="row1">
          <div class="item">
            <span class="icon">
              <img src="./img/8_team_steve.png">
            </span>
            <div class="right_text">
              <span class="name">Steve Wei</span>
              <span class="job">CEO</span>
              <span class="info">WebEx Fellow & Founding Employee
                <br> Co-founder of Cenwave, Acquired by Huawei
                <br> Co-founder of Dingtone</span>
            </div>
          </div>
          <div class="item">
            <span class="icon">
                <img src="./img/8_team_noah.png">
            </span>
            <div class="right_text">
              <span class="name">Noah Wang</span>
              <span class="job">CMO</span>
              <span class="info">Managerial Positions at Starr, ICBC and PwC
                <br>Yale MBA
                <br>Member of Mensa International</span>
            </div>
          </div>
          <div class="item">
            <span class="icon">
              <img src="./img/8_team_yang.png">
            </span>
            <div class="right_text">
              <span class="name">Kelven Yang</span>
              <span class="job">Chief Architect</span>
              <span class="info">WebEx Chief Architect & Founding Employee
                <br> Founding Employee of cloud.com
                <br> Co-founder of Dingtone</span>
            </div>
          </div>
          <div class="item">
            <span class="icon">
              <img src="./img/8_team_peter.png">
            </span>
            <div class="right_text">
              <span class="name">Peter Wei</span>
              <span class="job">VP of Engineering</span>
              <span class="info">Founding Employee of WebEx
                <br> Formal R&D Director of Fortinet
                <br> Formal Technology Architect in TrendMicro</span>
            </div>
          </div>
          <div class="item">
            <span class="icon">
              <img src="./img/8_team_taylor.png">
            </span>
            <div class="right_text">
              <span class="name">Taylor Wei</span>
              <span class="job">VP of Platform</span>
              <span class="info">Cryptography Expert
                <br> Expert in Secure Communication
                <br> Co-founder of Dingtone</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="p8_investor_team">
      <div class="title">Investors</div>
          <div class="investor_area">
              <div class="item pic1"></div>
              <div class="item pic2"></div>
              <div class="item pic3"></div>
              <div class="item pic4"></div>
              <div class="item pic5"></div>
              <div class="item pic6"></div>
              <div class="item pic7"></div>
              <div class="item pic8"></div>
              <div class="item pic9"></div>
              <div class="item pic10"></div>
              <div class="item pic11"></div>
              <div class="item pic12"></div>
              <div class="item pic13"></div>
              <div class="item pic14"></div>
              <div class="item pic15"></div>
              <div class="item pic16"></div>
          </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  components: {

  }
}

</script>

<style lang='scss' rel='stylesheet/scss' scoped>
@mixin bg-image($url) {
    background-image: url("img2/" + $url + "@2x.png");
    @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
      background-image: url("img2/" + $url + "@3x.png");
    }
  }
  .p8 {
    height: 210%;
    width: 100%;
    background-image: url(img/8_bg.jpg);
    background-color: #0e1457;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    .p8_team {
      // height: auto;
      height: 50%;
      width: 100%;
      overflow: auto;
      .title {
        width: 100%;
        height: 2rem;
        text-align: center;
        color: #fff;
        font-size: 2rem;
        margin: 0 auto;
        font-weight: 600;
        position: absolute;
        top: 6%;
        left: 0;
      }
      .team_area {
        width: 90%;
        position: absolute;
        top: 12%;
        left: 50%;
        margin-left: -45%;
        color: #fff;
        .icon {
          // height: 5rem;
          width: 4.3rem;
          margin: 0 auto;
          background-size: 80%;
          background-repeat: no-repeat;
          display: block;
          position: absolute;
          left: 0%;
          top: 50%;
          margin-top: -2.5rem;
          img {
            height: 100%;
            width: 100%;
            object-fit: cover;
            display: block;
          }
        }
        .right_text{
            position: absolute;
            right: 0;
            top: 50%;
            width: 75%;
            text-align: center;
            display: table-cell;
            transform: translateY(-50%);
        }
        .name {
          font-size: 1.2rem;
          text-align: left;
          display: block;
        }
        .job {
          font-size: 0.9rem;
          margin-top: 0.2rem;
          text-align: left;
          display: block;
        }
        .info {
          font-size: 0.8rem;
          margin-top: 0.2rem;
          text-align: left;
          display: block;
          color: #88d4ff;
        }
        .row1 {
          width: 100%;
          height: 100%;
          margin: 0 auto;
          height: 35rem;
          font-size: 0;
          .item {
            width: 100%;
            display: inline-block;
            vertical-align: top;
            height: 20%;
            position: relative;
          }
        }
        .row2 {
          width: 100%;
          height: 10rem;
          font-size: 0;
          margin-top: 1rem;
          .item {
            width: 33.33%;
            display: inline-block;
            vertical-align: top;
          }
        }
      }
    }
    .p8_investor_team{
        height: 50%;
        // overflow:auto;
        position: relative;
        .investors{
            width: 80%;
            margin: 0 auto;
            margin-top: 50px;

        }
        .title{
                width: 80%;
                height: 2rem;
                text-align: center;
                color: #fff;
                font-size: 2.5rem;
                position: absolute;
                top: 12%;
                left: 50%;
                margin-left: -40%;
                font-weight: 600;
            }
            .investor_area{
                width: 90%;
                height: 80%;
                font-size: 0;
                position: absolute;
                top: 25%;
                left: 5%;
                text-align: left;
                .item{
                    width: 30%;
                    height: 4.5rem;
                    display: inline-block;
                    position: relative;
                    margin-bottom: 0.5rem;
                    background-size: 100%;
                    background-repeat: no-repeat;
                    margin-left: 5%;
                    &:nth-child(3n+1){
                        margin-left: 0;
                    }
                }
                .pic1{
                    @include bg-image('1fen')
                }
                .pic2{
                    @include bg-image('2dhvc')
                }
                .pic3{
                    @include bg-image('3gen')
                }
                .pic4{
                    @include bg-image('4ld')
                }
                .pic5{
                    @include bg-image('5ngc')
                }
                .pic6{
                    @include bg-image('6root')
                }
                .pic7{
                    @include bg-image('7van')
                }
                .pic8{
                    @include bg-image('8capital')
                }
                .pic9{
                    @include bg-image('9fund')
                }
                .pic10{
                    @include bg-image('10origin')
                }
                .pic11{
                    @include bg-image('11mek')
                }
                .pic12{
                    @include bg-image('12ju')
                }
                .pic13{
                    @include bg-image('13ds')
                }
                .pic14{
                    @include bg-image('14dream')
                }
                .pic15{
                    @include bg-image('15teec')
                }
                .pic16{
                    @include bg-image('16star')
                }
            }
    }
  }

</style>
