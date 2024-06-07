import './App.css'
import { Component } from 'react'
import moment from 'moment/moment'
const name = '我是大美女'
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
        author: '周杰伦',
        comment: '哎哟，不错哦哦哦',
        time: new Date(),
        attitute: -1,
      },
    ],
    msg: '我是输入框的内容',
  }
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
  render() {
    const { tabs, active, list } = this.state
    return (
      <div>
        {tabs.map((item) => (
          <div key={item.id} className={item.type === active ? 'active' : ''}>
            按{item.name}排序
          </div>
        ))}
        {list.map((item) => (
          <div key={item.id}>按{this.timeFormate(item.time)}排序</div>
        ))}
        <button onClick={this.handleClick}>{this.state.count}</button>
        <input type="text" value={this.state.msg} onChange={this.changeMsg} />
      </div>
    )
  }
}

export default Aaa
