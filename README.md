# Günlük İyi İşler

A platform for sharing and discovering daily acts of kindness.

## Features

- Share good deeds and acts of kindness
- Browse and search through shared deeds
- Categorize deeds (Community, Animals, Environment)
- Multi-language support (Turkish and English)
- Responsive design
- Social sharing capabilities

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- i18next
- Zustand
- shadcn/ui

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/gunluk-iyi-isler.git
```

2. Install dependencies:
```bash
cd gunluk-iyi-isler
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Deployment

### Manual Deployment to Netlify

1. Build your site:
```bash
npm run build
```

2. The build output will be in the `dist` directory

3. Deploy to Netlify:
   - Go to [Netlify](https://app.netlify.com)
   - Create a new site from Git
   - Connect to your GitHub repository
   - Configure build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Deploy the site

### Environment Variables

Required environment variables in Netlify:
- `NETLIFY_AUTH_TOKEN`: Your Netlify authentication token
- `NETLIFY_SITE_ID`: Your Netlify site ID

### Continuous Deployment

The project is set up with GitHub Actions for continuous deployment:
1. Push changes to the `main` branch
2. GitHub Actions will automatically:
   - Build the project
   - Run tests
   - Deploy to Netlify

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Project Structure

```
gunluk-iyi-isler/
├── src/
│   ├── components/     # React components
│   ├── hooks/         # Custom React hooks
│   ├── lib/           # Utilities and configurations
│   ├── pages/         # Page components
│   └── App.tsx        # Root component
├── public/            # Static assets
└── dist/             # Build output
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

Your Name