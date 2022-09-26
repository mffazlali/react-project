import { render } from '@testing-library/react';

import ShowUser from './show-user';

describe('ShowUser', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ShowUser />);
    expect(baseElement).toBeTruthy();
  });
});
