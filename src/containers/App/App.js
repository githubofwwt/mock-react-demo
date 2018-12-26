import React, { Component } from 'react'
import logo from '@/assets/logo.svg'
import style from './App.module.scss'
import User from '@/apis/User'

const user = new User()

class App extends Component {
  constructor () {
    super()
    this.state = {
      username: '',
      password: '',
      key: '',
      value: ''
    }
  }

  login = () => {
    let { username, password } = this.state
    const data = { username, password }
    user.login(data)
      .then(res => {
        console.log('登录成功')
      })
      .catch(err => {
        console.log(err)
      })
  }

  logout = () => {
    user.logout()
      .then(res => {
        console.log('注销成功')
      })
      .catch(err => {
        console.log(err)
      })
  }

  query = () => {
    let { key, value } = this.state
    if (key === '') {
      alert('请输入 key 值')
      return
    }
    const params = {
      [key]: value
    }
    user.query(params)
      .then(res => {
        console.log('传递的查询参数为：', res)
      })
      .catch(err => {
        console.log(err)
      })
  }

  updateUsername = e => {
    this.setState({
      username: e.target.value
    })
  }

  updatePassword = e => {
    this.setState({
      password: e.target.value
    })
  }

  updateKey = e => {
    this.setState({
      key: e.target.value
    })
  }

  updateValue = e => {
    this.setState({
      value: e.target.value
    })
  }

  render() {
    return (
      <div className={style.App}>
        <header className={style['App-header']}>
          <img src={logo} className={style['App-logo']} alt="logo" />
        </header>
        <div className={style.test1}>
          <label>
            用户名：
            <input type="text" onChange={this.updateUsername} />
          </label>
          <label>
            密码：
            <input type="text" onChange={this.updatePassword} />
          </label>
          <div className="btns">
            <button onClick={this.login}>登录</button>
            <button onClick={this.logout}>注销</button>
          </div>
        </div>
        <div className={style.test2}>
          <label>
            查询字符串的 key：
            <input type="text" onChange={this.updateKey} />
          </label>
          <label>
            查询字符串的 value：
            <input type="text" onChange={this.updateValue} />
          </label>
          <button onClick={this.query}>测试带查询字符串的 get 请求</button>
        </div>
      </div>
    )
  }
}

export default App
