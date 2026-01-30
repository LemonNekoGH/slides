---
theme: default
highlighter: shiki
lineNumbers: false
info: FlowChat Direct
drawings:
  persist: false
transition: slide-up
title: FlowChat Direct
layout: default
---

<div id="page1-root" class="w-full h-full absolute top-0 left-0">
  <div class="w-full h-full absolute top-0 left-0 flex justify-center items-center">
    <UserNode id="page-1-title" class="b-4 rounded-xl" :connections="['top', 'bottom']">
      <div class="text-6xl p-4">FlowChat Direct</div>
    </UserNode>
  </div>
  <div class="abs-br m-6 flex gap-2 justify-center items-center">
    <AssistantNode id="page-1-author" :connections="['top', 'bottom']">
      <div class="px-2 text-lg">
        <span>LemonNekoGH</span>
        <a href="https://github.com/LemonNekoGH" target="_blank" alt="GitHub"
          class="text-xl slidev-icon-btn !border-none">
          <carbon-logo-github />
        </a>
      </div>
    </AssistantNode>
  </div>
  <div class="w-full h-full absolute top-[100%] left-0 flex justify-center items-center">
    <UserNode id="page1-virtual-next" class="b-4 rounded-xl" :connections="['top', 'bottom']">
      <div class="text-6xl p-4">都有哪些更新呢？</div>
    </UserNode>
  </div>
  <ConnectionLine
    parent-selector="#page1-root"
    start-selector="#page-1-title"
    end-selector="#page-1-author"
    direction="vertical"
  />
  <ConnectionLine
    parent-selector="#page1-root"
    start-selector="#page-1-author"
    end-selector="#page1-virtual-next"
    direction="vertical"
  />
</div>

<!--
大家好，欢迎来到今天的 FlowChat 直面会（笑），我是 LemonNeko 柠猫，今天给大家带来的是 FlowChat 的一些进展。
-->

---

<div id="page2-root" class="w-full h-full absolute top-0 left-0">
  <div class="w-full h-full absolute -top-[100%] left-0">
    <div class="abs-br m-6 flex gap-2 justify-center items-center">
      <AssistantNode id="page2-virtual-prev" :connections="['top', 'bottom']">
        <div class="px-2 text-lg">
          <span>LemonNekoGH</span>
          <a href="https://github.com/LemonNekoGH" target="_blank" alt="GitHub"
            class="text-xl slidev-icon-btn !border-none">
            <carbon-logo-github />
          </a>
        </div>
      </AssistantNode>
    </div>
  </div>

  <div class="w-full h-full absolute top-0 left-0 flex justify-center items-center">
    <UserNode id="page2-title" class="b-4 rounded-xl" :connections="['top', 'bottom']">
      <div class="text-6xl p-4">都有哪些更新呢？</div>
    </UserNode>
  </div>

  <div class="w-full h-full absolute top-[100%] left-0">
    <AssistantNode class="b-4 rounded-xl absolute top-8 left-8 w-max" id="page2-virtual-next" :connections="['top', 'bottom']">
      <div class="text-5xl p-2">消息搜索</div>
    </AssistantNode>
  </div>

  <ConnectionLine
    parent-selector="#page2-root"
    start-selector="#page2-virtual-prev"
    end-selector="#page2-title"
    direction="vertical"
  />

  <ConnectionLine
    parent-selector="#page2-root"
    start-selector="#page2-title"
    end-selector="#page2-virtual-next"
    direction="vertical"
  />
</div>

---

