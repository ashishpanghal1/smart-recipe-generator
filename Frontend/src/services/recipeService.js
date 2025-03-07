import axios from "axios";

const API_URL = "https://api.example.com"; // Replace with actual API

export const getRecipes = async (ingredients) => {
  try {
    const response = await axios.get(`${API_URL}/recipes`, { params: { ingredients } });
    return response.data;
  } catch (error) {
    console.error("Failed to fetch recipes:", error.message);
    return [];
  }
};
