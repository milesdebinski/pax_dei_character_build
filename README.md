# Pax Dei Character Builder

A modern, intuitive character build calculator for Pax Dei with equipment and skill selection.

## Features

- **Equipment Selection**: Choose from weapons, armor pieces, and accessories
- **Skill Management**: Select and manage skills from equipped items
- **Real-time Stats**: Live preview of character stats as you build
- **Modern UI**: Clean, responsive design with smooth animations
- **Character Export/Import**: Save and load character builds

## Getting Started

### Prerequisites

- Node.js (for development server)
- Modern web browser

### Installation

1. Clone or download this repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

Start the development server:

```bash
npm run dev
```

Or simply open `index.html` in your web browser.

## Deployment

### Deploy to Netlify (Recommended - Public)

1. Install dependencies (includes Netlify CLI):

   ```bash
   npm install
   ```

2. Deploy to Netlify (public, no authentication required):

   ```bash
   npm run deploy
   ```

3. Your app will be available at: `https://pax-dei-character-builder.netlify.app`

### Alternative: Deploy to Vercel

1. Install Netlify CLI:

   ```bash
   npm i -g netlify-cli
   ```

2. Build and deploy:
   ```bash
   netlify deploy --prod --dir .
   ```

## Usage

1. **Select Equipment**: Click on any equipment slot to open the equipment selector
2. **Choose Skills**: Skills from equipped items will appear in the skills panel
3. **View Stats**: Character stats update in real-time as you equip items and select skills
4. **Reset Character**: Use the reset button to clear all selections

## Project Structure

```
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript application logic
├── package.json        # Project dependencies
└── README.md          # This file
```

## Equipment Database

The equipment database is currently empty and ready to be populated with Pax Dei equipment data. The application is designed to handle:

- **Weapons**: Swords, bows, staffs, etc.
- **Armor**: Helmets, chest pieces, legs, boots
- **Accessories**: Rings, amulets, etc.

Each equipment piece can have:

- Base stats (attack, defense, health, etc.)
- Available skills
- Item type and description

## Skill System

Skills from equipped items can be selected to provide additional stat bonuses. The system supports:

- Multiple skills per equipment piece
- Skill stat bonuses
- Visual skill selection interface

## Development

The application is built with vanilla HTML, CSS, and JavaScript for simplicity and performance. The modular design makes it easy to extend with additional features.

### Key Components

- `PaxDeiCharacterBuilder`: Main application class
- Equipment management system
- Real-time stats calculation
- Modal-based UI components
- Notification system

## Contributing

This is a foundation application ready for Pax Dei equipment data. To add equipment:

1. Populate the `equipmentDatabase` object in `script.js`
2. Follow the existing data structure for equipment items
3. Include stats and skills for each equipment piece

## License

MIT License - feel free to use and modify for your Pax Dei character building needs!
