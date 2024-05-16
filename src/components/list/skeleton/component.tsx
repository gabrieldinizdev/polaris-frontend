"use client";

import {
  Box,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useTheme,
} from "@mui/material";

import { StyledTableContainer } from "../styled";

export const ListSkeleton = () => {
  const theme = useTheme();

  return (
    <>
      <StyledTableContainer>
        <TableContainer
          sx={{
            position: "absolute",
            top: theme.spacing(0),
            width: "100%",
            maxHeight: "100%",
            overflow: "auto",
            display: "flex",
            flexWrap: "wrap",
            gap: theme.spacing(2),
          }}
        >
          <Table stickyHeader aria-label="esqueleto da tabela">
            <TableHead
              sx={{
                ".MuiTableCell-root": {
                  backgroundColor: theme.palette.background.paper,
                  backgroundImage:
                    "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
                },
              }}
            >
              <TableRow>
                <TableCell width={120}>
                  <Skeleton variant="text" width="85%" />
                </TableCell>
                <TableCell>
                  <Skeleton variant="text" width="90%" />
                </TableCell>
                <TableCell>
                  <Skeleton variant="text" width="0%" />
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {[...Array(20)].map((_, index) => (
                <TableRow
                  sx={{ "& .MuiTableCell-root": { border: "none" } }}
                  key={index}
                >
                  <TableCell>
                    <Skeleton variant="text" width="70%" />
                  </TableCell>

                  <TableCell
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Skeleton variant="text" width="15%" />
                  </TableCell>

                  <TableCell width={40}>
                    <Skeleton variant="rounded" width={20} height={20} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </StyledTableContainer>
      <Box p={2} width="100%">
        <Skeleton variant="rounded" height={40} />
      </Box>
    </>
  );
};
