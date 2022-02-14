(window.webpackJsonp=window.webpackJsonp||[]).push([[12,2],{525:function(t,e){t.exports={e18:BigInt(1+"0".repeat(18)),e36:BigInt(1+"0".repeat(36)),e34:BigInt(1+"0".repeat(34)),e14:BigInt(1+"0".repeat(14)),floatEtherToWei:t=>BigInt(Math.round(1e10*t))*BigInt(1e8)}},526:function(t,e,n){var content=n(529);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(62).default)("4b791fa1",content,!0,{sourceMap:!1})},528:function(t,e,n){"use strict";n(526)},529:function(t,e,n){var o=n(61)(!1);o.push([t.i,".timer[data-v-09685e07]{font-size:20px;color:#fff;text-align:center;margin-top:50px}.day[data-v-09685e07],.hour[data-v-09685e07],.min[data-v-09685e07],.sec[data-v-09685e07]{font-size:30px;display:inline-block;font-weight:500;text-align:center;margin:0 5px}.format[data-v-09685e07]{font-weight:300;font-size:14px;opacity:.8;width:60px}.number[data-v-09685e07]{background:rgba(51,51,51,.53);padding:0 5px;border-radius:5px;display:inline-block;width:60px;text-align:center}.message[data-v-09685e07]{font-size:14px;font-weight:400;margin-top:5px}.status-tag[data-v-09685e07]{width:270px;margin:10px auto;padding:8px 0;font-weight:500;color:#000;text-align:center;border-radius:15px}.running[data-v-09685e07]{color:#2e8b57}",""]),t.exports=o},533:function(t,e,n){"use strict";n.r(e);var o={name:"Countdown",props:["starttime","endtime","trans"],data:function(){return{timer:"",wordString:{day:"Days",hours:"Hours",minutes:"Minutes",seconds:"Seconds",expired:"Expired",status:{expired:"TokenSale will Soon be closed",upcoming:"TokenSale Will Start In",running:"Sale is Live  "}},start:"",end:"",interval:"",days:"-",minutes:"-",hours:"-",seconds:"-",message:"",statusType:"",statusText:""}},created(){this.interval=setInterval(function(){this.timerCount()}.bind(this),1e3),this.timerCount()},destroyed(){this.interval&&clearInterval(this.interval)},methods:{timerCount:function(){if(this.endtime&&this.starttime){var t=Date.now(),e=this.starttime.getTime()-t,n=this.endtime.getTime()-t;n>0?e>0?(this.calcTime(e),this.message=this.wordString.upcoming,this.statusType="upcoming",this.statusText=this.wordString.status.upcoming):(this.calcTime(n),this.message=this.wordString.running,this.statusType="running",this.statusText=this.wordString.status.running):this.end>0&&(this.message=this.wordString.expired,this.statusType="expired",this.statusText=this.wordString.status.expired,console.log("Clearing Interval due to expiry",this.end),this.interval&&clearInterval(this.interval))}},calcTime:function(t){this.days=Math.floor(t/864e5),this.hours=Math.floor(t%864e5/36e5),this.minutes=Math.floor(t%36e5/6e4),this.seconds=Math.floor(t%6e4/1e3)}}},r=(n(528),n(35)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center"},[n("div",{staticClass:"status-tag",class:t.statusType},[t._v(t._s(t.statusText))]),t._v(" "),n("div",{staticClass:"day"},[n("span",{staticClass:"number"},[t._v(t._s(t.days))]),t._v(" "),n("div",{staticClass:"format"},[t._v(t._s(t.wordString.day))])]),t._v(" "),n("div",{staticClass:"hour"},[n("span",{staticClass:"number"},[t._v(t._s(t.hours))]),t._v(" "),n("div",{staticClass:"format"},[t._v(t._s(t.wordString.hours))])]),t._v(" "),n("div",{staticClass:"min"},[n("span",{staticClass:"number"},[t._v(t._s(t.minutes))]),t._v(" "),n("div",{staticClass:"format"},[t._v(t._s(t.wordString.minutes))])]),t._v(" "),n("div",{staticClass:"sec"},[n("span",{staticClass:"number"},[t._v(t._s(t.seconds))]),t._v(" "),n("div",{staticClass:"format"},[t._v(t._s(t.wordString.seconds))])])])}),[],!1,null,"09685e07",null);e.default=component.exports},546:function(t,e,n){"use strict";n.r(e);const o=n(525);var r={name:"tokensale.vue",computed:{displayRate(){return parseFloat(this.rate/(o.e14*BigInt(Math.pow(10,this.token.decimals))))/1e4},saleAddress(){return this.$route.query.address},liquidityPercent(){return this.softCap?parseFloat(this.liquidityEth*BigInt(1e4)/this.softCap)/100:0},bought(){return parseFloat(this.boughtTokens/BigInt(Math.pow(10,this.token.decimals)))},remaining(){return console.log(this.remainingTokens,"-",this.liquidityToken),console.log("diff",this.remainingTokens-this.liquidityToken),parseFloat((this.remainingTokens-this.liquidityToken)/BigInt(Math.pow(10,this.token.decimals)))},raised(){return parseFloat(this.weiRaised/o.e14)/1e4},goal(){return parseFloat(this.softCap/o.e14)/1e4},hardCapView(){return parseFloat(this.hardCap/o.e14)/1e4},remainingToLoad(){return(this.hardCap-this.weiRaised)*this.rate/o.e36-this.remainingTokens+this.liquidityToken},goalReached(){return this.weiRaised>=this.softCap},toLoad(){return parseFloat(this.remainingToLoad/BigInt(Math.pow(10,this.token.decimals)))},isLoaded(){return this.remainingToLoad<=0},userAddress(){return this.$store.state.web3.accounts[0]},coinSymbol(){return this.$web3.symbol()},purchaseAmountFloat(){return parseFloat(this.purchaseAmount)}},created(){this.fetchDetails()},methods:{resetCtxButton(){this.contextButton={message:void 0,disabled:!1}},signData(){console.log("SignData");const data=JSON.stringify({types:{EIP712Domain:[{name:"name",type:"string"},{name:"version",type:"string"},{name:"salt",type:"bytes32"}],Bid:[{name:"amount",type:"uint256"},{name:"bidder",type:"Identity"}],Identity:[{name:"userId",type:"uint256"},{name:"wallet",type:"address"}]},domain:{name:"My amazing dApp",version:"2",salt:"0xf2d857f4a3edcb9b78b4d503bfe733db1e3f6cdc2b7971ee739626c97e86a558"},primaryType:"Bid",message:{amount:100,bidder:{userId:323,wallet:"0x3333333333333333333333333333333333333333"}}});this.$web3.signData(this.$store.state.web3.accounts[0],data)},fetchDetails(){const t=this.$web3.contracts.tokenSale(this.$route.query.address).methods;return Promise.allSettled([t.info().call(),t.status().call()]).then((([t,e])=>{let n=t.value;const[o,r,d,l,c,h,m,v,T]=[n[0],n[1],n[2],n[3],n[4],n[5],n[6],n[7],n[8]];n=e.value;const[f,y,_,k,w,C,x]=[n[0],n[1],n[2],n[3],n[4],n[5],n[6]];console.log("Sale Info",{rate:o,softCap:r,hardCap:d,weiRaised:f,openingTime:h,closingTime:m,boughtTokens:_,lockedEthers:k,tokenAddress:v,creatorAddress:T,isOpen:w,hasClosed:C,finalized:x,liquidityTokens:l,liquidityEth:c,contractTokenBalance:y});const B=this.$web3.contracts.bep20(v);Promise.allSettled([this.$web3.tokenInfo(B)]).then((([t,e])=>{this.rate=BigInt(o),this.softCap=BigInt(r),this.hardCap=BigInt(d),this.weiRaised=BigInt(f),this.openingTime=new Date(1e3*h),this.closingTime=new Date(1e3*m),this.boughtTokens=BigInt(_),this.lockedEthers=BigInt(k),this.token.address=v,this.creator=T.toLowerCase(),this.isOpen=w,this.hasClosed=C,this.finalized=x,this.liquidityEth=BigInt(c),this.liquidityToken=BigInt(l),this.contractTokenBalance=BigInt(y);const[n,B,symbol,I,S,$]=t.value;let A=this.token;A.native=n,A.name=B,A.symbol=symbol,A.decimals=I,A.supply=BigInt(S),A.accountBalance=BigInt($),this.remainingTokens=BigInt(y)}))}))},lockedAmount(){return parseFloat(this.lockedEthers/o.e14)/1e4},displayTokens(t){return parseFloat(t*BigInt(1e4)/BigInt(Math.pow(10,this.token.decimals)))/1e4},async finalize(){this.$web3.contracts.tokenSale(this.saleAddress).methods.finalize().send().then((()=>{this.$bvToast.toast("Sale Finalized",{title:"Transaction Complete",autoHideDelay:5e3,appendToast:!0}).catch((t=>{console.log("Finalization context",this.saleAddress,addr,tokensale);var[title,e]=this.$web3.renderError(t);this.$bvToast.toast(e,{title:title,autoHideDelay:15e3,appendToast:!0,variant:"danger"})}))})).catch((t=>{console.log("Tokensale context",this.saleAddress);var[title,e]=this.$web3.renderError(t);this.$bvToast.toast(e,{title:title,autoHideDelay:15e3,appendToast:!0,variant:"danger"})}))},withdrawTokens(){return this.$web3.contracts.tokenSale(this.saleAddress).methods.withdrawTokens(this.userAddress).send().then((()=>{this.$bvToast.toast("Refund Claimed",{title:"Transaction Complete",autoHideDelay:5,appendToast:!0})}))},withdrawEthers(){return this.$web3.contracts.tokenSale(this.saleAddress).methods.claimRefund().send().then((()=>{this.$bvToast.toast("Refund Claimed",{title:"Transaction Complete",autoHideDelay:5,appendToast:!0})}))},async loadTokens(){return this.contextButton.disabled=!0,this.$web3.contracts.bep20(this.token.address).methods.transfer(this.$route.query.address,this.remainingToLoad).send().on("transactionHash",(t=>{this.contextButton.message="Tx Submitted : Waiting for confirmation",this.$bvToast.toast("Tx Submitted\n"+t.substr(0,15)+"...",{title:"Transaction Submitted",autoHideDelay:3e3,appendToast:!0,variant:"info"}),console.log("Load Funds Transactionhash :",t)})).then((()=>(this.$bvToast.toast("Tx confirmed\n Tokens are now loaded"),this.fetchDetails()))).catch((t=>{console.error(t),this.$bvToast.toast(this.$web3.renderError(t),{title:"Token Load failed",autoHideDelay:15e3,appendToast:!0,variant:"danger"})})).finally(this.resetCtxButton)},async buyToken(){this.contextButton.disabled=!0;const t=(BigInt(Math.round(1e8*this.purchaseAmountFloat))*BigInt(1e10)).toString(10),e=this.$web3.contracts.tokenSale(this.$route.query.address);await e.methods.buyTokens(this.userAddress).estimateGas({value:t}).then((t=>console.log("Gas Estimate for purchase token:",t)||!0)).catch((t=>{const[title,e]=this.$web3.renderError(t);this.$bvToast.toast(e,{title:"Tx Error",autoHideDelay:5e3,appendToast:!0,variant:"danger"})}))?e.methods.buyTokens(this.userAddress).send({value:t}).on("transactionHash",(function(t){console.log("Transaction Hash :"+t)})).on("transactionHash",(t=>{this.$bvToast.toast("Tx Submitted : "+t.substr(0,15)+"...",{title:"Buy Token"}),this.contextButton.message="Waiting Confirmation .."})).then((()=>{this.fetchDetails(),this.$bvToast.toast("Investment successful",{title:"Transaction complete",autoHideDelay:5,appendToast:!0})})).catch((t=>{this.$bvToast.toast(this.$web3.renderError(t),{title:"Tx Error",autoHideDelay:5e3,appendToast:!0,variant:"danger"})})).finally(this.resetCtxButton):this.contextButton.disabled=!1}},data(){const t=BigInt(0);return{metamask:{address:null},token:{address:null,decimals:0,native:!1,name:null,symbol:null,supply:t,accountBalance:t},creator:null,liquidityEth:t,liquidityToken:t,softCap:t,openingTime:null,closingTime:null,weiRaised:t,hardCap:t,purchaseAmount:0,rate:t,remainingTokens:t,boughtTokens:t,lockedEthers:t,isOpen:!1,hasClosed:!1,finalized:!1,contextButton:{disabled:!1,message:void 0}}}},d=n(35),component=Object(d.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container text-center"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-6 text-center"},[t.isLoaded||t.hasClosed?n("div",[n("div",[t._v("Liquidity : "+t._s(t.liquidityPercent)+" % ")]),t._v(" "),t.hasClosed?t._e():n("countdown",{staticClass:"mt-5",attrs:{starttime:t.openingTime,endtime:t.closingTime,trans:"1"}}),t._v(" "),n("div",{staticClass:"mt-5"},[n("span",{staticClass:"h4 text-muted"},[t._v("\n              "+t._s(t.raised)+" / "+t._s(t.goal)+" "+t._s(t.coinSymbol)+" Raised  (HardCap :"+t._s(t.hardCapView)+" )")]),t._v(" "),t.hasClosed?t.hasClosed&&!t.goalReached?n("span",{staticClass:"text-sm test-muted",staticStyle:{color:"indianred"}},[n("strong",[t._v("(")]),t._v("Failed to Reach goal "),n("strong",[t._v(")")])]):n("span",[n("strong",[t._v("(")]),t._v("Tokensale Was Successful "),n("strong",[t._v(")")])]):n("div",{staticClass:"text-sm test-muted"},[n("strong",[t._v("(")]),t._v(t._s(t.remaining)+" "+t._s(t.token.symbol)+" Left "),n("strong",[t._v(")")])]),t._v(" "),n("div",{staticClass:"text-info"},[t._v(" 1 "+t._s(t.coinSymbol)+" = "+t._s(t.displayRate)+" "+t._s(t.token.symbol))])])],1):n("div",[n("div",{staticClass:"h2 mt-5"},[t._v(" Tokensale is not Initialized")]),t._v(" "),n("div",{staticClass:"h4 mt-3"},[t._v(" "+t._s(t.toLoad)+" "+t._s(t.token.symbol)+" is still missing")])])])]),t._v(" "),t.isLoaded||t.hasClosed?n("div",{staticClass:"row mt-5 text-center"},[n("div",{staticClass:"col-3"}),t._v(" "),t.isOpen&&!t.hasClosed?n("div",{staticClass:"col-6 text-center"},[t.boughtTokens?n("div",{staticClass:"my-2"},[n("span",{staticStyle:{color:"seagreen","font-weight":"bold"}},[t._v(" You have bought "+t._s(t.bought)+" "+t._s(t.token.symbol))])]):t._e(),t._v(" "),n("b-input-group",{staticClass:"mt-2",attrs:{prepend:"Invest "+t.coinSymbol}},[n("b-form-input",{model:{value:t.purchaseAmount,callback:function(e){t.purchaseAmount=e},expression:"purchaseAmount"}}),t._v(" "),n("b-input-group-append",[n("b-button",{attrs:{variant:"info",disabled:t.contextButton.disabled||!t.purchaseAmountFloat},on:{click:t.buyToken}},[t._v("\n              "+t._s(t.contextButton.message?t.contextButton.message:t.bought?"Buy More "+t.token.symbol:"Buy "+t.token.symbol)+"\n            ")])],1)],1)],1):t.hasClosed?n("div",{staticClass:"col-6 text-center"},[t.creator!=t.userAddress&&!t.boughtTokens||t.finalized?t._e():n("div",[n("hr"),t._v(" "),n("div",{staticClass:"text-muted mb-2"},[t._v(" Tokensale is complete but not finalized. Anyone can finalize a sale.")]),t._v(" "),n("b-button",{on:{click:t.finalize}},[t._v(" Finalize Tokensale")])],1),t._v(" "),t.goalReached&&t.boughtTokens&&t.finalized?n("div",[n("b-button",{on:{click:t.withdrawTokens}},[t._v(" Withdraw "+t._s(t.displayTokens(t.boughtTokens))+" "+t._s(t.token.symbol))])],1):!t.goalReached&&t.lockedEthers&&t.finalized?n("div",[n("b-button",{on:{click:t.withdrawEthers}},[t._v(" Withdraw "),n("strong",[t._v("( "+t._s(t.lockedAmount())+" "+t._s(t.coinSymbol)+" )")])])],1):t.boughtTokens&&!t.lockedEthers?n("div",[n("span",[t._v(" You bought "+t._s(t.displayTokens(t.boughtTokens))+" "+t._s(t.token.symbol)+" and claimed refund")])]):t._e()]):t._e()]):t.creator===t.userAddress?n("div",{staticClass:"row "},[n("div",{staticClass:"col-3 "}),t._v(" "),n("div",{staticClass:"col-6 text-center "},[n("b-button",{staticClass:"mt-5",attrs:{disabled:this.contextButton.disabled},on:{click:t.loadTokens}},[t._v("\n          "+t._s(t.contextButton.message||"Load Tokens")+"\n        ")])],1)]):n("div",{staticClass:"row"},[n("div",{staticClass:"col-3"}),t._v(" "),t._m(0)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-6 text-center text-muted"},[n("div",{staticClass:"mt-5"},[t._v("Tokensale will start after tokens are loaded.")])])}],!1,null,"7b716a6e",null);e.default=component.exports;installComponents(component,{Countdown:n(533).default})}}]);