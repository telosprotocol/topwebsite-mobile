<template>
  <div class="faq">
    <div class="big_title">Frequently Asked Questions</div>
    <div class="container">
      <div class="content_item">
        <div class="title">I.Project Overview</div>
        <div class="question_item">
          <div class="question" @click="toggleAnswer($event)">Q1: What is TOP?
            <i class="iconfont icon-jiahao1"></i>
          </div>
          <div class="answer_area">
            <span class="answer">The TOP project has two ambitious missions: (1) Building a decentralized communication network infrastructure.
              (2) Developing a high- performance public blockchain platform that can handle a large volume of transactions
              for the communication network.</span>
            <span class="answer">TOP Network is a decentralized open communication network providing cloud communication services such as messaging,
              calling, video, VPN, CDN, IoT data sharing and more. Enabled by blockchain 4.0 technology, TOP Network is secure,
              low cost and unstoppable.</span>
            <span class="answer">TOP Chain is a high-performance DAG-based blockchain platform designed for real-world businesses. With its three-layered
              ledgers, two-layered sharding, instant transaction, and zero transaction fees, TOP Chain can process any volume
              and any size of real-world business on blockchain.</span>
          </div>
        </div>
        <div class="question_item">
          <div class="question" @click="toggleAnswer($event)">Q2: Why did the team want to build a public blockchain platform?
            <i class="iconfont icon-jiahao1"></i>
          </div>
          <div class="answer_area">
            <span class="answer">We didn’t want to build a public blockchain platform, we had to.</span>
            <span class="answer">When we started the project last year, we had 40 million users scheduled to move to TOP Network. With this existing
              user base, TOP Network will have over one hundred thousand transactions per second from day one. We tried to
              find an existing public blockchain platform as a ledger for TOP Network. But it turned out that none of those
              blockchain platforms can handle such a large volume of transactions. In the end, we had to make a hard decision
              to build our own ledger – a general-purpose public blockchain platform that can handle any volume and any size
              of real-word business on blockchain.</span>
          </div>
        </div>
        <div class="question_item">
          <div class="question" @click="toggleAnswer($event)">Q3: What is the current status of TOP?
            <i class="iconfont icon-jiahao1"></i>
          </div>
          <div class="answer_area">
            <span class="answer">TOP was founded in late 2017. We’ve been on stealth mode since then, so there’s not much information about us.</span>
            <span class="answer">We’ve been putting a lot of effort into technology development and we already have a private testnet. The real-time
              performance of our testnet is displayed on our website
              <a href="http://www.topnetwork.org" target="_blank">(http://www.topnetwork.org)</a>. Our testnet has already reached 2000 TPS in a single shard, much faster than
              most public blockchains on the market. TOP will be launched later this year.</span>
            <span class="answer">We have closed $8 million US in early investment from prestigious investors, and we’ll start a crowd sale for
              our tokens very soon.</span>
          </div>
        </div>
        <div class="question_item">
          <div class="question" @click="toggleAnswer($event)">Q4: Is the whitepaper for the project available?
            <i class="iconfont icon-jiahao1"></i>
          </div>
          <div class="answer_area">
            <span class="answer">The white paper is going through the legal opinion process. It will be available on our website very soon. Stay
              tuned! We’ll update here when the release date is confirmed. </span>
            <span class="answer">Please check out the executive summary from our website, which has all the key information.</span>
          </div>
        </div>
        <div class="question_item">
          <div class="question" @click="toggleAnswer($event)">Q5: Who have invested in your project so far?
            <i class="iconfont icon-jiahao1"></i>
          </div>
          <div class="answer_area">
            <span class="answer">We have closed $8 million US in early investment from prestigious institution investors, including DHVC, Fenbushi
              Capital, NEO Global Capital, LD Capital and more.</span>
          </div>
        </div>
        <div class="question_item">
          <div class="question" @click="toggleAnswer($event)">Q6: How can I invest in TOP Network?
            <i class="iconfont icon-jiahao1"></i>
          </div>
          <div class="answer_area">
            <span class="answer">If you’re an institution investor, you can participate in our private sale now. Email
              <a href="mailto:contact@topnetwork.org">contact@topnetwork.org</a> for more details.</span>
            <span class="answer">For individual investors, please participate in our public token sale in a few weeks. KYC will be required.</span>
          </div>
        </div>
        <div class="question_item">
          <div class="question" @click="toggleAnswer($event)">Q7: Where can I get information about the team?
            <i class="iconfont icon-jiahao1"></i>
          </div>
          <div class="answer_area">
            <span class="answer">You can find more information about Steve, the CEO and co-founder of TOP Network, on
              <a href="https://www.linkedin.com/in/stevenwee/" target="_blank">his LinkedIn page</a>.</span>
            <span class="answer">And more team members can be found on our
              <a href="https://www.linkedin.com/company/topnetwork/" target="_blank">company LinkedIn page</a>.</span>
          </div>
        </div>
      </div>
      <div class="content_item">
        <div class="title">II. Technical Details</div>
        <div class="question_item">
          <div class="question" @click="toggleAnswer($event)">Q8. Does TOP Network have an MVP?
            <i class="iconfont icon-jiahao1"></i>
          </div>
          <div class="answer_area">
            <span class="answer">More than an MVP! We already have a testnet running. You can see the performance of our private testnet on our
              <a href="https://www.topnetwork.org/" target="_blank">official website</a>. We have already achieved 2000 TPS in a single shard.</span>
            <img src="static/img_faq.png">
            <span class="answer">Also, our demo DApp—BitVPN is in development and will be released after TOP Network is launched.</span>
            <span class="answer">Our existing VPN app, SkyVPN, has gained over 10 million users in less than 10 months since it was launched.
              SkyVPN will be moved to TOP Network and it will bring a huge volume of business to TOP.</span>
          </div>
        </div>
        <div class="question_item">
          <div class="question" @click="toggleAnswer($event)">Q9. So TOP Network is about building a VPN?
            <i class="iconfont icon-jiahao1"></i>
          </div>
          <div class="answer_area">
            <span class="answer">BitVPN is only a demo app that is being built on TOP network. TOP Network is a lot more than a VPN app. We are
              building a public communication network infrastructure that can provide any kind of communication services,
              such as messaging, calling, CDN, streaming, storage, IoT data sharing and more. VPN is only one of the communication
              services that TOP provides.</span>
          </div>
        </div>
        <div class="question_item">
          <div class="question" @click="toggleAnswer($event)">Q10. How will you move your 45 million users to TOP?
            <i class="iconfont icon-jiahao1"></i>
          </div>
          <div class="answer_area">
            <span class="answer">Several years ago, we designed a distributed network layer before we developed our communication apps - Dingtone,
              CoverMe and SkyVPN. These apps share the same underlying network layer, which will be replaced by TOP Network.
              That means Dingtone, CoverMe and SkyVPN will be transparently moved to TOP Network. In fact, the users won’t
              even notice the migration process.</span>
            <span class="answer">When TOP Network is launched, 45 million users will be immediately available on TOP.</span>
          </div>
        </div>
      </div>
      <div class="content_item">
        <div class="title">III. Tokens & How to Earn Them</div>
        <div class="question_item">
          <div class="question" @click="toggleAnswer($event)">Q11. Is there going to be a token mine? And how do we become miners?
            <i class="iconfont icon-jiahao1"></i>
          </div>
          <div class="answer_area">
            <span class="answer">There will be TOP tokens available for mining after TOP Network is launched. For example, SkyVPN users would
              possibly become miners of TOP tokens after the launching of TOP Network later this year. Any user can contribute
              his device and bandwidth into TOP Network and receive token awards based on the contribution they make.</span>
          </div>
        </div>
        <div class="question_item">
          <div class="question" @click="toggleAnswer($event)">Q12. How can I convert tokens to cash after I get tokens from mining?
            <i class="iconfont icon-jiahao1"></i>
          </div>
          <div class="answer_area">
            <span class="answer">Once TOP tokens are listed on a cryptocurrency exchange, you can sell the tokens for cash.</span>
          </div>
        </div>
        <div class="question_item">
          <div class="question" @click="toggleAnswer($event)">Q13. Will you offer a bounty or proof-of-care program?
            <i class="iconfont icon-jiahao1"></i>
          </div>
          <div class="answer_area">
            <span class="answer">Yes, we will soon announce a bounty program. Please stay tuned.</span>
          </div>
        </div>
        <div class="question_item">
          <div class="question" @click="toggleAnswer($event)">Q14. Will there be a crowdsale?
            <i class="iconfont icon-jiahao1"></i>
          </div>
          <div class="answer_area">
            <span class="answer">Yes, and we will announce the date of the crowdsale soon. Please stay tuned.</span>
          </div>
        </div>
      </div>
      <div class="content_item">
        <div class="title">IV. For Developers</div>
        <div class="question_item">
          <div class="question" @click="toggleAnswer($event)">Q15. I’m trying to develop a messaging app on my own. How can I make use of your project?
            <i class="iconfont icon-jiahao1"></i>
          </div>
          <div class="answer_area">
            <span class="answer">TOP Network provides cloud communication services such as messaging, calling, video, VPN, CDN, IoT data sharing and more. Any apps can tap into this network through the API and SDK we provide.</span>
            <span class="answer">If you are building a messaging app, TOP is the perfect choice for you. With TOP, you no longer need to build
              your own communication stack, deploy servers, and maintain the network. With a few lines of code, you will
              have a powerful messaging app.</span>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer_main">
        <span class="logo"></span>
        <div class="left_area">
          <span>Copyright © 2018 Telos Foundation
            <br> All rights reserved</span>
          <div class="right_area">
            <div class="text">
              <a @click="clickTermsOfService()">Terms</a>
              <a @click="clickPrivacyPolicy()">Privacy</a>
              <a @click="clickBlog()">Blog</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      open: false
    }
  },
  methods: {
    toggleAnswer (event) {
      let el = event.currentTarget
      $(el).find('i').toggleClass('icon-jiahao1').toggleClass('icon-jianhao')
      $(el).parent().find('.answer_area').slideToggle()
    },
    clickTermsOfService () {
      this.$ga.event('bootBtn_faq', 'click', 'TermsOfService')
    },
    clickPrivacyPolicy () {
      this.$ga.event('bootBtn_faq', 'click', 'PrivacyPolicy')
    },
    clickBlog () {
      this.$ga.event('bootBtn_faq', 'click', 'Blog')
      window.open('https://www.topnetwork.org/blog/', '_blank')
    }
  },
  components: {

  }
}

