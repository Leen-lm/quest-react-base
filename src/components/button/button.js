const showLabel = ({label}) => {
    return (
        alert(`A label do botão clicado é: ${label}`)
    )
}

const ButtonLabel = (label) => {
    return(
        <>
            <button onClick={() => showLabel(label)}>Ver Label</button>
        </>
    )
}

export default ButtonLabel