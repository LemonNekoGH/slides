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
    <UserNode id="title" ref="title" class="b-4 rounded-xl" :connections="['top', 'bottom']">
      <div class="text-6xl p-4">FlowChat Direct</div>
    </UserNode>
  </div>
  <div class="abs-br m-6 flex gap-2 justify-center items-center">
    <AssistantNode id="author" ref="author" :connections="['top', 'bottom']">
      <div class="px-2 text-lg">
        <span>LemonNekoGH</span>
        <a href="https://github.com/LemonNekoGH" target="_blank" alt="GitHub"
          class="text-xl slidev-icon-btn !border-none">
          <carbon-logo-github />
        </a>
      </div>
    </AssistantNode>
  </div>
  <ConnectionLine
    parent-selector="#page1-root"
    start-selector="#title"
    end-selector="#author"
    direction="vertical"
  />
</div>

<!--
大家好，我是 LemonNeko，大家可以叫我柠喵。今天要给大家介绍的是 FlowChat 的一些进展。
-->

---

# 向量相似性搜索

- 实现了基于向量的语义搜索功能
- 可以快速找到历史对话中的相关内容
- 不再依赖简单的关键词匹配
- 理解对话的语义含义

::right::

# 优化搜索 UI

- 采用类似命令面板的现代化界面
- 快捷键快速唤起搜索
- 实时显示搜索结果
- 提升用户体验

<!--
首先是搜索功能的重大升级。我实现了向量相似性搜索，这意味着 FlowChat 现在可以理解你搜索内容的语义，
而不仅仅是匹配关键词。同时，我还优化了搜索界面，采用了类似 VSCode 命令面板的设计，让搜索更加便捷。
-->

---

# 记忆系统

FlowChat 现在拥有了记忆能力

- **基础记忆功能**：AI 可以记住对话中的重要信息
- **两层提示词系统**：更好地管理上下文和记忆
- **写入记忆工具**：AI 可以主动保存重要信息
- **系统提示词增强**：自动添加当前时间等上下文信息

<!--
这是一个非常重要的更新 - 记忆系统。FlowChat 现在可以记住你之前说过的重要信息，
比如你的偏好、项目细节等。它使用了两层提示词系统来更好地管理这些记忆，
并且 AI 可以主动决定什么信息值得记住。这让对话变得更加连贯和个性化。
-->

---

# 多模态输入支持

<div class="text-center mt-8">
  <div class="text-6xl mb-8">🖼️ 📝 🎤</div>
  <p class="text-2xl">
    现在支持多种输入方式
  </p>
  <ul class="text-left mt-8 text-xl">
    <li>✅ 文字输入</li>
    <li>✅ 图片上传</li>
    <li>✅ 多模态组合</li>
    <li>✅ 富媒体内容处理</li>
  </ul>
</div>

<!--
FlowChat 现在支持多模态输入了！你不仅可以发送文字，还可以上传图片，让 AI 理解和分析图片内容。
这大大扩展了 FlowChat 的使用场景，比如可以让 AI 帮你分析图表、理解截图、处理设计稿等等。
-->

---

# 用户体验提升

---

## 新的输入界面

- 更加现代化的设计
- 更直观的操作方式
- 支持多种输入模式
- 更好的响应式布局

::right::

## 智能会话管理

- 自动更新会话标题
- 根据对话内容智能命名
- 不再需要手动命名
- 更容易找到历史对话

<!--
在用户体验方面，我重新设计了输入界面，让它更加现代化和易用。同时，FlowChat 现在可以根据对话内容
自动生成会话标题，你不再需要手动命名每个对话，FlowChat 会智能地理解对话主题并生成合适的标题。
-->

---

# 对话增强功能

