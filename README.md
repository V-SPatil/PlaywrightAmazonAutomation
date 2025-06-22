# Playwright Amazon Automation

A production-grade test automation framework using Playwright for automating Amazon.in workflows.  
This framework follows modular structure, reusable test setup, clean ES6 code, and industry-standard practices.

---

## 🚀 Tech Stack

- **Playwright Test** – Core testing framework
- **ES6 Modules** – Cleaner and modern JavaScript
- **Custom Base Class** – For reusability of `page`, `browser`, and `context`
- **HTML Reporter** – Built-in Playwright test reports
- **Headless/Headed Mode** – Configurable via `playwright.config.js`

---

## 📦 Installation

```bash
git clone https://github.com/V-SPatil/PlaywrightAmazonAutomation.git
cd PlaywrightAmazonAutomation
npm install
npx playwright install
```

---

## ▶️ Run Tests

```bash
npx playwright test
```

To run with UI (headed):
```bash
npx playwright test --headed
```

Generate HTML report:
```bash
npx playwright show-report
```

---

## 📁 Folder Structure

```
PlaywrightAmazonAutomation/
├── base.test.js               # Shared setup
├── playwright.config.js       # Playwright config
├── tests/                     # All test cases
│   ├── search.spec.js
│   ├── cart.spec.js
│   ├── productTitle.spec.js
│   ├── ...
└── README.md
```

---

## ✅ Test Scenarios (20+)

| #  | Test Case Description |
|----|------------------------|
| 1  | Search for product using search bar |
| 2  | Validate product titles on search results |
| 3  | Click on first product and validate detail page |
| 4  | Check price consistency between listing and detail |
| 5  | Add product to cart and check cart count |
| 6  | Remove product from cart and validate empty state |
| 7  | Filter products by brand |
| 8  | Apply sort by "Price: Low to High" |
| 9  | Check delivery availability for a pin code |
| 10 | Validate product rating and review count visibility |
| 11 | Verify product image zoom on hover |
| 12 | Ensure sponsored products are displayed |
| 13 | Validate navigation from "Today's Deals" |
| 14 | Test adding multiple items to cart |
| 15 | Check wish list button presence |
| 16 | Check category dropdown filters correctly |
| 17 | Search for invalid product and validate error message |
| 18 | Monitor and validate search API call response |
| 19 | Verify cart total matches added items |
| 20 | Ensure mobile view loads properly via viewport test |

---

## 📌 Notes

- This project does not bypass any of Amazon’s real payment system.
- Tests are strictly for learning and portfolio use.

---

## 👨‍💻 Author

**Vishal Patil**

---

## 📝 License

MIT License
