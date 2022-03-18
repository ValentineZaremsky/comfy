import { connect } from 'react-redux';
import Products from '../components/Products/Products';
import { addMessageActionCreator, updateSearchActionCreator } from '../redux/products-reducer';

const mapStateToProps = (state: any) => {
  return {
    productsPage: state.productsPage,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    addNewMessage: () => {
      dispatch(addMessageActionCreator());
    },
    changeMessage: (text: string) => {
      dispatch(updateSearchActionCreator(text));
    },
  };
};

const ProductsContainer = connect(mapStateToProps, mapDispatchToProps)(Products);

export default ProductsContainer;
