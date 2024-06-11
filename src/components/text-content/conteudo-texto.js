

const ConteudoTexto = ({children, color, uppercase}) => {
    return (
        <div 
        style={ {color: color, textTransform: uppercase} }>
            {children}
        </div>
    )
} 


export default ConteudoTexto