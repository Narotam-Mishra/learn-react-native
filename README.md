
# React Native Concepts

## Module 1 - Introduction to React Native

## M1_Lec-1 : Intro to React Native (4:27)

## 1️⃣ Understanding Native Apps

### 🔹 What Are Native Apps?

Native apps are mobile applications built **specifically for one platform**:

* iOS → Built using **Swift / Objective-C**
* Android → Built using **Kotlin / Java**

They use:

* Platform-specific SDKs
* Native UI components
* Platform APIs

### 🔹 Key Characteristics

- High performance
- Direct access to device features (camera, GPS, Bluetooth, etc.)
- Smooth animations
- Native UI look & feel

### 🔹 Why Native Apps Are Powerful

Because they interact directly with the operating system, they:

* Use optimized system APIs
* Run faster
* Provide seamless user experience

---

## 2️⃣ The Rise of React Native

React Native was developed by Meta (Facebook) to solve the problem of **building separate apps for iOS and Android**.

It allows developers to:

* Write apps using **JavaScript**
* Use the **React** library (component-based UI)
* Deploy the same codebase to both iOS and Android

### 🔹 Why It Became Popular

* Huge JavaScript developer community
* Faster development cycle
* Cross-platform compatibility
* Native-like performance

---

## 3️⃣ What Makes React Native Different?

Unlike web-based hybrid frameworks:

❌ It does NOT render HTML inside a WebView
✅ It renders **real native components**

This means:

* `<View>` → Native container
* `<Text>` → Native text element
* `<Button>` → Native button

So performance is close to fully native apps.

---

## 🚀 Advantages of React Native (Detailed Explanation)

---

## 1️⃣ Code Reusability (Biggest Advantage)

### What It Means:

You write one codebase that works on:

* iOS
* Android

Instead of:

```
iOS App → Swift Code
Android App → Kotlin Code
```

You write:

```
Single JavaScript Code → Runs on both
```

### Why It Matters:

* Saves time
* Reduces bugs
* Easier updates
* Faster releases

💡 Around 80–90% of code can be shared.

---

## 2️⃣ Enhanced Developer Productivity

### Why?

If you already know:

* JavaScript
* React (for web)

You can quickly learn React Native.

Developers don’t need:

* Deep iOS knowledge
* Deep Android knowledge

This:

* Speeds up learning
* Makes switching projects easier
* Reduces hiring complexity

---

## 3️⃣ Native Performance

Unlike traditional hybrid apps:

* No WebView rendering
* Uses native UI components
* Direct bridge to native APIs

Result:
✔ Smooth animations
✔ Better responsiveness
✔ Near-native speed

---

## 4️⃣ Strong Third-Party Ecosystem

React Native has a massive ecosystem of:

* UI libraries
* Navigation libraries
* State management tools
* Native integrations

Examples:

* React Navigation
* Redux
* Firebase integration
* Native device modules

This allows:

* Faster prototyping
* Feature-rich apps
* Reduced development effort

---

# ❌ Disadvantages of Earlier Technologies

Before React Native, companies had 3 main choices:

---

## 1️⃣ Fully Native Development

Problem:

### 🔹 Code Duplication

* Separate iOS team
* Separate Android team
* Duplicate business logic

More:

* More bugs
* More complexity

---

## 2️⃣ Higher Time & Cost

Developing two apps meant:

* Hiring Swift developers
* Hiring Kotlin developers
* Maintaining two teams

This increased:

* Salary cost
* Development time
* Maintenance effort

---

## 3️⃣ Limited Skillset Flexibility

Developers were locked into:

* Only iOS
  OR
* Only Android

Switching platforms required:

* Learning new language
* Learning new ecosystem

This slowed career growth.

---

## 4️⃣ Maintenance Overhead

When:

* iOS updated
* Android updated

You had to:

* Update both apps
* Test both apps
* Fix platform-specific bugs

Double effort → double cost.

---

# 📱 Mobile Development Landscape Shift

React Native changed the industry by:

* Bridging Web + Mobile development
* Allowing JavaScript developers to build mobile apps
* Reducing entry barrier into mobile development
* Accelerating startup product launches

Many companies adopted it because:

* Faster MVP development
* Smaller teams required
* Easier scaling

---

## 🎯 Important Concepts Explained in Detail

## 🔹 Cross-Platform Development

Building one app that works on multiple platforms.

Benefits:

* Reduced time
* Lower cost
* Unified business logic

React Native is a **cross-platform framework**.

---

## 🔹 Component-Based Architecture

React Native uses React’s philosophy:

