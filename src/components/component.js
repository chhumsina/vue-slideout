export default {
  name: 'SlideOut',
  data() {
    return {
      isVisible: false,
      // 标识鼠标是否按下，仅按下时能拖动大小
      mousedown: false,
      // 鼠标按下时的位置
      mouseDownPosition: {x: 0, y: 0},
      // 弹出的原始大小
      originSize: {width: 0, height: 0},
      // 调整大小时的值，单位为px
      resizeValue: 0,
      // 父级元素
      parentElement: null,
      // 扩展按钮容器
      extensionButtons: null
    }
  },
  watch: {
    // 当从外部改变visible时，切换显示状态
    visible(visible) {
      this.toggle(visible)
    },
    // 当从内部改变 isVisible时
    isVisible(v) {
      if (!this.isFixed) {
        // 非固定时，不需要锁定滚动
        return
      }
      // 切换锁定样式类
      if (v) {
        document.body.classList.add('vue-slideout-lock-scroll')
      } else {
        document.body.classList.remove('vue-slideout-lock-scroll')
      }
    }
  },
  computed: {
    // 停靠边，当未指定时，设置为默认值 right
    dockOn() {
      return this.dock || 'right'
    },
    // SlideOut 容器样式
    containerStyle() {
      let style = {
        // 2147483647 是允许的最大值
        'z-index': this.fullscreen ? 2147483647 : this.zIndex
      }
      if (this.mousedown) {
        style.userSelect = 'none'
      }
      let distance = this.isVisible ? '0' : '100%'
      switch (this.dockOn) {
        case 'left':
          style.right = distance
          break
        case 'right':
          style.left = distance
          break
        case 'top':
          style.bottom = distance
          break
        case 'bottom':
          style.top = distance
          break
      }
      return style
    },
    // SlideOut 遮罩层样式
    maskStyle() {
      return this.maskColor ? {
        'background-color': this.maskColor
      } : {}
    },
    // 是否使用固定大小，判断依据：指定的大小是一个数组
    isSizeFixed() {
      return Array.isArray(this.size)
    },
    // 获取带上单位的size值
    sizeWithUnit() {
      return typeof this.size === 'number' || !(/%$/.test(this.size)) ? `${parseInt(this.size)}px` : `${parseInt(this.size)}%`
    },
    // 隐藏时 size 的大小
    hiddenSizeWithUnit() {
      return typeof this.size === 'number' || !(/%$/.test(this.size)) ? `${-parseInt(this.size)}px` : `${-parseInt(this.size)}%`
    },
    // SlideOut 内容样式
    layoutStyle() {
      let style = {}
      if (this.isSizeFixed) {
        // 指定大小
        style.width = this.fullscreen ? '100%' : this.size[0]
        style.height = this.fullscreen ? '100%' : this.size[this.size.length === 1 ? 0 : 1]
        // 偏移量，当全屏时偏移量为 0
        let offset = this.fullscreen ? 0 : this.offset
        switch (this.dockOn) {
          case 'right':
            style.right = this.getInstance(style.width)
            style.top = offset
            break
          case 'left':
            style.left = this.getInstance(style.width)
            style.top = offset
            break
          case 'bottom':
            style.bottom = this.getInstance(style.height)
            style.left = offset
            break
          case 'top':
            style.top = this.getInstance(style.height)
            style.left = offset
            break
        }
        return style
      }
      // 内容显示大小
      let size = this.fullscreen ? '100%' : this.resizeValue > 0 ? `${this.resizeValue}px` : this.sizeWithUnit
      // 内容到边的距离
      let distance = this.isVisible || this.disableAnimation ? 0 : this.hiddenSizeWithUnit
      switch (this.dockOn) {
        case 'right':
          style.width = size
          style.right = distance
          break
        case 'left':
          style.width = size
          style.left = distance
          break
        case 'bottom':
          style.height = size
          style.bottom = distance
          break
        case 'top':
          style.height = size
          style.top = distance
          break
      }
      return style
    },
    // 容器需要应用的样式类
    containerClasses() {
      return {
        [this.customClass || '']: true,
        [`vue-slideout-dock-${this.dockOn}`]: true,
        'vue-slideout-visible': this.isVisible,
        'vue-slideout-enable-animation': !this.disableAnimation,
        'vue-slideout-show-header': this.title || this.$slots.header,
        'vue-slideout-show-footer': this.$slots.footer,
        'vue-slideout-fixed': this.isFixed,
        'vue-slideout-fullscreen': this.fullscreen
      }
    },
    // 头部样式
    headerStyle() {
      let style = {
        paddingRight: '0'
      }
      if (!this.extensionButtons) {
        return style
      }
      let btnStyle = window.getComputedStyle(this.extensionButtons)
      style.paddingRight = `${parseInt(btnStyle.width) + 5}px`
      return style
    },
    // 是否使用固定定位
    isFixed() {
      // 设置了 appendTo 的时候，就不固定显示
      return this.fixed || !this.appendTo
    }
  },
  methods: {
    /**
     * 获取关闭事件参数对象
     */
    getCloseArgs() {
      let me = this
      // 通过使用 setter 以实现延迟操作
      return {
        // 是否等待操作
        wait: false,
        set close(close) {
          // 取消关闭
          if (!close) {
            return
          }
          // 关闭
          me.setVisibleValue(false)
        },
        get close() {
          return undefined
        }
      }
    },
    /**
     * 切换显示状态
     * @param {Boolean} [visible] 指定显示状态，不指定时切换状态
     */
    toggle(visible) {
      if (visible === this.isVisible) {
        return
      }
      if (visible) {
        // 显示前触发事件
        let args = {
          cancel: false
        }
        this.$emit('before-open', args)
        // 取消打开
        if (args.cancel) {
          return
        }
        this.setVisibleValue(true)
        // 显示后触发事件
        this.$nextTick(this.emitOpenEvent)
        return
      }
      // 隐藏前触发事件
      let args = this.getCloseArgs()
      this.$emit('close', args)
      if (args.wait) {
        // 需要等待，最终是否关闭要看 args.close 是否为 true
        return
      }
      this.setVisibleValue(false)
    },
    /**
     * 设置显示状态
     * @param {Boolean} visible 显示状态
     */
    setVisibleValue(visible) {
      // 如果显示状态相同，则啥也不做
      if (this.isVisible === visible) {
        return
      }
      // 显示时重置大小
      if (visible) {
        this.resizeValue = 0
      }
      this.isVisible = visible
      this.$el.focus()
      this.$emit('update:visible', visible)
      // 若指定了 .sync 修饰，则关闭后退出全屏
      this.$emit('update:fullscreen', false)
      // 触发关闭后的事件
      if (!visible) {
        this.$nextTick(this.emitCloseEvent)
      }
    },
    /**
     * 计算出组件在DOM中的父元素
     */
    appendComponentTo() {
      if (!this.appendTo) {
        this.parentElement = this.$el.parentElement
        return
      }
      let target = this.appendTo
      // handle selector
      if (typeof target === 'string') {
        target = document.querySelector(target)
        if (!target) {
          throw new Error(`SlideOut cannot found the node to append to: ${this.appendTo}`)
        }
      }
      target.appendChild(this.$el)
      this.parentElement = target
    },
    /**
     * 点击遮罩层时的事件处理
     */
    onMaskClick() {
      if (this.closeOnMaskClick) {
        this.toggle(false)
      }
    },
    /**
     * 获取父元素的尺寸
     * @return {{width: Number, height: Number}}
     */
    getParentSize() {
      let rect = this.parentElement.getClientRects()[0]
      return {
        width: rect.width,
        height: rect.height
      }
    },
    /**
     * 获取到此组件的大小（基于px）
     * @return {{width: Number, height: Number}}
     */
    getMyOwnSize() {
      let rect = this.$refs.layout.getClientRects()[0]
      return {
        width: rect.width,
        height: rect.height
      }
    },
    /**
     * 计算当前显示的大小
     * @param size
     * @return {Number|String}
     */
    getInstance(size) {
      return this.isVisible || this.disableAnimation
        ? 0
        : (typeof size === 'number' || !(/%$/.test(size)) ? `${-parseInt(size)}px` : `${-parseInt(size)}%`)
    },
    mouseDownHandler(e) {
      if (this.fullscreen) {
        // 全屏时不允许改变大小
        return
      }
      this.mousedown = true
      this.mouseDownPosition = {
        x: e.pageX,
        y: e.pageY
      }
      this.originSize = this.getMyOwnSize()
    },
    mouseMoveHandler(e) {
      if (this.fullscreen) {
        // 全屏时不允许改变大小
        return
      }
      // 鼠标未按下时，不能拖动
      if (!this.mousedown) {
        return
      }
      e.preventDefault()
      // 获取鼠标的偏移量
      let x = e.pageX - this.mouseDownPosition.x
      let y = e.pageY - this.mouseDownPosition.y

      let parentSize = this.getParentSize()
      let winSize = {
        width: window.innerWidth,
        height: window.innerHeight
      }
      let size = this.originSize
      let newSize = 0
      switch (this.dock) {
        case 'top':
          newSize = size.height + y
          if (newSize > parentSize.height) {
            newSize = parentSize.height
          }
          if (newSize > winSize.height) {
            newSize = winSize.height
          }
          break
        case 'right':
          newSize = size.width - x
          if (newSize > parentSize.width) {
            newSize = parentSize.width
          }
          if (newSize > winSize.width) {
            newSize = winSize.width
          }
          break
        case 'bottom':
          newSize = size.height - y
          if (newSize > parentSize.height) {
            newSize = parentSize.height
          }
          if (newSize > winSize.height) {
            newSize = winSize.height
          }
          break
        case 'left':
          newSize = size.width + x
          if (newSize > parentSize.width) {
            newSize = parentSize.width
          }
          if (newSize > winSize.width) {
            newSize = winSize.width
          }
          break
      }
      if (this.maxSize > 0 && this.maxSize < newSize) {
        newSize = this.maxSize
      }
      this.resizeValue = newSize < this.minSize ? this.minSize : newSize
      this.$nextTick(() => {
        this.$emit('resize', {size: this.resizeValue})
      })
    },
    mouseUpHandler() {
      this.mousedown = false
    },
    onKeydown(e) {
      if (!this.isVisible) {
        return
      }
      if (e.code !== 27 && e.keyCode !== 27 && e.which !== 27) {
        return
      }
      // 忽略输入组件
      if (['INPUT', 'TEXTAREA'].indexOf(e.target.tagName) !== -1 || e.target.contentEditable === 'true') {
        return
      }
      this.toggle(false)
      return false
    },
    emitOpenEvent() {
      if (this.disableAnimation) {
        // 禁用动画时不需要等待
        this.$emit('open', this.$refs.layout)
        return
      }
      // 开启动画时，有个318ms的动画
      setTimeout(() => {
        this.$emit('open', this.$refs.layout)
      }, 318)
    },
    emitCloseEvent() {
      if (this.disableAnimation) {
        // 禁用动画时不需要等待
        this.$emit('closed')
        return
      }
      // 开启动画时，有个318ms的动画
      setTimeout(() => {
        this.$emit('closed')
      }, 318)
    }
  },
  mounted() {
    // 检查传入的  dock 值是否有效
    const docks = ['top', 'right', 'bottom', 'left']
    if (this.dock && docks.indexOf(this.dock) === -1) {
      throw new Error(`Invalid dock value "${this.dock}", Optional: ${docks.join(',')} `)
    }
    this.appendComponentTo()
    if (this.allowResize) {
      // 绑定鼠标事件
      document.addEventListener('mousemove', this.mouseMoveHandler)
      document.addEventListener('mouseup', this.mouseUpHandler)
    }
    if (!this.ignoreEsc) {
      this.$el.addEventListener('keydown', this.onKeydown)
    }
    this.extensionButtons = this.$refs.buttons
  },
  beforeDestroy() {
    if (!this.ignoreEsc) {
      this.$el.removeEventListener('keydown', this.onKeydown)
    }
    if (this.allowResize) {
      // 移除事件
      document.removeEventListener('mousemove', this.mouseUpHandler)
      document.removeEventListener('mouseup', this.mouseMoveHandler)
    }
    if (this.isVisible) {
      this.setVisibleValue(false)
    }
    if (this.appendTo) {
      try {
        this.$el.parentElement.removeChild(this.$el)
      } catch (e) {
        // ignore
      }
    }
  }
}