<div id="page3-root" class="w-full h-full absolute top-0 left-0">
  <div class="w-full h-full absolute -top-[100%] left-0 flex justify-center items-center">
    <UserNode id="page3-virtual-prev" class="b-4 rounded-xl" :connections="['top', 'bottom']">
      <div class="text-6xl p-4">都有哪些更新呢？</div>
    </UserNode>
  </div>

  <AssistantNode  class="b-4 rounded-xl absolute top-8 left-8 w-max" id="page3-title" :connections="['top', 'bottom']">
    <div class="text-5xl p-2">消息搜索</div>
  </AssistantNode>
  <UserNode class="b-4 rounded-xl absolute top-16 left-8 w-max" id="page3-video" :connections="['top', 'bottom']">
    <div class="text-xl p-2">
      <video src="/flow-chat-search.mp4" class="w-600px h-360px" controls />
    </div>
  </UserNode>

  <div class="w-full h-full absolute top-[100%] left-0">
    <AssistantNode class="b-4 rounded-xl absolute top-8 left-8 w-max" id="page3-virtual-next" :connections="['top', 'bottom']">
      <div class="text-5xl p-2">记忆系统</div>
    </AssistantNode>
  </div>

  <ConnectionLine
    parent-selector="#page3-root"
    start-selector="#page3-virtual-prev"
    end-selector="#page3-title"
    direction="vertical"
  />
  <ConnectionLine
    parent-selector="#page3-root"
    start-selector="#page3-title"
    end-selector="#page3-video"
    direction="vertical"
  />
  <ConnectionLine
    parent-selector="#page3-root"
    start-selector="#page3-video"
    end-selector="#page3-virtual-next"
    direction="vertical"
  />
</div>

<!-- 这是相当重要的更新，在这么复杂的画布上想要找到一个消息可不是一件容易的事情，现在有了消息搜索，就方便多了。 -->

---

<div id="page4-root" class="w-full h-full absolute top-0 left-0">
  <div class="w-full h-full absolute -top-[100%] left-0">
    <UserNode class="b-4 rounded-xl absolute top-16 left-8 w-max" id="page4-virtual-prev" :connections="['top', 'bottom']">
      <div class="text-xl p-2">
        <video src="/flow-chat-search.mp4" class="w-600px h-360px" controls />
      </div>
    </UserNode>
  </div>

  <AssistantNode class="b-4 rounded-xl absolute top-8 left-8 w-max" id="page4-title" :connections="['top', 'bottom']">
    <div class="text-5xl p-2">记忆系统</div>
  </AssistantNode>

  <UserNode class="b-4 rounded-xl absolute top-16 left-8 w-max" id="page4-video" :connections="['top', 'bottom']">
    <div class="text-xl p-2">
      <video src="/flow-chat-basic-memory.mp4" class="w-600px h-360px" controls />
    </div>
  </UserNode>

  <div class="w-full h-full absolute top-[100%] left-0">
    <AssistantNode class="b-4 rounded-xl absolute top-8 left-8 w-max" id="page4-virtual-next" :connections="['top', 'bottom']">
      <div class="text-5xl p-2">多模态输入支持</div>
    </AssistantNode>
  </div>

  <ConnectionLine
    parent-selector="#page4-root"
    start-selector="#page4-virtual-prev"
    end-selector="#page4-title"
    direction="vertical"
  />
  <ConnectionLine
    parent-selector="#page4-root"
    start-selector="#page4-title"
    end-selector="#page4-video"
    direction="vertical"
  />
  <ConnectionLine
    parent-selector="#page4-root"
    start-selector="#page4-video"
    end-selector="#page4-virtual-next"
    direction="vertical"
  />
</div>

<!--
大家现在都有记忆系统了，我也想要，于是我也引入了记忆的支持，现在 FlowChat 可以记住你之前说过的重要信息，
-->

---

<div id="page5-root" class="w-full h-full absolute top-0 left-0">
  <div class="w-full h-full absolute -top-[100%] left-0">
    <UserNode class="b-4 rounded-xl absolute top-16 left-8 w-max" id="page5-virtual-prev" :connections="['top', 'bottom']">
      <div class="text-xl p-2">
        <video src="/flow-chat-basic-memory.mp4" class="w-600px h-360px" controls />
      </div>
    </UserNode>
  </div>

  <AssistantNode class="b-4 rounded-xl absolute top-8 left-8 w-max" id="page5-title" :connections="['top', 'bottom']">
    <div class="text-5xl p-2">多模态输入支持</div>
  </AssistantNode>

  <UserNode class="b-4 rounded-xl absolute top-16 left-8 w-max" id="page5-subtitle" :connections="['top', 'bottom']">
    <div class="text-2xl p-2">现在支持多种输入方式</div>
  </UserNode>

  <AssistantNode class="b-4 rounded-xl absolute top-24 left-8 w-max" id="page5-item1" :connections="['top', 'bottom']">
    <div class="text-xl p-2">
      <div>比如图片上传</div>
      <img src="/flow-chat-multimodal-input.jpg" class="rounded-xl block" style="width: 600px; height: 195px; object-fit: contain;" loading="eager" />
    </div>
  </AssistantNode>

  <div class="w-full h-full absolute top-[100%] left-0">
    <AssistantNode class="b-4 rounded-xl absolute top-32 left-1/2 -translate-x-1/2 w-max" id="page5-virtual-next" :connections="['top', 'bottom']">
      <div class="text-2xl p-2">不只 FlowChat</div>
    </AssistantNode>
  </div>

  <ConnectionLine
    parent-selector="#page5-root"
    start-selector="#page5-virtual-prev"
    end-selector="#page5-title"
    direction="vertical"
  />
  <ConnectionLine
    parent-selector="#page5-root"
    start-selector="#page5-title"
    end-selector="#page5-subtitle"
    direction="vertical"
  />
  <ConnectionLine
    parent-selector="#page5-root"
    start-selector="#page5-subtitle"
    end-selector="#page5-item1"
    direction="vertical"
  />
  <ConnectionLine
    parent-selector="#page5-root"
    start-selector="#page5-item1"
    end-selector="#page5-virtual-next"
    direction="vertical"
  />
