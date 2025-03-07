import json

# Load substitution database
with open("database/substitutes.json", "r") as file:
    substitutes = json.load(file)

def suggest_substitutes(missing_ingredients):
    """
    Suggests alternative ingredients for missing items.
    Args:
        missing_ingredients (list): List of unavailable ingredients.
    Returns:
        dict: Mapping of missing ingredients to substitutes.
    """
    suggestions = {}
    for ingredient in missing_ingredients:
        if ingredient in substitutes:
            suggestions[ingredient] = substitutes[ingredient]
    return suggestions

# Example usage
if __name__ == "__main__":
    missing = ["milk", "butter"]
    print(suggest_substitutes(missing))
