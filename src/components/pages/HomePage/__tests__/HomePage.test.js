import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from 'components/pages/HomePage/HomePage';

describe('Suite => HomePage', () => {
    test('renders the home Page', () => {
        render(<HomePage />);
        const linkElement = screen.getByText(/HOGE FINANCE/i);
        expect(linkElement).toBeInTheDocument();
    });
});
