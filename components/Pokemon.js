const Pokemon = ({ id, name, sprites, types, abilities }) => {
    // const pokemonTypes = types.map((types, id) => (
    //     <span key={ id } className={ types.type.name }>{ types.type.name } </span>
    // ));

    // const pokemonAbilities = abilities.map((abilities, id) => (
    //     <span key={ id }>{ abilities.ability.name }<br/></span>
    // ));

    return (
        <>
            <div>
                {/* <div className='divBgImage' 
                style={{ backgroundImage: `url(${sprites.front_default})` }}></div> */}
                <div className='pokemonData'>
                    <div>
                        <h2>{ id } { name }</h2>
                        {/* <h3>{ pokemonTypes }</h3>
                        <h3>{ pokemonAbilities }</h3> */}
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Pokemon;