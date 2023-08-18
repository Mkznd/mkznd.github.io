import "./App.css";
import React, {useMemo, useState} from "react";
import useScript from "./useScript";
import {Button, createTheme, Grid, Paper, Stack, ThemeProvider} from "@mui/material";
import {experimentalStyled as styled} from "@mui/material/styles";

const Item = styled(Paper)(({theme}) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
	...theme.typography.body2,
	border: 5,
	padding: theme.spacing(2),
	textAlign: "center",
	color: theme.palette.text.secondary,
}));


function App() {
	useScript("https://dmaqfsvvftg8w.cloudfront.net/dtc.all.min.js");
	const [mode, setMode] = useState("dark");
	const theme = useMemo(() => createTheme({
		palette: {
			mode: mode,
		},
	}), [mode]);

	return (
		<ThemeProvider theme={theme}>
			<Stack spacing={10} sx={{flexGrow: 1, pt: 10}} alignItems={"center"} justifyContent={"center"}>
				<Grid container alignItems="center"
					justifyContent="center" rowSpacing={{xs: 2, md: 3}} columnSpacing={{xs: 2}}
					columns={{xs: 4, sm: 8, md: 12}}>
					{Array.from(Array(8)).map((_, index) => (
						<Grid item xs={4} sm={4} md={4} key={index}>
							<Item>{index}</Item>
						</Grid>
					))}
				</Grid>
				<Button variant={"outlined"} onClick={() => {
					setMode(mode === "light" ? "dark" : "light");
				}}>Change theme</Button>
			</Stack>
		</ThemeProvider>
	);
}

export default App;
