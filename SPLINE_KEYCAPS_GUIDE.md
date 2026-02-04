# Guide: Adding 3D Keycaps for New Skills in Spline

This guide will help you add 3D keycaps for the new skills (Python, Java, SQL, Go, C, VHDL, Postman, Power BI, Azure, Jira, Spring Boot, ITIL/ITSM) to your Spline keyboard scene.

## Prerequisites

1. **Spline Desktop App** - Download from [spline.design](https://spline.design)
2. **Spline Scene File** - Located at `C:\Users\Sergio\3d-portfolio\public\assets\skills-keyboard.spline`
3. **Skill Icons** - Icons are already configured in `src/data/constants.ts`

## Step-by-Step Instructions

### 1. Open the Spline Scene

**⚠️ TROUBLESHOOTING: If Spline crashes when opening the file, try these solutions:**

**Solution 1: Update Spline to Latest Version**
1. Open Spline Desktop App
2. Check for updates: Help → Check for Updates (or go to spline.design and download the latest version)
3. Install the update and restart Spline
4. Try opening the file again

**Solution 2: Open via Spline Web Editor (Alternative)**
1. Go to [spline.design](https://spline.design) and sign in
2. Click "Create New" or "Import"
3. Upload `skills-keyboard.spline` from your computer
4. Edit in the web editor (note: some features may differ from desktop)

**Solution 3: Create a New Scene and Import**
1. Open Spline Desktop App
2. Create a new scene (File → New)
3. Try importing objects from the old file (if this option exists)
4. Or manually recreate the keyboard structure

**Solution 4: Check File Integrity**
1. Try opening the other Spline files first (`404.spline` or `untitled3.spline`) to verify Spline works
2. If those work, the issue might be specific to `skills-keyboard.spline`
3. The file might need to be re-exported from a compatible Spline version

**Option A: Using File Explorer (Easiest)**
1. Open File Explorer (Windows Explorer)
2. Navigate to: `C:\Users\Sergio\3d-portfolio\public\assets\`
3. Find the file `skills-keyboard.spline`
4. Right-click on it → Open with → Spline (or double-click if Spline is set as default)

**Option B: Using Spline App**
1. Open Spline Desktop App
2. Click **File** → **Open** (or press `Ctrl + O`)
3. In the file dialog, navigate to: `C:\Users\Sergio\3d-portfolio\public\assets\`
4. Select `skills-keyboard.spline`
5. Click **Open**
6. Wait for the scene to load

**Option C: Drag and Drop**
1. Open File Explorer and navigate to `C:\Users\Sergio\3d-portfolio\public\assets\`
2. Open Spline Desktop App
3. Drag `skills-keyboard.spline` from File Explorer into the Spline app window

**Option D: Command Line (If available)**
1. Open Command Prompt or PowerShell
2. Navigate to Spline installation directory (usually `C:\Users\[YourName]\AppData\Local\Programs\spline\`)
3. Run: `Spline.exe "C:\Users\Sergio\3d-portfolio\public\assets\skills-keyboard.spline"`

### 2. Understanding the Current Structure

The existing keycaps are named exactly as they appear in the code:
- `js` (JavaScript)
- `ts` (TypeScript)
- `html` (HTML)
- `react` (React)
- etc.

The code looks for keycaps by name: `splineApp.findObjectByName(skill.name)`

### 3. Adding New Keycaps

For each new skill, you need to create a keycap object:

#### New Skills to Add:
- `python` (Python)
- `java` (Java)
- `sql` (SQL)
- `go` (Go)
- `c` (C)
- `vhdl` (VHDL)
- `postman` (Postman)
- `powerbi` (Power BI)
- `azure` (Azure)
- `jira` (Jira)
- `springboot` (Spring Boot)
- `itil` (ITIL/ITSM)

#### Steps to Create Each Keycap:

1. **Duplicate an Existing Keycap**
   - Select an existing keycap (e.g., `js` or `ts`)
   - Duplicate it (Ctrl/Cmd + D)
   - Move it to your desired position on the keyboard

2. **Rename the Keycap**
   - Select the duplicated keycap
   - In the Properties panel, change the name to match the skill name exactly:
     - `python` (lowercase, no spaces)
     - `java` (lowercase)
     - `sql` (lowercase)
     - etc.

3. **Add the Logo/Icon**
   - The keycap should have a material/texture slot for the icon
   - You can either:
     - **Option A**: Use the icon URL from `constants.ts` and import it as a texture
     - **Option B**: Create a simple text label on the keycap
     - **Option C**: Use a 3D model/icon if available

   **Icon URLs from constants.ts:**
   - Python: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg`
   - Java: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg`
   - SQL: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg`
   - Go: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg`
   - C: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg`
   - Postman: `https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg`
   - Power BI: `https://www.vectorlogo.zone/logos/microsoft_powerbi/microsoft_powerbi-icon.svg`
   - Azure: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg`
   - Jira: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg`
   - Spring Boot: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg`
   - ITIL: Use Jira icon or create custom

4. **Set Up Hover Interactions**
   - The hover messages are automatically handled by the code
   - When a keycap is hovered/pressed, the code sets Spline variables:
     - `heading` = skill label (e.g., "Python", "Java")
     - `desc` = skill.shortDescription (the fun message)
   - Make sure your Spline scene has text objects that display these variables
   - These should already exist from the existing setup

5. **Match the Style**
   - Use the same material/color scheme as existing keycaps
   - Match the size and shape
   - Use the color from `constants.ts` if you want to match the theme:
     - Python: `#3776ab` (blue)
     - Java: `#ed8b00` (orange)
     - SQL: `#336791` (blue-gray)
     - Go: `#00add8` (cyan)
     - C: `#a8b9cc` (light blue-gray)
     - Postman: `#ff6c37` (orange-red)
     - Power BI: `#f2c811` (yellow)
     - Azure: `#0078d4` (blue)
     - Jira: `#0052cc` (blue)
     - Spring Boot: `#6db33f` (green)
     - ITIL: `#003366` (dark blue)

### 4. Verify Keycap Names

**CRITICAL**: The keycap names in Spline MUST match exactly (case-sensitive):
- `python` (not `Python` or `PYTHON`)
- `java` (not `Java` or `JAVA`)
- `sql` (not `SQL`)
- `go` (not `Go` or `GO`)
- `c` (not `C`)
- `vhdl` (not `VHDL`)
- `postman` (not `Postman`)
- `powerbi` (not `PowerBI` or `power-bi`)
- `azure` (not `Azure`)
- `jira` (not `Jira`)
- `springboot` (not `spring-boot` or `SpringBoot`)
- `itil` (not `ITIL` or `itil-itsm`)

### 5. Test the Integration

1. Save your Spline scene
2. Export/Update the scene file
3. Run your Next.js app: `npm run dev`
4. Navigate to the skills section
5. Hover over the new keycaps to see if they work
6. Check the browser console for any errors

### 6. Troubleshooting

**If keycaps don't appear:**
- Check that the names match exactly (case-sensitive)
- Verify the keycaps are visible in the Spline scene
- Check browser console for errors

**If hover messages don't show:**
- Verify the Spline scene has text objects with variables `heading` and `desc`
- Check that the code is finding the keycaps: `splineApp.findObjectByName(skill.name)`

**If icons don't display:**
- Make sure the icon URLs are accessible
- Check that the material/texture is properly applied
- Try using a different icon source if the current one doesn't work

## Hover Messages (Already Configured)

The hover messages are already set up in `src/data/constants.ts` with fun, casual descriptions:

- **Python**: "The snake that's got your back, slithering through code like a boss! 🐍✨"
- **Java**: "Write once, run anywhere... except when it doesn't! ☕☕ Still bussin' though!"
- **SQL**: "Querying databases like a pro, no cap! 💾🔍 Making data work for you!"
- **Go**: "Simple, fast, reliable. Go ahead and build, fr fr! 🚀"
- **C**: "The OG language, still going strong! The granddaddy of them all! 💪"
- **VHDL**: "Hardware description for the brave! When software meets hardware! 🔌"
- **Postman**: "Testing APIs like a boss! Delivering requests, no cap! 📮"
- **Power BI**: "Visualizing data like never before! Making charts that hit different! 📊"
- **Azure**: "Microsoft's cloud, making it rain! Blue skies ahead! ☁️💙"
- **Jira**: "Project management made easy! Tracking tickets like a pro! 🎯"
- **Spring Boot**: "Boot up your Java apps in style! Spring into action! 🌱"
- **ITIL/ITSM**: "IT service management framework! Keeping things organized, no cap! 🎯"

These will automatically appear when you hover over or press the keycaps!

## Additional Resources

- [Spline Documentation](https://docs.spline.design)
- [Spline Community](https://spline.design/community)
- Devicons: [devicon.dev](https://devicon.dev) - for skill icons

## Notes

- The Spline scene file is binary, so you must use the Spline Desktop App to edit it
- Always backup your scene file before making changes
- Test thoroughly after adding new keycaps
- The code will gracefully skip keycaps that don't exist, so adding them is optional but recommended for the full experience
