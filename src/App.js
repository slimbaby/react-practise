import './App.css'
import { Component, createRef } from 'react'
import moment from 'moment/moment'
import { orderBy } from 'lodash'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import Dou from './hitDD'
import Hooks from './hooks'
import UseEffect from './useEffect'
import Children from './children'
import UseRef from './useRef'
const name = '我是大美女'

const Hello = (props) => {
  console.log(props)
  const subDataGet = () => {
    props.subDataGet(666)
  }
  return (
    <div>
      我是hello子组件
      <div>
        <h3>标题：{props.item.name}</h3>
        <h3>价格：{props.item.price}</h3>
        <h3>开业大酬宾:{props.item.info}</h3>
        <button onClick={subDataGet}>按钮</button>
      </div>
    </div>
  )
}
class Hello1 extends Component {
  render() {
    console.log(this.props)
    return <div>{this.props.children}</div>
  }
}
class Aaa extends Component {
  state = {
    tabs: [
      { id: 1, name: '热度', type: 'hot' },
      { id: 2, name: '时间', type: 'time' },
    ],
    active: 'hot',
    count: 1,
    list: [
      {
        id: 1,
        author: '周杰伦',
        comment: '哎哟，不错哦',
        time: new Date(),
        attitute: 0,
      },
      {
        id: 2,
        author: '五月天',
        comment: '哎哟，不错哦哦',
        time: new Date(),
        attitute: 0,
      },
      {
        id: 3,
        author: '伍佰',
        comment: '哎哟，不错哦哦哦',
        time: new Date(),
        attitute: -1,
      },
    ],
    sublist: [
      {
        id: 1,
        name: '超级好吃的棒棒糖',
        price: 18.8,
        info: '开业大酬宾，全场八折',
      },
      {
        id: 2,
        name: '超级好吃的大鸡腿',
        price: 34.2,
        info: '开业大酬宾，全场八折',
      },
    ],
    msg: '我是输入框的内容',
  }
  inputRef = createRef()
  timeFormate(params) {
    return moment(params).format('YYYY-MM-DD HH:mm:ss')
  }
  handleClick = () => {
    this.setState({
      count: this.state.count + 1,
    })
  }
  changeMsg = (e) => {
    this.setState({
      msg: e.target.value,
    })
  }
  hanleRefClick = () => {
    console.log(this.inputRef.current.value)
  }
  deleItem = (i) => {
    this.setState({ list: this.state.list.filter((item) => item.id !== i) })
  }
  subDataGet = () => {
    console.log('子组件传给父组件的值')
  }
  render() {
    const { tabs, active, list } = this.state
    return (
      <div>
        {/* {tabs.map((item) => (
          <div key={item.id} className={item.type === active ? 'active' : ''}>
            按{item.name}排序
          </div>
        ))}
        {list.map((item) => (
          <div key={item.id}>
            按{this.timeFormate(item.time)}排序{item.author}
            <button
              onClick={() => {
                this.deleItem(item.id)
              }}
            >
              删除
            </button>
          </div>
        ))}
        <button onClick={this.handleClick}>{this.state.count}</button>
        <input type="text" value={this.state.msg} onChange={this.changeMsg} />
        <div>
          <input type="text" ref={this.inputRef} />
          <button onClick={this.hanleRefClick}>按钮</button>
        </div>
        {this.state.sublist.map((item) => (
          <Hello
            key={item.id}
            item={item}
            name={123}
            subDataGet={this.subDataGet}
          ></Hello>
        ))} */}

        <Hello1>我是66</Hello1>
        <Dou></Dou>
        <Hooks></Hooks>
        <UseEffect></UseEffect>
        <Children children={666}></Children>
        <UseRef></UseRef>
      </div>
    )
  }
}

export default Aaa
