const recipes = [
  { title: "The Midnight Masala Melt", emoji: "🍕", ingredients: "pizza + biryani + mango pickle", threat: "8.4 / 10", verdict: "Somehow both comforting and deeply suspicious. The pickle is doing most of the heavy lifting.", moods: ["cursed", "feral"] },
  { title: "Peanut Butter Sambar Toast", emoji: "🍞", ingredients: "toast + peanut butter + sambar", threat: "7.1 / 10", verdict: "A breakfast that asks hard questions and refuses to answer any of them.", moods: ["mild", "cursed"] },
  { title: "Banana Biryani Sundae", emoji: "🍌", ingredients: "vanilla ice cream + biryani + fried banana", threat: "9.7 / 10", verdict: "Sweet. Savory. Technically a rice pudding if you stop believing in rules.", moods: ["cursed", "feral"] },
  { title: "The Ketchup Chai Float", emoji: "🥤", ingredients: "masala chai + vanilla soda + ketchup", threat: "10.0 / 10", verdict: "The algorithm has requested a minute of silence for your taste buds.", moods: ["feral"] },
  { title: "Coconut Curry Popcorn", emoji: "🍿", ingredients: "popcorn + coconut chutney + lime", threat: "5.8 / 10", verdict: "Not bad. Which is honestly the most upsetting outcome possible.", moods: ["mild", "cursed"] },
  { title: "Pickle Pancake Stack", emoji: "🥞", ingredients: "pancakes + lime pickle + whipped cream", threat: "8.8 / 10", verdict: "A brunch tower built by someone who has never once feared consequences.", moods: ["cursed", "feral"] },
  { title: "Chocolate Chili Idli Pops", emoji: "🍫", ingredients: "idli + dark chocolate + chili oil", threat: "6.9 / 10", verdict: "The texture is a plot twist. The chili oil is an apology that arrives too late.", moods: ["mild", "cursed"] }
];

const twists = [
  { name: "mango pickle", emoji: "🥭", tone: "bright, salty chaos" },
  { name: "chili crisp", emoji: "🌶️", tone: "a smoky little threat" },
  { name: "vanilla ice cream", emoji: "🍨", tone: "cold sweetness with no alibi" },
  { name: "coconut chutney", emoji: "🥥", tone: "creamy coastal confusion" },
  { name: "crushed papad", emoji: "🫓", tone: "a loud, crispy wildcard" },
  { name: "masala chai syrup", emoji: "🫖", tone: "warm spice where it should not be" }
];

