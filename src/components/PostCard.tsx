// src/components/PostCard.tsx
import { Post } from '@/src/types/Post';
import { Image } from 'expo-image';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { PostBottom } from './PostFooter';
import { PostHeader } from './PostHeader';
import { PostOptionsModal } from './PostOptionsModal';

interface Props {
  post: Post;
}

export const PostCard = ({ post }: Props) => {
  // State to handle modal visibility
  const [modalVisible, setModalVisible] = useState(false);
  
  // State to handle image and avatar loading errors
  const [imageError, setImageError] = useState(false);

  // State to handle like and save actions
  const [liked, setLiked] = useState(post.liked);
  const [likesCount, setLikesCount] = useState(post.likes);
  const [saved, setSaved] = useState(post.saved);

  const toggleLike = () => {
    setLiked(!liked);
    setLikesCount(liked ? likesCount - 1 : likesCount + 1);
  };

  const toggleSave = () => {
    setSaved(!saved);
  };

  return (
    <View style={styles.card}>
      {/* Header */}
      <PostHeader
        avatar={post.avatar}
        name={post.name}
        location={post.location}
        onOptionsPress={() => setModalVisible(true)}
      />

      {/* Image */}
      <Image
        source={
          imageError
            ? require('@/assets/images/brokenImage.png')
            : { uri: post.image }
        }
        onError={() => setImageError(true)}
        style={styles.image}
      />

      {/* Footer */}
      <PostBottom
        post={post}
        liked={liked}
        saved={saved}
        likesCount={likesCount}
        toggleLike={toggleLike}
        toggleSave={toggleSave}
      />

      <PostOptionsModal
        isVisible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 24,
    backgroundColor: '#000',
    borderRadius: 0,
    padding: 0,
    elevation: 3,
    textDecorationColor: '#FFF',
  },
  image: {
    width: '100%',
    height: 320,
    marginBottom: 6,
  },
  text: {
    color: '#FFF',
  },
  name: {
    color: '#FFF',
    fontWeight: 'bold',
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