/*
Here is a component called by Search.js that renders the brand "cards" on the
/brand page, based on the information provided by the parent component
 */

// @flow
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { KARMA_LABELS } from '../../../utils'
import icon_clap from '../../../images/icons/clap.svg'

// <STYLE>
const ResultCard = styled.div`
	border-radius: 30px;
	min-height: 80px;
  font-weight: 500;
  display: flex;
  align-items: center;
  margin-right: 5rem;
  margin-bottom: 4rem;
  box-sizing: border-box;

  &:nth-child(5n+5) {
    @media(min-width: 1200px) {
      margin-right: 0;
    }
  }
  &:nth-child(4n+4) {
    @media (min-width: 990px) and (max-width: 1200px) {
      margin-right: 0;
    }
  }
  &:nth-child(3n+3) {
    @media (min-width: 768px) and (max-width: 990px) {
      margin-right: 0;
    }
  }
  &:nth-child(2n+2) {
    @media (max-width: 768px) {
      margin-right: 0;
    }
  }
  @media (max-width: 768px) {
    margin-right: 6%;
    width: 47%;
  }

  a {
    @media (max-width: 768px) {
      width: 100%;
    }
  }

  .square {
    position: relative;
    background-color: white;
    height: 18.4rem;
    width: 18.4rem;
    border-radius: 3rem;
    display: flex;
    align-items:center; 
    overflow: hidden;

    @media(max-width: 1200px) {
      height: 19.8rem;
      width: 19.8rem;
    }

    @media(max-width: 990px) {
      height: 20.1rem;
      width: 20.1rem;
    }

    @media(max-width: 768px) {
      height: auto;
      width: 100%;
      padding-bottom: 100%;
    }

    img{
      @media(max-width: 768px) {
       position: absolute;
       left: 50%;
       top: 50%;
       transform:translate(-50%, -50%);
      }
    }
  }	

	&:hover {
    cursor: pointer;
    
    .square {
      div {
        opacity: 1;
        transform: scale(1);
      }
    }
  }
  
  img{
    display: block;
    margin: auto;
    transition: transform 1.2s ease;
    transform: scale(1);
  }
`

const CompanyName = styled.div`
	color: #a9b4cc;
  font-size: 0.95em;
  text-align: center;
`

const ResultHover = styled.div`
  position: absolute;
  background-color:rgba(83,91,101,0.85);
  text-align:center;
  top:0;
  left:0;
  width:100%;
  height:100%;
  display:flex;
  align-items:center;
  justify-content:center;
  color: white;
  flex-direction: column;
  opacity: 0;
  transform: scale(1.2);
  transition: all 0.3s ease-in-out;
`
const RoundImage = styled.div`
  width: 7rem;
  height:7rem;
  border-radius:50%;
  background-color: white;
  display:flex;
  align-items:center;
  justify-content:center;
`

// </STYLE>

// SearchResult component: displays the company card based on the name, and
// logo provided. Also adds a link to the relevant brand page based on the id
class SearchResult extends React.Component {

  state = {
    karmaSlug: '',
    karmaTitle: ''
  }

  constructor(props) {
    super(props)
    this.upVote = this.props.upVote.bind(this)
  }

  componentWillReceiveProps(nextProps) {

  }

  render() {
    return (
      <ResultCard >
        <div>
          <div class="square">
            <img
              src={process.env.PUBLIC_URL + '/images/' + this.props.logo}
              width="80"
              alt="company"
            />
            <ResultHover onClick={this.upVote.bind(this)}>
              <small>1200 votes</small>
              <RoundImage><img src={icon_clap} /></RoundImage>
              Je veux aussi !
            </ResultHover>
          </div>
          <CompanyName>{this.props.name}</CompanyName>

        </div>
      </ResultCard>
    )
  }
}


export default SearchResult