const formats = [
  { name: "Parfait", emoji: "🥄", action: "layered into a suspicious parfait" },
  { name: "Toastie", emoji: "🥪", action: "pressed into a dangerously confident toastie" },
  { name: "Sundae", emoji: "🍨", action: "served cold like a dessert with a criminal record" },
  { name: "Pancake Stack", emoji: "🥞", action: "stacked into a brunch tower of bad judgment" },
  { name: "Fritter", emoji: "🍘", action: "fried until the consequences became crispy" },
  { name: "Milkshake", emoji: "🥤", action: "blended into a drink that should require paperwork" },
  { name: "Pizza", emoji: "🍕", action: "baked onto a pizza-shaped cry for help" },
  { name: "Rice Bowl", emoji: "🍚", action: "assembled as a bowl that rejects all borders" },
  { name: "Dumpling", emoji: "🥟", action: "wrapped into a dumpling with no respect for tradition" },
  { name: "Nachos", emoji: "🌮", action: "piled into nachos for maximum structural instability" },
  { name: "Curry", emoji: "🍛", action: "simmered into a curry that has abandoned diplomacy" },
  { name: "Ramen", emoji: "🍜", action: "dropped into noodles with a broth nobody approved" },
  { name: "Waffle", emoji: "🧇", action: "pressed into a waffle with deep, judgmental pockets" },
  { name: "Pie", emoji: "🥧", action: "sealed inside a pie that should not have a crust" },
  { name: "Burrito", emoji: "🌯", action: "rolled into a burrito with an identity crisis" },
  { name: "Sushi Roll", emoji: "🍣", action: "rolled into sushi that has misplaced its cultural context" },
  { name: "Ice Pop", emoji: "🍧", action: "frozen onto a stick for a portable bad decision" },
  { name: "Quesadilla", emoji: "🫓", action: "griddled into a quesadilla with a melted center of regret" },
  { name: "Pasta", emoji: "🍝", action: "tossed through pasta sauce with absolutely no restraint" },
  { name: "Salad", emoji: "🥗", action: "tossed as a salad pretending this is healthy" },
  { name: "Skewer", emoji: "🍢", action: "threaded onto a skewer in a lineup of edible suspects" },
  { name: "Bao Bun", emoji: "🥮", action: "steamed into a bao bun with a suspiciously soft interior" },
  { name: "Dosa", emoji: "🫓", action: "spread into a dosa thin enough to hide the evidence" },
  { name: "Mac and Cheese", emoji: "🧀", action: "folded into mac and cheese until the cheese gave up" },
  { name: "Croquette", emoji: "🧆", action: "crumbed into a croquette with a crunchy alibi" },
  { name: "Taco", emoji: "🌮", action: "stuffed into a taco that cannot contain the consequences" },
  { name: "Soup", emoji: "🍲", action: "boiled into a soup that asks too many questions" },
  { name: "Cereal", emoji: "🥣", action: "served in a cereal bowl at an hour when judgment is weakest" },
  { name: "Stuffed Bun", emoji: "🍞", action: "baked into a stuffed bun with a molten surprise" },
  { name: "Savory Cake", emoji: "🎂", action: "baked into a cake that has rejected sweetness" },
  { name: "Fondue", emoji: "🫕", action: "melted together into fondue with no exit strategy" },
  { name: "Burger", emoji: "🍔", action: "stacked into a burger with a structurally dishonest center" },
  { name: "Sandwich", emoji: "🥪", action: "wedged between bread with no adult supervision" },
  { name: "Porridge", emoji: "🥣", action: "stirred into porridge with a deeply confusing aftertaste" },
  { name: "Pudding", emoji: "🍮", action: "set into a pudding that wobbles under questioning" },
  { name: "Donut", emoji: "🍩", action: "fried into a donut with a suspiciously savory glaze" },
  { name: "Muffin", emoji: "🧁", action: "baked into a muffin that hides the evidence in its crumb" },
  { name: "Crepe", emoji: "🥞", action: "folded into a crepe with too many conflicting fillings" },
  { name: "Spring Roll", emoji: "🥠", action: "rolled into a spring roll with an alarming interior" },
  { name: "Samosa", emoji: "🔺", action: "sealed inside a samosa with a triangular secret" },
  { name: "Curry Puff", emoji: "🥟", action: "baked into a curry puff that refuses to explain itself" },
  { name: "Quiche", emoji: "🥧", action: "set in a quiche that makes dairy feel complicit" },
  { name: "Hash", emoji: "🍳", action: "chopped into a hash with no discernible chain of command" },
  { name: "Kebab", emoji: "🍢", action: "threaded into a kebab like an edible lineup" },
  { name: "Slider", emoji: "🍔", action: "compressed into a slider with a tiny but serious problem" },
  { name: "Bruschetta", emoji: "🍞", action: "piled onto bruschetta with a crunchy lack of foresight" },
  { name: "Tiramisu", emoji: "🍰", action: "layered into tiramisu that has forgotten what dessert means" },
  { name: "Trifle", emoji: "🍨", action: "assembled as a trifle with multiple layers of regret" },
  { name: "Granola", emoji: "🥣", action: "baked into granola with a trail mix of bad intentions" },
  { name: "Trail Mix", emoji: "🥜", action: "tossed into trail mix for portable culinary confusion" },
  { name: "Congee", emoji: "🍚", action: "slow-cooked into congee with an identity crisis" },
  { name: "Sushi Burrito", emoji: "🌯", action: "rolled into a sushi burrito too large for reasonable thought" },
  { name: "Stuffed Pepper", emoji: "🌶️", action: "packed into a pepper with a hot little secret" },
  { name: "Calzone", emoji: "🥟", action: "folded into a calzone that keeps its mistakes sealed inside" },
  { name: "Corn Dog", emoji: "🌭", action: "battered into a corn dog with an ominous stick" },
  { name: "Jelly", emoji: "🍮", action: "set into jelly with a texture that refuses to cooperate" },
  { name: "Casserole", emoji: "🍲", action: "baked as a casserole where every ingredient has equal blame" },
  { name: "Breakfast Burrito", emoji: "🌯", action: "rolled into a breakfast burrito at the edge of reason" },
  { name: "Cereal", emoji: "🥣", action: "served as cereal at the exact moment judgment disappears" },
  { name: "Aspic", emoji: "🧊", action: "suspended in aspic like evidence at a very cold trial" },
  { name: "Timbale", emoji: "🥫", action: "packed into a timbale with architectural delusions" },
  { name: "Terrine", emoji: "🍖", action: "pressed into a terrine with layers nobody can identify" },
  { name: "Galantine", emoji: "🍗", action: "rolled into a galantine that conceals its true intentions" },
  { name: "Cromesquis", emoji: "🟤", action: "crumbed into cromesquis with a dangerously molten center" },
  { name: "Croustade", emoji: "🥧", action: "baked into a croustade with a shell of false confidence" },
  { name: "Pithivier", emoji: "🥮", action: "sealed inside a pithivier with decorative misdirection" },
  { name: "Vichyssoise", emoji: "🍲", action: "chilled into vichyssoise that has lost all seasonal judgment" },
  { name: "Salpicon", emoji: "🥗", action: "mixed as salpicon in a dice of culinary uncertainty" },
  { name: "Chaud-Froid", emoji: "🍮", action: "glazed in chaud-froid with a temperature identity crisis" },
  { name: "Clafoutis", emoji: "🍰", action: "baked as clafoutis where the fruit has been replaced by consequences" },
  { name: "Kouign-Amann", emoji: "🥐", action: "caramelized into kouign-amann with a laminated secret" }
];

