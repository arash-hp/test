import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Avatar, IconButton, TablePagination } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import * as React from "react";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const styles = {
  row: {
    backgroundColor: "#1876d2 !important",
  },
};

export default function TestTable({
  rows,
  header,
  total,
  params,
  handleChangePage,
  handleChangeRowsPerPage,
}) {
  //   console.log(222, header);

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              {header?.map((item) => (
                <StyledTableCell sx={styles.row}>{item}</StyledTableCell>
              ))}
              <StyledTableCell sx={styles.row}></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows?.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell align="left">{row.id}</StyledTableCell>
                <StyledTableCell align="left">{row.email}</StyledTableCell>
                <StyledTableCell align="left">{row.first_name}</StyledTableCell>
                <StyledTableCell align="left">{row.last_name}</StyledTableCell>
                <StyledTableCell align="left">
                  <Avatar alt="Remy Sharp" src={row.avatar} />
                </StyledTableCell>
                <StyledTableCell align="right">
                  {
                    <>
                      <IconButton>
                        <DeleteIcon
                          sx={{
                            color: "red",
                          }}
                        />
                      </IconButton>
                      <IconButton>
                        <EditIcon
                          sx={{
                            color: "lightBlue",
                          }}
                        />
                      </IconButton>
                    </>
                  }
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[6, 12]}
        component="div"
        count={total}
        rowsPerPage={params.per_page}
        page={params.page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
}
