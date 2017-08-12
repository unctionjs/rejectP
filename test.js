/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {test} from "tap"

import reduceWithValueKey from "./source"

test(({equal}) => {
  return rejectP("a")
    .catch((value) => equal(value, "a"))
})
