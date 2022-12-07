import { Card, CardBody, CardHeader, Heading, Image, Text } from "@chakra-ui/react"

const Post = ({image, title, body, video, link}) => {
    return(
    <Card my={3} >
        {image ? <Image 
        borderRadius='md' 
        m={3}
        src={image.source} 
        /> 
        : null}
        {title ?
            <CardHeader>
                <Heading size='md'>{title}</Heading>
            </CardHeader>
            : null
        }
        {
            body ?
            <CardBody>
                <Text>{body}</Text>
            </CardBody>
            : null
        }
    </Card>
    )
};

export default Post;