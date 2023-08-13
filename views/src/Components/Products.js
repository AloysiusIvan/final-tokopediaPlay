import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Stack, Box, Typography } from '@mui/material';

function formatCurrency(value) {
    return `Rp${value.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;
}

export default function Products() {
    const { id } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await fetch(`http://localhost:3001/api/videos/${id}/products`);
                if(response.ok){
                    const data = await response.json();
                    setProducts(data.products);
                }
            } catch(error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchProducts();
    }, [id]);
    

    return(
        <Box sx={{ width: '100%' }} style={{textAlign:'left'}}>
            <Typography variant="h1">
                Products
            </Typography>
            <Stack spacing={2} style={{marginTop:'1rem'}}>
                {products.length > 0 ? (products.map(product => (
                    <a href={product.productLink} target='_blank' rel="noreferrer" style={{textDecoration:'none'}}>
                    <div className='product' key={product.productId}>
                        <Typography variant="body1">
                            {product.title}
                        </Typography>
                        <Typography variant="body1" style={{fontSize:'1rem', fontWeight:'700'}}>
                            {formatCurrency(Number(product.price))}
                        </Typography>
                    </div>
                    </a>
                ))) : (<Typography variant="body1">No products for sale.</Typography>)}
            </Stack>
        </Box>
    );
}