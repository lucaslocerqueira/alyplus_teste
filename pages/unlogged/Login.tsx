import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';

/*
  TODO:
  1. validação de formulários (ver se e-mail é válido, e não está vazio), o mesmo com a senha
  2. navegação para a tela de cadastrar-se
*/

export default function Login() {
  const navigation = useNavigation();

  function navigateToRoute(route: string) {
    //VAlidação dos dados, se deu bom, pode deixar o cara entrar, senão, mostra amensagem de
    navigation.navigate(route);
  }

  return (
    <>
      <View>
        <View>
          <Text>ALY+</Text>
        </View>

        <View>
          <TextInput placeholder="E-mail" />
          <TextInput placeholder="Senha" />
          <Button onPress={() => navigateToRoute("Home")} title="Entrar" />
        </View>

        <View>
          <Text onPress={() => navigateToRoute("Home")}>
            Cadastrar-se
          </Text>
        </View>

      </View>
    </>

  );

}
