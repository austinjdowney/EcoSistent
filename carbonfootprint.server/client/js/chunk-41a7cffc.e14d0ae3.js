(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-41a7cffc"],{"1a3e":function(e,t,a){"use strict";a.r(t);var c=a("7a23");const s=Object(c["I"])("data-v-2e2314a0");Object(c["u"])("data-v-2e2314a0");const r={key:0},o={key:1,class:"profile-page container-fluid"},i={key:0,class:"row"},n={class:"col-12"},d={class:"profile__title text-center"},l={class:"mb-0"},b=Object(c["h"])("small",null,"Kg/CO₂",-1),u=Object(c["h"])("small",null,"Most Recent Score",-1),y=Object(c["h"])("div",{class:"col-12"},[Object(c["h"])("div",{class:"graph pb-0"},[Object(c["h"])("div",{class:"graph__data"},[Object(c["h"])("canvas",{id:"myChart"})])])],-1),O={class:"row"},j={class:"graph__text col-12 d-flex justify-content-around align-items-center mb-2"},h={key:0,class:"mb-0"},f={key:1,class:"mt-3"},w={key:2,class:"mt-3"},g={key:3,title:"Open Create Day Form",type:"button",class:"btn btn-grad btn-lg","data-toggle":"modal","data-target":"#new-day-form"},p={class:"row"},m={class:"col-12"},v={class:"profile profile-container component-spacing"},C={class:"profile__user-info"},P={key:0,class:"profile__user-info--name"},D={class:"profile__details mt-3"},H={class:"profile__details--header d-flex justify-content-between"},_=Object(c["h"])("h5",null,[Object(c["h"])("i",{class:"fa fa-home mr-2","aria-hidden":"true"}),Object(c["g"])("House Details")],-1),k={key:0,title:"Open Create House Form",type:"button",class:"btn btn-grad btn-sm","data-toggle":"modal","data-target":"#new-house-form"},A={key:1,class:"btn btn-sm btn-grad btn-shadow","data-toggle":"modal","data-target":"#edit-house-form"},I={key:0,class:"profile__details--house mt-2 ml-3 d-flex flex-column"},B={class:""},E={class:"list"},S={class:"profile__details--car"},x={class:"profile__details--car-header d-flex justify-content-between"},M=Object(c["h"])("h5",null,[Object(c["h"])("i",{class:"fa fa-car mr-2","aria-hidden":"true"}),Object(c["g"])("Car Details")],-1),Y={key:0,title:"Open Create Car Form",type:"button",class:"btn btn-sm btn-grad","data-toggle":"modal","data-target":"#new-car-form"};Object(c["s"])();const F=s((e,t,a,s,F,R)=>{const K=Object(c["y"])("Car"),G=Object(c["y"])("CreateCarModal"),J=Object(c["y"])("CreateHouseModal"),W=Object(c["y"])("CreateDayModal"),$=Object(c["y"])("EditHouseModal");return!0!==s.state.loading||s.state.activeProfile?(Object(c["r"])(),Object(c["d"])("div",o,[s.state.todayScore?(Object(c["r"])(),Object(c["d"])("div",i,[Object(c["h"])("div",n,[Object(c["h"])("div",d,[Object(c["h"])("h1",l,[Object(c["g"])(Object(c["A"])(s.state.todayScore.dailyScore),1),b]),u])]),y])):Object(c["e"])("",!0),Object(c["h"])("div",O,[Object(c["h"])("div",j,[s.state.days.length>0?(Object(c["r"])(),Object(c["d"])("h6",h," Your Scores for the Week ")):s.state.house.length>0&&s.state.cars.length>0?(Object(c["r"])(),Object(c["d"])("h6",f," Add your daily emissions data ")):(Object(c["r"])(),Object(c["d"])("h6",w," Register your house info and car details to begin ")),s.state.account.id===s.route.params.id&&s.state.house.length>0&&s.state.cars.length>0?(Object(c["r"])(),Object(c["d"])("button",g," Add Day ")):Object(c["e"])("",!0)])]),Object(c["h"])("div",p,[Object(c["h"])("div",m,[Object(c["h"])("div",v,[Object(c["h"])("div",C,[s.state.activeProfile?(Object(c["r"])(),Object(c["d"])("h4",P,Object(c["A"])(s.state.activeProfile.name),1)):Object(c["e"])("",!0)]),Object(c["h"])("div",D,[Object(c["h"])("div",H,[_,0===s.state.house.length&&s.state.account.id===s.route.params.id?(Object(c["r"])(),Object(c["d"])("button",k," House ")):Object(c["e"])("",!0),s.state.account.id===s.route.params.id&&0!==s.state.house.length?(Object(c["r"])(),Object(c["d"])("button",A," Edit House ")):Object(c["e"])("",!0)]),s.state.house.length>0?(Object(c["r"])(),Object(c["d"])("div",I,[Object(c["h"])("strong",B,Object(c["A"])(s.state.house[0].title),1),Object(c["h"])("ul",E,[Object(c["h"])("li",null,"Monthly EKwh: "+Object(c["A"])(s.state.house[0].electricKwh),1),Object(c["h"])("li",null,"Monthly Gallons: "+Object(c["A"])(s.state.house[0].waterGallons),1)])])):Object(c["e"])("",!0),Object(c["h"])("div",S,[Object(c["h"])("div",x,[M,s.state.account.id===s.route.params.id?(Object(c["r"])(),Object(c["d"])("button",Y," Add Car ")):Object(c["e"])("",!0)]),(Object(c["r"])(!0),Object(c["d"])(c["a"],null,Object(c["x"])(s.state.cars,e=>(Object(c["r"])(),Object(c["d"])(K,{key:e.id,car:e},null,8,["car"]))),128))])])]),Object(c["h"])(G),Object(c["h"])(J),Object(c["h"])(W),Object(c["h"])($)])])])):(Object(c["r"])(),Object(c["d"])("div",r," Loading... "))});var R=a("83fc"),K=a("6c02"),G=a("5d40"),J=a("b5fa"),W=a("fe27"),$=a("0cb0"),L=a("8246"),T=a("9b4a");async function Z(){const e=document.getElementById("myChart").getContext("2d"),t=await q(),a=await z(),c="#08A045",s="#27D36C",r=new T["a"](e,{type:"bar",data:{labels:t,datasets:[{label:"Daily Score",data:a,backgroundColor:s,borderColor:c,borderRadius:5,borderWidth:2,cutout:45}],options:{scales:{y:{beginAtZero:!0}}}}});return r}async function q(){let e=await L["a"].getDaysByProfileId(R["a"].activeProfile.id);e.length>=7&&(e=e.splice(0,7));const t=e.map(e=>e.date.slice(5,10));return t}async function z(){let e=await L["a"].getDaysByProfileId(R["a"].activeProfile.id);e.length>=7&&(e=e.splice(0,7));const t=e.map(e=>e.dailyScore);return t}T["a"].register(...T["c"]);var N={name:"ProfilePage",props:{},setup(){const e=Object(K["c"])();Object(c["F"])(async()=>{e.params.id&&(await J["a"].getProfileById(e.params.id),await W["a"].getCarsByProfileId(e.params.id),await $["a"].getHousesByProfileId(e.params.id),await L["a"].getDaysByProfileId(e.params.id),setTimeout(Z,100),t.loading=!1)});const t=Object(c["v"])({loading:!0,newCar:{},newHouse:{},newDay:{},activeDay:{},days:Object(c["b"])(()=>R["a"].days.splice(0,7)),todayScore:Object(c["b"])(()=>t.days[0]),house:Object(c["b"])(()=>R["a"].house),cars:Object(c["b"])(()=>R["a"].cars),activeProfile:Object(c["b"])(()=>R["a"].activeProfile),user:Object(c["b"])(()=>R["a"].user),account:Object(c["b"])(()=>R["a"].account)});return Object(c["p"])(async()=>{await J["a"].getProfileById(e.params.id),await W["a"].getCarsByProfileId(e.params.id),await $["a"].getHousesByProfileId(e.params.id),await L["a"].getDaysByProfileId(e.params.id),t.loading=!1}),{route:e,state:t,async createCar(){try{t.newCar.activeProfile=e.params.id,await W["a"].createCar(t.newCar),t.newCar={},G["a"].toast("Successfully Created Car","success")}catch(a){G["a"].toast("Error: "+a,"warning")}},async editCar(){try{await G["a"].confirmAction("Are you sure?","You won't be able to revert this!","warning","Yes, Edit Car")&&(t.newCar.id=t.activeCar.id),await W["a"].editCar(t.newCar),t.newCar={}}catch(e){G["a"].toast("Error: "+e,"warning")}},async createHouse(){try{t.newHouse.activeProfile=e.params.id,await $["a"].createHouse(t.newHouse),t.newHouse={},G["a"].toast("Successfully Created House","success")}catch(a){G["a"].toast("Error: "+a,"warning")}},async editHouse(){try{await G["a"].confirmAction("Are you sure?","You won't be able to revert this!","warning","Yes, Edit House")&&(t.newHouse.id=t.activeHouse.id),await $["a"].editHouse(t.newHouse),t.newHouse={}}catch(e){G["a"].toast("Error: "+e,"warning")}},async createDay(){try{t.newDay.activeProfile=e.params.id,await L["a"].createDay(t.newDay),t.newDay={},this.$router.go(this.$router.currentRoute),G["a"].toast("Successfully Created Day","success")}catch(a){G["a"].toast("Error: "+a,"warning")}},async editDay(){try{await G["a"].confirmAction("Are you sure?","You won't be able to revert this!","warning","Yes, Edit Day")&&(t.newDay.id=t.activeDay.id),await L["a"].editDay(t.newDay),t.newDay={}}catch(e){G["a"].toast("Error: "+e,"warning")}}}}};a("d908");N.render=F,N.__scopeId="data-v-2e2314a0";t["default"]=N},b5fa:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var c=a("83fc"),s=a("2b20");class r{async getAllProfiles(){const e=await s["a"].get("api/profiles");c["a"].profiles=e.data}async getProfileById(e){const t=await s["a"].get("api/profiles/"+e);c["a"].activeProfile=t.data}async editProfile(e){await s["a"].put("api/profiles/"+e.id,e),this.getProfileById(e.id)}}const o=new r},bdcd:function(e,t,a){},d908:function(e,t,a){"use strict";a("bdcd")}}]);