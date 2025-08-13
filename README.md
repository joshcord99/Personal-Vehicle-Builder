# Personal Vehicle Builder Generator

A TypeScript CLI application that lets you create and manage different types of vehicles (Cars, Trucks, Motorbikes) with interactive commands.

## Features

- Create vehicles (Cars, Trucks, Motorbikes)
- Perform actions on vehicles (start, accelerate, decelerate, turn, reverse)
- Special actions: Trucks can tow other vehicles, Motorbikes can do wheelies
- View detailed vehicle information

## Installation

```bash
npm install
```

## Usage

```bash
npm start
```

## Vehicle Types

- **Cars**: 4 wheels, standard vehicle actions
- **Trucks**: 4 wheels, can tow other vehicles
- **Motorbikes**: 2 wheels, can perform wheelies

## Actions Available

- Start/Stop vehicle
- Accelerate/Decelerate
- Turn left/right
- Reverse
- Print vehicle details
- Tow (Trucks only)
- Wheelie (Motorbikes only)

## Project Structure

```
src/
├── classes/          # Vehicle classes
├── interfaces/       # TypeScript interfaces
├── constants/        # Vehicle constants
├── types/           # Type definitions
├── utils/           # Utility functions
└── index.ts         # Main entry point
```