Apps are built using reusable components:

```
<App>
   <Header />
   <Body />
   <Footer />
</App>
```

Advantages:

* Modular structure
* Easy maintenance
* Reusability
* Cleaner code

---

## 🔹 JavaScript Bridge

React Native uses a bridge to communicate between:

* JavaScript code
* Native platform APIs

This enables:

* Calling device features
* Using native modules
* High flexibility

---

## 🔹 Native Modules

If something cannot be done in JavaScript:

You can write:

* Swift (iOS)
* Kotlin (Android)

And connect it to React Native.

This makes it:

* Flexible
* Extendable
* Production-ready

---

## 🏁 Final Conclusion

React Native became popular because it solves major mobile development problems:

- Reduces code duplication
- Lowers development cost
- Improves developer productivity
- Maintains near-native performance
- Has strong ecosystem support

It sits between:

* Fully native development
* Web-based hybrid development

And combines the best of both worlds.

---

# 📌 Quick Revision Notes (Exam / Interview Ready)

* Native apps → Platform-specific apps (Swift/Kotlin)
* React Native → Cross-platform framework using JavaScript
* Biggest advantage → Code reusability
* Performance → Near-native (renders native components)
* Main benefit → Faster + cheaper multi-platform development
* Problem it solved → Duplicate codebases & high cost

---

## M1_Lec-2 : Advantages of React Native (04:59)

## 📱 Unleashing the Power of React Native

React Native is a cross-platform mobile framework that allows developers to build **iOS and Android apps using JavaScript and React**.

It solves a major problem in traditional mobile development:

> Building and maintaining separate apps for iOS and Android.

---

### ✅ Major Advantages of React Native

1. Code Reusability (Single Codebase)
2. Faster Development
3. Hot Reloading
4. Over-the-Air Updates
5. Native-like Performance
6. Strong Ecosystem & Libraries
7. Easy Transition for React Developers

### ❌ Problems in Earlier Technologies

* Separate codebases
* Higher cost
* Code duplication
* Longer development time
* Platform-specific knowledge required

---

## 🚀 Detailed Explanation of Important Concepts

## 1️⃣ Code Reusability & Faster Development

## 🔹 What It Means

With React Native, you write **one JavaScript codebase** that runs on:

* iOS
* Android

Instead of:

* Swift for iOS
* Kotlin for Android

---

## 🔹 Why It Matters

* 80–90% shared code
* Faster releases
* Fewer bugs
* Easier maintenance

---

## 🔹 Example

```javascript
// App.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello Cross Platform!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 20
  }
});
```

👉 This same code works on both iOS and Android.

---

## 2️⃣ Hot Reloading (Real-Time Updates)

## 🔹 What It Is

Hot Reloading allows you to:

* Edit code
* Instantly see changes
* Without restarting the app

---

## 🔹 Why It Is Powerful

* Faster debugging
* Rapid UI iteration
* Better developer experience

---

### Example

Change this:

```javascript
<Text>Hello Cross Platform!</Text>
```

To:

```javascript
<Text>Hello React Native!</Text>
```

The app updates instantly — no rebuild needed.

---

## 3️⃣ Over-The-Air (OTA) Updates

## 🔹 What It Means

You can push JavaScript updates directly to users
WITHOUT:

* App Store re-approval
* Play Store update process

This is possible because:
React Native business logic is written in JavaScript.

---

## 🔹 Why It’s Important

* Faster bug fixes
* Instant feature updates
* Better user experience

---

## 4️⃣ Native-Like Performance

## 🔹 How It Works

React Native:

* Does NOT use WebView
* Renders real native components
* Uses device GPU

Example:

```javascript
import { Button } from 'react-native';

<Button title="Click Me" />
```

This renders a **real native button**, not HTML.

---

## 🔹 Why This Matters

* Smooth animations
* High performance
* Responsive UI
* Near-native experience

---

## 5️⃣ Vibrant Ecosystem & Third-Party Libraries

React Native has thousands of libraries for:

* Navigation
* State management
* Camera access
* Animations
* Payments
* Authentication

---

## 🔹 Example: Navigation

