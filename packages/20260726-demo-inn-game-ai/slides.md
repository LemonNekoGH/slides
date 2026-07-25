---
layout: center
highlighter: shiki
css: unocss
colorSchema: dark
transition: none
title: 一个好的 AI 应该学会自己给自己收集训练数据
exportFilename: 穹顶守护者-AI-开发之路
info: |
  Demo Inn · 2026-07-26
  Speaker: LemonNeko
lineNumbers: false
drawings:
  persist: true
mdc: true
clicks: 0
preload: false
glow: bottom
glowOpacity: 0.4
glowSeed: 233
routerMode: hash
duration: 10min
defaults:
  layout: default
---

<!-- slide:A0 -->

<div class="flex flex-col items-center justify-center">
  <div class="mb-3 flex items-center gap-4 text-2xl text-white/32">
    <div class="i-mingcute-game-2-line" />
    <div class="i-mingcute-arrow-right-line text-2xl" />
    <div class="i-mingcute-camera-2-line" />
    <div class="i-mingcute-arrow-right-line text-2xl" />
    <div class="i-mingcute-code-line" />
  </div>

  <div class="text-center">
    <div class="font-cover text-5xl leading-tight text-white">一个好的 AI 应该学会<br>自己给自己收集训练数据</div>
    <div class="mt-2 text-base text-white/34">穹顶守护者 AI 的开发之路</div>
  </div>

  <img
    src="/dome-keeper-cover.png"
    alt="Project AIRI 的 Dome Keeper 游戏 AI"
    class="mt-4 w-[20rem] max-w-full rounded-2xl shadow-2xl shadow-black/40"
  />
</div>

<!--
大家好久不见，这里是 LemonNeko 柠喵，是一名游戏开发工程师。

今天来给大家介绍 AIRI 在游戏 AI 开发方向的一点进展：一个还不会通关、但已经开始会给自己准备教材的 AI。

一个好的 AI 应该学会自己给自己收集训练数据——穹顶守护者 AI 的开发之路。

[Sources]
- airi-dome-keeper/README.md
-->

---
layout: center
class: text-center
glow: bottom
glowOpacity: 0.4
glowSeed: 233
---

<!-- slide:A1 -->

<div class="flex items-center gap-9">
  <div class="w-[26%] text-left">
    <div class="text-lg text-amber-200/52">先祝贺 AIRI</div>
    <div class="mt-2 font-cover text-6xl text-amber-100">40K+</div>
    <div class="mt-2 text-white/42">GitHub Stars</div>
  </div>
  <div class="w-[74%] overflow-hidden rounded-xl bg-white shadow-2xl shadow-black/40">
    <img src="/star-history-2026725.png" alt="AIRI GitHub Star History 超过四万星" class="aspect-[5/4] w-full object-cover" />
  </div>
</div>

<!--
开始之前，先祝贺 AIRI 已经超过四万颗 GitHub Stars 啦！谢谢每一个点过 Star、提交过 Issue、写过代码和参与讨论的人。

好，我们进入正题。

[Sources]
- Star History — moeru-ai/airi, screenshot saved 2026-07-25; star count changes over time
- github.com/moeru-ai/airi
-->

---
layout: center
class: px-14!
glow: full
glowOpacity: 0.26
glowHue: 38
glowSeed: 915
clicks: 1
---

<!-- slide:C1 -->

<div class="flex items-center gap-10">
  <div class="w-2/5">
    <div class="text-lg text-amber-200/62">前情提要</div>
    <h1 class="mt-3 font-rounded text-4xl! leading-tight!">上一次，我先挑战了 Factorio</h1>
    <div class="mt-7 space-y-3 text-lg text-white/64">
      <div>Mod 自动标注 <span class="text-emerald-300/80">✓</span></div>
      <div>YOLO 识别建筑 <span class="text-emerald-300/80">✓</span></div>
      <div>真正玩起来 <span class="text-rose-300/80">太难了</span></div>
    </div>
    <div v-click class="mt-7 text-xl text-amber-100/82">所以先退一步，换一个更简单的游戏。</div>
  </div>
  <video
    src="/airi-factorio-transfer.mp4"
    autoplay
    muted
    loop
    class="w-3/5 rounded-xl shadow-2xl shadow-black/45"
  />
</div>

<!--
之前我尝试过基于 LLM 和 Factorio Mod 的 AI，但 LLM 太慢，而且 Mod 能看到视野外的信息，这太像作弊了。

