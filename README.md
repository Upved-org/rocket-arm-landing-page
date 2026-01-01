# RocketArm Landing Page

A modern, responsive landing page for RocketArm - a competitive throwing height measurement application.

## 🚀 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **Package Manager**: [pnpm](https://pnpm.io/)
- **Payments**: [Stripe](https://stripe.com/)

## 📋 Prerequisites

- Node.js 18+ 
- pnpm (install with `npm install -g pnpm`)

## 🛠️ Getting Started

### Installation

```bash
# Install dependencies
pnpm install
```

### Development

```bash
# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build

```bash
# Create production build
pnpm build

# Start production server
pnpm start
```

### Linting

```bash
# Run ESLint
pnpm lint
```

## 📁 Project Structure

```
rocket-arm-landing-page/
├── app/                    # Next.js App Router pages and layouts
├── components/             # React components
│   ├── ui/                # shadcn/ui components
│   └── ...                # Custom components
├── styles/                # Global CSS and Tailwind config
├── public/                # Static assets
├── lib/                   # Utility functions
├── hooks/                 # Custom React hooks
├── business/              # Business documentation
│   ├── social-media/      # Social media strategy
│   └── business-plan/     # Business planning docs
├── agents.md              # AI agent guidance
└── package.json
```

## 💳 Stripe Integration

This project includes Stripe for payment processing:

- **Client-side**: `@stripe/stripe-js`
- **Server-side**: `stripe`

Set up your Stripe keys in environment variables:

```bash
# .env.local
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_publishable_key
STRIPE_SECRET_KEY=your_secret_key
```

## 🤝 Contributing

This project uses AI agents for development. See [agents.md](./agents.md) for guidance on project structure and conventions.

## 📝 License

Private project - All rights reserved

## 🔗 Related Projects

- [RocketArm Mobile App](https://github.com/narya/rocket-arm) - The companion mobile application

---

Built with ❤️ for competitive throwers
