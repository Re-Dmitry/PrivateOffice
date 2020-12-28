import React from 'react';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import useStyles from "./includes/style";
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableContainer from '@material-ui/core/TableContainer';
import IProductsListProps from '../../interfaces/IProductsListProps';
import { Button } from '@material-ui/core';

const ProductsList: React.FC<IProductsListProps> = (props) => {
    const classes = useStyles();
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Category</TableCell>
                        <TableCell align="center">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.products!.map((product) => (
                        <TableRow key={product.id}>
                            <TableCell>{product.title}</TableCell>
                            <TableCell align="right">{product.price}</TableCell>
                            <TableCell align="right">{product.category.title}</TableCell>
                            <TableCell align="center">
                                <Button onClick={() => props.setProductsInCart([product.id, product.title, product.price])} variant="contained" color="primary">
                                    Add to cart
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default ProductsList;
