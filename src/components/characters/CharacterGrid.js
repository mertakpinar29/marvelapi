import CharacterItem from './CharacterItem'

const CharacterGrid = ({items,isLoading}) => {
    return  isLoading ? <h1>Loading...</h1>
    : <section className="cards">
        {items.map(item =>(
            // we pass props with item={item} here
            <CharacterItem key={item.id} item={item}></CharacterItem>
        )
        )}
    </section>
    
}

export default CharacterGrid
