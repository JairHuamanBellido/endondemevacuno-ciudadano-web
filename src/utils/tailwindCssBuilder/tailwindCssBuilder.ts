export default function tailwindCssBuilder(...classNames: string[]): string {
  return classNames.join(" ");
}
