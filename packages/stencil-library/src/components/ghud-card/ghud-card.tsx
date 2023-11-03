import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'ghud-card',
  styleUrl: 'ghud-card.scss',
  shadow: true,
})
export class GhudCard {
  render() {
    return (
      <Host>
        <div class="mdc-card">
          <div class="ghud-card__content">
            <slot name="non-actionable-content"></slot>
          </div>
          <div class="mdc-card__primary-action" tabIndex={0}>
            <slot name="actionable-content"></slot>
          </div>
        </div>
      </Host>
    );
  }
}
