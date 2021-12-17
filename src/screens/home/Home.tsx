import React from 'react';

import {
    Text,
    View,
    FlatList,
} from 'react-native';
import {
    Header,
    Title,
    SubTitle
} from '../../components/header/Header';
import Container from '../../components/container/Container';
import { ButtonText } from '../../components/button/Button';
import { Product } from '../../components/product/Product';

import api from '../../services/api';

import Style from './Style';
import Colors from '../../styles/Colors';

import Wine from '../../img/1.png';

export default function Home() {
    const [dataList, setDataList] = React.useState<any>([]);

    React.useEffect(() => {
        async function loadAll() {
            const { data } = await api.get('stock/list/1/');
            
            var products = [];
            for (let i = 0; i < data.length; i++) {
                products.push (
                    {
                        id: data[i].idproduto,
                        title: String(data[i].descricao).toUpperCase().substr(0, 24) + (String(data[i].descricao).length > 24 ? '...' : ''),
                        stock: data[i].saldo,
                        backgroundColor: Colors.Red,
                        image: (String(data[i].src).length > 1) && (data[i].src != null) ? data[i].src : Wine,
                        brand: 1,
                    }
                )
            }

            var dataProducts: any;
            dataProducts = products
            
            const components = (
                <FlatList
                    data={dataProducts}
                    contentContainerStyle={[Style.ContainerList, {justifyContent: 'space-between',flexWrap: 'wrap'}]}
                    renderItem={
                        ({item}) => (
                            <Product
                                title={item.title}
                                stock={item.stock}
                                backgroundColor={item.backgroundColor}
                                image={item.image}
                                code={item.id}
                            />
                        )
                    }
                    keyExtractor={(item: any) => item.id.toString()}
                    showsVerticalScrollIndicator={false}
                    horizontal={false}
                />
            );

            setDataList(components)
        }
        
        loadAll()
    }, [])

    return (
        <Container>
            <Header />
            <View style={Style.Title}>
                <Title value='Sua Adega' />
                <ButtonText title='Filtrar' color={Colors.Orange} onPress={() => null} />
            </View>
            <View style={Style.SubTitle}>
                { dataList }
            </View>
        </Container>
    )
}