import { StockWithProduct } from "./actions";

interface DataTableStockParams {
    data: StockWithProduct[]
}

export default function DataTableStock({data}: DataTableStockParams) {

    return (
        <div>
            {/* {JSON.stringify(data)} */}
            <h1>Stock</h1>
        </div>
    );    
};
