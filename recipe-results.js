document.addEventListener('DOMContentLoaded', () => {
    console.log("✅ JS Loaded");

    const form = document.getElementById('ingredient-form');
    const button = document.getElementById('find-recipes');
    const textarea = document.getElementById('ingredients');

    if (!form || !button || !textarea) {
        console.error("❌ Missing form, button, or textarea");
        return;
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        console.log("📨 Form submitted");

        const ingredientsInput = textarea.value.trim().toLowerCase();
        if (!ingredientsInput) {
            alert("Please enter some ingredients.");
            return;
        }

        const inputIngredients = ingredientsInput.split(',').map(i => i.trim());

        // 'recipes' comes from recipes.js
        const matchingRecipes = recipes.filter(recipe =>
            recipe.ingredients.some(ing =>
                inputIngredients.includes(ing.toLowerCase())
            )
        );

        console.log("🥗 Matching recipes:", matchingRecipes);

        const recipeData = JSON.stringify(matchingRecipes);
        window.location.href = `results.html?recipeData=${encodeURIComponent(recipeData)}`;
    });
});
