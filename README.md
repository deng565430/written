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
> - 基本实现需求， 不过待优化的点很多， 比如分模块化，按需引用， 封装！  后续有时间将会慢慢优化。


