---
theme: default
background: /generated-nomai-lang-1742631612365.png
highlighter: shiki
lineNumbers: false
info: FlowChat 演示
drawings:
  persist: false
transition: slide-left
title: FlowChat - 分支式聊天应用
---

<div class="w-full h-full absolute top-0 left-0 flex flex-col justify-center items-center">
  <h1>FlowChat</h1>

  <div>{{ typing }}<span class="cursor">_</span></div>
</div>

<div class="abs-br m-6 flex gap-2 justify-center items-center">
  LemonNekoGH
  <a href="https://github.com/LemonNekoGH" target="_blank" alt="GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

<script setup lang="ts">
import { ref } from 'vue'
import { useIntervalFn } from '@vueuse/core'

const i = ref(0)

const subtitles = [
  '重新定义 LLM 聊天体验？',
  '可回顾思维变化过程的聊天 UI',
  '鼓励创意发散的聊天 UI',
  '分支式聊天 UI 新体验'
]

// 打字效果
const typing = ref('')
const typingIndex = ref(0)
const typingSpeed = 50
const deletingSpeed = 25
const direction = ref<'typing' | 'deleting'>('typing')
const pause = ref(false)
const pauseDurationTyping = 1500
const pauseDurationDeleting = 1000

function runTyping() {
  if (pause.value) return
  const currentSubtitle = subtitles[typingIndex.value]
  if (direction.value === 'typing') {
    typing.value = currentSubtitle.slice(0, typing.value.length + 1)
    if (typing.value.length === currentSubtitle.length) {
      pause.value = true
      setTimeout(() => {
        direction.value = 'deleting'
        pause.value = false
        runTyping()
      }, pauseDurationTyping)
      return
    }
    setTimeout(runTyping, typingSpeed)
  } else if (direction.value === 'deleting') {
    typing.value = currentSubtitle.slice(0, typing.value.length - 1)
    if (typing.value.length === 0) {
      pause.value = true
      setTimeout(() => {
        typingIndex.value = (typingIndex.value + 1) % subtitles.length
        direction.value = 'typing'
        pause.value = false
        runTyping()
      }, pauseDurationDeleting)
      return
    }
    setTimeout(runTyping, deletingSpeed)
  }
}

runTyping()
</script>

<style>
.cursor {
  display: inline-block;
  width: 1ch;
  animation: blink 1s steps(1) infinite;
}
@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}
</style>

<!--
大家好，我先自我介绍一下，我是 LemonNeko，大家可以叫我柠喵，我是一个游戏开发者，喜欢玩游戏，在业余时间写 AIRI 和 FlowChat，我还不太会上台 Demo，有讲的不好的地方可以之后交流。

今天要给大家 Demo 的是 FlowChat，也许经常来 Demo Inn 的小伙伴已经听说过了，但是今天我重新介绍一下，FlowChat 是我三四个月前在写 AIRI 的时候开的一个项目，它是一个分支式 LLM 聊天应用。
-->

---
class: flex justify-center items-center gap-20 px-40 text-2xl
---

分支式聊天应用？

<!--
很多人听到这个「分支式聊天」就会问，哈？
-->

---
class: flex justify-center items-center gap-20 px-40 text-2xl
---

聊天也能开分支？

<!--
「聊天也能开分支？」

是的，不仅能开分支，而且我们在平时和人类聊天的时候也会开分支，我们经常会说「话又说回来」来切换分支。
-->

---
class: flex justify-center items-center gap-20 px-40 text-2xl
---

举个 🌰

---
class: flex justify-center text-lg
---

<div class="w-full h-full absolute top-87px left-316px" v-click="1">
  <!-- 1 -> 3 -->
  <svg class="w-full h-full">
    <path d="M0,0 C0,0 0,22 0,22" stroke="#38bdf8" stroke-width="2" fill="none" marker-end="url(#arrow)" />
  </svg>
</div>

<div class="w-full h-full absolute top-211px left-316px" v-click="2">
  <!-- 3 -> 5 -->
  <svg class="w-full h-full">
    <path d="M0,0 C0,0 0,22 0,22" stroke="#38bdf8" stroke-width="2" fill="none" marker-end="url(#arrow)" />
  </svg>
</div>

<div class="w-full h-full absolute top-211px left-316px" v-click="4">
  <!-- 3 -> 6 -->
  <svg class="w-full h-full">
    <path d="M0,0 C169,0 169,11 338,22" stroke="#38bdf8" stroke-width="2" fill="none" marker-end="url(#arrow)" />
  </svg>
</div>

<div class="w-full h-full absolute top-278px left-316px" v-click="3">
  <!-- 5 -> 7 -->
  <svg class="w-full h-full">
    <path d="M0,0 C0,0 0,22 0,22" stroke="#38bdf8" stroke-width="2" fill="none" marker-end="url(#arrow)" />
  </svg>
</div>

<div class="w-full h-full absolute top-278px left-654px" v-click="5">
  <!-- 6 -> 8 -->
  <svg class="w-full h-full">
    <path d="M0,0 C0,0 0,22 0,22" stroke="#38bdf8" stroke-width="2" fill="none" marker-end="url(#arrow)" />
  </svg>
</div>

