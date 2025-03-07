import cv2
import numpy as np
import tensorflow as tf
from tensorflow.keras.models import load_model
import json

# Load pre-trained model for ingredient classification (modify path as needed)
MODEL_PATH = "models/ingredient_classifier.h5"
model = load_model(MODEL_PATH)

# Load label names
with open("models/labels.json", "r") as file:
    labels = json.load(file)

def recognize_ingredients(image_path):
    """
    Recognizes ingredients from an image.
    Args:
        image_path (str): Path to the image file.
    Returns:
        list: Identified ingredients.
    """
    img = cv2.imread(image_path)
    img = cv2.resize(img, (224, 224))  # Resize to match model input
    img = np.expand_dims(img, axis=0) / 255.0  # Normalize

    predictions = model.predict(img)
    top_indices = np.argsort(predictions[0])[-5:]  # Get top 5 predicted ingredients

    identified_ingredients = [labels[i] for i in reversed(top_indices)]
    return identified_ingredients

# Example usage
if __name__ == "__main__":
    print(recognize_ingredients("test_image.jpg"))
