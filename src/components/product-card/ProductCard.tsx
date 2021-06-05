import styles from './ProductCard.module.css'

interface ProductCardProps {
    theme: string;
}

const ProductCard = ({ theme }: ProductCardProps) => {
    return (
        <div className={`${styles.card} ${theme}`}>Product Card</div>
    )
}

export default ProductCard