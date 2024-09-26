import { useEffect } from 'react'
import { ScrollView, View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import { getProductsRequest } from '../store/actions/products'
import SearchBar from '../components/SearchBar';
import Icon from 'react-native-vector-icons/Feather';
import FlashSaleBanner from '../components/FlashSaleBanner';
import ProductsSlider from '../components/ProductsSlider';
import CategoriesList from '../components/CategoriesList';
import ReconProduct from '../components/ReconProduct';
import ProductsCart from '../components/ProductsCart';

export default function HomeScreen() {
  const dispatch = useDispatch()

    useEffect(() => {
      dispatch(getProductsRequest())
    }, [dispatch])

  const products = useSelector((state) => state.getProductsReducer.products);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputGroup}>
        <View style={styles.searchBarContainer}>
          <SearchBar placeHolder="Search Product" />
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity>
            <Icon name="heart" size={25} color="rgb(144, 152, 177)" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="bell" size={25} color="rgb(144, 152, 177)" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.carouselContainer}>
        <FlashSaleBanner />
      </View>

      <View style={{paddingTop: 24}}>
        <View style={styles.categoryRow}>
          <Text style={styles.categoryTitle}>Category</Text>
          <TouchableOpacity>
            <Text style={styles.categoryTitleRight}>More Category</Text>
          </TouchableOpacity>
        </View>

        <View style={{ paddingTop: 12 }}>
          <CategoriesList />
        </View>
      </View>

      <View style={{ paddingTop: 24 }}>
        <View style={styles.categoryRow}>
          <Text style={styles.categoryTitle}>Flash Sale</Text>
          <TouchableOpacity>
            <Text style={styles.categoryTitleRight}>See More</Text>
          </TouchableOpacity>
        </View>

        <View style={{ paddingTop: 12 }}>
          <ProductsSlider products={products.products} />
        </View>
      </View>

      <View style={{ paddingTop: 24 }}>
        <View style={styles.categoryRow}>
          <Text style={styles.categoryTitle}>Mega Sale</Text>
          <TouchableOpacity>
            <Text style={styles.categoryTitleRight}>See More</Text>
          </TouchableOpacity>
        </View>

        <View style={{ paddingTop: 12 }}>
          <ProductsSlider products={products.products} />
        </View>
      </View>

      <View style={{paddingTop: 9 }}>
        <ReconProduct />
      </View>

      <View style={{paddingTop: 16, }}>
          <ProductsCart products={products.products}/>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  inputGroup: {
    width: '100%',
    paddingTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchBarContainer: {
    width: "75%",
  },
  iconContainer: {
    width: "20%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  carouselContainer: {
    marginTop: 20,
  },
  categoryContainer: {
    marginTop: 48
  },
  categoryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  categoryTitle: {
    fontFamily: "Poppins",
    fontSize: 14,
    fontWeight: "700",
    color: "rgb(34, 50, 99)",
  },
  categoryTitleRight: {
    fontFamily: "Poppins",
    fontSize: 14,
    fontWeight: "700",
    color: "rgb(64, 191, 255)",
  }
});