const verdicts = [
  "The first bite will be confusing. The second bite will be your fault.",
  "Somehow the flavors are arguing, but the texture is taking notes.",
  "This is less a recipe and more an edible warning from the future.",
  "The kitchen has gone quiet. Even the dishes want plausible deniability.",
  "There is a delicious idea hiding in here. It is not the one you started with."
];

const wordEmojis = {
  biryani: "🍛", pizza: "🍕", ramen: "🍜", sushi: "🍣", fries: "🍟", banana: "🍌",
  "ice cream": "🍨", chocolate: "🍫", dosa: "🫓", idli: "⚪", mango: "🥭", rice: "🍚",
  burger: "🍔", curry: "🍛", cereal: "🥣", pudding: "🍮", donut: "🍩", samosa: "🔺",
  pancake: "🥞", pancakes: "🥞", kebab: "🍢", croquette: "🧆", porridge: "🥣", terrine: "🍖",
  aspic: "🧊", timbale: "🥫", galantine: "🍗", pithivier: "🥮", clafoutis: "🍰", "kouign-amann": "🥐"
};

const memeReactions = ["💀", "😭", "🤨", "🫡", "🚨", "📉", "👁️👄👁️", "🔥"];

const ingredientsInput = document.getElementById("ingredients");
const charCount = document.getElementById("charCount");
const generateBtn = document.getElementById("generateBtn");
const modeButtons = document.querySelectorAll(".mode-btn");
const emptyState = document.getElementById("emptyState");
const resultContent = document.getElementById("resultContent");
const historySection = document.getElementById("historySection");
const historyList = document.getElementById("historyList");
let selectedMode = "cursed";
let history = [];
let recentSignatures = [];

ingredientsInput.addEventListener("input", () => { charCount.textContent = `${ingredientsInput.value.length} / 180`; });
modeButtons.forEach((button) => button.addEventListener("click", () => {
  selectedMode = button.dataset.mode;
  modeButtons.forEach((item) => item.classList.toggle("active", item === button));
}));

function chooseRecipe() {
  const dishes = ingredientsInput.value.split(",").map((dish) => dish.trim()).filter(Boolean).slice(0, 3);
  const sourceDishes = dishes.length === 3 ? dishes : ["leftover biryani", "peanut butter", "one brave banana"];
  let combo;
  let attempts = 0;
  do {
    const shuffledDishes = [...sourceDishes].sort(() => Math.random() - 0.5);
    const format = formats[Math.floor(Math.random() * formats.length)];
    const availableTwists = twists.filter((candidate) => !sharesWord(candidate.name, shuffledDishes));
    const twistPool = availableTwists.length ? availableTwists : twists;
    const twist = twistPool[Math.floor(Math.random() * twistPool.length)];
    const signature = `${shuffledDishes.join("|")}::${format.name}::${twist.name}`;
    combo = { dishes: shuffledDishes, format, twist, signature };
    attempts += 1;
  } while (recentSignatures.includes(combo.signature) && attempts < 20);
  recentSignatures = [combo.signature, ...recentSignatures].slice(0, 12);
  const threatBase = selectedMode === "feral" ? 9.2 : selectedMode === "mild" ? 5.8 : 7.8;
  const threat = `${Math.min(10, Math.max(1, threatBase + Math.random() * 1.4 - 0.3)).toFixed(1)} / 10`;
  const plainTitle = uniqueTitle(`${formatTitle(combo.dishes[0])} ${formatTitle(combo.dishes[1])} ${formatTitle(combo.dishes[2])} ${combo.format.name}`);
  const titleEmojiLine = `${combo.dishes.map((dish) => emojiForDish(dish)).join("")}${combo.format.emoji}${memeReactions[Math.floor(Math.random() * memeReactions.length)]}`;
  return {
    title: `${plainTitle} ${titleEmojiLine}`,
    emoji: combo.format.emoji,
    twist: combo.twist,
    ingredientLine: uniqueIngredients([...combo.dishes, combo.twist.name]).join(" + "),
    threat,
    verdict: verdicts[Math.floor(Math.random() * verdicts.length)],
    action: combo.format.action,
    signature: combo.signature
  };
}

