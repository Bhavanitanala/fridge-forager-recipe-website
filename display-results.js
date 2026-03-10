document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const recipeData = urlParams.get('recipeData');
    const resultsContainer = document.getElementById('results-container');
    resultsContainer.innerHTML = '';

    if (recipeData) {
        let matchingRecipes;
        try {
            matchingRecipes = JSON.parse(recipeData);
        } catch (e) {
            resultsContainer.innerHTML = '<p>Error parsing recipe data.</p>';
            return;
        }

        if (matchingRecipes.length > 0) {
            const ul = document.createElement('ul');

            matchingRecipes.forEach(recipe => {
                const li = document.createElement('li');

                const link = document.createElement('a');
                link.href = `recipe-details.html?recipeName=${encodeURIComponent(recipe.name)}`;
                link.textContent = recipe.name;

                const ingredients = document.createElement('p');
                ingredients.textContent = `Ingredients: ${recipe.ingredients.join(', ')}`;

                li.appendChild(link);
                li.appendChild(ingredients);
                ul.appendChild(li);
            });

            resultsContainer.appendChild(ul);
        } else {
            resultsContainer.innerHTML = '<p>No recipes found.</p>';
        }
    } else {
        resultsContainer.innerHTML = '<p>No recipe data received.</p>';
    }
});
