(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-057a4057"],{"25e7":function(e,t,a){e.exports=a.p+"img/02d.479379af.png"},"26c3":function(e,t,a){e.exports=a.p+"img/10d.9dd05ae9.png"},5398:function(e,t,a){e.exports=a.p+"img/09d.512894b4.png"},"55ca":function(e,t,a){e.exports=a.p+"img/04d.1cd26dc9.png"},7115:function(e,t,a){e.exports=a.p+"img/11d.56bedfc8.png"},"721f":function(e,t,a){e.exports=a.p+"img/02n.0c02f1f3.png"},"78a7":function(e,t,a){"use strict";a.r(t);var c=a("7a23"),r=a("fd80"),s=a.n(r);const o=Object(c["I"])("data-v-ab12acf6");Object(c["u"])("data-v-ab12acf6");const n={key:0},i={key:1,class:"home container-fluid flex-grow-1 d-flex flex-column"},l={key:0,class:"row"},b={class:"col-12"},d={class:"current-score current-score__container text-left component-spacing"},p=Object(c["h"])("small",{class:"current-score__welcome"},"Welcome User",-1),f={key:0,class:"current-score__title"},g=Object(c["g"])(" Most Recent CO₂ Score - "),O={class:"progress current-score__progress"},u={key:0,class:"col-12"},j={class:"weekly-score component-spacing weekly-score__container text-left"},h={class:"weekly-score__title"},y=Object(c["g"])(" YTD Daily Average - "),v={class:"progress weekly-score__progress"},w={class:"row"},k={class:"col-12"},A=Object(c["g"])(" Please go to the "),m=Object(c["g"])(" Profile Page "),I=Object(c["g"])(" to register your scores "),E={class:"row"},Q=Object(c["h"])("div",{class:"col-6 flex-grow-1 d-flex stretch"},[Object(c["h"])("div",{class:"component-spacing--small w-100"},[Object(c["h"])("img",{class:"img-fluid eco-logo",src:s.a,alt:"ecoLogo"})])],-1),S={class:"col-6"},D={key:0,class:"weather weather__container component-spacing--small"},M={class:"show-weather"},R={class:"weather__air-quality"},x=Object(c["g"])(" Air Quality: "),P={class:"weather__data--temp"},H={class:"weather__data--location mb-0"},T={class:"row"},N=Object(c["h"])("div",{class:"col-12 ml-2"},[Object(c["h"])("h5",{class:"text-left mt-2 user__title"}," Profiles ")],-1),C={class:"col-12"},W={class:"row"},V={class:"col-12"},J=Object(c["h"])("h5",{class:"text-left mt-3 news__title"}," Environmental News Feed ",-1);Object(c["s"])();const F=o((e,t,a,r,s,F)=>{const U=Object(c["y"])("router-link"),Y=Object(c["y"])("Profile"),B=Object(c["y"])("NewsFeed");return!0===r.state.loading?(Object(c["r"])(),Object(c["d"])("div",n," Loading... ")):(Object(c["r"])(),Object(c["d"])("div",i,[r.state.profileDay?(Object(c["r"])(),Object(c["d"])("div",l,[Object(c["h"])("div",b,[Object(c["h"])("div",d,[p,r.state.profileDay?(Object(c["r"])(),Object(c["d"])("h6",f,[g,Object(c["h"])("span",null,Object(c["A"])(r.state.profileDay.dailyScore)+" Kg/CO₂",1)])):Object(c["e"])("",!0),Object(c["h"])("div",O,[Object(c["h"])("div",{class:["progress-bar",""+r.state.profileDay.dailyScore>=50?"bg-above":""+r.state.profileDay.dailyScore>=35?"bg-average":"bg-below"],role:"progressbar",style:"width:"+r.state.profileDay.dailyScore+"%;","aria-valuenow":""+r.state.profileDay.dailyScore,"aria-valuemin":"0","aria-valuemax":"100"},null,14,["aria-valuenow"])])])]),r.state.ytdScores?(Object(c["r"])(),Object(c["d"])("div",u,[Object(c["h"])("div",j,[Object(c["h"])("h6",h,[y,Object(c["h"])("span",{value:r.averageScore()},Object(c["A"])(r.state.totalScore)+" Kg/CO₂ ",9,["value"])]),Object(c["h"])("div",v,[Object(c["h"])("div",{class:["progress-bar",""+r.state.profileDay.dailyScore>=50?"bg-above":""+r.state.profileDay.dailyScore>=35?"bg-average":"bg-below"],role:"progressbar",style:"width:"+r.state.totalScore+"%;","aria-valuenow":""+r.state.totalScore,"aria-valuemin":"0","aria-valuemax":"100"},null,14,["aria-valuenow"])])])])):Object(c["e"])("",!0)])):Object(c["e"])("",!0),Object(c["h"])("div",w,[Object(c["h"])("div",k,[Object(c["h"])("div",null,[Object(c["h"])("small",null,[A,Object(c["h"])(U,{to:{name:"ProfilePage",params:{id:r.state.account.id}}},{default:o(()=>[m]),_:1},8,["to"]),I])])])]),Object(c["h"])("div",E,[Q,Object(c["h"])("div",S,[r.state.weather?(Object(c["r"])(),Object(c["d"])("div",D,[Object(c["h"])("div",M,[Object(c["h"])("p",R,[x,Object(c["h"])("strong",null,Object(c["A"])(r.state.weather.current.pollution.aqius)+" AQI",1)]),Object(c["h"])("small",P,Object(c["A"])(r.state.tempFahrenheit)+"°",1),Object(c["h"])("p",H,Object(c["A"])(r.state.weather.city)+", ID ",1)]),Object(c["h"])("img",{src:r.getPic(),class:"weatherImg"},null,8,["src"])])):Object(c["e"])("",!0)])]),Object(c["h"])("div",T,[N,Object(c["h"])("div",C,[(Object(c["r"])(!0),Object(c["d"])(c["a"],null,Object(c["x"])(r.state.profiles,e=>(Object(c["r"])(),Object(c["d"])(Y,{key:e.id,profile:e},null,8,["profile"]))),128))]),Object(c["h"])("div",W,[Object(c["h"])("div",V,[J,(Object(c["r"])(!0),Object(c["d"])(c["a"],null,Object(c["x"])(r.state.news,e=>(Object(c["r"])(),Object(c["d"])(B,{key:e.id,news:e},null,8,["news"]))),128))])])])]))});var U=a("83fc"),Y=a("b5fa"),B=a("5ce5"),Z=a("8246"),K={name:"HomePage",props:{},setup(){const e=Object(c["v"])({loading:!0,activeProfile:Object(c["b"])(()=>U["a"].activeProfile),user:Object(c["b"])(()=>U["a"].user),account:Object(c["b"])(()=>U["a"].account),profiles:Object(c["b"])(()=>U["a"].profiles.slice(0,5)),news:Object(c["b"])(()=>U["a"].newsApi),weather:Object(c["b"])(()=>U["a"].weatherApi),profileDay:Object(c["b"])(()=>U["a"].days.find(t=>t.creatorId===e.account.id)),ytdScores:Object(c["b"])(()=>U["a"].days.filter(t=>t.creatorId===e.account.id)),totalScore:0,tempFahrenheit:Object(c["b"])(()=>{const t=e.weather.current.weather.tp;return Math.floor(1.8*t+32)})});return Object(c["p"])(async()=>{await Z["a"].getAllDays(),await Y["a"].getAllProfiles(),await B["a"].getNewsApi(),await B["a"].getWeatherApi(),e.loading=!1}),{state:e,getPic(){return a("b967")(`./${e.weather.current.weather.ic}.png`)},averageScore(){let t=0;e.ytdScores.forEach(e=>{t+=e.dailyScore}),e.totalScore=Math.floor(t/e.ytdScores.length,-1)}}}};a("f8b0");K.render=F,K.__scopeId="data-v-ab12acf6";t["default"]=K},8114:function(e,t,a){e.exports=a.p+"img/01d.e7a0f046.png"},9457:function(e,t,a){e.exports=a.p+"img/01n.ea3930e5.png"},aec1:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATsAAAEdCAMAAABE9zDeAAAC8VBMVEUAAAD///9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1/9e1//NR6qxAAAA+nRSTlMAAAECAwQFBgcICQoLDA0ODxAREhMUFRYXGBkaGxwdHh8gISIjJCUmJygpKissLS4vMDEyMzQ1Njc4OTo8PT4/QEFCQ0RFRkdISUpLTE1OT1BRU1RVVldYWVpbXV5fYGFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6e3x9fn+AgYKDhIWGh4iJi4yNjo+QkZKTlJWWl5iZmpucnZ6goaKjpKWmp6ipqqusra6vsLGys7S1tre4ubq7vb6/wMHCw8TFxsfIycrLzM3Oz9DR0tPU1dbX2Nna29zd3t/g4eLj5OXm5+jp6uvs7e7v8PHy8/T19vf4+fr7/P3+NoaOnAAAC2VJREFUeAHt3XVDW+m2x/F1Q0KQaQtD5VTuUKbuLtTdXUfpuA9Td+9o3d3d3d31HOruRSp4sfD757qcbckO2YFk7/V5CV+IP89a9C8sp7gdt+N23I7bMW7H7bgdt2PcjttxO27H7Ri343bcjtsxbsftuB2343aM23E7bsftGLfjdtyO23E7xu24HbfjdozbcTtux+24HeN23I7bcTvG7bgdt+N2jNtxO27nre1IJ3xCm0aMnrvp1LUn8fgv8fFPLh1YO2tw73pFSEv6ahfUYtDyS6lQlnhy7neNArmdSMlPFt6EKpnnpvYuwu3+h1/HGbfhlOyLExtbuF2+vuuTkROvF7fzNXI7c4fVyci51wvDjdqu5PgncFVUZCEDtmu6JRtaSFtU2VjtfPpchHb2tDZOO0vETWjrTEtjtDP1vA7tHWlqgHaNzsM9tpbRebvQdXCbjCnBOm5nGZQCd4ruo9t2daLgbrtCddnOb1IW1Hl7ff/yP4Z/H9G7W7duERHfj5m5+vDDLKiT/I1Jf+2qRsGxzPMLfmxWwkRSlrD2g1dE2eDYziI6a2f6IQ0OJO8d3NCf7CvQdtyRTDgQ20lX7YI2w77701paSZ0C3RbEwr7fzfppV/UO7Hn4e21yirnlvDjYc6iIXtp1T4Gy9DWtfMh51l77sqHsaW1dtDONgrJno4pQToVNSYSi1G46aGddCkU3+1nJFUEDX0CJbYDXt8u3F0pu9fUhVwVEKtebafLudiFnoeBZPwtpIWBYEhQsN3tzu8JRkPd2/DuklaKLsiFvi9V72xW+CXm7S5GW6l6GvO1W72yn/F8X14c0ZhmcqhTPO9sFK6TbWJi0V+4cZK0ye2O7wBOQk9yP3MIywQY5S7ywnXkr5Py9PLlLk2jIGet97eZAzopAcp9ixyGnn7e1+wEybJHkVr5zISOjpXe1a22DVFIHcrcBNki9CvOmdmGvIBVdg9yvWyqkrgR6Tzv/C5C6W4ZyQ7MESK32nnZzIBVVgnJHvThIfeUt7brJpStMuaXqS0ikVvSOdiVeQ+JuYco99RMgccXPG9qZ9kLiaUnKTfVTITHFG9p9CYk3FSl3dbZBzBbu+e3+NRFiGc0pt30HiWt+Ht9uEyQ+pdw3BRLjPb1dJ0hMpzxgPgixjPKe3c7vPsSO+VJeKPgIYns8u91QiMUVp7xRLxNinTy5XdEkiLWnvDIEYnesHtxuNsRmUJ7xOQixHzy33fsZELkTSHnnvUSIvAjI43bW4BJh1WtUCysabCahpRDJbkR56RuIDc6rdn9rM2Du9osx+H/RZzdN/6V1cfpvZbIgMp/ylOkIRF7my/121kaj98dAyYvtQ8MtRPMgEvMu5a0KmRAZkMvtQvvvTYEjSVt/zIDIZ5TXJkPkiW8utgsdcAY5dMmH8lpQDEQ+zq125q77kHPNKe99C5F/5E67QiMewQUHyANY70GkcS60K/R7MlwSTp4gAiIr3N4uxNVy2EsewXwbQmkh7m3nG/karmpGnuEriPzs1naNr8Fl58hDBMRA6Kwb2xVYCA18SJ5iFERKu61d88fQQIyVPEXRTAgNc1M739+yoYWJ5Dk2QShK0k6rI2zaKEueow1EwtzRLjwa2jhBHsTnOYR+cEO7j9LgQNKJlb9+3aFZ7aphFWo07PrF+JXnUiDna/IkkyG0U/t2Q2DXrZkfVfAhMXOFiCX3IZIRQp4kHEKp/hq3M02BMtv+b0uRsoqDzuKfbSOPYnoIoZbatjPNhaJrg0uQI2XHPcP/6UOeZTaExkjbuSfd/lakiqXnMfy3pADyLJ0gtF/TdtOgYEM1Uq/umiwAWE4eJjANAslmDdsNhryTDcg57/0ZD7QjT3MYQjW0a/chZEX3MpHT8keeNZOnmQChCM3ahadBzrKCpBdtITRVq3ZFX0BGbEfSjwLZEDioUTvLMcg4Vpz05C4EXmrUbhJkzPIlXdkEoRBN2jW1QcL2E+nMGAjV0qJdvgeQyOhFetMTQj21aDdbJl0X0p1aEBqoQbvwbEOkoxAIzXS9neXvkPiI9CgeAmtcb/cNJAaTLt2AwH6X2wXFQmwZ6dMJCFx0ud1YiF32J33aAoEnrrYrlASR5NKkUwshEO9quwkQ+5b0aprL7UJqdf96+IRp034bO/DjVtXjIbLfZJR2cKpdSOffDkTDruT3SLfG5bhdhZGnbXBoBOnX2Jy1K/TLP6DGwwDi/zuBKovToYLkl0F+vqu6FWpdM9H/49fZYkuyodrH9H/4/Z3PT0lQ77GF/hd/rih7Bs74hf4Xf57tlwxnZBYmKWN+j+K/BM7ZSvqWoPr7uyKn4KRupGshEJqh2K7MAzjptS/pWm21v1dUfQ5nLSZ96wmhHgrtKsbBaZ1IyoC/z4Y9hV0x966cvHIrCf8swY/0bROE3pVt9+4NKMm+Mrl39QD6b0H1vlr0QHQxUspQ51HMB6Hg6JchJFY68nAmAHQmecY6BzUZst7Oep/kBX+w+o3uH7Lt1Jy/6wQ5WZP/Rnb4ViKdm6ji3GfROMg4WoUMTs15402QSo80kcGpOefeHVIPapPhqbhfEfAAEicLE5sDodHSdsMhcSiQmOmRw/tkwfEQO8zp1N1jHA+xqCBiRFMc3p/N9woiCaWJydzb/l7S7nuI9SCmbl5AFEQWElM3p6I+RGJDiMnNRxkqaTcDIhHEVM3lkT4hXvchJjcP6gyJ29WByKfEVM4hGy17RIJZVMy/OwihicRUzl20pMgNZGLW+47nfVaH0GViaufMfgyhv4jJXlz6WNruN7m1EWyqmrna6yAUTIyooqp57mchEEOMyHRU1R6BexA4SozoW4gNIpl2SRBYToxCVe5NgdBsYjL7er4nFe1+JzYUYretatqN43Tq95NBaBoZXWH1e/EyjHUEVtN9jC8gsIV/VpQYRwrtrkLgOhnbd5C46qfUbi8EMiykf1rtPZ4LocpkYOGpkJhMiu36Q+gH0j+t9ry3gtBWMqyqryCRWpGU2xWGUII/GVT9OEh9RXba0S0I9SVjap4AqZVkt90iCO0hQ+qWCqkrgfbb9YFQdhkyoAE2SL0KI/vtgrMgtJQMx3cuZGS0JAftaC+EssqQkSgvG+pHDtt9DpGdZCzNoiFnDDluVyAFIt3JQHwn2CBnCaloR4sh8qwQGUa5c5C1yqyqXXWI7fMhY7AMSYWs7b6kqh3th9gYMoS6l6GQzkoq2zWFxCekf0UXZ0PeZiupbUd7IZbVhXQuYFgSFCw3k/p2NWwQy/xY3+UiX0DJTBM50Y7mQWqkifQqaKByOdsAIqfahURDanch0qWwKYlQlNqNnGxHPSDjWUfSHWuv/dlQ9rQ2Od2OlkHOtpKkJ+aW817CnkNFKAft8t2BnLfz3iedKNBtQSzs+81MOWlHVZIhK2tdB4v3d2s77kgmHIjtRJSzdtTdBgWx8/sWJS9lCWs/eGWUDY7tKEI5bkeRsOPBvukDvvygm9eIiPh+zMzVhx9mQZ3kb0zkQjv6HYa1M5QoJ+04XnQfIlfb0VgYUMbkYNKgHX1rg9FsLUOkSTtq9waGcqQpkVbtqPQVGMeZFkQatiP/aTCIPa2JtG1H1Pwu9C9tUSUi7duR//i30LeoyEJEmrSTCl2aBd16vTCcpDRrR1R+eYY+wy1u50ukbTup4uOfQl+yL05sbCEp7dsRmdstfg2dyDw3tXcRktKsnZSlyaTjafBuiSfmftcokKQ0bydlrfnpb2vP3E2AN4mPf3LpwNpZg3vXK0IakLRzHuN23I7bcTsvxe24HbfjdozbcTtux+0Yt+N23I7bcTvG7bgdt+N2jNtxO27H7bgd43bcjttxO8btuB2343bcjnE7bsftuB3jdtyO23E7bse4HbfjdtyOcTtux+24Hft3yKUWIAFPr/kAAAAASUVORK5CYII="},b5fa:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var c=a("83fc"),r=a("2b20");class s{async getAllProfiles(){const e=await r["a"].get("api/profiles");c["a"].profiles=e.data}async getProfileById(e){const t=await r["a"].get("api/profiles/"+e);c["a"].activeProfile=t.data}async editProfile(e){await r["a"].put("api/profiles/"+e.id,e),this.getProfileById(e.id)}}const o=new s},b967:function(e,t,a){var c={"./01d.png":"8114","./01n.png":"9457","./02d.png":"25e7","./02n.png":"721f","./03d.png":"aec1","./04d.png":"55ca","./09d.png":"5398","./10d.png":"26c3","./10n.png":"e63b","./11d.png":"7115","./13d.png":"d4dd","./EcoLogo3.png":"fd80","./carbonfootprintlogo2.png":"5c00","./cw-logo.png":"c974"};function r(e){var t=s(e);return a(t)}function s(e){if(!a.o(c,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return c[e]}r.keys=function(){return Object.keys(c)},r.resolve=s,e.exports=r,r.id="b967"},c11a:function(e,t,a){},d4dd:function(e,t,a){e.exports=a.p+"img/13d.e03e5b7b.png"},e63b:function(e,t,a){e.exports=a.p+"img/10n.21332029.png"},f8b0:function(e,t,a){"use strict";a("c11a")},fd80:function(e,t,a){e.exports=a.p+"img/EcoLogo3.03c175d5.png"}}]);