</div>

<!--
在图中大家应该也不难看到 AI 的回复里是不是多出来了一个 thinking 的显示，这也是更新的一部分。
-->

---

<div id="page10-root" class="w-full h-full absolute top-0 left-0">
  <div class="w-full h-full absolute -top-[100%] left-0">
    <AssistantNode class="b-4 rounded-xl absolute top-24 left-8 w-max" id="page10-virtual-prev" :connections="['top', 'bottom']">
      <div class="text-xl p-2">
        <div>比如图片上传</div>
        <img src="/flow-chat-multimodal-input.jpg" class="rounded-xl block" style="width: 600px; height: 195px; object-fit: contain;" loading="eager" />
     </div>
    </AssistantNode>
  </div>

  <AssistantNode class="b-4 rounded-xl absolute top-32 left-1/2 -translate-x-1/2 w-max" id="page10-title" :connections="['top', 'bottom']">
    <div class="text-2xl p-2">不只 FlowChat</div>
  </AssistantNode>

  <UserNode v-click="2" class="b-4 rounded-xl absolute top-40 left-1/2 -translate-x-1/2 w-max" id="page10-subtitle" :connections="['top', 'bottom']">
    <div class="text-6xl py-2 px-8">AIRI 的更新</div>
  </UserNode>

  <div class="w-full h-full absolute top-[100%] left-0 flex justify-center gap-8 items-center">
    <AssistantNode class="b-4 rounded-xl w-max" id="page10-virtual-next-1" :connections="['top', 'bottom']">
      <div class="text-xl p-2">
        <div>发送通知的能力</div>
        <div class="w-180px h-400px opacity-0" />
      </div>
    </AssistantNode>
    <AssistantNode class="b-4 rounded-xl w-max" id="page10-virtual-next-2" :connections="['top', 'bottom']">
      <div class="text-xl p-2">
        <div>iOS 试验性适配</div>
        <div class="w-180px h-400px opacity-0" />
      </div>
    </AssistantNode>
  </div>

  <ConnectionLine
    parent-selector="#page10-root"
    start-selector="#page10-virtual-prev"
    end-selector="#page10-title"
    direction="vertical"
  />
  <ConnectionLine
    v-click="1"
    parent-selector="#page10-root"
    start-selector="#page10-title"
    end-selector="#page10-subtitle"
    direction="vertical"
  />
  <ConnectionLine
    parent-selector="#page10-root"
    start-selector="#page10-subtitle"
    end-selector="#page10-virtual-next-1"
    direction="vertical"
    v-click="2"
  />
  <ConnectionLine
    parent-selector="#page10-root"
    start-selector="#page10-subtitle"
    end-selector="#page10-virtual-next-2"
    direction="vertical"
    v-click="2"
  />
</div>

<!--
不只是 FlowChat

[CLICK]

不只是 FlowChat，AIRI 我也给 AIRI 写了一点小小的更新。
-->

---

