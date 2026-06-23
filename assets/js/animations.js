/* ============================================
   Animations — 滚动触发入场动画（Intersection Observer）
   尊重 prefers-reduced-motion
   ============================================ */

import { $$ } from './utils.js';

/**
 * 初始化滚动入场动画
 * 所有带 .animate-in 类的元素在进入视口时触发
 */
export function initScrollAnimations() {
  /* 如果用户偏好减少动画，直接显示所有元素 */
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    $$('.animate-in').forEach((el) => {
      el.classList.add('animate-in--visible');
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          /* 延迟一帧，确保浏览器先完成布局再触发过渡 */
          requestAnimationFrame(() => {
            entry.target.classList.add('animate-in--visible');
          });
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  $$('.animate-in').forEach((el) => observer.observe(el));
}
