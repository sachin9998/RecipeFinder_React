# Recipe Finder React App

## Overview
Recipe Finder is a user-friendly web application that allows users to search for recipes using an API, explore details of various dishes, and manage their favorite recipes. Users can mark recipes as favorites, and these are saved locally, ensuring the favorites persist even after the user revisits the site.

## Features
- **Search Recipes**: Search for recipes using the [TheMealDB API](https://www.themealdb.com/api.php).
- **View Recipe Details**: Get detailed information about any selected recipe.
- **Favorite Recipes**: Mark recipes as favorites with a dedicated button on each recipe card.
- **Favorites Page**: Access all favorite recipes on a separate page.
- **Local Storage Support**: Favorites are stored in `localStorage`, allowing persistence across sessions.

## Live Link
- https://recipe-finder-react-iota.vercel.app/

## Screenshots
<img width="1438" alt="Screenshot 2024-12-16 at 10 16 58 AM" src="https://github.com/user-attachments/assets/87950763-ee7f-4dcd-b3f5-4d2009208f2a" />

</hr>

<img width="1429" alt="Screenshot 2024-12-16 at 10 17 48 AM" src="https://github.com/user-attachments/assets/35e60a3d-33e0-4629-9965-af5dce02f0b3" />

</hr>

<img width="1411" alt="Screenshot 2024-12-16 at 10 18 30 AM" src="https://github.com/user-attachments/assets/68797afe-791f-4239-8f48-8aae4ecf0a01" />


---

## Tech Stack
This project is built using the following technologies:

### Frontend
- **HTML**: Structure of the application.
- **CSS**: Styling for the app.
- **JavaScript**: Application logic and dynamic behavior.
- **ReactJS**: Component-based UI library for building the interface.

### Styling
- **Tailwind CSS**: Utility-first CSS framework for rapid styling.
- **DaisyUI**: Tailwind CSS component library for pre-styled UI components.

### Routing
- **React Router DOM**: For seamless navigation between pages.

---

## API
The application uses the [TheMealDB API](https://www.themealdb.com/api.php) to fetch recipe data, including recipe names, details, and images.

### Example API Call
```javascript
fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=chicken')
  .then(response => response.json())
  .then(data => console.log(data));
```

---

## Setup and Installation
Follow these steps to run the app locally:

### Prerequisites
- Node.js installed on your machine.
- A package manager like `npm` or `yarn`.

### Steps
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/recipe-finder.git
   cd recipe-finder
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the Application**:
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open in Browser**:
   Navigate to `http://localhost:3000` in your browser to use the application.

---

## Folder Structure
```
recipe-finder/
├── public/
├── src/
│   ├── components/      # Reusable React components
│   ├── pages/           # Pages like Home, Favorites
│   ├── utils/           # Utility functions (e.g., localStorage helpers)
│   ├── App.js           # Main application file
│   ├── index.js         # Entry point of the application
│   └── ...
├── tailwind.config.js   # Tailwind CSS configuration
├── package.json         # Project dependencies and scripts
└── README.md            # Project documentation
```

---

## Future Improvements
- Add user authentication for personalized experiences.
- Introduce filters (e.g., cuisine type, dietary restrictions).
- Enhance responsiveness for a better mobile experience.
- Implement pagination for recipe search results.

---

## Contributions
Contributions are welcome! If you'd like to contribute:
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

---

## License
This project is licensed under the [MIT License](./LICENSE).

---

## Acknowledgments
- [TheMealDB](https://www.themealdb.com/) for providing the recipe data.
- [React](https://reactjs.org/) for the awesome UI library.
- [Tailwind CSS](https://tailwindcss.com/) and [DaisyUI](https://daisyui.com/) for styling.

---

### Enjoy finding your next recipe! 🍲