所以我决定限制 AI 的视野，让它像人一样只看屏幕。我用 Mod 摆放单个建筑，自动截图、自动打标，也真的练出了一个 YOLO 模型。

但模型能认出建筑，不等于 AI 会玩 Factorio。建筑会互相遮挡，机器连接有方向，当时的 LLM 对空间关系也没有现在这么强。

[click] 所以我先知难而退。直到去年在 WePlay 看到 Dome Keeper：探索、挖矿、升级、防守，最后带回遗物。规则比 Factorio 简单得多，也挺好玩，我决定先拿它练手。

[Sources]
- airi-factorio/packages/factorio-rcon-snippets-for-vscode/src/factorio_yolo_dataset_collector_v0.ts
- packages/20251101-demo-inn/public/airi-factorio-transfer.mp4
- github.com/moeru-ai/airi-factorio
- 本次演讲准备过程中的个人项目回顾
-->

---
layout: center
class: px-14! py-6! text-center relative
glow: full
glowOpacity: 0.22
glowHue: 12
glowSeed: 121
---

<!-- slide:C2-human -->

<div class="absolute inset-x-0 top-10 font-rounded text-4xl text-white">数据自动了，我没有。</div>

<img
  src="/dome-keeper-val-labels.jpg"
  alt="Dome Keeper 自动采集器生成的标注数据示例"
  class="absolute left-30 top-26 w-[40%] rounded-xl shadow-2xl shadow-black/45"
/>
<div class="absolute bottom-9 left-14 text-sm text-white/42">自动采集器的输出示例</div>

<div class="absolute right-30 top-30 w-[30%] text-left">
  <div class="text-xl text-white">我玩游戏</div>
  <div class="i-mingcute-arrow-down-line my-3 ml-8 text-3xl text-white/28" />
  <div class="text-xl text-amber-100">Mod 自动截图 + 标注</div>
  <div class="i-mingcute-arrow-down-line my-3 ml-8 text-3xl text-white/28" />
  <div class="text-xl text-fuchsia-100">Dataset</div>
  <div class="mt-7 text-lg text-white/42">玩了 20 小时以后……</div>
</div>

<!--
到了 Dome Keeper，我沿用了 Factorio 的办法：我正常玩游戏，Mod 在旁边自动截图，并且给画面里的矿物生成真值标签。

这个过程确实能收集数据，但它仍然有一个非常昂贵的组件：我。

大概玩了 20 个小时以后，我已经把游戏机制玩明白了，也开始玩腻了。这件事非常严重地影响了我的积极性。

[Sources]
- airi-dome-keeper/mods/LemonNekoGH-YoloDataCollector/yolo_collector.gd
- git history at 8bc0aa1: collection before the rule AI was introduced
-->

---
layout: center
class: px-14! py-4!
glow: full
glowOpacity: 0.22
glowHue: 12
glowSeed: 120
---

<!-- slide:C2-rule -->

<div class="mb-3 text-center text-3xl text-white/82">玩累了，就让 if-else 接班</div>

<DemoVideo
  src="/game-playing-ai-domekeeper-detection-demo-video.mp4"
  poster="/dome-keeper-dataset-frame.png"
  title="规则 AI · 我没写的事情，它一件也不会"
/>

<div class="mt-3 flex justify-center gap-7 text-sm text-white/52">
  <span>只拿两个资源</span>
</div>

<!--
所以昨天为了今天的 Demo Inn，我紧急写了一个非常简单、基于 if-else 的 AI，替我玩、替我收集数据。

这个 AI 不会学习。所有决策都是我手写的：我写了什么，它才会执行什么。

大家可以看到，它非常死板。矿就在旁边，它不一定会顺手带回去；说拿两个就拿两个，多一个都不挖。它拿够两个就走，旁边还有矿也不管。

备问：当前规则 AI 沿中央竖井左右开分支；附近出现已揭示矿物时会临时偏离主路线。携带两个资源或战斗波次临近时，通过游戏已有的 AStar 路径搜索返回。路径停滞后会依次尝试其他方向。测试模式可以跳过菜单直接进入关卡，但不会固定地图种子。

[Sources]
- airi-dome-keeper/mods/LemonNekoGH-YoloDataCollector/rule_teacher.gd
- Dome Keeper modloader.log, 2026-07-25 run: at least four completed DEFEND → RESUME_MINE cycles
-->

---
layout: center
class: px-14! py-4!
glow: full
glowOpacity: 0.22
glowHue: 12
glowSeed: 120
---

<!-- slide:C2-no-upgrade -->

