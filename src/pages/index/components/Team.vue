<template>
  <div class="team">
    <div class="blossom">
      <div class="blossom-title">A Blossom Ecosystem</div>
      <div class="blossom-desc">Three DApps with over <span class="amount">50,000,000</span> users will be immediately available on TOP</div>
      <ul class="blossom-list">
        <li>
          <img src="@/assets/images/Dingtone.png">
          <div class="image-info">
            <p class="image-title">Dingtone</p>
            <p class="circle"></p>
            <p class="image-desc">Decentralized Messaging App</p>
          </div>
        </li>
        <li>
          <img src="@/assets/images/SkyVPN.png">
          <div class="image-info">
            <p class="image-title">SkyVPN</p>
            <p class="circle"></p>
            <p class="image-desc">Decentralized VPN Service</p>
          </div>
        </li>
        <li>
          <img src="@/assets/images/CoverMe.png">
          <div class="image-info">
            <p class="image-title">CoverMe</p>
            <p class="circle"></p>
            <p class="image-desc">Secure Messaging App</p>
          </div>
        </li>
      </ul>
      <div class="line"></div>
    </div>
    <div class="teampeople">
      <div class="team-title">Team</div>
      <ul class="team-leader-list">
        <li>
          <img src="@/assets/images/Steve.png">
          <div class="leader-info">
            <div class="leader-name">Steve Wei</div>
            <div class="leader-job">CEO</div>
            <div>WebEx Fellow &amp; Founding Employee</div>
            <div>Co-founder of Cenwave, Acquired by Huawei</div>
            <div>Co-founder of Dingtone</div>
          </div>
        </li>
        <li>
          <img src="@/assets/images/Noah.png">
          <div class="leader-info">
            <div class="leader-name">Noah Wang</div>
            <div class="leader-job">CMO</div>
            <div>Managerial Positions at Starr, ICBC and PwC</div>
            <div>Yale MBA</div>
            <div>Member of Mensa International</div>
          </div>
        </li>
        <li>
          <img src="@/assets/images/Kelven.png">
          <div class="leader-info">
            <div class="leader-name">Kelven Yang</div>
            <div class="leader-job">Chief Architect</div>
            <div>WebEx Chief Architect &amp; Founding Employee</div>
            <div>Founding Employee of cloud.com</div>
            <div>Co-founder of Dingtone</div>
          </div>
        </li>
        <li>
          <img src="@/assets/images/Peter.png">
          <div class="leader-info">
            <div class="leader-name">Peter Wei</div>
            <div class="leader-job">VP of Engineering</div>
            <div>Founding Employee of WebEx</div>
            <div>Formal R&amp;D Director of Fortinet</div>
            <div>Formal Technology Architect in TrendMicro</div>
          </div>
        </li>
        <li>
          <img src="@/assets/images/Taylor.png">
          <div class="leader-info">
            <div class="leader-name">Taylor Wei</div>
            <div class="leader-job">VP of Platform</div>
            <div>Cryptography Expert</div>
            <div>Expert in Secure Communication</div>
            <div>Co-founder of Dingtone</div>
          </div>
        </li>
      </ul>
      <div class="team-other">
        <swiper class="swiper" :options="swiperOption" ref="mySwiper">
          <swiper-slide  v-for="itempeople in list " :key="itempeople.name">
            <ul class="other-list">
              <li class="other-item" v-for="item in itempeople" :key="item.name">
                <img :src="item.avatar" class="other-image">
                <div class="other-name">{{item.name}}</div>
                <div class="other-job">{{item.job}}</div>
              </li>
            </ul>
          </swiper-slide>
          <div class="swiper-pagination"  slot="pagination"></div>
          <!-- <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div> -->
        </swiper>
      </div>
      <div class="line"></div>
      <div class="Advisors-title">Advisors</div>
      <ul class="team-leader-list team-advisors-list">
        <li>
          <img src="@/assets/images/Eric.png">
          <div class="leader-info advisors-info">
            <div class="leader-name">Eric Yuan</div>
            <div>Founder &amp; CEO of Zoom </div>
            <div>Video Communications</div>
          </div>
        </li>
        <li>
          <img src="@/assets/images/Mark.png">
          <div class="leader-info advisors-info">
            <div class="leader-name">Mark Greene</div>
            <div>Former CEO of FICO</div>
          </div>
        </li>
        <li>
          <img src="@/assets/images/Roger.png">
          <div class="leader-info advisors-info">
            <div class="leader-name">Roger Lim</div>
            <div>Founding Partner of NGC</div>
          </div>
        </li>
        <li class="endmarbottom">
          <img src="@/assets/images/Kevin.png">
          <div class="leader-info advisors-info">
            <div class="leader-name">Kevin Hsu</div>
            <div>Founder of BlockVC</div>
          </div>
        </li>
      </ul>
      <div class="line"></div>
    </div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import {swiper, swiperSlide} from 'vue-awesome-swiper'
