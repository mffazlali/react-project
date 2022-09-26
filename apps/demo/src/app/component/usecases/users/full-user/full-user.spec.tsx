import { render } from '@testing-library/react';

import FullUser from './full-user';

describe('FullUser', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FullUser />);
    expect(baseElement).toBeTruthy();
  });
});
