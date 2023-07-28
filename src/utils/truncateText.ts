export function truncateText(description: string, maxWords: number): string {
  // Split the description into words using whitespace as a delimiter
  const words = description.split(/\s+/);

  // If the description has fewer than or equal to maxWords, return the original description
  if (words.length <= maxWords) {
    return description;
  }

  // Take only the first maxWords words and join them back into a string
  const truncatedDescription = words.slice(0, maxWords).join(" ");

  // Add "..." at the end of the truncated description
  return truncatedDescription + "...";
}
