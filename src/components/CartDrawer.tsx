import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Plus, Minus, X, Tag } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const CartDrawer = () => {
  const { t } = useTranslation();
  const { items, totalItems, subtotal, discount, total, isNewUser, updateQuantity, removeFromCart, clearCart, formatPrice } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      alert(t('cart.confirm'));
      clearCart();
      setIsCheckingOut(false);
    }, 1500);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="p-2 hover:bg-secondary rounded-full transition-colors relative">
          <ShoppingBag className="w-5 h-5" />
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-gold text-primary text-xs font-body rounded-full flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md flex flex-col">
        <SheetHeader>
          <SheetTitle className="font-display text-2xl">{t('cart.title')}</SheetTitle>
        </SheetHeader>

        {isNewUser && items.length > 0 && (
          <div className="bg-gold/10 border border-gold/30 rounded-sm p-3 flex items-center gap-2 mt-4">
            <Tag className="w-4 h-4 text-gold" />
            <p className="font-body text-sm text-foreground">
              <span className="font-semibold">10%</span> {t('cart.discountApplied')}
            </p>
          </div>
        )}

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center py-12">
            <ShoppingBag className="w-16 h-16 text-muted-foreground/30 mb-4" />
            <p className="font-display text-xl mb-2">{t('cart.empty')}</p>
            <p className="font-body text-sm text-muted-foreground">{t('cart.emptyDesc')}</p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto py-4 space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 p-3 bg-secondary/30 rounded-sm">
                  <img src={item.image} alt={item.name} className="w-20 h-24 object-cover rounded-sm" />
                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-display text-lg">{item.name}</h4>
                        <p className="font-body text-xs text-muted-foreground">{item.subtitle}</p>
                      </div>
                      <button onClick={() => removeFromCart(item.id)} className="p-1 hover:bg-secondary rounded-full transition-colors">
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="mt-auto flex justify-between items-center">
                      <div className="flex items-center gap-2 bg-background rounded-sm">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-1 hover:bg-secondary transition-colors">
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="font-body text-sm w-6 text-center">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1 hover:bg-secondary transition-colors">
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="font-body text-sm">{formatPrice(item.price * item.quantity)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-4 space-y-3">
              <div className="flex justify-between font-body text-sm">
                <span className="text-muted-foreground">{t('cart.subtotal')}</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              {isNewUser && discount > 0 && (
                <div className="flex justify-between font-body text-sm text-gold">
                  <span>{t('cart.discountLine')}</span>
                  <span>-{formatPrice(discount)}</span>
                </div>
              )}
              <div className="flex justify-between font-display text-lg pt-2 border-t border-border">
                <span>{t('cart.total')}</span>
                <span>{formatPrice(total)}</span>
              </div>
              <Button onClick={handleCheckout} disabled={isCheckingOut} className="w-full font-body text-sm tracking-widest uppercase py-6 mt-4">
                {isCheckingOut ? t('cart.processing') : t('cart.checkout')}
              </Button>
              <p className="font-body text-xs text-center text-muted-foreground">{t('cart.freeShip')}</p>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