<div class="mb-3 text-center text-3xl text-white/82">不会升级，所以倒在第四波。</div>

<DemoVideo
  src="/game-playing-ai-domekeeper-no-upgrade.mp4"
  title="第四波"
/>

<!--
我没有给它写升级功能，所以它当然不会打开升级面板。

后来它刚走回之前挖到矿的地方，怪物就来了。因为没有升级移动速度，它走得非常慢；即使战斗时瞄得很准，最后还是被数值压死了（笑）。

它最终倒在第四波。谢谢大家。

[Sources]
- game-playing-ai-domekeeper-no-upgrade.mp4
- airi-dome-keeper/mods/LemonNekoGH-YoloDataCollector/rule_teacher.gd
-->

---
layout: center
class: text-center
glow: bottom
glowOpacity: 0.2
glowSeed: 233
---

<!-- slide:C2-fake-ending -->

<div class="font-cover text-7xl text-white">谢谢大家</div>
<div class="mt-7 text-3xl text-white/42">Q&A</div>

<!--
切到这一页，稍微转身，像是真的讲完了。停两到三秒，不要真的等到观众开始提问。

等一下，开场答应大家的训练数据呢？
-->

---
layout: center
class: px-14! py-6! text-center
glow: full
glowOpacity: 0.3
glowHue: 8
glowSeed: 2026
---

<!-- slide:C3-training -->

<div class="text-lg text-amber-200/58">骗你的</div>
<h1 class="mt-2 font-rounded text-4xl!">它还带回来一个 YOLO26n</h1>

<div class="mt-10 flex items-center justify-center gap-6 text-2xl">
  <span class="text-white/82">300 张图片</span>
  <span class="i-mingcute-arrow-right-line text-white/26" />
  <span class="text-white/82">100 epochs</span>
  <span class="i-mingcute-arrow-right-line text-white/26" />
  <span class="text-fuchsia-100/88">best.pt</span>
</div>

<div class="mt-10 flex justify-center gap-16">
  <div>
    <div class="font-cover text-5xl text-amber-100">13m 51s</div>
    <div class="mt-2 text-sm text-white/38">Apple MPS</div>
  </div>
  <div>
    <div class="font-cover text-5xl text-fuchsia-100">5.4 MB</div>
    <div class="mt-2 text-sm text-white/38">PyTorch weights</div>
  </div>
</div>

<!--
当然还没结束。我做这个规则 AI 的目的，本来就是数据收集。

当前这一局一共收集了 300 张图片，画面里的铁、水和钴都由 Mod 自动生成了标签。然后我用一行命令训练了 YOLO26n：100 个 epoch，Apple MPS 上大约用了 13 分 51 秒，最后得到一个大约 5.4 MB 的 best.pt。

模型在第 76 个 epoch 取得最佳验证指标。

这说明：规则 AI 收集到的数据，真的可以训练出一个模型。

[Sources]
- airi-dome-keeper/runs/detect/train/args.yaml
- airi-dome-keeper/runs/detect/train/results.csv
- airi-dome-keeper/runs/detect/train/weights/best.pt
- Dome Keeper local YOLO session 2026-07-25T14-13-24: 226 train + 19 val + 55 test images
- github.com/ultralytics/ultralytics
-->

---
layout: center
class: px-16! py-4! text-center
glow: full
glowOpacity: 0.28
glowHue: 322
glowSeed: 7616
---

<!-- slide:C4-playground -->

<div class="mb-3 text-center">
  <div class="text-3xl text-white/88">模型开始看见了</div>
  <div class="mt-1 text-sm text-white/38">ONNX · Browser · WebGPU</div>
</div>

<DemoVideo
  src="/dome-keeper-webgpu-inference.mp4"
  loop muted autoplay
  title="接近实时目标检测"
/>

<div class="mt-3 text-sm text-white/42">现在只会识别，还不会操作。</div>

<!--
模型练完了，我要怎么看它是不是真的在工作？

还记得我之前给 Factorio YOLO 写的 Playground 页面吗？这次也是一样的。把 best.pt 导出成 ONNX，让网页通过 ONNX Runtime Web 加载模型。

我把一段没有预先画框的游戏录屏扔进去。网页逐帧读取画面，使用 WebGPU 加速推理，再把模型检测到的矿物框画回来。这里播放 Playground 的录屏。

这一页只证明它可以从原始录像里看见目标。它现在还不会根据检测结果操作游戏。

