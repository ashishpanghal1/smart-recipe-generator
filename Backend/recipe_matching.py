import json
from collections import Counter

# Load the predefined recipe database
with open("database/recipes.json", "r") as file:
    recipes = json.load(file)

def match_recipe(available_ingredients):
    """
    Matches user ingredients with available recipes.
    Args:
        available_ingredients (list): List of user-provided ingredients.
    Returns:
        list: Recommended recipes sorted by match score.
    """
    matches = []
    
    for recipe in recipes:
        ingredients = recipe["ingredients"]
        common_ingredients = set(ingredients) & set(available_ingredients)
        score = len(common_ingredients) / len(ingredients)  # Matching percentage

        if score > 0:  # Only suggest recipes with some matches
            matches.append((recipe, score))

    # Sort recipes based on best match
    matches.sort(key=lambda x: x[1], reverse=True)
    return [recipe[0] for recipe in matches]

# Example usage
if __name__ == "__main__":
    user_ingredients = ["tomato", "onion", "garlic"]
    print(match_recipe(user_ingredients))
