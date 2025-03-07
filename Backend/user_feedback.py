import json

# Load user database
USER_DATA_PATH = "database/user_data.json"

def save_feedback(user_id, recipe_id, rating):
    """
    Saves user feedback (rating) for a recipe.
    Args:
        user_id (str): Unique identifier for the user.
        recipe_id (str): Recipe identifier.
        rating (int): Rating from 1-5.
    """
    with open(USER_DATA_PATH, "r+") as file:
        user_data = json.load(file)
        if user_id not in user_data:
            user_data[user_id] = {}
        user_data[user_id][recipe_id] = rating
        file.seek(0)
        json.dump(user_data, file, indent=4)

# Example usage
if __name__ == "__main__":
    save_feedback("user123", "recipe45", 5)
