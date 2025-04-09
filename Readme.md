# 📌 React Native Card Saver App

A simple **React Native** app that allows users to create, edit, and delete cards, storing them temporarily in **AsyncStorage**.

## 🚀 Features

✅ **Create a Card** – Add text and an image to your card.
✅ **Edit Card** – Modify the saved card details.
✅ **Delete Card** – Remove a card permanently from storage.
✅ **Local Storage** – Uses `AsyncStorage` for temporary data persistence.
✅ **Beautiful UI** – Modern design with interactive buttons.



## 🛠 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/card-saver-app.git
   cd card-saver-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

3. **Run the app:**
   - For **Android**:
     ```bash
     npx react-native run-android
     ```
   - For **iOS**:
     ```bash
     npx pod-install
     npx react-native run-ios
     ```

## 📦 Dependencies

Make sure you have the following installed:
- **React Native**
- `react-native-async-storage/async-storage`
- `react-navigation/native`
- `@react-navigation/stack`

To install them:
```bash
npm install @react-navigation/native @react-navigation/stack
npm install @react-native-async-storage/async-storage
```

## 📜 Usage

1. **Create a new card** by entering text and selecting an image.
2. **Save the card** – it will be stored locally.
3. **Edit the card** – modify text or change the image.
4. **Delete the card** – removes it from local storage.

## 👨‍💻 Folder Structure
```
📂 card-saver-app
 ├── 📂 assets            # Images and icons
 ├── 📂 screens           # App screens (HomeScreen, EditorScreen)
 ├── 📂 components        # Reusable components (e.g., CardItem)
 ├── App.js              # Main app entry point
 ├── package.json        # Project dependencies
 ├── README.md           # Documentation
```

## 📞 Support
If you face any issues, feel free to open an issue or contribute! 😊

## 📷 Screenshots
![Birthday](https://github.com/user-attachments/assets/4ed1e24a-a085-481b-afa6-71e07eb9824e)
Happy coding! 🚀


