import React from "react";
import { InputGroup, Collapse, Icon, Intent, Button, H3, H4, Card, Elevation } from "@blueprintjs/core";
import SearchWrap from '../components/styled/SearchWrap';
import SearchDisplay from '../components/styled/SearchDisplay';
import SearchInfo from '../components/styled/SearchInfo';
import { handleStringChange } from "@blueprintjs/docs-theme";
import RandomEpisode from "../components/RandomEpisode";

export default class SearchRoute extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: [],
            filterValue: "",
            large: false,
            placeholder: "Search",
            epNums: 0,
            epTitle: "",
            title: "",
            searchInput: "",
            hasRendered: false,
            isFetching: false,
            pic: "",
            season: null,
            episode_number:null,
            thumb: "",
            display: 'none',
            totalReturn: 0,
            keyNum: 0,
            year: null,
            isFetchingShow: false,
            active: true,
            id:0,
            isOpen: false
        }
    }

    handleChange = handleStringChange(searchInput => this.setState({ searchInput }));
    handleTrashClick = () => {
        this.setState({data: []});
        document.querySelector("#input").focus();
    }

    caretClick = () => {
        this.setState({ isOpen: !this.state.isOpen })        
    }

    handleCardClick = (id) => {
        const item = this.state.data.find(
            item => item.showId === id
        );
        alert(item.title);
        // const ele = this.props;
        // this.setState({ isOpen: !this.state.isOpen })
        // this.setState({showId: id})
        // if(this.state.data.length > 1) {
        //     for(let i = 0 ; i < this.state.data.length ; i++){
        //         if(ele.key === id){
        //             this.setState({data: [this.state.data[i]], showId: id})
        //             break;
        //         }
        //     }
        // }

        // for(let i = 0 ; i < this.state.data.length ; i++){
        //     if(this.state.data[i].id != id){
        //         this.state.data[i].splice(i, 1);
        //     }
        // }
        // return this.state.data;
    }

    generateRand = (min, max) => {
        return Math.floor(Math.random()*(max-min+1)+min)
    }   

    showCall = async (term) => {
        let route = '/episode_search/' + term;
        const response = await fetch(route);
        const body = await response.json();
        if (response.status !== 200) {
          throw Error(body.message) 
        }
        return body;
    }

    episodeCall = async (showId) => {
        let route = '/random_search/' + showId;
        const response = await fetch(route);
        const body = await response.json();
        if (response.status !== 200) {
          throw Error(body.message) 
        }
        return body;
    }

    getSearch = async (term) => {
        this.setState({ pic: "", season: null, episode_number: null, thumb: "", display: "none"});
        this.showCall(term)
        .then(res => this.setState({ epNums: res.num.total_results, hasRendered: true, isFetching: false, display: 'flex', data: res.show, totalReturn: res.num, year: res.show.first_aired }))
        .catch(err => console.log(err));
    }

    getRandEpisode = (showId) => {
        this.setState({isFetchingShow:true, season: null, episode_number: null, thumb: "", epTitle: "", keyNum: 0, isOpen: true});
        const randoN = this.generateRand(0, (this.state.epNums - 1));
        this.episodeCall(showId)
          .then(res => this.setState({epNums: res.num.total_results, epTitle: res.episode[randoN].title, season: "Season " + res.episode[randoN].season_number, episode_number: "Episode " + res.episode[randoN].episode_number,hasRendered: true, isFetching: false, isFetchingShow: false, thumb: res.episode[randoN].thumbnail_208x117, keyNum: 0, isOpen: !this.state.isOpen}))
          .catch(err => console.log(err)); 
      }

    
    render(){
        const inputStyle = {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            margin: 0,
            boxSizing: 'border-box'
        }
        const { large, placeholder, data } = this.state;
        const display = {
            display: this.state.display
        };
        return(
            <div className="flex-col">
                <SearchWrap>
                    <H3 className="text-center">Search for a specific TV show to generate a random episode</H3>
                    <InputGroup
                        large={large}
                        leftIcon="search"
                        rightElement={
                            <Button 
                                minimal={true} 
                                icon="arrow-right" 
                                intent={Intent.PRIMARY}
                                loading={this.state.isFetching}
                                onClick={this.getSearch.bind(this, this.state.searchInput)}
                                type="submit"
                            />
                        }
                        onChange={this.handleChange}
                        placeholder={placeholder}
                        type = "input"
                        style={inputStyle}
                        id="input"
                    >
                    </InputGroup>
                    <Button icon="trash" style = {display} onClick={this.handleTrashClick.bind(this)} id="trash-button"></Button>

                        { 
                            !this.state.isFetching && this.state.active && !this.state.isOpen ? (
                                data.map(item => {
                                        const { title, first_aired, id } = item;
                                        return (
                                                <Card key={id} interactive={false} elevation={Elevation.ONE} className="card-list" onClick={e => this.handleCardClick(id)}>
                                                    <h2>{title} <span>({first_aired.substring(0,4)})</span></h2>
                                                    <Icon icon="chevron-down" iconSize={20}></Icon> 
                                                </Card>
                                        );
                                    }
                                )
                            ) : (
                                data.map(item => {
                                    const { title, first_aired, id} = item;

                                    return (
                                            <Card key={id} interactive={false} className="card-list" onClick={this.handleCardClick.bind(this, id)}>
                                                <h2>{title} <span>({first_aired.substring(0,4)})</span></h2>
                                                <Collapse isOpen={this.state.isOpen} transitionDuration={1500}>
                                                    <Button 
                                                        onClick={this.getRandEpisode.bind(this, id)}
                                                        loading={this.state.isFetchingShow}
                                                    >
                                                        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around', alignItems:'center', width:140}}>
                                                            Random episode
                                                            <Icon icon="random" color={'#FF9800'}  style={{display:'flex', flexDirection:'row', alignItems:'center',justifyContent:'center',height:25, paddingTop:1}}/>
                                                        </div>
                                                    </Button> 
                                                </Collapse>
                                                <Icon icon="chevron-up" iconSize={20}></Icon>
                                            </Card>
                                    );
                                }
                            )
                                ) 
                        }
                </SearchWrap>
            </div>


















/*<Button 
                                                    onClick={this.getRandEpisode.bind(this, this.state.showId)}
                                                    loading={this.state.isFetchingShow}>
                                                    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around', alignItems:'center', width:140}}>
                                                        Random episode
                                                        <Icon icon="random" color={'#FF9800'}  style={{display:'flex', flexDirection:'row', alignItems:'center',justifyContent:'center',height:25, paddingTop:1}}/>
                                                    </div>
                                                </Button> */
        );
    }
}
/* 

                    <SearchDisplay style={display}>
                        <SearchInfo>
                        

                            <Button onClick={this.getRandEpisode.bind(this, this.state.showId)}
                                id = "searchButton"
                                loading={this.state.isFetching}>
                                <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around', alignItems:'center', width:140}}>
                                    Generate
                                    <Icon icon="random" color={'#FF9800'}  style={{display:'flex', flexDirection:'row', alignItems:'center',justifyContent:'center',height:25, paddingTop:1}}/>
                                </div>
                            </Button>
                        </SearchInfo>
                    </SearchDisplay>
                 */
/* <SearchInfo>
<img src={this.state.pic} height={171} width={212} alt="searchPic"></img>
</SearchInfo> */
/* <H4>{this.state.title}</H4>
<H4>{this.state.epTitle}</H4>
<p>{this.state.season} {this.state.episode_number}</p>
<img src ={this.state.thumb}></img> */