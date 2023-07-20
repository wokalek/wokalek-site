declare module 'clipboard/src/actions/copy' {
  export default function ClipboardActionCopy(target: string | HTMLElement, options?: object = { container: document.body }): string
}