<div id="page11-root" class="w-full h-full absolute top-0 left-0">
  <div class="w-full h-full absolute -top-[100%] left-0">
    <UserNode v-click="2" class="b-4 rounded-xl absolute top-40 left-1/2 -translate-x-1/2 w-max" id="page11-virtual-prev" :connections="['top', 'bottom']">
      <div class="text-6xl py-2 px-8">AIRI 的更新</div>
    </UserNode>
  </div>

  <div class="w-full h-full absolute top-0 left-0 flex justify-center gap-8 items-center">
    <AssistantNode class="b-4 rounded-xl w-max" id="page11-item1" :connections="['top', 'bottom']">
      <div class="text-xl p-2">
        <div>发送通知的能力</div>
        <video src="/airi-notification-capability.mp4" class="w-180px h-400px" controls />
      </div>
    </AssistantNode>
    <AssistantNode class="b-4 rounded-xl w-max" id="page11-item2" :connections="['top', 'bottom']">
      <div class="text-xl p-2">
        <div>iOS 试验性适配</div>
        <video src="/airi-ios-color-scheme.mp4" class="w-180px h-400px" controls />
      </div>
    </AssistantNode>
  </div>

  <div class="w-full h-full absolute top-[100%] left-0">
    <AssistantNode class="absolute left-8 top-8 rounded-xl w-max" id="page11-virtual-next" :connections="['top', 'bottom']">
      <div class="text-xl p-2">谢谢大家！</div>
    </AssistantNode>
  </div>

  <ConnectionLine
    parent-selector="#page11-root"
    start-selector="#page11-virtual-prev"
    end-selector="#page11-item1"
    direction="vertical"
  />
  <ConnectionLine
    parent-selector="#page11-root"
    start-selector="#page11-virtual-prev"
    end-selector="#page11-item2"
    direction="vertical"
  />
  <ConnectionLine
    parent-selector="#page11-root"
    start-selector="#page11-item1"
    end-selector="#page11-virtual-next"
    direction="vertical"
  />
  <ConnectionLine
    parent-selector="#page11-root"
    start-selector="#page11-item2"
    end-selector="#page11-virtual-next"
    direction="vertical"
  />
</div>

<!--
我赋予了 AIRI 发送通知的能力，她将来可以看心情发通知来找你。

[CLICK]

对，它是手机端的适配，我们称之为 Pocket，口袋 AIRI，它的图标可以跟随 iOS 的深色模式自动切换。
-->

---

<div id="page12-root" class="w-full h-full absolute top-0 left-0">
  <div class="w-full h-full absolute -top-[100%] left-0 flex justify-center gap-8 items-center">
    <AssistantNode class="b-4 rounded-xl w-max" id="page12-virtual-prev-1" :connections="['top', 'bottom']">
      <div class="text-xl p-2">
        <div>发送通知的能力</div>
        <video src="/airi-notification-capability.mp4" class="w-180px h-400px" controls />
      </div>
    </AssistantNode>
    <AssistantNode class="b-4 rounded-xl w-max" id="page12-virtual-prev-2" :connections="['top', 'bottom']">
      <div class="text-xl p-2">
        <div>iOS 试验性适配</div>
        <video src="/airi-ios-color-scheme.mp4" class="w-180px h-400px" controls />
      </div>
    </AssistantNode>
  </div>

  <AssistantNode class="absolute left-8 top-8 rounded-xl w-max" id="page12-title" :connections="['top', 'bottom']">
    <div class="text-xl p-2">谢谢大家！</div>
  </AssistantNode>
  <UserNode class="rounded-xl w-max absolute left-8 top-18" id="page12-qrcodes" :connections="['top', 'bottom']">
    <div p-2>
      <img src="/qr-codes.png" class="w-600px h-full object-contain" />
    </div>
  </UserNode>

  <ConnectionLine
    parent-selector="#page12-root"
    start-selector="#page12-virtual-prev-1"
    end-selector="#page12-title"
    direction="vertical"
  />
  <ConnectionLine
    parent-selector="#page12-root"
    start-selector="#page12-virtual-prev-2"
    end-selector="#page12-title"
    direction="vertical"
  />
  <ConnectionLine
    parent-selector="#page12-root"
    start-selector="#page12-title"
    end-selector="#page12-qrcodes"
    direction="vertical"
  />
</div>

<!--
谢谢大家！我把 FlowChat 和 AIRI 的更新都放在了这里，欢迎大家来体验、反馈和贡献。
-->
