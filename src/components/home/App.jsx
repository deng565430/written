import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(...arg) {
    super(...arg);
    this.state = {
      flag: "< 收起",
      ifHide: false,
      leftData: [
        {
          title: "课程导读",
          leftIcon: "xx",
          rightIcon: "xx",
          style: {
            transition: "all .3s",
            opacity: 1
          },
          isHide: false,
          clildData: [
            {
              title: "本章导读",
              icon: "xxx"
            },
            {
              title: "企业实现快速增长的四个战略点",
              icon: "xxx"
            },
            {
              title: "用户增长的七大驱动程序",
              icon: "xxx"
            }
          ]
        },
        {
          title: "第一章：了解增长和增长率",
          leftIcon: "xx",
          rightIcon: "xx",
          style: {
            transition: "all .3s",
            opacity: 1
          },
          isHide: false,
          clildData: [
            {
              title: "本章导读",
              icon: "xxx"
            },
            {
              title: "企业实现快速增长的四个战略点",
              icon: "xxx"
            },
            {
              title: "用户增长的七大驱动程序",
              icon: "xxx"
            }
          ]
        }
      ]
    };
    this.hidehandle = this.hidehandle.bind(this);
    this.showMyWork = this.showMyWork.bind(this);
    this.hideMyWork = this.hideMyWork.bind(this);
  }
  hidehandle() {
    // 实现右侧点击展开和收起
    if (!this.state.ifHide) {
      this.refs.left.style.width = 0;
      this.refs.left.style["min-width"] = 0;
      this.refs.header.style.left = 0;
      this.refs.left.style.opacity = 0;
      setTimeout(() => {
        this.refs.left.style.display = "none";
      }, 200);
    } else {
      this.refs.left.style.display = "block";
      this.refs.left.style.opacity = 1;
      this.refs.left.style.width = "200px";
      this.refs.left.style["min-width"] = "200px";
      this.refs.header.style.left = "200px";
    }
    this.setState({
      flag: "< 展开",
      ifHide: !this.state.ifHide
    });
  }

  pullDown(index) {
    // 实现左侧点击展开和收起当前条目
    const { leftData } = this.state;
    if (leftData[index].isHide) {
      leftData[index].style = {
        height: "100%",
        opacity: 1,
        transition: "all .3s"
      };
    } else {
      leftData[index].style = {
        height: 0,
        opacity: 0,
        overflow: "hidden",
        transition: "all .3s"
      };
    }
    leftData[index].isHide = !leftData[index].isHide;
    this.setState({
      leftData: leftData
    });
  }
  showMyWork () {
    // 实现右侧展开我的作业
    this.refs.myWork.style.right = '0'
  }
  hideMyWork () {
    // 收起我的作业
    this.refs.myWork.style.right = '-305px'
  }

  render() {
    return (
      <div className="App">
        <div className="layout">
          <div className="left" ref="left">
            <div ref="list">
              <span className="back"> 返回我的教室</span>
              <h3 className="title">限量预售： 增长黑客教程</h3>
              <ul>
                {this.state.leftData.map((item, index) => {
                  return (
                    <li className="left-item" key={item.title}>
                      <div className="item-top">
                        <i>{item.leftIcon}</i>
                        <p>{item.title}</p>
                        <i onClick={() => this.pullDown(index)}>
                          {item.rightIcon}
                        </i>
                      </div>
                      <ul style={item.style}>
                        {item.clildData.map(child => {
                          return (
                            <li className="item-center" key={child.title}>
                              <i>{child.icon}</i>
                              <p>{child.title}</p>
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="right">
            <div className="header" ref="header">
              <span onClick={this.hidehandle}> {this.state.flag} </span>
              <p>本页导读(第1页/共1页)</p>
              <span onClick={this.showMyWork}>
                <i>xx</i> 我的作业
              </span>
            </div>
            <div className="content">
              <div className="container">
                <p>这是内容</p>
                <p>这是内容</p>
                <p>这是内容</p>
                <p>这是内容</p>
                <p>这是内容</p>
                <p>这是内容</p>
                <p>这是内容</p>
                <p>这是内容</p>
                <p>这是内容</p>
                <p>这是内容</p>
                <p>这是内容</p>
                <p>这是内容</p>
                <p>这是内容</p>
                <p>这是内容</p>
                <p>这是内容</p>
                <p>这是内容</p>
                <p>这是内容</p>
              </div>
              <div className="content-right" ref="myWork">
                <h4>
                  <span onClick={this.hideMyWork}>{'< 收起'}  </span>
                  <i>  xx</i> 我的作业(2/6)
                </h4>
                <ul>
                  <li>第二章：xxxxxx</li>
                  <li>第二章：xxxxxx</li>
                  <li>第二章：xxxxxx</li>
                  <li>第二章：xxxxxx</li>
                  <li>第二章：xxxxxx</li>
                  <li>第二章：xxxxxx</li>
                </ul>
              </div>
              <div className="buttom">
                <button className="btn">上一节</button>
                <span>1/1</span>
                <button className="btn">下一节</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
