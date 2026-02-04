# Row-by-Row Renaming & Color Guide

## Quick Reference: What to Rename

### Row 0 / Row 1 (Top rows with: js, ts, html, css, react, vue, nextjs, tailwind, nodejs, express, postgres, mongodb)

**Keep these (don't rename):**
- `js` - Keep (JavaScript)
- `ts` - Keep (TypeScript)
- `html` - Keep (HTML)
- `css` - Keep (CSS)
- `react` - Keep (React)
- `nextjs` - Keep (Next.js)
- `tailwind` - Keep (Tailwind)
- `nodejs` - Keep (Node.js)
- `express` - Keep (Express)
- `linux` - Keep (Linux)
- `docker` - Keep (Docker)
- `aws` - Keep (AWS)
- `git` - Keep (Git)
- `npm` - Keep (NPM)

**Rename these:**

1. **`vue`** → **`python`**
   - Color: `#3776ab` (Python blue) = RGB(55, 118, 171)

2. **`postgres`** → **`java`** (or keep if you use PostgreSQL - if keeping, use `mongodb` instead)
   - Color: `#ed8b00` (Java orange) = RGB(237, 139, 0)

3. **`mongodb`** → **`sql`** (or keep if you use MongoDB - if keeping, use another)
   - Color: `#336791` (SQL blue-gray) = RGB(51, 103, 145)

---

### Row 2 (Contains: git, github, prettier, npm, firebase, wordpress, keycap, etc.)

**Rename these:**

1. **`prettier`** → **`python`** (if `vue` wasn't renamed)
   - Color: `#3776ab` (Python blue) = RGB(55, 118, 171)

2. **`github`** → **`go`** (you already have `git`, so `github` can be repurposed)
   - Color: `#00add8` (Go cyan) = RGB(0, 173, 216)

3. **`firebase`** → **`c`**
   - Color: `#a8b9cc` (C light blue-gray) = RGB(168, 185, 204)

4. **`wordpress`** → **`vhdl`**
   - Color: `#8b4513` (VHDL brown) = RGB(139, 69, 19)

---

### Row 3 (Contains: linux, docker, nginx, aws, vim, vercel)

**Rename these:**

1. **`vim`** → **`java`** (if `postgres` wasn't renamed)
   - Color: `#ed8b00` (Java orange) = RGB(237, 139, 0)

2. **`vercel`** → **`postman`**
   - Color: `#ff6c37` (Postman orange-red) = RGB(255, 108, 55)

3. **`nginx`** → **`powerbi`**
   - Color: `#f2c811` (Power BI yellow) = RGB(242, 200, 17)

4. **`gcp`** (if you see it) → **`azure`**
   - Color: `#0078d4` (Azure blue) = RGB(0, 120, 212)

---

## Complete Renaming List (12 total)

Here's the complete list in order of priority:

1. **`prettier`** → **`python`**
   - Color: `#3776ab` = RGB(55, 118, 171)

2. **`vim`** → **`java`**
   - Color: `#ed8b00` = RGB(237, 139, 0)

3. **`wordpress`** → **`sql`**
   - Color: `#336791` = RGB(51, 103, 145)

4. **`firebase`** → **`go`**
   - Color: `#00add8` = RGB(0, 173, 216)

5. **`gcp`** → **`c`** (if you see it, otherwise use another)
   - Color: `#a8b9cc` = RGB(168, 185, 204)

6. **`vercel`** → **`vhdl`**
   - Color: `#8b4513` = RGB(139, 69, 19)

7. **`nginx`** → **`postman`**
   - Color: `#ff6c37` = RGB(255, 108, 55)

8. **`github`** → **`powerbi`**
   - Color: `#f2c811` = RGB(242, 200, 17)

9. **`postgres`** → **`azure`** (or keep if you use PostgreSQL)
   - Color: `#0078d4` = RGB(0, 120, 212)

10. **`mongodb`** → **`jira`** (or keep if you use MongoDB)
    - Color: `#0052cc` = RGB(0, 82, 204)

11. **`vue`** → **`springboot`** (or keep if you use Vue)
    - Color: `#6db33f` = RGB(109, 179, 63)

12. **Any other unused keycap** → **`itil`**
    - Color: `#003366` = RGB(0, 51, 102)

---

## How to Change Colors

After renaming each keycap:

1. **Select the renamed keycap** (it should still be selected after renaming)
2. In the **Properties panel** (right sidebar), find the **Material** section
3. Click on the **color square** next to the material name (opens color picker)
4. In the color picker:
   - Enter the **RGB values** in the RGB fields at the bottom
   - OR click in the color square and adjust the hue slider
5. The color will update automatically

---

## Quick Checklist

- [ ] Renamed `prettier` → `python` + Changed color to RGB(55, 118, 171)
- [ ] Renamed `vim` → `java` + Changed color to RGB(237, 139, 0)
- [ ] Renamed `wordpress` → `sql` + Changed color to RGB(51, 103, 145)
- [ ] Renamed `firebase` → `go` + Changed color to RGB(0, 173, 216)
- [ ] Renamed `gcp` or another → `c` + Changed color to RGB(168, 185, 204)
- [ ] Renamed `vercel` → `vhdl` + Changed color to RGB(139, 69, 19)
- [ ] Renamed `nginx` → `postman` + Changed color to RGB(255, 108, 55)
- [ ] Renamed `github` → `powerbi` + Changed color to RGB(242, 200, 17)
- [ ] Renamed `postgres` → `azure` + Changed color to RGB(0, 120, 212)
- [ ] Renamed `mongodb` → `jira` + Changed color to RGB(0, 82, 204)
- [ ] Renamed `vue` → `springboot` + Changed color to RGB(109, 179, 63)
- [ ] Renamed another unused → `itil` + Changed color to RGB(0, 51, 102)
- [ ] Saved the Spline file (Ctrl + S)

---

## Notes

- **Keep the skills you actually use!** If you use Vue, PostgreSQL, or MongoDB, keep those and use different keycaps for the new skills.
- The exact row numbers might vary - just find the objects by name in the Objects panel.
- Make sure to save after making changes!
