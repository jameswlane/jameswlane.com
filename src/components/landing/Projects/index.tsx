import * as React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Container, Card } from 'Common'
import starIcon from 'Static/icons/star.svg'
import forkIcon from 'Static/icons/fork.svg'
import { Wrapper, Grid, Item, Content, Stats } from './styles'

export const Projects = () => (
  <StaticQuery
    query={graphql`
			{
				github {
					repositoryOwner(login: "jameswlane") {
						repositories(
							first: 6
							orderBy: { field: STARGAZERS, direction: DESC }
						) {
							edges {
								node {
									id
									name
									url
									description
									stargazers {
										totalCount
									}
									forkCount
								}
							}
						}
					}
				}
			}
		`}
    render={({
               github: {
                 repositoryOwner: {
                   repositories: { edges },
                 },
               },
             }) => (
      <Wrapper as={Container} id="projects">
        <h2>Projects</h2>
        <Grid>
          {edges.map(({ node }: any) => (
            <Item
              key={node.id}
              as="a"
              href={node.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card>
                <Content>
                  <h4>{node.name}</h4>
                  <p>{node.description}</p>
                </Content>
                <Stats>
                  <div>
                    <img src={starIcon} alt="stars"/>
                    <span>{node.stargazers.totalCount}</span>
                  </div>
                  <div>
                    <img src={forkIcon} alt="forks"/>
                    <span>{node.forkCount}</span>
                  </div>
                </Stats>
              </Card>
            </Item>
          ))}
        </Grid>
      </Wrapper>
    )}
  />
)