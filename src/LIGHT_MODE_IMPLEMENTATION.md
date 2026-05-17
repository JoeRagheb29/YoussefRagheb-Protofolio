# 🎨 Quick Light Mode Implementation Guide

## How to Add Light Mode to Each Section

### Step 1: Import the Hook

Add this to the top of each section component:

```jsx
import { useTheme } from "../context/useTheme";
```

### Step 2: Use the Hook

Add this inside your component function:

```jsx
const { isDark } = useTheme();
```

### Step 3: Update Styling

Replace hardcoded colors with conditional classes:

#### Example: About Section

```jsx
// Before
<div className='bg-slate-950 text-white py-12 sm:py-20 px-4 sm:px-8'>

// After
<div className={`${isDark ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'} py-12 sm:py-20 px-4 sm:px-8`}>
```

---

## Color Mapping Reference

### Main Container

```jsx
// Dark: bg-slate-950 text-white
// Light: bg-white text-slate-900

className={`${isDark ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'}`}
```

### Secondary Container (Cards)

```jsx
// Dark: bg-slate-900
// Light: bg-slate-100

className={`${isDark ? 'bg-slate-900' : 'bg-slate-100'}`}
```

### Borders

```jsx
// Dark: border-slate-700
// Light: border-slate-200

className={`${isDark ? 'border-slate-700' : 'border-slate-200'}`}
```

### Text - Primary

```jsx
// Dark: text-white
// Light: text-slate-900

className={`${isDark ? 'text-white' : 'text-slate-900'}`}
```

### Text - Secondary (Muted)

```jsx
// Dark: text-gray-400
// Light: text-slate-600

className={`${isDark ? 'text-gray-400' : 'text-slate-600'}`}
```

### Accents

```jsx
// Dark: text-blue-400
// Light: text-blue-600

className={`${isDark ? 'text-blue-400' : 'text-blue-600'}`}
```

---

## Section-by-Section Implementation

### Hero Section (`src/Sections/Hero.jsx`)

```jsx
import { useTheme } from "../context/useTheme";

export default function Hero() {
  const { isDark } = useTheme();

  return (
    <div
      className={`${isDark ? "bg-linear-to-t from-slate-950 via-slate-900 to-slate-950" : "bg-linear-to-t from-slate-50 via-white to-slate-50"} text-white min-h-screen flex items-center justify-center px-4 sm:px-8 py-12 sm:py-20`}
    >
      {/* Rest of component */}
    </div>
  );
}
```

### About Section (`src/Sections/About.jsx`)

```jsx
import { useTheme } from "../context/useTheme";

export default function About() {
  const { isDark } = useTheme();

  return (
    <div
      className={`${isDark ? "bg-slate-950 text-white" : "bg-white text-slate-900"} py-12 sm:py-20 px-4 sm:px-8`}
    >
      {/* Rest of component */}
    </div>
  );
}
```

### Skills Section (`src/Sections/Skills.jsx`)

```jsx
import { useTheme } from "../context/useTheme";

export default function Skills() {
  const { isDark } = useTheme();

  return (
    <div
      className={`${isDark ? "bg-slate-950 text-white" : "bg-white text-slate-900"} py-12 sm:py-20 px-4 sm:px-8`}
    >
      {/* Cards with dark='border-slate-700' light='border-slate-200' */}
    </div>
  );
}
```

### Projects Section (`src/Sections/Projects.jsx`)

```jsx
import { useTheme } from "../context/useTheme";

export default function Projects() {
  const { isDark } = useTheme();

  return (
    <div
      className={`${isDark ? "bg-slate-950 text-white" : "bg-white text-slate-900"} py-12 sm:py-20 px-4 sm:px-8`}
    >
      {/* Rest of component */}
    </div>
  );
}
```

### Services Section (`src/Sections/Services.jsx`)

```jsx
import { useTheme } from "../context/useTheme";

export default function Services() {
  const { isDark } = useTheme();

  return (
    <div
      className={`${isDark ? "bg-slate-950 text-white" : "bg-white text-slate-900"} py-12 sm:py-20 px-4 sm:px-8`}
    >
      {/* Rest of component */}
    </div>
  );
}
```

### Contact Section (`src/Sections/Contact.jsx`)

```jsx
import { useTheme } from "../context/useTheme";

export default function Contact() {
  const { isDark } = useTheme();

  return (
    <div
      className={`${isDark ? "bg-slate-950 text-white" : "bg-white text-slate-900"} py-12 sm:py-20 px-4 sm:px-8`}
    >
      {/* Rest of component */}
    </div>
  );
}
```

### Footer (`src/layout/Footer.jsx`)

```jsx
import { useTheme } from "../context/useTheme";

export default function Footer() {
  const { isDark } = useTheme();

  return (
    <div
      className={`${isDark ? "bg-slate-950 text-white border-slate-800" : "bg-white text-slate-900 border-slate-200"} border-t py-8`}
    >
      {/* Rest of component */}
    </div>
  );
}
```

---

## Quick Color Reference Table

| Element        | Dark                 | Light                |
| -------------- | -------------------- | -------------------- |
| Main BG        | `bg-slate-950`       | `bg-white`           |
| Surface        | `bg-slate-900`       | `bg-slate-100`       |
| Border         | `border-slate-700`   | `border-slate-200`   |
| Text Primary   | `text-white`         | `text-slate-900`     |
| Text Secondary | `text-gray-400`      | `text-slate-600`     |
| Accent         | `text-blue-400`      | `text-blue-600`      |
| Hover          | `hover:bg-slate-800` | `hover:bg-slate-100` |

---

## Copy-Paste Template

Use this template for any section:

```jsx
import { useTheme } from "../context/useTheme";

function SectionName() {
  const { isDark } = useTheme();

  return (
    <div
      className={`${isDark ? "bg-slate-950 text-white" : "bg-white text-slate-900"} py-12 sm:py-20 px-4 sm:px-8 transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-2 sm:mb-4 ${isDark ? "text-white" : "text-slate-900"}`}
        >
          Section Title
        </h2>

        <div
          className={`border ${isDark ? "border-slate-700" : "border-slate-200"} rounded-lg p-4 sm:p-6 lg:p-8`}
        >
          {/* Content */}
        </div>
      </div>
    </div>
  );
}

export default SectionName;
```

---

## Testing Light Mode

1. Click the **Sun icon** in the navbar to toggle light mode
2. Verify all sections display correctly
3. Check that text is readable in both modes
4. Refresh the page - theme should persist
5. Open in incognito/private window - should use system preference

---

## Performance Tips

- ✅ Theme state updates smoothly (300ms transition)
- ✅ Uses React Context (efficient)
- ✅ CSS variables for fast switching
- ✅ localStorage saves preference
- ✅ No performance impact

---

**Ready to implement! Start with one section and test. 🎉**
