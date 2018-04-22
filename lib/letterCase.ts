/**
 * 'camelCase', 'CamelCase' to 'keb-case'.
 * @param camel begin with letter
 */
export function camelKeb(camel: string): string{
    return camel.replace(/([A-Z])/g, '-$1').toLowerCase();
}

/**
 * 'keb-case' to 'camelCase'
 * @param keb begin with letter
 * @param pascal, whether to pascal case: 'keb-case' -> 'KebCase', false default.
 */
export function kebCamel(keb: string, pascal = false): string{
    let str = keb.replace(/-([a-z])/g, function(m, c: string){ return c.toLocaleUpperCase() });
    pascal && (str = str[0].toUpperCase + str.slice(1));
    return str;
}
