import test from "ava"
import sortVersions from "."

test("main", (t) => {
    t.deepEqual(sortVersions(["v1", "0.0", " v2a "]), ["2.0.0", "1.0.0", "0.0.0"])
})
