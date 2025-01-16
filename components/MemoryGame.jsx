'use client'

import React, { useState, useEffect } from 'react'
import Card from './Card'

const CARD_PAIRS = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼']

export default function MemoryGame() {
  const [cards, setCards] = useState([])
  const [flipped, setFlipped] = useState([])
  const [solved, setSolved] = useState([])
  const [disabled, setDisabled] = useState(false)
  const [moves, setMoves] = useState(0)
  const [gameWon, setGameWon] = useState(false)

  useEffect(() => {
    initializeGame()
  }, [])

  const initializeGame = () => {
    const shuffledCards = [...CARD_PAIRS, ...CARD_PAIRS]
      .sort(() => Math.random() - 0.5)
      .map((card, index) => ({ id: index, content: card }))
    setCards(shuffledCards)
    setFlipped([])
    setSolved([])
    setDisabled(false)
    setMoves(0)
    setGameWon(false)
  }

  const handleCardClick = (id) => {
    if (flipped.length === 0) {
      setFlipped([id])
      setDisabled(false)
    } else if (flipped.length === 1) {
      setDisabled(true)
      setFlipped([flipped[0], id])
      setMoves(moves + 1)

      if (cards[flipped[0]].content === cards[id].content) {
        setSolved([...solved, flipped[0], id])
        setFlipped([])
        setDisabled(false)
      } else {
        setTimeout(() => {
          setFlipped([])
          setDisabled(false)
        }, 1000)
      }
    }
  }

  useEffect(() => {
    if (solved.length === cards.length && cards.length > 0) {
      setGameWon(true)
    }
  }, [solved, cards])

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-blue-600">Memory Game</h1>
      <div className="grid grid-cols-4 gap-4 mb-8">
        {cards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            content={card.content}
            flipped={flipped.includes(card.id) || solved.includes(card.id)}
            solved={solved.includes(card.id)}
            onClick={() => !disabled && !solved.includes(card.id) && handleCardClick(card.id)}
          />
        ))}
      </div>
      <div className="text-xl mb-4">Moves: {moves}</div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={initializeGame}
      >
        New Game
      </button>
      {gameWon && (
        <div className="mt-4 text-2xl font-bold text-green-600">
          Congratulations! You won in {moves} moves!
        </div>
      )}
    </div>
  )
}

