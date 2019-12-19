import test from "ava"
import sortSemver from "."

test("main", (t) => {
    t.deepEqual(sortSemver(["v1", "0.0", " v2a "]), ["2.0.0", "1.0.0", "0.0.0"])
})
