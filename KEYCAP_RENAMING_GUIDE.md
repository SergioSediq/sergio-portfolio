# Keycap Renaming & Logo Update Guide

## Step 1: Find the Actual Keycap Objects (IMPORTANT!)

**⚠️ CRITICAL:** You need to rename the **3D OBJECTS** (the actual keycaps in the scene), NOT the Material Assets!

### How to Find the Keycap Objects:

1. **Look for a "Scene" or "Objects" or "Hierarchy" panel** in Spline (usually on the left side, different from Material Assets)
2. **OR** click on a keycap directly in the 3D viewport
3. When you select a keycap object, check the **Properties panel** (usually on the right) - it should show the object's **Name** field
4. The Material Assets panel is just for materials/textures - those are separate!

### If You Can Only See Material Assets:

If you can only see Material Assets and not the actual objects:
- Try clicking directly on a keycap in the 3D viewport
- Look for a different panel/tab that shows "Scene", "Objects", or "Hierarchy"
- The keycap objects should be listed there with names like `js`, `ts`, `html`, etc.

---

## Step 2: Rename Keycaps in Spline

Use this exact mapping to rename existing keycaps to your new skills:

### Renaming Map (Do these in order):

1. **`prettier`** → **`python`**
2. **`vim`** → **`java`**
3. **`wordpress`** → **`sql`**
4. **`firebase`** → **`go`**
5. **`gcp`** → **`c`**
6. **`vercel`** → **`vhdl`**
7. **`nginx`** → **`postman`**
8. **`github`** → **`powerbi`** (you already have `git`, so `github` can be repurposed)
9. **`postgres`** → **`azure`** (or keep if you use PostgreSQL - if keeping, use `mongodb` instead)
10. **`mongodb`** → **`jira`** (or keep if you use MongoDB - if keeping, use `vue` instead)
11. **`vue`** → **`springboot`** (or keep if you use Vue - if keeping, use another unused keycap)
12. **Pick any other unused keycap** → **`itil`**

### How to Rename:
1. In Spline, select the keycap in the scene or in the Objects panel
2. In the Properties panel (right side), find the **Name** field
3. Change the name to the new one (e.g., change `prettier` to `python`)
4. Press Enter to confirm
5. Repeat for all 12 keycaps

---

## Step 2: Update the Logos/Icons

After renaming, update each keycap's logo to match the new skill.

### Method 1: Using Image URLs (Recommended)

For each renamed keycap, add the icon:

1. **Select the keycap** you just renamed
2. In the **Properties panel**, find the **Material** section
3. Look for **Texture** or **Image** slot
4. Click on it and choose **"Load Image from URL"** or **"Import Image"**
5. Paste the icon URL from the list below
6. Adjust the material settings if needed

### Icon URLs for Each Skill:

**Python:**
```
https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg
```

**Java:**
```
https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg
```

**SQL:**
```
https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg
```

**Go:**
```
https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg
```

**C:**
```
https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg
```

