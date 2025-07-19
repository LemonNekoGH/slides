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
class: text-center
title: 100 个 Star！
---

[![Star History Chart](https://api.star-history.com/svg?repos=LemonNekoGH/flow-chat&type=Date)](https://www.star-history.com/#LemonNekoGH/flow-chat&Date)

<!--
首先庆祝 FlowChat 在 GitHub 上获得了 100 个 Star！感谢大家的支持！
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
title: 例子：一句话介绍 Demo Inn
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

这个感觉太正式了，我们说「可以可爱一点吗？」它会说：

[CLICK]

「Demo Inn 是创作者们的小窝窝，大家在这里开心分享宝贝作品，互相点赞，互相学习，一起变得更棒棒！」

[CLICK]

嗯，它可能觉得只要加上叠词词，就可以可爱爱，我觉得不够，那要不回到传统艺能：「改得像猫娘一点？」，
在传统聊天 UI 中，我会需要删除最后两句话，然后重新发送，或者点编辑按钮，但是所有的下文就会全部消失，
而在 FlowChat 中，我只需要创建一个分支，说「改得像猫娘一点？」就好了：

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
看，对于 GPT-3.5 来说，LLM 是法学硕士，而对于 GPT-4.1-nano 来说，LLM 是大语言模型，FlowChat 可以让我们方便比较
两个不同的模型的生成结果，对于不知道选什么模型来说，这种
功能就非常方便，而且你还能展示给别人看。
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
title: 图像生成
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
    <carbon-machine-learning class="text-2xl mb-2" />
    <div class="font-medium">生成请求构造器</div>
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
---

# 等等，什么叫&nbsp;&nbsp;生成&nbsp;&nbsp;请求&nbsp;&nbsp;构造&nbsp;&nbsp;器？

<!--
生成，请求，构造，器？有人说，为什么这四个词连在一起就听不懂了？但是如果我说 Generation Request Builder，是不是就很好理解了？哎呀我居然在拿英语解释中文。

所谓生成请求构造器，就是一个表单，你可以详细填写请求的参数，比如修改模型，修改温度，修改最大长度等等。

在 Fork 功能中，你可以同时使用多种不同参数来进行生成多个结果，来比较同一上下文的不同效果，
如果你对某个结果满意，你还可以保存下来，方便之后复现相同的效果。

更进一步，每条消息都可以在鼠标右键的菜单中查看使用的参数，并且可以一键复制到生成请求构造器中。
-->

---
layout: center
title: Inventory
---

<div class="flex flex-col items-center justify-center gap-4">
  <h1>Inventory</h1>
  <img src="/mc-logo-icon.png" class="w-8rem h-8rem block" v-click="1" />
</div>

<!--
但是，每个模型都有不同的参数，能力，虽然大部分都是通用的，但是总有一些模型是不同的，
有的模型可能就不支持 tool calling，有的模型可能就不支持多模态，有的模型可能就不支持流式输出。

为了让生成请求构造器变得更聪明（毕竟没人希望填了一大堆参数，不知道哪些对使用的模型生效），
我们创建了一个新的项目，叫 Inventory，它包含一个模型目录，我们希望建立一个大而全的模型目录。

[CLICK]

嗯，对，名字来源就是 Minecraft 的 Inventory，物品栏，我们想把模型一个一个地收集到
物品栏里，然后展示给大家，也能方便大家查找。
-->

---
layout: center
---

<img src="/inventory-issue-template.png" class="w-full h-full" />

<!--
当然，不一定是我们自己收集，我们做了一个表单化贡献的系统，你可以在 Inventory 的仓库里
创建 Issue，填写模型信息，就会有个 Bot 来帮你创建 PR，然后你就可以在 FlowChat 中使用这个模型了。
-->

---
layout: center
---

<img src="/inventory-pr-created.png" class="w-full h-full" />

<!--
在创建 PR 之后，Bot 会自动在 Issue 中回复你，你可以自己去 review，也可以等我们来看。
-->

---
layout: center
class: text-center
title: 一大波二维码来袭！
---

<img src="/qr-codes.png" class="w-full h-full" />

<!--
嗯，这次的 Demo 就到这里了，一大波二维码来袭！欢迎大家扫码体验 FlowChat。
也可以加我微信，我们深入交流。

诶怎么还有 AIRI，那也请给 AIRI 点 🌟 吧！
-->

---
layout: center
---

# 谢谢大家！

<!--
谢谢大家！欢迎接下来和我交流！今天我应该不会逃跑了（x
-->
