# Thmanyah Podcast Explorer

A modern podcast discovery application built with Next.js 15.5, React 19, and TypeScript. This application allows users to search for podcasts and episodes, view their details, and switch between different layout modes.

## Technical Overview

### Architecture & Technologies

- **Framework**: [Next.js 15.5](https://nextjs.org) with App Router and React 19
- **Language**: TypeScript
- **Styling**: TailwindCSS 4.x
- **Build Tool**: Turbopack
- **Icons**: Iconify React
- **State Management**: React Context API & Cookies for layout preferences
- **Development Approach**: Server Components with Client Components where necessary

### Core Features

- **Podcast Search**: Search for podcasts using the iTunes API
- **Episode Discovery**: Find episodes related to search terms
- **Responsive Layouts**: 
  - Grid view (card-based layout)
  - Scroll view (horizontal scrolling)
  - List view (vertical list with detailed information)
  - Compact view (condensed information display)
- **Layout Preference Persistence**: User layout choices are saved in cookies
- **Component-Based Architecture**: Well-organized, reusable components
- **Server-Side Data Fetching**: Optimized with Next.js data fetching and caching
- **Error Handling**: Graceful error states and loading states

### Project Structure

The project follows a modular structure:

- `app/` - Next.js App Router structure
  - `components/` - Reusable React components
    - `app/` - Application layout components (Header, Footer, Sidebar)
    - `episodes/` - Episode-related components
    - `podcasts/` - Podcast-related components
    - `shared/` - Common UI components
  - `services/` - API service functions
  - `types/` - TypeScript type definitions
  - `utils/` - Utility functions (date formatting, duration formatting, etc.)
  - `assets/` - Static assets and resources

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables

Create a `.env.local` file with the following:

```
NEXT_PUBLIC_baseApiUrl=https://itunes.apple.com
```

## Deployment

```bash
# Build the application
npm run build

# Start the production server
npm run start
```

## Areas for Improvement

### User Interface and Experience
- **Scrollable Container Behavior**: Enhance the scrolling experience with smoother animations, improved scroll indicators, and better handling of variable content heights.
- **Distinct Color Hues**: Implement a color coding system to differentiate podcast types and episode categories, providing visual cues for content classification.
- **Sidebar Design Enhancement**: Refine the sidebar with improved navigation hierarchy, better visual separation between sections, and a collapsible design for mobile views.

### Functionality
- **Media Player Integration**: Develop an integrated media player component for in-app podcast playback with features like:
  - Audio playback controls (play, pause, skip)
  - Playback speed adjustment
  - Volume control
  - Progress tracking and seeking
  - Background playback support
  - Now playing information display

### Technical Improvements
- Add unit and integration tests for key components
- Optimize image loading with next/image
- Implement analytics for user behavior tracking
