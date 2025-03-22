---
theme: default
background: /generated-nomai-lang-1742631612365.png
class: text-center
highlighter: shiki
lineNumbers: false
info: Flow Chat 演示
drawings:
  persist: false
transition: slide-left
title: Flow Chat - 分支式聊天应用
---

# Flow Chat

<h2 v-click.hide="2">重新定义 LLM 聊天体验</h2>
<h2 v-click="2">分支式聊天的新体验</h2>

<div v-click="1" class="flex justify-center my-4">
  <img src="/screenshot_battle_with_cursor_1.jpg" class="w-468px h-96px" />
</div>

<div class="pt-6">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    开始演示 <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <a href="https://github.com/LemonNekoGH/flow-chat" target="_blank" alt="GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

---
theme: default
layout: two-cols
background: /generated-nomai-lang-1742631612365.png
---

# 传统聊天应用的痛点

- <span v-click="1">与 LLM 聊天容易偏题</span>
- <span v-click="7">需要删除历史消息回到正题</span>
- <span v-click="9">删除操作会丢失有价值的内容</span>
- <span v-click="12">无法同时保留多个对话方向</span>
- <span v-click="13">重新生成回复操作繁琐</span>

::right::

<div class="flex items-center justify-center h-full">
  <div class="border p-4 rounded shadow-lg bg-white dark:bg-gray-800 w-full max-w-md">
    <div class="text-center mb-4 text-sm text-gray-500">传统聊天应用</div>
    <div class="space-y-4">
      <div class="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg max-w-[80%]" v-click="1">我想讨论一个 airi 的功能</div>
      <div class="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg max-w-[80%] ml-auto" v-click="2">好的，您想讨论哪方面的功能？</div>
      <div class="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg max-w-[80%]" v-click="3">关于动态主题色的实现</div>
      <div class="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg max-w-[80%] ml-auto" v-click="4">你可以看看 Unocss 和 Material Design</div>
      <div class="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg max-w-[80%]" v-click="5" :class="{ 'hidden': $clicks > 7 }">说到 Material Design，你觉得最新的 Material 3 怎么样？</div>
      <div class="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg max-w-[80%] ml-auto" v-click="6" :class="{ 'hidden': $clicks > 6 }">Material 3 的卡片组件设计得很不错</div>
      <div class="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg max-w-[80%]" v-click="10">我们讨论一下 Unocss 的实现方式</div>
      <div class="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg max-w-[80%] ml-auto" v-click="11">使用 CSS 变量</div>
    </div>
  </div>
</div>

---
layout: default
---

# Flow Chat 的解决方案

<div grid="~ cols-2 gap-4">
<div>

## 分支聊天功能

- <span v-click="1">从任意消息创建新分支</span>
- <span v-click="4">保留所有对话历史</span>
- <span v-click="5">可视化流程图展示对话结构</span>
- <span v-click="6">轻松在分支间切换</span>
- <span v-click="8">无需删除即可探索多个方向</span>