export default {
  name: 'Team',
  data () {
    return {
      swiperOption: {
        direction: 'horizontal',
        mousewheel: false,
        slidesPerView: 1,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '.swiper-pagination'
        }
      },
      list: [
        [
          {avatar: require('@/assets/images/otherTeam/1.png'), name: 'Tiger Liu', job: 'VP of Communication Technology'},
          {avatar: require('@/assets/images/otherTeam/2.png'), name: 'Edward Lu', job: 'Director of Security Technology'},
          {avatar: require('@/assets/images/otherTeam/3.png'), name: 'Kun Sun', job: 'Director of Infrastructure'}

        ],
        [
          {avatar: require('@/assets/images/otherTeam/4.png'), name: 'Teresa Gao', job: 'Director of Marketing'},
          {avatar: require('@/assets/images/otherTeam/5.png'), name: 'Kelly Gu', job: 'Director of QA'},
          {avatar: require('@/assets/images/otherTeam/6.png'), name: 'Ivan Ai', job: 'Senior Developer'}
        ],
        [
          {avatar: require('@/assets/images/otherTeam/7.png'), name: 'Kael Ai', job: 'Senior Developer'},
          {avatar: require('@/assets/images/otherTeam/8.png'), name: 'Banning Cai', job: 'Senior Developer'},
          {avatar: require('@/assets/images/otherTeam/9.png'), name: 'Jarvis Cai', job: 'Senior Developer'}
        ],
        [
          {avatar: require('@/assets/images/otherTeam/10.png'), name: 'Liang Chen', job: 'Senior Test Engineer'},
          {avatar: require('@/assets/images/otherTeam/11.png'), name: 'Bowen Deng', job: 'Senior Developer'},
          {avatar: require('@/assets/images/otherTeam/12.png'), name: 'Joy Deng', job: 'Senior Developer'}
        ],
        [
          {avatar: require('@/assets/images/otherTeam/13.png'), name: 'Anchorer Du', job: 'Senior Developer'},
          {avatar: require('@/assets/images/otherTeam/14.png'), name: 'Dexter Duan', job: 'Senior Product Manager'},
          {avatar: require('@/assets/images/otherTeam/15.png'), name: 'Jenny Fang', job: 'Community Manager'}
        ],
        [
          {avatar: require('@/assets/images/otherTeam/16.png'), name: 'Shawn Hao', job: 'Senior Developer'},
          {avatar: require('@/assets/images/otherTeam/17.png'), name: 'Andy Hong', job: 'Senior Developer'},
          {avatar: require('@/assets/images/otherTeam/18.png'), name: 'Nick Huang', job: 'Senior Product Manager'}
        ],
        [
          {avatar: require('@/assets/images/otherTeam/19.png'), name: 'Martin Li', job: 'Senior Test Engineer'},
          {avatar: require('@/assets/images/otherTeam/20.png'), name: 'Waiting Li', job: 'Community Manager'},
          {avatar: require('@/assets/images/otherTeam/21.png'), name: 'Ashton Liu', job: 'Senior Test Engineer'}
        ],
        [
          {avatar: require('@/assets/images/otherTeam/22.png'), name: 'Doris Liu', job: 'Senior Product Designer'},
          {avatar: require('@/assets/images/otherTeam/23.png'), name: 'Lynch Lu', job: 'Senior Developer'},
          {avatar: require('@/assets/images/otherTeam/24.png'), name: 'Johnny Lv', job: 'Senior Developer'}
        ],
        [
          {avatar: require('@/assets/images/otherTeam/25.png'), name: 'Locke Meng', job: 'Senior Product Manager'},
          {avatar: require('@/assets/images/otherTeam/26.png'), name: 'Albert Pan', job: 'Senior Developer'},
          {avatar: require('@/assets/images/otherTeam/27.png'), name: 'Destiny Si', job: 'Senior Test Engineer'}
        ],
        [
          {avatar: require('@/assets/images/otherTeam/28.png'), name: 'Jasper Sun', job: 'Community Manager'},
          {avatar: require('@/assets/images/otherTeam/29.png'), name: 'Asher Wang', job: 'Senior Developer'},
          {avatar: require('@/assets/images/otherTeam/30.png'), name: 'Kenny Wang', job: 'Senior Developer'}
        ],
        [
          {avatar: require('@/assets/images/otherTeam/31.png'), name: 'Cara Wang', job: 'Senior Test Engineer'},
          {avatar: require('@/assets/images/otherTeam/32.png'), name: 'Anita Weng', job: 'Senior Product Designer'},
          {avatar: require('@/assets/images/otherTeam/33.png'), name: 'Franco Wu', job: 'Senior Developer'}
        ],
        [
          {avatar: require('@/assets/images/otherTeam/34.png'), name: 'Nova Wu', job: 'Community Manager'},
          {avatar: require('@/assets/images/otherTeam/35.png'), name: 'Shane Wu', job: 'Community Manager'},
          {avatar: require('@/assets/images/otherTeam/36.png'), name: 'Tom Wu', job: 'Senior Developer'}
        ],
        [
          {avatar: require('@/assets/images/otherTeam/37.png'), name: 'Bright Wu', job: 'Senior Developer'},
          {avatar: require('@/assets/images/otherTeam/38.png'), name: 'Bear Xiong', job: 'Senior Developer'},
          {avatar: require('@/assets/images/otherTeam/39.png'), name: 'Bill Yang', job: 'Senior Developer'}
        ],
        [
          {avatar: require('@/assets/images/otherTeam/40.png'), name: 'Journey Yu', job: 'Senior Developer'},
          {avatar: require('@/assets/images/otherTeam/41.png'), name: 'Aries Zhang', job: 'Senior Test Engineer'},
          {avatar: require('@/assets/images/otherTeam/42.png'), name: 'Justin Zhang', job: 'Senior Developer'}
        ],
        [
          {avatar: require('@/assets/images/otherTeam/43.png'), name: 'Kris Zhang', job: 'Senior Product Designer'},
          {avatar: require('@/assets/images/otherTeam/44.png'), name: 'Faker Zhao', job: 'Senior Developer'},
          {avatar: require('@/assets/images/otherTeam/45.png'), name: 'Sky Zhao', job: 'Senior Operation Engineer'}
        ],
        [
          {avatar: require('@/assets/images/otherTeam/46.png'), name: 'Tiny Zhao', job: 'Senior Developer'},
          {avatar: require('@/assets/images/otherTeam/47.png'), name: 'Harry Zhong', job: 'Senior Product Designer'},
          {avatar: require('@/assets/images/otherTeam/48.png'), name: 'Velen Zhou', job: 'Senior Developer'}
        ],
        [
          {avatar: require('@/assets/images/otherTeam/49.png'), name: 'Tim Zhou', job: 'Senior Developer'},
          {avatar: require('@/assets/images/otherTeam/50.png'), name: 'Morgan Li', job: 'Senior Developer'},
          {avatar: require('@/assets/images/otherTeam/51.png'), name: 'Dacheng Sheng', job: 'Senior Product Manager'}
        ],
        [
          {avatar: require('@/assets/images/otherTeam/52.png'), name: 'Feng Wang', job: 'Senior Developer'},
          {avatar: require('@/assets/images/otherTeam/53.png'), name: 'Lauren Feng', job: 'Social Media Marketing'},
          {avatar: require('@/assets/images/otherTeam/Roc liu@2x.png'), name: 'Roc Liu', job: 'Senior Product Manager'}
        ],
        [
          {avatar: require('@/assets/images/otherTeam/Angelina huang@2x.png'), name: 'Angelina Huang', job: 'Senior Test Engineer'},
          {avatar: require('@/assets/images/otherTeam/Caroline zuo@2x.png'), name: 'Caroline Zuo', job: 'Senior Test Engineer'},
          {avatar: require('@/assets/images/otherTeam/Neville Chen@2x.png'), name: 'Neville Chen', job: 'Senior Test Engineer'}
        ],
        [
          {avatar: require('@/assets/images/otherTeam/Hallie Wei@2x.png'), name: 'Hallie Wei', job: 'Senior Test Engineer'},
          {avatar: require('@/assets/images/otherTeam/Spring yan@2x.png'), name: 'Spring Yan', job: 'Test Engineer'},
          {avatar: require('@/assets/images/otherTeam/Ariel.jin@2x.png'), name: 'Ariel Jin', job: 'Test Engineer'}
        ],
        [
          {avatar: require('@/assets/images/otherTeam/Tory xu@2x.png'), name: 'Tory Xu', job: 'Senior iOS Develope'},
          {avatar: require('@/assets/images/otherTeam/Seal.wu@2x.png'), name: 'Seal Wu', job: 'Senior Android Developer'},
          {avatar: require('@/assets/images/otherTeam/Section wang@2x.png'), name: 'Section Wang', job: 'Senior iOS Developer'}
        ],
        [
          {avatar: require('@/assets/images/otherTeam/Bruce liu@2x.png'), name: 'Bruce Liu', job: 'Senior Web Developer'},
          {avatar: require('@/assets/images/otherTeam/Esther Zong@2x.png'), name: 'Esther Zong', job: 'Community Manager'},
          {avatar: require('@/assets/images/otherTeam/Ernest wang@2x.png'), name: 'Ernest Wang', job: 'Senior C++ Developer'}
        ],
        [
          {avatar: require('@/assets/images/otherTeam/Jimmy xu@2x.png'), name: 'Jimmy Xu', job: 'Senior C++ Developer'},
          {avatar: require('@/assets/images/otherTeam/Hank Chen@2x.png'), name: 'Hank Chen', job: 'Senior C++ Developer'},
          {avatar: require('@/assets/images/otherTeam/Wing Liu@2x.png'), name: 'Wing Liu', job: 'Test Engineer'}
        ]
      ]
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style lang="scss" scoped>
  .team{
    background-color: #041126;
    .blossom{
      padding: 1.4rem 0 0 0;
      width: 100%;
      margin: 0 auto;
      .blossom-title{
        width:100%;
        font-size:0.8rem;
        font-family:Cera Pro;
        font-weight:400;
        line-height:0.84rem;
        color:rgba(255,255,255,1);
        text-align: center;
      }
      .blossom-desc{
        width:7.84rem;
        font-size:0.48rem;
        font-family:Cera Pro;
        font-weight:400;
        line-height:0.67rem;
        color:rgba(255,255,255,1);
        margin:1rem auto 1rem auto;
        .amount{
          color:#CF9A1F;
          font-weight: bold;
        }
      }
      .blossom-list{
        width:58%;
        margin:0 auto;
        li{
          width: 100%;
          margin-bottom: 1rem;
          overflow: hidden;
          img{
            float: left;
            width:1.83rem;
            height:1.83rem;
            display: block;
            margin-right:1rem;
          }
          .image-info{
            float:left;
            overflow: hidden;
            width:2.9rem;
            .image-title{
              width:2.25rem;
              font-size:0.53rem;
              font-family:Cera Pro;
              font-weight:300;
              color:rgba(119,187,211,1);
              margin:0 auto;
              margin-bottom: .2rem;
            }
            .circle{
              width:0.08rem;
              height:0.08rem;
              background:rgba(119,187,211,1);
              border-radius:50%;
              margin:0 auto;
              display: block;
            }
            .image-desc{
              width:2.6rem;
              font-size:0.35rem;
              font-family:Cera Pro;
              font-weight:400;
              line-height:0.37rem;
              color:rgba(255,255,255,1);
              margin:0 auto;
              margin-top:0.3rem;
              height: 0.75rem;
            }
          }
        }
      }
      .line{
        width:8.65rem;
        height:0.03rem;
        background:linear-gradient(117deg,rgba(119,187,211,0) 0%,rgba(119,187,211,1) 49%,rgba(119,187,211,0) 100%);
        margin:1.4rem auto 0 auto;
      }
    }
    .teampeople{
      padding: 1.4rem 0 0 0;
      width: 100%;
      margin: 0 auto;
    }
    .team-title{
      width:100%;
      font-size:0.8rem;
      font-family:Cera Pro;
      font-weight:400;
      color:rgba(255,255,255,1);
      text-align: center;
    }
    .team-leader-list{
      width:78%;
      margin: 1.6rem auto 0 auto;
      li{
        margin-bottom: .6rem;
        overflow: hidden;
        line-height: 2.4rem;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
          width:2rem;
          height:2rem;
          // float: left;
          margin-right:0.35rem;
        }
        .leader-info{
          display: inline-block;
          width:5.41rem;
          div{
            width:5.41rem;
            font-size:0.27rem;
            font-family:Arial;
            font-weight:400;
            line-height:0.31rem;
            color:rgba(138,159,175,1);
            line-height:0.41rem;
            margin-right: 0;
            text-align: left;
            float: left;
          }
          .leader-name{
            font-size:0.35rem;
            color:rgba(255,255,255,1);
            margin-bottom: 0.2rem;
          }
          .leader-job{
            font-size:0.27rem;
            color:rgba(255,255,255,1);
            margin-bottom: 0.2rem;
          }
        }
      }
    }
    @media screen and (min-width: 386px) {
        .team-leader-list{
          width:83.5% !important;
          .leader-info{
            width:5.85rem !important;
            div{
              width:5.85rem !important;
            }
          }
        }
      }
    .team-other{
        width:100%;
        margin:0 auto;
        overflow: hidden;
        background:rgba(119,187,211,0.05);
        height: 4.73rem;
        line-height: 4.73rem;
        padding: 1rem 0 0rem 0;
        .other-list{
          width: 90%;
          overflow: hidden;
          margin-left:5%;
          display: inline-block;
          .other-item{
            width: 33.3%;
            float: left;
            margin:0 auto;
            .other-image{
              display: block;
              margin:0 auto;
              width:1.84rem;
              height:1.84rem;
              border-radius:50%;
            }
            .other-name{
              width:100%;
              height:0.32rem;
              text-align: center;
              font-size:0.29rem;
              font-family:Cera Pro;
              font-weight:400;
              line-height:0.32rem;
              color:rgba(255,255,255,1);
              text-align: center;
              margin-top:0.5rem;
            }
            .other-job{
              width: 100%;
              text-align: center;
              height:1rem;
              font-size:0.27rem;
              font-family:Arial;
              font-weight:400;
              line-height:0.31rem;
              color:rgba(138,159,175,1);
              margin:0.2rem auto 0 auto;
            }
          }
        }
      }
      .swiper-button-next{
        background-image:url('../../../assets/images/otherTeam/nextarrow.png');
        background-size:0.27rem 1.01rem;
        width:0.27rem;
        height:1.01rem;
        top:32%;
        outline: none;
      }
      .swiper-button-prev{
        background-image:url('../../../assets/images/otherTeam/prevarrow.png');
        background-size:0.27rem 1.01rem;
        width:0.27rem;
        height:1.01rem;
        top:32%;
        outline: none;
      }
      .swiper-container-horizontal > .swiper-pagination-bullets /deep/ .swiper-pagination-bullet{
        margin:0 3px;
      }
      .swiper-pagination-bullets{
        bottom:-10px;
      }
      .swiper-pagination-bullets /deep/ .swiper-pagination-bullet{
        background:#8A9FAF;
      }
     .swiper-pagination-bullets /deep/ .swiper-pagination-bullet-active{
       background: #007aff;
     }
    .line{
      width:8.65rem;
      height:0.03rem;
      background:linear-gradient(117deg,rgba(119,187,211,0) 0%,rgba(119,187,211,1) 49%,rgba(119,187,211,0) 100%);
      margin:1.4rem auto 0 auto;
    }
    .Advisors-title{
      width:100%;
      font-size:0.8rem;
      font-family:Cera Pro;
      font-weight:400;
      color:rgba(255,255,255,1);
      text-align: center;
      margin-top:1rem;
    }
    .team-advisors-list{
      width:62%;
      li{
        .advisors-info{
          width:3.57rem;
          div{
            width: 100%;
          }
        }
      }
      .endmarbottom{
        margin-bottom: 0;
      }
    }
  }
</style>
