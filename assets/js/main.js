/* ============================================
   Main — 应用入口，DOM 加载后初始化所有模块
   ============================================ */

import { initNavigation } from './navigation.js';
import { initScrollAnimations } from './animations.js';

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initScrollAnimations();
});
