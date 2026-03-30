import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Linking, Dimensions, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';
import { StatusBar } from 'expo-status-bar';

const { width: screenWidth } = Dimensions.get('window');

interface GithubUserData {
  fullName: string;
  handle: string;
  avatarLocal: any;
  followers: number;
  following: number;
  location: string;
  bioParagraphs: string[];
  socialButtons: { title: string; uri: string; link: string }[];
  bannerLocal: any; 
  dynamicUris: {
    typingHeaderSkills: string;
    typingHeaderTools: string;
    statsCard: string;
    topLangsCard: string;
    snakeAnimation: string;
  };
  skillGridImages: {
    skillsGridLocal: any;
    toolsGridLocal: any;
  };
}

const userData: GithubUserData = {
  fullName: "João Paulo Goreri Rustichelli",
  handle: "Joao1paulo • he/him",
  avatarLocal: require('./assets/avatar.png'),
  followers: 23,
  following: 17,
  location: "Registro, SP",
  bioParagraphs: [
    "Um estudante do 4º período de Desenvolvimento de Software Multiplataforma na FATEC Registro e formado como Técnico em Desenvolvimento de Sistemas na ETEC Registro.",
    "Tenho grande afinidade com desenvolvimento Front-end e UX/UI, buscando sempre unir estética e funcionalidade em cada projeto que desenvolvo."
  ],
  socialButtons: [
    { title: "Instagram", uri: "https://img.shields.io/badge/-Instagram-D20627?style=for-the-badge&logo=instagram&logoColor=white", link: "https://www.instagram.com/um_jotape/" },
    { title: "Discord", uri: "https://img.shields.io/badge/-Discord-A02161?style=for-the-badge&logo=discord&logoColor=white", link: "https://discord.com/users/xotapeee" },
    { title: "Gmail", uri: "https://img.shields.io/badge/-Gmail-6142B2?style=for-the-badge&logo=gmail&logoColor=white", link: "mailto:joaopaulo.rustichelli@gmail.com" },
    { title: "LinkedIn", uri: "https://img.shields.io/badge/-LinkedIn-4451D8?style=for-the-badge&logo=linkedin&logoColor=white", link: "https://www.linkedin.com/in/joao-paulo-goreri-rustichelli-78301b232" }
  ],
  bannerLocal: require('./assets/banner-github.png'), 
  dynamicUris: {
    typingHeaderSkills: "https://readme-typing-svg.herokuapp.com?font=Lexend&size=45&duration=2000&pause=4000&color=FF3641&vCenter=true&width=600&height=60&lines=Linguagens+e+tecnologias",
    typingHeaderTools: "https://readme-typing-svg.herokuapp.com?font=Lexend&size=45&duration=2000&pause=4000&color=E33F83&vCenter=true&width=600&height=60&lines=Ambientes+e+Ferramentas",
    statsCard: "https://github-readme-stats.vercel.app/api?username=joao1paulo&theme=radical&show_icons=true&locale=en",
    topLangsCard: "https://github-readme-stats.vercel.app/api/top-langs/?username=joao1paulo&theme=radical&layout=compact&custom_title=Tecnologias&langs_count=9",
    snakeAnimation: "https://raw.githubusercontent.com/Joao1paulo/Joao1paulo/output/snake.svg",
  },
  skillGridImages: {
    skillsGridLocal: require('./assets/linguagensTecnologias.png'),
    toolsGridLocal: require('./assets/ambientesFerramentas.png'),
  }
};

const DynamicSvgBanner = ({ uri, height, extraStyle }: { uri: string; height: number; extraStyle?: any }) => (
  <View style={[styles.webViewContainer, { height }, extraStyle]}>
    <WebView
      source={{ uri }}
      scalesPageToFit={true}
      javaScriptEnabled={true}
      domStorageEnabled={true}
      originWhitelist={['*']}
      style={{ flex: 1, backgroundColor: 'transparent' }}
    />
  </View>
);

