import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Box,
} from "@mui/material";
import "./styles.css";
import GetDataGempa from "../../Api/AutoGempa";

const Gempa = () => {
  const { isLoading, isError, error, data } = GetDataGempa();

  if (isLoading)
    return (
      <Box sx={{ paddingBottom: 2 }}>
        <Typography component="h1" variant="h2">
          Gempabumi Dirasakan
        </Typography>
        <Typography variant="h3" component="h4">
          Loading...
        </Typography>
      </Box>
    );
  if (isError)
    return (
      <Box sx={{ paddingBottom: 2 }}>
        <Typography component="h1" variant="h2">
          Gempabumi Dirasakan
        </Typography>
        <Typography variant="h3" component="h4">
          An error has occurred: {error.message}
        </Typography>
      </Box>
    );

  return (
    <>
      <Box sx={{ paddingBottom: 2 }}>
        <Typography component="h1" variant="h2">
          BMKG Gempabumi Dirasakan
        </Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell align="center">#</TableCell>
              <TableCell>Waktu Gempa</TableCell>
              <TableCell>Lintang - Bujur</TableCell>
              <TableCell align="center">Magnitudo</TableCell>
              <TableCell align="center">Kedalaman</TableCell>
              <TableCell>Dirasakan (Skala MM)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.Infogempa.gempa.map((gempa, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="gempa" align="center">
                  {index + 1}
                </TableCell>
                <TableCell sx={{ minWidth: 85 }}>
                  {gempa.Tanggal}
                  <br />
                  {gempa.Jam}
                </TableCell>
                <TableCell>
                  {gempa.Lintang} - {gempa.Bujur}
                </TableCell>
                <TableCell align="center">{gempa.Magnitude}</TableCell>
                <TableCell align="center">{gempa.Kedalaman}</TableCell>
                <TableCell>
                  <strong>{gempa.Wilayah}</strong>
                  <br />
                  {gempa.Dirasakan}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Gempa;
