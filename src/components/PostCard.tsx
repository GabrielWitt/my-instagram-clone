// src/components/PostCard.tsx
import { Post } from '@/src/types/Post';
import { Image } from 'expo-image';
import { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { ImageModal } from '../screens/postDetail';
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

  // State to handle modal visibility for image preview
  const [detailVisible, setDetailVisible] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  const openModal = (uri: string) => {
    setSelectedPhoto(uri);
    setDetailVisible(true);
  };

  const closeModal = () => {
    setDetailVisible(false);
    setSelectedPhoto(null);
  };

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
      <TouchableOpacity onPress={() => openModal(imageError ? '@/assets/images/brokenImage.png' : post.image)}>
        <Image
          source={
            imageError
              ? require('@/assets/images/brokenImage.png')
              : { uri: post.image }
          }
          onError={() => setImageError(true)}
          style={styles.image}
        />
      </TouchableOpacity>



      {/* Footer */}
      <PostBottom
        post={post}
        liked={liked}
        saved={saved}
        likesCount={likesCount}
        toggleLike={toggleLike}
        toggleSave={toggleSave}
      />
      {/* Image Detail */}
      <ImageModal
        isVisible={detailVisible}
        photoUri={selectedPhoto}
        onClose={closeModal}
      />
      {/* Options Modal */}
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