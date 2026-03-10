const recipes = [
    {
        name: "Tomato Pasta",
        ingredients: ["tomato", "pasta", "onion", "garlic"],
        instructions: "1. Cook pasta. 2. Sauté onion and garlic. 3. Add tomatoes and cook. 4. Mix pasta with sauce. 5. Serve.",
    },
    {
        name: "Maggi Noodles (Instant)",
        ingredients: ["Maggi noodles", "water", "seasoning packet"],
        instructions: "1. Boil water. 2. Add noodles and seasoning. 3. Cook for 2 minutes."
    },
    {
        name: "Vegetable Poha",
        ingredients: ["poha", "onions", "potatoes", "peas", "mustard seeds", "curry leaves"],
        instructions: "1. Soak poha. 2. Sauté mustard seeds, onions, potatoes, peas, and curry leaves. 3. Add poha and cook."
    },
    {
        name: "Egg Bhurji",
        ingredients: ["eggs", "onions", "tomatoes", "green chilies", "coriander leaves"],
        instructions: "1. Scramble eggs. 2. Sauté onions, tomatoes, green chilies. 3. Add eggs and cook."
    },
    {
        name: "Bread Omelette",
        ingredients: ["eggs", "bread slices", "onions", "tomatoes", "green chilies"],
        instructions: "1. Dip bread in beaten eggs. 2. Cook on a pan with onions, tomatoes, and green chilies."
    },
    {
        name: "Ramen Noodles with Egg and Veggies",
        ingredients: ["instant ramen noodles", "egg", "frozen mixed vegetables", "soy sauce", "sesame oil"],
        instructions: "1. Cook ramen noodles. 2. Add frozen vegetables and cook. 3. Crack an egg into the noodles and cook. 4. Add soy sauce and sesame oil."
    },
    {
        name: "Microwave Mac and Cheese",
        ingredients: ["macaroni pasta", "milk", "shredded cheese", "butter", "salt", "pepper"],
        instructions: "1. Cook macaroni in water. 2. Drain pasta. 3. Add milk, cheese, butter, salt, and pepper. 4. Microwave until cheese melts."
    },
    {
        name: "Tuna Salad Sandwich",
        ingredients: ["canned tuna", "mayonnaise", "celery", "onions", "bread slices"],
        instructions: "1. Mix tuna, mayonnaise, celery, and onions. 2. Spread on bread slices."
    },
    {
        name: "Quesadilla with Beans and Cheese",
        ingredients: ["tortillas", "canned black beans", "shredded cheese", "salsa"],
        instructions: "1. Spread black beans and cheese on a tortilla. 2. Fold in half. 3. Cook on a griddle until cheese melts."
    },
    {
        name: "Scrambled Eggs with Toast and Avocado",
        ingredients: ["eggs", "bread slices", "avocado", "salt", "pepper"],
        instructions: "1. Scramble eggs. 2. Toast bread. 3. Slice avocado. 4. Serve eggs, toast, and avocado."
    },
    {
        name: "Peanut Butter Banana Smoothie",
        ingredients: ["banana", "peanut butter", "milk", "oats (optional)"],
        instructions: "1. Blend all ingredients until smooth."
    },
    {
        name: "Veggie Wrap with Hummus",
        ingredients: ["whole wheat tortilla", "hummus", "cucumber", "carrots", "spinach"],
        instructions: "1. Spread hummus on tortilla. 2. Add cucumber, carrots, and spinach. 3. Roll up."
    },
    {
        name: "Instant Oatmeal with Fruits and Nuts",
        ingredients: ["instant oatmeal", "milk/water", "fruits", "nuts", "honey"],
        instructions: "1. Cook oatmeal with milk or water. 2. Top with fruits, nuts, and honey."
    },
    {
        name: "Pasta with Pesto and Cherry Tomatoes",
        ingredients: ["pasta", "pesto sauce", "cherry tomatoes"],
        instructions: "1. Cook pasta. 2. Mix with pesto sauce and cherry tomatoes."
    },
    {
        name: "Rice and Beans with Salsa",
        ingredients: ["cooked rice", "canned black beans", "salsa"],
        instructions: "1. Heat black beans. 2. Serve rice with beans and salsa."
    },
    {
        name: "Yogurt Parfait with Granola and Berries",
        ingredients: ["yogurt", "granola", "berries"],
        instructions: "1. Layer yogurt, granola, and berries."
    },
    {
        name: "Egg Fried Rice (Simple)",
        ingredients: ["cooked rice", "eggs", "soy sauce", "green onions"],
        instructions: "1. Scramble eggs. 2. Add rice, soy sauce, and green onions. 3. Cook until heated through."
    },
    {
        name: "Veggie Stir-Fry with Rice",
        ingredients: ["frozen mixed vegetables", "soy sauce", "cooked rice"],
        instructions: "1. Stir-fry frozen vegetables with soy sauce. 2. Serve over cooked rice."
    },
    {
        name: "Cheese Omelette",
        ingredients: ["eggs", "shredded cheese", "salt", "pepper"],
        instructions: "1. Beat eggs with salt and pepper. 2. Pour into a pan and cook. 3. Add cheese and fold."
    },
    {
        name: "Avocado Toast with Everything Bagel Seasoning",
        ingredients: ["toast", "avocado", "everything bagel seasoning"],
        instructions: "1. Toast bread. 2. Mash avocado and spread on toast. 3. Sprinkle with everything bagel seasoning."
    },
    {
        name: "Vegetable Upma",
        ingredients: ["rava", "onions", "carrots", "peas", "mustard seeds", "curry leaves"],
        instructions: "1. Roast rava. 2. Sauté mustard seeds, onions, carrots, peas, and curry leaves. 3. Add water and rava, cook."
    },
    {
        name: "Peanut Butter Banana Sandwich",
        ingredients: ["bread slices", "peanut butter", "banana slices"],
        instructions: "1. Spread peanut butter on bread. 2. Add banana slices, and cover with another slice."
    },
    {
        name: "Vegetable Fried Rice",
        ingredients: ["cooked rice", "carrots", "peas", "beans", "onions", "soy sauce"],
        instructions: "1. Sauté vegetables. 2. Add rice and soy sauce, cook."
    },
    {
        name: "Cheese Toast",
        ingredients: ["bread slices", "cheese slices"],
        instructions: "1. Place cheese on bread. 2. Toast until cheese melts."
    },
    {
        name: "Dal Tadka",
        ingredients: ["toor dal", "onions", "tomatoes", "cumin seeds", "mustard seeds", "curry leaves"],
        instructions: "1. Cook dal. 2. Sauté cumin seeds, mustard seeds, onions, tomatoes, and curry leaves. 3. Add to dal."
    },
    {
        name: "Aloo Paratha",
        ingredients: ["wheat flour", "boiled potatoes", "onions", "green chilies"],
        instructions: "1. Mix potatoes, onions, and green chilies. 2. Stuff into wheat dough, roll and cook."
    },
    {
        name: "Veggie Momos",
        ingredients: ["flour", "cabbage", "carrots", "onions", "ginger", "garlic"],
        instructions: "1. Mix veggies. 2. Stuff in dough, steam."
    },
    {
        name: "Chicken 65 (Snack)",
        ingredients: ["chicken pieces", "ginger-garlic paste", "curry leaves", "red chili powder"],
        instructions: "1. Marinate chicken. 2. Deep fry, and temper with curry leaves."
    },
    {
        name: "Paneer Tikka",
        ingredients: ["paneer", "yogurt", "bell peppers", "onions", "spices"],
        instructions: "1. Marinate paneer and vegetables. 2. Grill or bake."
    },
    {
        name: "Masala Chai",
        ingredients: ["tea leaves", "milk", "water", "ginger", "cardamom", "cinnamon"],
        instructions: "1. Boil water, add spices. 2. Add tea leaves, milk, and sugar."
    },
    {
        name: "Fruit Smoothie",
        ingredients: ["fruits (banana, berries)", "yogurt", "milk"],
        instructions: "1. Blend all ingredients until smooth."
    },
    {
        name: "Vegetable Cutlet",
        ingredients: ["potatoes", "carrots", "peas", "breadcrumbs"],
        instructions: "1. Mash vegetables, shape. 2. Coat with breadcrumbs, and fry."
    },
    {
        name: "Rava Dosa",
        ingredients: ["rava", "rice flour", "curd", "onions", "green chilies"],
        instructions: "1. Mix batter, spread on a pan, cook."
    },
    {
        name: "Tomato Soup",
        ingredients: ["tomatoes", "onions", "garlic", "vegetable broth"],
        instructions: "1. Boil tomatoes, blend. 2. Sauté onions and garlic, add blended tomatoes and broth."
    },
    {
        name: "Vegetable Biryani",
        ingredients: ["rice", "mixed vegetables", "spices", "mint leaves"],
        instructions: "1. Cook rice and vegetables with spices, layer, and cook."
    },
    {
        name: "Pasta in White Sauce",
        ingredients: ["pasta", "milk", "butter", "flour", "cheese"],
        instructions: "1. Cook pasta. 2. Make white sauce, add pasta and cheese."
    },
    {
        name: "Vegetable Spring Rolls",
        ingredients: ["spring roll sheets", "carrots", "cabbage", "beans", "soy sauce"],
        instructions: "1. Sauté vegetables. 2. Fill spring roll sheets, fry."
    },
    {
        name: "Lemon Rice",
        ingredients: ["cooked rice", "mustard seeds", "curry leaves", "peanuts", "lemon juice"],
        instructions: "1. Temper mustard seeds, curry leaves, peanuts. 2. Add rice and lemon juice."
    },
    {
        name: "Moong Dal Cheela",
        ingredients: ["moong dal", "onions", "green chilies", "ginger"],
        instructions: "1. Grind moong dal, mix with other ingredients. 2. Make cheelas on a pan."
    },
    {
        name: "Vegetable Pulao",
        ingredients: ["rice", "mixed vegetables", "spices", "mint leaves"],
        instructions: "1. Cook rice and vegetables with spices, add mint leaves."
    },
    {
        name: "Curd Rice",
        ingredients: ["cooked rice", "curd", "mustard seeds", "curry leaves"],
        instructions: "1. Mix rice with curd. 2. Temper mustard seeds and curry leaves, add to rice."
    },
    {
        name: "Besan Chilla",
        ingredients: ["besan", "onions", "tomatoes", "green chilies", "coriander leaves"],
        instructions: "1. Make besan batter, mix with other ingredients. 2. Make chillas."
    },
    {
        name: "Fruit Raita",
        ingredients: ["curd", "fruits (pomegranate, banana, apple)", "roasted cumin powder"],
        instructions: "1. Mix curd with fruits, add cumin powder."
    },
    {
        name: "Sweet Corn Soup",
        ingredients: ["sweet corn", "carrots", "vegetable broth", "cornflour"],
        instructions: "1. Boil sweet corn, blend. 2. Sauté carrots, add blended corn and broth, thicken with cornflour."
    },
    {
        name: "Veggie Quesadilla",
        ingredients: ["tortillas", "bell peppers", "onions", "cheese", "salsa"],
        instructions: "1. Sauté vegetables, fill tortillas with veggies, cheese, and salsa, cook."
    },
    {
        name: "Chocolate Milkshake",
        ingredients: ["milk", "chocolate syrup", "ice cream"],
        instructions: "1. Blend all ingredients until smooth."
    },
    {
        name: "Pani Puri",
        ingredients: ["puri", "potatoes", "chickpeas", "tamarind chutney", "mint water"],
        instructions: "1. Fill puris with potatoes and chickpeas. 2. Add tamarind chutney and mint water. 3. Serve immediately."
    },
    {
        name: "Sev Puri",
        ingredients: ["puri", "potatoes", "onions", "tomatoes", "sev", "tamarind chutney", "mint chutney"],
        instructions: "1. Arrange potatoes, onions, tomatoes on puri. 2. Add tamarind and mint chutneys. 3. Top with sev."
    },
    {
        name: "Vada Pav",
        ingredients: ["pav", "potato vada", "chutney"],
        instructions: "1. Place potato vada in pav. 2. Add chutney. 3. Serve."
    },
    {
        name: "Pav Bhaji",
        ingredients: ["pav", "mixed vegetables", "tomatoes", "onions", "spices"],
        instructions: "1. Mash cooked vegetables with tomatoes and onions. 2. Add spices and cook. 3. Serve with pav."
    },
    {
        name: "Veg Manchurian",
        ingredients: ["mixed vegetable balls", "soy sauce", "ginger-garlic paste"],
        instructions: "1. Fry vegetable balls. 2. Sauté ginger-garlic paste, add soy sauce. 3. Add vegetable balls."
    },
    {
        name: "Chilli Paneer",
        ingredients: ["paneer", "bell peppers", "onions", "soy sauce", "green chilies"],
        instructions: "1. Fry paneer. 2. Sauté bell peppers, onions, and green chilies. 3. Add soy sauce and paneer."
    },
    {
        name: "Schezwan Noodles",
        ingredients: ["noodles", "vegetables", "schezwan sauce"],
        instructions: "1. Boil noodles. 2. Sauté vegetables, add schezwan sauce. 3. Add noodles."
    },
    {
        name: "Samosa",
        ingredients: ["flour", "potatoes", "peas", "spices"],
        instructions: "1. Mix potatoes and peas with spices. 2. Stuff in flour dough, deep fry."
    },
    {
        name: "Pakoras",
        ingredients: ["besan", "vegetables", "spices"],
        instructions: "1. Mix besan with vegetables and spices. 2. Deep fry."
    },
    {
        name: "Murukku",
        ingredients: ["rice flour", "urad dal flour", "sesame seeds"],
        instructions: "1. Mix flours with sesame seeds. 2. Shape and deep fry."
    },
    {
        name: "Chakli",
        ingredients: ["rice flour", "besan", "spices"],
        instructions: "1. Mix flours and spices. 2. Shape and deep fry."
    },
    {
        name: "Gulab Jamun (instant)",
        ingredients: ["gulab jamun mix", "sugar", "water"],
        instructions: "1. Make sugar syrup. 2. Prepare gulab jamuns from mix, fry. 3. Add to sugar syrup."
    },
    {
        name: "Rice Kheer",
        ingredients: ["rice", "milk", "sugar", "dry fruits"],
        instructions: "1. Cook rice in milk. 2. Add sugar and dry fruits."
    },
    {
        name: "Fruit Custard",
        ingredients: ["milk", "custard powder", "fruits"],
        instructions: "1. Prepare custard. 2. Add fruits."
    },
    {
        name: "Sprouts Salad",
        ingredients: ["sprouts", "onions", "tomatoes", "lemon juice"],
        instructions: "1. Mix sprouts with onions and tomatoes. 2. Add lemon juice."
    },
    {
        name: "Oats Porridge",
        ingredients: ["oats", "milk", "fruits", "nuts"],
        instructions: "1. Cook oats in milk. 2. Add fruits and nuts."
    },
    {
        name: "Vegetable Salad",
        ingredients: ["cucumber", "tomatoes", "carrots", "lemon juice"],
        instructions: "1. Chop vegetables. 2. Add lemon juice."
    },
    {
        name: "Idli",
        ingredients: ["rice flour", "urad dal flour"],
        instructions: "1. Mix flours, ferment. 2. Steam."
    },
    {
        name: "Dosa",
        ingredients: ["rice flour", "urad dal flour"],
        instructions: "1. Mix flours, ferment. 2. Spread on a pan, cook."
    },
    {
        name: "Vada",
        ingredients: ["urad dal"],
        instructions: "1. Grind urad dal, ferment. 2. Deep fry."
    },
    {
        name: "Sambar",
        ingredients: ["toor dal", "vegetables", "tamarind"],
        instructions: "1. Cook dal and vegetables. 2. Add tamarind."
    },
    {
        name: "Coconut Rice",
        ingredients: ["rice", "coconut milk", "mustard seeds", "curry leaves"],
        instructions: "1. Cook rice in coconut milk. 2. Temper mustard seeds and curry leaves."
    },
    {
        name: "Chole Bhature",
        ingredients: ["chole", "bhature"],
        instructions: "1. Cook chole. 2. Fry bhature."
    },
    {
        name: "Rajma Chawal",
        ingredients: ["rajma", "rice"],
        instructions: "1. Cook rajma. 2. Serve with rice."
    },
    {
        name: "Butter Chicken (simplified)",
        ingredients: ["chicken", "tomato puree", "cream"],
        instructions: "1. Cook chicken in tomato puree. 2. Add cream."
    },
    {
        name: "Palak Paneer",
        ingredients: ["paneer", "palak puree"],
        instructions: "1. Cook paneer in palak puree."
    },
    {
        name: "Egg Curry",
        ingredients: ["eggs", "onions", "tomatoes", "spices"],
        instructions: "1. Boil eggs. 2. Sauté onions and tomatoes, add spices. 3. Add eggs."
    },
    {
        name: "Aloo Gobi",
        ingredients: ["potatoes", "cauliflower", "onions", "tomatoes", "spices"],
        instructions: "1. Sauté onions and tomatoes, add spices. 2. Add potatoes and cauliflower, cook."
    },
    {
        name: "Veg Hakka Noodles",
        ingredients: ["noodles", "vegetables", "soy sauce"],
        instructions: "1. Boil noodles. 2. Sauté vegetables, add soy sauce. 3. Add noodles."
    },
    {
        name: "Quinoa Salad",
        ingredients: ["quinoa", "cucumber", "tomatoes", "bell peppers", "lemon dressing"],
        instructions: "1. Cook quinoa. 2. Chop vegetables. 3. Mix quinoa and vegetables, add lemon dressing."
    },
    {
        name: "Lentil Soup",
        ingredients: ["lentils", "carrots", "celery", "onions", "vegetable broth"],
        instructions: "1. Sauté onions, carrots, and celery. 2. Add lentils and broth, cook until lentils are soft."
    },
    {
        name: "Chia Seed Pudding",
        ingredients: ["chia seeds", "almond milk", "fruits", "honey"],
        instructions: "1. Mix chia seeds and almond milk, refrigerate overnight. 2. Top with fruits and honey."
    },
    {
        name: "Spinach Smoothie",
        ingredients: ["spinach", "banana", "almond milk", "apple"],
        instructions: "1. Blend all ingredients until smooth."
    },
    {
        name: "Baked Sweet Potato Fries",
        ingredients: ["sweet potatoes", "olive oil", "spices"],
        instructions: "1. Cut sweet potatoes into fries. 2. Toss with olive oil and spices. 3. Bake until crispy."
    },
    {
        name: "Chickpea Salad",
        ingredients: ["chickpeas", "cucumber", "red onion", "feta cheese", "lemon dressing"],
        instructions: "1. Mix chickpeas, cucumber, and red onion. 2. Add feta cheese and lemon dressing."
    },
    {
        name: "Brown Rice Bowl with Vegetables",
        ingredients: ["brown rice", "broccoli", "carrots", "soy sauce", "sesame seeds"],
        instructions: "1. Cook brown rice. 2. Steam broccoli and carrots. 3. Mix rice and vegetables, add soy sauce and sesame seeds."
    },
    {
        name: "Avocado Toast with Egg",
        ingredients: ["whole wheat toast", "avocado", "egg", "salt", "pepper"],
        instructions: "1. Toast bread. 2. Mash avocado and spread on toast. 3. Top with a cooked egg, salt, and pepper."
    },
    {
        name: "Baked Salmon with Asparagus",
        ingredients: ["salmon fillets", "asparagus", "lemon", "olive oil", "spices"],
        instructions: "1. Season salmon and asparagus. 2. Bake until salmon is cooked and asparagus is tender."
    },
    {
        name: "Greek Yogurt with Berries and Nuts",
        ingredients: ["greek yogurt", "berries", "almonds", "walnuts", "honey"],
        instructions: "1. Layer greek yogurt with berries and nuts. 2. Drizzle with honey."
    },
    {
        name: "Mushroom and Spinach Omelette",
        ingredients: ["eggs", "mushrooms", "spinach", "onions"],
        instructions: "1. Sauté mushrooms, spinach, and onions. 2. Pour beaten eggs and cook."
    },
    {
        name: "Vegetable and Tofu Stir-Fry",
        ingredients: ["tofu", "broccoli", "bell peppers", "soy sauce", "ginger"],
        instructions: "1. Sauté tofu and vegetables with ginger. 2. Add soy sauce and cook."
    },
    {
        name: "Apple Slices with Almond Butter",
        ingredients: ["apple", "almond butter"],
        instructions: "1. Slice apple. 2. Dip apple slices in almond butter."
    },
    {
        name: "Edamame Salad",
        ingredients: ["edamame", "cucumber", "carrots", "sesame dressing"],
        instructions: "1. Mix edamame and vegetables. 2. Add sesame dressing."
    },
    {
        name: "Baked Chicken Breast with Roasted Vegetables",
        ingredients: ["chicken breast", "bell peppers", "onions", "olive oil", "spices"],
        instructions: "1. Season chicken and vegetables. 2. Bake until chicken is cooked and vegetables are tender."
    },
    {
        name: "Green Smoothie Bowl",
        ingredients: ["spinach", "banana", "almond milk", "berries", "granola", "nuts"],
        instructions: "1. Blend spinach, banana, and almond milk. 2. Pour into a bowl, top with berries, granola, and nuts."
    },
    {
        name: "Shrimp and Vegetable Skewers",
        ingredients: ["shrimp", "bell peppers", "onions", "olive oil", "spices"],
        instructions: "1. Thread shrimp and vegetables onto skewers. 2. Grill or bake until shrimp is cooked."
    },
    {
        name: "Cottage Cheese with Pineapple",
        ingredients: ["cottage cheese", "pineapple"],
        instructions: "1. Combine cottage cheese and pineapple."
    },
    {
        name: "Cucumber and Avocado Salad",
        ingredients: ["cucumber", "avocado", "lemon juice", "salt", "pepper"],
        instructions: "1. Chop cucumber and avocado. 2. Add lemon juice, salt, and pepper."
    },
    {
        name: "Watermelon and Feta Salad",
        ingredients: ["watermelon", "feta cheese", "mint leaves"],
        instructions: "1. Combine watermelon and feta cheese. 2. Garnish with mint leaves."
    },
    {
        name: "Scrambled Tofu with Vegetables",
        ingredients: ["tofu", "onions", "bell peppers", "spinach", "turmeric", "black salt"],
        instructions: "1. Crumble tofu. 2. Sauté onions and bell peppers. 3. Add tofu, spinach, turmeric, and black salt. 4. Cook until heated through."
    },
    {
        name: "Banana Pancakes (Whole Wheat)",
        ingredients: ["whole wheat flour", "banana", "milk", "egg", "baking powder"],
        instructions: "1. Mash banana. 2. Mix all ingredients to form batter. 3. Cook pancakes on a griddle."
    },
    {
        name: "Breakfast Burrito",
        ingredients: ["whole wheat tortilla", "scrambled eggs", "black beans", "salsa", "avocado"],
        instructions: "1. Cook scrambled eggs. 2. Warm tortilla. 3. Fill tortilla with eggs, black beans, salsa, and avocado. 4. Roll up and serve."
    },
    {
        name: "Overnight Oats with Berries and Nuts",
        ingredients: ["rolled oats", "almond milk", "berries", "nuts", "chia seeds", "honey"],
        instructions: "1. Mix oats, almond milk, and chia seeds. 2. Refrigerate overnight. 3. Top with berries, nuts, and honey."
    },
    {
        name: "Multigrain Toast with Avocado and Tomato",
        ingredients: ["multigrain bread", "avocado", "tomato slices", "salt", "pepper"],
        instructions: "1. Toast bread. 2. Mash avocado and spread on toast. 3. Top with tomato slices, salt, and pepper."
    },
    {
        name: "Ragi Porridge",
        ingredients: ["ragi flour", "milk", "jaggery", "cardamom"],
        instructions: "1. Mix ragi flour with water. 2. Cook on low heat until thickened. 3. Add milk, jaggery, and cardamom."
    },
    {
        name: "Vegetable Uttapam",
        ingredients: ["idli/dosa batter", "onions", "tomatoes", "carrots", "green chilies"],
        instructions: "1. Pour batter on a griddle. 2. Top with vegetables. 3. Cook until golden brown."
    },
    {
        name: "Sprouts and Vegetable Omelette",
        ingredients: ["eggs", "sprouts", "onions", "bell peppers", "coriander leaves"],
        instructions: "1. Sauté onions and bell peppers. 2. Add sprouts. 3. Pour beaten eggs and cook. 4. Garnish with coriander leaves."
    },
    {
        name: "Fruit and Yogurt Parfait",
        ingredients: ["greek yogurt", "granola", "mixed fruits", "honey"],
        instructions: "1. Layer greek yogurt, granola, and fruits in a glass. 2. Drizzle with honey."
    },
    {
        name: "Masala Oats",
        ingredients: ["rolled oats", "onions", "tomatoes", "peas", "spices"],
        instructions: "1. Sauté onions, tomatoes, and peas with spices. 2. Add oats and water. 3. Cook until oats are soft."
    },
    {
        name: "Idli with Sambar and Chutney",
        ingredients: ["rice flour", "urad dal flour", "sambar vegetables", "tamarind", "coconut chutney ingredients"],
        instructions: "1. Prepare idli batter, ferment, and steam. 2. Cook sambar with vegetables and tamarind. 3. Grind coconut chutney ingredients. 4. Serve idli with sambar and chutney."
    },
    {
        name: "Dosa with Sambar and Chutney",
        ingredients: ["rice flour", "urad dal flour", "sambar vegetables", "tamarind", "coconut chutney ingredients"],
        instructions: "1. Prepare dosa batter, ferment. 2. Spread batter on a hot griddle, cook. 3. Cook sambar with vegetables and tamarind. 4. Grind coconut chutney ingredients. 5. Serve dosa with sambar and chutney."
    },
    {
        name: "Upma",
        ingredients: ["rava", "onions", "mustard seeds", "curry leaves", "vegetables (carrots, peas)"],
        instructions: "1. Roast rava. 2. Temper mustard seeds and curry leaves. 3. Sauté onions and vegetables. 4. Add water and rava, cook until done."
    },
    {
        name: "Pesarattu",
        ingredients: ["moong dal", "ginger", "green chilies"],
        instructions: "1. Soak moong dal, grind with ginger and green chilies. 2. Spread batter on a hot griddle, cook."
    },
    {
        name: "Pongal (Khara Pongal)",
        ingredients: ["rice", "moong dal", "pepper", "cumin seeds", "ginger", "cashews"],
        instructions: "1. Cook rice and moong dal together. 2. Temper pepper, cumin seeds, ginger, and cashews. 3. Add to rice and dal."
    },
    {
        name: "Vada (Medu Vada)",
        ingredients: ["urad dal", "ginger", "curry leaves", "pepper"],
        instructions: "1. Soak urad dal, grind. 2. Add ginger, curry leaves, and pepper. 3. Deep fry."
    },
    {
        name: "Lemon Rice",
        ingredients: ["cooked rice", "mustard seeds", "curry leaves", "peanuts", "lemon juice"],
        instructions: "1. Temper mustard seeds, curry leaves, and peanuts. 2. Add cooked rice and lemon juice, mix well."
    },
    {
        name: "Coconut Rice",
        ingredients: ["cooked rice", "coconut milk", "mustard seeds", "curry leaves", "urad dal"],
        instructions: "1. Temper mustard seeds, curry leaves, and urad dal. 2. Add coconut milk and rice, mix well."
    },
    {
        name: "Rava Kesari",
        ingredients: ["rava", "sugar", "ghee", "cashews", "raisins", "cardamom"],
        instructions: "1. Roast rava in ghee. 2. Add water and cook. 3. Add sugar, cashews, raisins, and cardamom. 4. Cook until done."
    },
    {
        name: "Appam with Vegetable Stew",
        ingredients: ["rice flour", "coconut milk", "yeast", "vegetable stew ingredients"],
        instructions: "1. Prepare appam batter, ferment. 2. Cook appams on a special pan. 3. Cook vegetable stew. 4. Serve appams with stew."
    },
    {
        name: "Uttapam",
        ingredients: ["idli/dosa batter", "onions", "tomatoes", "carrots", "green chilies"],
        instructions: "1. Pour batter on a griddle. 2. Top with onions, tomatoes, carrots, and green chilies. 3. Cook until golden brown."
    },
    {
        name: "Puliyogare (Tamarind Rice)",
        ingredients: ["cooked rice", "tamarind extract", "peanuts", "mustard seeds", "curry leaves"],
        instructions: "1. Prepare tamarind extract mixture. 2. Temper mustard seeds, curry leaves, and peanuts. 3. Add tamarind mixture and rice, mix well."
    },
    {
        name: "Tomato Rice",
        ingredients: ["cooked rice", "tomatoes", "onions", "mustard seeds", "curry leaves"],
        instructions: "1. Sauté onions, mustard seeds, and curry leaves. 2. Add tomatoes and cook. 3. Add rice and mix well."
    },
    {
        name: "Sambar Rice",
        ingredients: ["cooked rice", "sambar", "ghee"],
        instructions: "1. Prepare sambar. 2. Mix cooked rice with sambar. 3. Add ghee."
    },
    {
        name: "Curd Rice",
        ingredients: ["cooked rice", "curd", "mustard seeds", "curry leaves", "ginger"],
        instructions: "1. Mix cooked rice with curd. 2. Temper mustard seeds, curry leaves, and ginger. 3. Add to curd rice."
    },
    {
        name: "Chicken Salad",
        ingredients: ["chicken", "lettuce", "tomato", "cucumber"],
        instructions: "1. Cook chicken. 2. Chop lettuce, tomato, and cucumber. 3. Mix chicken with vegetables. 4. Dress with vinaigrette. 5. Serve.",
    },
    {
        name: "Egg Omelette",
        ingredients: ["egg", "onion", "pepper", "cheese"],
        instructions: "1. Whisk eggs. 2. Chop onion and pepper. 3. Sauté onion and pepper. 4. Pour eggs and cook. 5. Add cheese and fold. 6. Serve.",
    },
    {
        name: "Banana Nice Cream",
        ingredients: ["bananas", "milk (or plant-based milk)"],
        instructions: "1. Slice bananas and freeze them. 2. Blend frozen bananas with a splash of milk until smooth and creamy."
    },
    {
        name: "Avocado Toast",
        ingredients: ["toast", "avocado"],
        instructions: "1. Toast bread. 2. Mash avocado and spread on toast."
    },
    {
        name: "Fruit Skewers",
        ingredients: ["various fruits (e.g., strawberries, grapes, melon)", "optional: honey or yogurt for dipping"],
        instructions: "1. Wash and chop fruits into bite-sized pieces. 2. Thread fruit onto skewers."
    },
    {
        name: "Date and Nut Bites",
        ingredients: ["dates", "nuts (e.g., almonds, walnuts)"],
        instructions: "1. Remove pits from dates. 2. Stuff dates with nuts."
    },
    {
        name: "Baked Sweet Potato",
        ingredients: ["sweet potato", "optional: olive oil, salt"],
        instructions: "1. Wash and pierce sweet potato. 2. Bake until soft. 3. Optional: Rub with olive oil and sprinkle with salt before baking."
    },

    {
        name: "Caprese Salad",
        ingredients: ["tomatoes", "fresh mozzarella", "basil", "balsamic glaze"],
        instructions: "1. Slice tomatoes and mozzarella. 2. Arrange on a plate with basil leaves. 3. Drizzle with balsamic glaze."
    },
    {
        name: "Watermelon and Feta Salad",
        ingredients: ["watermelon", "feta cheese", "mint"],
        instructions: "1. Cube watermelon. 2. Crumble feta cheese. 3. Combine watermelon and feta, garnish with mint."
    },
    {
        name: "Scrambled Eggs with Spinach",
        ingredients: ["eggs", "spinach", "salt", "pepper"],
        instructions: "1. Beat eggs with salt and pepper. 2. Sauté spinach. 3. Add eggs and scramble."
    },
    {
        name: "Chickpea Salad Sandwich",
        ingredients: ["canned chickpeas", "mayonnaise (or vegan mayo)", "celery", "onion", "bread"],
        instructions: "1. Mash chickpeas. 2. Mix with mayonnaise, celery, and onion. 3. Spread on bread."
    },
    {
        name: "Quesadillas with Cheese and Beans",
        ingredients: ["tortillas", "cheese", "canned beans", "optional: salsa"],
        instructions: "1. Sprinkle cheese and beans on a tortilla. 2. Fold in half. 3. Cook on a griddle until cheese melts."
    },
];