const SocialButtonBadge = ({ uri, title, link }: { uri: string; title: string; link: string }) => (
  <TouchableOpacity onPress={() => Linking.openURL(link)} style={styles.socialBadgeContainer}>
    <Image source={{ uri }} style={styles.socialBadgeImage} resizeMode="contain" />
  </TouchableOpacity>
);

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
        
        <Image
          source={userData.bannerLocal}
          style={styles.localBanner}
          resizeMode="contain"
        />

        <View style={styles.mainInnerContent}>

          <View style={styles.profileSection}>
            <Image source={userData.avatarLocal} style={styles.avatar} />
            <Text style={styles.fullName}>{userData.fullName}</Text>
            <Text style={styles.handle}>{userData.handle}</Text>
            
            <View style={styles.statFollowerRow}>
                <Text style={styles.statText}>👥 {userData.followers} followers</Text>
                <Text style={styles.statText}> • </Text>
                <Text style={styles.statText}>{userData.following} following</Text>
            </View>

            <Text style={styles.locationText}>📍 {userData.location}</Text>
          </View>

          <View style={styles.badgeRow}>
            <View style={styles.profileBadgeBlock}>
              <Text style={styles.profileBadgeText}>Desenvolvedor Front-end</Text>
            </View>
            <View style={styles.profileBadgeBlock}>
              <Text style={styles.profileBadgeText}>UX/UI Designer</Text>
            </View>
          </View>
          
          <View style={styles.hrDivider} />

          <View style={styles.bioSection}>
            {userData.bioParagraphs.map((paragraph, index) => (
              <Text key={index} style={styles.bioText}>{paragraph}</Text>
            ))}
          </View>

          <View style={styles.socialButtonsRow}>
            {userData.socialButtons.map((btn) => (
              <SocialButtonBadge key={btn.title} title={btn.title} uri={btn.uri} link={btn.link} />
            ))}
          </View>

          <View style={styles.hrDivider} />

          <DynamicSvgBanner uri={userData.dynamicUris.typingHeaderSkills} height={screenWidth * 0.15} extraStyle={styles.skillsGifHeader} />
          <Image source={userData.skillGridImages.skillsGridLocal} style={styles.skillsGridImage} resizeMode="contain" />

          <DynamicSvgBanner uri={userData.dynamicUris.typingHeaderTools} height={screenWidth * 0.1} extraStyle={styles.toolsGifHeader} />
          <Image source={userData.skillGridImages.toolsGridLocal} style={styles.toolsGridImage} resizeMode="contain" />

          <View style={styles.hrDivider} />

          <View style={styles.statsCardRow}>
            <DynamicSvgBanner uri={userData.dynamicUris.statsCard} height={screenWidth * 0} />
            <DynamicSvgBanner uri={userData.dynamicUris.topLangsCard} height={screenWidth * 0} />
          </View>

          <Text style={styles.readmeHeader}>Histórico de Commits</Text>
          <DynamicSvgBanner uri={userData.dynamicUris.snakeAnimation} height={screenWidth * 0.25} />

        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d1117',
  },
  contentContainer: {
    paddingBottom: 40,
  },
  mainInnerContent: {
    paddingHorizontal: 20,
    paddingTop: 15,
  },

  localBanner: {
    width: screenWidth * 0.9,
    height: screenWidth * 0.45, 
    alignSelf: 'center', 
    marginTop: 40,
    borderRadius: 6, 
    overflow: 'hidden', 
  },
  webViewContainer: {
    marginVertical: 10,
    backgroundColor: 'transparent',
    overflow: 'hidden',
    borderRadius: 6,
  },
  skillsGifHeader: {
    marginTop: 20,
    marginBottom: -20,
  },
  toolsGifHeader: {
    marginTop: 10,
    marginBottom: -20,
  },
  profileSection: {
    alignItems: 'center',
    marginVertical: 15,
  },
  avatar: {
    width: 190,
    height: 190,
    borderRadius: 90,
    borderWidth: 1,
    borderColor: '#30363d',
  },
  fullName: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 15,
    textAlign: 'center',
  },
  handle: {
    color: '#8b949e',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 8,
  },
  statFollowerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  statText: {
    color: '#8b949e',
    fontSize: 14,
  },
  locationText: {
    color: '#8b949e',
    fontSize: 14,
    marginVertical: 5,
  },
  badgeRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    marginVertical: 10,
  },
  profileBadgeBlock: {
    backgroundColor: '#0d1117',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: '#30363d',
    borderRadius: 20,
  },
  profileBadgeText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: 'bold',
  },
  hrDivider: {
    height: 1,
    backgroundColor: '#21262d',
    marginVertical: 20,
  },
  bioSection: {
    marginVertical: 0,
  },
  bioText: {
    color: '#fff',
    fontSize: 15,
    lineHeight: 22,
    marginVertical: 3,
    textAlign: 'left',
  },
  socialButtonsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 0,
    flexWrap: 'wrap',
    marginVertical: 0,
  },
  socialBadgeContainer: {
    overflow: 'hidden',
    borderRadius: 4,
  },
  socialBadgeImage: {
    width: 90,
    height: 25,
  },
  skillsGridImage: {
    width: screenWidth - 40,
    height: 120,
    marginTop: 0,
    marginBottom: 40,
  },
  toolsGridImage: {
    width: screenWidth - 40,
    height: 100,
    marginTop: 0,
    marginBottom: 10,
  },
  readmeHeader: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 15,
  },
  statsCardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    flexWrap: 'wrap',
    marginVertical: 0,
  },
});