---
theme: default
highlighter: shiki
lineNumbers: false
info: AIRI Factorio 的进展
drawings:
  persist: false
transition: slide-left
title: AIRI Factorio 的进展
---

<div class="w-full h-full absolute top-0 left-0 flex flex-col justify-center items-center">
  <h1>AIRI 和 AIRI Factorio 的更新</h1>
</div>

<div class="abs-br m-6 flex gap-2 justify-center items-center">
  LemonNekoGH
  <a href="https://github.com/LemonNekoGH" target="_blank" alt="GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

<!--
大家好，我先自我介绍一下，我是 LemonNeko，大家可以叫我柠喵，我是一个游戏开发者，喜欢玩游戏，
在业余时间写 AIRI 和 FlowChat，我还不太会上台 Demo，有讲的不好的地方可以之后交流。

今天要给大家 Demo 的是 AIRI 在玩游戏方面的进展和一点点 AIRI 本体的更新，我主要在尝试让 AIRI 能玩 Factorio。
-->

---
layout: center
---

<div class="w-full h-full absolute top-0 left-0 flex flex-col justify-center items-center">
  <h1>AIRI 本体更新</h1>
</div>

---
layout: center
---

<video src="/airi-generate-preview-when-import-live2d.mp4" controls />

<!--
AIRI 在好一段时间之前就已经有了 Live2D 导入的功能，但是我们需要自己来给模型上传图片，所以我做了这个功能，
在导入 Live2D 模型时，AIRI 会自动生成预览图，这样有多个模型时，可以方便地查看。这个视频演示的是这个功能。
-->

---
layout: center
---

<div class="w-full h-full absolute top-0 left-0 flex flex-col justify-center items-center">
  <h1>AIRI Factorio 的进展</h1>
</div>

---
layout: center
---

<video src="/airi-factorio-novnc-browser.mp4" controls />

<!--
和之前的思路不同，之前是使用了 Mod 来让 AIRI 可以直接调用游戏接口，直接看到画面里面有什么，可以直接进行寻路，
但是这样太 bug 了，也不太像人类的操作逻辑，所以我打算尝试用视觉的方式来让 AIRI 可以看到画面内容，然后根据画面
内容和之前做过的事情来决定现在要做什么。这个视频是我早期的探索，已经做到了可以在浏览器里面玩游戏，虽然游戏不是跑在浏览器里的。
-->

---
layout: center
---

<video src="/vscode-factorio-rcon-evaluator.mp4" controls />

<!--
那游戏画面有了，就该开始做目标检测了，数据标注是非常累的工作，所以我尝试写一个自动数据集生成脚本，在写这个脚本的过程中，
我发现调试非常麻烦，我需要把 TypeScript 编译成 Lua，然后再发送给游戏来执行，我每次稍微改动一点就需要重新编译，
非常麻烦，所以直接写了一个 VSCode 插件，这样在改完代码之后就直接一键执行，非常方便。这个视频就是在演示这个插件的使用方法。
-->

---
layout: center
---

<video src="/airi-factorio-auto-labeling.mp4" controls />

<!--
VSCode 插件写好之后，脚本开发效率大幅提升，很快我就写好了自动数据集生成脚本，这个视频是自动数据集生成脚本的运行过程。
-->

---
layout: center
---

<img src="/airi-factorio-yolo-training-code.png" />

<!--
YOLO 模型的训练代码，使用 Ultralytics 框架，非常方便，只用三行代码就可以完成训练并且导出成了 ONNX 格式。
-->

---
layout: center
---

<video src="/airi-factorio-transfer.mp4" controls loop />

<!--
这个视频里面集合了之前的所有努力，虽然还没做到让 AIRI 来玩，但是我们可以自己玩然后看目标检测的效果。

可以看到目前有严重的过拟合，因为训练数据太少了，只有几十张图片，六个类别，但是这说明这个思路是可以跑通的。
-->

---
layout: center
---

<video src="/airi-factorio-vlm-output-keycodes.mp4" controls />

<!--
在有了这些成果之后，就需要想办法让 AIRI 参与到里面了，但是 AIRI 没有键盘鼠标，所以需要想办法让 AIRI 来告诉我们要按说明，
然后我们来帮 AIRI 把这些指令输入给游戏。然而我又出现了另一个想法，虽然我已经写好了目标检测模型，但是，
如果我直接把画面扔给 VLM，是不是可以不需要目标检测模型了呢，因为 VLM 可以自己识别画面内容，然后直接输出按键码，
于是我就试了一下，这个视频就是在演示我的尝试结果。

可以看到，VLM 确实尝试输出了按键码，但是没有被约束住，它还输出了它的思考过程，而且因为它输出了思考过程，导致整个延迟变得非常高，
我尝试的是 Apple 的 FastVLM-0.5B，这已经是非常小的 VLM 了，所以我认为这个思路是错的，我应该回到 YOLO 模型，
让它来检测画面内容，然后用 LLM 来决定要按什么键，因为不知道为什么，我发现 LLM 更好约束，能更容易让它输出我想要的格式。
-->

---
layout: center
class: text-center
title: 一大波二维码来袭！
---

<img src="/qr-codes.png" class="w-full h-full" />

<!--
嗯，这次的 Demo 就到这里了，一大波二维码来袭！欢迎大家扫码给 AIRI 打星，哦对了，AIRI 现在已经有 15k 星星数了，谢谢大家！
-->

---
layout: center
---

# 谢谢大家！

<!--
谢谢大家！欢迎接下来和我交流！
-->
