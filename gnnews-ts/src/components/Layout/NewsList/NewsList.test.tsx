import {render, screen} from "@testing-library/react";
import NewsList from "./NewsList";
import {loader} from "../../../pages/CountryNews/CountryNews";
import store from "../../../store/store";
import {Provider} from "react-redux";


describe('NewsList component', () => {
    it('renders news list', async () => {
        const fetchedNews = await loader(
            {
                params: {
                    countryId: 'pl'
                }
            }
        )
        render(<Provider store={store}><NewsList news={[...fetchedNews]}/></Provider>)
        const listItemElements = await screen.findAllByRole('listitem', {}, {timeout: 3000})
        expect(listItemElements).not.toHaveLength(0)
    })

});