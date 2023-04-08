export default function Exhibit({ title, children }) {
    return (
        <div className="bg-dark vh-100 text-white">
            <div className="container">
                <h1 className="heading py-5 display-4 fw-light">{title}</h1>
                {children}
            </div>
        </div>
    )
}
