# 🎬 Animation Quick Reference

## Available CSS Animation Classes

### Entry Animations

```css
.animate-fadeInDown      /* Fade + slide down (0.8s) */
.animate-slideInLeft     /* Slide from left (0.8s) */
.animate-slideInRight    /* Slide from right (0.8s) */
.animate-scaleUp         /* Scale up (0.6s) */
.animate-bounceIn        /* Bounce entrance (0.6s) */
```

### Continuous Animations

```css
.animate-float           /* Floating motion (3s) */
.animate-glow-pulse      /* Pulsing glow (2s) */
.animate-shimmer         /* Shimmer effect (2s) */
.animate-rotate          /* Continuous rotation (20s) */
.animate-card-glow       /* Card glow pulse (3s) */
```

### Interactive Animations

```css
.hover-lift              /* Lift on hover + shadow */
.scroll-reveal           /* Reveal on scroll */
.animate-gradient-shift  /* Animated gradient */
```

### Timing Controls

```css
.delay-100  /* 0.1s delay */
.delay-200  /* 0.2s delay */
.delay-300  /* 0.3s delay */
.delay-400  /* 0.4s delay */
.delay-500  /* 0.5s delay */
```

---

## Component-Specific Animations

### Navbar

- Sticky positioning with backdrop blur
- Gradient underline on hover
- Icon rotation on toggle

### Hero Section

- Fade-in down animations
- Image orbit pulse on hover
- Text glow effects

### About Section

- Scroll-triggered card reveals
- Timeline with animated dots
- Icon scaling on hover

### Skills Section

- Animated progress bars
- Staggered card animations
- Icon scale + rotate on hover

### Services Section

- Bounce-in card animations
- Icon rotation effects
- Gradient button hover

### Projects Section

- Bounce-in animations
- Image zoom (110% scale)
- Tag hover effects
- Arrow slide animation

### Contact Section

- Form input scale + glow
- Social icon animations
- Success color feedback

---

## How to Use

### Add animation to an element:

```jsx
<div className="animate-fadeInDown">Content here</div>
```

### Add delay:

```jsx
<div className="animate-fadeInDown delay-200">Content here</div>
```

### Add on scroll reveal:

```jsx
<div className="scroll-reveal revealed">Content here</div>
```

### Add hover lift:

```jsx
<div className="hover-lift">Content here</div>
```

---

## Timing Reference

| Animation     | Duration  | Easing   |
| ------------- | --------- | -------- |
| Fade-in       | 0.8s      | ease-out |
| Slide-in      | 0.8s      | ease-out |
| Scale-up      | 0.6s      | ease-out |
| Progress bar  | 1.0s      | ease-out |
| Hover effects | 300-500ms | ease     |
| Transitions   | 300ms     | ease     |

---

## Performance Tips

1. ✅ Use `transform` and `opacity` for animations
2. ✅ Avoid animating `width` and `height`
3. ✅ Use `will-change` sparingly
4. ✅ Debounce scroll listeners
5. ✅ Test on real devices

---

## Browser Support

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

---

**Happy animating! 🎉**