```javascript
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function HomeScreen() {
  return <Text>Home</Text>;
}

function DetailsScreen() {
  return <Text>Details</Text>;
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

👉 Complex navigation built easily using third-party libraries.

---

## 6️⃣ Comparisons with Earlier Technologies

## ❌ Before React Native

Developers had to:

* Write Swift for iOS
* Write Kotlin for Android
* Maintain 2 separate teams

Problems:

| Problem              | Why It Was Difficult     |
| -------------------- | ------------------------ |
| Code Duplication     | Same logic written twice |
| Higher Cost          | Two development teams    |
| Slow Updates         | Update two apps          |
| Maintenance Overhead | Platform-specific bugs   |

---

## ✅ React Native Solves This

| Feature       | React Native Solution |
| ------------- | --------------------- |
| Code Reuse    | Single Codebase       |
| Lower Cost    | One development team  |
| Faster Launch | Simultaneous release  |
| Easy Updates  | OTA updates           |

---

## 7️⃣ Popular Apps Built with React Native

Many big companies use React Native.

### 📌 Examples

* Facebook
* Instagram
* Walmart

These apps demonstrate:

* Scalability
* Performance
* Enterprise readiness

---

## 8️⃣ Why React Developers Have an Advantage

If you already know:

* React
* Components
* Props
* State
* Hooks

Then React Native feels familiar.

---

## 🔹 Example: React vs React Native

### React (Web)

```javascript
function App() {
  return <div>Hello Web</div>;
}
```

### React Native

```javascript
import { View, Text } from 'react-native';

function App() {
  return (
    <View>
      <Text>Hello Mobile</Text>
    </View>
  );
}
```

Concepts are same:

* Component-based architecture
* State management
* Hooks
* Reusable components

Only difference:

* UI components change (`div` → `View`)

---

## 9️⃣ Component-Based Architecture

React Native uses reusable components.

Example:

```javascript
function Greeting({ name }) {
  return <Text>Hello {name}</Text>;
}

export default function App() {
  return (
    <View>
      <Greeting name="Abrahm" />
      <Greeting name="John" />
    </View>
  );
}
```

Benefits:

* Clean structure
* Easy maintenance
* Reusability
* Scalable architecture

---

## 🔟 GPU Acceleration & Smooth Animations

React Native uses:

* Native APIs
* GPU rendering
* Optimized animations

Example:

```javascript
import { Animated } from 'react-native';
```

This enables:

* Smooth transitions
* Gesture-based animations
* High performance UI

---

## 🏁 Final Conclusion

React Native is powerful because it:

✔ Eliminates code duplication
✔ Reduces development time
✔ Lowers cost
✔ Provides native-like performance
✔ Supports hot reloading
✔ Allows OTA updates
✔ Has strong ecosystem
✔ Is easy for React developers

---

## 🎯 Final Interview-Ready Notes

* React Native = Cross-platform mobile framework
* Language used = JavaScript
* Biggest advantage = Code reusability
* Performance = Near-native (not WebView)
* Ideal for = Startups, MVPs, cross-platform apps
* Learning curve = Easy if you know React

---

## M1_Lec-3 : Creating your first React Native project - Hello World Example (05:43)

## 📱 Creating Your First React Native Project – “Hello World”

This lesson walks you through creating your first mobile app using **React Native** with a simple **Hello World example**.

We’ll cover:

* ✅ Prerequisites
* ✅ Project creation
* ✅ Writing Hello World code
* ✅ Running the project
* ✅ Understanding the code in detail

---

## 🔧 Prerequisites

Before starting, make sure you have:

### 1️⃣ Node.js & npm

Node.js allows you to run JavaScript outside the browser.
npm is the package manager.

Check installation:

```bash
node -v
npm -v
```

---

### 2️⃣ Expo CLI

Expo CLI is a tool that simplifies React Native development.

Install it globally:

```bash
npm install -g expo-cli
```

Expo allows you to:

* Avoid native configuration
* Run apps easily
* Test on real devices quickly

---

# 🚀 Step 1: Creating a New React Native Project

### 📌 Open Terminal

Navigate to your desired folder:

```bash
cd Desktop
```

### 📌 Create Project

```bash
npx create-expo-app HelloWorldApp
```

OR (older method):

```bash
expo init HelloWorldApp
```

Select a blank template.

### 📌 Move into Project Directory

```bash
cd HelloWorldApp
```

Project structure will look like:

```
HelloWorldApp/
 ├── App.js
 ├── package.json
 ├── node_modules/
