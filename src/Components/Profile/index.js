import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { ProfileSkills, ProfileSection, ProfileList, ProfileItem, NameSpan, WebSpan, Skills, SkillsDesc, Bar, BarTitle, BarPerc, BarParent, BarSpan, ProfileTitle, ProfileTitleSpan, SkillsTitle, SkillsTitleSpan } from './style'

const Profile = () => {

  const [skills, setSkills] = useState([]);
  useEffect(() => {
    axios.get('/js/data.json').then((res) => setSkills(res.data.skills))
  }, [])
  const skillList = skills.map((skill) => {
    return (
      <Bar key={skill.id} >
        <BarTitle>{skill.title}</BarTitle>
        <BarPerc>{skill.percentage}</BarPerc>
        <BarParent>
          <BarSpan width={skill.percentage}></BarSpan>
        </BarParent>
      </Bar>
    )
  })
  return (
    <ProfileSkills>
      <div className="container">
        <ProfileSection>
          <ProfileTitle><ProfileTitleSpan>My </ProfileTitleSpan>Profile</ProfileTitle>
          <ProfileList>
            <ProfileItem>
              <NameSpan>Name</NameSpan>
              Hamza Nabil
            </ProfileItem>
            <ProfileItem>
              <NameSpan>Birthday</NameSpan>
              21/1/1996
            </ProfileItem>
            <ProfileItem>
              <NameSpan>Address</NameSpan>
              Ain shams
            </ProfileItem>
            <ProfileItem>
              <NameSpan>Phone</NameSpan>
              4444 5555 6666
            </ProfileItem>
            <ProfileItem>
              <NameSpan>Email</NameSpan>
              hamza@hamza.com
            </ProfileItem>
            <ProfileItem>
              <NameSpan>Website</NameSpan>
              <WebSpan>www.google.com</WebSpan>
            </ProfileItem>
          </ProfileList>
        </ProfileSection>

        <Skills>
          <SkillsTitle>Some <SkillsTitleSpan>skills</SkillsTitleSpan></SkillsTitle>
          <SkillsDesc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
          </SkillsDesc>
          {skillList}
        </Skills>

      </div>
    </ProfileSkills>

  )
};

export default Profile;
