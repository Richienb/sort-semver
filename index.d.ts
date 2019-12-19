/**
 * Sort semver-compatible versions.
 * @param versions The versions to sort.
 * @example
 * ```
 * const sortVersions = require("sort-versions");
 *
 * sortVersions(["v1", "0.0", " v2a "]);
 * //=> [ '2.0.0', '1.0.0', '0.0.0' ]
 * ```
*/
declare function sortVersions(versions: string[]): string[];

export = sortVersions;
