# PC Builder Website using Next.js

# [Live Link](https://pc-builder-pro.vercel.app)

A clean and straightforward PC Builder website for PC parts and components, built with Next.js. This project allows users to build their own PC by selecting various components and viewing product details.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Protected Routes](#protected-routes)
- [Screenshots](#screenshots)


## Features

- Navbar with a **PC Builder** button to redirect users to the PC Builder page.
- Categories dropdown in the navbar for quick navigation to specific component categories.
- Home page displaying 6 random PC components as Featured Products (Done By SSG).
- Featured Product cards with product information and a link to the product detail page (Done By SSG).
- Featured Categories section on the home page for each component category (Done By SSG).
- Featured Category sections with products and links to their detail pages (Done By SSG).
- Product Detail page with detailed information about each PC component.
- PC Builder page with category sections and the ability to add components to the build. (Done By SSR)
- **Complete Build** button, which is enabled after adding at least 5-6 components to the build.
- Optional bonus features:
  - User authentication using NextAuth and social login (Google/Github).
  - Success alert after completing the build.
  - Hero section and footer on the home page for improved user experience.
  - Responsive design for mobile and desktop devices.

## Tech Stack

The PC Builder website is built using the following technologies:

- Next.js (Frontend)
- Next.js/Api (Backend)
- Context API (State Management - for PC Builder page)
- NextAuth (for optional user authentication)

## Installation

To run the project locally, follow these steps:

1. Clone the repository from GitHub.
2. Install dependencies using `npm install`.
3. Start the development server using `npm run dev`.

```bash
git clone https://github.com/qridwan/pc-builder.git
cd pc-builder
yarn
yarn dev
```

## Protected Routes

- User cant access [pc builder page](https://pc-builder-pro.vercel.app/pcbuild) without authentication

## Screenshots

<p>Banner Page: </p>
<img src="/public/ss/banner.png" width="450px"/>

<p>Feature Page: </p>
<img src="/public/ss/featured.png" width="450px"/>

<p>PC Builder Page: </p>
<img src="/public/ss/pc-builder.png" width="450px"/>

<p>Items Page: </p>
<img src="/public/ss/items.png" width="450px"/>
