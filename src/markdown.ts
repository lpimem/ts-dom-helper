
/**
 * Unsafely generating markdown formatted text
 * https://guides.github.com/features/mastering-markdown/#syntax
 */

export function h(level: number, text: string): string {
  return `${repeat('#', level)} ${text}`;
}

export function em(text: string): string{
  return `_${text}_`;
}

export function link(text: string, link:string): string{
  return `[${text}](${link})`;
}

export function ul(items: string[], level: number = 0): string{
  let md = "";
  for (let item of items){
    md += `${repeat("  ", level)}* ${item}\r\n`
  }
  return md;
}

/**
 * Reference:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat#Polyfill
 * @param text text to repeat 
 * @param count time to repeat
 */
function repeat(text: string, count: number): string{
  if (text == null){
    throw new Error("cannot repeat null");
  }
  let str = "" + text;
  if (count < 0){
    throw new Error("Cannot repeat negative times");
  }
  if (count == Infinity){
    throw new Error("Cannot repeat infinite times");
  }
  count = Math.floor(count);
  if (str.length == 0 || count == 0){
    return ""
  }
  if (str.length * count >= 1 << 28){
    throw new RangeError("repeat count must not overflow maximum string size");
  }
  let rpt = '';
  for (;;){
    if ((count & 1) == 1){
      rpt += str;
    }
    count >>>= 1;
    if (count == 0){
      break;
    }
    str += str;
  }
  return rpt;
}