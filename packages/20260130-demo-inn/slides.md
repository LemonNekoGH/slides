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

  <div id="page2-virtual-next" class="w-full h-full absolute top-[100%] left-0"></div>

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
  <AssistantNode  class="b-4 rounded-xl absolute top-8 left-8 w-max" id="page3-title" :connections="['top', 'bottom']">
    <div class="text-5xl p-2">消息搜索</div>
  </AssistantNode>
  <UserNode class="b-4 rounded-xl absolute top-16 left-8 w-max" id="page3-video" :connections="['top', 'bottom']">
    <div class="text-xl p-2">
      <video src="/flow-chat-search.mp4" class="w-600px h-360px" controls />
    </div>
  </UserNode>

  <ConnectionLine
    parent-selector="#page3-root"
    start-selector="#page3-title"
    end-selector="#page3-video"
    direction="vertical"
  />
</div>

---

<div id="page4-root" class="w-full h-full absolute top-0 left-0">
  <AssistantNode class="b-4 rounded-xl absolute top-8 left-8 w-max" id="page4-title" :connections="['top', 'bottom']">
    <div class="text-5xl p-2">记忆系统</div>
  </AssistantNode>

  <UserNode class="b-4 rounded-xl absolute top-16 left-8 w-max" id="page4-video" :connections="['top', 'bottom']">
    <div class="text-xl p-2">
      <video src="/flow-chat-basic-memory.mp4" class="w-600px h-360px" controls />
    </div>
  </UserNode>

  <ConnectionLine
    parent-selector="#page4-root"
    start-selector="#page4-title"
    end-selector="#page4-video"
    direction="vertical"
  />
  <ConnectionLine
    parent-selector="#page4-root"
    start-selector="#page4-subtitle"
    end-selector="#page4-item1"
    direction="vertical"
  />
</div>

<!--
这是一个非常重要的更新 - 记忆系统。FlowChat 现在可以记住你之前说过的重要信息，
比如你的偏好、项目细节等。它使用了两层提示词系统来更好地管理这些记忆，
并且 AI 可以主动决定什么信息值得记住。这让对话变得更加连贯和个性化。
-->

---

<div id="page5-root" class="w-full h-full absolute top-0 left-0">
  <AssistantNode class="b-4 rounded-xl absolute top-8 left-8 w-max" id="page5-title" :connections="['top', 'bottom']">
    <div class="text-5xl p-2">多模态输入支持</div>
  </AssistantNode>

  <UserNode class="b-4 rounded-xl absolute top-16 left-8 w-max" id="page5-subtitle" :connections="['top', 'bottom']">
    <div class="text-2xl p-2">现在支持多种输入方式</div>
  </UserNode>

  <AssistantNode class="b-4 rounded-xl absolute top-24 left-8 w-max" id="page5-item1" :connections="['top', 'bottom']">
    <div class="text-xl p-2">
      <div>比如图片上传</div>
      <img src="/flow-chat-multimodal-input.jpg" class="rounded-xl w-600px h-195px object-contain" />
    </div>
  </AssistantNode>

  <ConnectionLine
    parent-selector="#page5-root"
    start-selector="#page5-title"
    end-selector="#page5-subtitle"
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
</div>

<!--
在图中大家应该也不难看到 AI 的回复里是不是多出来了一个 thinking 的显示，这也是更新的一部分。
-->

---

<div id="page10-root" class="w-full h-full absolute top-0 left-0">
  <AssistantNode class="b-4 rounded-xl absolute top-32 left-1/2 -translate-x-1/2 w-max" id="page10-title" :connections="['top', 'bottom']">
    <div class="text-2xl p-2">不只 FlowChat</div>
  </AssistantNode>

  <UserNode v-click="2" class="b-4 rounded-xl absolute top-40 left-1/2 -translate-x-1/2 w-max" id="page10-subtitle" :connections="['top', 'bottom']">
    <div class="text-6xl py-2 px-8">AIRI 的更新</div>
  </UserNode>

  <ConnectionLine
    v-click="1"
    parent-selector="#page10-root"
    start-selector="#page10-title"
    end-selector="#page10-subtitle"
    direction="vertical"
  />
</div>

<!--
不只是 FlowChat

[CLICK]

不只是 FlowChat，AIRI 我也给 AIRI 写了一点小小的更新。
-->

---

<div id="page11-root" class="w-full h-full absolute top-0 left-0 flex justify-center gap-8 items-center">
  <AssistantNode class="b-4 rounded-xl w-max" id="page11-title" :connections="['top', 'bottom']">
    <div class="text-xl p-2">
      <div>发送通知的能力</div>
      <video src="/airi-notification-capability.mp4" class="w-180px h-400px" controls />
    </div>
  </AssistantNode>
  <AssistantNode class="b-4 rounded-xl w-max" id="page11-title" :connections="['top', 'bottom']">
    <div class="text-xl p-2">
      <div>iOS 试验性适配</div>
      <video src="/airi-ios-color-scheme.mp4" class="w-180px h-400px" controls />
    </div>
  </AssistantNode>
</div>

<!--
我赋予了 AIRI 发送通知的能力，她将来可以看心情发通知来找你。

[CLICK]

对，它是手机端的适配，我们称之为 Pocket，口袋 AIRI，它的图标可以跟随 iOS 的深色模式自动切换。
-->

---

<div id="page11-root" class="w-full h-full absolute top-0 left-0">
  <AssistantNode class="absolute left-8 top-8 rounded-xl w-max" id="page11-title" :connections="['top', 'bottom']">
    <div class="text-xl p-2">谢谢大家！</div>
  </AssistantNode>
  <UserNode class="rounded-xl w-max absolute left-8 top-18" id="page11-qrcodes" :connections="['top', 'bottom']">
    <div p-2>
      <img src="/qr-codes.png" class="w-600px h-full object-contain" />
    </div>
  </UserNode>
  <ConnectionLine
    parent-selector="#page11-root"
    start-selector="#page11-title"
    end-selector="#page11-qrcodes"
    direction="vertical"
  />
  <ConnectionLine
    parent-selector="#page11-root"
    start-selector="#page11-welcome"
    end-selector="#page11-link"
    direction="vertical"
  />
</div>

<!--
谢谢大家！我把 FlowChat 和 AIRI 的更新都放在了这里，欢迎大家来体验、反馈和贡献。
-->
