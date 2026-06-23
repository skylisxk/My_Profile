/* ============================================
   Navigation — 导航栏交互：滚动监听、菜单切换、平滑滚动
   ============================================ */

import { $, $$, throttle } from './utils.js';

const nav = $('.nav');
const navLinks = $$('.nav__link');
const navToggle = $('.nav__toggle');
const navMenu = $('.nav__links');
const sections = $$('.section[data-section]');

let isMenuOpen = false;

/**
 * 导航栏滚动背景
 * 滚动超过 50px 时添加毛玻璃效果
 */
function handleScroll() {
  const scrolled = window.scrollY > 50;
  nav.classList.toggle('nav--scrolled', scrolled);
}

/**
 * 高亮当前可视板块对应的导航项
 * 基于 Intersection Observer，比 scroll 事件性能更好
 */
function setupActiveTracking() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute('id');
          navLinks.forEach((link) => {
            const isActive = link.getAttribute('href') === `#${sectionId}`;
            link.classList.toggle('nav__link--active', isActive);
          });
        }
      });
    },
    {
      /* 导航栏高度 + 一些余量作为偏移 */
      rootMargin: '-80px 0px -60% 0px',
    }
  );

  sections.forEach((section) => observer.observe(section));
}

/**
 * 移动端菜单切换
 */
function toggleMenu() {
  isMenuOpen = !isMenuOpen;
  navMenu.classList.toggle('nav__links--open', isMenuOpen);
}

/**
 * 点击导航链接后关闭移动端菜单
 */
function closeMenu() {
  if (isMenuOpen) {
    isMenuOpen = false;
    navMenu.classList.remove('nav__links--open');
  }
}

/**
 * 初始化导航模块
 */
export function initNavigation() {
  /* 滚动监听（节流 100ms） */
  window.addEventListener('scroll', throttle(handleScroll, 100));
  handleScroll();

  /* Intersection Observer 追踪当前板块 */
  setupActiveTracking();

  /* 移动端菜单按钮 */
  if (navToggle) {
    navToggle.addEventListener('click', toggleMenu);
  }

  /* 点击导航链接关闭菜单 */
  navLinks.forEach((link) => {
    link.addEventListener('click', closeMenu);
  });
}
