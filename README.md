# Shopify Objects Map

## Project Structure

src/
├── components/               # Reusable components
│   ├── common/               # Common components like buttons, modals, etc.
│   └── layout/               # Components that dictate major page structure
│   └── ui/                   # UI-specific components
├── pages/                    # Page components, routing based on file names
│   ├── api/                  # API routes
│   └── [ pageName ]/           # Folder for each page with its components
│       ├── index.js          # Entry for the page
│       └── components/       # Components specific to this page
├── public/                   # Static files like images, fonts, etc.
├── styles/                   # Global styles, variables, theme configs
├── hooks/                    # Reusable React hooks
├── utils/                    # Utility functions
├── services/                 # Services for external API calls
├── context/                  # React contexts for state management
├── lib/                      # Libraries, helpers, and non-react modules
├── models/                   # Typescript models or interfaces if you use TS
├── constants/                # Constants used throughout the app
└── config/                   # App-wide configuration
