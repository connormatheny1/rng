import * as React from 'react';
const rWords =  require('../txt/rWords.txt');

export default class RandPhrase extends React.Component{
    constructor(props){
        super(props);
    
        this.state = {
            r:'',
            n:'',
            g:'',
        };
      }




    generateRand = (min, max) => {
        return Math.floor(Math.random()*(max-min+1)+min)
    }

    getPhrase = () => {
        const wordList = "rhypophagy,retrovert,retiary,retrocognition,ramuliferous,rictus,Rabelaisian,rotula,riziform,reductionism,rheophile,renverse,rhyparography,rorqual,russet,rectiserial,rhizic,roseaceous,regius,reticello,rep,reptant,redshort,remiform,refrangible,rondeau,rubricist,regreet,ranarium,revirescent,resipiscence,rosorial,reflation,ramus,revers,radiometeorograph,railophone,reliabilism,rulley,remora,rhythmometer,radiography,risus,recalesce,rebatement,runnel,repugn,roborate,romage,rake,resinography,ruptile,regrede,ramulus,reflet,rigidulous,relativism,rhipidate,rooirhebok,rhinology,radiogoniometer,rusticity,rodomontade,ratten,roulade,ripienist,rollick,retrochoir,rhabdos,reef,rosette,rhabdology,rupicoline,Russophobia,raffish,ruderary,retro,razzmatazz,reliquary,rerebrace,royal,remeant,roué,recrudescence,reflectography,rupellary,resorb,raguly,rachitogenic,radappertization,raschel,roundel,repoussé,rannygazoo,roriferous,ripieno,recision,regalism,rinkomania,rejoinder,recept,ratiné,rostrum,rochet,rugine,reeve,rimple,requiem,rotundate,refel,riem,rachiometer,rencounter,roborean,rosarium,rugous,rosmarine,rorulent,ramentum,rupestrian,recure,repository,runology,reglet,rubigo,ruction,rebullition,rubricality,retromorphosis,rede,recrement,rosin,ridgeling,reel,radiogenic,rivulose,rhathymia,rolly,riffler,respondentia,rotiferous,remontant,redivivus,renascent,rhapsodomancy,racemation,rubefaction,rhytidectomy,retrocede,rillmark,reprehend,rectigrade,radiosonde,ratemeter,reniform,retable,rheostat,rhinogenous,rittmaster,racemiferous,refocillate,rounceval,ringent,rodenticide,rugulous,rundale,ritornel,rideau,rataplan,ructation,radix,rampallion,radiesthesia,rhetoricaster,revehent,rhochrematics,riqq,rappel,regula,ravanastron,rondure,rostel,rhizoid,rhizogenic,rampick,rhadamanthine,reprobate,rugate,radiology,relucent,retronym,regulus,rostrum,recte,reclinate,roric,ribibe,ratheripe,rident,resile,retrenchment,respirometer,ridibund,ruth,retromancy,reticule,repetend,recondite,riometer,responsory,rantize,remittitur,risorial,reredos,rheotaxis,riddle-me-ree,revet,radioscope,rindle,ruddock,ragabash,rundle,risible,rhysimeter,rubaboo,refection,representationalism,rhombos,roadster,reduit,rabulous,rach,radicolous,resistentialism,rhagades,rackrent,rumfustian,ranunculaceous,recipiangle,rubicund,raceme,refectory,rivel,rasure,rhonchisonant,rhodopsin,rua,roche,radicated,ruche,reremouse,rundlet,radular,rafale,round,rushlight,reast,rutilant,ria,recidivism,raconteur,rhinoscope,raglan,ret,rancescent,rivulation,raptorial,rangiferine,retinoid,ruana,relume,rigescent,rhigosis,rhopalic,ranivorous,rhema,robinet,ruelle,rubican,rubinetto,rima,regelation,redact,roach,radicivorous,rowlock,ravelin,roup,rescript,rheotropism,reptation,rheid,reinfund,rubster,rudicle,raptus,rufescent,rubor,remotion,remonstrate,redoubtable,rostelliform,rheometer,rhyton,rotameter,reflectometer,roseate,ratline,rubious,retrad,redintegrate,rubricate,rotameter,rocaille,robur,riant,rabic,rugible,reedbuck,rasorial,reebok,roodge,retropulsion,rapprochement,receptacular,rancelman,religate,ratite,resiniferous,representamen,ramie,rotograph,repunit,revalorize,resofincular,rheography,rota,rhinocerotic,rheumatology,reckling,recoct,reddendum,relative,rom,reprography,retroussé,rhonchial,redolent,rockaway,revanche,ridel,rutidosis,rhubarb,resection,rheology,rebarbative,roorback,ruiniferous,rumbustious,raploch,roentgenography,rhematic,rand,raster,raisonneur,ratiocinate,restiform,rhizome,roentgen,rudenture,rhizophilous,reliction,retroject,rivage,relict,rosella,revie,rummer,recherché,refugium,resupine,rationalism,resiant,randan,replevin,risorgimento,reticella,rimiform,reticulose,retrophilia,rhexis,ridotto,rhaebosis,revest,rillet,regorge,revetment,récit,relâche,retinoscope,regal,rifacimento,rowen,retrograde,raduliform,rosarian,rood,rachis,rhabdoid,redargue,rabbet,refractory,rhabdomancy,repine,reguerdon,raciology,Russophile,retiform,recreant,retrogress,runcinate,runagate,retinise,rutherford,ruderate,réclame,rood,redan,rathe,ranarian,refringency,rounce,rumchunder,ruridecanal,rubedinous,rimose,refulgent,ramiferous,retrahent,raticide,roborant,ranine,rurigenous,rev,recumbent,radicle,raddle,rectrix,rogatory,rigadoon,revendicate,renitent,roundel,ramate,revalescent,rebec,racloir,retromingent,rachidian,reticle,renography,rete,remuant,raad,roturier,retinaculum,realism,radiciform,radarscope,roc,rectitudinous,rhopography,rya,riparian,retrorse,rowel,rameal,ripple,retiracy,redound,rarissima,requital,reflux,refluent,recto,remanent,réseau,rabble,recriminate,régisseur,regardant,rhizophagous,radiometer,relationism,recusant,refractometer,rhinocerial,russet,rupicaprine,rhynchodont,ramiform,reginal,reticular,retorse,revolute,regrate,rantipole,rhomboid,rubefy,reciprocornous,rubescent,remex,reglementation,regolith,roscid,ramage,ruthful,rebus,requiescat,rogation,ruffianize,rotocracy,rottack,roundelay,ratel,recaption,rudstay,rhamphoid,redhibition,regnal,remanet,runcation,rejectamenta,reticulate,rusticate,ruiniform,rheme,romal,randem,remueur,remigate,rampant,rullion,recadency,rubashka,reboant,roband,rug,rufous,rictal,ratihabition,rhotacism,retree,recense,rabanna,reviviscent,rooibok,reflexology,rectalgia,raniform,russel,ras,rasophore,rhinotillexomania,rugelach,rash,rookery,roussette,redoubt,reliquiae,raddle,rubiginous,renal,ragmatical,rhumb,rheum,rath,ruderal,ramellose,retral,rhinal";
        const words = wordList.split(',');
        
        const randR = this.generateRand(0, words.length);
        const rWord = rWords[randR];
        this.setState({r:rWord});
    }

    componentDidMount(){
        this.setState({
            r: 'random',
            n: 'nothing',
            g: 'generator'
        });
    }


    render(){
        const r = this.state.r;
        return(
            <a onClick={this.getPhrase}>{r}</a>
        );
    }
}