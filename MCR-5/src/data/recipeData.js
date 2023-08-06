import { v4 as uuidv4 } from "uuid";

import margheritaPizza from "../assets/recipeImages/margherita-pizza.jpg";
import vegetableStirFry from "../assets/recipeImages/vegetable-stir-fry.jpg";
import chocolateBrownies from "../assets/recipeImages/chocolate-brownies.jpg";

export const recipeData = [
  {
    id: uuidv4(),
    title: "Margherita Pizza",
    cuisine: "Italian",
    image: margheritaPizza,
    ingredients:
      "Pizza dough (store-bought or homemade), 1/2 cup pizza sauce, 2 cups shredded mozzarella cheese, 1 large tomato, thinly sliced, Fresh basil leaves, Extra-virgin olive oil, Salt and pepper to taste, Cornmeal (for dusting)",
    instructions:
      "Preheat your oven to the highest temperature (usually around 475°F - 500°F or 245°C - 260°C). Roll out the pizza dough on a floured surface into your desired pizza size and thickness. Sprinkle cornmeal on a pizza peel or an inverted baking sheet to prevent sticking. Spread the pizza sauce evenly over the dough, leaving a small border around the edges. Sprinkle the shredded mozzarella cheese over the sauce, covering the entire surface. Place the thinly sliced tomatoes on top of the cheese. Tear or chop fresh basil leaves and scatter them over the pizza. Drizzle some extra-virgin olive oil over the toppings and season with salt and pepper to taste. Carefully slide the pizza onto the preheated pizza stone in the oven (if using). Bake the pizza in the preheated oven for about 10-12 minutes or until the crust is golden brown, and the cheese is bubbly and slightly browned. Remove the pizza from the oven and let it cool for a minute or two before slicing. Slice the Margherita Pizza into wedges or squares, and serve hot",
  },
  {
    id: uuidv4(),
    title: "Vegetable Stir-Fry",
    cuisine: "Asian",
    image: vegetableStirFry,
    ingredients:
      " 2 cups mixed vegetables, 1 tablespoon vegetable oil, 2 cloves garlic, minced, 1 tablespoon grated ginger, 3 tablespoons soy sauce, 1 tablespoon oyster sauce, 1 tablespoon hoisin sauce, 1 tablespoon cornstarch, 1/4 cup water, 2 green onions, sliced, Cooked rice for serving",
    instructions:
      "In a small bowl, mix together soy sauce, oyster sauce, hoisin sauce, cornstarch, and water to make the sauce. Heat vegetable oil in a large skillet or wok over high heat. Add minced garlic and grated ginger to the skillet and stir-fry for a minute until fragrant. Add the mixed vegetables to the skillet and stir-fry for 3-4 minutes until they are tender-crisp. Pour the sauce over the vegetables and toss everything together until well coated and heated through. Stir in the sliced green onions and remove the skillet from the heat. Serve the Vegetable Stir-Fry over cooked rice",
  },
  {
    id: uuidv4(),
    title: "Chocolate Brownies",
    cuisine: "Dessert",
    image: chocolateBrownies,
    ingredients:
      "1 cup (225g) unsalted butter, melted, 2 cups granulated sugar, 4 large eggs, 1 teaspoon vanilla extract, 3/4 cup cocoa powder, 1 cup all-purpose flour, 1/2 teaspoon baking powder, 1/2 teaspoon salt, 1 cup semisweet chocolate chips, 1/2 cup chopped nuts (walnuts, pecans, etc.) - optional",
    instructions:
      "Preheat your oven to 350°F (175°C). Grease and line a 9x13-inch baking pan with parchment paper. In a large mixing bowl, whisk together the melted butter, granulated sugar, eggs, and vanilla extract until well combined. Sift in the cocoa powder, all-purpose flour, baking powder, and salt into the wet ingredients. Stir until the batter is smooth and no lumps remain. Fold in the semisweet chocolate chips and chopped nuts (if using). Pour the batter into the prepared baking pan and spread it out evenly. Bake the brownies in the preheated oven for 25-30 minutes or until a toothpick inserted into the center comes out with a few moist crumbs. Remove the brownies from the oven and let them cool completely in the pan on a wire rack. Once cooled, lift the brownies out of the pan using the parchment paper and cut them into squares",
  },
];
