import { Link, useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch";
import './Product.css'

const Product = () => {
  
    // 4 - Rota Dinâmica

    const {id} = useParams();

    // 5 - Carregamento dado individual
    const url = 'http://localhost:3000/products/' + id

    const {data: product, loading, error} = useFetch(url)
    console.log(product)

    return <>
    <p>Id do Produto: {id}</p>
    {error && <p>Contem erro no parametro...</p>}
    {loading && <p>Carregando . . . . . </p>}
    {product && (
        <div className="container">
            <h2>{product.name}</h2>
            <p>R$: {product.price}</p>
            {/* 6 / nested routees */}
            <Link to={`/products/${product.id}/info`}>Mais informações</Link>
        </div>
    )}
    </>
}

export default Product