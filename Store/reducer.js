import { PRODUCTS } from "../Data";


//State khởi tạo
const initialState = {
    products: PRODUCTS,
    favProducts: [],
    bagProducts: [],
    filteredProducts: PRODUCTS,

}

const reducer = (state = initialState, action) => {

    if (action.type === 'AddtoFav'){
        //Dùng findIndex để tìm chỉ số của sản phẩm có id === action.productsId trong favProducts
        const index = state.favProducts.findIndex(product => product.id === action.productsID)
        // console.log(action.productsID)
        //Nếu Chỉ số này >= 0, tức là sản phảm có trong yêu thích
        if (index >= 0) 
        {
            //Tạo bản sao của FavProducts
            const copy = [...state.favProducts]
            //xóa sản phẩm có chỉ số vừa tìm được
            copy.splice(index, 1)
            //trả về state có favproducts đã cập nhât
            return {...state , favProducts: copy}

        }
        else {
            //ngược lại, tìm thông tin sản phẩm và thêm nó vào favproducts
            const product = state.products.find(product => product.id === action.productsID)
             //Tạo bản sao của FavProducts
            let copy = [...state.favProducts]
          
             //Thêm sản phẩm 
           copy = copy.concat(product)
            
           
             //trả về state có favproducts đã cập nhât
             return {
                ...state, favProducts: copy
             }

        }
        
    }


    // locj filter 
    if (action.type === 'Filter')
    {
        //xử lý
        //lấy object chwuas thông tin filter được chuyển sang
        const filters = action.filters
        //lọc ra danh sách sản phẩm dựa vào thông tin filter
        const products = state.products.filter(product => 
            {
                if (product.isBrand != filters.isBandNewOn){
                    return false
                }
                if (product.isSale != filters.isSaleOffOn){
                    return false
                }
                return true
                
            }
            )
        //trả về state có filterprodcuts đã được cập nhât
        // console.log(action.filters)
        // console.log(products)
        return { 
            ...state, filteredProducts: products 

        }
    }

    //Add to Bag
    if (action.type === 'AddtoBag'){
        //Dùng findIndex để tìm chỉ số của sản phẩm có id === action.productsId trong favProducts
        const index = state.bagProducts.findIndex(product => product.id === action.productsID)
        // console.log(action.productsID)
        //Nếu Chỉ số này >= 0, tức là sản phảm có trong yêu thích
        if (index >= 0) 
        {
            //Tạo bản sao của FavProducts
            const copy = [...state.bagProducts]
            //xóa sản phẩm có chỉ số vừa tìm được
            copy.splice(index, 1)
            //trả về state có favproducts đã cập nhât
            return {...state , bagProducts: copy}

        }
        else {
            //ngược lại, tìm thông tin sản phẩm và thêm nó vào favproducts
            const product = state.products.find(product => product.id === action.productsID)
             //Tạo bản sao của FavProducts
            let copy = [...state.bagProducts]
          
             //Thêm sản phẩm 
           copy = copy.concat(product)
            
           
             //trả về state có favproducts đã cập nhât
             return {
                ...state, bagProducts: copy
             }

        }
        
    }


    return state
}

export default reducer;