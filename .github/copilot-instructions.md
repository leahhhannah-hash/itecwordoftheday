# Word of the Day Project - AI Coding Guidelines

## Project Overview
This is a simple Node.js Express application for displaying "Word of the Day" entries. The app serves as a basic web server with in-memory data storage.

## Architecture
- **Main Application**: `app.js` - Single Express server file containing all routes and logic
- **Data Model**: Words stored as JavaScript objects with properties: `word` (string), `partOfSpeech` (string), `definition` (string)
- **Example Data**:
  ```javascript
  { word: "apple", partOfSpeech: "noun", definition: "a fruit" }
  ```
- **Templating**: Uses EJS for server-side rendering with templates in `views/` directory

## Development Workflow
- **Run the App**: `node app.js` (listens on port 3000)
- **No Build Process**: Direct Node.js execution, no compilation or bundling
- **Dependencies**: Install with `npm install` (includes Express and EJS)

## Code Patterns
- **Module System**: CommonJS (`require` and `module.exports`)
- **Server Setup**: Standard Express app initialization with `app.listen(port)`
- **Routing**: Simple GET routes, e.g., `app.get('/', (req, res) => { ... })`
- **Data Storage**: In-memory array for words (no database integration)
- **Sorting**: Sort words alphabetically by word using `localeCompare` before rendering
- **Template Rendering**: Pass data to EJS with `res.render(templateName, dataObject)`

## Key Files
- `app.js`: Core application logic and server setup
- `package.json`: Project metadata and dependencies
- `views/allwords.ejs`: Template for displaying all words

## Conventions
- Port 3000 for local development
- Word data follows consistent object structure
- Minimal dependencies - prefer lightweight solutions

This is a foundational project - focus on adding routes for word display, random selection, and EJS templates in `views/` directory.</content>
<parameter name="filePath">/Users/leahmartin/Code/ITEC305/word of the day /.github/copilot-instructions.md