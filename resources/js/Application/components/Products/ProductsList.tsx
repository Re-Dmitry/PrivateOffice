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

const ProductsList: React.FC<IProductsListProps> = (props) => {
	const classes = useStyles();
	return (
		<TableContainer component={Paper}>
			<Table className={classes.table} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell>id</TableCell>
						<TableCell align="right">Title</TableCell>
						<TableCell align="right">Price</TableCell>
						<TableCell align="right">Category</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{props.products!.map((product) => (
						<TableRow key={product.id}>
							<TableCell component="th" scope="row">
								{product.id}
							</TableCell>
							<TableCell align="right">{product.title}</TableCell>
							<TableCell align="right">{product.price}</TableCell>
							<TableCell align="right">{product.category.title}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}

export default ProductsList;