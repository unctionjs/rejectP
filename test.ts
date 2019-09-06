
import rejectP from "./index.ts";

test(() => {
  return rejectP("a")
    .catch((value) => expect(value).toBe("a"));
});
