import { render } from '@testing-library/react';

import NewUser from './new-user';

describe('NewUser', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NewUser />);
    expect(baseElement).toBeTruthy();
  });
});
