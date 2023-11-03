import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { GhudCard } from '../ghud-card';

describe('ghud-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GhudCard],
      template: () => <ghud-card></ghud-card>,
    });
    expect(page.root).toBeTruthy();
  });

  it('should use material design card', async () => {
    const page = await newSpecPage({
      components: [GhudCard],
      template: () => <ghud-card></ghud-card>,
    });

    const materialDesignCard = page.root.shadowRoot.querySelector('div.mdc-card');

    expect(materialDesignCard).toBeTruthy();
  });

  it('should have an optional non-actionable content area', async () => {
    const page = await newSpecPage({
      components: [GhudCard],
      template: () => (
        <ghud-card>
          <div slot="non-actionable-content">hello</div>
        </ghud-card>
      ),
    });

    const nonActionableContent = page.root.querySelector('div[slot="non-actionable-content"]');

    expect(nonActionableContent.textContent).toEqual('hello');
  });

  it('should have an optional actionable section', async () => {
    const page = await newSpecPage({
      components: [GhudCard],
      template: () => (
        <ghud-card>
          <div slot="primary-action">hello</div>
        </ghud-card>
      ),
    });

    const actionableArea = page.root.shadowRoot.querySelector('div.mdc-card__primary-action');

    expect(actionableArea).toBeTruthy();
  });
});
