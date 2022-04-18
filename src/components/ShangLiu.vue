<template>
  <div class="shangliu-box">
    <div class="shangliu_out">
      <div class="shangliu">
        <div :class="{kaishi:true,kaishi_normal:if_right,kaishi_active:!if_right}" @click="kaishi_click">
          <div class="kaishi_bg"></div>
          <div ref="all_dong" class="kaishi_main">
            <div :class="{kaishi_kuai:true,kaishi_kuai_normal:if_right,kaishi_kuai_active:!if_right}"></div>
            <div :class="{kaishi_logo:true,kaishi_logo_normal:if_right,kaishi_logo_active:!if_right}"></div>
            <div class="kaishi_start"></div>
            <div :class="{bg_text:true,bg_text_3:true,bg_text_normal:if_right,bg_text_active:!if_right}">
              <h1 class="text_inner1">白上フブキ</h1>
              <h1 class="text_inner2">白上吹雪</h1>
              <h1 class="text_inner3">Shirakami Fubuki</h1>
              <h1 class="text_inner4"><span>F</span>BK</h1>
              <div class="text_inner5"><h1>F</h1>
                <h1>B</h1>
                <h1>K</h1></div>
              <div class="text_inner6"></div>
            </div>
          </div>
        </div>
        <div :class="{left:true,left_normal:if_right,left_active:!if_right}">
          <div class="menu" @click="kaishi_click"><i aria-hidden="true" class="fa fa-bars"></i></div>
          <div class="scroll_tip_text"><h1>Scroll</h1></div>
          <div class="scroll_tip"><i aria-hidden="true" class="fa fa-long-arrow-down"></i></div>
        </div>
        <div :class="{text:true,text_normal:if_right,text_active:!if_right}">
          <div ref="yidong1" class="yidong">
            <div ref="scsroll_home_11"
                 :class="{tu_vtuber:true,tu_vtuber_7:true,tu_vtuber_active_1:if_vtuber_active===1,tu_vtuber_normal_1:if_vtuber_active!==1}">
              <swiper ref="scroll_home" class="swiper swiper-no-swiping scroll_home"
                      v-bind:options="Home_Option">
                <swiper-slide>
                  <div class="home_son">
                    <h1 :class="{text_title:true,text_title_1:true,text_title_normal:text_jilu_1!==1,text_title_active:text_jilu_1===1}">
                      Red Contacts</h1>
                    <h2 :class="{text_text:true,text_text_1:true,text_text_normal:text_jilu_1!==1,text_text_active:text_jilu_1===1}">
                      美瞳是增大眼睛必备神器，原本红色美瞳只要100，但这是二次元美瞳所以要一万，有了美瞳你就可以尽情的照骗，gkd买了吧</h2>
                    <div
                        :class="{text_image:true,text_image_1:true,text_image_normal:text_jilu_1!==1,text_image_active:text_jilu_1===1}"></div>
                    <div
                        :class="{text_button:true,text_button_1:true,text_button_normal:text_jilu_1!==1,text_button_active:text_jilu_1===1}">
                      <h1>Order ￥10K</h1></div>
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div class="home_son">
                    <h1 :class="{text_title:true,text_title_1:true,text_title_normal:text_jilu_1!==2,text_title_active:text_jilu_1===2}">
                      Water Shirt</h1>
                    <h2 :class="{text_text:true,text_text_1:true,text_text_normal:text_jilu_1!==2,text_text_active:text_jilu_1===2}">
                      美瞳是增大眼睛必备神器，原本红色美瞳只要100，但这是二次元美瞳所以要一万，有了美瞳你就可以尽情的照骗，gkd买了吧</h2>
                    <div
                        :class="{text_image:true,text_image_2:true,text_image_normal:text_jilu_1!==2,text_image_active:text_jilu_1===2}"></div>
                    <div
                        :class="{text_button:true,text_button_1:true,text_button_normal:text_jilu_1!==2,text_button_active:text_jilu_1===2}">
                      <h1>Order ￥15K</h1></div>
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div class="home_son">
                    <h1 :class="{text_title:true,text_title_1:true,text_title_normal:text_jilu_1!==3,text_title_active:text_jilu_1===3}">
                      Black Leggings</h1>
                    <h2 :class="{text_text:true,text_text_1:true,text_text_normal:text_jilu_1!==3,text_text_active:text_jilu_1===3}">
                      美瞳是增大眼睛必备神器，原本红色美瞳只要100，但这是二次元美瞳所以要一万，有了美瞳你就可以尽情的照骗，gkd买了吧</h2>
                    <div
                        :class="{text_image:true,text_image_3:true,text_image_normal:text_jilu_1!==3,text_image_active:text_jilu_1===3}"></div>
                    <div
                        :class="{text_button:true,text_button_1:true,text_button_normal:text_jilu_1!==3,text_button_active:text_jilu_1===3}">
                      <h1>Order ￥8K</h1></div>
                  </div>
                </swiper-slide>
                <div slot="scrollbar" class="swiper-scrollbar scrollbar1"></div>
              </swiper>
            </div>
            <div ref="scsroll_home_12"
                 :class="{tu_vtuber:true,tu_vtuber_8:true,tu_vtuber_active_1:if_vtuber_active===2,tu_vtuber_normal_1:if_vtuber_active!==2}">
              <swiper ref="scroll_home2" class="swiper swiper-no-swiping scroll_home"
                      v-bind:options="Home_Option">
                <swiper-slide>
                  <div class="home_son">
                    <h1 :class="{text_title:true,text_title_2:true,text_title_normal:text_jilu_2!==1,text_title_active:text_jilu_2===1}">
                      Black Cap</h1>
                    <h2 :class="{text_text:true,text_text_2:true,text_text_normal:text_jilu_2!==1,text_text_active:text_jilu_2===1}">
                      美瞳是增大眼睛必备神器，原本红色美瞳只要100，但这是二次元美瞳所以要一万，有了美瞳你就可以尽情的照骗，gkd买了吧</h2>
                    <div
                        :class="{text_image:true,text_image_4:true,text_image_normal:text_jilu_2!==1,text_image_active:text_jilu_2===1}"></div>
                    <div
                        :class="{text_button:true,text_button_2:true,text_button_normal:text_jilu_2!==1,text_button_active:text_jilu_2===1}">
                      <h1>Order ￥10K</h1></div>
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div class="home_son">
                    <h1 :class="{text_title:true,text_title_2:true,text_title_normal:text_jilu_2!==2,text_title_active:text_jilu_2===2}">
                      Black Jacket</h1>
                    <h2 :class="{text_text:true,text_text_2:true,text_text_normal:text_jilu_2!==2,text_text_active:text_jilu_2===2}">
                      美瞳是增大眼睛必备神器，原本红色美瞳只要100，但这是二次元美瞳所以要一万，有了美瞳你就可以尽情的照骗，gkd买了吧</h2>
                    <div
                        :class="{text_image:true,text_image_5:true,text_image_normal:text_jilu_2!==2,text_image_active:text_jilu_2===2}"></div>
                    <div
                        :class="{text_button:true,text_button_2:true,text_button_normal:text_jilu_2!==2,text_button_active:text_jilu_2===2}">
                      <h1>Order ￥15K</h1></div>
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div class="home_son">
                    <h1 :class="{text_title:true,text_title_2:true,text_title_normal:text_jilu_2!==3,text_title_active:text_jilu_2===3}">
                      White Sneakers</h1>
                    <h2 :class="{text_text:true,text_text_2:true,text_text_normal:text_jilu_2!==3,text_text_active:text_jilu_2===3}">
                      美瞳是增大眼睛必备神器，原本红色美瞳只要100，但这是二次元美瞳所以要一万，有了美瞳你就可以尽情的照骗，gkd买了吧</h2>
                    <div
                        :class="{text_image:true,text_image_6:true,text_image_normal:text_jilu_2!==3,text_image_active:text_jilu_2===3}"></div>
                    <div
                        :class="{text_button:true,text_button_2:true,text_button_normal:text_jilu_2!==3,text_button_active:text_jilu_2===3}">
                      <h1>Order ￥8K</h1></div>
                  </div>
                </swiper-slide>
                <div slot="scrollbar" class="swiper-scrollbar scrollbar2"></div>
              </swiper>
            </div>
            <div ref="scsroll_home_13"
                 :class="{tu_vtuber:true,tu_vtuber_9:true,tu_vtuber_active_1:if_vtuber_active===3,tu_vtuber_normal_1:if_vtuber_active!==3}">
              <swiper ref="scroll_home3" class="swiper swiper-no-swiping scroll_home"
                      v-bind:options="Home_Option">
                <swiper-slide>
                  <div class="home_son">
                    <h1 :class="{text_title:true,text_title_3:true,text_title_normal:text_jilu_3!==1,text_title_active:text_jilu_3===1}">
                      Debu Headdress</h1>
                    <h2 :class="{text_text:true,text_text_3:true,text_text_normal:text_jilu_3!==1,text_text_active:text_jilu_3===1}">
                      美瞳是增大眼睛必备神器，原本红色美瞳只要100，但这是二次元美瞳所以要一万，有了美瞳你就可以尽情的照骗，gkd买了吧</h2>
                    <div
                        :class="{text_image:true,text_image_7:true,text_image_normal:text_jilu_3!==1,text_image_active:text_jilu_3===1}"></div>
                    <div
                        :class="{text_button:true,text_button_3:true,text_button_normal:text_jilu_3!==1,text_button_active:text_jilu_3===1}">
                      <h1>Order ￥10K</h1></div>
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div class="home_son">
                    <h1 :class="{text_title:true,text_title_3:true,text_title_normal:text_jilu_3!==2,text_title_active:text_jilu_3===2}">
                      Debu Bag</h1>
                    <h2 :class="{text_text:true,text_text_3:true,text_text_normal:text_jilu_3!==2,text_text_active:text_jilu_3===2}">
                      美瞳是增大眼睛必备神器，原本红色美瞳只要100，但这是二次元美瞳所以要一万，有了美瞳你就可以尽情的照骗，gkd买了吧</h2>
                    <div
                        :class="{text_image:true,text_image_8:true,text_image_normal:text_jilu_3!==2,text_image_active:text_jilu_3===2}"></div>
                    <div
                        :class="{text_button:true,text_button_3:true,text_button_normal:text_jilu_3!==2,text_button_active:text_jilu_3===2}">
                      <h1>Order ￥15K</h1></div>
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div class="home_son">
                    <h1 :class="{text_title:true,text_title_3:true,text_title_normal:text_jilu_3!==3,text_title_active:text_jilu_3===3}">
                      Debu T-Shirt</h1>
                    <h2 :class="{text_text:true,text_text_3:true,text_text_normal:text_jilu_3!==3,text_text_active:text_jilu_3===3}">
                      美瞳是增大眼睛必备神器，原本红色美瞳只要100，但这是二次元美瞳所以要一万，有了美瞳你就可以尽情的照骗，gkd买了吧</h2>
                    <div
                        :class="{text_image:true,text_image_9:true,text_image_normal:text_jilu_3!==3,text_image_active:text_jilu_3===3}"></div>
                    <div
                        :class="{text_button:true,text_button_3:true,text_button_normal:text_jilu_3!==3,text_button_active:text_jilu_3===3}">
                      <h1>Order ￥8K</h1></div>
                  </div>
                </swiper-slide>
                <div slot="scrollbar" class="swiper-scrollbar scrollbar3"></div>
              </swiper>
            </div>
            <div ref="scsroll_home_14"
                 :class="{tu_vtuber:true,tu_vtuber_10:true,tu_vtuber_active_1:if_vtuber_active===4,tu_vtuber_normal_1:if_vtuber_active!==4}">
              <swiper ref="scroll_home4" class="swiper swiper-no-swiping scroll_home"
                      v-bind:options="Home_Option">
                <swiper-slide>
                  <div class="home_son">
                    <h1 :class="{text_title:true,text_title_4:true,text_title_normal:text_jilu_4!==1,text_title_active:text_jilu_4===1}">
                      Santa Hats</h1>
                    <h2 :class="{text_text:true,text_text_4:true,text_text_normal:text_jilu_4!==1,text_text_active:text_jilu_4===1}">
                      美瞳是增大眼睛必备神器，原本红色美瞳只要100，但这是二次元美瞳所以要一万，有了美瞳你就可以尽情的照骗，gkd买了吧</h2>
                    <div
                        :class="{text_image:true,text_image_10:true,text_image_normal:text_jilu_4!==1,text_image_active:text_jilu_4===1}"></div>
                    <div
                        :class="{text_button:true,text_button_4:true,text_button_normal:text_jilu_4!==1,text_button_active:text_jilu_4===1}">
                      <h1>Order ￥10K</h1></div>
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div class="home_son">
                    <h1 :class="{text_title:true,text_title_4:true,text_title_normal:text_jilu_4!==2,text_title_active:text_jilu_4===2}">
                      Onion WIG</h1>
                    <h2 :class="{text_text:true,text_text_4:true,text_text_normal:text_jilu_4!==2,text_text_active:text_jilu_4===2}">
                      美瞳是增大眼睛必备神器，原本红色美瞳只要100，但这是二次元美瞳所以要一万，有了美瞳你就可以尽情的照骗，gkd买了吧</h2>
                    <div
                        :class="{text_image:true,text_image_11:true,text_image_normal:text_jilu_4!==2,text_image_active:text_jilu_4===2}"></div>
                    <div
                        :class="{text_button:true,text_button_4:true,text_button_normal:text_jilu_4!==2,text_button_active:text_jilu_4===2}">
                      <h1>Order ￥15K</h1></div>
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div class="home_son">
                    <h1 :class="{text_title:true,text_title_4:true,text_title_normal:text_jilu_4!==3,text_title_active:text_jilu_4===3}">
                      Christmas</h1>
                    <h2 :class="{text_text:true,text_text_4:true,text_text_normal:text_jilu_4!==3,text_text_active:text_jilu_4===3}">
                      美瞳是增大眼睛必备神器，原本红色美瞳只要100，但这是二次元美瞳所以要一万，有了美瞳你就可以尽情的照骗，gkd买了吧</h2>
                    <div
                        :class="{text_image:true,text_image_12:true,text_image_normal:text_jilu_4!==3,text_image_active:text_jilu_4===3}"></div>
                    <div
                        :class="{text_button:true,text_button_4:true,text_button_normal:text_jilu_4!==3,text_button_active:text_jilu_4===3}">
                      <h1>Order ￥8K</h1></div>
                  </div>
                </swiper-slide>
                <div slot="scrollbar" class="swiper-scrollbar scrollbar4"></div>
              </swiper>
            </div>
            <div ref="scsroll_home_15"
                 :class="{tu_vtuber:true,tu_vtuber_11:true,tu_vtuber_active_1:if_vtuber_active===5,tu_vtuber_normal_1:if_vtuber_active!==5}">
              <swiper ref="scroll_home5" class="swiper swiper-no-swiping scroll_home"
                      v-bind:options="Home_Option">
                <swiper-slide>
                  <div class="home_son">
                    <h1 :class="{text_title:true,text_title_5:true,text_title_normal:text_jilu_5!==1,text_title_active:text_jilu_5===1}">
                      Aqua T-Shirt</h1>
                    <h2 :class="{text_text:true,text_text_5:true,text_text_normal:text_jilu_5!==1,text_text_active:text_jilu_5===1}">
                      美瞳是增大眼睛必备神器，原本红色美瞳只要100，但这是二次元美瞳所以要一万，有了美瞳你就可以尽情的照骗，gkd买了吧</h2>
                    <div
                        :class="{text_image:true,text_image_13:true,text_image_normal:text_jilu_5!==1,text_image_active:text_jilu_5===1}"></div>
                    <div
                        :class="{text_button:true,text_button_5:true,text_button_normal:text_jilu_5!==1,text_button_active:text_jilu_5===1}">
                      <h1>Order ￥10K</h1></div>
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div class="home_son">
                    <h1 :class="{text_title:true,text_title_5:true,text_title_normal:text_jilu_5!==2,text_title_active:text_jilu_5===2}">
                      Navy Hat</h1>
                    <h2 :class="{text_text:true,text_text_5:true,text_text_normal:text_jilu_5!==2,text_text_active:text_jilu_5===2}">
                      美瞳是增大眼睛必备神器，原本红色美瞳只要100，但这是二次元美瞳所以要一万，有了美瞳你就可以尽情的照骗，gkd买了吧</h2>
                    <div
                        :class="{text_image:true,text_image_14:true,text_image_normal:text_jilu_5!==2,text_image_active:text_jilu_5===2}"></div>
                    <div
                        :class="{text_button:true,text_button_5:true,text_button_normal:text_jilu_5!==2,text_button_active:text_jilu_5===2}">
                      <h1>Order ￥15K</h1></div>
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div class="home_son">
                    <h1 :class="{text_title:true,text_title_5:true,text_title_normal:text_jilu_5!==3,text_title_active:text_jilu_5===3}">
                      Red-rimmed</h1>
                    <h2 :class="{text_text:true,text_text_5:true,text_text_normal:text_jilu_5!==3,text_text_active:text_jilu_5===3}">
                      美瞳是增大眼睛必备神器，原本红色美瞳只要100，但这是二次元美瞳所以要一万，有了美瞳你就可以尽情的照骗，gkd买了吧</h2>
                    <div
                        :class="{text_image:true,text_image_15:true,text_image_normal:text_jilu_5!==3,text_image_active:text_jilu_5===3}"></div>
                    <div
                        :class="{text_button:true,text_button_5:true,text_button_normal:text_jilu_5!==3,text_button_active:text_jilu_5===3}">
                      <h1>Order ￥8K</h1></div>
                  </div>
                </swiper-slide>
                <div slot="scrollbar" class="swiper-scrollbar scrollbar5"></div>
              </swiper>
            </div>
            <div ref="scsroll_home_16"
                 :class="{tu_vtuber:true,tu_vtuber_12:true,tu_vtuber_active_1:if_vtuber_active===6,tu_vtuber_normal_1:if_vtuber_active!==6}">
              <swiper ref="scroll_home6" class="swiper swiper-no-swiping scroll_home"
                      v-bind:options="Home_Option">
                <swiper-slide>
                  <div class="home_son">
                    <h1 :class="{text_title:true,text_title_6:true,text_title_normal:text_jilu_6!==1,text_title_active:text_jilu_6===1}">
                      Black Hat</h1>
                    <h2 :class="{text_text:true,text_text_6:true,text_text_normal:text_jilu_6!==1,text_text_active:text_jilu_6===1}">
                      美瞳是增大眼睛必备神器，原本红色美瞳只要100，但这是二次元美瞳所以要一万，有了美瞳你就可以尽情的照骗，gkd买了吧</h2>
                    <div
                        :class="{text_image:true,text_image_16:true,text_image_normal:text_jilu_6!==1,text_image_active:text_jilu_6===1}"></div>
                    <div
                        :class="{text_button:true,text_button_6:true,text_button_normal:text_jilu_6!==1,text_button_active:text_jilu_6===1}">
                      <h1>Order ￥10K</h1></div>
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div class="home_son">
                    <h1 :class="{text_title:true,text_title_6:true,text_title_normal:text_jilu_6!==2,text_title_active:text_jilu_6===2}">
                      Colorful Bow</h1>
                    <h2 :class="{text_text:true,text_text_6:true,text_text_normal:text_jilu_6!==2,text_text_active:text_jilu_6===2}">
                      美瞳是增大眼睛必备神器，原本红色美瞳只要100，但这是二次元美瞳所以要一万，有了美瞳你就可以尽情的照骗，gkd买了吧</h2>
                    <div
                        :class="{text_image:true,text_image_17:true,text_image_normal:text_jilu_6!==2,text_image_active:text_jilu_6===2}"></div>
                    <div
                        :class="{text_button:true,text_button_6:true,text_button_normal:text_jilu_6!==2,text_button_active:text_jilu_6===2}">
                      <h1>Order ￥15K</h1></div>
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div class="home_son">
                    <h1 :class="{text_title:true,text_title_6:true,text_title_normal:text_jilu_6!==3,text_title_active:text_jilu_6===3}">
                      Color Ring</h1>
                    <h2 :class="{text_text:true,text_text_6:true,text_text_normal:text_jilu_6!==3,text_text_active:text_jilu_6===3}">
                      美瞳是增大眼睛必备神器，原本红色美瞳只要100，但这是二次元美瞳所以要一万，有了美瞳你就可以尽情的照骗，gkd买了吧</h2>
                    <div
                        :class="{text_image:true,text_image_18:true,text_image_normal:text_jilu_6!==3,text_image_active:text_jilu_6===3}"></div>
                    <div
                        :class="{text_button:true,text_button_6:true,text_button_normal:text_jilu_6!==3,text_button_active:text_jilu_6===3}">
                      <h1>Order ￥8K</h1></div>
                  </div>
                </swiper-slide>
                <div slot="scrollbar" class="swiper-scrollbar scrollbar6"></div>
              </swiper>
            </div>
          </div>
        </div>
        <div ref="image" :class="{image:true,image_normal:if_right,image_active:!if_right}">
          <div ref="yidong" class="yidong">
            <div
                :class="{tu_vtuber:true,tu_vtuber_2:true,tu_vtuber_active:if_vtuber_active===1,tu_vtuber_normal:if_vtuber_active!==1}"></div>
            <div
                :class="{tu_vtuber:true,tu_vtuber_1:true,tu_vtuber_active:if_vtuber_active===2,tu_vtuber_normal:if_vtuber_active!==2}"></div>
            <div
                :class="{tu_vtuber:true,tu_vtuber_3:true,tu_vtuber_active:if_vtuber_active===3,tu_vtuber_normal:if_vtuber_active!==3}"></div>
            <div
                :class="{tu_vtuber:true,tu_vtuber_4:true,tu_vtuber_active:if_vtuber_active===4,tu_vtuber_normal:if_vtuber_active!==4}"></div>
            <div
                :class="{tu_vtuber:true,tu_vtuber_5:true,tu_vtuber_active:if_vtuber_active===5,tu_vtuber_normal:if_vtuber_active!==5}"></div>
            <div
                :class="{tu_vtuber:true,tu_vtuber_6:true,tu_vtuber_active:if_vtuber_active===6,tu_vtuber_normal:if_vtuber_active!==6}"></div>
          </div>
        </div>
        <div :class="{right:true,right_normal:if_right,right_active:!if_right}">
          <div class="bell"><i aria-hidden="true" class="fa fa-bell-o"></i>
            <h1>3</h1></div>
          <div :class="{search:true,search_normal:if_search,search_active:!if_search}">
            <i aria-hidden="true" class="fa fa-search" @click="search_click"></i>
            <input>
          </div>
          <div class="right_text"><h1>Vtuber Fashion Wear</h1></div>
          <div class="next" @click="next_click"><i aria-hidden="true" class="fa fa-angle-right"></i></div>
          <div class="prev" @click="prev_click"><i aria-hidden="true" class="fa fa-angle-left"></i></div>
        </div>
        <div :class="{zhanshi:true,zhanshi_normal:if_right,zhanshi_active:!if_right}">
          <div class="zhanshi_big">
            <div class="zhanshi_small">
              <swiper class="parallax" v-bind:options="parallaxOption">
                <swiper-slide>
                  <div class="zhanshi_main zhanshi_main1">
                  </div>
                  <h1 data-swiper-parallax="-300">红色美瞳</h1></swiper-slide>
                <swiper-slide>
                  <div class="zhanshi_main zhanshi_main2">

                  </div>
                  <h1 data-swiper-parallax="-300">漆黑绑腿</h1></swiper-slide>
                <swiper-slide>
                  <div class="zhanshi_main zhanshi_main3">

                  </div>
                  <h1 data-swiper-parallax="-300">浸水的抹布</h1></swiper-slide>
              </swiper>
            </div>
            <div class="zhanshi_small">
              <swiper class="parallax" v-bind:options="parallaxOption">
                <swiper-slide>
                  <div class="zhanshi_main zhanshi_main4">

                  </div>
                  <h1 data-swiper-parallax="-300">白色球鞋</h1></swiper-slide>
                <swiper-slide>
                  <div class="zhanshi_main zhanshi_main5">

                  </div>
                  <h1 data-swiper-parallax="-300">黑色鸭嘴帽</h1></swiper-slide>
                <swiper-slide>
                  <div class="zhanshi_main zhanshi_main6">

                  </div>
                  <h1 data-swiper-parallax="-300">黑光外套</h1></swiper-slide>
              </swiper>
            </div>
          </div>
          <div class="zhanshi_big">
            <div class="zhanshi_small">
              <swiper class="parallax" v-bind:options="parallaxOption">
                <swiper-slide>
                  <div class="zhanshi_main zhanshi_main7">

                  </div>
                  <h1 data-swiper-parallax="-300">阿宅头饰</h1></swiper-slide>
                <swiper-slide>
                  <div class="zhanshi_main zhanshi_main8">

                  </div>
                  <h1 data-swiper-parallax="-300">阿宅购物袋</h1></swiper-slide>
                <swiper-slide>
                  <div class="zhanshi_main zhanshi_main9">

                  </div>
                  <h1 data-swiper-parallax="-300">阿宅T恤</h1></swiper-slide>
              </swiper>
            </div>
            <div class="zhanshi_small">
              <swiper class="parallax" v-bind:options="parallaxOption">
                <swiper-slide>
                  <div class="zhanshi_main zhanshi_main10">

                  </div>
                  <h1 data-swiper-parallax="-300">圣诞帽子</h1></swiper-slide>
                <swiper-slide>
                  <div class="zhanshi_main zhanshi_main11">

                  </div>
                  <h1 data-swiper-parallax="-300">洋葱假发</h1></swiper-slide>
                <swiper-slide>
                  <div class="zhanshi_main zhanshi_main12">

                  </div>
                  <h1 data-swiper-parallax="-300">圣诞衣服</h1></swiper-slide>
              </swiper>
            </div>
          </div>
          <div class="zhanshi_big">
            <div class="zhanshi_small">
              <swiper class="parallax" v-bind:options="parallaxOption">
                <swiper-slide>
                  <div class="zhanshi_main zhanshi_main13">

                  </div>
                  <h1 data-swiper-parallax="-300">阿夸T恤</h1></swiper-slide>
                <swiper-slide>
                  <div class="zhanshi_main zhanshi_main14">

                  </div>
                  <h1 data-swiper-parallax="-300">海军帽子</h1></swiper-slide>
                <swiper-slide>
                  <div class="zhanshi_main zhanshi_main15">

                  </div>
                  <h1 data-swiper-parallax="-300">红框眼镜</h1></swiper-slide>
              </swiper>
            </div>
            <div class="zhanshi_small">
              <swiper class="parallax" v-bind:options="parallaxOption">
                <swiper-slide>
                  <div class="zhanshi_main zhanshi_main16">

                  </div>
                  <h1 data-swiper-parallax="-300">黑白鸭嘴帽</h1></swiper-slide>
                <swiper-slide>
                  <div class="zhanshi_main zhanshi_main17">

                  </div>
                  <h1 data-swiper-parallax="-300">彩色蝴蝶结</h1></swiper-slide>
                <swiper-slide>
                  <div class="zhanshi_main zhanshi_main18">

                  </div>
                  <h1 data-swiper-parallax="-300">非主流戒指</h1></swiper-slide>
              </swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VanillaTilt from "vanilla-tilt";

