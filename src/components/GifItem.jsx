
export const GifItem = (prop) => {
    return (
        <div className="card">
            <img src={prop.image.url} alt={prop.image.title} />
            <p>{prop.image.title}</p>
        </div>
    )
}
