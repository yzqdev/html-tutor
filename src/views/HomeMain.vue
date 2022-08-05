<template>
  <div class="m-4 flex rounded bg-slate-300 shadow min-h-min">
    <section class="m-2 bg-white p-2 justify-center" v-for="item in links">
      <div
        class="p-2 bg-blue-default cursor-pointer"
        @click="gotoRoute(item.route)"
      >
        {{ item.text }}
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
let route = useRoute()
let router = useRouter()
let links = $ref([
  { text: 'awesome', route: 'Awesome' },
  { text: 'flex', route: 'Flex' },
  { text: 'flowLayout', route: 'FlowLayout' },
  { text: 'inline', route: 'Inline' },
  { text: 'temp', route: 'Temp' },
  { text: 'menulayout', route: 'MenuLayout' },
  { text: 'two', route: 'Two' },
  { text: 'bfc', route: 'Bfc' },
  { text: 'borderbox', route: 'BorderBox' },
  { text: 'Holyflex', route: 'Holyflex' },
  { text: 'effect', route: 'Effect' },
])
function gotoRoute(item: string) {
  router.push({
    name: item,
  })
}
</script>