<div class="grid grid-cols-2 gap-8 mt-8">
  <div class="p-6 bg-blue-500/10 rounded-lg">
    <h3 class="text-2xl mb-4">🔄 重新生成</h3>
    <p>对 AI 的回答不满意？<br/>一键重新生成新的回答</p>
  </div>
  <div class="p-6 bg-green-500/10 rounded-lg">
    <h3 class="text-2xl mb-4">📝 总结功能</h3>
    <p>自动总结长对话内容<br/>快速回顾重点信息</p>
  </div>
  <div class="p-6 bg-purple-500/10 rounded-lg">
    <h3 class="text-2xl mb-4">🛠️ 工具调用显示</h3>
    <p>清晰展示 AI 使用的工具<br/>提高透明度和可控性</p>
  </div>
  <div class="p-6 bg-orange-500/10 rounded-lg">
    <h3 class="text-2xl mb-4">💭 思考过程展示</h3>
    <p>专门的组件显示 AI 的思考<br/>理解 AI 的推理过程</p>
  </div>
</div>

<!--
FlowChat 现在有了更多实用的对话功能。你可以重新生成 AI 的回答，如果对结果不满意的话。
可以让 AI 总结长对话，快速回顾重点。还能看到 AI 使用了哪些工具，以及它的思考过程，
这让整个对话过程更加透明和可控。
-->

---

# 架构优化

- **会话状态管理**：提取会话逻辑到独立的 store
- **消息内容重构**：统一的内容部分结构
- **数据库优化**：级联删除，并发安全的迁移
- **Token 流式传输修复**：更流畅的打字效果
- **防重复发送**：添加发送中的保护机制

<!--
在底层架构方面，我做了很多优化。重构了状态管理，让代码更加清晰和可维护。
优化了数据库操作，修复了一些边界情况的 bug。这些改进虽然用户不太能直接感知到，
但它们让 FlowChat 运行得更加稳定和高效。
-->

---

# 用户界面细节优化

<div class="mt-8 text-xl">
  <ul class="space-y-4">
    <li>✅ 修复对话框 z-index 问题</li>
    <li>✅ 修复推理组件显示不稳定问题</li>
    <li>✅ 避免空思考块的显示</li>
    <li>✅ 将助手操作移到工具栏</li>
    <li>✅ 更好的交互反馈</li>
  </ul>
</div>

<!--
在界面细节方面，我修复了很多小问题，比如对话框层级问题、组件显示不稳定等。
这些看起来是小改进，但它们都能让使用体验更加流畅。细节决定成败，
我一直在努力打磨 FlowChat 的每一个细节。
-->

---

# 总结

<div class="text-xl mt-8">
  <p class="mb-6">从 9598850 提交到现在，FlowChat 经历了 <strong class="text-3xl text-blue-400">24</strong> 次重要更新</p>

  <div class="grid grid-cols-2 gap-6 mt-8">
    <div>
      <h3 class="text-2xl mb-4 text-green-400">新增功能</h3>
      <ul class="space-y-2">
        <li>• 向量搜索</li>
        <li>• 记忆系统</li>
        <li>• 多模态输入</li>
        <li>• 智能标题</li>
        <li>• 思考过程展示</li>
      </ul>
    </div>
    <div>
      <h3 class="text-2xl mb-4 text-blue-400">优化改进</h3>
      <ul class="space-y-2">
        <li>• 全新 UI 设计</li>
        <li>• 架构重构</li>
        <li>• 性能优化</li>
        <li>• Bug 修复</li>
        <li>• 用户体验提升</li>
      </ul>
    </div>
  </div>
</div>

<!--
总结一下，从指定的提交开始到现在，FlowChat 经历了 24 次重要更新。
新增了向量搜索、记忆系统、多模态输入等重要功能，同时对用户界面和底层架构都做了大量优化。
这些更新让 FlowChat 变得更加智能、更加好用。
-->

---
class: text-center
---

# 谢谢大家！

<div class="mt-8">
  <p class="text-xl mb-4">欢迎体验 FlowChat</p>
  <p class="text-lg text-gray-400">https://github.com/lemonnekogh/flow-chat</p>
</div>

<!--
谢谢大家！FlowChat 是一个开源项目，欢迎大家来体验、反馈和贡献。
如果有任何问题或建议，欢迎和我交流！
-->
