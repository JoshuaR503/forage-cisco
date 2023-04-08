export default function Exhibit({title, children}) {
    return (
        <div className="container">
            <h1 className="heading">{title}</h1>
            {children}
        </div>
    )
}
