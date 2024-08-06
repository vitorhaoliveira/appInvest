import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Card from './components/Card';
import Header from './components/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Header containerText="Os 7 melhores inventimentos imobiliários"/>
        <Card 
          url="https://analise.orama.com.br/wp-content/uploads/2023/09/kncr.jpg"
          title="FII KNRI11 - Kinea Renda Imobiliária"
          description="O Kinea Renda Imobiliária investe em imóveis come
          rciais, como lajes corporativas e galpões logísticos. É conhecido por seu 
          portfólio diversificado e pela gestão ativa, o que contribui para uma boa performance e segurança."
        />

        <Card 
          url="https://osegredo.com.br/wp-content/uploads/2023/11/HGLG11.jpg"
          title="FII HGLG11 - CSHG Logística"
          description="O CSHG Logística é um fundo que investe em imóveis logísticos e industriais. A estratégia de 
          investir em centros de distribuição e galpões ajuda
           a proteger o fundo contra a volatilidade do mercado, oferecendo estabilidade e retorno consistente."
        />

        <Card 
          url="https://static.analisedeacoes.com/images/news/visc-vinci-shopping-centers.jpg"
          title="FII VISC11 - Vinci Shopping Centers"
          description="O Vinci Shopping Centers investe em shoppings e centros comerciais. Com uma carteira 
          diversificada de empreendimentos de varejo 
          e uma gestão focada na qualidade dos ativos, o fundo proporciona uma renda sólida e previsível."
        />

        <Card 
          url="https://portalrendimentos.com.br/wp-content/uploads/2024/05/Maxi-Renda-MXRF11-portal-rendimentos.webp"
          title="FII MXRF11 - Maxi Renda"
          description="O Maxi Renda é um fundo híbrido que investe em uma combinação de imóveis e títulos de 
          crédito imobiliário. Essa diversificação ajuda a
           proteger contra os riscos associados a qualquer segmento específico do mercado imobiliário."
        />

        <Card 
          url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPOJ0CygnHfS7fiUyh1E9CCcpqN35hnERf3A&s"
          title="FII BPFF11 - BTG Pactual Fundo de Fundos"
          description="O BTG Pactual Fundo de Fundos investe em cotas de outros fundos imobiliários, 
          proporcionando diversificação e acesso a um portfólio mais amplo
           de ativos. Essa estratégia pode ajudar a reduzir riscos e oferecer uma gestão profissional."
        />

        <Card 
          url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTDH7xkRTCy5nBCkuwRN1E2DgR-YuUChOBXw&s"
          title="FII BTLG11 - BTG Pactual Logística"
          description="O BTG Pactual Logística foca em imóveis logísticos e industriais, com uma estratégia
           voltada para a aquisição e gestão de centros de distribuição e galpões.
           O fundo busca gerar uma renda estável através de contratos de locação de longo prazo."
        />

        <Card 
          url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyPP8Jl2ai55MnUnGPkwRZ6RmXmEIL7HL8bg&s"
          title="FII RBRP11 - RBR Properties"
          description=" O RBR Properties investe em imóveis comerciais, como escritórios e lajes corporativas.
           A gestão ativa e o foco na qualidade
           dos ativos e na localização ajudam a assegurar uma boa performance e estabilidade."
        />
      </ScrollView>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 20,
  },
  topText: {
    fontSize: 18,
  }
});
