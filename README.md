# Memory Game

A fun and interactive memory game built with Next.js and Tailwind CSS. Test your memory by matching pairs of cards!

## Features

- 4x4 grid of cards with emoji pairs
- Smooth card flip animations
- Match checking logic
- Move counter to track player performance
- Win condition detection
- Responsive design for various screen sizes
- New Game button to reset and shuffle cards

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/memory-game.git
   cd memory-game
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Run the development server:
   ```
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to play the game.

## Usage

- Click on a card to flip it and reveal the emoji.
- Try to find the matching pair by flipping another card.
- If the cards match, they will stay face-up.
- If the cards don't match, they will flip back after a short delay.
- Continue until all pairs are matched.
- Try to complete the game in as few moves as possible!
- Click the "New Game" button to reset the board and start a new game.

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework for building the app
- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework for styling

## Project Structure

- `app/` - Next.js app directory
  - `page.jsx` - Main page component
  - `layout.jsx` - Root layout component
  - `globals.css` - Global styles and Tailwind directives
- `components/`
  - `MemoryGame.jsx` - Main game component with game logic
  - `Card.jsx` - Individual card component
