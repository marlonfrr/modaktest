// Util to remove HTML tags from a string
export const removeHtmlTags = (str: string) => str?.replace(/<[^>]*>?/gm, '');
