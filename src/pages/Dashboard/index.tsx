import React, { useEffect, useState } from 'react';
import { Image, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import Logo from '../../assets/logo-header.png';
import SearchInput from '../../components/SearchInput';

import Pasta from '../../assets/pasta.png';
import Pizza from '../../assets/pizza.png';
import Soup from '../../assets/soup.png';

import api from '../../services/api';
import formatValue from '../../utils/formatValue';

import {
  Container,
  Header,
  FilterContainer,
  Title,
  CategoryContainer,
  CategorySlider,
  CategoryItem,
  CategoryItemTitle,
  FoodsContainer,
  FoodList,
  Food,
  FoodImageContainer,
  FoodContent,
  FoodTitle,
  FoodDescription,
  FoodPricing,
} from './styles';

interface IFood {
  id: number;
  name: string;
  description: string;
  price: number;
  thumbnail_url: string;
  formattedPrice: string;
}

interface Category {
  id: number;
  title: string;
}
interface IfoodCategoryImagePath {
  [key: string]: any;
}

const foodCategoryImagePath: IfoodCategoryImagePath = {
  'Soup': Soup,
  'Pasta': Pasta,
  'Pizza': Pizza
}

const Dashboard: React.FC = () => {
  const [foods, setFoods] = useState<IFood[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<
    number | undefined
  >();
  const [searchValue, setSearchValue] = useState('');

  const navigation = useNavigation();

  async function handleNavigate(id: number): Promise<void> {
    navigation.navigate('FoodDetails', { id });
  }

  useEffect(() => {
    async function loadFoods(): Promise<void> {
      try {
        const { data } = await api.get('/foods', {
          params: {
            "category_like": selectedCategory,
            "name_like": searchValue,
          }
        });
        const foodsWithFormattedPrice = data.map((food: IFood) => ({
          ...food,
          formattedPrice: formatValue(food.price)
        }));

        setFoods(foodsWithFormattedPrice);
      } catch (err) {
        console.log(err);
      }
    }

    loadFoods();
  }, [selectedCategory, searchValue]);

  useEffect(() => {
    async function loadCategories(): Promise<void> {
      try {
        const { data } = await api.get('/categories');
        setCategories(data);
      } catch (err) {
        console.log(err);
      }
    }

    loadCategories();
  }, []);

  function handleSelectCategory(id: number): void {
    if (selectedCategory === id) {
      setSelectedCategory(undefined);
    } else {
      setSelectedCategory(id);
    }
  }

  return (
    <Container>
      <Header>
        <Image source={Logo} />
        <Icon
          name="log-out"
          size={24}
          color="#FFB84D"
          onPress={() => navigation.navigate('Home')}
        />
      </Header>
      <FilterContainer>
        <SearchInput
          value={searchValue}
          onChangeText={setSearchValue}
          placeholder="What are you looking for?"
        />
      </FilterContainer>
      <ScrollView>
        <CategoryContainer>
          <Title>Categories</Title>
          <CategorySlider
            contentContainerStyle={{
              paddingHorizontal: 20,
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {categories.map(category => (
              <CategoryItem
                key={category.id}
                isSelected={category.id === selectedCategory}
                onPress={() => handleSelectCategory(category.id)}
                activeOpacity={0.6}
                testID={`category-${category.id}`}
              >
                <Image
                  style={{ width: 56, height: 56 }}
                  source={foodCategoryImagePath[category.title]}
                />
                <CategoryItemTitle>{category.title}</CategoryItemTitle>
              </CategoryItem>
            ))}
          </CategorySlider>
        </CategoryContainer>
        <FoodsContainer>
          <Title>Dishes</Title>
          <FoodList>
            {foods.map(food => (
              <Food
                key={food.id}
                onPress={() => handleNavigate(food.id)}
                activeOpacity={0.6}
                testID={`food-${food.id}`}
              >
                <FoodImageContainer>
                  <Image
                    style={{ width: 88, height: 88 }}
                    source={{ uri: food.thumbnail_url }}
                  />
                </FoodImageContainer>
                <FoodContent>
                  <FoodTitle>{food.name}</FoodTitle>
                  <FoodDescription>{food.description}</FoodDescription>
                  <FoodPricing>{food.formattedPrice}</FoodPricing>
                </FoodContent>
              </Food>
            ))}
          </FoodList>
        </FoodsContainer>
      </ScrollView>
    </Container>
  );
};

export default Dashboard;
