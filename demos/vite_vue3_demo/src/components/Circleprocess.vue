<script setup lang="ts">
  import { size } from "lodash";
  // import { px2pxFact, uuid } from "~/utils";
  import rafEasing from "~/utils/rafEasing";

  interface Props {
    diam?: number;
    lineWidth?: number;
    duration?: number;
    percentage: number;
    defaultColor?: string;
    progressColor?: string;
  }

  const props = withDefaults(defineProps<Props>(), {
    diam: 100,
    lineWidth: 4,
    duration: 120,
    percentage: 0,
    defaultColor: "#f8f6f7",
    progressColor: "#FCCE00"
  });

  const px2px = (v) => v;
  const diam_px = computed(() => {
    return px2px(props.diam);
  });
  const lineWidth_px = computed(() => {
    return px2px(props.lineWidth);
  });

  const canvasId = `canvas-${uuid().replace(/-/g, "").slice(0, 8)}`;
  const vm = getCurrentInstance()?.proxy;
  const query = uni.createSelectorQuery().in(vm);

  let canvas: HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D;
  onMounted(() => {
    query
      .select(`#${canvasId}`)
      .node(() => {})
      .exec((res) => {
        const node = res[0].node;
        if (node) {
          canvas = node;
          ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
          runDraw();
        }
      });
  });

  const raf = rafEasing({
    duration: props.duration
  });

  function runDraw(nv = props.percentage, ov = 0) {
    console.log("run draw");
    const centerPos = [
      Math.round(diam_px.value / 2),
      Math.round(diam_px.value / 2)
    ];

    raf.stop().run({
      // from: props.percentage,
      from: ov, // 上次的值
      to: nv,
      onProgress(v) {
        const processV = v / 100;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // 开始绘制路径
        ctx.beginPath();

        // 绘制圆弧
        ctx.lineWidth = lineWidth_px.value;
        ctx.lineCap = "round";
        // 参数依次为：圆心的 x 坐标, 圆心的 y 坐标, 半径, 起始角度, 结束角度, 是否逆时针 (可选)
        ctx.arc(
          // 圆心位置
          centerPos[0],
          centerPos[1],
          // 半径
          (diam_px.value - lineWidth_px.value) / 2,
          // 起始
          0,
          //
          Math.PI * 2 * processV,
          // 方向
          false
        );
        // 设置线条样式
        ctx.strokeStyle = props.progressColor;

        // 进行描边
        ctx.stroke();
      }
    });
  }

  global.__runDraw = runDraw;

  watch(
    () => props.percentage,
    (nv, ov) => {
      runDraw(nv, ov);
    }
  );
</script>

<template>
  <div class="pp-circular-progress">
    <div
      class="pp-circular-progress-bg"
      :style="{
        borderColor: props.defaultColor,
        borderWidth: `${props.lineWidth}px`,
        width: `${props.diam}px`,
        height: `${props.diam}px`
      }"
    ></div>
    <canvas
      :id="canvasId"
      :canvas-id="canvasId"
      type="2d"
      class="pp-circular-progress-d"
      :width="diam_px"
      :height="diam_px"
    ></canvas>
  </div>
</template>

<style lang="less" scoped>
  .pp-circular-progress {
    position: relative;
  }
  .pp-circular-progress-bg {
    box-sizing: content-box;
  }
  .pp-circular-progress-d {
    background: red;
  }
</style>
