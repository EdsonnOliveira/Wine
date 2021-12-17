import React from 'react'

import {
    Text,
    View,
    FlatList
} from 'react-native';
import {
    Header,
    Title,
    SubTitle,
} from '../../components/header/Header';
import Container from '../../components/container/Container';
import {
    Product,
    Promo
} from '../../components/product/Product';

import api from '../../services/api';

import Style from './Style';
import Colors from '../../styles/Colors';

import Wine from '../../img/1.png';
import Wine5 from '../../img/5.png';
import Wine3 from '../../img/3.png';

export default function Store() {
    const [dataFocus, setDataFocus] = React.useState<any>([]);

    React.useEffect(() => {
        async function loadFocus() {
            const { data } = await api.get('promotions/focus/list/');
            setDataFocus(data)
        }

        loadFocus();
    }, [])

    const dataPromo = [
        {
            id: 0,
            title: 'Um vinho surreal',
            description: 'Prove um novo sabor',
            color: Colors.White,
            image: Wine5,
            backgroundColor: Colors.Cian,
            percentage: 20,
            colorPercentage: Colors.White,
            backgroundColorPercetage: Colors.Orange
        },
        {
            id: 1,
            title: 'Um vinho surreal',
            description: 'Prove um novo sabor',
            color: Colors.White,
            image: Wine3,
            backgroundColor: Colors.Orange,
            percentage: 20,
            colorPercentage: Colors.White,
            backgroundColorPercetage: Colors.Red
        },
    ]

    const dataProducts = [
        {
            id: 0,
            title: 'Vinã Fausto 2007',
            stock: 3,
            backgroundColor: Colors.Red,
            image: Wine,
            brand: 1,
        },
        {
            id: 1,
            title: 'aVinã Fausto 2007',
            stock: 3,
            backgroundColor: Colors.Cian,
            image: Wine,
            brand: 1,
        },
        {
            id: 2,
            title: 'Vinã Fausto 2007',
            stock: 3,
            backgroundColor: Colors.Orange,
            image: Wine,
            brand: 1,
        },
        {
            id: 3,
            title: 'aVinã Fausto 2007',
            stock: 3,
            backgroundColor: Colors.Blue,
            image: Wine,
            brand: 1,
        },
        {
            id: 4,
            title: 'aVinã Fausto 2007',
            stock: 3,
            backgroundColor: Colors.Cian,
            image: Wine,
            brand: 2,
        },
        {
            id: 5,
            title: 'aVinã Fausto 2007',
            stock: 3,
            backgroundColor: Colors.Orange,
            image: Wine,
            brand: 3,
        },
        {
            id: 6,
            title: 'aVinã Fausto 2007',
            stock: 3,
            backgroundColor: Colors.Red,
            image: Wine,
            brand: 3,
        },
        {
            id: 7,
            title: 'aVinã Fausto 2007',
            stock: 3,
            backgroundColor: Colors.Blue,
            image: Wine,
            brand: 3,
        },
    ]

    return (
        <Container>
            <Header />
            <View style={Style.Title}>
                <Title value='Promoções' />
            </View>
            <FlatList
                data={dataFocus}
                contentContainerStyle={Style.List}
                renderItem={
                    ({item}) => (
                        <View style={Style.Item}>
                            <Promo title={item.title} description={item.description} color={item.textcolor} image={Wine} backgroundColor={item.backgroundcolor}
                                   percentage={item.percentage} colorPercetage={item.percentagecolor} backgroundColorPercetage={item.percentagebackgroundcolor}
                                   code={item.code} />
                        </View>
                    )
                }
                horizontal
                pagingEnabled
                keyExtractor={(item) => item.rownum.toString()}
                showsHorizontalScrollIndicator={false}
            />
            <View style={Style.SubTitle}>
                <SubTitle value='Ofertas especiais' />
            </View>
            <FlatList
                data={dataProducts}
                contentContainerStyle={Style.List}
                renderItem={
                    ({item}) => (
                        <View style={{marginRight: 15}}>
                            <Product title={item.title} stock={item.stock} backgroundColor={item.backgroundColor} image={item.image} />
                        </View>
                    )
                }
                keyExtractor={(item: any) => item.id.toString()}
                showsHorizontalScrollIndicator={false}
                horizontal
            />
            <View style={Style.SubTitle}>
                <SubTitle value='Você vai gostar' />
            </View>
            <FlatList
                data={dataProducts}
                contentContainerStyle={Style.List}
                renderItem={
                    ({item}) => (
                        <View style={{marginRight: 15}}>
                            <Product title={item.title} stock={item.stock} backgroundColor={item.backgroundColor} image={item.image} />
                        </View>
                    )
                }
                keyExtractor={(item: any) => item.id.toString()}
                showsHorizontalScrollIndicator={false}
                horizontal
            />
        </Container>
    )
}