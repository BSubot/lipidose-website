# Assets Folder Instructions

This folder should contain any additional assets for your website.

## Recommended Assets to Add:

### 1. Favicon
- Create a `favicon.ico` file (16x16, 32x32, 48x48 pixels)
- Add to the `<head>` section of `index.html`:
  ```html
  <link rel="icon" type="image/x-icon" href="/favicon.ico">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
  ```

### 2. Pitch Deck PDF
- Add your `Lipidose_Pitch_Deck.pdf` file here
- Update the download link in `script.js`:
  ```javascript
  const link = document.createElement('a');
  link.href = './assets/Lipidose_Pitch_Deck.pdf';
  link.download = 'Lipidose_Pitch_Deck.pdf';
  link.click();
  ```

### 3. Images (Optional)
- Company logo
- Product images
- Team photos
- Any other visual assets

### 4. Additional Documents
- Fact sheets
- White papers
- Research documents

## How to Add Assets:

1. Create an `assets` folder in your project root
2. Add your files to this folder
3. Reference them in your HTML/CSS/JS using relative paths:
   - `./assets/filename.ext`
   - `/assets/filename.ext`

## File Naming Best Practices:

- Use lowercase letters
- Use hyphens instead of spaces
- Keep names descriptive but concise
- Examples: `company-logo.png`, `pitch-deck.pdf`, `team-photo.jpg`