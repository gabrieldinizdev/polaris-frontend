import {
  Box,
  Button,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";

import { Trash } from "@phosphor-icons/react/dist/ssr";

import { ShoppingListItemSchema } from "@/schemas/shopping-list-item";

import { scrollbarStyles } from "./styled";

type ListTableProps = {
  items: ShoppingListItemSchema[];
};

const ListTable = ({ items }: ListTableProps) => {
  const theme = useTheme();

  const rows = items.map((item: any) => ({
    _id: item._id,
    quantity: item.quantity,
    product: item.product.name,
  }));

  return (
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

        ...scrollbarStyles,
      }}
    >
      <Table stickyHeader>
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
            <TableCell>
              <Typography component="b" variant="body1">
                Produtos
              </Typography>
            </TableCell>

            <TableCell align="center">
              <Typography component="b" variant="body1">
                Quantidade
              </Typography>
            </TableCell>

            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              sx={{ "& .MuiTableCell-root": { border: "none" } }}
              key={row._id}
            >
              <TableCell>
                <Typography variant="caption">{row.product}</Typography>
              </TableCell>

              <TableCell align="center">
                <Typography variant="caption">{row.quantity}</Typography>
              </TableCell>

              <TableCell width={32}>
                <Tooltip title="Remover" arrow>
                  <IconButton color="error" size="small">
                    <Trash color={theme.palette.error.main} size={16} />
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell
              style={{
                textAlign: "center",
                padding: "16px",
                borderBottom: "none",
              }}
              colSpan={3}
            >
              <Button variant="text" color="primary">
                Ver Mais
              </Button>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};

export { ListTable };