```

---

# ✍️ Step 2: Writing the “Hello World” Code

Open `App.js` and replace the code with:

```javascript
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
```

---

## 🧠 Understanding the Code (Detailed Explanation)

---

## 1️⃣ Importing Required Modules

```javascript
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
```

### 🔹 React

Required to create components.

### 🔹 View

* Equivalent to `<div>` in web.
* Used as a container.

### 🔹 Text

* Used to display text.
* In React Native, all text must be inside `<Text>`.

### 🔹 StyleSheet

* Used for styling.
* Similar to CSS but written in JavaScript.

---

## 2️⃣ App Component

```javascript
export default function App() {
```

* Functional component
* Entry point of your application
* Every React Native app starts from `App.js`

---

## 3️⃣ JSX Structure

```javascript
<View>
  <Text>Hello World!</Text>
</View>
```

This means:

* View → Container
* Text → Display message

---

## 4️⃣ Styling in React Native

```javascript
const styles = StyleSheet.create({
```

React Native uses **JavaScript objects for styling**, not CSS files.

Example:

```javascript
container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
}
```

### 🔹 flex: 1

Makes the container take full screen.

### 🔹 justifyContent: 'center'

Centers content vertically.

### 🔹 alignItems: 'center'

Centers content horizontally.

---

## 🖼 What the Output Looks Like

![Image](https://miro.medium.com/1%2AaWNOSHMVXoxMwpKqOBiC8g%402x.jpeg)

![Image](https://i3.ytimg.com/vi/m1-bc53EGh8/maxresdefault.jpg)

![Image](https://i.sstatic.net/hugvU.png)

![Image](https://i.sstatic.net/wbWvm.png)

You will see:

* White background
* “Hello World!” text
* Text centered on screen
* Bold and larger font

---

## ▶️ Step 3: Running the Project

Make sure:

* Android emulator is running
  OR
* iOS simulator is running
  OR
* Physical device connected

---

### Start Development Server

```bash
npx expo start
```

This opens:

* Expo Dev Tools in browser
* QR code for mobile testing

---

### Run on Device

Press:

* `a` → Android
* `i` → iOS
* Scan QR with Expo Go app

---

## 📱 How React Native Renders This

React Native does NOT use HTML.

Instead:

* `<View>` → Native container
* `<Text>` → Native text element

This ensures:

* Native performance
* Smooth rendering

---

## 🔥 Important Concepts Learned

| Concept    | Explanation                       |
| ---------- | --------------------------------- |
| Component  | Reusable UI building block        |
| JSX        | HTML-like syntax in JavaScript    |
| StyleSheet | JS-based styling system           |
| Flexbox    | Layout system for positioning     |
| Expo       | Toolchain to simplify development |

---

## 💡 Extra Example – Adding Another Text

```javascript
<Text style={styles.text}>
  Welcome to React Native
</Text>
```

---

## 💡 Example – Adding Background Color

```javascript
container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#f0f0f0',
}
```

---

## M1_Lec-4 : Understanding the app structure (08:58)

### 📁 hello-world Project Structure

**hello-world** is a minimal, barebone React Native starter project using Expo.

#### Key Files:

| File | Purpose |
|------|---------|
| **index.js** | Entry point that registers the root component with Expo |
| **App.js** | Root component (main UI code) |
| **app.json** | Expo configuration file |
| **package.json** | Dependencies & npm scripts |
| **assets/** | App icons and splash screen images |

#### Architecture Flow:

```
index.js (entry point)
  ↓
registerRootComponent(App)
  ↓
App.js (root component)
  ↓
<View> + <Text> UI
```

#### What Makes It Simple:

1. **No file-based routing** — Just a single `App.js` component (unlike hello-world-app which uses Expo Router)
2. **Minimal dependencies** — Only:
   - `expo` - development framework
   - `expo-status-bar` - status bar component
   - `react` & `react-native` - core libraries
3. **Minimal UI** — Just displays "Hello React Native" centered on screen
4. **Light theme** — Set in app.json with `"userInterfaceStyle": "light"`

This is a **beginner-friendly starter** perfect for learning React Native basics before moving to more complex projects like hello-world-app (which has navigation, multiple screens, and component structure).

---

## M1_Lec-7 : Introduction to Expo (06:12)

## 📱 Introduction to Expo – Simplifying React Native Development

This lesson introduces **Expo**, a toolset that makes **React Native development easier**, especially for beginners. We’ll cover:

* What Expo is
* How to get started
* Key features of Expo
* Step-by-step usage with code examples

---

## 📝 Quick Summary (Revision Notes)

* Expo is an **open-source platform for React Native apps**.
* Simplifies setup, development, testing, and deployment.
* Provides **Expo CLI**, **Expo APIs**, and **Expo Client app**.
* Supports **Over-the-Air (OTA) updates**.
* Lets you access **native device features** without writing platform-specific code.

---

## 🔹 What is Expo?

Expo is a **comprehensive framework** built on top of React Native that provides:

1. A **CLI tool** to create and manage projects.
2. A **development server** for live preview.
3. Pre-built **APIs** to access device features.
4. Tools to **deploy apps** to devices quickly.

**Goal:** Let developers focus on **app functionality** rather than complex native configurations.

---

## 🔹 Getting Started with Expo

---

### Step 1: Install Prerequisites

* **Node.js & npm** (for JavaScript and package management)

```bash id="node-npm"
node -v
npm -v
```

* **Expo CLI**

```bash id="expo-cli"
npm install -g expo-cli
```

---

### Step 2: Create a New Expo Project

```bash id="expo-new-project"
npx create-expo-app MyFirstApp
```

* Choose a **template** (Blank or with pre-configured features).
* Navigate to project:

```bash id="expo-cd"
cd MyFirstApp
```

---

### Step 3: Start the Development Server

```bash id="expo-start"
npx expo start
```

* Opens **Expo DevTools** in the browser.
* Displays a **QR code** for testing.

---

### Step 4: Testing on Device

* Install **Expo Go** app on Android/iOS.
* Scan the QR code → app loads instantly on device.

No emulator setup is required for initial testing.

---

## 🔹 Key Features of Expo

---

## 1️⃣ Easy Setup & Configuration

* Expo CLI handles:

  * Installing dependencies
  * Setting up environment
  * Project scaffolding

**Benefit:** Beginners can start quickly without complex configuration.

---

## 2️⃣ Built-in Development Server

* Automatically reloads app on **code changes**.
* Works for **iOS and Android** simultaneously.

Example:

```bash id="expo-server"
npx expo start
```

* Real-time updates without manual rebuilding.

---

## 3️⃣ Over-the-Air (OTA) Updates

* Push **app updates** directly to devices.
* Users **don’t need app store updates**.
* Ideal for:

  * Bug fixes
  * Feature rollouts
  * Rapid iteration

---

## 4️⃣ Access to Native APIs

Expo provides **JavaScript APIs** for device features:

| Feature            | Expo API             |
| ------------------ | -------------------- |
| Camera             | `expo-camera`        |
| Location           | `expo-location`      |
| Push Notifications | `expo-notifications` |
| Accelerometer      | `expo-sensors`       |

### Example – Using Camera

```javascript id="expo-camera-example"
import React, { useState, useEffect } from 'react';
import { View, Button } from 'react-native';
import { Camera } from 'expo-camera';

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) return <View />;
  if (hasPermission === false) return <Text>No access to camera</Text>;

  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} />
    </View>
  );
}
```

---

## 5️⃣ Expo Client App

* App for **testing your projects** on devices.
* Scan QR code → app loads instantly.
* Eliminates:

  * Emulator setup
  * Complex device configuration

---

## 🔹 Benefits of Expo for Beginners

1. **Simplified Development:** No native setup required.
2. **Faster Iteration:** Hot reloading + OTA updates.
3. **Device Features Access:** Camera, location, sensors, etc.
4. **Cross-Platform:** Works for Android and iOS out-of-the-box.
5. **Community & Documentation:** Large support network.

---

## 🔹 Full Example – Hello World with Expo

```javascript id="expo-hello-world"
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello Expo!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
```

* Save and **scan QR code in Expo Go** → instantly runs on device.

---

## 🔹 Summary of Important Concepts

| Concept         | Explanation                                          |
| --------------- | ---------------------------------------------------- |
| Expo            | Toolset that simplifies React Native app development |
| Expo CLI        | Command-line interface to create/manage projects     |
| Expo DevTools   | Web-based interface for managing project             |
| OTA Updates     | Update apps without app store submissions            |
| Expo APIs       | Pre-built modules to access device features          |
| Expo Client App | App to preview/testing on real devices               |
| Hot Reloading   | Real-time code changes without rebuild               |

---

## 🏁 Conclusion

Expo is a beginner-friendly tool that:

* Simplifies setup
* Reduces native configuration complexity
* Provides instant testing and OTA updates
* Gives access to native device features
* Works cross-platform

With Expo, you can **focus on building your app functionality** rather than worrying about platform-specific details.

---

## M1_Lec-7 : Running on an iOS simulator (04:38)

### 📱 Running React Native App on iOS Simulator

This guide covers how to run your React Native app on an iOS simulator for testing and development.

---

## 🔧 Prerequisites

Before running on iOS simulator, ensure you have:

### 1️⃣ macOS

* iOS simulator only works on **macOS** (not Windows or Linux).
* If you're on Windows/Linux, use Android emulator or physical device.

### 2️⃣ Xcode Installed

* Install **Xcode** from the Mac App Store.
* Includes iOS SDK and simulators.

Check installation:

```bash
xcode-select --install
```

### 3️⃣ Node.js & npm

```bash
node -v
npm -v
```

### 4️⃣ Expo CLI or React Native CLI

Install globally:

```bash
npm install -g expo-cli
```

OR

```bash
npm install -g react-native-cli
```

---

## 🚀 Step 1: Start the Development Server

Navigate to your React Native project:

```bash
cd your-react-native-project
```

Start Expo:

```bash
npx expo start
```

Output will show:

```
Expo DevTools available at:
http://localhost:19000
```

---

## 🚀 Step 2: Launch iOS Simulator

### Option A: From Expo DevTools (Easiest)

After running `npx expo start`, press:

```
i
```

This will automatically:

* Open iOS simulator
* Load your app
* Refresh in real-time

---

### Option B: Launch Xcode First

If you prefer launching manually:

1. Open **Xcode** from Applications
2. Go to: `Xcode` → `Open Developer Tool` → `Simulator`
3. Select device (iPhone 14, 15, etc.)
4. Press play icon to start simulator

Then run:

```bash
npx expo start
```

Press `i` to load app.

---

## 🚀 Step 3: Verify App is Running

You should see:

* iOS simulator window opens
* Your React Native app displays
* Live reloading works (changes reflect instantly)

---

## 📋 Full Step-by-Step Example

### Full Setup Example:

```bash
# 1. Create a new project
npx create-expo-app MyApp

