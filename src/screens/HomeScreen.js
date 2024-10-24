import { useCallback, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { ScrollView, View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import { getProductsRequest, getSearchProductRequest } from '../store/actions/products'
import SearchBar from '../components/SearchBar';
import Icon from 'react-native-vector-icons/Feather';
import FlashSaleBanner from '../components/FlashSaleBanner';
import ProductsSlider from '../components/ProductsSlider';
import CategoriesList from '../components/CategoriesList';
import ReconProduct from '../components/ReconProduct';
import ProductsCart from '../components/ProductsCart';

export default function HomeScreen() {
  const dispatch = useDispatch()
  const navigation = useNavigation()

  useEffect(() => {
    dispatch(getProductsRequest())
  }, [])

  const products = useSelector((state) => state.getProductsReducer.products);

  const handleSearch = useCallback(async (e) => {
    dispatch(getSearchProductRequest(e.nativeEvent.text))
  }, [])

  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputGroup}>
        <View style={styles.searchBarContainer}>
          <SearchBar placeHolder="Search Product" handleSearch={handleSearch} />
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Favorite Product')}>
            <Icon name="heart" size={25} color="rgb(144, 152, 177)" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
            <Icon name="bell" size={25} color="rgb(144, 152, 177)" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.carouselContainer}>
        <FlashSaleBanner />
      </View>

      <View style={{ paddingTop: 24 }}>
        <View style={styles.categoryRow}>
          <Text style={styles.categoryTitle}>Category</Text>
          <TouchableOpacity onPress={() => navigation.navigate('List Category')}>
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
          <ProductsSlider products={products} onNavigate={(id) => navigation.navigate('Product Detail', { productId: id })} />
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
          <ProductsSlider products={products} onNavigate={(id) => navigation.navigate('Product Detail', { productId: id })} />
        </View>
      </View>

      <View style={{ paddingTop: 9 }}>
        <ReconProduct />
      </View>

      <View style={{ paddingTop: 16, }}>
        <ProductsCart products={products}  handleNavigation={(id) => navigation.navigate('Product Detail', { productId: id })}/>
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