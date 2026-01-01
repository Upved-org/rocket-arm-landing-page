# AI Agent Guidance - RocketArm Landing Page

## Project Overview
This is a Next.js landing page for RocketArm, a competitive throwing height measurement application. The project uses:
- **Framework**: Next.js 16 (App Router)
- **Package Manager**: pnpm
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI primitives with shadcn/ui
- **Language**: TypeScript

## Project Structure

### `/app`
Next.js App Router pages and layouts. All routing and page components live here.

### `/components`
Reusable React components including:
- UI primitives (buttons, cards, dialogs, etc.)
- Custom landing page sections
- Layout components

### `/styles`
Global CSS and Tailwind configuration

### `/public`
Static assets (images, icons, etc.)

### `/business`
Business-related documentation and planning:
- `/business/social-media` - Social media content and strategy
- `/business/business-plan` - Business planning documents

### `/lib`
Utility functions and shared logic

### `/hooks`
Custom React hooks

## Development Guidelines

### Making Changes
1. **UI Components**: Modify existing components in `/components` or create new ones following the shadcn/ui pattern
2. **Pages**: Add/edit pages in `/app` directory using App Router conventions
3. **Styling**: Use Tailwind CSS utility classes; global styles go in `/styles`
4. **Dependencies**: Always use `pnpm add <package>` for new dependencies

### Running the Project
```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

### Payment Integration
This project uses Stripe for payment processing. Stripe dependencies are installed:
- `@stripe/stripe-js` - Client-side Stripe integration
- `stripe` - Server-side Stripe SDK

## Common Tasks

### Adding a New Page
1. Create a new folder in `/app` with the route name
2. Add a `page.tsx` file in that folder
3. Implement the page component

### Adding a New Component
1. Create component file in `/components`
2. Follow TypeScript and React best practices
3. Use Tailwind CSS for styling
4. Export component for use in pages

### Modifying Styles
1. Global styles: Edit `/styles/globals.css`
2. Component styles: Use Tailwind utility classes
3. Custom CSS: Add to component-specific CSS modules if needed

## Important Notes
- This project uses **pnpm** as the package manager - do not use npm or yarn
- Follow Next.js 16 App Router conventions
- Maintain TypeScript type safety
- Keep components modular and reusable
