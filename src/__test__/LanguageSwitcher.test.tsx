/* core */
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
/* components */
import { LanguageSwitcher } from '@/common/components/LanguageSwitcher/LanguageSwitcher';

jest.mock('next/navigation', () => {
  return {
    useRouter: () => ({
      push: mockPush,
    }),
    usePathname: () => mockPathname,
  };
});

const mockPush = jest.fn();
let mockPathname = '/en';

describe('LanguageSwitcher', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockPathname = '/en';
  });

  it('рендерить кнопки для перемикання мов', () => {
    render(<LanguageSwitcher />);
    expect(screen.getByText('🇺🇦 UA')).toBeInTheDocument();
    expect(screen.getByText('🇬🇧 EN')).toBeInTheDocument();
  });

  it('змінює мову на "uk" і оновлює URL', async () => {
    render(<LanguageSwitcher />);

    fireEvent.click(screen.getByText('🇺🇦 UA'));

    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith('/');
    });
  });

  it('змінює мову на "en" і оновлює URL', async () => {
    mockPathname = '/uk';
    render(<LanguageSwitcher />);

    fireEvent.click(screen.getByText('🇬🇧 EN'));

    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith('/en');
    });
  });
});
