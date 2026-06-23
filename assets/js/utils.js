/* ============================================
   Utils — 纯函数工具集，无副作用
   ============================================ */

/**
 * 选择器简写
 * @param {string} selector - CSS 选择器
 * @param {Element} [context=document] - 上下文元素
 * @returns {Element|null}
 */
export const $ = (selector, context = document) => context.querySelector(selector);

/**
 * 多元素选择器简写
 * @param {string} selector - CSS 选择器
 * @param {Element} [context=document] - 上下文元素
 * @returns {NodeList}
 */
export const $$ = (selector, context = document) => context.querySelectorAll(selector);

/**
 * 节流 —— 限制函数在指定时间内只能执行一次
 * @param {Function} fn - 要节流的函数
 * @param {number} delay - 节流间隔(ms)
 * @returns {Function}
 */
export function throttle(fn, delay = 100) {
  let lastTime = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastTime >= delay) {
      lastTime = now;
      fn.apply(this, args);
    }
  };
}

/**
 * 防抖 —— 函数在停止调用 N 毫秒后才执行
 * @param {Function} fn - 要防抖的函数
 * @param {number} delay - 防抖延迟(ms)
 * @returns {Function}
 */
export function debounce(fn, delay = 200) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

/**
 * 判断元素是否在视口内
 * @param {Element} el - 目标元素
 * @param {number} [threshold=0.2] - 可见比例阈值
 * @returns {boolean}
 */
export function isInViewport(el, threshold = 0.2) {
  const rect = el.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  return rect.top <= windowHeight * (1 - threshold) && rect.bottom >= windowHeight * threshold;
}
