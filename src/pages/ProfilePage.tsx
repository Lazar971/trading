import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Container, Image, Segment } from 'semantic-ui-react';
export default function ProfilePage() {

    const [imageSrc, setImageSrc] = useState('');



    const loadImage = () => {
        axios.get('https://picsum.photos/285/285').then(res => {
            console.log(res);
            setImageSrc(res.request.responseURL)
        })
    }
    useEffect(() => {
        loadImage();
    }, [])
    if (!imageSrc) {
        return <Segment loading basic />
    }

    return (
        <Container>
            <Card>
                <Image src={imageSrc} />
                <Card.Header>Lazar Milosavljevic</Card.Header>
                <Card.Meta>
                    lazar.milosavljevic97@gmail.com
                </Card.Meta>
                <Card.Content extra>
                    <Button primary onClick={loadImage}>Toggle avatar</Button>
                </Card.Content>
            </Card>
        </Container>
    )
}
