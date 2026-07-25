---
layout: center
highlighter: shiki
css: unocss
colorSchema: dark
transition: none
title: TODO：GPT-5.6 只看屏幕能打通小丑牌吗？
exportFilename: TODO-小丑牌-Computer-Use
info: |
  TODO · 下一次 Demo 再讲
  Speaker: LemonNeko
lineNumbers: false
drawings:
  persist: true
mdc: true
clicks: 0
preload: false
glow: right
glowOpacity: 0.32
glowHue: 285
glowSeed: 318
routerMode: hash
defaults:
  layout: default
---

<!-- TODO: Complete this deck for a future Demo Inn talk. -->
<!-- slide:B1 -->

<div class="mb-7 text-sm text-fuchsia-200/58">TODO · 下一次再讲</div>
<div class="i-mingcute-cards-line mx-auto mb-8 text-7xl text-white/58" />

<h1 class="font-rounded text-5xl!">GPT-5.6，只看屏幕能打通小丑牌吗？</h1>

<div class="mt-10 text-lg text-white/52">
  无内存 · 无 Mod · 无游戏 API · <span class="text-fuchsia-200/84">只有 Computer Use</span>
</div>

<!--
这个实验的问题非常直接：GPT-5.6 只看屏幕，能不能打通小丑牌？

它不能读游戏内存，不安装 Mod，也不调用任何游戏 API。它只有 Windows 里能看到的 1280×720 画面，以及普通鼠标键盘输入。

[Sources]
- self-learning-exp-balatro/guest/AGENTS.md
- self-learning-exp-balatro/guest/ENVIRONMENT.md
-->

---
layout: center
class: px-16! py-4!
glow: full
glowOpacity: 0.24
glowHue: 285
glowSeed: 42792
---

<!-- slide:B2 -->

<!-- TODO: Add balatro-computer-use.mp4 before presenting this deck. -->

<DemoVideo
  src="/balatro-computer-use.mp4"
  poster="/balatro-final-hand-selected.jpg"
  title="GPT-5.6 Sol · Computer Use · Balatro"
/>

<!--
这里播放 Balatro 的主要 Demo 视频。视频尽量保留三种片段：观察手牌、做商店或出牌决策、最终 Boss。

不要解释完整牌型策略，也不要等待模型现场思考。观众只需要确认一件事：它确实只通过画面和普通输入在玩。

[Sources]
- self-learning-exp-balatro/guest/screenshots/R005/
- self-learning-exp-balatro/guest/events/R005.jsonl
-->

---
layout: center
class: p0! relative overflow-hidden
glow: full
glowOpacity: 0.12
glowHue: 285
glowSeed: 427
clicks: 1
---

<!-- slide:B3 -->

<img src="/balatro-victory.jpg" alt="Balatro 胜利页面" class="absolute inset-0 h-full w-full object-cover" />
<div class="absolute inset-0 bg-gradient-to-r from-black/82 via-black/22 to-transparent" />

<div class="absolute left-12 top-1/2 -translate-y-1/2">
  <div class="text-lg text-white/58">最终 Boss</div>
  <div class="mt-2 font-cover text-6xl text-white">114,912</div>
  <div class="mt-1 text-2xl text-white/56">/ 100,000</div>
  <div class="mt-5 inline-flex rounded-full bg-black/54 px-4 py-2 text-sm text-white/72">Ante 8 · You Win</div>
</div>

<div v-click class="absolute inset-x-0 bottom-0 flex items-center justify-center gap-8 bg-black/78 px-12 py-4 backdrop-blur-sm">
  <span class="text-lg text-white/72">655 个截图检查点</span>
  <span class="i-mingcute-arrow-right-line text-white/36" />
  <span class="text-lg text-rose-200/82">下一次仍有 2 次非预期提交</span>
</div>

<!--
第五次实验里，它在最终 Boss 打出了 114,912 分，超过目标 100,000，游戏真的出现了“你赢了”。

所以“只靠 Computer Use 能不能玩”这个问题，答案是：能，至少成功过一次。这里停一下，让观众直接看结果。

[click] 但赢过一次，不等于它已经稳定。为了让过程可验证，R005 记录了 655 个必须留证的截图检查点；紧接着的 R006 仍然发生了两次非预期提交，实验被中断。

[Sources]
- self-learning-exp-balatro/guest/SCOREBOARD.md
- self-learning-exp-balatro/guest/ACTION-SEQUENCES.md
- self-learning-exp-balatro/guest/screenshots/R005/terminal-victory-E0669.jpg
-->