</script>

<style lang='scss' rel='stylesheet/scss' scoped>
  .faq {
    height: 100%;
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    background-color: #0D1458;
    font-family: PingFangSC-Regular, Arial, Helvetica, sans-serif;
    overflow: auto;
    -webkit-overflow-scrolling:touch;
    .big_title {
      text-align: center;
      font-size: 0.416rem;
      font-weight: 600;
      color: rgba(255, 255, 255, 1);
      width: 100%;
      height: 0.346rem;
      line-height: 0.346rem;
      margin-top: 0.693rem;
    }
    .container {
      width: 90%;
      margin: 0 auto;
      margin-top: 0.693rem;
      .content_item {
        box-sizing: border-box;
        background-color: #1E266E;
        border-radius: 4px;
        width: 100%;
        padding-left: 0.346rem;
        padding-right: 0.346rem;
        text-align: left;
        margin-bottom: 0.693rem;
        color: #fff;
        .title {
          font-size: 0.346rem;
          font-weight: 600;
          padding: 0.346rem 0 0.346rem 0;
          text-align: left;
          box-sizing: border-box;
        }
        .question_item {
          width: 100%;
          border-bottom: 1px solid rgba($color: #fff, $alpha: 0.15);
          .question {
            font-size: 0.26rem;
            padding: 0.242rem 0 0.242rem 0;
            text-align: left;
            position: relative;
            font-weight: 600;
            width:94%;
            i {
              display: inline-block;
              position: absolute;
              right: -4%;
              height: 0.242rem;
              width: 0.242rem;
              top: 50%;
              transform: translateY(-50%);
            }
          }
          .answer_area {
            display: none;
          }
          .answer {
            font-size: 0.26rem;
            color: rgba(255, 255, 255, 0.7);
            margin-bottom: 0.173rem;
            display: inline-block;
            word-break: break-all;
            a {
              color: #F9DD4B;
              text-decoration: none;
              &:hover {
                text-decoration: underline;
              }
            }
          }
          img {
            height: 3.466rem;
            display: block;
            margin-bottom: 0.346rem;
          }
        }
        .question_item:last-child {
          border: none;
        }
      }
    }
    .footer {
      height: 2.773rem;
      width: 100%;
      position: relative;
      bottom: 0;
      left: 0;
      border-top: 1px solid #203486;
      .footer_main {
        width: 98%;
        height: 100%;
        margin: 0 auto;
        position: relative;
        .logo {
          height: 1.04rem;
          width: 1.733rem;
          position: absolute;
          top: 50%;
          left: 4%;
          margin-top: -0.52rem;
          background-image: url(img/9_logo.png);
          background-size: 100%;
          background-repeat: no-repeat;
        }
        .left_area {
          height: 100%;
          width: 70%;
          position: absolute;
          top: 50%;
          right: 0;
          transform: translateY(-50%);
          color: #fff;
          line-height: 0.52rem;
          span {
            display: block;
            font-size: 0.346rem;
            text-align: left;
            position: absolute;
            left: 0;
            top: 20%;
          }
        }
        .right_area {
          position: absolute;
          left: 0;
          bottom: 20%;
          .text {
            color: #3ad7fe;
            font-size: 0.346rem;
            text-align: left;
            display: inline-block;
            a {
              margin-right: 1.04em;
            }
          }
        }
      }
    }
  }

</style>
