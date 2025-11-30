(function () {
   // 'use strict';

    const dropdown = document.querySelector('#recipeDropdown');
    const recipeTitle = document.querySelector('#recipeTitle');
    const image = document.querySelector('#image');
    const ingredients = document.querySelector('#recipeIngredients');
    const ingredientsTitle = document.querySelector('h2');

    (async function getRecipeOptions() {

        const recipeList = await fetch('recipeList.json');
        const recipes = await recipeList.json();
       // console.log(recipes);
        recipes.forEach(e => {
            dropdown.innerHTML += `<option value = "${e.recipeName}">${e.recipeName}</option>`;
        });

    }());

    dropdown.addEventListener('change', async (e) => {
        ingredientsTitle.style.display = 'block';
        ingredients.innerHTML = ``;
        const recipeDetailsList = await fetch('recipesDetails.json');
        const parsedRecipeDetailsList = await recipeDetailsList.json();
        const recipeSelection = parsedRecipeDetailsList.filter(recipe => recipe.name === e.target.value);
        //console.log(recipeSelection);
        recipeTitle.innerText = recipeSelection[0].name;
        image.src = `${recipeSelection[0].recipeImage}`;
        recipeSelection[0].ingredients.forEach(e => {
            ingredients.innerHTML += `<li>${e}</li>`;
        })





    })





}());