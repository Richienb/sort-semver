"use strict"

const semver = require("semver")
const cleanSemver = require("clean-semver")

module.exports = (versions) => versions.map(cleanSemver).sort(semver.rcompare)
