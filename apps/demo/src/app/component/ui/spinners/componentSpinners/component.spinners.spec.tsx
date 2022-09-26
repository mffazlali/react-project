import { render } from '@testing-library/react';

import ComponentSpinners from './component.spinners';

describe('ComponentSpinners', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ComponentSpinners />);
    expect(baseElement).toBeTruthy();
  });
});
