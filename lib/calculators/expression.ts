// A small, safe recursive-descent parser/evaluator for arithmetic expressions.
// Supports + - * / % ^, parentheses, decimals, and unary minus. No eval().

type TokenType = "number" | "op" | "lparen" | "rparen" | "end";

interface Token {
  type: TokenType;
  value: string;
}

function tokenize(input: string): Token[] {
  const tokens: Token[] = [];
  let i = 0;
  const src = input.replace(/×/g, "*").replace(/÷/g, "/").replace(/−/g, "-");

  while (i < src.length) {
    const ch = src[i];

    if (ch === " " || ch === "\t") {
      i++;
      continue;
    }

    if (/[0-9.]/.test(ch)) {
      let j = i;
      while (j < src.length && /[0-9.]/.test(src[j])) j++;
      const numStr = src.slice(i, j);
      if ((numStr.match(/\./g) || []).length > 1) {
        throw new Error("Invalid number format");
      }
      tokens.push({ type: "number", value: numStr });
      i = j;
      continue;
    }

    if ("+-*/%^".includes(ch)) {
      tokens.push({ type: "op", value: ch });
      i++;
      continue;
    }

    if (ch === "(") {
      tokens.push({ type: "lparen", value: ch });
      i++;
      continue;
    }

    if (ch === ")") {
      tokens.push({ type: "rparen", value: ch });
      i++;
      continue;
    }

    throw new Error(`Unexpected character: ${ch}`);
  }

  tokens.push({ type: "end", value: "" });
  return tokens;
}

class Parser {
  private tokens: Token[];
  private pos = 0;

  constructor(tokens: Token[]) {
    this.tokens = tokens;
  }

  private peek(): Token {
    return this.tokens[this.pos];
  }

  private consume(): Token {
    return this.tokens[this.pos++];
  }

  parse(): number {
    const value = this.parseExpression();
    if (this.peek().type !== "end") {
      throw new Error("Unexpected token");
    }
    return value;
  }

  private parseExpression(): number {
    let left = this.parseTerm();
    while (this.peek().type === "op" && (this.peek().value === "+" || this.peek().value === "-")) {
      const op = this.consume().value;
      const right = this.parseTerm();
      left = op === "+" ? left + right : left - right;
    }
    return left;
  }

  private parseTerm(): number {
    let left = this.parsePower();
    while (
      this.peek().type === "op" &&
      (this.peek().value === "*" || this.peek().value === "/" || this.peek().value === "%")
    ) {
      const op = this.consume().value;
      const right = this.parsePower();
      if (op === "*") left = left * right;
      else if (op === "/") {
        if (right === 0) throw new Error("Division by zero");
        left = left / right;
      } else {
        left = left % right;
      }
    }
    return left;
  }

  private parsePower(): number {
    const base = this.parseUnary();
    if (this.peek().type === "op" && this.peek().value === "^") {
      this.consume();
      const exponent = this.parsePower();
      return Math.pow(base, exponent);
    }
    return base;
  }

  private parseUnary(): number {
    if (this.peek().type === "op" && this.peek().value === "-") {
      this.consume();
      return -this.parseUnary();
    }
    if (this.peek().type === "op" && this.peek().value === "+") {
      this.consume();
      return this.parseUnary();
    }
    return this.parsePrimary();
  }

  private parsePrimary(): number {
    const token = this.peek();

    if (token.type === "number") {
      this.consume();
      return parseFloat(token.value);
    }

    if (token.type === "lparen") {
      this.consume();
      const value = this.parseExpression();
      if (this.peek().type !== "rparen") {
        throw new Error("Missing closing parenthesis");
      }
      this.consume();
      return value;
    }

    throw new Error("Unexpected token in expression");
  }
}

export function evaluateExpression(input: string): number {
  const trimmed = input.trim();
  if (!trimmed) return 0;
  const tokens = tokenize(trimmed);
  const parser = new Parser(tokens);
  const result = parser.parse();
  if (!Number.isFinite(result)) {
    throw new Error("Result is not finite");
  }
  return result;
}
