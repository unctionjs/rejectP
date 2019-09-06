
import rejectP from "./index";

test(() => {
  return rejectP("a")
    .catch((value) => expect(value).toBe("a"));
});
