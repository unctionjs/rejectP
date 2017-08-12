/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {test} from "tap"

import rejectP from "./source"

test(({equal}) => {
  return rejectP("a")
    .catch((value) => equal(value, "a"))
})
