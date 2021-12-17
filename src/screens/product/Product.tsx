import React from 'react';

import {
    View,
    TouchableOpacity as Touch,
    Image,
    Text,
    FlatList
} from 'react-native';
import Container from '../../components/container/Container';
import { SubTitle } from '../../components/header/Header';
import {
    Input,
    InputColors,
} from '../../components/input/Input';
import { Button } from '../../components/button/Button';
import Modal from 'react-native-modal';

import {
    StyledTop,
    StyledMain,
    StyledList,
    StyledMovement,
    StyledEdit,
    StyledModal
} from './Style';
import Colors from '../../styles/Colors';

import api from '../../services/api';

import imgBack from '../../img/custom/iconBack.png';
import imgEdit from '../../img/custom/iconEdit.png';
import imgView from '../../img/custom/iconEye.png';
import Wine from '../../img/1.png';
import imgClassification from '../../img/custom/iconClassification.png';
import imgWine from '../../img/custom/iconWine.png';

import iconAlcohol from '../../img/custom/iconAlcohol.png';
import iconVolume from '../../img/custom/iconVolume.png';
import iconGlobe from '../../img/custom/iconGlobe.png';
import iconCategory from '../../img/custom/iconCategory.png';
import iconGrape from '../../img/custom/iconGrape.png';
import iconWinery from '../../img/custom/iconWinery.png';
import iconRipening from '../../img/custom/iconRipening.png';
import iconTemperature from '../../img/custom/iconTemperature.png';
import iconGuard from '../../img/custom/iconGuard.png';

import iconStar from '../../img/custom/iconStar.png';
import iconStarOrange from '../../img/custom/iconStarOrange.png';
import iconComment from '../../img/custom/iconComment.png';

import {
    useNavigation,
    useRoute
} from '@react-navigation/core';

