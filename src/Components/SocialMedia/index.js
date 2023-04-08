import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { SocialMediaSection, Social, Icon, Paragraph, SpanOne, SpanTwo } from './style'



const SocialMedia = () => {

  const [social, setSocial] = useState([]);
  useEffect(() => {
    axios.get('js/data.json').then((res) => setSocial(res.data.social))
  }, [])

  const socialList = social.map((soci) => {
    return (
      <Social key={soci.id} item={soci.id}>
        <Icon className={soci.icon}></Icon>
        <Paragraph>
          <SpanOne>{soci.title}</SpanOne>
          <SpanTwo>{soci.body}</SpanTwo>
        </Paragraph>
      </Social>
    )
  })

  return (
    <SocialMediaSection>

      {socialList}
    </SocialMediaSection>

  );
}

export default SocialMedia;
