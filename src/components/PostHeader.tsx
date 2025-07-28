import { Feather } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface GradientAvatarProps {
  uri: string;
  size?: number;
  borderWidth?: number;
}

interface PostHeaderProps {
  avatar: string;
  name: string;
  location: string;
  onOptionsPress?: () => void;
}

export const PostHeader = ({ avatar, name, location, onOptionsPress }: PostHeaderProps) => {
  return (
    <View style={styles.header}>
      <View style={styles.userInfo}>
        <GradientAvatar uri={avatar} size={40} />
        <View style={styles.nameLocation}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.location}>{location}</Text>
        </View>
      </View>

      <TouchableOpacity onPress={onOptionsPress}>
        <Feather name="more-horizontal" size={20} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameLocation: {
    marginLeft: 8,
  },
  name: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
  location: {
    color: '#666',
    fontSize: 12,
  },
  text: {
    color: '#FFF',
  },
  date: {
    color: '#CCC',
    fontSize: 12,
  },
  placeholderText: {
    color: '#AAA',
    marginLeft: 8,
  },
});


export const GradientAvatar = ({
  uri,
  size = 40,
  borderWidth = 2,
}: GradientAvatarProps) => {
  const avatarSize = size - borderWidth * 2;
  // State to handle image and avatar loading errors
  const [avatarError, setAvatarError] = useState(false);

  return (
    <LinearGradient
      colors={['#feda75', '#fa7e1e', '#d62976', '#962fbf', '#4f5bd5']} // rosa -> morado -> azul
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
        <Image
            source={
              avatarError
                ? require('@/assets/images/brokenImage.png')
                : { uri : uri }
            }
            onError={() => setAvatarError(true)}
            style={{
          width: avatarSize,
          height: avatarSize,
          borderRadius: avatarSize / 2,
          backgroundColor: '#fff',
        }}
        />
    </LinearGradient>
  );
};


