import { useSelector } from 'react-redux';
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { darkTheme, lightTheme } from '../../../theme/themes';

const Theme = ({ children }) => {
	const { isLightTheme } = useSelector((state) => state.theme);
	
	const appliedTheme = createTheme(isLightTheme ? lightTheme : darkTheme);

	return (
		<ThemeProvider theme={ appliedTheme }>
			<CssBaseline/>
			{children}
		</ThemeProvider>
	);
}

export default Theme;