**VHDL:**
```
https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg
```
(Note: VHDL doesn't have a standard devicon, using C icon as placeholder)

**Postman:**
```
https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg
```

**Power BI:**
```
https://www.vectorlogo.zone/logos/microsoft_powerbi/microsoft_powerbi-icon.svg
```

**Azure:**
```
https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg
```

**Jira:**
```
https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg
```

**Spring Boot:**
```
https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg
```

**ITIL/ITSM:**
```
https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg
```
(Note: ITIL doesn't have a standard icon, using Jira icon as placeholder)

---

### Method 2: Using Text Labels (Simpler Alternative)

If importing images doesn't work easily:

1. **Select the keycap**
2. In Spline, add a **Text object** as a child of the keycap
3. Type the skill name (e.g., "Python", "Java")
4. Position it on the keycap surface
5. Style it to match other keycaps

### Method 3: Using Material Colors (IMPORTANT - Update Colors!)

**YES, you should update the colors!** When you rename a keycap, also update its material color to match the new skill.

1. **Select the renamed keycap**
2. In **Material** properties (the color picker you see), click on the color
3. In the color picker, you can either:
   - Use the **eyedropper** tool and paste the hex code
   - Or manually set the RGB values
4. Set the **Base Color** to match the skill:

**Color Mapping (Update these when renaming):**

- **`prettier` → `python`**: Change color to `#3776ab` (Python blue)
- **`vim` → `java`**: Change color to `#ed8b00` (Java orange)
- **`wordpress` → `sql`**: Change color to `#336791` (SQL blue-gray)
- **`firebase` → `go`**: Change color to `#00add8` (Go cyan)
- **`gcp` → `c`**: Change color to `#a8b9cc` (C light blue-gray)
- **`vercel` → `vhdl`**: Change color to `#8b4513` (VHDL brown)
- **`nginx` → `postman`**: Change color to `#ff6c37` (Postman orange-red)
- **`github` → `powerbi`**: Change color to `#f2c811` (Power BI yellow)
- **`postgres` → `azure`**: Change color to `#0078d4` (Azure blue)
- **`mongodb` → `jira`**: Change color to `#0052cc` (Jira blue)
- **`vue` → `springboot`**: Change color to `#6db33f` (Spring Boot green)
- **Any other → `itil`**: Change color to `#003366` (ITIL dark blue)

**How to set the color in Spline:**
1. Select the keycap
2. In Properties panel, find **Material** section
3. Click on the color square (opens color picker)
4. In the color picker:
   - You can click anywhere in the color square
   - Or use the RGB input fields at the bottom
   - Or use the eyedropper tool
5. Enter the hex code or RGB values:
   - For hex codes like `#3776ab`, convert to RGB:
     - Python `#3776ab` = RGB(55, 118, 171)
     - Java `#ed8b00` = RGB(237, 139, 0)
     - SQL `#336791` = RGB(51, 103, 145)
     - Go `#00add8` = RGB(0, 173, 216)
     - C `#a8b9cc` = RGB(168, 185, 204)
     - VHDL `#8b4513` = RGB(139, 69, 19)
     - Postman `#ff6c37` = RGB(255, 108, 55)
     - Power BI `#f2c811` = RGB(242, 200, 17)
     - Azure `#0078d4` = RGB(0, 120, 212)
     - Jira `#0052cc` = RGB(0, 82, 204)
     - Spring Boot `#6db33f` = RGB(109, 179, 63)
     - ITIL `#003366` = RGB(0, 51, 102)

---

## Step 3: Verify Everything Works

After renaming and updating logos:

1. **Save the Spline file** (Ctrl + S)
2. **Test in your portfolio:**
   - Run `npm run dev` or `yarn dev`
   - Navigate to the skills section
   - Hover over the new keycaps
   - Check that hover messages appear correctly

---

## Quick Checklist

- [ ] Renamed `prettier` → `python`
- [ ] Renamed `vim` → `java`
- [ ] Renamed `wordpress` → `sql`
- [ ] Renamed `firebase` → `go`
- [ ] Renamed `gcp` → `c`
- [ ] Renamed `vercel` → `vhdl`
- [ ] Renamed `nginx` → `postman`
- [ ] Renamed `github` → `powerbi`
- [ ] Renamed `postgres` or `mongodb` → `azure`
- [ ] Renamed `mongodb` or `vue` → `jira`
- [ ] Renamed `vue` or another → `springboot`
- [ ] Renamed another unused → `itil`
- [ ] Updated all logos/icons
- [ ] Saved the Spline file
- [ ] Tested in portfolio

---

## Troubleshooting

**If logos don't appear:**
- Make sure the image URL is accessible
- Try downloading the icon and importing it as a file instead
- Use the text label method as a backup

**If keycaps don't work after renaming:**
- Double-check the names match exactly (lowercase, no spaces)
- Make sure you saved the Spline file
- Check browser console for any errors

**If hover messages don't show:**
- The messages are already configured in the code
- They should work automatically once the keycap names match
- Verify the name in Spline matches exactly what's in `constants.ts`
