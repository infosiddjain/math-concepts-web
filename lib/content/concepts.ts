export interface ConceptSection {
  heading: string;
  body: string[];
}

export interface Concept {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  summary: string;
  relatedCalculator?: string;
  keyIdea: string;
  sections: ConceptSection[];
  worked: {
    problem: string;
    steps: string[];
    answer: string;
  };
}

export const concepts: Concept[] = [
  {
    slug: "compound-interest",
    title: "Compound Interest & the Power of Growth",
    category: "Finance",
    readTime: "6 min",
    summary:
      "Why money left to grow multiplies faster than intuition suggests, and how banks, loans, and investments all run on this one formula.",
    relatedCalculator: "scientific",
    keyIdea: "Interest earned on interest grows a balance exponentially, not in a straight line.",
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
  },
  {
    slug: "percentages-everyday-life",
    title: "Percentages You Actually Use Every Day",
    category: "Everyday Math",
    readTime: "5 min",
    summary:
      "Tips, discounts, sales tax, and pay raises are all the same three percentage relationships in disguise.",
    relatedCalculator: "percentage",
    keyIdea: "Every percentage problem is really just part ÷ whole × 100 — read backwards or forwards.",
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
  },
  {
    slug: "ratios-and-scale",
    title: "Ratios, Proportions, and Scale",
    category: "Foundations",
    readTime: "5 min",
    summary:
      "Recipes, maps, paint mixing, and architectural models all rely on keeping one relationship constant while everything else changes size.",
    relatedCalculator: "ratio-proportion",
    keyIdea: "A ratio describes a relationship, not a fixed amount — scale both sides together and the relationship holds.",
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
  },
  {
    slug: "pythagorean-theorem",
    title: "The Pythagorean Theorem in the Real World",
    category: "Geometry",
    readTime: "5 min",
    summary:
      "A 2,500-year-old formula still used daily by carpenters, surveyors, and navigators to guarantee a perfect right angle or shortest path.",
    keyIdea: "In any right triangle, the square of the hypotenuse equals the sum of the squares of the other two sides: a² + b² = c².",
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
  },
  {
    slug: "understanding-probability",
    title: "Understanding Probability and Risk",
    category: "Statistics",
    readTime: "6 min",
    summary:
      "From weather forecasts to insurance pricing, probability turns uncertainty into a number you can actually plan around.",
    keyIdea: "Probability is a fraction between 0 and 1: favorable outcomes divided by all possible outcomes.",
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
  },
  {
    slug: "fractions-in-practice",
    title: "Fractions in Cooking, Construction, and Time",
    category: "Foundations",
    readTime: "5 min",
    summary:
      "Halving a recipe, cutting a board, or reading a clock face are all fraction problems most people solve without realizing it.",
    relatedCalculator: "fraction",
    keyIdea: "A fraction is division waiting to happen — the line between numerator and denominator always means 'divided by'.",
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
  },
];

export function getConcept(slug: string): Concept | undefined {
  return concepts.find((c) => c.slug === slug);
}
