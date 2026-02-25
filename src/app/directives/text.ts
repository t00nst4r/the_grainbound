import {computed, Directive, input} from '@angular/core';

type TextRole = 'h1' | 'h2' | 'h3' | 'body' | 'note' | 'nav';

@Directive({
  selector: '[gbText]',
  standalone: true,
  host: {
    '[class]': 'classes()'
  }
})
export class TextDirective {
  role = input.required<TextRole>({ alias: 'gbText' });

  protected classes = computed(() => {
    const roleMap: Record<TextRole, string> = {
      h1: 'font-display [font-size:var(--text-4xl)] tracking-tighter leading-tight uppercase',
      h2: 'font-display [font-size:var(--text-2xl)] tracking-normal leading-snug uppercase',
      h3: 'font-display [font-size:var(--text-xl)] tracking-wide leading-none uppercase',
      body: 'font-serif [font-size:var(--text-base)] leading-relaxed',
      note: 'font-serif italic [font-size:var(--text-sm)] opacity-70',
      nav: 'font-display [font-size:var(--text-sm)] tracking-widest uppercase'
    };

    return roleMap[this.role()];
  });
}
