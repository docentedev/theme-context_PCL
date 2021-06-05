interface ToggleThemeProps {
    onToggle: (newTheme: string) => void;
}

const ToggleTheme = ({ onToggle }: ToggleThemeProps) => {

    const handlerClickSetDark = () => {
        onToggle('theme-dark')
    }
    const handlerClickSetLight = () => {
        onToggle('theme-light')
    }

    return (
        <div>
            <button onClick={handlerClickSetDark}>Dark</button>
            <button onClick={handlerClickSetLight}>Light</button>
        </div>
    )
}

export default ToggleTheme