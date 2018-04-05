# 下载并启动
> - git clone https://github.com/deng565430/written.git
> - cd written
> - yarn install
> - yarn start

# 说明
> - 我看到笔试的题目主要是由布局方面， 有点类似ant-design的布局方式， 由此想到贵公司应该是用ant-design框架，不过我并没有使用此框架， 自己实现了一下布局
> - 实现基本的布局和样式， 由于时间的关系， 并不是很精细，需要慢慢调。
> - 用到postCss实现布局
> - 左侧的模块icon图标统一由'xxx'代替
> - 左侧导航tree树结构， 如果有需求的话会从后端获取数据之后自己配置tree树。 
> - 左侧导航并没有实现固定定位，一是看需求， 二是实现起来也比较简单。
> - 左侧展开和收起是利用在tree树结构中扩展style实现的。
```
pullDown(index) {
    // 实现左侧点击展开和收起当前条目
    const { leftData } = this.state;
    if (leftData[index].isHide) {
      leftData[index].style = {
        height: '100%',
        opacity: 1,
        transition: 'all .3s'
      }
    } else {
      leftData[index].style = {
        height: 0,
        opacity: 0,
        overflow: 'hidden',
        transition: 'all .3s'
      }
    }
    leftData[index].isHide = !leftData[index].isHide
    this.setState({
      leftData: leftData
    })
  }
```
> - 右侧主体部分，title实现固定定位， 分页也可实现固定定位。
> - 左侧展开收起部分实现原理是 左侧的宽度相应减少， 同时添加延迟效果
```
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
```
> - 右侧效果跟左侧差不多。 多一个定位效果。 所以实现了基本的布局。
> - 右侧点击展开我的作业， 布局跟左侧差不多。 效果实现方法是利用position:fixed布局的右侧-px值。 然后点击展开 基本实现如下。 当然 如果选择css3 transform效果更佳， 会有效的减少页面重绘制重排
```
showMyWork () {
    // 实现右侧展开我的作业
    this.refs.myWork.style.right = '0'
  }
  hideMyWork () {
    // 收起我的作业
    this.refs.myWork.style.right = '-305px'
  }
```
> - 基本实现需求， 不过待优化的点很多， 比如分模块化，按需引用， 封装！  后续有时间将会慢慢优化。


# 总结
> - 实现这些效果的方案很多。 不过最终目的还是为了让页面渲染更快，更佳。 以下提出更佳的解决方案
> - 1、 利用transform  减少页面重绘重排。 实际上就是利用GPU进行渲染， 让页面更佳流畅。
> - 2、 封装各个组件 例如左侧和右侧类似的组件可以多次复用。 title组件可多次复用， 分页组件可多次复用
> - 3、 在react中， 尽量减少更深层次的嵌套， 会影响整个组件的渲染。  可利用深拷贝的原理对传递的数据进行比对。
> - 4、 如果有时间精力的话， 我会从整体的设计稿去考虑该怎么样对这个布局进行优化， 比如数据获取封装， 比如布局利用oocss原子css进行布局， 比如按模块封装。 类似这些。
> - 5、 最后， 有现成框架的话， 尽量不会去造轮子。 如果需要二次封装的， 在原型阶段就可以进行统一的封装和模块划分。