export default {
  name: "",
  data() {
    return {
      if_search: true,
      if_right: true,
      if_vtuber_active: 1,
      limit_speed: true,
      text_jilu_1: 1,
      text_jilu_2: 1,
      text_jilu_3: 1,
      text_jilu_4: 1,
      text_jilu_5: 1,
      text_jilu_6: 1,
      parallaxOption: {
        speed: 1400,
        parallax: true,
        grabCursor: true,
        watchSlidesProgress: true,
        loop: true,
        autoplay: {
          delay: 12000,
          disableOnInteraction: false // 手动切换之后继续自动轮播
        },
      },
      Home_Option: {
        speed: 1400,
        direction: 'vertical',
        parallax: true,
        watchSlidesProgress: true,
        scrollbar: {
          el: '.swiper-scrollbar',
          hide: false,
          draggable: true,
        },
      },
    }
  }, methods: {
    handleScroll8(e) {
      if (this.limit_speed === true) {
        this.limit_speed = false;
        let direction = e.deltaY > 0 ? 'down' : 'up';
        if (direction === 'down') {
          this.$refs.scroll_home.swiper.slideNext();
          if (this.text_jilu_1 !== 3) {
            this.text_jilu_1 += 1;
          }
          setTimeout(() => {
            this.limit_speed = true;
          }, 1500);
          console.log(direction);
        } else if (direction === 'up') {
          this.$refs.scroll_home.swiper.slidePrev();
          if (this.text_jilu_1 !== 1) {
            this.text_jilu_1 -= 1;
          }
          console.log(direction);
          setTimeout(() => {
            this.limit_speed = true;
          }, 1500);
        }
      }
    },
    handleScroll2(e) {
      if (this.limit_speed === true) {
        this.limit_speed = false;
        let direction = e.deltaY > 0 ? 'down' : 'up';
        if (direction === 'down') {
          this.$refs.scroll_home2.swiper.slideNext();
          if (this.text_jilu_2 !== 3) {
            this.text_jilu_2 += 1;
          }
          setTimeout(() => {
            this.limit_speed = true;
          }, 1500);
          console.log(direction);
        } else if (direction === 'up') {
          this.$refs.scroll_home2.swiper.slidePrev();
          if (this.text_jilu_2 !== 1) {
            this.text_jilu_2 -= 1;
          }
          console.log(direction);
          setTimeout(() => {
            this.limit_speed = true;
          }, 1500);
        }
      }
    },
    handleScroll3(e) {
      if (this.limit_speed === true) {
        this.limit_speed = false;
        let direction = e.deltaY > 0 ? 'down' : 'up';
        if (direction === 'down') {
          this.$refs.scroll_home3.swiper.slideNext();
          if (this.text_jilu_3 !== 3) {
            this.text_jilu_3 += 1;
          }
          setTimeout(() => {
            this.limit_speed = true;
          }, 1500);
          console.log(direction);
        } else if (direction === 'up') {
          this.$refs.scroll_home3.swiper.slidePrev();
          if (this.text_jilu_3 !== 1) {
            this.text_jilu_3 -= 1;
          }
          console.log(direction);
          setTimeout(() => {
            this.limit_speed = true;
          }, 1500);
        }
      }
    },
    handleScroll4(e) {
      if (this.limit_speed === true) {
        this.limit_speed = false;
        let direction = e.deltaY > 0 ? 'down' : 'up';
        if (direction === 'down') {
          this.$refs.scroll_home4.swiper.slideNext();
          if (this.text_jilu_4 !== 3) {
            this.text_jilu_4 += 1;
          }
          setTimeout(() => {
            this.limit_speed = true;
          }, 1500);
          console.log(direction);
        } else if (direction === 'up') {
          this.$refs.scroll_home4.swiper.slidePrev();
          if (this.text_jilu_4 !== 1) {
            this.text_jilu_4 -= 1;
          }
          console.log(direction);
          setTimeout(() => {
            this.limit_speed = true;
          }, 1500);
        }
      }
    },
    handleScroll5(e) {
      if (this.limit_speed === true) {
        this.limit_speed = false;
        let direction = e.deltaY > 0 ? 'down' : 'up';
        if (direction === 'down') {
          this.$refs.scroll_home5.swiper.slideNext();
          if (this.text_jilu_5 !== 3) {
            this.text_jilu_5 += 1;
          }
          setTimeout(() => {
            this.limit_speed = true;
          }, 1500);
          console.log(direction);
        } else if (direction === 'up') {
          this.$refs.scroll_home5.swiper.slidePrev();
          if (this.text_jilu_5 !== 1) {
            this.text_jilu_5 -= 1;
          }
          console.log(direction);
          setTimeout(() => {
            this.limit_speed = true;
          }, 1500);
        }
      }
    },
    handleScroll6(e) {
      if (this.limit_speed === true) {
        this.limit_speed = false;
        let direction = e.deltaY > 0 ? 'down' : 'up';
        if (direction === 'down') {
          this.$refs.scroll_home6.swiper.slideNext();
          if (this.text_jilu_6 !== 3) {
            this.text_jilu_6 += 1;
          }
          setTimeout(() => {
            this.limit_speed = true;
          }, 1500);
          console.log(direction);
        } else if (direction === 'up') {
          this.$refs.scroll_home6.swiper.slidePrev();
          if (this.text_jilu_6 !== 1) {
            this.text_jilu_6 -= 1;
          }
          console.log(direction);
          setTimeout(() => {
            this.limit_speed = true;
          }, 1500);
        }
      }
    },
    search_click() {
      this.if_search = !this.if_search;
    },
    kaishi_click() {
      this.if_right = !this.if_right;
    },
    next_click() {
      if (this.if_vtuber_active !== 6) {
        this.if_vtuber_active += 1;
        this.$refs.yidong.style.transform = 'translateX(' + (-this.if_vtuber_active * 236.5 + 236.5) + 'px)';
        this.$refs.yidong1.style.transform = 'translateX(' + (-this.if_vtuber_active * 236.5 + 236.5) + 'px)';
      }
    },
    prev_click() {
      if (this.if_vtuber_active !== 1) {
        this.if_vtuber_active -= 1;
        this.$refs.yidong.style.transform = 'translateX(' + (-this.if_vtuber_active * 236.5 + 236.5) + 'px)';
        this.$refs.yidong1.style.transform = 'translateX(' + (-this.if_vtuber_active * 236.5 + 236.5) + 'px)';
      }
    }
  }, mounted() {
    this.$refs.scsroll_home_11.addEventListener('mousewheel', this.handleScroll8, true);
    this.$refs.scsroll_home_12.addEventListener('mousewheel', this.handleScroll2, true);
    this.$refs.scsroll_home_13.addEventListener('mousewheel', this.handleScroll3, true);
    this.$refs.scsroll_home_14.addEventListener('mousewheel', this.handleScroll4, true);
    this.$refs.scsroll_home_15.addEventListener('mousewheel', this.handleScroll5, true);
    this.$refs.scsroll_home_16.addEventListener('mousewheel', this.handleScroll6, true);
    VanillaTilt.init(this.$refs.all_dong, {
      max: 3,
      speed: 100
    });

  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.shangliu-box {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
      90deg, #ffebcd80, #ffebcd60, #ffebcd80, #ffebcd60); /*渐变背景*/
}

.shangliu_out {
  position: relative;
  width: 80%;
  height: 100%;
  background: #ffebcd;
  box-shadow: -15px 0 15px #ffffff50, 15px 0 15px rgba(0, 0, 0, 0.04),
  15px 0 15px #ffffff50, -15px 0 15px rgba(0, 0, 0, 0.04);
  display: flex;
  justify-content: center;
  align-items: center;
}

.shangliu {
  position: relative;
  width: 90%;
  height: 80%;
  background: #ffffff;
  box-shadow: -15px -15px 15px #ffebcd50, 15px 15px 15px rgba(0, 0, 0, 0.04);
  display: flex;
}

.left {
  position: relative;
  overflow: hidden;
  height: 100%;
  background: #ffffff;

  box-sizing: border-box;
  transition: 0.7s ease-in-out;
}

.left_normal {
  width: 0;
  border-right: 0 solid #26262620;
}

.left_active {
  width: 80px;
  border-right: 1px solid #26262620;
}

.menu {
  position: relative;
  height: 80px;
  background: #262626;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  color: #ffffff;
  transition: 0.5s ease-in-out;
  cursor: pointer;
}

.menu:hover {
  font-size: 2.4em;
}

.left_normal .menu {
  width: 0;
}

.left_active .menu {
  width: 81px;
}

.scroll_tip {
  position: absolute;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
  color: #262626;
  transition: 1.4s ease-in-out;
}

.left_normal .scroll_tip {
  bottom: 180px;
  width: 0;
}

.left_active .scroll_tip {
  bottom: 0;
  width: 80px;
}

.scroll_tip_text {
  position: absolute;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #262626;
  transform: rotate(-90deg);
  font-size: 0.5em;
  user-select: none;
  transition: 1.4s ease-in-out;
}

.scroll_tip_text h1 {
  margin-top: -2px;
}

.left_normal .scroll_tip_text {
  bottom: 255px;
}

.left_active .scroll_tip_text {
  bottom: 55px;
}

.right {
  position: relative;
  width: 80px;
  height: 100%;
  background: #ffffff;
  box-sizing: border-box;
  border-left: 1px solid #26262620;
  transition: 0.7s ease-in-out;
  z-index: 2;
}

.right_normal {
  border-right: 1px solid #26262620;
}

.right_active {
  border-right: 0px solid #26262620;
}

.bell {
  position: relative;
  width: 79px;
  height: 80px;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
  color: #262626;
  transition: 0.5s ease-in-out;
  cursor: pointer;
}

.right_normal .bell {
  width: 78px;
}

.right_active .bell {
  width: 79px;
}

.bell h1 {
  position: absolute;
  right: 20px;
  top: 20px;
  width: 15px;
  height: 15px;
  background: #ffc100;
  border-radius: 50%;
  color: #ffffff;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #ffffff;
  user-select: none;
}

.bell:hover {
  font-size: 1.7em;
}

.right_normal .bell {
  border-right: 1px solid #26262620;
}

.right_active .bell {
  border-right: 0px solid #26262620;
}

.search {
  position: absolute;
  top: 80px;
  height: 80px;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
  color: #262626;
  transition: 0.7s ease-in-out;
  cursor: pointer;
  border-left: 1px solid #26262620;
  border-top: 1px solid #26262620;
  border-bottom: 1px solid #26262620;
  box-sizing: border-box;
}

.right_normal .search {
  border-right: 1px solid #26262620;
  left: 0;
}

.right_active .search {
  border-right: 0 solid #26262620;
  right: 0;
}

.search_normal {
  width: 79px;
}

.search_active {
  width: 200px;
}

.search input {
  position: relative;
  border: 0;
  border-bottom: 4px solid #262626;
  color: #262626;
  font-size: 20px;
  font-weight: bold;
  outline: none;
  background: #ffffff00;
  transition: 0.7s ease-in-out;
}

.search_normal input {
  width: 0;
}

.search_active input {
  width: 130px;
  margin-left: 10px;
}

.search input::-webkit-input-placeholder {
  color: #26262680;
}

.right_text {
  position: absolute;
  height: 80px;
  width: 300px;
  color: #262626;
  bottom: 0;
  left: 0;
  font-size: 0.7em;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(-90deg) translateX(225px) translateY(-112px);
  user-select: none;
}

.next {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 79px;
  height: 80px;
  background: #ffffff;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #262626;
  font-size: 1.5em;
  border-top: 1px solid #26262620;
  cursor: pointer;
  transition: 0.7s ease-in-out;
}

.right_normal .next {
  border-right: 1px solid #26262620;
}

.right_active .next {
  border-right: 0 solid #26262620;
}

.prev {
  position: absolute;
  bottom: 0;
  right: 80px;

  height: 80px;
  background: #ffffff;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #262626;
  font-size: 1.5em;
  cursor: pointer;
  transition: 0.7s ease-in-out;
}

.prev:hover {
  font-size: 2em;
}

.next:hover {
  font-size: 2em;
}

.right_normal .prev {
  width: 0;
  border-top: 0 solid #26262620;
  border-right: 0 solid #26262620;
  border-left: 0 solid #26262620;
}

.right_active .prev {
  width: 80px;
  border-top: 1px solid #26262620;
  border-right: 1px solid #26262620;
  border-left: 1px solid #26262620;
}

.prev i {
  transition: 0.7s ease-in-out;
}

.next i {
  transition: 0.7s ease-in-out;
}

.right_normal .prev i {
  opacity: 0;
}

.right_active .prev i {
  opacity: 1;
}

.right_normal .next i {
  opacity: 0;
}

.right_active .next i {
  opacity: 1;
}

.text {
  position: relative;
  transition: 0.7s ease-in-out;
  height: 100%;
  overflow: hidden;
}

.text_normal {
  flex: 0;
}

.text_active {
  flex: 1;
}

.image {
  position: relative;
  height: 100%;
  flex: 1;
  transition: 0.7s ease-in-out;
  overflow: hidden;
}

.image_normal {
  flex: 0;
}

.image_active {
  flex: 1;
}

.kaishi {
  height: 100%;
  position: relative;
  background: #ff006a;
  transition: 0.7s ease-in-out;
  z-index: 3;
  overflow: hidden;
}

.kaishi_normal {
  flex: 1;
}

.kaishi_active {
  flex: 0;
}

.kaishi_bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation: breath 40s infinite linear;
  transition: 0.7s ease-in-out;
  background: url('../../public/image/7a54f7a1b4881101713be8eeda60740a.jpg');
  background-size: cover;
  background-position: center;
}

@keyframes breath {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

.kaishi_main {
  position: absolute;
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.kaishi_kuai {
  position: absolute;
  background: #a29bfe;
  width: 400px;
  height: 400px;
  top: -300px;
  left: -130px;
  transition: 1.4s ease-in-out;
}

.kaishi_kuai_normal {
  transform: rotate(60deg);
}

.kaishi_kuai_active {
  transform: rotate(90deg) translateX(-200px);
}

.kaishi_logo {
  position: absolute;
  top: 30px;

  background: url('../../public/image/7a54f7a1b4881101713be8eeda60740a.jpg') no-repeat;
  background-size: 100% auto;
  width: 250px;
  height: 125px;
  transition: 1.4s ease-in-out;
}

.kaishi_logo_normal {
  left: 10%;
}

.kaishi_logo_active {
  left: 0;
}

.bg_text {
  position: absolute;
  width: 400px;
  height: 300px;
  bottom: 0;
  transform-style: preserve-3d;
  transform: translateZ(20px);
  transition: 1.4s ease-in-out;
}

.bg_text_normal {
  right: 130px;
}

.bg_text_active {
  right: -400px;

}

.bg_text:after {
  content: '';
  position: absolute;
  z-index: -1;
  width: 98.5%;
  height: 90%;
  bottom: 0;
  left: 20px;
  background: linear-gradient(#00000000, #00000030);
  border-radius: 8px;
}

.text_inner4 {
  color: #a29bfe;
  font-size: 3em;
  position: absolute;
  left: 26px;
  bottom: -5px;
  transition: 0.7s ease-in-out;
  user-select: none;
  cursor: pointer;
  transform-style: preserve-3d
}

.text_inner4:hover {
  letter-spacing: 5px;
}

.text_inner4 span {
  color: #ffffff;
}

.text_inner6 {
  position: absolute;
  bottom: 50px;
  left: 26px;
  width: 80%;
  height: 5px;
  border-radius: 8px;
  transition: 0.7s ease-in-out;
  cursor: pointer;
  background: #ffffff;
  transform-style: preserve-3d;
}

.text_inner3 {
  color: #a29bfe;
  position: absolute;
  user-select: none;
  cursor: pointer;
  left: 26px;
  bottom: 60px;
  transition: 0.7s ease-in-out;
  transform-style: preserve-3d
}

.text_inner3:hover {
  letter-spacing: 1px;
}

.text_inner2 {
  position: absolute;
  user-select: none;
  cursor: pointer;
  transition: 0.7s ease-in-out;
  left: 26px;
  bottom: 100px;
  color: #ffffff;
  transform-style: preserve-3d
}

.text_inner2:hover {
  letter-spacing: 5px;
}

.text_inner1 {
  color: #a29bfe;
  position: absolute;
  user-select: none;
  cursor: pointer;
  transition: 0.7s ease-in-out;
  left: 23px;
  bottom: 140px;
  font-size: 4em;
  transform-style: preserve-3d
}

.text_inner1:hover {
  letter-spacing: 2px;
}

.text_inner5 {
  position: absolute;
  user-select: none;
  cursor: pointer;
  right: -120px;
  transition: 0.7s ease-in-out;
  list-style: none;
  justify-content: space-around;
  bottom: 0;
  font-size: 2em;
  border-radius: 8px;
  padding: 5px;
  color: #ffffff;
  background: #a29bfe;
}

.text_inner5:hover {
  color: #a29bfe;
  background: #ffffff;
}

.zhanshi {
  height: 100%;
  position: relative;
  background: #3a332e;
  transition: 0.7s ease-in-out;
  z-index: 1;
  display: flex;
  flex-direction: column;
}

.zhanshi_normal {
  flex: 1;
}

.zhanshi_active {
  flex: 0;
}

.zhanshi_big {
  position: relative;
  flex: 1;
  display: flex;
}

.zhanshi_small {
  position: relative;
  flex: 1;
}

.parallax {
  position: absolute;
  width: 100%;
  height: 100%;
}

.swiper-slide {
  overflow: hidden;
  display: flex;
}

.zhanshi_main {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}

.zhanshi_main1 {
  background: url('../../public/image/7a54f7a1b4881101713be8eeda60740a.jpg');
  background-size: cover;
  animation: breath 30s infinite linear;
}

.zhanshi_main2 {
  background: url('../../public/image/7a54f7a1b4881101713be8eeda60740a.jpg');
  background-size: cover;
  animation: breath 30s infinite linear;
}

.zhanshi_main3 {
  background: url('../../public/image/7a54f7a1b4881101713be8eeda60740a.jpg');
  background-size: cover;
  animation: breath 30s infinite linear;
}

.zhanshi_main4 {
  background: url('../../public/image/7a54f7a1b4881101713be8eeda60740a.jpg');
  background-size: cover;
  animation: breath 30s infinite linear;
}

.zhanshi_main5 {
  background: url('../../public/image/7a54f7a1b4881101713be8eeda60740a.jpg');
  background-size: cover;
  animation: breath 30s infinite linear;
}

.zhanshi_main6 {
  background: url('../../public/image/7a54f7a1b4881101713be8eeda60740a.jpg');
  background-size: cover;
  animation: breath 30s infinite linear;
}

.zhanshi_main7 {
  background: url('../../public/image/7a54f7a1b4881101713be8eeda60740a.jpg');
  background-size: cover;
  animation: breath 30s infinite linear;
}

.zhanshi_main8 {
  background: url('../../public/image/7a54f7a1b4881101713be8eeda60740a.jpg');
  background-size: cover;
  animation: breath 30s infinite linear;
}

.zhanshi_main9 {
  background: url('../../public/image/7a54f7a1b4881101713be8eeda60740a.jpg');
  background-size: cover;
  animation: breath 30s infinite linear;
}

.zhanshi_main10 {
  background: url('../../public/image/7a54f7a1b4881101713be8eeda60740a.jpg');
  background-size: cover;
  animation: breath 30s infinite linear;
}

.zhanshi_main11 {
  background: url('../../public/image/7a54f7a1b4881101713be8eeda60740a.jpg');
  background-size: cover;
  animation: breath 30s infinite linear;
}

.zhanshi_main12 {
  background: url('../../public/image/7a54f7a1b4881101713be8eeda60740a.jpg');
  background-size: cover;
  animation: breath 30s infinite linear;
}

.zhanshi_main13 {
  background: url('../../public/image/7a54f7a1b4881101713be8eeda60740a.jpg');
  background-size: cover;
  animation: breath 30s infinite linear;
}

.zhanshi_main14 {
  background: url('../../public/image/7a54f7a1b4881101713be8eeda60740a.jpg');
  background-size: cover;
  animation: breath 30s infinite linear;
}

.zhanshi_main15 {
  background: url('../../public/image/7a54f7a1b4881101713be8eeda60740a.jpg');
  background-size: cover;
  animation: breath 30s infinite linear;
}

.zhanshi_main16 {
  background: url('../../public/image/7a54f7a1b4881101713be8eeda60740a.jpg');
  background-size: cover;
  animation: breath 30s infinite linear;
}

.zhanshi_main17 {
  background: url('../../public/image/7a54f7a1b4881101713be8eeda60740a.jpg');
  background-size: cover;
  animation: breath 30s infinite linear;
}

.zhanshi_main18 {
  background: url('../../public/image/7a54f7a1b4881101713be8eeda60740a.jpg');
  background-size: cover;
  animation: breath 30s infinite linear;
}

.zhanshi_main + h1 {
  position: absolute;
  color: #ffffff;
  bottom: 10px;
  left: 10px;
  font-size: 1.5em;
  color: #ffffff;
  padding: 5px;
  border-radius: 8px;
}

.zhanshi_main1 + h1, .zhanshi_main2 + h1, .zhanshi_main3 + h1 {
  background: #636e72;
}

.zhanshi_main6 + h1, .zhanshi_main5 + h1, .zhanshi_main4 + h1 {
  background: #2d3436;
}

.zhanshi_main7 + h1, .zhanshi_main8 + h1, .zhanshi_main9 + h1 {
  background: #ff7675;
}

.zhanshi_main10 + h1, .zhanshi_main11 + h1, .zhanshi_main12 + h1 {
  background: #fd79a8;
}

.zhanshi_main15 + h1, .zhanshi_main14 + h1, .zhanshi_main13 + h1 {
  background: #74b9ff;
}

.zhanshi_main16 + h1, .zhanshi_main17 + h1, .zhanshi_main18 + h1 {
  background: #e84393;
}

.yidong {
  position: absolute;
  width: 1655.5px;
  height: 100%;
  display: flex;
  transition: 0.7s ease-in-out;
  transform: translateX(0);
}

.tu_vtuber_normal {
  width: 236.5px;
}

.tu_vtuber_normal_1 {
  width: 236.5px;
}

.tu_vtuber_active {
  width: 473px;
}

.tu_vtuber_active_1 {
  width: 473px;
}

.tu_vtuber:before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  min-width: 473px;
  top: 0;
  left: 0;
  z-index: 1;
  transition: 0.7s ease-in-out;
  animation: breath 40s infinite linear;
}

.tu_vtuber_active:after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  background: #00000000;
  transition: 0.7s ease-in-out;
}

.tu_vtuber_normal:after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: #00000050;
  z-index: 1;
  transition: 0.7s ease-in-out;
}

.tu_vtuber {
  position: relative;
  height: 100%;
  transition: 0.7s ease-in-out;
  display: flex;
  justify-content: center;
  overflow: hidden;
}

.tu_vtuber_1:before {
  background: url('../../public/image/7a54f7a1b4881101713be8eeda60740a.jpg');
  background-size: 100% auto;
  background-position: center -25px;
}

.tu_vtuber_2:before {
  background: url('../../public/image/7a54f7a1b4881101713be8eeda60740a.jpg');
  background-size: 100% auto;
  background-position: center -25px;
}

.tu_vtuber_3:before {
  background: url('../../public/image/7a54f7a1b4881101713be8eeda60740a.jpg');
  background-size: auto 100%;
  background-position: center;
}

.tu_vtuber_4:before {
  background: url('../../public/image/7a54f7a1b4881101713be8eeda60740a.jpg');
  background-size: 100% auto;
  background-position: center;
}

.tu_vtuber_5:before {
  background: url('../../public/image/7a54f7a1b4881101713be8eeda60740a.jpg');
  background-size: 100% auto;
  background-position: center;
}

.tu_vtuber_6:before {
  background: url('../../public/image/7a54f7a1b4881101713be8eeda60740a.jpg');
  background-size: 100% auto;
  background-position: center;
}

.scroll_home {
  position: absolute;
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.home_son {
  position: relative;
  left: 5%;
  width: 90%;
  height: 100%;
  min-width: 425.7px;
  overflow: hidden;
}

.scroll_home >>> .swiper-scrollbar {
  position: absolute;
  right: 3px;
  top: 10px;
  z-index: 50;
  width: 5px;
  height: 98%;
}

.text_title {
  position: relative;
  font-size: 3em;
  text-align: start;
  margin-top: 50px;
  transition: 1.4s ease-in-out;
}

.text_title:hover {
  letter-spacing: 2px;
}

.text_title:before {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  background: #26262680;
  height: 4px;
  width: 70%;
}

.text_title:after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  height: 4px;
  width: 30%;
}

.text_text {
  position: relative;
  font-size: 1em;
  text-align: start;

  transition: 1.4s ease-in-out;
}

.text_text_active {
  margin-top: 20px;
}

.text_text_normal {
  margin-top: 80px;
}

.text_image {
  position: relative;
  width: 80%;
  height: 60%;
  left: 0;
  overflow: hidden;

  transition: 1.4s ease-in-out;
}

.text_image_active {
  margin-top: 10px;
}

.text_image_normal {
  margin-top: 80px;
}

.text_image:before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  animation: breath 30s infinite linear;
}

