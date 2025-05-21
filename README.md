# 💻 Demoblaze Playwright Tests

This project contains automated tests for [demoblaze.com](https://www.demoblaze.com) using Playwright and the Page Object Model (POM) design pattern.

## 📦 Installation
```bash
npm install
```

## ▶️ Running Tests
```bash
# Run all tests
npm test

# Run in headed mode
npm run test:headed

# View HTML report
npm run test:report
```

## 🧪 Test Scenarios Covered
1. ✅ Login (positive)
2. ❌ Login (negative)
3. 📝 User Registration
4. 🔍 Search Product (e.g. MacBook)
5. 🛒 Add to Cart
6. 💳 Guest Checkout Flow
7. 🚪 Logout

## 📂 Project Structure
```
project-root/
├── pages/
├── tests/
├── playwright.config.js
├── package.json
└── README.md
```
