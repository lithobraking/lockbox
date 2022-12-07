import { Container } from "@chakra-ui/react";
import Post from "../components/Post";
import testImage from '/Users/parker/Code/for-fun/lockbox/src/assets/IMG_9565.jpg'

const Capsule = () => {

    return (
        <Container>
            {data.map((post) => {
                return (
                    <Post
                        image={post.image ? post.image : null}
                        title={post.text.title ? post.text.title : null}
                        body={post.text.body ? post.text.body : null}
                    />
                )
            })}
        </Container>
    )
}

export default Capsule;