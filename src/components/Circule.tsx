interface CirculeProps {
    length: number;
    image: string;
    padding: number;
    margin: {
        marginTop: number;
        marginBottom: number;
        marginRight: number;
        marginLeft: number;
    };
}

export function Circule({ length, image, padding, margin }: CirculeProps) {
    return (
        <div 
            className="bg-white rounded-full h-10 w-10 flex" 
            style={{
                height: `${length}px`, 
                width: `${length}px`, 
                padding: `${padding}px`, 
                marginTop: `${margin.marginTop}px`, 
                marginBottom: `${margin.marginBottom}px`, 
                marginRight: `${margin.marginRight}px`, 
                marginLeft: `${margin.marginLeft}px`
            }}
        >
            <img src={image} alt="Circulo branco com uma imagem de uma tecnologia" />
        </div>
    )
}