function formatTitle(dish) {
  return dish.split(" ").slice(0, 2).map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}

function emojiForDish(dish) {
  const normalizedDish = dish.toLowerCase();
  const matchingWord = Object.keys(wordEmojis).find((word) => normalizedDish.includes(word));
  return matchingWord ? wordEmojis[matchingWord] : "🍽️";
}

function sharesWord(candidate, dishes) {
  const dishWords = new Set(dishes.join(" ").toLowerCase().split(/\s+/));
  return candidate.toLowerCase().split(/\s+/).some((word) => dishWords.has(word));
}

function uniqueTitle(title) {
  const usedWords = new Set();
  return title.split(" ").filter((word) => {
    const normalizedWord = word.toLowerCase();
    if (usedWords.has(normalizedWord)) return false;
    usedWords.add(normalizedWord);
    return true;
  }).join(" ");
}

function uniqueIngredients(ingredients) {
  const usedIngredients = new Set();
  return ingredients.filter((ingredient) => {
    const normalizedIngredient = ingredient.toLowerCase();
    if (usedIngredients.has(normalizedIngredient)) return false;
    usedIngredients.add(normalizedIngredient);
    return true;
  });
}

function renderRecipe(recipe, addToHistory = true) {
  const userIngredients = ingredientsInput.value.trim() || "a mystery pantry";
  const baseIngredients = userIngredients.split(",").map((item) => item.trim()).filter(Boolean).slice(0, 3);
  const generatedIngredients = baseIngredients.length ? baseIngredients : recipe.ingredientLine.split(" + ").slice(0, 3);
  const ingredientLine = recipe.ingredientLine || [...generatedIngredients, recipe.twist.name].join(" + ");
  const threat = recipe.threat;
  document.getElementById("resultMode").textContent = selectedMode.toUpperCase();
  document.getElementById("resultEmoji").textContent = `${recipe.emoji}${recipe.twist.emoji}`;
  document.getElementById("resultTitle").textContent = recipe.title;
  document.getElementById("resultDescription").textContent = `The flavor engine ${recipe.action}. It paired your ${baseIngredients.length ? "three dishes" : "mystery pantry"} with ${recipe.twist.tone}. Proceed with curiosity.`;
  document.getElementById("resultIngredients").textContent = ingredientLine;
  document.getElementById("resultThreat").textContent = threat;
  document.getElementById("resultVerdict").textContent = `${recipe.verdict} ${selectedMode === "feral" ? "There is no elegant way back from this." : "A tiny bite is probably enough."}`;
  document.getElementById("confidence").textContent = `CONFIDENCE ${Math.floor(78 + Math.random() * 20)}%`;
  emptyState.classList.add("hidden"); resultContent.classList.remove("hidden", "result-pop"); void resultContent.offsetWidth; resultContent.classList.add("result-pop");
  const result = { ...recipe, threat, ingredientLine };
  if (addToHistory) history.unshift(result);
  history = history.slice(0, 3); historySection.hidden = false;
  historyList.innerHTML = history.map((item, index) => `<button class="history-item" data-history-index="${index}" type="button"><span>${item.emoji}${item.twist.emoji}</span><b>${item.title}</b><small>${item.threat}</small></button>`).join("");
}

generateBtn.addEventListener("click", () => {
  generateBtn.classList.add("loading"); generateBtn.querySelector(".button-icon").textContent = "...";
  window.setTimeout(() => {
    if (!document.body.contains(generateBtn)) return;
    renderRecipe(chooseRecipe()); generateBtn.classList.remove("loading"); generateBtn.querySelector(".button-icon").textContent = "↯";
  }, 520);
});
document.getElementById("remixBtn").addEventListener("click", () => generateBtn.click());
historyList.addEventListener("click", (event) => {
  const button = event.target.closest(".history-item");
  if (!button) return;
  const item = history[Number(button.dataset.historyIndex)];
  if (item) renderRecipe(item, false);
});
document.getElementById("copyBtn").addEventListener("click", (event) => {
  const text = `${document.getElementById("resultTitle").textContent}\n${document.getElementById("resultIngredients").textContent}\nThreat level: ${document.getElementById("resultThreat").textContent}`;
  navigator.clipboard?.writeText(text).then(() => { event.currentTarget.textContent = "Copied"; window.setTimeout(() => { event.currentTarget.textContent = "Copy recipe"; }, 1400); });
});