# 2. Navigate to project
cd MyApp

# 3. Start development server
npx expo start

# 4. Press 'i' to run on iOS simulator
```

Done! Your app is now running on iOS simulator.

---

## 🔄 Hot Reloading on iOS Simulator

React Native supports **hot reloading** on iOS simulator.

### How to Test:

1. Edit your `App.js`

Change:

```javascript
<Text>Hello World</Text>
```

To:

```javascript
<Text>Hello iOS Simulator</Text>
```

2. **Save the file** (Cmd + S)

3. App automatically reloads with the new text

No manual restart needed!

---

## 🎮 Common iOS Simulator Gestures

| Action | How to Do It |
|--------|-------------|
| **Home Button** | Cmd + H |
| **Lock Screen** | Cmd + L |
| **Rotate Device** | Cmd + Right Arrow |
| **Shake Device** | Cmd + Z (Developer Menu) |
| **Take Screenshot** | Cmd + S |

---

## 🛠 Troubleshooting Common Issues

### ❌ Issue: "iOS Simulator not found"

**Solution:**

1. Install Xcode Command Line Tools:

```bash
xcode-select --install
```

2. Accept Xcode license:

```bash
sudo xcode-select --switch /Applications/Xcode.app/Contents/Developer
sudo xcodebuild -license accept
```

---

### ❌ Issue: "Port 19000 already in use"

**Solution:**

Kill the existing process:

```bash
lsof -i :19000
kill -9 <PID>
```

Or use a different port:

```bash
npx expo start --port 19001
```

---

### ❌ Issue: "App not loading on simulator"

**Solution:**

1. Restart simulator:

```bash
xcrun simctl erase all
```

2. Clear Expo cache:

```bash
npx expo start --clear
```

---

### ❌ Issue: "Xcode not installed"

**Solution:**

Install Xcode from Mac App Store:

```bash
https://apps.apple.com/app/xcode
```

Then install Command Line Tools:

```bash
xcode-select --install
```

---

## 🎯 Quick Reference Commands

| Command | Purpose |
|---------|---------|
| `npx expo start` | Start development server |
| `npx expo start --ios` | Start and directly open iOS simulator |
| `npx expo start --clear` | Clear cache and start |
| `npx expo start --port 19001` | Use custom port |
| `Cmd + Z` | Open Expo Developer Menu |
| `Cmd + R` | Reload app |

---

## 📝 Running Apps Built with React Native CLI

If you're using (instead of Expo):

```bash
npx react-native run-ios
```

This will:

* Build the app
* Start Metro bundler
* Launch iOS simulator
* Load your app

---

## ✅ Best Practices

1. **Keep simulator running** while developing.
2. **Use hot reloading** for faster iteration.
3. **Test on multiple devices** (iPhone 14, 15, etc.).
4. **Check iOS simulator console** for errors (Cmd + /).
5. **Clear cache** if you encounter strange bugs.

---

## 🏁 Conclusion

Running React Native apps on iOS simulator is straightforward with Expo:

1. Install Xcode
2. Run `npx expo start`
3. Press `i`
4. App loads instantly

This allows you to:

* Test on iOS
* Use hot reloading
* Develop rapidly
* Iterate quickly

---

## M3_Lec-1 : View (03:46)

## 📦 React Native – `View` Component Notes

### 🔹 What is `View`?

`View` is the **most fundamental component** in React Native.

It is similar to:

* `<div>` in web development
* A **container** that supports layout, styling, touch handling, and accessibility

It is used to:

* Wrap other components
* Create layouts
* Apply styling
* Handle gestures

```js
import { View } from 'react-native';
```

---

## 🧱 Basic Example

```jsx
import React from 'react';
import { View, Text } from 'react-native';

