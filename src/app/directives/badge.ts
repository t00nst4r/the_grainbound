import {computed, Directive, input} from '@angular/core';

type BadgeVariant = 'primary' | 'success' | 'warning' | 'info' | 'outline';

@Directive({
  selector: '[gbBadge]',
  standalone: true,
  host: {
    '[class]': 'classes()'
  }
})
export class Badge {
  variant = input<BadgeVariant>('primary');

  protected classes = computed(() => {
    const base = 'inline-flex items-center px-2 py-0.5 rounded-full font-display [font-size:10px] uppercase tracking-widest border transition-colors';

    const variants: Record<BadgeVariant, string> = {
      primary: 'bg-(--color-brand-primary) text-white border-transparent',
      success: 'bg-(--color-status-success) text-white border-transparent',
      warning: 'bg-(--color-status-warning) text-white border-transparent',
      info: 'bg-(--color-status-info) text-white border-transparent',
      outline: 'bg-transparent text-(--color-ink-muted) border-(--color-ink-muted)/30'
    };

    return `${base} ${variants[this.variant()]}`;
  });
}
