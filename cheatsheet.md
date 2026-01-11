# Tailwind CSS Cheat Sheet

## 📐 WIDTH & HEIGHT

### Width Classes
w-0, w-1 (4px), w-2 (8px), w-3 (12px), w-4 (16px), w-5 (20px), w-6 (24px)
w-8 (32px), w-10 (40px), w-12 (48px), w-16 (64px), w-20 (80px), w-24 (96px)
w-32 (128px), w-48 (192px), w-64 (256px), w-96 (384px)

w-auto, w-full (100%), w-screen (100vw), w-min, w-max, w-fit
w-1/2 (50%), w-1/3 (33.33%), w-2/3 (66.67%), w-1/4 (25%), w-3/4 (75%)
w-1/5 (20%), w-2/5 (40%), w-3/5 (60%), w-4/5 (80%)
w-1/6 (16.67%), w-5/6 (83.33%), w-1/12 (8.33%)

### Height Classes
h-0, h-1 (4px), h-2 (8px), h-3 (12px), h-4 (16px), h-5 (20px), h-6 (24px)
h-8 (32px), h-10 (40px), h-12 (48px), h-16 (64px), h-20 (80px), h-24 (96px)
h-32 (128px), h-48 (192px), h-64 (256px), h-96 (384px)

h-auto, h-full (100%), h-screen (100vh), h-min, h-max, h-fit
h-1/2 (50%), h-1/3 (33.33%), h-2/3 (66.67%), h-1/4 (25%), h-3/4 (75%)

## 🎯 FLEXBOX

### Display & Direction
flex, inline-flex
flex-row, flex-row-reverse, flex-col, flex-col-reverse

### Wrapping
flex-nowrap, flex-wrap, flex-wrap-reverse

### Justify Content
justify-start, justify-end, justify-center
justify-between, justify-around, justify-evenly

### Align Items
items-start, items-end, items-center, items-baseline, items-stretch

### Align Self
self-auto, self-start, self-end, self-center, self-stretch, self-baseline

### Flex Properties
flex-1, flex-auto, flex-initial, flex-none
flex-grow, flex-grow-0, flex-shrink, flex-shrink-0

### Order
order-1 to order-12, order-first, order-last, order-none

## 📦 SPACING

### Margin
m-0 to m-96, mx-0 to mx-96, my-0 to my-96
mt-0 to mt-96, mr-0 to mr-96, mb-0 to mb-96, ml-0 to ml-96
m-auto, mx-auto, my-auto

### Padding
p-0 to p-96, px-0 to px-96, py-0 to py-96
pt-0 to pt-96, pr-0 to pr-96, pb-0 to pb-96, pl-0 to pl-96

## 🎨 COLORS & BACKGROUNDS

### Text Colors
text-black, text-white, text-transparent, text-current
text-gray-50 to text-gray-900 (same for red, blue, green, yellow, purple, pink, indigo)

### Background Colors
bg-black, bg-white, bg-transparent, bg-current
bg-gray-50 to bg-gray-900 (same for other colors)

### Background Properties
bg-cover, bg-contain, bg-center, bg-top, bg-bottom, bg-left, bg-right
bg-no-repeat, bg-repeat, bg-repeat-x, bg-repeat-y

## 📝 TYPOGRAPHY

### Font Size
text-xs (12px), text-sm (14px), text-base (16px), text-lg (18px)
text-xl (20px), text-2xl (24px), text-3xl (30px), text-4xl (36px)
text-5xl (48px), text-6xl (60px), text-7xl (72px), text-8xl (96px), text-9xl (128px)

### Font Weight
font-thin (100), font-extralight (200), font-light (300), font-normal (400)
font-medium (500), font-semibold (600), font-bold (700), font-extrabold (800), font-black (900)

### Text Alignment
text-left, text-center, text-right, text-justify, text-start, text-end

### Text Decoration
underline, line-through, no-underline, overline

## 🛠️ LAYOUT & POSITIONING

### Display
block, inline-block, inline, flex, inline-flex, grid, inline-grid, hidden

### Position
static, fixed, absolute, relative, sticky

### Positioning
inset-0, top-0, right-0, bottom-0, left-0
top-auto, right-auto, bottom-auto, left-auto

### Z-Index
z-0, z-10, z-20, z-30, z-40, z-50, z-auto

## 📱 RESPONSIVE DESIGN

### Breakpoints
sm: (≥640px), md: (≥768px), lg: (≥1024px), xl: (≥1280px), 2xl: (≥1536px)

### Examples
<div class="w-full md:w-1/2 lg:w-1/3">
<div class="flex flex-col md:flex-row">
<div class="text-sm lg:text-base">
<div class="hidden md:block">

## 🎭 STATES & INTERACTIONS

### Hover
hover:bg-blue-500, hover:text-white, hover:scale-105, hover:shadow-lg

### Focus
focus:outline-none, focus:ring-2, focus:ring-blue-500, focus:border-blue-500

### Active
active:bg-blue-600, active:scale-95

## 🔥 COMMON PATTERNS

### Centering Techniques
<!-- Horizontal center -->
<div class="mx-auto">

<!-- Absolute center -->
<div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">

<!-- Flex center -->
<div class="flex justify-center items-center">

<!-- Grid center -->
<div class="grid place-items-center">

### Common Components
<!-- Full screen section -->
<section class="min-h-screen w-full">

<!-- Card -->
<div class="bg-white rounded-lg shadow-lg p-6">

<!-- Button -->
<button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-200">

<!-- Responsive grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

<!-- Navigation -->
<nav class="flex justify-between items-center p-4 bg-gray-800 text-white">