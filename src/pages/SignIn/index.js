import React, {useState} from "react";
import {Platform} from "react-native";
import {useNavigation} from "@react-navigation/native"

import {Background, Container, Logo, AreaInput, Input, SubmitButton, SubmitText, Link, LinkText} from "./styles"

export default function SignIn() {

    const navigation = useNavigation();

    const [email, setEmail] = useState("");
    const [passsword, setPassword] = useState("");

    return(
        <Background>
            <Container
            behavior={Platform.OS === "ios" ? "padding" : "" }
            enable
            >
                <Logo source={require('../../image/Logo.png')}/>

                <AreaInput>
                    <Input 
                    placeholder="Email"
                    autoCorrect={false}
                    autoCapitalize="none"
                    value={email}
                    onChangeText={ (text) => setEmail(text) }
                    />
                </AreaInput>
                

                <AreaInput>
                    <Input 
                    placeholder="Senha"
                    autoCorrect={false}
                    autoCapitalize="none"
                    value={passsword}
                    onChangeText={ (text) => setPassword(text) }
                    />
                </AreaInput>

                <SubmitButton>
                    <SubmitText>Acessar</SubmitText>
                </SubmitButton>

                <Link onPress={ () => navigation.navigate("SignUp") }>
                    <LinkText>Criar uma conta</LinkText>
                </Link>

            </Container>
        </Background>
    );
}