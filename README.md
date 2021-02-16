<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/wilsonfsouza/gorestaurant-react-native">
  <a href="https://github.com/wilsonfsouza/happy-frontend-web/commits/main">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/wilsonfsouza/gorestaurant-react-native">
  </a>

   <img alt="License" src="https://img.shields.io/badge/license-MIT-%23F26C6C">


  <a href="https://www.linkedin.com/in/wilsonfsouza/">
    <img alt="Made by Wilson Franca" src="https://img.shields.io/badge/made%20by-Wilson%20Franca-%230AA186">
  </a>
</p>

<h1 align="center">
    <p align="center">
  <img style="margin-right: 5px; max-width: 400px;" alt="Logo" title="#Logo" src="./docs/assets/logo-github-gorestaurant-vegan.png" width="40%">
</p>
</h1>

<h4 align="center">
  Table of contents
</h4>

<p align="center">
 <a href="#-about-the-project">About</a> •
 <a href="#user-content-️-features">Features</a> •
 <a href="#-layout">Layout</a> •
 <a href="#-how-to-run-the-project">How to run</a> •
 <a href="#-technologies">Technologies</a> •
 <a href="#-author">Author</a> •
 <a href="#user-content--license">License</a>
</p>


## 💻 About the project

GoRestaurant is a mobile application for online ordering meals at your favorite restaurant.

To see the **web client**, click here: [GoRestaurant Web](https://github.com/wilsonfsouza/GoRestaurant-web)

---

## ⚙️ Features

The app was designed to be used by clients to order meals at their favorite restaurant.


- Home screen

- Menu tabs: dishes, orders, and favorites

- Screen listing available dishes with search field and category filters

- Screen showing orders made by the client

- Screen showing user's favorite dishes

- Screen showing meal's details and order overview. The user can modify the order by adding extras or increasing the number of dishes. The total amount for the order is shown before placing order.

---

## 🎨 Layout
<br />

<img style="max-width: 240px;" alt="Demo" title="#Demo" src="./docs/assets/go-restaurant-mobile-vegan-Trim-min.gif" width="30%">

<br />

---

## 🚀 How to run the project

### Requirements

Initial requirements:
[git](https://git-scm.com), [yarn](https://yarnpkg.com/), an emulator to run the app, and a code editor of your choice.


#### Running the mobile application

```bash
# Clone this repository
$ git clone https://github.com/wilsonfsouza/gorestaurant-react-native.git

# Access the folder in your terminal/cmd/cli
$ cd gorestaurant-react-native

# Install all dependencies
$ yarn install

# Make sure the file 'src/services/api.ts' have the IP to your API
# Start json server
$ yarn json-server server.json -p 3333

# Start the app
## Android
$ yarn react-native run-android

## iOS - install dependencies
$ cd ios
$ pod install
$ cd ..
$ yarn ios
```

---

## 🛠 Technologies

The following tools were used in this project:

#### **Mobile**  ([React Native](https://reactnative.dev/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[React Native](https://reactnative.dev/)**
-   **[React Native Vector Icons](https://github.com/oblador/react-native-vector-icons)**
-   **[React Navigation](https://reactnavigation.org/)**
-   **[Styled-components](https://styled-components.com/)**
-   **[Jest](https://jestjs.io/)**
-   **[Axios](https://github.com/axios/axios)**
-   **[ESLint](https://eslint.org/)**
-   **[Prettier](https://prettier.io/)**
-   **[EditorConfig](https://editorconfig.org/)**

> See the file  [package.json](https://github.com/wilsonfsouza/gorestaurant-react-native/blob/master/package.json)

#### [](https://github.com/wilsonfsouza/gorestaurant-react-native#utilities)**Utilities**

-   Editor:  **[Visual Studio Code](https://code.visualstudio.com/)**
-   Markdown:  **[Markdown Emoji](https://gist.github.com/rxaviers/7360908)**
-   Icons:  **[Feather Icons](https://feathericons.com/)**


---

## 💪 How to contribute to this project

1. **Fork** the project.
2. Start a new branch with your changes: `git checkout -b my-new-feature`
3. Save it and create a commit message describing what you have done: `git commit -m "feature: My new feature"`
4. Send your alterations: `git push origin my-feature`


---

## 👨‍💻 Author

<br/>
<h3>
 <img style="border-radius: 50%; margin-right: 20px; width: 80px;" src="https://avatars0.githubusercontent.com/u/21347383?s=460&u=fdb399c92e369762d45d6495cbd2e87eef9e4d65&v=4" width="100px;" alt=""/>
 <br />
 <sub>Wilson Franca</sub></h3>
 <br />

[![Linkedin Badge](https://img.shields.io/badge/-Wilson-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/wilsonfsouza/)](https://www.linkedin.com/in/wilsonfsouza/)
[![Gmail Badge](https://img.shields.io/badge/-wilson.franca.92@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:wilson.franca.92@gmail.com)](mailto:wilson.franca.92@gmail.com)

---

## 📝 License

This project is being developed under [MIT License](./LICENSE).

Made with ❤️ by Wilson Franca 👋

