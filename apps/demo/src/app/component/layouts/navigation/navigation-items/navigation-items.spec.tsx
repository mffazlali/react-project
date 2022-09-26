import { render } from '@testing-library/react';

import NavigationItems from './navigation-items';

describe('NavigationItems', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NavigationItems />);
    expect(baseElement).toBeTruthy();
  });
});