const App = () => {
  return (
    <View style={{ padding: 20 }}>
      <Text>Hello React Native</Text>
    </View>
  );
};

export default App;
```

---

## 🎨 Styling in `View`

React Native uses **Flexbox by default** (but slightly different from CSS on web).

### 🔹 Common Style Properties

| Property          | Description                            |
| ----------------- | -------------------------------------- |
| `flex`            | Defines how much space component takes |
| `flexDirection`   | Row or column layout                   |
| `justifyContent`  | Align items vertically (main axis)     |
| `alignItems`      | Align items horizontally (cross axis)  |
| `padding`         | Space inside the component             |
| `margin`          | Space outside the component            |
| `backgroundColor` | Background color                       |
| `borderWidth`     | Border thickness                       |
| `borderRadius`    | Rounded corners                        |

---

### 🧭 Flexbox Example

```jsx
<View style={{
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center'
}}>
  <View style={{ width: 50, height: 50, backgroundColor: 'red' }} />
  <View style={{ width: 50, height: 50, backgroundColor: 'blue' }} />
</View>
```

---

## 📐 Default Flex Behavior

In React Native:

| Web CSS                       | React Native                    |
| ----------------------------- | ------------------------------- |
| Default `flex-direction: row` | Default `flexDirection: column` |

So components stack **vertically by default**.

---

## 🎯 Layout Concepts

### 1️⃣ `flex: 1`

Tells the View to take available space.

```jsx
<View style={{ flex: 1 }} />
```

### 2️⃣ Nested Views

Views can be nested for complex UI:

```jsx
<View>
  <View>
    <Text>Nested</Text>
  </View>
