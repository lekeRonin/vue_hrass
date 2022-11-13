// 自定义指令
export const imgerror = {
  inserted(el, binding) {
    el.onerror = function() {
      el.src = binding.value
    }
  }
}