.text_button {
  position: absolute;
  right: 20px;
  width: 150px;
  height: 60px;
  transition: 1.4s ease-in-out;
  border-radius: 8px;
  box-shadow: 0 0 15px 5px #ffffff50, 0 0 15px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
}

.text_button h1 {
  color: #ffffff;
  font-size: 1.2em;
  user-select: none;
  z-index: 2;
  transition: 0.5s ease-in-out;
}

.text_button:after {
  content: '';
  position: absolute;
  bottom: 49%;
  left: 0;
  width: 100%;
  height: 0;
  background: #FFFFFF;
  z-index: 1;
  transition: 0.5s ease-in-out;
}

.text_button:before {
  content: '';
  position: absolute;
  top: 49%;
  left: 0;
  width: 100%;
  height: 0;
  background: #FFFFFF;
  z-index: 1;
  transition: 0.5s ease-in-out;
}

.text_button:hover:after, .text_button:hover:before {
  height: 51%;
}

.text_button_normal {
  bottom: 0;
}

.text_button_active {
  bottom: 100px;
}

.text_button_1:hover h1 {
  color: #636e72;
}

.text_title_1 {
  color: #636e72;
}

.text_text_1 {
  color: #636e72;
}

.text_button_1 {
  background: #636e72;
}

.text_title_1:after {
  background: #636e72;
}

