
function round(num) {
  return Math.round(num);
}

test('round 2.6 to equal 3', () => {
  expect(round(2.6)).toBe(3);
});