</div>
<div class="flex items-center justify-center">
  <div class="border p-4 rounded shadow-lg bg-white dark:bg-gray-800 w-full">
    <div class="text-center mb-4 text-sm text-gray-500">Flow Chat 分支对话</div>
    <div class="flex justify-center">
      <div class="relative">
        <!-- 简化的流程图示意 -->
        <div class="bg-gray-200 dark:bg-gray-700 p-2 rounded-lg mb-2 text-sm w-100">airi 功能讨论</div>
        <div class="h-6 w-0.5 bg-gray-400 mx-auto"></div>
        <div class="bg-gray-200 dark:bg-gray-700 p-2 rounded-lg mb-2 text-sm">动态主题色实现</div>
        <div class="h-6 w-0.5 bg-gray-400 mx-auto"></div>
        <div class="bg-gray-200 dark:bg-gray-700 p-2 rounded-lg mb-2 text-sm">参考 Unocss 和 Material Design</div>
        <!-- 分支点 -->
        <div class="flex gap-x-4">
          <div class="flex flex-1 flex-col items-center">
            <div class="h-6 w-0.5 bg-gray-400"></div>
            <div class="bg-blue-200 dark:bg-blue-800 p-2 rounded-lg text-sm w-full">Material 3 如何？</div>
            <div class="h-6 w-0.5 bg-gray-400"></div>
            <div class="bg-blue-200 dark:bg-blue-800 p-2 rounded-lg text-sm w-full">卡片组件很好</div>
            <div class="h-6 w-0.5 bg-gray-400" v-click="7"></div>
            <div class="bg-blue-200 dark:bg-blue-800 p-2 rounded-lg text-sm w-full" v-click="7">底部导航栏也很好</div>
          </div>
          <template v-if="$clicks > 1">
            <div class="flex flex-1 flex-col items-center">
              <div class="h-6 w-0.5 bg-gray-400"></div>
              <div class="bg-green-200 dark:bg-green-800 p-2 rounded-lg text-sm w-full" v-click="2">Unocss 实现方式？</div>
              <div class="h-6 w-0.5 bg-gray-400" v-click="3"></div>
              <div class="bg-green-200 dark:bg-green-800 p-2 rounded-lg text-sm w-full" v-click="3">CSS 变量</div>
              <div class="h-6 w-0.5 bg-gray-400" v-click="9"></div>
              <div class="bg-green-200 dark:bg-green-800 p-2 rounded-lg text-sm w-full" v-click="9">亮度与饱和度</div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</div>
</div>

---
layout: two-cols
---

# 核心使用场景

<v-clicks>

- 回到正题，不丢失偏题内容
- 生成多个不同的 LLM 回复
- 对比不同模型的生成结果
- 探索多种解决方案
- 保存思考的不同路径

</v-clicks>

::right::

<div class="flex items-center justify-center h-full">
  <div class="border p-4 rounded shadow-lg bg-white dark:bg-gray-800 w-full">
    <div class="text-center mb-4 font-medium">多模型对比示例</div>
    <div class="flex justify-center">
      <div class="relative">
        <!-- 简化的流程图示意 -->
        <div class="bg-gray-200 dark:bg-gray-700 p-2 rounded-lg mb-2 text-sm">如何优化网站性能？</div>
        <div class="h-6 w-0.5 bg-gray-400 mx-auto"></div>
        <!-- 分支点 -->
        <div class="flex">
          <div class="flex flex-col items-center mr-2">
            <div class="h-6 w-0.5 bg-gray-400"></div>
            <div class="bg-blue-200 dark:bg-blue-800 p-2 rounded-lg text-sm w-32">
              <div class="text-xs text-gray-500">GPT-4</div>
              优化加载速度和缓存策略...
            </div>
          </div>
          <div class="flex flex-col items-center ml-2">
            <div class="h-6 w-0.5 bg-gray-400"></div>
            <div class="bg-purple-200 dark:bg-purple-800 p-2 rounded-lg text-sm w-32">
              <div class="text-xs text-gray-500">Claude</div>
              实现懒加载和代码分割...
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

---
layout: center
---

# 功能演示

<div class="text-center mb-4">
  <div class="text-sm text-gray-500 mb-2">Flow Chat 的核心功能</div>
  <div class="flex justify-center">
    <div class="border rounded-lg p-4 bg-white dark:bg-gray-800 max-w-2xl">
      <div class="grid grid-cols-2 gap-4">
        <div class="space-y-2">
          <div class="font-medium">1. 创建分支</div>
          <div class="text-sm text-gray-600 dark:text-gray-400">从任意消息点击或右键创建新分支</div>
        </div>
        <div class="space-y-2">
          <div class="font-medium">2. 流程图视图</div>
          <div class="text-sm text-gray-600 dark:text-gray-400">可视化查看整个对话结构</div>
        </div>
        <div class="space-y-2">
          <div class="font-medium">3. 模型切换</div>
          <div class="text-sm text-gray-600 dark:text-gray-400">使用 model=模型名 快速切换模型</div>
        </div>
        <div class="space-y-2">
          <div class="font-medium">4. 聚焦模式</div>
          <div class="text-sm text-gray-600 dark:text-gray-400">右键选择 Focus In 聚焦于特定分支</div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="text-center text-sm text-gray-500 mt-4">
  [此处演示实际操作]
