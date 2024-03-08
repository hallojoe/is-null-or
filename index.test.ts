import { isNullOrEmpty, isNullOrWhitespace } from "./index"

// Test suite for isNullOrEmpty function
describe("isNullOrEmpty function", () => {
  // Test case for null value
  test("returns true for null", () => {
    expect(isNullOrEmpty(null)).toBe(true)
  })

  // Test case for empty string
  test("returns true for empty string", () => {
    expect(isNullOrEmpty("")).toBe(true)
  })

  // Test case for undefined value
  test("returns true for undefined", () => {
    expect(isNullOrEmpty(undefined)).toBe(true)
  })

  // Test case for empty array
  test("returns true for empty array", () => {
    expect(isNullOrEmpty([])).toBe(true)
  })

  // Test case for empty object
  test("returns true for empty object", () => {
    expect(isNullOrEmpty({})).toBe(true)
  })

  // Test case for non-empty string
  test("returns false for non-empty string", () => {
    expect(isNullOrEmpty("hello")).toBe(false)
  })

  // Test case for non-empty array
  test("returns false for non-empty array", () => {
    expect(isNullOrEmpty([1, 2, 3])).toBe(false)
  })

  // Test case for non-empty object
  test("returns false for non-empty object", () => {
    expect(isNullOrEmpty({a: 1})).toBe(false)
  })
})

// Test suite for isNullOrWhitespace function
describe("isNullOrWhitespace function", () => {
  // Test case for null value
  test("returns true for null", () => {
    expect(isNullOrWhitespace(null)).toBe(true)
  })

  // Test case for undefined value
  test("returns true for undefined", () => {
    expect(isNullOrWhitespace(undefined)).toBe(true)
  })

  // Test case for empty string
  test("returns true for empty string", () => {
    expect(isNullOrWhitespace("")).toBe(true)
  })

  // Test case for string with whitespace
  test("returns true for string with whitespace", () => {
    expect(isNullOrWhitespace("   ")).toBe(true)
  })

  // Test case for non-empty string
  test("returns false for non-empty string", () => {
    expect(isNullOrWhitespace("hello")).toBe(false)
  })

  // Test case for non-empty string with whitespace
  test("returns false for non-empty string with whitespace", () => {
    expect(isNullOrWhitespace("   hello   ")).toBe(false)
  })

  // Test case for non-string value
  test("returns result of isNullOrEmpty for non-string value", () => {
    expect(isNullOrWhitespace([1, 2, 3])).toBe(false) // Array is not whitespace
    expect(isNullOrWhitespace({})).toBe(true) // Empty object is whitespace
  })
  
})