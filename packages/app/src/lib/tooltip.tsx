import Tippy, { useSingleton } from '@tippyjs/react';
import { createContext, ReactNode, useCallback, useContext } from 'react';
import { followCursor, Plugin } from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';
import { assert } from '~/utils/assert';

/**
 * These TooltipProps can be extended by any prop of the TippyProps, but for now
 * we'll limit all this flexibility to prevent vendor lock-in and potential
 * issues.. Let's keep it simple.
 */
type TooltipProps = {
  content?: ReactNode;
  followCursor?: boolean;
  children?: React.ReactElement;
};

const tooltipContext = createContext<
  ((props: TooltipProps) => JSX.Element) | undefined
>(undefined);

export function TooltipContext({ children }: { children: ReactNode }) {
  const [source, target] = useSingleton();
  const [followCursorSource, followCursorTarget] = useSingleton();

  const Tooltip = useCallback(
    (props: TooltipProps) => {
      const plugins: Plugin[] = [];

      if (props.followCursor) plugins.push(followCursor);

      return (
        <Tippy
          singleton={props.followCursor ? followCursorTarget : target}
          plugins={plugins}
          {...props}
          followCursor={!!props.followCursor}
        />
      );
    },
    [target, followCursorTarget]
  );

  return (
    <tooltipContext.Provider value={Tooltip}>
      {children}
      <Tippy singleton={source} theme="light" />
      <Tippy
        theme="light"
        singleton={followCursorSource}
        plugins={[followCursor]}
        followCursor
      />
    </tooltipContext.Provider>
  );
}

/**
 * Returns a Tooltip-component which can be wrapped around components which
 * should show a tooltip during mouseover.
 */
export function useTooltip() {
  const Tooltip = useContext(tooltipContext);

  assert(Tooltip, 'missing TooltipContext in component tree');

  return Tooltip;
}
