export interface ConceptSection {
  heading: string;
  body: string[];
}

export interface PracticeQuestion {
  question: string;
  options: string[];
  /** Index into `options` of the correct choice. */
  answer: number;
  explanation: string;
}

export type ConceptLevel = "Beginner" | "Intermediate";

export interface Concept {
  slug: string;
  title: string;
  category: string;
  level: ConceptLevel;
  readTime: string;
  summary: string;
  relatedCalculator?: string;
  keyIdea: string;
  formula: {
    expression: string;
    note: string;
  };
  sections: ConceptSection[];
  worked: {
    problem: string;
    steps: string[];
    answer: string;
  };
  mistakes: string[];
  practice: PracticeQuestion[];
}

export const concepts: Concept[] = [
  {
    slug: "compound-interest",
    title: "Compound Interest & the Power of Growth",
    category: "Finance",
    level: "Intermediate",
    readTime: "6 min",
    summary:
      "Why money left to grow multiplies faster than intuition suggests, and how banks, loans, and investments all run on this one formula.",
    relatedCalculator: "scientific",
    keyIdea: "Interest earned on interest grows a balance exponentially, not in a straight line.",
    formula: {
      expression: "A = P(1 + r/n)^(nt)",
      note: "P is the starting amount, r the yearly rate as a decimal, n the compounding periods per year, and t the number of years.",
    },
    sections: [
      {
        heading: "Simple vs. compound",
        body: [
          "Simple interest pays you a fixed amount each period, always calculated on the original amount you started with. Compound interest instead recalculates on the new, larger balance every period — so each round of interest is a little bigger than the last.",
          "The formula is A = P(1 + r/n)^(nt), where P is the starting principal, r is the annual rate, n is how many times per year interest compounds, and t is the number of years.",
        ],
      },
      {
        heading: "Where it shows up",
        body: [
          "Savings accounts and retirement funds use compounding to grow your money over decades. Credit cards and loans use the same math against you — unpaid balances compound too, which is why minimum payments can take years to clear a debt.",
          "The 'Rule of 72' is a fast mental shortcut: divide 72 by the annual interest rate to estimate how many years it takes an amount to double.",
        ],
      },
    ],
    worked: {
      problem: "You invest $2,000 at a 6% annual rate, compounded monthly. What is it worth after 10 years?",
      steps: [
        "Identify the variables: P = 2000, r = 0.06, n = 12, t = 10.",
        "Compute the monthly rate: r/n = 0.06 / 12 = 0.005.",
        "Compute the total number of compounding periods: n × t = 12 × 10 = 120.",
        "Apply the formula: A = 2000 × (1.005)^120.",
        "(1.005)^120 ≈ 1.8194, so A ≈ 2000 × 1.8194.",
      ],
      answer: "≈ $3,638.80 after 10 years — roughly $1,638.80 in interest on a $2,000 investment.",
    },
    mistakes: [
      "Plugging in the rate as a whole number — 6% must go in as 0.06, not 6.",
      "Forgetting to divide the rate by n and multiply the years by n when interest compounds more than once a year.",
      "Expecting a straight line: the balance grows by a larger amount every period, not the same amount.",
    ],
    practice: [
      {
        question: "You invest $1,000 at 10% a year, compounded annually. What is it worth after 2 years?",
        options: ["$1,100", "$1,200", "$1,210", "$1,221"],
        answer: 2,
        explanation: "1,000 × 1.10 × 1.10 = 1,210. The second year earns interest on $1,100, not on the original $1,000.",
      },
      {
        question: "Using the Rule of 72, roughly how long does money take to double at 8% a year?",
        options: ["9 years", "6 years", "12 years", "8 years"],
        answer: 0,
        explanation: "72 ÷ 8 = 9, so the balance doubles in about 9 years.",
      },
      {
        question: "For 6% a year compounded quarterly over 5 years, what are r/n and nt?",
        options: ["0.06 and 5", "0.015 and 20", "0.005 and 60", "0.24 and 20"],
        answer: 1,
        explanation: "Quarterly means n = 4, so r/n = 0.06 ÷ 4 = 0.015 and nt = 4 × 5 = 20 periods.",
      },
      {
        question: "$1,000 earns 5% a year for 10 years. About how much more does annual compounding earn than simple interest?",
        options: ["Nothing — they match", "About $63", "About $500", "About $129"],
        answer: 3,
        explanation: "Simple interest gives 1,000 + 10 × 50 = $1,500. Compounding gives 1,000 × 1.05^10 ≈ $1,628.89 — about $129 more.",
      },
    ],
  },
  {
    slug: "percentages-everyday-life",
    title: "Percentages You Actually Use Every Day",
    category: "Everyday Math",
    level: "Beginner",
    readTime: "5 min",
    summary:
      "Tips, discounts, sales tax, and pay raises are all the same three percentage relationships in disguise.",
    relatedCalculator: "percentage",
    keyIdea: "Every percentage problem is really just part ÷ whole × 100 — read backwards or forwards.",
    formula: {
      expression: "percent = part ÷ whole × 100",
      note: "Rearranged, part = whole × percent ÷ 100. Percent change = (new − old) ÷ old × 100.",
    },
    sections: [
      {
        heading: "The three questions percentages answer",
        body: [
          "1) What is X% of a number? — multiply the number by X/100. 2) What percent is one number of another? — divide part by whole, then multiply by 100. 3) By what percent did a value change? — divide the change by the original value.",
          "Once you can tell these three apart, discount tags, restaurant tips, and 'this year vs last year' comparisons all become the same short calculation.",
        ],
      },
      {
        heading: "Stacking percentages is not additive",
        body: [
          "A common mistake: a 20% discount followed by an extra 10% off is not a 30% discount. The second discount applies to the already-reduced price, so the true combined discount is 28%.",
          "The same logic applies to consecutive raises, price increases, or investment returns — percentages compound, they don't simply add.",
        ],
      },
    ],
    worked: {
      problem: "A jacket costs $85. It's on sale for 20% off, then you have a coupon for an extra 10% off the sale price. What do you pay?",
      steps: [
        "Apply the first discount: 85 × (1 − 0.20) = 85 × 0.80 = 68.",
        "Apply the second discount to the new price: 68 × (1 − 0.10) = 68 × 0.90 = 61.20.",
        "Compare to a naive 30% off: 85 × 0.70 = 59.50 — notice it's cheaper than stacking, which is why order and method matter.",
      ],
      answer: "You pay $61.20 — an effective discount of 28%, not 30%.",
    },
    mistakes: [
      "Adding stacked percentages — 20% off then 10% off is 28% off, not 30%.",
      "Dividing a change by the new value instead of the original one.",
      "Assuming a drop and an equal rise cancel out: after a 50% fall you need a 100% rise to get back.",
    ],
    practice: [
      {
        question: "What is a 15% tip on a $48 bill?",
        options: ["$6.40", "$7.20", "$7.50", "$8.20"],
        answer: 1,
        explanation: "48 × 0.15 = 7.20.",
      },
      {
        question: "18 is what percent of 72?",
        options: ["25%", "20%", "30%", "40%"],
        answer: 0,
        explanation: "18 ÷ 72 = 0.25, and 0.25 × 100 = 25%.",
      },
      {
        question: "A price rises from $40 to $50. What is the percent increase?",
        options: ["10%", "20%", "80%", "25%"],
        answer: 3,
        explanation: "The change is $10 and the original price is $40: 10 ÷ 40 = 0.25 = 25%.",
      },
      {
        question: "A share price falls 50%, then rises 50%. Where does it end up?",
        options: ["Back where it started", "25% above the start", "25% below the start", "50% below the start"],
        answer: 2,
        explanation: "Start at 100: a 50% fall gives 50, and a 50% rise on 50 gives 75 — 25% below the start.",
      },
    ],
  },
  {
    slug: "ratios-and-scale",
    title: "Ratios, Proportions, and Scale",
    category: "Foundations",
    level: "Beginner",
    readTime: "5 min",
    summary:
      "Recipes, maps, paint mixing, and architectural models all rely on keeping one relationship constant while everything else changes size.",
    relatedCalculator: "ratio-proportion",
    keyIdea: "A ratio describes a relationship, not a fixed amount — scale both sides together and the relationship holds.",
    formula: {
      expression: "a / b = c / d  →  a × d = b × c",
      note: "Cross-multiplying turns any proportion into a one-step equation for the missing value.",
    },
    sections: [
      {
        heading: "Reading a ratio",
        body: [
          "A ratio like 3:2 means 'for every 3 parts of the first thing, there are 2 parts of the second.' It says nothing about the actual quantity — 3:2 could mean 3 and 2 cups, or 300 and 200 liters.",
          "A proportion is simply a statement that two ratios are equal: a/b = c/d. If you know three of the four values, you can always solve for the fourth by cross-multiplying.",
        ],
      },
      {
        heading: "Scale drawings and maps",
        body: [
          "A map scale of 1:50,000 means 1 unit on the map equals 50,000 of that same unit in reality. Architects, engineers, and model builders use the exact same idea to shrink real-world objects down to a drawing or a physical model.",
        ],
      },
    ],
    worked: {
      problem: "A recipe for 4 people uses 3 cups of flour. How much flour is needed for 10 people?",
      steps: [
        "Set up the proportion: 3/4 = x/10.",
        "Cross-multiply: 4x = 3 × 10 = 30.",
        "Divide both sides by 4: x = 30 / 4.",
      ],
      answer: "7.5 cups of flour for 10 people.",
    },
    mistakes: [
      "Mixing up the order — 3:2 flour to sugar is not the same as 3:2 sugar to flour.",
      "Scaling only one side of the ratio instead of both.",
      "Treating the parts as the total: in a 2:3 mix there are 5 parts altogether, not 3.",
    ],
    practice: [
      {
        question: "Simplify the ratio 18 : 24.",
        options: ["2 : 3", "3 : 4", "6 : 8", "9 : 14"],
        answer: 1,
        explanation: "Divide both sides by their greatest common factor, 6: 18 ÷ 6 = 3 and 24 ÷ 6 = 4.",
      },
      {
        question: "A map uses a 1 : 50,000 scale. How far in reality is 4 cm on the map?",
        options: ["200 m", "20 km", "2 km", "500 m"],
        answer: 2,
        explanation: "4 × 50,000 = 200,000 cm = 2,000 m = 2 km.",
      },
      {
        question: "Green paint mixes blue and yellow 2 : 3. How much blue is in 15 litres of green?",
        options: ["6 litres", "5 litres", "10 litres", "9 litres"],
        answer: 0,
        explanation: "2 + 3 = 5 parts in total, so each part is 15 ÷ 5 = 3 litres. Blue is 2 parts = 6 litres.",
      },
      {
        question: "5 pencils cost $2. At the same rate, what do 20 pencils cost?",
        options: ["$4", "$10", "$6", "$8"],
        answer: 3,
        explanation: "20 pencils is 4 times as many, so the cost is 4 × $2 = $8.",
      },
    ],
  },
  {
    slug: "pythagorean-theorem",
    title: "The Pythagorean Theorem in the Real World",
    category: "Geometry",
    level: "Beginner",
    readTime: "5 min",
    summary:
      "A 2,500-year-old formula still used daily by carpenters, surveyors, and navigators to guarantee a perfect right angle or shortest path.",
    keyIdea: "In any right triangle, the square of the hypotenuse equals the sum of the squares of the other two sides: a² + b² = c².",
    formula: {
      expression: "a² + b² = c²",
      note: "a and b are the two legs that meet at the right angle; c is the hypotenuse opposite it.",
    },
    sections: [
      {
        heading: "Why it works",
        body: [
          "The theorem only applies to right triangles — triangles with one 90° angle. The longest side, called the hypotenuse, is always opposite that right angle. Knowing any two sides lets you find the third.",
        ],
      },
      {
        heading: "Where it's used",
        body: [
          "Builders use the '3-4-5 rule' (a triangle with sides 3, 4, and 5 units always has a right angle) to square up walls and foundations without any angle-measuring tools.",
          "Navigators and pilots use it to find the shortest straight-line distance between two points when they know how far they've traveled east/west and north/south. TV and computer screens are also sized by their diagonal, which is a direct hypotenuse calculation from width and height.",
        ],
      },
    ],
    worked: {
      problem: "A ladder is placed 6 feet from the base of a wall and reaches 8 feet up the wall. How long is the ladder?",
      steps: [
        "The ladder is the hypotenuse; the distances form the two legs: a = 6, b = 8.",
        "Apply the theorem: c² = 6² + 8² = 36 + 64 = 100.",
        "Take the square root of both sides: c = √100.",
      ],
      answer: "The ladder is 10 feet long.",
    },
    mistakes: [
      "Using the theorem on a triangle that has no right angle.",
      "Putting a leg in place of c — the hypotenuse is always the longest side, on its own side of the equation.",
      "Forgetting the final square root: c² = 100 means c = 10, not 100.",
    ],
    practice: [
      {
        question: "A right triangle has legs of 5 and 12. How long is the hypotenuse?",
        options: ["13", "17", "15", "√119"],
        answer: 0,
        explanation: "5² + 12² = 25 + 144 = 169, and √169 = 13.",
      },
      {
        question: "The hypotenuse is 10 and one leg is 6. How long is the other leg?",
        options: ["4", "√136", "8", "16"],
        answer: 2,
        explanation: "b² = 10² − 6² = 100 − 36 = 64, so b = 8.",
      },
      {
        question: "A screen is 16 inches wide and 12 inches tall. What is its diagonal?",
        options: ["28 inches", "18 inches", "24 inches", "20 inches"],
        answer: 3,
        explanation: "16² + 12² = 256 + 144 = 400, and √400 = 20 inches.",
      },
      {
        question: "Which set of side lengths forms a right triangle?",
        options: ["4, 5, 6", "6, 8, 10", "5, 5, 8", "2, 3, 4"],
        answer: 1,
        explanation: "6² + 8² = 36 + 64 = 100 = 10². None of the other sets satisfy a² + b² = c².",
      },
    ],
  },
  {
    slug: "understanding-probability",
    title: "Understanding Probability and Risk",
    category: "Statistics",
    level: "Intermediate",
    readTime: "6 min",
    summary:
      "From weather forecasts to insurance pricing, probability turns uncertainty into a number you can actually plan around.",
    keyIdea: "Probability is a fraction between 0 and 1: favorable outcomes divided by all possible outcomes.",
    formula: {
      expression: "P(event) = favorable outcomes ÷ total outcomes",
      note: "For independent events, P(A and B) = P(A) × P(B). The chance of something not happening is 1 − P.",
    },
    sections: [
      {
        heading: "The basic rule",
        body: [
          "P(event) = number of favorable outcomes ÷ total number of possible outcomes. A probability of 0 means impossible, 1 means certain, and 0.5 means an even chance — like a fair coin flip.",
          "For independent events (where one outcome doesn't affect the other), you multiply their individual probabilities to find the chance they both happen.",
        ],
      },
      {
        heading: "Reading everyday probability",
        body: [
          "A '30% chance of rain' means that under historically similar atmospheric conditions, rain occurred 30% of the time. Insurance companies price policies by estimating the probability and average cost of a claim, then charging enough to cover expected payouts plus a margin.",
        ],
      },
    ],
    worked: {
      problem: "You roll a standard six-sided die twice. What is the probability of rolling a 6 both times?",
      steps: [
        "Probability of a 6 on one roll: 1/6.",
        "The two rolls are independent, so multiply: 1/6 × 1/6.",
      ],
      answer: "1/36 ≈ 2.78% chance of rolling two 6s in a row.",
    },
    mistakes: [
      "Believing a result is 'due' — a fair coin has no memory of earlier flips.",
      "Adding probabilities when both events must happen; independent events multiply.",
      "Reading 30% as 'it will rain for 30% of the day' rather than a 3-in-10 chance of any rain.",
    ],
    practice: [
      {
        question: "A bag holds 3 red and 5 blue marbles. What is the probability of drawing a red one?",
        options: ["3/5", "3/8", "5/8", "1/3"],
        answer: 1,
        explanation: "There are 3 favorable outcomes out of 3 + 5 = 8 marbles: 3/8.",
      },
      {
        question: "You flip a fair coin twice. What is the probability of two heads?",
        options: ["1/2", "1/3", "1/4", "1/8"],
        answer: 2,
        explanation: "The flips are independent: 1/2 × 1/2 = 1/4.",
      },
      {
        question: "The forecast gives a 30% chance of rain. What is the chance it stays dry?",
        options: ["70%", "30%", "50%", "60%"],
        answer: 0,
        explanation: "The two outcomes add to 100%, so 100% − 30% = 70%.",
      },
      {
        question: "A fair coin lands heads 5 times in a row. What is the probability the next flip is heads?",
        options: ["Less than 1/2", "1/32", "More than 1/2", "Exactly 1/2"],
        answer: 3,
        explanation: "Each flip is independent of the ones before it, so the chance is still 1/2.",
      },
    ],
  },
  {
    slug: "fractions-in-practice",
    title: "Fractions in Cooking, Construction, and Time",
    category: "Foundations",
    level: "Beginner",
    readTime: "5 min",
    summary:
      "Halving a recipe, cutting a board, or reading a clock face are all fraction problems most people solve without realizing it.",
    relatedCalculator: "fraction",
    keyIdea: "A fraction is division waiting to happen — the line between numerator and denominator always means 'divided by'.",
    formula: {
      expression: "a/b + c/d = (ad + bc) / bd",
      note: "To multiply, go straight across: a/b × c/d = ac / bd. To divide, flip the second fraction and multiply.",
    },
    sections: [
      {
        heading: "A common denominator makes fractions comparable",
        body: [
          "You can't directly add 1/3 and 1/4 because they're measured in different-sized 'pieces'. Converting both to a common denominator (12ths, in this case) lets you add them the way you'd add any other matching units.",
        ],
      },
      {
        heading: "Where fractions hide in plain sight",
        body: [
          "Recipes scaled up or down, lumber cut to 3/4-inch or 5/8-inch thickness, and a clock showing 'quarter past' or 'half past' the hour are all fractional reasoning. Even tip-splitting among friends is a fraction problem: each person's fair share is 1 divided by the number of people.",
        ],
      },
    ],
    worked: {
      problem: "A recipe calls for 3/4 cup of sugar, but you want to make half the recipe. How much sugar do you need?",
      steps: [
        "Halving means multiplying by 1/2: 3/4 × 1/2.",
        "Multiply numerators and denominators: (3 × 1) / (4 × 2) = 3/8.",
      ],
      answer: "3/8 cup of sugar.",
    },
    mistakes: [
      "Adding numerators and denominators straight across: 1/3 + 1/4 is not 2/7.",
      "Forgetting to flip the second fraction when dividing.",
      "Assuming a bigger denominator means a bigger fraction — 1/8 is smaller than 1/4.",
    ],
    practice: [
      {
        question: "What is 1/3 + 1/4?",
        options: ["2/7", "7/12", "1/6", "5/12"],
        answer: 1,
        explanation: "Use twelfths: 4/12 + 3/12 = 7/12.",
      },
      {
        question: "What is 2/3 × 3/5?",
        options: ["2/5", "5/8", "6/8", "10/9"],
        answer: 0,
        explanation: "Multiply across: 6/15, which simplifies to 2/5.",
      },
      {
        question: "How many 1/8-cup scoops fill 3/4 of a cup?",
        options: ["3", "4", "8", "6"],
        answer: 3,
        explanation: "3/4 ÷ 1/8 = 3/4 × 8/1 = 24/4 = 6.",
      },
      {
        question: "Which is larger: 5/8 or 2/3?",
        options: ["5/8", "They are equal", "2/3", "It cannot be compared"],
        answer: 2,
        explanation: "In 24ths, 5/8 = 15/24 and 2/3 = 16/24, so 2/3 is larger.",
      },
    ],
  },
  {
    slug: "mean-median-mode",
    title: "Mean, Median, and Mode: Choosing the Right Average",
    category: "Statistics",
    level: "Beginner",
    readTime: "5 min",
    summary:
      "Salaries, house prices, and review scores are all summarised by an 'average' — but which average you pick can change the story completely.",
    relatedCalculator: "basic",
    keyIdea: "An average is one number standing in for a whole group, and the best choice depends on how the group is spread out.",
    formula: {
      expression: "mean = sum of values ÷ number of values",
      note: "The median is the middle value once the list is sorted; the mode is the value that appears most often.",
    },
    sections: [
      {
        heading: "Three ways to find the middle",
        body: [
          "The mean adds every value and divides by how many there are. It uses all of the data, which makes it precise — and also sensitive to extreme values.",
          "The median is the middle value of a sorted list. With an even count, it is the mean of the two middle values. The mode is simply the most common value, and it is the only average that works for categories like shoe sizes or favourite colours.",
        ],
      },
      {
        heading: "When the mean misleads",
        body: [
          "One very large or very small value drags the mean toward it. That is why news reports quote median income and median house price: a handful of billionaires or mansions would make the mean look nothing like a typical household.",
          "A quick check: if the mean and median are far apart, the data is skewed, and the median usually describes a typical case better.",
        ],
      },
    ],
    worked: {
      problem: "Five employees earn $30k, $32k, $35k, $38k, and $165k. What are the mean and median salaries, and which describes a typical employee?",
      steps: [
        "Add the salaries: 30 + 32 + 35 + 38 + 165 = 300.",
        "Divide by the count for the mean: 300 ÷ 5 = 60, so the mean is $60k.",
        "The list is already sorted, so the median is the third value: $35k.",
        "Four of the five people earn well below $60k — the single $165k salary pulls the mean up.",
      ],
      answer: "Mean $60k, median $35k — the median is the better picture of a typical salary here.",
    },
    mistakes: [
      "Finding the median without sorting the list first.",
      "Forgetting to average the two middle values when the count is even.",
      "Quoting the mean for skewed data such as incomes or house prices.",
    ],
    practice: [
      {
        question: "What is the mean of 4, 8, 6, 10, and 12?",
        options: ["6", "8", "10", "40"],
        answer: 1,
        explanation: "The sum is 40 and there are 5 values: 40 ÷ 5 = 8.",
      },
      {
        question: "What is the median of 3, 9, 4, 7, and 12?",
        options: ["4", "9", "7", "3"],
        answer: 2,
        explanation: "Sorted, the list is 3, 4, 7, 9, 12. The middle value is 7.",
      },
      {
        question: "What is the median of 2, 4, 6, and 10?",
        options: ["5", "4", "6", "5.5"],
        answer: 0,
        explanation: "With four values, average the two middle ones: (4 + 6) ÷ 2 = 5.",
      },
      {
        question: "What is the mode of 2, 3, 3, 5, 7, 3, 5?",
        options: ["5", "4", "7", "3"],
        answer: 3,
        explanation: "3 appears three times, more often than any other value.",
      },
      {
        question: "A street has nine ordinary houses and one mansion. Which average best describes a typical house price?",
        options: ["The mean", "The median", "The highest price", "The range"],
        answer: 1,
        explanation: "The mansion pulls the mean upward, while the median stays with the ordinary houses.",
      },
    ],
  },
  {
    slug: "speed-and-unit-rates",
    title: "Speed, Distance, and Unit Rates",
    category: "Everyday Math",
    level: "Beginner",
    readTime: "5 min",
    summary:
      "Kilometres per hour, price per kilogram, and pages per minute are all the same idea: how much of one thing you get for each single unit of another.",
    relatedCalculator: "unit-converter",
    keyIdea: "A unit rate reduces any comparison to 'per one' — and once two things are per one, they can be compared directly.",
    formula: {
      expression: "distance = speed × time",
      note: "Rearranged: speed = distance ÷ time and time = distance ÷ speed. Any unit rate is total ÷ quantity.",
    },
    sections: [
      {
        heading: "Everything 'per one'",
        body: [
          "A unit rate tells you how much of something matches exactly one unit of something else: 60 km per 1 hour, $0.84 per 100 grams, 30 words per minute. To find it, divide the total by the quantity.",
          "Speed is the most familiar unit rate. Knowing any two of distance, speed, and time gives you the third — just keep the units consistent, so minutes are converted to hours before you multiply by km/h.",
        ],
      },
      {
        heading: "Comparing prices fairly",
        body: [
          "Supermarket shelf labels show a unit price for exactly this reason. A bigger pack is not automatically cheaper; only the price per gram, litre, or item tells you which is the better deal.",
          "Average speed has a trap of its own: you cannot simply average two speeds. The slower leg takes longer, so it counts for more. Always go back to total distance ÷ total time.",
        ],
      },
    ],
    worked: {
      problem: "Coffee comes as 500 g for $4.50 or 750 g for $6.30. Which is the better value?",
      steps: [
        "Find the price per 100 g of the small pack: 4.50 ÷ 5 = $0.90.",
        "Find the price per 100 g of the large pack: 6.30 ÷ 7.5 = $0.84.",
        "Compare the unit prices: $0.84 is less than $0.90.",
      ],
      answer: "The 750 g pack is better value at $0.84 per 100 g, saving 6 cents on every 100 g.",
    },
    mistakes: [
      "Mixing units — multiplying km/h by a time given in minutes.",
      "Averaging two speeds directly instead of using total distance ÷ total time.",
      "Assuming the larger pack is always the cheaper one per unit.",
    ],
    practice: [
      {
        question: "A car covers 150 km in 2.5 hours. What is its average speed?",
        options: ["50 km/h", "75 km/h", "60 km/h", "375 km/h"],
        answer: 2,
        explanation: "Speed = distance ÷ time = 150 ÷ 2.5 = 60 km/h.",
      },
      {
        question: "12 eggs cost $3.60 and 18 eggs cost $5.04. Which pack is cheaper per egg?",
        options: ["The 18-pack, at $0.28 each", "The 12-pack, at $0.30 each", "They cost the same per egg", "The 12-pack, at $0.28 each"],
        answer: 0,
        explanation: "3.60 ÷ 12 = $0.30 per egg, and 5.04 ÷ 18 = $0.28 per egg, so the 18-pack is cheaper.",
      },
      {
        question: "How long does it take to travel 45 km at 60 km/h?",
        options: ["30 minutes", "1 hour 15 minutes", "40 minutes", "45 minutes"],
        answer: 3,
        explanation: "Time = 45 ÷ 60 = 0.75 hours, which is 45 minutes.",
      },
      {
        question: "You drive 60 km at 30 km/h, then 60 km at 60 km/h. What is your average speed for the trip?",
        options: ["45 km/h", "40 km/h", "50 km/h", "90 km/h"],
        answer: 1,
        explanation: "The legs take 2 hours and 1 hour. Total distance ÷ total time = 120 ÷ 3 = 40 km/h — not the 45 you get by averaging the speeds.",
      },
    ],
  },
  {
    slug: "area-and-perimeter",
    title: "Area, Perimeter, and Measuring Space",
    category: "Geometry",
    level: "Beginner",
    readTime: "5 min",
    summary:
      "Buying paint, flooring, fencing, or fabric all comes down to two measurements people constantly mix up: the distance around a shape and the surface inside it.",
    keyIdea: "Perimeter measures the edge in plain units; area measures the surface in square units — they answer different questions.",
    formula: {
      expression: "rectangle: A = l × w,  P = 2(l + w)",
      note: "Triangle: A = ½ × base × height. Circle: A = πr² and circumference C = 2πr.",
    },
    sections: [
      {
        heading: "Around versus inside",
        body: [
          "Perimeter is the total length of a shape's boundary — what you need for fencing, skirting boards, or a picture frame. It is measured in ordinary length units such as metres.",
          "Area is how much flat surface a shape covers — what you need for paint, carpet, or turf. It is measured in square units such as m², because you are counting how many 1 × 1 squares fit inside.",
        ],
      },
      {
        heading: "How size scales",
        body: [
          "Doubling every side of a shape doubles its perimeter but multiplies its area by four, because both the length and the width have doubled. This is why a 40 cm pizza is four times the size of a 20 cm one, not twice.",
          "Two shapes can share a perimeter and have very different areas. With 20 m of fencing, a 5 × 5 square encloses 25 m², while a 9 × 1 strip encloses only 9 m².",
        ],
      },
    ],
    worked: {
      problem: "A room is 4 m by 5 m with a 1 m wide doorway. How much flooring and how much skirting board does it need?",
      steps: [
        "Flooring covers the surface, so find the area: 4 × 5 = 20 m².",
        "Skirting board runs around the edge, so find the perimeter: 2 × (4 + 5) = 18 m.",
        "No skirting board is needed across the doorway: 18 − 1 = 17 m.",
      ],
      answer: "20 m² of flooring and 17 m of skirting board.",
    },
    mistakes: [
      "Giving an area in plain metres instead of square metres.",
      "Using the slanted side of a triangle as its height — the height must be at a right angle to the base.",
      "Using the diameter where the circle formula asks for the radius.",
    ],
    practice: [
      {
        question: "What is the perimeter of a rectangle 7 m long and 3 m wide?",
        options: ["10 m", "21 m", "20 m", "42 m"],
        answer: 2,
        explanation: "P = 2 × (7 + 3) = 20 m. The 21 is the area in m², which is a different measurement.",
      },
      {
        question: "A triangle has a base of 10 cm and a height of 6 cm. What is its area?",
        options: ["30 cm²", "60 cm²", "16 cm²", "32 cm²"],
        answer: 0,
        explanation: "A = ½ × 10 × 6 = 30 cm².",
      },
      {
        question: "A circular table has a radius of 5 units. Roughly what is its area?",
        options: ["15.7 square units", "31.4 square units", "25 square units", "78.5 square units"],
        answer: 3,
        explanation: "A = πr² ≈ 3.14 × 5² = 3.14 × 25 = 78.5 square units.",
      },
      {
        question: "You double the side length of a square. What happens to its area?",
        options: ["It doubles", "It becomes 4 times larger", "It stays the same", "It becomes 8 times larger"],
        answer: 1,
        explanation: "Area depends on side × side, so doubling the side gives 2 × 2 = 4 times the area.",
      },
    ],
  },
  {
    slug: "linear-equations",
    title: "Linear Equations: Solving for the Unknown",
    category: "Algebra",
    level: "Intermediate",
    readTime: "6 min",
    summary:
      "Taxi fares, phone plans, and hourly wages all follow the same pattern — a fixed starting amount plus a steady rate — and one equation describes them all.",
    relatedCalculator: "basic",
    keyIdea: "An equation is a balance: do the same thing to both sides and it stays true, until the unknown stands alone.",
    formula: {
      expression: "y = mx + b",
      note: "b is the starting amount, m is the rate of change per unit of x, and y is the total.",
    },
    sections: [
      {
        heading: "Keeping the balance",
        body: [
          "Solving an equation means undoing whatever has been done to the unknown, one step at a time, in reverse order. If x was multiplied by 3 and then had 5 added, you subtract 5 first and then divide by 3.",
          "Every step must be applied to both sides. Subtract 5 from the left and you must subtract 5 from the right — that is what keeps the two sides equal.",
        ],
      },
      {
        heading: "Fixed cost plus a rate",
        body: [
          "In y = mx + b, the b is what you pay before anything happens: a call-out fee, a joining fee, a base fare. The m is how much each extra unit adds: per kilometre, per month, per hour.",
          "On a graph this is a straight line. b is where the line crosses the vertical axis, and m is its slope — how steeply the total climbs for every step along x.",
        ],
      },
    ],
    worked: {
      problem: "A taxi charges a $3 base fare plus $2 per kilometre. Your fare was $17. How far did you travel?",
      steps: [
        "Write the equation with x as the distance in km: 3 + 2x = 17.",
        "Subtract 3 from both sides: 2x = 14.",
        "Divide both sides by 2: x = 7.",
        "Check: 3 + 2 × 7 = 17. ✓",
      ],
      answer: "You travelled 7 kilometres.",
    },
    mistakes: [
      "Changing only one side of the equation.",
      "Dividing before removing the added constant, without dividing every term.",
      "Dropping a negative sign when expanding brackets such as 2(x − 4).",
    ],
    practice: [
      {
        question: "Solve 3x + 5 = 20.",
        options: ["x = 3", "x = 5", "x = 15", "x = 25/3"],
        answer: 1,
        explanation: "Subtract 5 from both sides to get 3x = 15, then divide by 3: x = 5.",
      },
      {
        question: "Solve 2(x − 4) = 10.",
        options: ["x = 7", "x = 3", "x = 9", "x = 1"],
        answer: 2,
        explanation: "Divide both sides by 2 to get x − 4 = 5, then add 4: x = 9.",
      },
      {
        question: "What is the slope of the line y = 4x − 7?",
        options: ["4", "−7", "7", "−4"],
        answer: 0,
        explanation: "In y = mx + b the slope is m, the number multiplying x — here, 4. The −7 is where the line crosses the y-axis.",
      },
      {
        question: "A gym charges a $25 joining fee plus $15 a month. You have paid $115 in total. How many months is that?",
        options: ["5 months", "7 months", "9 months", "6 months"],
        answer: 3,
        explanation: "25 + 15x = 115, so 15x = 90 and x = 6 months.",
      },
    ],
  },
  {
    slug: "exponents-and-scientific-notation",
    title: "Exponents and Scientific Notation",
    category: "Foundations",
    level: "Intermediate",
    readTime: "6 min",
    summary:
      "From the distance to the Sun to the width of a virus, powers of ten let scientists write impossibly large and small numbers in a few characters.",
    relatedCalculator: "scientific",
    keyIdea: "An exponent counts repeated multiplication, and scientific notation uses powers of ten to keep huge and tiny numbers readable.",
    formula: {
      expression: "a^m × a^n = a^(m+n)",
      note: "Also a^m ÷ a^n = a^(m−n), (a^m)^n = a^(mn), and a⁰ = 1 for any non-zero a.",
    },
    sections: [
      {
        heading: "Repeated multiplication",
        body: [
          "2⁵ means five 2s multiplied together: 2 × 2 × 2 × 2 × 2 = 32. The small raised number is the exponent, and it counts how many times the base appears.",
          "Because exponents count factors, multiplying two powers of the same base just adds the counts: 10³ × 10⁴ is three tens times four tens — seven tens, or 10⁷.",
        ],
      },
      {
        heading: "Writing very large and very small numbers",
        body: [
          "Scientific notation writes a number as a value between 1 and 10 multiplied by a power of ten. 4,500,000 becomes 4.5 × 10⁶, because the decimal point moves six places.",
          "Negative exponents handle small numbers the same way: 0.003 is 3 × 10⁻³. Calculators show this as 'E' notation, so 4.5E6 means 4.5 × 10⁶.",
        ],
      },
    ],
    worked: {
      problem: "Light travels about 3 × 10⁸ metres per second and takes roughly 5 × 10² seconds to reach Earth from the Sun. How far away is the Sun?",
      steps: [
        "Distance = speed × time = (3 × 10⁸) × (5 × 10²).",
        "Multiply the leading numbers: 3 × 5 = 15.",
        "Add the exponents of ten: 10⁸ × 10² = 10¹⁰.",
        "Rewrite 15 × 10¹⁰ with a leading number between 1 and 10: 1.5 × 10¹¹.",
      ],
      answer: "About 1.5 × 10¹¹ metres — roughly 150 million kilometres.",
    },
    mistakes: [
      "Reading 2⁵ as 2 × 5 = 10 instead of 2 multiplied by itself five times.",
      "Multiplying the exponents when multiplying powers — they are added.",
      "Thinking anything to the power of zero is 0; it is 1.",
    ],
    practice: [
      {
        question: "What is 2⁵?",
        options: ["10", "25", "32", "64"],
        answer: 2,
        explanation: "2 × 2 × 2 × 2 × 2 = 32.",
      },
      {
        question: "Simplify 10³ × 10⁴.",
        options: ["10⁷", "10¹²", "100⁷", "20⁷"],
        answer: 0,
        explanation: "Same base, so add the exponents: 3 + 4 = 7.",
      },
      {
        question: "Write 4,500,000 in scientific notation.",
        options: ["45 × 10⁶", "4.5 × 10⁵", "0.45 × 10⁶", "4.5 × 10⁶"],
        answer: 3,
        explanation: "Move the decimal point six places to the left to get 4.5, so the power of ten is 6.",
      },
      {
        question: "What is 5⁰?",
        options: ["0", "1", "5", "Undefined"],
        answer: 1,
        explanation: "Any non-zero number raised to the power of 0 equals 1.",
      },
    ],
  },
  {
    slug: "order-of-operations",
    title: "Order of Operations: Why 2 + 3 × 4 Isn't 20",
    category: "Foundations",
    level: "Beginner",
    readTime: "4 min",
    summary:
      "The same string of numbers can give two different answers depending on the order you work in — so everyone, including your calculator, follows one agreed order.",
    relatedCalculator: "basic",
    keyIdea: "Brackets first, then powers, then multiplication and division, then addition and subtraction — working left to right within each level.",
    formula: {
      expression: "( )  →  xⁿ  →  × ÷  →  + −",
      note: "Multiplication and division share one level, as do addition and subtraction. Within a level, work from left to right.",
    },
    sections: [
      {
        heading: "One agreed order",
        body: [
          "Without a rule, 2 + 3 × 4 could mean 20 or 14. The convention — often remembered as PEMDAS or BODMAS — says multiplication comes before addition, so the answer is 2 + 12 = 14.",
          "Brackets override everything. If you really mean 'add first', write (2 + 3) × 4 = 20. Brackets are how you tell the reader, or the calculator, exactly what you intend.",
        ],
      },
      {
        heading: "The left-to-right detail",
        body: [
          "PEMDAS does not mean multiplication always beats division. They sit on the same level and are worked left to right, so 20 ÷ 4 × 5 is (20 ÷ 4) × 5 = 25, not 20 ÷ 20 = 1.",
          "Scientific calculators and spreadsheets apply these rules automatically. Some very basic calculators work strictly in the order you press the keys, which is why the same sum can give two different results on two devices.",
        ],
      },
    ],
    worked: {
      problem: "Evaluate 8 + 2 × (6 − 1)² ÷ 5.",
      steps: [
        "Brackets first: 6 − 1 = 5, giving 8 + 2 × 5² ÷ 5.",
        "Powers next: 5² = 25, giving 8 + 2 × 25 ÷ 5.",
        "Multiply and divide, left to right: 2 × 25 = 50, then 50 ÷ 5 = 10.",
        "Add last: 8 + 10 = 18.",
      ],
      answer: "18.",
    },
    mistakes: [
      "Working strictly left to right and adding before multiplying.",
      "Treating multiplication as higher priority than division, instead of going left to right.",
      "Squaring a whole expression when the power applies only to the bracket or number it sits on.",
    ],
    practice: [
      {
        question: "What is 6 + 4 × 2?",
        options: ["20", "14", "16", "12"],
        answer: 1,
        explanation: "Multiply first: 4 × 2 = 8, then 6 + 8 = 14.",
      },
      {
        question: "What is (6 + 4) × 2?",
        options: ["14", "16", "12", "20"],
        answer: 3,
        explanation: "The brackets come first: 6 + 4 = 10, then 10 × 2 = 20.",
      },
      {
        question: "What is 20 ÷ 4 × 5?",
        options: ["25", "1", "4", "100"],
        answer: 0,
        explanation: "Division and multiplication share a level, so go left to right: 20 ÷ 4 = 5, then 5 × 5 = 25.",
      },
      {
        question: "What is 3 + 2² × 5?",
        options: ["125", "35", "23", "25"],
        answer: 2,
        explanation: "Power first: 2² = 4. Then multiply: 4 × 5 = 20. Then add: 3 + 20 = 23.",
      },
    ],
  },
];

export function getConcept(slug: string): Concept | undefined {
  return concepts.find((c) => c.slug === slug);
}

export const practiceQuestionCount = concepts.reduce(
  (total, c) => total + c.practice.length,
  0
);
