function OptionBrewery({text, id_brewery }: {text: string, id_brewery: number }) {
    return (
<option value={id_brewery}>{text}</option>    );
}

export default OptionBrewery;