export function isNullOrUndefined<T>(value: T | undefined): NonNullable<T> {
    if (value === undefined || value === null) {
        throw new Error(`Error: ${value}`);
    } else return value;
}
