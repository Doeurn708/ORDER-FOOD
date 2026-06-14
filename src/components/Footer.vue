<template>
  <footer class="bg-zinc-950 text-zinc-300 pt-16 pb-8 px-6 font-sans">
    <div class="max-w-6xl mx-auto">

    
      <div class="grid grid-cols-2  lg:grid-cols-5 gap-12 pb-14 border-b border-zinc-800">

       
        <div class="lg:col-span-2 space-y-5">
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 rounded-lg bg-amber-400 flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3 9L7.5 4.5L12 9L7.5 13.5L3 9Z" fill="#1c1917"/>
                <path d="M9 3L13.5 7.5L9 12L4.5 7.5L9 3Z" fill="#1c1917" opacity="0.5"/>
              </svg>
            </div>
            <span class="text-white text-xl font-semibold tracking-tight logo text-sky-500">Food Order</span>
          </div>

          <p class="text-sm text-zinc-400 leading-relaxed max-w-xs">
            Crafting digital experiences that push boundaries and leave a lasting impression on the people who matter most.
          </p>

          <div class="flex items-center gap-3 pt-1">
            <a
              v-for="social in socials"
              :key="social.label"
              :href="social.href"
              :aria-label="social.label"
              class="w-9 h-9 rounded-lg border border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-amber-400 hover:border-amber-400/40 transition-all duration-200"
            >
              <svg :viewBox="social.viewBox" class="w-4 h-4 fill-current" aria-hidden="true">
                <path :d="social.icon"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Nav columns -->
        <div v-for="section in navSections" :key="section.title" class="space-y-4">
          <h3 class="text-white text-xs font-semibold uppercase tracking-widest">
            {{ section.title }}
          </h3>
          <ul class="space-y-2.5">
            <li v-for="link in section.links" :key="link.label">
              <a
                :href="link.href"
                class="text-sm text-zinc-400 hover:text-amber-400 transition-colors duration-200 flex items-center gap-1.5 group"
              >
                <span
                  v-if="link.badge"
                  class="text-[10px] font-medium bg-amber-400/15 text-amber-400 px-1.5 py-0.5 rounded-full leading-none"
                >
                  {{ link.badge }}
                </span>
                {{ link.label }}
                <svg
                  v-if="link.external"
                  class="w-3 h-3 opacity-0 group-hover:opacity-60 transition-opacity"
                  viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5"
                  aria-hidden="true"
                >
                  <path d="M2 10L10 2M10 2H5M10 2V7"/>
                </svg>
              </a>
            </li>
          </ul>
        </div>

      </div>

      <div class="py-10 border-b border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <p class="text-white text-sm font-medium">Stay in the loop</p>
          <p class="text-zinc-500 text-xs mt-0.5">Monthly dispatch. No noise.</p>
        </div>
        <form class="flex items-center gap-2 w-full sm:w-auto" @submit.prevent="subscribe">
          <input
            v-model="email"
            type="email"
            placeholder="your@email.com"
            class="bg-zinc-900 border border-zinc-800 text-zinc-200 text-sm rounded-lg px-4 py-2.5 w-full sm:w-64 placeholder-zinc-600 focus:outline-none focus:border-amber-400/60 focus:ring-1 focus:ring-amber-400/30 transition-all"
          />
          <button
            type="submit"
            class="bg-amber-400 hover:bg-amber-300 text-zinc-950 text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors duration-200 whitespace-nowrap"
          >
            <span v-if="!subscribed">Subscribe</span>
            <span v-else class="flex items-center gap-1.5">
              <svg class="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path d="M3 8l3.5 3.5L13 4.5"/>
              </svg>
              Done
            </span>
          </button>
        </form>
      </div>

      <!-- Bottom bar -->
      <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-600">
        <p>© {{ year }} Meridian Studio. All rights reserved.</p>
        <div class="flex items-center gap-5">
          <a v-for="item in legalLinks" :key="item" href="#" class="hover:text-zinc-400 transition-colors">
            {{ item }}
          </a>
          <div class="flex items-center gap-1.5 ml-2">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span class="text-zinc-600">All systems normal</span>
          </div>
        </div>
      </div>

    </div>
  </footer>
</template>

<script setup>
import { ref, computed } from 'vue'

const email = ref('')
const subscribed = ref(false)
const year = computed(() => new Date().getFullYear())

function subscribe() {
  if (email.value) {
    subscribed.value = true
    setTimeout(() => {
      subscribed.value = false
      email.value = ''
    }, 3000)
  }
}

const socials = [
  {
    label: 'Twitter / X',
    href: '#',
    viewBox: '0 0 24 24',
    icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.213 5.567L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z'
  },
  {
    label: 'GitHub',
    href: '#',
    viewBox: '0 0 24 24',
    icon: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
  },
  {
    label: 'LinkedIn',
    href: '#',
    viewBox: '0 0 24 24',
    icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'
  },
  {
    label: 'Dribbble',
    href: '#',
    viewBox: '0 0 24 24',
    icon: 'M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.05 6.41 1.73 1.35 3.92 2.163 6.303 2.163 1.45 0 2.83-.31 4.003-.823zm-9.34-2.58c.25-.47 3.28-5.735 8.595-7.418.13-.045.27-.085.405-.123-.26-.585-.54-1.167-.832-1.74C9.352 8.32 3.51 8.27 2.87 8.27c-.003.05-.007.1-.007.15 0 2.17.825 4.157 2.19 5.667-.027.002-.06.007-.088.012zm-1.9-9.07c.65.012 5.857.115 10.388-1.402-1.862-3.312-3.867-6.108-4.17-6.534C8.025 1.72 5.92 3.11 4.86 5.19c.006.01.012.02.016.03zm7.964-7.956c.31.43 2.35 3.235 4.19 6.61 3.99-1.495 5.68-3.765 5.88-4.03C21.24 2.25 18.79 1 16.056 1c-.867 0-1.705.115-2.5.322z'
  }
]

const navSections = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '#' },
      { label: 'Pricing', href: '#' },
      { label: 'Changelog', href: '#', badge: 'New' },
      { label: 'Roadmap', href: '#' },
      { label: 'Documentation', href: '#', external: true },
    ]
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Careers', href: '#', badge: '3' },
      { label: 'Press kit', href: '#', external: true },
      { label: 'Contact', href: '#' },
    ]
  },
  {
    title: 'Resources',
    links: [
      { label: 'Community', href: '#' },
      { label: 'Support', href: '#' },
      { label: 'API reference', href: '#', external: true },
      { label: 'System status', href: '#', external: true },
      { label: 'Open source', href: '#', external: true },
    ]
  }
]

const legalLinks = ['Privacy', 'Terms', 'Cookies']
</script>