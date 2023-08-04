import { useParams } from "react-router-dom";
import SearchResultsRow from "./SearchResultsRow";

const SearchResults = ({houses}) => {

    let {county} = useParams();
    let filteredHouses = houses.filter((elem) => elem.county === county);
    console.log(filteredHouses);
    return ( 
        <div>
            <div className="table-responsive">
                <table className="table table-primary">
                    <thead>
                        <tr>
                            <th scope="col">Address</th>
                            <th scope="col">Price</th>
                            {/* <th scope="col">Link</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filteredHouses.map((elem) => {
                                return <SearchResultsRow house={elem}/>
                            })
                        }

                    </tbody>
                </table>
            </div>
            
        </div>
     );
}
 
export default SearchResults;