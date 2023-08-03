import {CartForm} from '@shopify/hydrogen';

import {Button} from '~/components';

export function AddToCartButton({
  children,
  lines,
  className = '',
  variant = 'primary',
  width = 'full',
  disabled,
  analytics,
  ...props
}) {
  return (
    <CartForm
      route="/cart"
      inputs={{
        lines,
      }}
      action={CartForm.ACTIONS.LinesAdd}
    >
      {(fetcher) => (
        <>
          <input
            type="hidden"
            name="analytics"
            value={JSON.stringify(analytics)}
          />
          <Button
            as="button"
            type="submit"
            width={width}
            variant={variant}
            className={className}
            disabled={disabled ?? fetcher.state !== 'idle'}
            {...props}
          >
            {children}
          </Button>
        </>
      )}
    </CartForm>
  );
}
