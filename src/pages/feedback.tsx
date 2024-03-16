import React, { useState, useEffect } from 'react'
import { Box, TextField, IconButton } from '@mui/material'
import { ThumbUp, ThumbDown } from '@mui/icons-material'
import Navbar from './navbar'
import Footer from './Footer'
import styles from '../styles/FeedbackPage.module.css'

interface Post {
    id: number
    content: string
    likes: number
    dislikes: number
}

const FeedbackPage: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([])
    const [newPostContent, setNewPostContent] = useState<string>('')

    useEffect(() => {
        const timeoutIds: NodeJS.Timeout[] = []

        posts.forEach((post) => {
            const timeoutId = setTimeout(() => {
                removePost(post.id);
            }, 	86400000); 
            timeoutIds.push(timeoutId);
        });

        return () => {
            timeoutIds.forEach((timeoutId) => {
                clearTimeout(timeoutId)
            })
        }
    }, [posts])

    const handlePost = () => {
        if (newPostContent.trim() !== '') {
            const newPost: Post = {
                id: posts.length + 1,
                content: newPostContent,
                likes: 0,
                dislikes: 0,
            }
            setPosts([...posts, newPost])
            setNewPostContent('')
        }
    }

    const handleLike = (postId: number) => {
        const updatedPosts = posts.map((post) =>
            post.id === postId ? { ...post, likes: post.likes + 1 } : post
        )
        setPosts(updatedPosts)
    }

    const handleDislike = (postId: number) => {
        const updatedPosts = posts.map((post) =>
            post.id === postId ? { ...post, dislikes: post.dislikes + 1 } : post
        )
        setPosts(updatedPosts)
    }

    const removePost = (postId: number) => {
        const updatedPosts = posts.filter((post) => post.id !== postId)
        setPosts(updatedPosts)
    }

    return (
        <div>
            <Navbar />
            <div className={styles.feedbackPage}>
                <h1>Feedback Page</h1>
                <Box className={styles.postBox}>
                    <TextField
                        label="Write your opinion..."
                        variant="outlined"
                        fullWidth
                        multiline
                        value={newPostContent}
                        onChange={(e) => setNewPostContent(e.target.value)}
                    />
                    <button className={styles.postButton} onClick={handlePost}>
                        Post
                    </button>
                </Box>
                <div className={styles.posts}>
                    {posts.map((post) => (
                        <div key={post.id} className={styles.post}>
                            <p>{post.content}</p>
                            <div className={styles.actions}>
                                <IconButton onClick={() => handleLike(post.id)}>
                                    <ThumbUp />
                                </IconButton>
                                <span>{post.likes}</span>
                                <IconButton
                                    onClick={() => handleDislike(post.id)}
                                >
                                    <ThumbDown />
                                </IconButton>
                                <span>{post.dislikes}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default FeedbackPage
