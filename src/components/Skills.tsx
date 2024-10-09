import { useSelector, useDispatch } from 'react-redux';
import { changeSearchField } from '../actions/actionCreators';
import { RootState, AppDispatch } from '../store';

export default function Skills() {
    const { items, loading, error, search } = useSelector((state: RootState) => state.skills);
    const dispatch: AppDispatch = useDispatch();

    const handleSearch = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = evt.target;
        dispatch(changeSearchField(value));
    };

    const hasQuery = search.trim() !== '';

    return (
        <main>
            <div>
                <input type="search" value={search} onChange={handleSearch} />
            </div>
            {!hasQuery && <div>Type something to search...</div>}
            {hasQuery && loading && <div>Searching...</div>}
            {error ? (
                <div>Error occurred</div>
            ) : (
                <>
                    {items.length === 0 && hasQuery && <div>No results found.</div>}
                    <ul>
                        {items.map((o) => (
                            <li key={o.id}>{o.name}</li>
                        ))}
                    </ul>
                </>
            )}
        </main>
    );
}
