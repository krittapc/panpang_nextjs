import CssBaseline from "@mui/material/CssBaseline";
import ExpansionForm from "@/components/ExpansionForm";
import { Container, Paper, Typography } from "@mui/material";

export default function Home() {
  return (
    <>
      <CssBaseline />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            Request Expansion
          </Typography>
          <ExpansionForm />
        </Paper>
      </Container>
    </>
  );
}