.swiper-scrollbar >>> .scrollbar1 {
  background: #636e72;
}

.text_image_1:before {
  background: url("../../public/image/7a54f7a1b4881101713be8eeda60740a.jpg");
  background-size: cover;
}

.text_image_2:before {
  background: url("../../public/image/7a54f7a1b4881101713be8eeda60740a.jpg");
  background-size: cover;
}

.text_image_3:before {
  background: url("../../public/image/7a54f7a1b4881101713be8eeda60740a.jpg");
  background-size: cover;
}

.text_button_2:hover h1 {
  color: #2d3436;
}

.text_title_2 {
  color: #2d3436;
}

.text_text_2 {
  color: #2d3436;
}

.text_button_2 {
  background: #2d3436;
}

.text_title_2:after {
  background: #2d3436;
}

.swiper-scrollbar >>> .scrollbar2 {
  background: #2d3436;
}

.text_image_4:before {
  background: url("../../public/image/7a54f7a1b4881101713be8eeda60740a.jpg");
  background-size: cover;
}

.text_image_5:before {
  background: url("../../public/image/7a54f7a1b4881101713be8eeda60740a.jpg");
  background-size: cover;
}

.text_image_6:before {
  background: url("../../public/image/7a54f7a1b4881101713be8eeda60740a.jpg");
  background-size: cover;
}

