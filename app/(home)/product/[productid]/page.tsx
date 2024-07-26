

import { ProductDetails } from '@/components/home';
import { products } from '@/utils/products';


import { IParams } from '@/types'


const Product = ({ params }: { params: IParams }) => {
    console.log('params', params);

    const product=products.find((item)=>item.id === params.productId)

    return (
        <div className='p-16'>
            <ProductDetails product={product} />
        </div>
    );
};

export default Product