import { render } from '@testing-library/react';

import ServiceSpinners from './service.spinners';

describe('ServiceSpinners', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ServiceSpinners />);
    expect(baseElement).toBeTruthy();
  });
});
