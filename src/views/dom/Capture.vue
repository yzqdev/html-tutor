 <template>
    <div class="grandparent">
      <div class="parent"><div class="child">1</div></div>
    </div>
  </template>

  <script setup lang="ts" >
      onMounted(() => {
        function addEvent(el, event, callback, isCapture = false) {
        if (!el || !event || !callback || typeof callback !== "function")
          return;
        if (typeof el === "string") {
          el = document.querySelector(el);
        }
        el.addEventListener(event, callback, isCapture);
      }
      addEvent(document, "DOMContentLoaded", () => {
        const child = document.querySelector(".child");
        const parent = document.querySelector(".parent");
        const grandparent = document.querySelector(".grandparent");
        addEvent(child, "click", function (e) {
          console.log("child");
        });
        addEvent(parent, "click", function (e) {
          console.log("parent");
        });
        addEvent(grandparent, "click", function (e) {
          console.log("grandparent");
        });
        addEvent(document, "click", function (e) {
          console.log("document");
        });
        addEvent("html", "click", function (e) {
          console.log("html");
        });
        addEvent(window, "click", function (e) {
          console.log("window");
        });
      });
      })
      // addEventListener方法具有第三个可选参数useCapture，其默认值为false，事件将在冒泡阶段中发生，如果为true，则事件将在捕获阶段中发生。 如果单击child元素，它将分别在控制台上记录child，parent，grandparent，html，document和window，这就是事件冒泡。
    </script>