</View>
```

---

## 🖐 Touch Handling

`View` can respond to touch events:

```jsx
<View
  onTouchStart={() => console.log("Touched")}
>
</View>
```

But usually we use:

* `TouchableOpacity`
* `Pressable`
* `TouchableWithoutFeedback`

For better interaction handling.

---

## ♿ Accessibility

Important props:

```jsx
<View accessible={true} accessibilityLabel="Profile section">
```

Common props:

* `accessible`
* `accessibilityLabel`
* `accessibilityHint`
* `accessibilityRole`

---

## ⚡ Performance Notes

* Avoid too many deeply nested Views
* Use `StyleSheet.create()` for better performance
* Avoid inline styles in large apps

Example:

```js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  }
});
```

---

## 🧠 Important Props Summary

| Prop            | Purpose                |
| --------------- | ---------------------- |
| `style`         | Apply styling          |
| `pointerEvents` | Control touch behavior |
| `testID`        | Used for testing       |
| `onLayout`      | Get layout dimensions  |
| `accessible`    | Accessibility support  |

---

## 🔥 `pointerEvents` Values

| Value      | Meaning                              |
| ---------- | ------------------------------------ |
| `auto`     | Default behavior                     |
| `none`     | View does not receive touches        |
| `box-none` | View ignores touch, children respond |
| `box-only` | Only View responds, not children     |

---

## 📊 Difference: View vs Text

| View             | Text                |
| ---------------- | ------------------- |
| Container        | Displays text       |
| Can contain View | Cannot contain View |
| Layout component | Inline content      |

---

## 🧩 When to Use `View`?

Use `View` when:

* Creating layout structure
* Grouping components
* Applying styling containers
* Managing screen sections

---

## 💡 Pro Tips (For You 👨‍💻)

Since you're working with **React & React Native**, remember:

* Think of `View` as your layout building block.
* 80% of mobile UI layout = combination of nested Views.
* Master Flexbox deeply — it’s the core of RN layout.

---

## M3_Lec-2 : Button (03:13)

## 🔘 React Native – `Button` Component (Short Notes)

### 🔹 What is `Button`?

`Button` is a **basic built-in component** used to trigger actions when pressed.

It is simple and minimal — mostly used for quick functionality.

```js
import { Button } from 'react-native';
```

---

## 🧱 Basic Example

```jsx
import React from 'react';
import { View, Button, Alert } from 'react-native';

