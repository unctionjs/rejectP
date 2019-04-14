/* eslint-disable flowtype/require-return-type */
import {test} from "tap";

import rejectP from "./index";

test(({equal}) => {
  return rejectP("a")
    .catch((value) => equal(value, "a"));
});
