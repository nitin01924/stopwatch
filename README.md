# ⏱️ Stopwatch

A simple, elegant stopwatch web application built with vanilla JavaScript, HTML, and CSS.

## 🎯 Features

- **Start**: Begin timing with a single click
- **Stop**: Pause the timer without resetting
- **Reset**: Clear the timer back to 00:00:00
- **Real-time Display**: Shows hours, minutes, and seconds in HH:MM:SS format
- **Clean UI**: Dark theme with neon green accents for a modern look
- **Responsive Design**: Works on all screen sizes

## 🚀 Live Demo

Check out the live version: [https://nitin01924.github.io/stopwatch/](https://nitin01924.github.io/stopwatch/)

## 📁 Project Structure

```
stopwatch/
├── index.html       # HTML structure
├── index.css        # Styling and layout
├── index.js         # Timer logic and event handling
└── README.md        # This file
```

## 🛠️ Technologies Used

- **HTML5** - Markup structure
- **CSS3** - Styling and responsive design
- **JavaScript (Vanilla)** - Timer functionality and DOM manipulation

## 📋 How It Works

1. Click the **Start** button to begin the timer
2. Click the **Stop** button to pause the timer
3. Click the **Reset** button to reset the timer to 00:00:00
4. The timer displays hours, minutes, and seconds in HH:MM:SS format

### JavaScript Logic

The stopwatch uses:
- `setInterval()` to update the timer every 1 second
- Event listeners for button clicks
- Time formatting with `padStart()` to ensure two-digit display

## 🎨 Design

- **Color Scheme**: Black background with lime green text and buttons
- **Font**: Monospace for a digital stopwatch feel
- **Layout**: Centered with flexbox for a clean, modern appearance
- **Button Styling**: Large, clickable buttons with hover effects

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/nitin01924/stopwatch.git
   cd stopwatch
   ```

2. Open `index.html` in your web browser

That's it! No dependencies or build process needed.

## 💡 Possible Enhancements

- Add lap/split time functionality
- Add audio notification when timer reaches a target
- Implement keyboard shortcuts (spacebar to start/stop)
- Add milliseconds display
- Add preset timer options
- Local storage to save timer history

## 📄 License

This project is open source and available for anyone to use and modify.

## 👤 Author

Created by [@nitin01924](https://github.com/nitin01924)

---

**Enjoy timing with your stopwatch!** ⏱️