.text_button_3:hover h1 {
  color: #ff7675;
}

.text_title_3 {
  color: #ff7675;
}

.text_text_3 {
  color: #ff7675;
}

.text_button_3 {
  background: #ff7675;
}

.text_title_3:after {
  background: #ff7675;
}

.swiper-scrollbar >>> .scrollbar3 {
  background: #ff7675;
}

.text_image_7:before {
  background: url("../../public/image/7a54f7a1b4881101713be8eeda60740a.jpg");
  background-size: cover;
}

.text_image_8:before {
  background: url("../../public/image/7a54f7a1b4881101713be8eeda60740a.jpg");
  background-size: cover;
}

.text_image_9:before {
  background: url("../../public/image/7a54f7a1b4881101713be8eeda60740a.jpg");
  background-size: cover;
}

.text_button_4:hover h1 {
  color: #fd79a8;
}

.text_title_4 {
  color: #fd79a8;
}

.text_text_4 {
  color: #fd79a8;
}

.text_button_4 {
  background: #fd79a8;
}

.text_title_4:after {
  background: #fd79a8;
}

.swiper-scrollbar >>> .scrollbar4 {
  background: #fd79a8;
}

.text_image_10:before {
  background: url("../../public/image/7a54f7a1b4881101713be8eeda60740a.jpg");
  background-size: cover;
}