const App = () => {
  return (
    <View style={{ marginTop: 50 }}>
      <Button
        title="Click Me"
        onPress={() => Alert.alert("Button Pressed")}
      />
    </View>
  );
};

export default App;
```

---

## 🔑 Important Props

| Prop       | Description                                       |
| ---------- | ------------------------------------------------- |
| `title`    | Text displayed on button                          |
| `onPress`  | Function called when pressed                      |
| `color`    | Button color (text on iOS, background on Android) |
| `disabled` | Disable the button                                |

---

### Example with Props

```jsx
<Button
  title="Submit"
  color="green"
  disabled={false}
  onPress={() => console.log("Submitted")}
/>
```

---

## ⚠️ Limitations

* Very limited styling options
* Cannot customize height, width, borderRadius
* Looks different on iOS and Android

👉 For custom designs, use:

* `Pressable`
* `TouchableOpacity`
* Custom button using `View` + `Text`

---

## 📌 When to Use?

✔ Simple actions
✔ Quick testing
✔ Basic apps

---

## M3_Lec-3 : Text (05:24)

## 📝 React Native – `Text` Component (Short Notes)

### 🔹 What is `Text`?

`Text` is used to **display text content** in React Native apps.

Unlike web:

* You **must wrap all text inside `<Text>`**
* You cannot directly write strings inside `<View>`

```js
import { Text } from 'react-native';
```

---

## 🧱 Basic Example

```jsx
import React from 'react';
import { View, Text } from 'react-native';

const App = () => {
  return (
    <View style={{ marginTop: 50 }}>
      <Text>Hello React Native 👋</Text>
    </View>
  );
};

export default App;
```

---

## 🔑 Important Props

| Prop            | Description                 |
| --------------- | --------------------------- |
| `style`         | Apply text styling          |
| `numberOfLines` | Limit number of lines       |
| `ellipsizeMode` | Add `...` if text overflows |
| `onPress`       | Handle press event          |
| `selectable`    | Allow text selection        |

---

## 🎨 Common Styling Properties

```jsx
<Text
  style={{
    fontSize: 18,
    color: 'blue',
    fontWeight: 'bold',
    textAlign: 'center'
  }}
>
  Styled Text
</Text>
```

Common styles:

* `fontSize`
* `color`
* `fontWeight`
* `textAlign`
* `fontStyle`
* `lineHeight`

---

## 🧩 Nested Text

You can nest `<Text>` components:

```jsx
<Text>
  Hello <Text style={{ fontWeight: 'bold' }}>World</Text>
</Text>
```

---

## ⚠️ Important Rules

* ❌ Text cannot exist outside `<Text>`
* ❌ `<View>` cannot be placed inside `<Text>`
* ✅ `<Text>` can be nested inside `<Text>`

---

## 📌 When to Use?

✔ Display static text
✔ Dynamic content
✔ Clickable text
✔ Styled headings

---

## M3_Lec-5 : Stylesheet (4:17)

## 🎨 React Native – `StyleSheet` (Short Notes)

---

### 🔹 What is `StyleSheet`?

`StyleSheet` is a built-in API in React Native used to **create optimized and reusable styles**.

It helps:

* Improve performance
* Keep code clean
* Reuse styles easily

```js
import { StyleSheet } from 'react-native';
```

---

## 🧱 Basic Example

```jsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello React Native 👋</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
  },
});

export default App;
```

---

## 🔑 Why Use `StyleSheet.create()`?

✔ Better performance (internally optimized)
✔ Code readability
✔ Avoid inline style clutter
✔ Easier maintenance

---

## 📌 How It Works

```js
const styles = StyleSheet.create({
  styleName: {
    property: value
  }
});
```

Use it like:

```jsx
<View style={styles.styleName} />
```

---

## 🔥 Combining Styles

```jsx
<Text style={[styles.title, { color: 'red' }]}>
  Combined Style
</Text>
```

* Array allows multiple styles
* Later styles override earlier ones

---

## ⚠️ Important Notes

* Works similar to CSS but uses **camelCase**
* No CSS units (`px`, `em` not required)
* Uses Flexbox for layout by default

---

## 📌 When to Use?

✔ Medium & large apps
✔ Reusable components
✔ Clean production code

---

## M3_Lec-5 : ScrollView (4:31)