export default function Product() {
    const nav = useNavigation<any>();
    const route = useRoute<any>();

    const [data, setData] = React.useState<any>({});
    const [dataComments, setDataComments] = React.useState<any>({});
    const [dataInfos, setDataInfos] = React.useState<any>({});
    const [update, setUpdate] = React.useState<boolean>(false);

    async function clickUpdate() {
        setUpdate(await !update)
    }

    const [titleComponent, setTitleComponent] = React.useState<any>(null);
    const [containerComponent, setContainerComponent] = React.useState<any>(null);

    React.useEffect(() => {
        async function loadWine() {
            var { data } = await api.get('stock/product/1/' + route.params?.code + '/')

            var dataProduct = {
                name: String(data['descricao']).substr(0, 1).toUpperCase() + String(data.descricao).substr(1, 250),
                year: 1925,
                brand: 'Fasoli Gino',
                color: Colors.Red,
                image: (String(data['src']).length > 1) && (data['src'] != null) ? data['src'] : Wine,
                classification: String(parseFloat(data['estrelas']).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})).substr(3, 99),
                stock: String(data['saldo']),
                value: String(parseFloat(data['valor']).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})).substr(3, 99),
                alcohol: '13.5%',
                volume: '1L',
                globe: 'Itália',
                category: 'Tinto',
                grape: 'Cabernet Carménère',
                winery: 'Concha y Toro',
                ripening: '10 Meses',
                temperature: '16° C',
                guard: '5 Anos'
            }

            setData(dataProduct);

            var { data } = await api.get('product/' + route.params?.code + '/classification/');

            setDataComments(data);
            
            var dataInfos = [];
            if (data.alcohol)
                dataInfos.push({title: 'Álcool', value: data.alcohol, icon: iconAlcohol})
            if (data.volume)
                dataInfos.push({title: 'Volume', value: data.volume, icon: iconVolume})
            if (data.globe)
                dataInfos.push({title: 'País', value: data.globe, icon: iconGlobe})
            if (data.category)
                dataInfos.push({title: 'Categoria', value: data.category, icon: iconCategory})
            if (data.grape)
                dataInfos.push({title: 'Uva', value: data.grape, icon: iconGrape})
            if (data.winery)
                dataInfos.push({title: 'Vinícola', value: data.winery, icon: iconWinery})
            if (data.ripening)
                dataInfos.push({title: 'Amadurecimento', value: data.ripening, icon: iconRipening})
            if (data.temperature)
                dataInfos.push({title: 'Temperatura', value: data.temperature, icon: iconTemperature})
            if (data.guard)
                dataInfos.push({title: 'Guarda', value: data.guard, icon: iconGuard})

            setDataInfos(dataInfos)
            switch (Number(route.params?.type)) {
                case 1:
                    setTitleComponent(
                        <Touch style={StyledTop.Touch} onPress={() => clickUpdate()}>
                            <Image source={update == false ? imgEdit : imgView} style={StyledTop.ImgTouch} />
                        </Touch>
                    )

                    var { data } = await api.get('stock/product/1/' + route.params?.code + '/movement/')

                    var dataMovement: any;
                        dataMovement = data;

                    setContainerComponent(
                        update == false
                        ?   <>
                                <SubTitle value='Movimentação' />
                                <FlatList
                                    data={dataMovement}
                                    contentContainerStyle={StyledMovement.Main}
                                    renderItem={
                                        ({item, index}) => (
                                            <View style={[StyledMovement.Item, {marginRight: index % 2 == 0 ? 10 : 0}]}>
                                                <Image source={iconAlcohol} style={StyledMovement.Icon} />
                                                <View style={StyledMovement.BoxText}>
                                                    <Text style={StyledMovement.Title}>{ String(item.tipo).substr(0, 1).toUpperCase() + String(item.tipo).substr(1, 250) }</Text>
                                                    <Text style={StyledMovement.Quantity}>{ item.quantidade } { item.quantidade > 1 ? 'Unds.' : 'Und.' }</Text>
                                                </View>
                                                <View style={StyledMovement.BoxDate}>
                                                    {/* <Text style={StyledMovement.Date}>{ item.data }</Text> */}
                                                    <Text style={StyledMovement.Date}>Hoje</Text>
                                                </View>
                                            </View>
                                        )
                                    }
                                    numColumns={2}
                                />
                            </>
                        :   <>
                                <View style={StyledEdit.Row}>
                                    <View style={StyledEdit.Column2}>
                                        <Input title='Valor de Compra' legend='R$' textAlign='right' value={data.value} placeholder='0,00' />
                                    </View>
                                </View>
                                <View style={StyledEdit.Row}>
                                    <View style={StyledEdit.Column1}>
                                        <Button title='SALVAR' color={Colors.White} backgroundColor={Colors.Black} onPress={() => clickSave()} />
                                    </View>
                                </View>
                            </>
                    )
                    break;
                case 2:
                case 3:
                    setTitleComponent(<Text style={StyledTop.Title}>Produto não cadastrado</Text>)
                    setContainerComponent(
                        <>
                            <View style={StyledEdit.Row}>
                                <View style={StyledEdit.Column2}>
                                    <Input title='Valor Unitário' legend='R$' textAlign='right' placeholder='0,00' />
                                </View>
                                <View style={StyledEdit.Column2}>
                                    <Input title='Categoria' textAlign='right' placeholder='0,00' />
                                </View>
                            </View>
                            <View style={[StyledEdit.Row, {marginBottom: 50}]}>
                                <View style={StyledEdit.Column2}>
                                    <InputColors title='Cor' />
                                </View>
                                <View style={[StyledEdit.Column2, {justifyContent: 'flex-end'}]}>
                                    <View style={{height: 50}}>
                                        <Button title='SALVAR' color={Colors.White} backgroundColor={Colors.Black} onPress={() => clickSave()} />
                                    </View>
                                </View>
                            </View>
                        </>
                    );
                    break;
                case 4:
                    setTitleComponent(<Text style={StyledTop.Title}>Entrada</Text>)
                    setContainerComponent(
                        <>
                            <View style={StyledEdit.Row}>
                                <View style={StyledEdit.Column2}>
                                    <Input title='Quantidade' textAlign='center' value='1' />
                                </View>
                                <View style={StyledEdit.Column2}>
                                    <Input title='Valor Total' legend='R$' textAlign='right' value={data.value} placeholder='0,00' />
                                </View>
                            </View>
                            <View style={[StyledEdit.Row, {marginBottom: 40}]}>
                                <View style={StyledEdit.Column1}>
                                    <Button title='SALVAR' color={Colors.White} backgroundColor={Colors.Black} onPress={() => clickSave()} />
                                </View>
                            </View>
                        </>
                    )
                    break;
                case 5:
                    setTitleComponent(<Text style={StyledTop.Title}>Saída</Text>)
                    setContainerComponent(
                        <>
                            <View style={StyledEdit.Row}>
                                <View style={StyledEdit.Column2}>
                                    <Input title='Quantidade' textAlign='center' value={1} />
                                </View>
                                <View style={StyledEdit.Column2}>
                                    <Input title='Valor Total' legend='R$' textAlign='right' value={data.value} placeholder='0,00' />
                                </View>
                            </View>
                            <View style={[StyledEdit.Row, {marginBottom: 50}]}>
                                <View style={StyledEdit.Column2}>
                                    <Input title='Tipo' value='Consumo' />
                                </View>
                                <View style={[StyledEdit.Column2, {justifyContent: 'flex-end'}]}>
                                    <View style={{height: 50}}>
                                        <Button title='SALVAR' color={Colors.White} backgroundColor={Colors.Black} onPress={() => clickSave()} />
                                    </View>
                                </View>
                            </View>
                        </>
                    )
                    break;
            }
        }

        loadWine();
    }, [update])

    const [isModalVisible, setModalVisible] = React.useState<boolean>(false);
    const [isCommentVisible, setCommentVisible] = React.useState<boolean>(false);

    function clickSave() {

    }

    return (
        <Container>
            <View style={StyledTop.Main}>
                <Touch style={StyledTop.Touch} onPress={() => nav.goBack()}>
                    <Image source={imgBack} style={StyledTop.ImgTouch} />
                </Touch>
                { titleComponent }
            </View>
            <View style={StyledMain.Main}>
                <Text style={StyledMain.Title}>{ data.name }</Text>
                <View style={StyledMain.Columns}>
                    <View style={StyledMain.BoxImage}>
                        <View style={StyledMain.BoxYear}>
                            <Text style={StyledMain.Year}>{ data.year }</Text>
                            <View style={[StyledMain.BoxBrand, {backgroundColor: data.color}]}>
                                <Text style={StyledMain.Brand}>Fasoli Gino</Text>
                            </View>
                        </View>
                        <Image source={data.image} style={StyledMain.Image} />
                    </View>
                    <View style={StyledMain.BoxInfos}>
                        <Touch style={StyledMain.BoxInfo} activeOpacity={0.7} onPress={() => setModalVisible(true)}>
                            <Image source={imgClassification} style={StyledMain.ImageInfo} />
                            <Text style={StyledMain.ValueInfo}>{ data['classification'] }</Text>
                            <Text style={StyledMain.LegendInfo}>classificação</Text>
                        </Touch>
                        {
                            route.params?.type != 3 && (
                                <>
                                    <Touch style={StyledMain.BoxInfo} activeOpacity={0.7}>
                                        <Image source={imgWine} style={StyledMain.ImageInfo} />
                                        <Text style={StyledMain.ValueInfo}>{ data['stock'] }</Text>
                                        <Text style={StyledMain.LegendInfo}>estoque</Text>
                                    </Touch>
                                    <View style={StyledMain.BoxValue}>
                                        <View style={{flexDirection: 'row'}}>
                                            <Text style={StyledMain.SimbolValue}>R$</Text>
                                            <Text style={StyledMain.Value}>
                                                { String(data['value']).substr(0, String(data['value']).indexOf(',')) }
                                                <Text style={StyledMain.ValueSmall}>{ String(data['value']).substr(String(data['value']).indexOf(','), 99) }</Text>
                                            </Text>
                                        </View>
                                    </View>
                                </>
                            )
                        }
                    </View>
                </View>
            </View>
            <FlatList
                data={dataInfos}
                contentContainerStyle={StyledList.Main}
                renderItem={
                    ({item}) => (
                        <View style={StyledList.Item}>
                            <Image source={item.icon} style={StyledList.Icon} />
                            <View style={StyledList.BoxText}>
                                <Text style={StyledList.Title}>{ String(item.title).toUpperCase() }</Text>
                                <Text style={StyledList.Value}>{ String(item.value).toUpperCase() }</Text>
                            </View>
                        </View>
                    )
                }
                keyExtractor={(item: any) => item.title}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
            { containerComponent }
            <Modal
                style={StyledModal.Main}
                isVisible={isModalVisible}
                onBackdropPress={() => setModalVisible(false)}
                avoidKeyboard
                // animationIn='shake'
            >
                <View style={StyledModal.Container}>
                    <View style={StyledModal.BoxTitle}>
                        <Image source={imgClassification} style={StyledModal.ImageClassification} />
                        <Text style={StyledModal.ValueClassification}>{ data['classification'] }</Text>
                        <Text style={StyledModal.TextClassification}>Classificação</Text>
                    </View>
                    <View style={StyledModal.Classification}>
                        <View style={StyledModal.Stars}>
                            <Image source={iconStar} style={StyledModal.IconStar} />
                            <Image source={iconStar} style={StyledModal.IconStar} />
                            <Image source={iconStar} style={StyledModal.IconStar} />
                            <Image source={iconStar} style={StyledModal.IconStar} />
                            <Image source={iconStar} style={StyledModal.IconStar} />
                        </View>
                        <Text style={StyledModal.TextStars}>Dê sua nota!</Text>
                    </View>
                    <View style={StyledModal.Comments}>
                        <View style={StyledModal.BoxTitleComments}>
                            <Text style={StyledModal.TitleComments}>{ isCommentVisible ? 'O que estão falando' : 'Seu comentário' }</Text>
                            <Touch onPress={() => setCommentVisible(!isCommentVisible)}>
                                <Image source={iconComment} style={StyledModal.IconComments} />
                            </Touch>
                        </View>
                        {
                            !isCommentVisible
                            ?
                                <FlatList
                                    data={dataComments}
                                    style={StyledModal.ListComments}
                                    renderItem={
                                        ({item}) => (
                                            <View style={StyledModal.Comment}>
                                                <View style={[StyledModal.Icon, {backgroundColor: item.codusuario % 2 == 0 ? Colors.Red : Colors.Blue}]}>
                                                    <Text style={StyledModal.TextIcon}>{ item.usuario.substr(0,1) }</Text>
                                                </View>
                                                <View style={StyledModal.BoxTextComment}>
                                                    <Text style={StyledModal.UserComment}>{ item.usuario }</Text>
                                                    <Text style={StyledModal.TextComment}>{ item.comentario }</Text>
                                                </View>
                                                <Text style={StyledModal.DateComment}>{ item.data }</Text>
                                            </View>
                                        )
                                    }
                                    keyExtractor={(item) => item.codusuario.toString()}
                                    showsVerticalScrollIndicator={false}
                                />
                            : 
                                <View style={StyledModal.BoxComment}>
                                    <Input textAlign='left' placeholder='Diga-nos o que achou!' />
                                    <View style={StyledModal.BoxButtonComment}>
                                        <Button title='COMENTAR' color={Colors.White} backgroundColor={Colors.Black} onPress={() => null} />
                                    </View>
                                </View>
                        }
                    </View>
                </View>
            </Modal>
        </Container>
    )
}