.text_image_11:before {
  background: url("../../public/image/7a54f7a1b4881101713be8eeda60740a.jpg");
  background-size: cover;
}

.text_image_12:before {
  background: url("../../public/image/7a54f7a1b4881101713be8eeda60740a.jpg");
  background-size: cover;
}

.text_button_5:hover h1 {
  color: #74b9ff;
}

.text_title_5 {
  color: #74b9ff;
}

.text_text_5 {
  color: #74b9ff;
}

.text_button_5 {
  background: #74b9ff;
}

.text_title_5:after {
  background: #74b9ff;
}

.swiper-scrollbar >>> .scrollbar5 {
  background: #74b9ff;
}

.text_image_13:before {
  background: url("../../public/image/7a54f7a1b4881101713be8eeda60740a.jpg");
  background-size: cover;
}

.text_image_14:before {
  background: url("../../public/image/7a54f7a1b4881101713be8eeda60740a.jpg");
  background-size: cover;
}

.text_image_15:before {
  background: url("../../public/image/7a54f7a1b4881101713be8eeda60740a.jpg");
  background-size: cover;
}

.text_button_6:hover h1 {
  color: #e84393;
}

.text_title_6 {
  color: #e84393;
}

.text_text_6 {
  color: #e84393;
}

.text_button_6 {
  background: #e84393;
}

.text_title_6:after {
  background: #e84393;
}

.swiper-scrollbar >>> .scrollbar6 {
  background: #e84393;
}

.text_image_16:before {
  background: url("../../public/image/7a54f7a1b4881101713be8eeda60740a.jpg");
  background-size: cover;
}

.text_image_17:before {
  background: url("../../public/image/7a54f7a1b4881101713be8eeda60740a.jpg");
  background-size: cover;
}

.text_image_18:before {
  background: url("../../public/image/7a54f7a1b4881101713be8eeda60740a.jpg");
  background-size: cover;
}
</style>
