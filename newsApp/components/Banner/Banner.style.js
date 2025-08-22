import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    width: '100%',
    height: width * 0.5 + 48,
    marginBottom: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#1a1a2e',
    letterSpacing: 2,
    marginBottom: 8,
    textTransform: 'uppercase',
    textShadowColor: 'rgba(255, 0, 0, 0.12)',
    textShadowOffset: { width: 4, height: 4 },
    textShadowRadius: 6,
    
  },
  image: {
    width: width * 0.9,
    height: width * 0.5,
    borderRadius: 18,
    marginHorizontal: width * 0.025,
    resizeMode: 'cover',
  },
});
