<template>
  <div>
    <navbar/>
    <div class="policy">
      <div class="title">Frequently Asked Questions</div>
      <div class="info">
        <div class="item">
          <div class="info-title">I. Project Overview</div>
          <div class="question">
            <span class="question-title">Q1: What is TOP?</span>
            <img src="@/assets/images/faq/jiahao.png" class="slogn" @click="showone=!showone" v-show="!showone">
            <img src="@/assets/images/faq/jianhao.png" class="slogn1" @click="showone=!showone" v-show="showone">
          </div>
          <transition name="fade">
            <div class="answer" v-show="showone">
              <p>TOP Network is a decentralized open communication network that provides cloud communication services on the blockchain. TOP offers secure, low-cost services such as messaging, calling, video, VPN, CDN, IoT data sharing and more.</p>
              <p>TOP Network is also a high-performance public blockchain platform designed to handle real-world business of any size or volume. Powered by innovations including three-layer network, two-layer sharding, two-layer lattice DAG and PBFT-DPoS*, TOP can process several hundred thousand transactions per second on the blockchain.</p>
              <p>The long-term mission of TOP Network is to build a public blockchain infrastructure for all Dapps. Our world-class team of over 100 developers is striving for this goal.</p>
              <p>TOP Network originated from the common underlying network layer of Dingtone, CoverMe and SkyVPN, three communication apps built by the TOP team before the blockchain project. These apps, having attracted over 50 million users in total, will be ported to TOP Network upon the launch of TOP and generate huge volumes of transactions in the TOP ecosystem.</p>
            </div>
          </transition>
        </div>
        <div class="item">
          <div class="question">
            <span class="question-title">Q2: Why did the team want to build a public blockchain platform?</span>
            <img src="@/assets/images/faq/jiahao.png" class="slogn" @click="showtwo=!showtwo" v-show="!showtwo">
            <img src="@/assets/images/faq/jianhao.png" class="slogn1" @click="showtwo=!showtwo" v-show="showtwo">
          </div>
          <transition name="fade">
            <div class="answer" v-show="showtwo">
              <p>We didn’t intend to build a public blockchain platform, but we soon realized we had to.</p>
              <p>When we started the project last year, we had 40 million users to move onto TOP Network, which means TOP Network needs to process over one hundred thousand transactions per second when it starts to operate. We tried to find an existing public blockchain platform to serve as a ledger for TOP Network, but it turned out that no blockchain platform could reach such a high TPS. In the end, we had no choice but decided to build our own ledger – a general-purpose public blockchain platform that can handle real-world business of any size or volume.</p>
            </div>
          </transition>
        </div>
        <div class="item">
          <div class="question">
            <span class="question-title">Q3: What is the current status of TOP?</span>
            <img src="@/assets/images/faq/jiahao.png" class="slogn" @click="showthree=!showthree" v-show="!showthree">
            <img src="@/assets/images/faq/jianhao.png" class="slogn1" @click="showthree=!showthree" v-show="showthree">
          </div>
          <transition name="fade">
            <div class="answer" v-show="showthree">
              <p>TOP was founded in late 2017. We've made significant progress since we came out of stealth mode in August 2018. We’ve not only advanced in technical development, but also investment, community operations and marketing. We recently released our whitepaper, Testnet and various bounty activities. Stay tuned for more updates from TOP!</p>
            </div>
          </transition>
        </div>
        <div class="item">
          <div class="question">
            <span class="question-title">Q4: Is the whitepaper for the project available?</span>
            <img src="@/assets/images/faq/jiahao.png" class="slogn" @click="showfour=!showfour" v-show="!showfour">
            <img src="@/assets/images/faq/jianhao.png" class="slogn1" @click="showfour=!showfour" v-show="showfour">
          </div>
          <transition name="fade">
            <div class="answer" v-show="showfour">
              <p>The whitepaper for TOP Network is available! Click "Whitepaper" on our website to get access to our whitepaper.</p>
            </div>
          </transition>
        </div>
        <div class="item">
          <div class="question">
            <span class="question-title">Q5: Who have invested in your project so far?</span>
            <img src="@/assets/images/faq/jiahao.png" class="slogn" @click="showfive=!showfive" v-show="!showfive">
            <img src="@/assets/images/faq/jianhao.png" class="slogn1" @click="showfive=!showfive" v-show="showfive">
          </div>
          <transition name="fade">
            <div class="answer" v-show="showfive">
              <p>We have closed $8 million in early investment from prestigious institutional investors, including Fenbushi Capital, Danhua Capital (DHVC), NEO Global Capital, LD Capital and more.</p>
            </div>
          </transition>
        </div>
        <div class="item">
          <div class="question">
            <span class="question-title">Q6: How can I invest in TOP Network?</span>
            <img src="@/assets/images/faq/jiahao.png" class="slogn" @click="showsix=!showsix" v-show="!showsix">
            <img src="@/assets/images/faq/jianhao.png" class="slogn1" @click="showsix=!showsix" v-show="showsix">
          </div>
          <transition name="fade">
            <div class="answer" v-show="showsix">
              <p>If you're an institutional investor, you can participate in our private sale now. Email to <a href="mailto:contact@topnetwork.org">contact@topnetwork.org</a> for more details. For individual investors, please participate in our public token sale in a few weeks. KYC (Know Your Customer) will be required.</p>
            </div>
          </transition>
        </div>
        <div class="item">
          <div class="question noborder">
            <span class="question-title">Q7: Where can I get information about the team?</span>
             <img src="@/assets/images/faq/jiahao.png" class="slogn" @click="showseven=!showseven" v-show="!showseven">
            <img src="@/assets/images/faq/jianhao.png" class="slogn1" @click="showseven=!showseven" v-show="showseven">
          </div>
          <transition name="fade">
            <div class="answer paddingbtm" v-show="showseven">
              <p class="bordertop">You can find more information about Steve, CEO and co-founder of TOP Network, on <a href="https://www.linkedin.com/in/stevenwee/" target="_blank">his LinkedIn page</a>. You can find more information about our team members on our <a href="https://www.linkedin.com/company/topnetwork" target="_blank">company LinkedIn page</a>.</p>
            </div>
          </transition>
        </div>
        <div class="item linedistance">
          <div class="info-title">II. Technical Details</div>
          <div class="question">
            <span class="question-title">Q8. Does TOP Network have a MVP?</span>
           <img src="@/assets/images/faq/jiahao.png" class="slogn" @click="showeghit=!showeghit" v-show="!showeghit">
            <img src="@/assets/images/faq/jianhao.png" class="slogn1" @click="showeghit=!showeghit" v-show="showeghit">
          </div>
          <transition name="fade">
            <div class="answer paddingbtm" v-show="showeghit">
              <p>More than a MVP! We have already released our Testnet and achieved 2,000 TPS in a single shard. You can check out the performance of our private Testnet on our official website (https://www.topnetwork.org/). Also, our demo DApp—BitVPN is under development and will be ready for its release soon. Our existing VPN app, SkyVPN, has gained over 10 million users in less than 10 months since its launch. SkyVPN will be ported onto TOP Network and will bring a huge volume of business to the TOP ecosystem.</p>
              <img src="@/assets/images/faq/time.png">
            </div>
          </transition>
        </div>
        <div class="item">
          <div class="question">
            <span class="question-title">Q9. So is TOP Network about building a VPN?</span>
            <img src="@/assets/images/faq/jiahao.png" class="slogn" @click="shownine=!shownine" v-show="!shownine">
            <img src="@/assets/images/faq/jianhao.png" class="slogn1" @click="shownine=!shownine" v-show="shownine">
          </div>
          <transition name="fade">
            <div class="answer" v-show="shownine">
              <p>More than a MVP! We have already released our Testnet and achieved 2,000 TPS in a single shard. You can check out the performance of our private Testnet on <a href="https://www.topnetwork.org/">our official website</a>. Also, our demo DApp—BitVPN is under development and will be ready for its release soon. Our existing VPN app, SkyVPN, has gained over 10 million users in less than 10 months since its launch. SkyVPN will be ported onto TOP Network and will bring a huge volume of business to the TOP ecosystem.</p>
            </div>
          </transition>
        </div>
        <div class="item">
          <div class="question noborder">
            <span class="question-title">Q10. How will you move your 50 million users to TOP?</span>
            <img src="@/assets/images/faq/jiahao.png" class="slogn" @click="showten=!showten" v-show="!showten">
            <img src="@/assets/images/faq/jianhao.png" class="slogn1" @click="showten=!showten" v-show="showten">
          </div>
          <transition name="fade">
            <div class="answer paddingbtm" v-show="showten">
              <p class="bordertop">Several years ago, we designed a distributed network layer before we developed our communication apps - Dingtone, CoverMe and SkyVPN. These apps share the same underlying network layer, which will be replaced by TOP Network. That means Dingtone, CoverMe and SkyVPN will be transparently moved to TOP Network. In fact, the users won’t even notice the migration process. Over 50 million users will be immediately available on TOP Network once it’s launched.</p>
            </div>
          </transition>
        </div>
        <div class="item linedistance">
          <div class="info-title">III. Tokens &amp; How to Earn Them</div>
          <div class="question">
            <span class="question-title">Q11. Is there going to be a token mining? And how do we become miners?</span>
            <img src="@/assets/images/faq/jiahao.png" class="slogn" @click="showeleven=!showeleven" v-show="!showeleven">
            <img src="@/assets/images/faq/jianhao.png" class="slogn1" @click="showeleven=!showeleven" v-show="showeleven">
          </div>
          <transition name="fade">
            <div class="answer" v-show="showeleven">
              <p>TOP tokens will be available for mining after TOP Network is launched. For example, SkyVPN users would possibly become miners of TOP tokens after the launch of TOP Network later this year. Any user can contribute his device and bandwidth to TOP Network and receive tokens based on the contribution they make.</p>
            </div>
          </transition>
        </div>
        <div class="item">
          <div class="question">
            <span class="question-title">Q12. How can I convert TOP tokens to cash after I get tokens from mining?</span>
            <img src="@/assets/images/faq/jiahao.png" class="slogn" @click="showtwelve=!showtwelve" v-show="!showtwelve">
            <img src="@/assets/images/faq/jianhao.png" class="slogn1" @click="showtwelve=!showtwelve" v-show="showtwelve">
          </div>
          <transition name="fade">
            <div class="answer" v-show="showtwelve">
              <p>Once TOP tokens are listed on a cryptocurrency exchange, you can sell the tokens for cash.</p>
            </div>
          </transition>
        </div>
        <div class="item">
          <div class="question">
            <span class="question-title">Q13. Will you offer a bounty or proof-of-care program?</span>
            <img src="@/assets/images/faq/jiahao.png" class="slogn" @click="showthreeteen=!showthreeteen" v-show="!showthreeteen">
            <img src="@/assets/images/faq/jianhao.png" class="slogn1" @click="showthreeteen=!showthreeteen" v-show="showthreeteen">
          </div>
          <transition name="fade">
            <div class="answer" v-show="showthreeteen">
              <p>Yes, we have kicked off an array of TOP Network bounty programs! You can find them on our bounty bot: <a href="https://t.me/TOPNetworkBot" target="_blank">https://t.me/TOPNetworkBot</a>.</p>
            </div>
          </transition>
        </div>
        <div class="item">
          <div class="question noborder">
            <span class="question-title">Q14. Will there be a crowdsale?</span>
            <img src="@/assets/images/faq/jiahao.png" class="slogn" @click="showfourteen=!showfourteen" v-show="!showfourteen">
            <img src="@/assets/images/faq/jianhao.png" class="slogn1" @click="showfourteen=!showfourteen" v-show="showfourteen">
          </div>
          <transition name="fade">
            <div class="answer paddingbtm" v-show="showfourteen">
              <p class="bordertop">Yes, and we will announce the date of the crowdsale soon. Please stay tuned.</p>
            </div>
          </transition>
        </div>
        <div class="item linedistance">
          <div class="info-title">IV. For Developers</div>
          <div class="question noborder">
            <span class="question-title">Q15. I'm trying to develop a messaging app on my own. How can I make use of your project?</span>
            <img src="@/assets/images/faq/jiahao.png" class="slogn" @click="showfifteen=!showfifteen" v-show="!showfifteen">
            <img src="@/assets/images/faq/jianhao.png" class="slogn1" @click="showfifteen=!showfifteen" v-show="showfifteen">
          </div>
          <transition name="fade">
            <div class="answer paddingbtm" v-show="showfifteen">
              <div class="bordertop">TOP Network provides cloud communication services such as messaging, calling, video, VPN, CDN, IoT data sharing and more. Any app can tap into this network through the API and SDK we provide. If you are building a messaging app, TOP is the perfect choice for you. With TOP, you no longer need to build your own communication stack, deploy servers, and maintain the network. With a few lines of code, you will have a powerful messaging app.</div>
            </div>
          </transition>
        </div>
      </div>
    </div>
    <v-footer/>
  </div>
</template>

<script>
import Navbar from '@/components/common/Navbar'
import vFooter from '@/pages/index/components/Footer'
export default {
  name: 'Faq',
  components: {
    Navbar,
    vFooter
  },
  data () {
    return {
      showone: false,
      showtwo: false,
      showthree: false,
      showfour: false,
      showfive: false,
      showsix: false,
      showseven: false,
      showeghit: false,
      shownine: false,
      showten: false,
      showeleven: false,
      showtwelve: false,
      showthreeteen: false,
      showfourteen: false,
      showfifteen: false
    }
  }
}
</script>

<style lang="scss" scoped>
  .policy{
    width: 100%;
    font-family:Cera Pro;
    background: #041126;
    padding-bottom:1.47rem;
    .title{
      background: url('../../assets/images/faq/background.png') no-repeat;
      background-position: 0 0;
      background-size:100% 100%;
      width:100%;
      text-align: center;
      height:2.51rem;
      font-size:0.59rem;
      font-weight:bold;
      line-height:1.81rem;
      color:rgba(255,255,255,1);
    }
    .info{
      width:8.67rem;
      margin:-0.5rem auto 0 auto;
      color:rgba(255,255,255,1);
      text-align: left;
      font-size:0.35rem;
      line-height:0.5rem;
      font-family:Cera Pro;
      padding:0.53rem 0 0.53rem 0;
      .item{
        width:100%;
        padding: 0.53rem 0.4rem  0rem 0.4rem;
        box-sizing: border-box;
        background:rgba(17,30,49,1);
        margin:0 auto;
        .info-title{
          width:100%;
          text-align: left;
          font-size:0.43rem;
          font-weight:bold;
          line-height:0.51rem;
          color:rgba(255,255,255,1);
          padding-bottom:0.53rem;
        }
        .question{
          width:100%;
          font-size:0.35rem;
          font-weight:300;
          line-height:0.51rem;
          color:rgba(255,255,255,1);
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin:0 auto;
          padding-bottom:.53rem;
          border-bottom: 1px solid rgba(255,255,255,.8);
          .question-title{
            width:7.05rem;
            display: inline-block;
          }
          .slogn{
            width:0.29rem;
            height: 0.29rem;
          }
          .slogn1{
            width:0.29rem;
            height: .29rem;
          }
        }
        .noborder{
          border-bottom: 0px;
        }
        .fade-enter-active, .fade-leave-active {
          transition: opacity .5s;
        }
        .fade-enter, .fade-leave-to{
          opacity: 0;
        }
        .answer{
          width:100%;
          font-size:0.35rem;
          font-weight:300;
          line-height:0.4rem;
          color:rgba(255,255,255,0.5);
          margin:0 auto;
          border-bottom: 1px solid rgba(255,255,255,0.8);
          padding-bottom: .53rem;
          p{
            margin-top:0.53rem;
            a{
                color:#F8CF03;
                display: inline-block;
                text-decoration: underline;
                opacity: 0.5;
              }
          }
          .bordertop{
            border-top:1px solid rgba(255,255,255,0.8);
            margin-top:0;
            padding-top:.53rem;
          }
          img{
            width:7.82rem;
            height:10.35rem;
            margin:0.53rem auto 0 auto;
            opacity: 1;
          }
        }
        .paddingbtm{
          border-bottom: 0;
        }
      }
      .linedistance{
        margin-top:0.8rem;
      }
    }
  }
</style>
