export function truncateText(text: string, maxLength: number = 34): string {
  return text.length > maxLength ? `${text.slice(0, maxLength)}....` : text;
}
