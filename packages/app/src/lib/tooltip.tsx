import Tippy, { TippyProps } from '@tippyjs/react';
import { Instance } from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';

let handleMount: undefined | ((tippyInstance: Instance) => void);

/**
 * Currently we'll only support the `content` prop of the tippy tooltip, but a
 * lot more should be possible if necessary.
 *
 * Usage:
 *
 *     <WithTooltip content={<p>message</p>}><button>foo</button></WithTooltip>
 */
type TooltipProps = Pick<TippyProps, 'children' | 'content'>;

export function WithTooltip({ children, content }: TooltipProps) {
  return (
    <Tippy theme="light" content={content} onMount={handleMount}>
      {children}
    </Tippy>
  );
}

if (process.env.NODE_ENV !== 'production') {
  /**
   * This entire block won't be part of a production build
   */
  const isFocusableSelector =
    'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"]):not([disabled]), details:not([disabled]), summary:not(:disabled)';

  handleMount = function reportIsFocusable(tippyInstance: Instance) {
    const { reference } = tippyInstance;

    if (!reference.matches(isFocusableSelector)) {
      console.error({ tippyInstance, reference });
      throw new Error(
        `A tooltip has been wrapped around an element which cannot receive focus state. Please make it focusable for a11y by setting tabIndex={0}`
      );
    }
  };
}