export function formatCurrency(amount, locale = 'en-KE', currency = 'KES') {
    const formatter = new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 2
    });
    return formatter.format(amount);
  }
  