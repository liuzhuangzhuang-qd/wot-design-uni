/*
 * @Author: weisheng
 * @Date: 2024-03-15 20:40:34
 * @LastEditTime: 2024-11-13 13:18:15
 * @LastEditors: weisheng
 * @Description:
 * @FilePath: \wot-design-uni\src\uni_modules\wot-design-uni\components\wd-calendar\types.ts
 * 记得注释
 */
import type { PropType } from 'vue'
import { baseProps, makeArrayProp, makeBooleanProp, makeNumberProp, makeRequiredProp, makeStringProp } from '../common/props'
import type { CalendarFormatter, CalendarTimeFilter, CalendarType } from '../wd-calendar-view/types'

export const calendarProps = {
  ...baseProps,
  /**
   * 选中值，为 13 位时间戳或时间戳数组
   */
  modelValue: makeRequiredProp([Number, Array, null] as PropType<number | number[] | null>),
  /**
   * 日期类型，可选值：date / dates / datetime / week / month / daterange / datetimerange / weekrange / monthrange
   */
  type: makeStringProp<CalendarType>('date'),
  /**
   * 最小日期，为 13 位时间戳
   */
  minDate: makeNumberProp(new Date(new Date().getFullYear(), new Date().getMonth() - 6, new Date().getDate()).getTime()),
  /**
   * 最大日期，为 13 位时间戳
   */
  maxDate: makeNumberProp(new Date(new Date().getFullYear(), new Date().getMonth() + 6, new Date().getDate(), 23, 59, 59).getTime()),
  /**
   * 周起始天
   */
  firstDayOfWeek: makeNumberProp(0),
  /**
   * 日期格式化函数
   */
  formatter: Function as PropType<CalendarFormatter>,
  /**
   * type 为范围选择时有效，最大日期范围
   */
  maxRange: Number,
  /**
   * type 为范围选择时有效，选择超出最大日期范围时的错误提示文案
   */
  rangePrompt: String,
  /**
   * type 为范围选择时有效，是否允许选择同一天
   */
  allowSameDay: makeBooleanProp(false),
  /**
   * 选中日期所使用的当日内具体时刻
   */
  defaultTime: {
    type: [String, Array] as PropType<string | string[]>
  },
  /**
   * type 为 'datetime' 或 'datetimerange' 时有效，用于过滤时间选择器的数据
   */
  timeFilter: Function as PropType<CalendarTimeFilter>,
  /**
   * type 为 'datetime' 或 'datetimerange' 时有效，是否不展示秒修改
   */
  hideSecond: makeBooleanProp(false),
  /**
   * 弹出层标题
   */
  title: String,
  /**
   * 点击遮罩是否关闭
   */
  closeOnClickModal: makeBooleanProp(true),
  /**
   * 弹框层级
   */
  zIndex: makeNumberProp(15),
  /**
   * 是否显示确定按钮
   */
  showConfirm: makeBooleanProp(true),
  /**
   * 确定按钮文字
   */
  confirmText: String,
  /**
   * 自定义范围选择类型的面板内部回显，返回一个字符串
   */
  innerDisplayFormat: Function as PropType<CalendarInnerDisplayFormat>,
  /**
   * 是否显示类型切换功能
   */
  showTypeSwitch: makeBooleanProp(false),
  /**
   * 快捷选项，为对象数组，其中对象的 text 必传
   */
  shortcuts: makeArrayProp<Record<string, any>>(),
  /**
   * 快捷操作点击回调
   */
  onShortcutsClick: Function as PropType<CalendarOnShortcutsClick>,
  /**
   * 弹出面板是否设置底部安全距离（iphone X 类型的机型）
   */
  safeAreaInsetBottom: makeBooleanProp(true),
  /**
   * 确定前校验函数，接收 { value, resolve } 参数，通过 resolve 继续执行，resolve 接收 1 个 boolean 参数
   */
  beforeConfirm: Function as PropType<CalendarBeforeConfirm>,
  /**
   * 是否在手指松开时立即触发picker-view的 change 事件。若不开启则会在滚动动画结束后触发 change 事件，1.2.25版本起提供，仅微信小程序和支付宝小程序支持。
   */
  immediateChange: makeBooleanProp(false)
}

export type CalendarDisplayFormat = (value: number | number[], type: CalendarType) => string

export type CalendarInnerDisplayFormat = (value: number, rangeType: 'start' | 'end', type: CalendarType) => string

export type CalendarBeforeConfirmOption = {
  value: number | number[] | null
  resolve: (isPass: boolean) => void
}

export type CalendarBeforeConfirm = (option: CalendarBeforeConfirmOption) => void

export type CalendarOnShortcutsClickOption = {
  item: Record<string, any>
  index: number
}

export type CalendarOnShortcutsClick = (option: CalendarOnShortcutsClickOption) => number | number[]

export type CalendarExpose = {
  /** 关闭时间选择器弹窗 */
  close: () => void
  /** 打开时间选择器弹窗 */
  open: () => void
}
