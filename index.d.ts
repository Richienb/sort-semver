/**
 * Sort semver-compatible versions.
 * @param versions The versions to sort.
 * @example
 * ```
 * const sortsemver = require("sort-semver");
 *
 * sortsemver(["v1", "0.0", " v2a "]);
 * //=> [ '2.0.0', '1.0.0', '0.0.0' ]
 * ```
*/
declare function sortSemver(versions: string[]): string[];

export = sortSemver;
