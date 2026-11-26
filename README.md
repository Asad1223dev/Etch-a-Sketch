# Etch-a-Sketch

An interactive browser-based **Etch-a-Sketch** drawing web application built with HTML, CSS, and JavaScript, styled with a **Classic Retro Sketch** palette.

## Features

- **Color Picker:** Choose any custom color to draw on the grid.
- **Hover Mode Toggle:** Click **Hover** to paint cells by moving the cursor over them, and click again to turn hover drawing off.
- **Single-Cell Erase:** Double-click any cell with the left mouse button to clear that individual square.
- **Clear the Grid:** Reset the entire canvas back to its clean surface color.
- **Custom Grid Size:** Click **Make New Grid** to set a custom grid side length from `1` to `64`.
- **Classic Retro Sketch Theme:** Warm cream and soft border tones (`#EFECE6`, `#FAF8F5`, `#C5BEB2`, `#1F2421`) paired with a structured instructions panel.

## Built With

- HTML5
- CSS3 (Flexbox & Grid layout)
- Vanilla JavaScript (DOM manipulation & event listeners)

## How to Use

1. Clone or download the repository.
2. Open `index.html` in your web browser (or run it via a local development server).
3. Select a color, toggle **Hover** mode if needed, resize the grid (`1–64`), or double-click a cell to clear it.

## What I Learned

- Dynamically generating and resizing a square grid in JavaScript while keeping proportions intact.
- Managing interaction states with boolean flags and event listeners (`click`, `dblclick`, `mouseenter`, `input`).
- Organizing page layout, custom controls, and cohesive color themes in CSS.