[Sources]
- factorio-yolo-v0-playground/README.md
- onnxruntime.ai/docs/tutorials/web/
- github.com/ultralytics/ultralytics
- 本次演讲准备中的 Dome Keeper WebGPU Playground 录屏（待加入 public/）
-->

---
layout: center
class: px-14! text-center
glow: full
glowOpacity: 0.32
glowHue: 0
glowSeed: 2333
---

<!-- slide:D1-next -->

<div class="text-sm text-amber-200/58">下一步 · 尚未完成</div>
<h1 class="mt-3 font-rounded text-4xl!">下一份数据，不只记录“看见什么”</h1>

<div class="mt-11 flex items-center justify-center gap-7 text-left">
  <div>
    <div class="text-xl text-white/78">画面 + YOLO 目标</div>
    <div class="mt-2 text-xl text-amber-100/82">规则 AI 动作（Teacher）</div>
  </div>
  <div class="i-mingcute-arrow-right-line text-3xl text-white/26" />
  <div class="text-2xl text-white/74">模仿学习</div>
  <div class="i-mingcute-arrow-right-line text-3xl text-white/26" />
  <div>
    <div class="text-xl text-fuchsia-100/84">Screen-only Student</div>
    <div class="mt-2 text-white/46">画面 → 动作</div>
  </div>
</div>

<div class="mt-12 text-2xl text-white/74">运行时只看屏幕，不再读取 Mod</div>

<!--
下一步，收集的数据不只要记录“画面里看见了什么”，还要把规则 AI 在同一时刻做了什么记录下来。

这样每一帧就可以形成画面、YOLO 目标和 Teacher 动作之间的对应关系，再用模仿学习训练一个从画面直接预测动作的 Student。

Mod 和规则 AI 仍然可以在训练阶段当老师，但练出来的 Student 在运行时只需要屏幕，不再读取 Mod。

这部分还没有完成。今天跑通的是数据收集、训练和视觉推理，不是完整的纯屏幕控制器。

[Sources]
- airi-dome-keeper/mods/LemonNekoGH-YoloDataCollector/rule_teacher.gd
- github.com/HumanCompatibleAI/imitation
-->

---
layout: center
class: text-center
glow: bottom
glowOpacity: 0.28
glowSeed: 233
---

<!-- slide:D2-real-ending -->

<div class="font-cover text-6xl text-white">这次是真的。谢谢大家。</div>
<div class="mt-7 text-4xl text-white/68">Q&A</div>
<div class="mt-10 text-lg text-white/38">今天：会收集、会看　·　下一步：会模仿动作</div>

<!--
规则 AI 负责产生经历，Mod 负责答案，Student 只看屏幕学习。

它还不会自己玩，但从自动收集到视觉推理的第一段闭环已经跑通了。

这次是真的，欢迎提问。
-->

---
layout: center
class: p0! relative overflow-hidden text-center
glow: none
---

<!-- slide:D3-qr -->

<div class="absolute inset-x-0 top-20 font-rounded text-4xl text-white">一大波二维码来袭</div>

<div class="absolute inset-x-12 top-40 flex items-start justify-center gap-10">
  <div class="w-64">
    <a href="https://github.com/proj-airi/game-playing-ai-dome-keeper" target="_blank">
      <img src="/qr-dome-keeper.png" alt="Dome Keeper AI 仓库二维码" class="mx-auto w-60 rounded-xl bg-white shadow-xl shadow-black/35" />
    </a>
    <div class="mt-4 text-xl text-white/86">Dome Keeper AI</div>
  </div>
  <div class="w-64">
    <a href="https://github.com/moeru-ai/airi" target="_blank">
      <img src="/qr-airi.png" alt="Project AIRI 仓库二维码" class="mx-auto w-60 rounded-xl bg-white shadow-xl shadow-black/35" />
    </a>
    <div class="mt-4 text-xl text-white/86">Project AIRI</div>
  </div>
  <div class="w-64">
    <a href="https://github.com/LemonNekoGH/slides" target="_blank">
      <img src="/qr-slides.png" alt="LemonNeko Slides 仓库二维码" class="mx-auto w-60 rounded-xl bg-white shadow-xl shadow-black/35" />
    </a>
    <div class="mt-4 text-xl text-white/86">Slides</div>
  </div>
</div>

<!--
回答完最后一个问题以后：谢谢这个问题。最后，按传统——二维码来袭！当然，和 AIRI 一样，Dome Keeper AI 也开源了。欢迎大家去看、去 Star、去提 Issue、去 PR。
-->
