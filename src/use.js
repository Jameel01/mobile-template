/*
 * @Description: 常用的有赞组件
 * @Autor: chenyt
 * @Date: 2020-03-21 22:15:42
 * @LastEditors: Chenyt
 * @LastEditTime: 2020-10-23 09:47:09
 */

import Vue from "vue"
import { NavBar, Loading, Form, List, Cell, CellGroup, Panel, PullRefresh, Toast, Button, Collapse, CollapseItem, Field, Icon, Popup, Picker, Dialog, Checkbox, CheckboxGroup, DatetimePicker, Uploader, ActionSheet, Row, Col, Image, Steps, Step, DropdownMenu, DropdownItem, Area, Notify, RadioGroup, Radio, Switch, Search, Slider, Stepper, Tag, NoticeBar, Card } from "vant"

import yLoadingPlus from "@/components/global/y-loading-plus/index"

Vue.use(yLoadingPlus)

// 常用移动端组件
Vue.use(Button)
Vue.use(Panel)
Vue.use(Toast)
Vue.use(PullRefresh)
Vue.use(CellGroup)
Vue.use(Cell)
Vue.use(List)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(Field)
Vue.use(Icon)
Vue.use(Popup)
Vue.use(Picker)
Vue.use(Dialog)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(DatetimePicker)
Vue.use(Uploader)
Vue.use(ActionSheet)
Vue.use(Row)
Vue.use(Col)
Vue.use(Image)
Vue.use(Steps)
Vue.use(Step)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Loading)
Vue.use(Area)
Vue.use(Notify)
Vue.use(RadioGroup)
Vue.use(Radio)
Vue.use(Form)
Vue.use(Loading)
Vue.use(Switch)
Vue.use(Search)
Vue.use(Slider)
Vue.use(Stepper)
Vue.use(Tag)
Vue.use(NoticeBar)
Vue.use(Card)
Vue.use(NavBar)
Vue.prototype.$Toast = Toast
