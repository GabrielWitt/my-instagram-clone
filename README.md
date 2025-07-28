# 📸 My Instagram Clone - React Native

This project is a **mini Instagram-style app** built with **React Native**, created as a technical challenge to demonstrate mobile development skills, clean UI/UX design, and API consumption.

---

## 🧪 Challenge Description

**Goal:** Create an Instagram-like application using:

- ✅ React Native CLI or Expo  
- ✅ Axios  
- ✅ MomentJS  

**Data Source:**  
All post data is retrieved from the public API:  
`https://662029f13bf790e070af2cd8.mockapi.io/api/v1/posts`

**Post Structure:**

```ts
{
  createdAt: string;
  name: string;
  avatar: string;
  description: string;
  likes: number;
  image: string;
  comments: number;
  liked: boolean;
  saved: boolean;
  location: string;
  id: string;
}
```

**UI Guidelines:**  
- Use `avatar` and `name` for the header  
- Use `image` for the content  
- Use `liked`, `likes`, `comments`, and `saved` for the interaction bar  
- Use `name`, `description`, and `createdAt` for the footer  

> Provided UI Reference:  
![UI Reference](https://prod-files-secure.s3.us-west-2.amazonaws.com/ca8df75b-58b1-470b-9c42-e9cf8f81b556/6c2bef56-bd77-4555-bc4e-a97046d389d2/Untitled.png)

---

## 🚀 Implemented Features

- 📷 Feed from mock API using Axios  
- ❤️ Simulated likes and comments  
- 💾 Save post state  
- 🎛 Swipeable options modal  
- 🔍 Fullscreen image modal with **zoom** and swipe-to-close  
- 👤 Dynamic avatars, names, and descriptions  
- 🧭 Bottom tab navigation  
- 📱 Mobile-first responsive design with max-width constraint on large screens (420px)  

---

## 📸 Screenshots

### 🏠 Home Screen  
![Home Screen](./assets/screenshots/HomeScreen.png)

### 🎛 Options Modal  
![Options Modal](./assets/screenshots/OptionModal.png)

### 🔍 Fullscreen Detail View with Zoom  
![Zoom Detail](./assets/screenshots/ZoomDetail.png)

---

## 🧰 Tech Stack

- React Native + TypeScript  
- [Expo](https://expo.dev/)  
- Zustand (global state management)  
- Axios (API requests)  
- MomentJS (date formatting)  
- React Native Vector Icons (icons)  
- React Native Modal (custom modals)  
- React Native Image Zoom Viewer (fullscreen zoom)  
- Faker.js (mocked fallback data)  

---

## ▶️ Getting Started

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npx expo start
```

To run in specific environments:

```bash
npm run ios     # iOS simulator
npm run android # Android emulator
npm run web     # Web preview
```

If using `yarn`, replace `npm` with `yarn`.

---

## 🎯 Objective

This project was built to demonstrate:

- Modern component-based architecture  
- Clean and reusable UI patterns  
- Responsive mobile-first design  
- Real API data consumption  
- Extras like modals, zoomable images, and user interactions  

---

## 👨‍💻 Author

**Gabriel Witt**  
📍 Ecuador  
GitHub: [@GabrielWitt](https://github.com/GabrielWitt)

---

Thanks for checking out this project! 🚀