<div class="w-3/4 mx-auto">
  <div class="grid grid-cols-2 gap-5 w-full z-10">
    <div id="q1" class="b-sky-300 b-2px b-solid b-rounded-xl p-2 bg-sky-100 h-fit">
      请一句话介绍 Demo Inn
    </div>
    <div/>
    <div id="a1" class="b-pink-300 b-2px b-solid b-rounded-xl p-2 bg-pink-100 h-fit" v-click="1">
      Demo Inn 是创作者们分享作品的温暖客厅，我们在这里分享自己的作品，互相交流，互相学习。
    </div>
    <div/>
    <div id="q2" class="b-sky-300 b-2px b-solid b-rounded-xl p-2 bg-sky-100 w-full h-fit" v-click="2">
      可以可爱一点吗？
    </div>
    <div id="q3" class="b-sky-300 b-2px b-solid b-rounded-xl p-2 bg-sky-100 h-fit" v-click="4">
      改得像猫娘一点？
    </div>
    <div id="a2" class="b-pink-300 b-2px b-solid b-rounded-xl p-2 bg-pink-100 w-full h-fit" v-click="3">
      Demo Inn 是创作者们的小窝窝，大家在这里开心分享宝贝作品，互相点赞，互相学习，一起变得更棒棒！
    </div>
    <div id="a3" class="b-pink-300 b-2px b-solid b-rounded-xl p-2 bg-pink-100 w-full h-fit" v-click="5">
      Demo Inn 是创作者们的温暖小窝窝喵~大家在这里喵喵地分享萌萌哒作品，互相摸摸头头，互相学习，一起变得更厉害喵！
    </div>
  </div>
</div>

<!--
我们问「一句话介绍 Demo Inn」它会说：

[CLICK]

「Demo Inn 是创作者们分享作品的温暖客厅，我们在这里分享自己的作品，互相交流，互相学习。」

[CLICK]

我们说「可以可爱一点吗？」它会说：

[CLICK]

「Demo Inn 是创作者们的小窝窝，大家在这里开心分享宝贝作品，互相点赞，互相学习，一起变得更棒棒！」

[CLICK]

然后我感觉它回答的不好，在传统聊天 UI 中，我会需要删除最后两句话，然后重新发送，但是在 FlowChat 中，我只需要创建一个分支，说「改得像猫娘一点？」就好了：

[CLICK]

「Demo Inn 是创作者们的温暖小窝窝喵~大家在这里喵喵地分享萌萌哒作品，互相摸摸头头，互相学习，一起变得更厉害喵！」

看，我们可以保留之前的回答，虽然我不喜欢它上一个回答，但是我也想看回答的结果，这就是使用 FlowChat 的乐趣。
-->


---
class: flex justify-center items-center gap-20 px-40 text-2xl
---

更多 🌰 ？

<!--
那还有更多使用 FlowChat 的场景吗？有的，比如我们想要比较两个不同的模型的生成结果，就可以使用 Fork 功能轻松做到。
-->

---
class: flex justify-center items-center gap-20 px-40 text-2xl
---

<video src="/flow-chat-compare-models.mp4" class="w-full h-full" controls />

<!--
对于 GPT-3.5 来说，LLM 是法学硕士，而对于 GPT-4.1-nano 来说，LLM 是大语言模型，FlowChat 可以让我们方便比较两个不同的模型的生成结果。
-->

---
class: flex justify-center items-center gap-20 px-40 text-2xl
---

图像生成？

<!--
既然可以比较不同结果，那在一些方面就显得特别有用，比如图像生成。
-->

---
class: flex justify-center items-center gap-20 px-40 text-2xl
---

<video src="/flow-chat-image-generation.mp4" class="w-full h-full" controls />

<!--
说完了 FlowChat 是什么，以及使用场景，那 FlowChat 的 Roadmap 是什么呢？
-->

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
    <carbon-document-audio class="text-2xl mb-2" />
    <div class="font-medium">TTS 功能</div>
  </div>
  <div class="border p-4 rounded-lg bg-white dark:bg-gray-800">
    <carbon-document-attachment class="text-2xl mb-2" />
    <div class="font-medium">文件上传</div>
  </div>
  <div class="border p-4 rounded-lg bg-white dark:bg-gray-800">
    <carbon-search class="text-2xl mb-2" />
    <div class="font-medium">消息搜索与定位</div>
  </div>
  <div class="border p-4 rounded-lg bg-white dark:bg-gray-800">
    <carbon-cube class="text-2xl mb-2" />
    <div class="font-medium">接入更多模态</div>
  </div>
  <div class="border p-4 rounded-lg bg-white dark:bg-gray-800">
    <carbon-idea class="text-2xl mb-2" />
    <div class="font-medium">你的想法</div>
  </div>
</div>

<!--
目前我们依然在开发中，所以还有很多功能没有实现，比如会话导出与分享，TTS 功能，文件上传，消息搜索与定位，接入更多模态，你的想法。

如果你有任何想法，欢迎在 GitHub 上提交 Issue 或者 Pull Request，也欢迎加入我们的 Discord 社区，一起讨论 FlowChat 的未来。
-->

---
layout: center
class: text-center
---

<img src="/qr-codes.png" class="w-full h-full" />

<!--
一大波二维码来袭！

诶怎么还有 AIRI，那也请给 AIRI 点 🌟 吧！
-->

---
layout: center
class: text-center
---

# 谢谢大家！

<!--
谢谢大家！欢迎接下来和我交流！今天我应该不会逃跑了（x
-->
