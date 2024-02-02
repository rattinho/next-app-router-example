export default async function Produto({
    params: {produtoId},
}:{
    params: {
        produtoId: string;
    };
}) {
    return(
        <div><h1>Produto {produtoId}</h1></div>
    )
}