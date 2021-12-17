import React from 'react';

import {
    View,
    Text,
    TouchableOpacity as Touch,
    Image,
    FlatList
} from 'react-native';
import {
    Title
} from '../../components/header/Header';
import Container from '../../components/container/Container';

import api from '../../services/api';

import Wine from '../../img/1.png';

import Style from './Style';

export default function Notification() {
    const [dataNew, setDataNew] = React.useState<any>([]);
    const [dataAll, setDataAll] = React.useState<any>([]);

    React.useEffect(() => {
        async function loadNew() {
            const { data } = await api.get('notification/news/1/');

            var news = [];
            for (let i = 0; i < data.length; i++) {
                news.push(
                    {
                        id: i,
                        image: (String(data[i].src).length > 1) && (data[i].src != null) ? data[i].src : Wine,
                        description: String(data[i].mensagem).substr(0, 1).toUpperCase() + String(data[i].mensagem).substr(1, 250),
                    }
                )
            }

            setDataNew(news)
        }

        async function loadAll() {
            const { data } = await api.get('notification/all/1/');

            var all = [];
            for (let i = 0; i < data.length; i++) {
                all.push(
                    {
                        id: i,
                        image: (String(data[i].src).length > 1) && (data[i].src != null) ?  data[i].src : Wine,
                        description: String(data[i].mensagem).substr(0, 1).toUpperCase() + String(data[i].mensagem).substr(1, 250),
                    }
                )
            }

            setDataAll(all)
        }

        loadNew();
        loadAll();
    }, [])

    return (
        <Container>
            <View style={{marginVertical: 14}}>
                <Title value='Notificações' />
            </View>
            {
                Object.values(dataNew).length > 0 && (
                    <View style={Style.Group}>
                        <Text style={Style.Title}>Novo</Text>
                        <FlatList
                            data={dataNew}
                            contentContainerStyle={Style.Group}
                            renderItem={
                                ({item}) => (
                                    <Touch style={Style.Notification} activeOpacity={0.8}>
                                        <View style={Style.BoxImage}>
                                            <Image source={item.image} style={Style.Wine} />
                                        </View>
                                        <Text style={Style.Description}>
                                            {item.description}
                                        </Text>
                                    </Touch>
                                )
                            }
                            keyExtractor={(item: any) => item.id.toString()}
                        />
                    </View>
                )
            }
            {
                Object.values(dataAll).length > 0 && (
                    <View style={Style.Group}>
                        <Text style={Style.Title}>Tudo</Text>
                        <FlatList
                            data={dataAll}
                            contentContainerStyle={Style.Group}
                            renderItem={
                                ({item}) => (
                                    <Touch style={Style.Notification} activeOpacity={0.8}>
                                        <View style={Style.BoxImage}>
                                            <Image source={Wine} style={Style.Wine} />
                                        </View>
                                        <Text style={Style.Description}>{ item.description }</Text>
                                    </Touch>
                                )
                            }
                            keyExtractor={(item: any) => item.id.toString()}
                        />
                    </View>
                )
            }
        </Container>
    )
}