</div>

---
layout: default
---

# 使用的技术与挑战

<div grid="~ cols-2 gap-4">
<div>

<v-clicks>

- Vue.js + Vite 构建
- Vue Flow 实现流程图
- Pinia 状态管理
- xsai 实现 LLM 模型接入

</v-clicks>

</div>
<div>

```ts {all|3,6|4|5|all}
// 分支管理核心代码
export interface Message {
  id: string
  content: string
  role: 'user' | 'assistant' | 'system'
  parentId: string | null
}
```

</div>
</div>

<div class="mt-8">
  <div class="font-medium mb-2">用户体验挑战</div>
  <div class="grid grid-cols-2 gap-4">
    <div class="border p-3 rounded-lg bg-white dark:bg-gray-800">
      <div class="font-medium text-sm">节点高度问题</div>
      <div class="text-sm text-gray-600 dark:text-gray-400">当 LLM 生成大量文本时，节点高度变得过大</div>
    </div>
    <div class="border p-3 rounded-lg bg-white dark:bg-gray-800">
      <div class="font-medium text-sm">移动端适配</div>
      <div class="text-sm text-gray-600 dark:text-gray-400">保持流程图的清晰度和可读性</div>
    </div>
  </div>
</div>

---
layout: center
class: text-center
---

# 未来规划

<div class="grid grid-cols-3 gap-4 max-w-2xl mx-auto mt-8">
  <div class="border p-4 rounded-lg bg-white dark:bg-gray-800">
    <carbon-export class="text-2xl mb-2" />
    <div class="font-medium">会话导出与分享</div>
  </div>
  <div class="border p-4 rounded-lg bg-white dark:bg-gray-800">
    <carbon-mobile class="text-2xl mb-2" />
    <div class="font-medium">移动端适配</div>
  </div>
  <div class="border p-4 rounded-lg bg-white dark:bg-gray-800">
    <carbon-document-audio class="text-2xl mb-2" />
    <div class="font-medium">TTS 功能</div>
  </div>
  <div class="border p-4 rounded-lg bg-white dark:bg-gray-800">
    <carbon-document-attachment class="text-2xl mb-2" />
    <div class="font-medium">文件上传</div>
  </div>
  <div class="border p-4 rounded-lg bg-white dark:bg-gray-800">
  <carbon-image class="text-2xl mb-2" />
    <div class="font-medium">接入图片生成模型</div>
  </div>
  <div class="border p-4 rounded-lg bg-white dark:bg-gray-800">
    <carbon-search class="text-2xl mb-2" />
    <div class="font-medium">消息搜索与定位</div>
  </div>
</div>

---
layout: center
class: text-center
---

# 谢谢观看

<div class="flex gap-10 w-full">
  <div class="flex flex-col items-center flex-1">
    <div class="font-medium">GitHub</div>
    <div class="font-medium">LemonNekoGH/flow-chat</div>
    <div class="flex items-center justify-center w-50 h-50 bg-cover" style="background-image: url(/flow-chat-repo.png)">
      <carbon-logo-github class="text-4xl mx-auto text-black bg-white" />
    </div>
  </div>
  <div class="flex flex-col items-center flex-1">
    <div class="font-medium">在线 Demo</div>
    <div class="font-medium text-nowrap">https://flow-chat.lemonneko.moe</div>
    <div class="flex items-center justify-center w-50 h-50 bg-cover" style="background-image: url(/flow-chat-demo.png)">
      <carbon-license-global class="text-4xl mx-auto text-black bg-white" />
    </div>
  </div>
</div>
<div class="mt-12 text-xl">
  问答环节
</div>

---

<div class="w-full h-full bg-center bg-contain bg-no-repeat bg-black" style="background-image: url(/generated-nomai-lang-1742631612365.png)"></div>
