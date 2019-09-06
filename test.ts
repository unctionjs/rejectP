
import rejectP from "./index";

test("works", () => {
  return rejectP("a")
    .catch((value) => expect(value).toBe("a"));
});
