import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export default class News extends Component {
  articles = [
    {
      source: { id: "cnn", name: "CNN" },
      author: "Angus Watson, Duarte Mendonca",
      title:
        "Australia pulls out of Afghanistan cricket series over Taliban's restrictions on women",
      description:
        "Australia's men's cricket team has withdrawn from a series of upcoming matches against Afghanistan in protest over the ruling Taliban's restrictions on women and girls' education and employment, Cricket Australia (CA) said in a statement Thursday.",
      url: "https://www.cnn.com/2023/01/12/sport/australia-afghanistan-cricket-taliban-intl-hnk-spt/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/230112030420-01-australia-cricket-team-010823.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-01-12T08:27:59Z",
      content:
        "Australias mens cricket team has withdrawn from a series of upcoming matches against Afghanistan in protest over the ruling Talibans restrictions on women and girls education and employment, Cricket … [+2284 chars]",
    },
    {
      source: { id: null, name: "The Guardian" },
      author: "Shadi Khan Saif",
      title:
        "Ditching cricket series only punishes Afghanistan even more | Shadi Khan Saif",
      description:
        "Cricket Australia’s decision to cancel series against Afghanistan only serves to further isolate a country already abandoned by the westMy experience playing in the Australian club cricket scene has shown that players have a resilient fighting spirit and will…",
      url: "https://www.theguardian.com/commentisfree/2023/jan/13/australia-ditching-uae-cricket-series-only-punishes-afghanistan-even-more",
      urlToImage:
        "https://i.guim.co.uk/img/media/14836045ecf198f382c9c1e500d91e48bf9d53ea/0_250_3590_2153/master/3590.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctb3BpbmlvbnMucG5n&enable=upscale&s=e77bf0ec709775846a6fcd5bed7b5a44",
      publishedAt: "2023-01-13T14:00:17Z",
      content:
        "My experience playing in the Australian club cricket scene has shown that players have a resilient fighting spirit and will not surrender without a fight.\r\nBut when I heard Australia was ditching a h… [+3863 chars]",
    },
    {
      source: { id: "reuters", name: "Reuters" },
      author: null,
      title:
        "Women's cricket awaits birth of a superpower with game set to take ... - Reuters",
      description:
        "Women's cricket looks poised to step out of the imposing shadow of the men's game in India, and the rest of the world is bracing for the birth of a superpower in the sport.",
      url: "https://www.reuters.com/lifestyle/sports/womens-cricket-awaits-birth-superpower-with-game-set-take-off-india-2023-02-02/",
      urlToImage:
        "https://www.reuters.com/resizer/w9j1RMJ8W83YI1bniKAZBOrx7uM=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/HZGU7QHJDFO55DR6YZPG5ZEZSA.jpg",
      publishedAt: "2023-02-02T04:22:00Z",
      content:
        "NEW DELHI, Feb 2 (Reuters) - Women's cricket looks poised to step out of the imposing shadow of the men's game in India, and the rest of the world is bracing for the birth of a superpower in the spor… [+2981 chars]",
    },
    {
      source: { id: "reuters", name: "Reuters" },
      author: null,
      title:
        "Australia batsman Khawaja misses flight to India after visa delay - Reuters",
      description:
        "Australia opener Usman Khawaja missed the team's flight to India on Wednesday for their four-test tour due to a visa delay, Cricket Australia (CA) said.",
      url: "https://www.reuters.com/lifestyle/sports/australia-batsman-khawaja-misses-flight-india-after-visa-delay-2023-02-01/",
      urlToImage:
        "https://www.reuters.com/resizer/xwY-ID25YaA_3bwdJNMlVwj-9e8=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/O7RV5GFOINJN7M36ORQ4QM4TRU.jpg",
      publishedAt: "2023-02-01T04:14:00Z",
      content:
        "MELBOURNE, Feb 1 (Reuters) - Australia opener Usman Khawaja missed the team's flight to India on Wednesday for their four-test tour due to a visa delay, Cricket Australia (CA) said.\r\nA CA spokesman s… [+911 chars]",
    },
    {
      source: { id: "reuters", name: "Reuters" },
      author: null,
      title:
        "Australia's Khawaja flies out to India after visa approved - Reuters",
      description:
        "Australia opener Usman Khawaja will join his test team mates in India later on Thursday following a delayed approval of his visa, Cricket Australia said.",
      url: "https://www.reuters.com/lifestyle/sports/australias-khawaja-flies-out-india-after-visa-approved-2023-02-02/",
      urlToImage:
        "https://www.reuters.com/resizer/8IY9xAtO7YjFeuUe4vLh9xLtS6s=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/3YXKPM4CMNMYXIHJK4NKGZ3IHE.jpg",
      publishedAt: "2023-02-02T00:17:00Z",
      content:
        "MELBOURNE, Feb 2 (Reuters) - Australia opener Usman Khawaja will join his test team mates in India later on Thursday following a delayed approval of his visa, Cricket Australia said.\r\nPakistan-born K… [+949 chars]",
    },
    {
      source: { id: "reuters", name: "Reuters" },
      author: null,
      title:
        "South Africa name new coaches for test, limited overs teams - Reuters",
      description:
        "South Africa have named Rob Walter as their new head coach in limited overs cricket with Shukri Conrad to take over the test team, officials confirmed on Monday.",
      url: "https://www.reuters.com/lifestyle/sports/south-africa-name-new-coaches-test-limited-overs-teams-2023-01-16/",
      urlToImage:
        "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=126",
      publishedAt: "2023-01-16T09:07:00Z",
      content:
        "JOHANNESBURG, Jan 16 (Reuters) - South Africa have named Rob Walter as their new head coach in limited overs cricket with Shukri Conrad to take over the test team, officials confirmed on Monday.\r\nMar… [+1569 chars]",
    },
    {
      source: { id: "reuters", name: "Reuters" },
      author: null,
      title:
        "Women's IPL franchises fetch $572 million for Indian board - Reuters",
      description:
        "The world's most affluent cricket board, India, got further richer by $572.72 million after unveiling five franchises for an Indian Premier League-style T20 tournament for the women on Wednesday.",
      url: "https://www.reuters.com/lifestyle/sports/womens-ipl-franchises-fetch-572-million-indian-board-2023-01-25/",
      urlToImage:
        "https://www.reuters.com/resizer/LWHFB6n8KixeLssWo3PraaxrBLA=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/RYYA6ECBE5ICXLYYO2AXJP3XKI.jpg",
      publishedAt: "2023-01-25T11:21:00Z",
      content:
        "NEW DELHI, Jan 25 (Reuters) - The world's most affluent cricket board, India, got further richer by $572.72 million after unveiling five franchises for an Indian Premier League-style T20 tournament f… [+1673 chars]",
    },
    {
      source: { id: "reuters", name: "Reuters" },
      author: null,
      title:
        "Viacom 18 bags women's IPL media rights for $117 mln - Reuters.com",
      description:
        "Viacom 18 will pay 9.51 billion Indian rupees ($117 million) for the media rights of the women's Indian Premier League (IPL) for the next five years, the country's cricket board (BCCI) announced on Monday.",
      url: "https://www.reuters.com/lifestyle/sports/viacom-18-bags-womens-ipl-media-rights-117-mln-2023-01-16/",
      urlToImage:
        "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=126",
      publishedAt: "2023-01-16T08:43:00Z",
      content:
        "Jan 16 (Reuters) - Viacom 18 will pay 9.51 billion Indian rupees ($117 million) for the media rights of the women's Indian Premier League (IPL) for the next five years, the country's cricket board (B… [+1312 chars]",
    },
    {
      source: { id: null, name: "The Guardian" },
      author: "Simon Burnton",
      title: "Surrey’s Alec Stewart takes break from cricket to care for wife",
      description:
        "<ul><li>Wife Lynn soon to start new course of cancer treatment</li><li>Former England wicketkeeper touted as future selector</li></ul>Alec Stewart has taken a temporary leave of absence from his role as Surrey’s director of cricket to care for his wife, Lynn,…",
      url: "https://www.theguardian.com/sport/2023/jan/05/surreys-alec-stewart-takes-break-from-cricket-to-care-for-wife",
      urlToImage:
        "https://i.guim.co.uk/img/media/766dcc388251953796ffe19361da158bee2255e9/1211_459_2960_1776/master/2960.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=49b911c1d65712dedb4d6e5a0cf61d54",
      publishedAt: "2023-01-05T16:10:51Z",
      content:
        "Alec Stewart has taken a temporary leave of absence from his role as Surreys director of cricket to care for his wife, Lynn, as she begins a new round of treatment for the cancer she was first diagno… [+1975 chars]",
    },
    {
      source: { id: "reuters", name: "Reuters" },
      author: null,
      title:
        "BBL content slashed as Australia signs $1 bln deal with Seven, Foxtel - Reuters.com",
      description:
        "Australia's Big Bash League (BBL) will be reduced to a 43-game season from its current 61 fixtures under a new A$1.51 billion ($1 billion) broadcast deal between Cricket Australia (CA) and existing media partners Seven Network and Foxtel.",
      url: "https://www.reuters.com/lifestyle/sports/bbl-content-slashed-australia-signs-1-bln-deal-with-seven-foxtel-2023-01-03/",
      urlToImage:
        "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=124",
      publishedAt: "2023-01-03T01:02:02Z",
      content:
        "MELBOURNE, Jan 3 (Reuters) - Australia's Big Bash League (BBL) will be reduced to a 43-game season from its current 61 fixtures under a new A$1.51 billion ($1 billion) broadcast deal between Cricket … [+1980 chars]",
    },
    {
      source: { id: "reuters", name: "Reuters" },
      author: null,
      title:
        "Rain delays start of day four in Sydney, outlook brighter - Reuters.com",
      description:
        "The start of the fourth day of the third test between Australia and South Africa was delayed by light rain on Saturday but the outlook looked bright for some play at the Sydney Cricket Ground.",
      url: "https://www.reuters.com/lifestyle/sports/rain-delays-start-day-four-sydney-outlook-brighter-2023-01-06/",
      urlToImage:
        "https://www.reuters.com/resizer/7hK1FO5kLmfuDredC8-Vns6fNFA=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/K4S7DQRABJIGLOWBLSQ6O3IFJA.jpg",
      publishedAt: "2023-01-06T23:57:00Z",
      content:
        "SYDNEY, Jan 7 (Reuters) - The start of the fourth day of the third test between Australia and South Africa was delayed by light rain on Saturday but the outlook looked bright for some play at the Syd… [+848 chars]",
    },
    {
      source: { id: "reuters", name: "Reuters" },
      author: null,
      title:
        "S Africa's Kapp on compassionate leave after wife van Niekerk ... - Reuters",
      description:
        "The South Africa women's cricket team have given all-rounder Marizanne Kapp compassionate leave after her wife Dane van Niekerk was dropped from the Women's Twenty20 World Cup squad.",
      url: "https://www.reuters.com/lifestyle/sports/s-africas-kapp-compassionate-leave-after-wife-van-niekerk-dropped-wc-squad-2023-02-01/",
      urlToImage:
        "https://www.reuters.com/resizer/8f-ZVuuDXRufJPoFVb9yrz85pwE=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/MNNZIUSGK5NV5CYVKHYLYHN4IE.jpg",
      publishedAt: "2023-02-01T17:45:00Z",
      content:
        "Feb 1 (Reuters) - The South Africa women's cricket team have given all-rounder Marizanne Kapp compassionate leave after her wife Dane van Niekerk was dropped from the Women's Twenty20 World Cup squad… [+908 chars]",
    },
    {
      source: { id: "reuters", name: "Reuters" },
      author: null,
      title:
        "Australia cancel men's ODI series against Afghanistan in March - Reuters",
      description:
        "Australia's one-day international (ODI) series against Afghanistan in March has been called off following the Taliban's announcement of further restrictions on women's and girls' education and employment, Cricket Australia said on Thursday.",
      url: "https://www.reuters.com/lifestyle/sports/australia-cancel-mens-odi-series-against-afghanistan-march-2023-01-12/",
      urlToImage:
        "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=126",
      publishedAt: "2023-01-12T05:30:00Z",
      content:
        "Jan 12 (Reuters) - Australia's one-day international (ODI) series against Afghanistan in March has been called off following the Taliban's announcement of further restrictions on women's and girls' e… [+530 chars]",
    },
    {
      source: { id: "reuters", name: "Reuters" },
      author: null,
      title:
        "West Indies recall fast bowler Gabriel for Zimbabwe tests - Reuters",
      description:
        "West Indies have recalled fast bowler Shannon Gabriel and left-arm spinners Gudakesh Motie and Jomel Warrican for the two-test series in Zimbabwe, the country's cricket board said on Tuesday.",
      url: "https://www.reuters.com/lifestyle/sports/west-indies-recall-fast-bowler-gabriel-zimbabwe-tests-2023-01-17/",
      urlToImage:
        "https://www.reuters.com/resizer/-bJyP53Ja3KWBJtTxeMRinILlwI=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/XIJAHQH2O5KS3HN7PUEIHAKEJM.jpg",
      publishedAt: "2023-01-17T18:59:00Z",
      content:
        "Jan 17 (Reuters) - West Indies have recalled fast bowler Shannon Gabriel and left-arm spinners Gudakesh Motie and Jomel Warrican for the two-test series in Zimbabwe, the country's cricket board said … [+732 chars]",
    },
    {
      source: { id: "reuters", name: "Reuters" },
      author: null,
      title:
        "Lara to act as 'performance mentor' for West Indies - Reuters.com",
      description:
        'Cricket West Indies (CWI) said batting great Brian Lara has agreed to take on the role of "performance mentor" to help players and coaches in all three formats of the game.',
      url: "https://www.reuters.com/lifestyle/sports/lara-act-performance-mentor-west-indies-2023-01-27/",
      urlToImage:
        "https://www.reuters.com/resizer/2D-6_fBuswiakz-KUqe4Nch-3mg=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/L56BZQBRI5NF7MGPLP5BFB2UJQ.jpg",
      publishedAt: "2023-01-27T07:48:00Z",
      content:
        'Jan 27 (Reuters) - Cricket West Indies (CWI) said batting great Brian Lara has agreed to take on the role of "performance mentor" to help players and coaches in all three formats of the game.\r\nThe 53… [+1441 chars]',
    },
    {
      source: { id: "reuters", name: "Reuters" },
      author: null,
      title:
        "'Box office' Archer ready to be patient after injury return - Reuters",
      description:
        'Jofra Archer said it is a "surreal" feeling to be back playing cricket again after a lengthy injury lay-off and the England speedster knows he must be patient during his comeback in an important year for the team.',
      url: "https://www.reuters.com/lifestyle/sports/box-office-archer-ready-be-patient-after-injury-return-2023-02-02/",
      urlToImage:
        "https://www.reuters.com/resizer/hD0O2pOxEc_yO2WLzSmvL0k5JiA=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/U2DBFTSJP5LAHNLKIKKBHL73PE.jpg",
      publishedAt: "2023-02-02T05:15:00Z",
      content:
        'Feb 2 (Reuters) - Jofra Archer said it is a "surreal" feeling to be back playing cricket again after a lengthy injury lay-off and the England speedster knows he must be patient during his comeback in… [+1865 chars]',
    },
    {
      source: { id: null, name: "The Guardian" },
      author: "Simon Burnton",
      title: "Women’s Indian Premier League agrees £95m broadcast rights deal",
      description:
        "<ul><li>Indian network Viacom18 secures five-year deal for WIPL</li><li>Inaugural five-team tournament starts in March </li></ul>The Indian network Viacom18 has spent 951 crore (£95.4m) to secure broadcast rights for the new women’s Indian Premier League tour…",
      url: "https://www.theguardian.com/sport/2023/jan/16/womens-indian-premier-league-agrees-95m-broadcast-rights-deal-cricket",
      urlToImage:
        "https://i.guim.co.uk/img/media/89f238eeb4e84f5b1cbebbcb01f57f24f965b91c/35_55_3512_2108/master/3512.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=0963dafa2d4bb658f6721de7d7c5c3db",
      publishedAt: "2023-01-16T12:41:16Z",
      content:
        "The Indian network Viacom18 has spent 951 crore (£95.4m) to secure broadcast rights for the new womens Indian Premier League tournament for its first five years, making the competition one of the mos… [+1614 chars]",
    },
    {
      source: { id: null, name: "The Guardian" },
      author: "Andy Bull",
      title:
        "Rainford-Brent and Ace making progress while cricket awaits damning report | Andy Bull",
      description:
        "Report should lift the lid on discrimination in the game but a programme is already addressing some of the sport’s issuesThere’s an iceberg looming over English cricket, and some day soon the sport is going to run slap-bang into it. The independent commission…",
      url: "https://www.theguardian.com/sport/2023/jan/26/rainford-brent-ace-progress-cricket-racism-report",
      urlToImage:
        "https://i.guim.co.uk/img/media/0bdb41a44009883169262ed0986bf0d2b323980a/0_346_5184_3110/master/5184.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctb3BpbmlvbnMucG5n&enable=upscale&s=f90f030c26e017d36f7fbb5f3f23ecc5",
      publishedAt: "2023-01-26T08:00:53Z",
      content:
        "Theres an iceberg looming over English cricket, and some day soon the sport is going to run slap-bang into it. The independent commission (ICEC) set up in 2021 is due to publish its report on Equity … [+6036 chars]",
    },
    {
      source: { id: null, name: "The Guardian" },
      author: "Ali Martin",
      title:
        "Ben Stokes and Brendon McCullum offer counties how-to guide to ‘Bazball’",
      description:
        "<ul><li>England coach and captain detail red-ball approach in meeting</li><li>ECB plans for Kookaburra ball in two rounds of championship</li></ul>Ben Stokes and Brendon McCullum have given county coaches a how-to guide on their bold new approach to Test cric…",
      url: "https://www.theguardian.com/sport/2023/jan/10/ben-stokes-and-brendon-mccullum-offer-counties-how-to-guide-to-bazball-cricket",
      urlToImage:
        "https://i.guim.co.uk/img/media/fbb5df38cd2e0a8b34e8d572abd011e414c1e48b/0_72_3418_2051/master/3418.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=b62610f9563bc2deec047e0e9dd5153f",
      publishedAt: "2023-01-10T14:26:18Z",
      content:
        "Ben Stokes and Brendon McCullum have given county coaches a how-to guide on their bold new approach to Test cricket as England look to spread the so-called Bazball revolution through the domestic gam… [+4144 chars]",
    },
    {
      source: { id: null, name: "The Guardian" },
      author: "Simon Burnton",
      title:
        "ECB’s Mo Bobat happy for Steve Smith to gear up for Ashes in county cricket",
      description:
        "<ul><li>Australian batter has been linked with move to Sussex</li><li>‘Any good player coming over, he’s going to raise standard’</li></ul>Mo Bobat, the performance director for men’s cricket at the ECB, has cautiously welcomed the possibility of Australia’s …",
      url: "https://www.theguardian.com/sport/2023/jan/13/ecbs-mo-bobat-happy-for-steve-smith-to-gear-up-for-ashes-in-county-cricket",
      urlToImage:
        "https://i.guim.co.uk/img/media/dcaa65a9a25069e9de4cebbb7e6797dcbf3e439b/0_153_4201_2521/master/4201.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=1a1d968482f1e2cde3a591a4b9b1d983",
      publishedAt: "2023-01-13T18:00:21Z",
      content:
        "Mo Bobat, the performance director for mens cricket at the ECB, has cautiously welcomed the possibility of Australias Steve Smith honing his skills with Sussex in the County Championship before the s… [+3569 chars]",
    },
    {
      source: { id: null, name: "The Guardian" },
      author: "Raf Nicholson",
      title:
        "The Spin | Women’s cricket team of the year: from Alice Capsey to the Kerr sisters",
      description:
        "After a year that included a World Cup and Commonwealth Games, here are our picks for the best women’s all-format XIIt’s been another big year for women’s cricket (is there ever a quiet one, these days?) It began with an Ashes series and a 50-over World Cup i…",
      url: "https://www.theguardian.com/sport/2023/jan/04/womens-cricket-team-of-the-year-from-alice-capsey-to-kerr-sisters",
      urlToImage:
        "https://i.guim.co.uk/img/media/897ed22e478f516bed50561fec769fb0c7fca4f4/0_0_5000_3000/master/5000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=3462dad0ef8d2a1b2f79b801f51acca6",
      publishedAt: "2023-01-04T10:18:43Z",
      content:
        "Its been another big year for womens cricket (is there ever a quiet one, these days?) It began with an Ashes series and a 50-over World Cup in New Zealand, but the highlight was surely a maiden appea… [+6290 chars]",
    },
    {
      source: { id: null, name: "The Guardian" },
      author: "Simon Burnton",
      title:
        "Jofra Archer takes wicket with third ball on long-awaited return to cricket",
      description:
        "<ul><li>England bowler makes immediate impact in SA20 opener</li><li>Seamer had third elbow operation in summer of 2022</li></ul>It took just three deliveries for Jofra Archer to remind the world of his wicket-taking abilities as England’s injury-plagued fast…",
      url: "https://www.theguardian.com/sport/2023/jan/10/jofra-archer-takes-wicket-with-third-ball-on-long-awaited-return-to-cricket",
      urlToImage:
        "https://i.guim.co.uk/img/media/11ecd8632d862953754e99e1170a8f9aa65783e8/161_169_1546_928/master/1546.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=e4a34d5f66f47004be545f2d8f5bd761",
      publishedAt: "2023-01-10T18:51:49Z",
      content:
        "It took just three deliveries for Jofra Archer to remind the world of his wicket-taking abilities as Englands injury-plagued fast-bowler returned to competitive cricket after an absence of 541 days i… [+2765 chars]",
    },
    {
      source: { id: null, name: "The Guardian" },
      author: "Emma John",
      title:
        "The Spin | England cricket tours to South Africa didn’t used to be extended sleepovers",
      description:
        "ODI series will last less than a week – a far cry from 13,000-mile round trips made by steamer and 60-hour coach journeysA philosophical question: does England’s one-day international series in South Africa really count as an overseas tour? The first match ta…",
      url: "https://www.theguardian.com/sport/2023/jan/25/cricket-tours-south-africa-england-odi-series-the-spin",
      urlToImage:
        "https://i.guim.co.uk/img/media/341d0adb96f57fb30abdda1ab3dd2c7857d16efc/0_483_2803_1682/master/2803.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=4ef693e8a2beac40c897f8b11921418f",
      publishedAt: "2023-01-25T10:09:40Z",
      content:
        "A philosophical question: does Englands one-day international series in South Africa really count as an overseas tour? The first match takes place on Friday, the last on the following Wednesday. Two … [+5675 chars]",
    },
    {
      source: { id: "reuters", name: "Reuters" },
      author: null,
      title:
        "Door open for Stokes to end ODI retirement and play World Cup - Mott - Reuters",
      description:
        "The door is open for test captain Ben Stokes to end his retirement from one-day internationals and join England's title defence at the 50-overs World Cup in India later this year, white-ball coach Matthew Mott said.",
      url: "https://www.reuters.com/lifestyle/sports/door-open-stokes-end-odi-retirement-play-world-cup-mott-2023-01-25/",
      urlToImage:
        "https://www.reuters.com/resizer/JBq3FEvQGsP28p5GDWyKR6mIjwY=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/FNPYMBGVLVJ7TBVMGRXL7Q4Y5M.jpg",
      publishedAt: "2023-01-25T06:23:00Z",
      content:
        "LONDON, Jan 25 (Reuters) - The door is open for test captain Ben Stokes to end his retirement from one-day internationals and join England's title defence at the 50-overs World Cup in India later thi… [+1752 chars]",
    },
    {
      source: { id: "reuters", name: "Reuters" },
      author: null,
      title:
        "Pacer Jamieson returns to New Zealand squad for England tests - Reuters",
      description:
        "Kyle Jamieson has been named in New Zealand's squad for the two-test series against England later this month as the fast bowler makes his return to the side for the first time since pulling out of the England tour last year due to injury.",
      url: "https://www.reuters.com/lifestyle/sports/pacer-jamieson-returns-new-zealand-squad-england-tests-2023-02-02/",
      urlToImage:
        "https://www.reuters.com/resizer/CbH4B9g2ll6zwHQqghg9cZhv6dM=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/YRWTCE75G5M7JHHYBAGP6GSRCA.jpg",
      publishedAt: "2023-02-02T16:37:00Z",
      content:
        "Feb 2 (Reuters) - Kyle Jamieson has been named in New Zealand's squad for the two-test series against England later this month as the fast bowler makes his return to the side for the first time since… [+1668 chars]",
    },
    {
      source: { id: null, name: "The Guardian" },
      author: "Simon Burnton",
      title:
        "Rashid Khan hits out at Australia’s decision to abandon Afghanistan series",
      description:
        "<ul><li>Rashid threatens to withdraw services from Big Bash League</li><li>Australia took stand because of Taliban’s treatment of women</li></ul>Afghanistan’s most popular and successful cricketing export, Rashid Khan, has threatened to withdraw his services …",
      url: "https://www.theguardian.com/sport/2023/jan/12/rashid-khan-hits-out-australia-decision-abandon-afghanistan-odi-series",
      urlToImage:
        "https://i.guim.co.uk/img/media/0566fd8890bd5ff84bb55565534578a4d291a57a/197_40_1567_940/master/1567.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=e9152b15af48427875768f42d98351a1",
      publishedAt: "2023-01-12T17:03:02Z",
      content:
        "Afghanistans most popular and successful cricketing export, Rashid Khan, has threatened to withdraw his services from Australias Big Bash League as a result of that countrys decision to abandon their… [+3303 chars]",
    },
    {
      source: { id: null, name: "The Guardian" },
      author: "Andy Bull",
      title:
        "Ben Stokes’ success shows other sports captaincy risks can be worth taking | Andy Bull",
      description:
        "Mavericks don’t often get the big jobs – Ben Stokes has shown everyone the value of doing things differentlyAccording to lore some of the very best Test captains are the ones who never got the job. Like Keith Miller – an admired, and audacious, skipper at New…",
      url: "https://www.theguardian.com/sport/blog/2023/jan/05/ben-stokes-captaincy-right-time-for-him-and-england-cricket",
      urlToImage:
        "https://i.guim.co.uk/img/media/36f2506950c735818c0af66dd055672d77a24a94/0_26_5121_3071/master/5121.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctb3BpbmlvbnMucG5n&enable=upscale&s=be60862e20066313fb927c56ac1f97bd",
      publishedAt: "2023-01-05T08:00:15Z",
      content:
        "According to lore some of the very best Test captains are the ones who never got the job. Like Keith Miller an admired, and audacious, skipper at New South Wales who never led Australia because he wa… [+5462 chars]",
    },
    {
      source: { id: null, name: "The Guardian" },
      author: "Simon Burnton",
      title:
        "The Spin | Whose data is it anyway? Behind the fight to control cricketers’ statistics",
      description:
        "Cricket is heavy with statistics and the battle over fair usage and control of them is just beginningCricket lovers by their nature are probably more inclined than most to appreciate things that happen at a gentle pace, sporting encounters – and perhaps also …",
      url: "https://www.theguardian.com/sport/2023/feb/01/cricket-data-players-statistics-battle-the-spin",
      urlToImage:
        "https://i.guim.co.uk/img/media/970c039e0e48257f56898680494c009398b17ae7/32_0_4941_2964/master/4941.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=740e40d87577fdaeb1dd01a21019cd92",
      publishedAt: "2023-02-01T10:55:26Z",
      content:
        "Cricket lovers by their nature are probably more inclined than most to appreciate things that happen at a gentle pace, sporting encounters and perhaps also stories that unfold leisurely over an exten… [+5664 chars]",
    },
    {
      source: { id: "reuters", name: "Reuters" },
      author: null,
      title: "India's Bumrah included in ODI squad to face Sri Lanka - Reuters",
      description:
        "India's pace spearhead Jasprit Bumrah has recovered from a back injury and has been included in the one-day international (ODI squad to play Sri Lanka in a three-match series this month, the country's cricket board (BCCI) said on Tuesday.",
      url: "https://www.reuters.com/lifestyle/sports/indias-bumrah-included-odi-squad-face-sri-lanka-2023-01-03/",
      urlToImage:
        "https://www.reuters.com/resizer/u1R5AUj23JvqtNhEql--KLQWrpQ=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/KAK4XPEZQBP4ZMOOHOYSFY5FGA.jpg",
      publishedAt: "2023-01-03T09:55:00Z",
      content:
        "Jan 3 (Reuters) - India's pace spearhead Jasprit Bumrah has recovered from a back injury and has been included in the one-day international (ODI squad to play Sri Lanka in a three-match series this m… [+958 chars]",
    },
    {
      source: { id: "reuters", name: "Reuters" },
      author: null,
      title:
        "Returning Archer wants to rediscover 2019 Ashes, World Cup form - Reuters",
      description:
        'Jofra Archer rates himself "about 80%" fit ahead of his long-awaited England return but the fast bowler is determined to get himself back in the kind of shape that saw him play a starring role in the 2019 Ashes and Cricket World Cup.',
      url: "https://www.reuters.com/lifestyle/sports/returning-archer-wants-rediscover-2019-ashes-world-cup-form-2023-01-26/",
      urlToImage:
        "https://www.reuters.com/resizer/4_-g4wJufcLLjTDl49OGWuSpfNA=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/NSRIQ4MSMZK4BAXYBBUFTL3BFI.jpg",
      publishedAt: "2023-01-26T04:48:00Z",
      content:
        'Jan 26 (Reuters) - Jofra Archer rates himself "about 80%" fit ahead of his long-awaited England return but the fast bowler is determined to get himself back in the kind of shape that saw him play a s… [+1907 chars]',
    },
    {
      source: { id: "reuters", name: "Reuters" },
      author: null,
      title:
        "Rohit, Kohli to miss T20s v NZ, Suryakumar, Kishan in test squad - Reuters.com",
      description:
        "Indian captain Rohit Sharma and batsman Virat Kohli will play in a one-day international (ODI) series against New Zealand this month but will not feature in the following Twenty20 series, the Board of Control for Cricket in India (BCCI) said on Friday.",
      url: "https://www.reuters.com/lifestyle/sports/rohit-kohli-miss-t20s-v-nz-suryakumar-kishan-test-squad-2023-01-13/",
      urlToImage:
        "https://www.reuters.com/resizer/6_j1lgfiHu_zHSaySpu8gK82PuU=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/FOELD7H7AVNMTIYK5BIXOKEFZI.jpg",
      publishedAt: "2023-01-13T17:34:00Z",
      content:
        "Jan 13 (Reuters) - Indian captain Rohit Sharma and batsman Virat Kohli will play in a one-day international (ODI) series against New Zealand this month but will not feature in the following Twenty20 … [+2145 chars]",
    },
    {
      source: { id: "reuters", name: "Reuters" },
      author: null,
      title: "India opener Gill's maturity impresses captain Rohit - Reuters",
      description:
        "It might be premature to say Shubman Gill has nailed down the India opener's slot for the Cricket World Cup on home soil later this year but skipper Rohit Sharma has been impressed by the 23-year-old's understanding of the role.",
      url: "https://www.reuters.com/lifestyle/sports/india-opener-gills-maturity-impresses-captain-rohit-2023-01-25/",
      urlToImage:
        "https://www.reuters.com/resizer/ECKRuEuXjZfkBkEn3Tqce0r87A0=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/5PGMKHXKAVNE7L52UZK25Y54DY.jpg",
      publishedAt: "2023-01-25T04:39:00Z",
      content:
        "NEW DELHI, Jan 25 (Reuters) - It might be premature to say Shubman Gill has nailed down the India opener's slot for the Cricket World Cup on home soil later this year but skipper Rohit Sharma has bee… [+1542 chars]",
    },
    {
      source: { id: null, name: "Harvard Business Review" },
      author: null,
      title:
        "Genpact CEO Tiger Tyagarajan: AI Is Getting Good, But Still Can’t Replace Human Curiosity",
      description:
        "HBR editor in chief Adi Ignatius sat down with Tiger Tyagarajan, CEO of Genpact. As CEO of a $4 billion global firm that advises clients on digital transformation, Tiger had a lot to say about AI, the metaverse, and how companies often fail on their innovatio…",
      url: "https://hbr.org/2023/01/genpact-ceo-tiger-tyagarajan-ai-is-getting-good-but-still-cant-replace-human-curiosity",
      urlToImage:
        "https://hbr.org/resources/images/article_assets/2023/01/image-3.jpg",
      publishedAt: "2023-01-27T15:59:33Z",
      content:
        'If developed the right way, technology will augment–not replace–human labor. \r\n"&gt;\r\nTiger Tyagarajan is CEO of Genpact, a global firm that advises clients on digital transformation. Tyagarajan help… [+32134 chars]',
    },
    {
      source: { id: null, name: "The Guardian" },
      author: "Annesha Ghosh",
      title:
        "‘Game changer’: why the Women’s Premier League is a revolution for players and fans",
      description:
        "The inaugural WPL in March is shaping as the richest in women’s sport. As the game’s stars gather for the US$572m tournament in India, here’s how it works, who’s playing and why it will turbo-boost cricketDescribed variously by a wide cross-section of stakeho…",
      url: "https://www.theguardian.com/sport/2023/feb/03/game-changer-why-the-womens-premier-league-is-a-revolution-for-players-and-fans",
      urlToImage:
        "https://i.guim.co.uk/img/media/b25580117edc492931b459a46ac95c5499e5279d/0_66_2461_1477/master/2461.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=6a3ef02c335643e4cfc647d304856a39",
      publishedAt: "2023-02-03T00:34:42Z",
      content:
        "What is the Womens Premier League (WPL)?\r\nDescribed variously by a wide cross-section of stakeholders in cricket as a revolution in the womens game and a game-changer, the WPL is an Indian domestic T… [+6015 chars]",
    },
    {
      source: { id: null, name: "The Guardian" },
      author: "Andy Bull",
      title:
        "There is no ‘T’ in SA20 and maybe no future for venerable South Africa Test side | Andy Bull",
      description:
        "From now on everything will be geared around making a success of the latest 20-over franchise – it’s quite a riskThe future arrived at a quarter to three on a miserable Tuesday afternoon in January. It was ushered in live on Sky Sports Cricket by Mark Nichola…",
      url: "https://www.theguardian.com/sport/blog/2023/jan/12/there-is-no-t-in-sa20-and-maybe-no-future-for-venerable-south-africa-test-side",
      urlToImage:
        "https://i.guim.co.uk/img/media/42ee16f89f6db769b918be944c31b4472a69c628/2_90_5255_3153/master/5255.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctb3BpbmlvbnMucG5n&enable=upscale&s=6e4336c6afd71452fbf79492d9478987",
      publishedAt: "2023-01-12T08:00:04Z",
      content:
        "The future arrived at a quarter to three on a miserable Tuesday afternoon in January. It was ushered in live on Sky Sports Cricket by Mark Nicholas. He was at Newlands where Paarl Royals were playing… [+5580 chars]",
    },
    {
      source: { id: null, name: "The Guardian" },
      author: "Neil Manthorp in Bloemfontein",
      title:
        "South Africa’s desperation gives ODI series against England extra frisson",
      description:
        "While Jos Buttler’s side focus on defending their World Cup title, the Proteas need to ensure they make it the tournamentEngland’s cricketers may be gearing up to defend their 50-over World Cup title in India in October but their opposition on Friday in the f…",
      url: "https://www.theguardian.com/sport/2023/jan/26/south-africas-desperation-gives-odi-series-against-england-extra-frisson",
      urlToImage:
        "https://i.guim.co.uk/img/media/e0cf7b3952525e73a2a43e82b03d89dd27602efd/0_70_3242_1946/master/3242.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=c88997a821010ed30799c100b7d6be94",
      publishedAt: "2023-01-26T17:26:04Z",
      content:
        "Englands cricketers may be gearing up to defend their 50-over World Cup title in India in October but their opposition on Friday in the first of three ODIs have a more pressing matter at hand: just b… [+4196 chars]",
    },
    {
      source: { id: null, name: "The Guardian" },
      author:
        "Presented by Faye Carruthers, with Suzanne Wrack, Ceylon Andi Hickman and Moyo Abiona; produced by Lucy Oliva and Jessy Parker Humphreys; executive producer is Sal Ahmad with original music by Laura Iredale.",
      title:
        "Sam Kerr does Sam Kerr things on WSL’s big return – Women’s Football Weekly",
      description:
        "Faye Carruthers has Suzanne Wrack, Ceylon Andi Hickman and Moyo Abiona alongside her to round up all the action after the winter breakIn this week’s pod: the Women’s Super League is back with a bang!We had a controversial penalty decision, an 89th-minute equa…",
      url: "https://www.theguardian.com/football/audio/2023/jan/17/sam-kerr-does-sam-kerr-things-as-wsl-returns-in-style-womens-football-weekly-podcast",
      urlToImage:
        "https://i.guim.co.uk/img/media/431ebc267c6033e8b087310e5805cf9a0c8169b3/185_311_2215_1329/master/2215.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=11c87382de717a4e72133e9530f30904",
      publishedAt: "2023-01-17T15:09:00Z",
      content:
        "In this weeks pod: the Womens Super League is back with a bang!\r\nWe had a controversial penalty decision, an 89th-minute equaliser, a cricket score and a win for bottom-of-the-table Leicester is the … [+252 chars]",
    },
    {
      source: { id: null, name: "The Guardian" },
      author: "Simon Burnton",
      title:
        "Middlesex in talks with PCB over joining Pakistan Super League in 2024",
      description:
        "<ul><li>Talks at early stage but county could feature in PCB next year</li><li>PCB willing to waive the fee for entry to entice county</li></ul>Middlesex look primed to make a tantalising move from hitting boundaries to crossing them, after entering discussio…",
      url: "https://www.theguardian.com/sport/2023/jan/04/middlesex-in-talks-with-pcb-over-joining-pakistan-super-league-t20-cricket",
      urlToImage:
        "https://i.guim.co.uk/img/media/333c17512f22f2d1875ae99c4b73a51444841a08/0_132_4500_2700/master/4500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=16c5663cef24cb0f8c29994e5a59c832",
      publishedAt: "2023-01-04T19:32:40Z",
      content:
        "Middlesex look primed to make a tantalising move from hitting boundaries to crossing them, after entering discussions with the Pakistan Cricket Board about the possibility of them entering a team in … [+2175 chars]",
    },
    {
      source: { id: null, name: "The Guardian" },
      author: "Simon Burnton",
      title: "PCA joins Slade’s ‘Project Red Card’ battle for players’ data",
      description:
        "<ul><li>‘Correct time in cricket to resolve this issue’</li><li>Aim is to help athletes control data collected about them</li></ul>The Professional Cricketers’ Association has joined “Project Red Card”, the battle for sportspeople to take more control of thei…",
      url: "https://www.theguardian.com/sport/2023/jan/24/cricket-joins-russell-slade-project-red-card-control-player-data",
      urlToImage:
        "https://i.guim.co.uk/img/media/b608d3a76b701b15c5ce819572884814d9d4ed96/0_229_4599_2759/master/4599.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=bb35116df1dda335e3f761d959d28845",
      publishedAt: "2023-01-24T18:07:08Z",
      content:
        "The Professional Cricketers Association has joined Project Red Card, the battle for sportspeople to take more control of their data being led by the former Leyton Orient and Cardiff manager Russell S… [+2706 chars]",
    },
    {
      source: { id: null, name: "The Guardian" },
      author: "Jo Harman",
      title: "John Hollioake on the joys and sorrows of raising two cricketers",
      description:
        "John, father of former England players Adam and Ben Hollioake, talks candidly about a fairytale with a tragic endingBy Jo Harman for Wisden Cricket Monthly“Everything was a battle royal,” says John Hollioake, recalling his two sons, Adam and Ben, going hell f…",
      url: "https://www.theguardian.com/sport/2023/jan/31/john-hollioake-joys-sorrows-raising-two-cricketers-adam-ben-england",
      urlToImage:
        "https://i.guim.co.uk/img/media/51fe3346d2dcd2dc66046522c3ca832fbd6e759d/0_198_2853_1712/master/2853.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=3e176fa58528742f6136b5924e762540",
      publishedAt: "2023-01-31T15:39:45Z",
      content:
        "Everything was a battle royal, says John Hollioake, recalling his two sons, Adam and Ben, going hell for leather at the family home in Melbourne. Theyd play every sport known to man. They used to fig… [+13189 chars]",
    },
    {
      source: { id: null, name: "The Guardian" },
      author: "Neil Manthorp in Bloemfontein",
      title:
        "South Africa win papers over cracks as Proteas lean on England for answers",
      description:
        "Jason Roy’s stint in the SA20 has worked wonders and his and others’ star power may help South African cricket rebuildSouth Africa’s 27-run victory against England At the Mangaung Oval on Friday kept alive their hopes of qualifying automatically for the World…",
      url: "https://www.theguardian.com/sport/2023/jan/28/south-africa-win-lean-on-england-for-answers-odi-series",
      urlToImage:
        "https://i.guim.co.uk/img/media/1cfed8a0e47ca481b5a23d0259f5b4cb328f969c/287_157_2018_1211/master/2018.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=01e1c9a20a5a3eb3d3c8756d7e8be627",
      publishedAt: "2023-01-28T13:25:25Z",
      content:
        "South Africas 27-run victory against England At the Mangaung Oval on Friday kept alive their hopes of qualifying automatically for the World Cup that England will defend in India in October. They sti… [+4526 chars]",
    },
    {
      source: { id: null, name: "The Guardian" },
      author: "Neil Manthorp in Bloemfontein",
      title:
        "Pitbull passion leads England’s Jofra Archer back from rehab wilderness",
      description:
        "Fast bowler is raring to reclaim the Ashes on home soil after a joyous period of ‘shovelling lots of poo and feeding lots of dogs’Therapy dogs can be found providing comfort to everyone from stressed students to nervous flyers but they are not necessarily ass…",
      url: "https://www.theguardian.com/sport/2023/jan/25/pitbull-passion-leads-englands-jofra-archer-back-from-rehab-wilderness",
      urlToImage:
        "https://i.guim.co.uk/img/media/453ef9686e69f6e8212b01a9ce7b283cec8c3945/928_233_3988_2393/master/3988.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=96f603aef1b6576a11c8fc7c9216e338",
      publishedAt: "2023-01-25T17:49:53Z",
      content:
        "Therapy dogs can be found providing comfort to everyone from stressed students to nervous flyers but they are not necessarily associated with elite sport. Yet if England win back the Ashes this summe… [+4343 chars]",
    },
    {
      source: { id: null, name: "The Guardian" },
      author: "PA Media",
      title:
        "Kohli century drives India to biggest ever margin of victory by runs in ODIs",
      description:
        "<ul><li>Kohli hits 166 runs off 110 to set up 317-run win over Sri Lanka</li><li>Visitors all out for 73 as India claim 3-0 series whitewash</li></ul>Virat Kohli led India to the greatest margin of victory by runs in the history of one-day international crick…",
      url: "https://www.theguardian.com/sport/2023/jan/15/kohli-century-drives-india-to-biggest-ever-odi-margin-of-victory-sri-lanka-cricket",
      urlToImage:
        "https://i.guim.co.uk/img/media/5c8a9bc4376c0659f164d33276e8b98943b4a4fa/0_94_5498_3301/master/5498.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=c6010f9b4a129b44af562aabd75e3957",
      publishedAt: "2023-01-15T15:54:13Z",
      content:
        "Virat Kohli led India to the greatest margin of victory by runs in the history of one-day international cricket as Sri Lanka were humiliated in Thiruvananthapuram.\r\nKohlis unbeaten 166 from 110 balls… [+1642 chars]",
    },
    {
      source: { id: "reuters", name: "Reuters" },
      author: null,
      title:
        "Bavuma ton leads S Africa to series win over England - Reuters.com",
      description:
        "Captain Temba Bavuma struck a superb 109 from 102 balls as South Africa chased down a record target in Bloemfontein to beat England by five wickets on Sunday and take an unassailable 2-0 lead in their one-day international series.",
      url: "https://www.reuters.com/lifestyle/sports/bavuma-ton-leads-s-africa-series-win-over-england-2023-01-29/",
      urlToImage:
        "https://www.reuters.com/resizer/tHQB6T-9gQM67pmtcUTodW8z7UU=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/C6GMQB6HZRJQHB7R4XPT3AS3II.jpg",
      publishedAt: "2023-01-29T17:04:00Z",
      content:
        "Jan 29 (Reuters) - Captain Temba Bavuma struck a superb 109 from 102 balls as South Africa chased down a record target in Bloemfontein to beat England by five wickets on Sunday and take an unassailab… [+2107 chars]",
    },
    {
      source: { id: null, name: "The Guardian" },
      author: "Simon Burnton",
      title: "Australia’s Steve Smith signs deal with Sussex for Ashes buildup",
      description:
        "<ul><li>Smith agrees three-game deal as part of summer preparations</li><li>Australian to ‘provide some guidance’ to young English players</li></ul>Steve Smith, the former Australia captain, has agreed a deal to play three games for Sussex in May as part of h…",
      url: "https://www.theguardian.com/sport/2023/jan/19/former-australia-captain-steve-smith-signs-with-sussex-ahead-of-the-ashes-cricket",
      urlToImage:
        "https://i.guim.co.uk/img/media/42c01f3451a430a1d991f5ccc89ccff971d16ed4/406_222_3026_1815/master/3026.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=3f051aa3218639881b46f7c5eda7078a",
      publishedAt: "2023-01-19T14:54:19Z",
      content:
        "Steve Smith, the former Australia captain, has agreed a deal to play three games for Sussex in May as part of his preparations for the summers Ashes and a probable appearance in the World Test Champi… [+2923 chars]",
    },
    {
      source: { id: null, name: "The Guardian" },
      author: "Australian Associated Press",
      title:
        "‘A kick in the face’: David Warner criticises Justin Langer contract saga",
      description:
        "<ul><li>Test opener says former coach had ‘lost a fair few players’</li><li>Langer rejected a six-month contract extension in February</li></ul>David Warner claims Cricket Australia’s decision to only offer Justin Langer a six-month contract was a “kick in th…",
      url: "https://www.theguardian.com/sport/2023/jan/10/a-kick-in-the-face-david-warner-bemoans-justin-langer-contract-saga",
      urlToImage:
        "https://i.guim.co.uk/img/media/13edd48cf5e6e414db6817b70800ce109edf58a0/0_0_3633_2180/master/3633.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=490e7e60d1f0b0da62dae2d8736deb0c",
      publishedAt: "2023-01-10T01:45:41Z",
      content:
        "David Warner claims Cricket Australias decision to only offer Justin Langer a six-month contract was a kick in the face, while admitting the coach lost several key players in the team.\r\nThe build up … [+2862 chars]",
    },
    {
      source: { id: null, name: "The Guardian" },
      author: "Simon Burnton",
      title:
        "Yorkshire facing uncertain future with Lord Patel to stand down as chairman",
      description:
        "<ul><li>Chairman to leave in March after ‘sobering’ 16 months in charge</li><li>Patel ‘surprised and disappointed’ at lack of contact from ECB</li></ul>Yorkshire have announced that Lord Kamlesh Patel is to step down as chair in March after a wildly dramatic …",
      url: "https://www.theguardian.com/sport/2023/jan/06/lord-patel-to-stand-down-as-yorkshire-chairman-in-march",
      urlToImage:
        "https://i.guim.co.uk/img/media/159f656ad287100de2cb490b0211bbefff991ad0/0_80_2447_1468/master/2447.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=7ac720c0693373cba89e36a33de8d649",
      publishedAt: "2023-01-06T18:26:42Z",
      content:
        "Yorkshire have announced that Lord Kamlesh Patel is to step down as chair in March after a wildly dramatic and sometimes controversial 16 months in the role. Patel, who was appointed in November 2021… [+2673 chars]",
    },
    {
      source: { id: "reuters", name: "Reuters" },
      author: null,
      title: "Ballance set for Zimbabwe test debut against Windies - Reuters",
      description:
        "Former England batsman Gary Ballance is set to make his test debut for Zimbabwe on Saturday after being selected for the two-match series against West Indies in Bulawayo.",
      url: "https://www.reuters.com/lifestyle/sports/ballance-set-zimbabwe-test-debut-against-windies-2023-02-01/",
      urlToImage:
        "https://www.reuters.com/resizer/lonXzCQjnCe7EsLyaQbafroOuFw=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/26VRNBX33VPU3AHCHGQ2J72KWE.jpg",
      publishedAt: "2023-02-01T04:58:00Z",
      content:
        "Feb 1 (Reuters) - Former England batsman Gary Ballance is set to make his test debut for Zimbabwe on Saturday after being selected for the two-match series against West Indies in Bulawayo.\r\nHarare-bo… [+758 chars]",
    },
    {
      source: { id: null, name: "The Guardian" },
      author: "PA Media",
      title:
        "‘A true trailblazer’: Scotland full-back Ken Scotland dies aged 86",
      description:
        "<ul><li>Scotland also played for Lions and Leicester Tigers</li><li>‘Ken was one of the greatest players ever to grace the rugby field’</li></ul>The former Scotland and Lions full-back Ken Scotland has died at the age of 86, the Scottish Rugby Union has confi…",
      url: "https://www.theguardian.com/sport/2023/jan/08/ken-scotland-dies-aged-86-rugby-union-full-back",
      urlToImage:
        "https://i.guim.co.uk/img/media/f052af150f9dc263beba847b0aed193cf9593a5d/0_394_1974_1184/master/1974.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=5a207b55b6c65b228a6ca51e2b1701f0",
      publishedAt: "2023-01-08T13:36:52Z",
      content:
        "The former Scotland and Lions full-back Ken Scotland has died at the age of 86, the Scottish Rugby Union has confirmed.\r\nScotland, who also represented his country at cricket, made his international … [+540 chars]",
    },
    {
      source: { id: null, name: "The Guardian" },
      author: "PA Media",
      title:
        "WRU facing allegations of sexism and discrimination in BBC investigation",
      description:
        "<ul><li>Number of ex-WRU employees took part in investigation</li><li>MP Tonia Antoniazzi: ‘great concern’ for Welsh women’s rugby</li></ul>The Welsh Rugby Union is facing allegations of sexism and discrimination which have left the MP and former Wales intern…",
      url: "https://www.theguardian.com/sport/2023/jan/23/welsh-rugby-union-wru-facing-allegations-sexism-discrimination-bbc-investigation",
      urlToImage:
        "https://i.guim.co.uk/img/media/2d676a9ea97559abc93670bdc4fb0e5a32fbe784/0_124_3500_2100/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=43fc482dc56ce7537732b68671223f19",
      publishedAt: "2023-01-23T00:01:07Z",
      content:
        "The Welsh Rugby Union is facing allegations of sexism and discrimination which have left the MP and former Wales international Tonia Antoniazzi expressing great concerns over the womens game in the c… [+2578 chars]",
    },
    {
      source: { id: null, name: "The Guardian" },
      author: "James Wallace",
      title:
        "The Spin | Here’s the catch: cricket’s unique moment is being lost in all the angles",
      description:
        "Third umpire rulings in Sydney casting doubt on three big moments highlight the way technology is killing the thrillThere’s a feeling on a cricket field that is unlike any other. Players at all levels go misty-eyed and weak at the knees when they try to descr…",
      url: "https://www.theguardian.com/sport/2023/jan/11/heres-the-catch-cricket-unique-moment-is-being-lost-in-all-the-angles-spin",
      urlToImage:
        "https://i.guim.co.uk/img/media/12b77c100a3aebb3e5ee7e0c80d81d8774aec743/0_25_3500_2100/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=cb61c55081db7838b26fa5f07ac5eb50",
      publishedAt: "2023-01-11T12:15:16Z",
      content:
        "Theres a feeling on a cricket field that is unlike any other. Players at all levels go misty-eyed and weak at the knees when they try to describe it. If youve played the game at some point then maybe… [+6404 chars]",
    },
    {
      source: { id: null, name: "The Guardian" },
      author: "Ali Martin",
      title:
        "The Spin | Whatever your view, Smith’s interest shows value of County Championship",
      description:
        "Australia’s best-since-Bradman wants to play a few games before the Ashes but the chance to learn may not be all one wayAt a time when cricketers bounce from one Twenty20 league to the next without much fuss – often halfway through, like cowboy builders yet t…",
      url: "https://www.theguardian.com/sport/2023/jan/18/steve-smith-value-of-county-championship-cricket",
      urlToImage:
        "https://i.guim.co.uk/img/media/5f3fd7b62e49c0e03d63d70d1d32c029d49abad0/0_186_4095_2457/master/4095.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=e39e5e2defaed46e2e9fef92c541196c",
      publishedAt: "2023-01-18T11:00:03Z",
      content:
        "At a time when cricketers bounce from one Twenty20 league to the next without much fuss often halfway through, like cowboy builders yet to finish off the skirting boards its almost reassuring that th… [+6044 chars]",
    },
    {
      source: { id: null, name: "The Guardian" },
      author: "Simon Burnton",
      title:
        "Alex Lees: ‘The days of scoring 100 at a 40 strike rate in Tests are gone’",
      description:
        "Durham batter reflects on his ‘bittersweet’ 2022 that ended with him dropped by England and needing to find a way to fit back inSix months ago if Alex Lees had pictured himself playing for England this winter, it would not have been on a Lions tour of Sri Lan…",
      url: "https://www.theguardian.com/sport/2023/jan/18/alex-lees-england-cricket",
      urlToImage:
        "https://i.guim.co.uk/img/media/9cb49f21646a28a4021fe0456a76ae11c33617f0/419_137_3173_1904/master/3173.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=d23abd5ef1458c3dc0956589da0f6585",
      publishedAt: "2023-01-18T18:00:04Z",
      content:
        "Six months ago if Alex Lees had pictured himself playing for England this winter, it would not have been on a Lions tour of Sri Lanka. Promoted to the Test side for the trip to West Indies last March… [+5888 chars]",
    },
    {
      source: { id: null, name: "The Guardian" },
      author: "Ali Martin",
      title:
        "Heather Knight: ‘Watching the Lionesses was remarkable – we want a piece of that’",
      description:
        "Before heading to South Africa for the Women’s T20 World Cup, England’s captain is fired up by the WPL and a home Ashes seriesThe Women’s T20 World Cup is fast approaching and yet the Women’s Premier League that follows it in March is the talk of the town. Te…",
      url: "https://www.theguardian.com/sport/2023/jan/28/heather-knight-watching-lionesses-was-remarkable-england-cricket",
      urlToImage:
        "https://i.guim.co.uk/img/media/323e4d99ea63ce2154094934cdaaa0cc2d6596d6/15_612_7114_4269/master/7114.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=44913630a57a31c8e17b7e8cde7a1402",
      publishedAt: "2023-01-28T08:00:14Z",
      content:
        "The Womens T20 World Cup is fast approaching and yet the Womens Premier League that follows it in March is the talk of the town. Television rights sold for £95m with players set to earn in excess of … [+8492 chars]",
    },
    {
      source: { id: "reuters", name: "Reuters" },
      author: null,
      title:
        "South Africa frustrate Australia on final day of third test - Reuters",
      description:
        "South Africa frustrated Australia on the final morning of the rain-disrupted third test on Sunday, reaching lunch on 244 for seven after losing only one wicket in the opening session and inching closer to avoiding the follow on.",
      url: "https://www.reuters.com/lifestyle/sports/south-africa-frustrate-australia-final-day-third-test-2023-01-08/",
      urlToImage:
        "https://www.reuters.com/resizer/IAU0dKyjZX_8TBp-pVGk6CFOcS8=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/YANK426VXNMDHAFC2NQLCPEQVU.jpg",
      publishedAt: "2023-01-08T02:13:00Z",
      content:
        "SYDNEY, Jan 8 (Reuters) - South Africa frustrated Australia on the final morning of the rain-disrupted third test on Sunday, reaching lunch on 244 for seven after losing only one wicket in the openin… [+1171 chars]",
    },
    {
      source: { id: "reuters", name: "Reuters" },
      author: null,
      title: "Conway century lifts New Zealand to 309-6 vs Pakistan - Reuters",
      description:
        "Opener Devon Conway led New Zealand's early domination of Pakistan on day one of the second test in Karachi with a knock of 122, before the hosts struck back in the final session to limit their opponents to 309-6 at stumps on Monday.",
      url: "https://www.reuters.com/lifestyle/sports/conway-century-lifts-new-zealand-309-6-vs-pakistan-2023-01-02/",
      urlToImage:
        "https://www.reuters.com/resizer/v2uKjRDqTxBsvhmoLhArofPGRR0=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/WI3UT3KRDVKODEJDLPHM765BUI.jpg",
      publishedAt: "2023-01-02T12:41:00Z",
      content:
        "Jan 2 (Reuters) - Opener Devon Conway led New Zealand's early domination of Pakistan on day one of the second test in Karachi with a knock of 122, before the hosts struck back in the final session to… [+893 chars]",
    },
    {
      source: { id: "reuters", name: "Reuters" },
      author: null,
      title: "Sri Lanka beat India to leave T20 series squared - Reuters",
      description:
        "Sri Lanka skipper Dasun Shanaka and opener Kusal Mendis scored half-centuries before their bowlers put the brakes on the Indian batting unit to seal a 16-run win in the second Twenty20 international and level the series at 1-1 on Thursday.",
      url: "https://www.reuters.com/lifestyle/sports/sri-lanka-beat-india-leave-t20-series-squared-2023-01-05/",
      urlToImage:
        "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=125",
      publishedAt: "2023-01-05T18:59:00Z",
      content:
        "Jan 5 (Reuters) - Sri Lanka skipper Dasun Shanaka and opener Kusal Mendis scored half-centuries before their bowlers put the brakes on the Indian batting unit to seal a 16-run win in the second Twent… [+1217 chars]",
    },
    {
      source: { id: "bbc-news", name: "BBC News" },
      author: "https://www.facebook.com/bbcnews",
      title: "Is too much talent a problem for Indian cricket?",
      description:
        "Experts say player selection will be a key factor in leading India to victory in upcoming matches.",
      url: "https://www.bbc.co.uk/news/world-asia-india-64232741",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/1DA1/production/_128258570_gettyimages-1440476830.jpg",
      publishedAt: "2023-01-12T00:25:52Z",
      content:
        "It is a decade now since India won an ICC trophy, and with the 50-over World Cup set to be played in India in October-November, two questions ask themselves. \r\nThe obvious one is: will this be India'… [+5595 chars]",
    },
    {
      source: { id: null, name: "The Guardian" },
      author: "Simon Burnton",
      title:
        "Jason Roy rediscovers magician’s touch and reverses career trajectory | Simon Burnton",
      description:
        "England’s long-time white-ball opener was hanging on to his place in the team before a spellbinding 113 in BloemfonteinIn the final Harry Potter book our eponymous hero was presented with a golden snitch – if you are unaware of what a snitch is, imagine a gol…",
      url: "https://www.theguardian.com/sport/blog/2023/jan/30/jason-roy-rediscovers-magicians-touch-and-reverses-career-trajectory",
      urlToImage:
        "https://i.guim.co.uk/img/media/39cd28e45df1953aa4925ff1a4e41ab49dd8bd6b/0_38_2893_1735/master/2893.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctb3BpbmlvbnMucG5n&enable=upscale&s=6b3e0134f386fafbfdd849233478b019",
      publishedAt: "2023-01-30T08:00:16Z",
      content:
        "In the final Harry Potter book our eponymous hero was presented with a golden snitch if you are unaware of what a snitch is, imagine a golden object of your choice bequeathed to him by (spoiler alert… [+6234 chars]",
    },
    {
      source: { id: null, name: "The Guardian" },
      author: "Geoff Lemon at the Sydney Cricket Ground",
      title:
        "Usman Khawaja on verge of maiden Test 200 as Australia dominate South Africa",
      description:
        "<ul><li>Australia 475-4 after a rain-interrupted day two at the SCG</li><li>Smith makes milestone 30th Test century, surpassing Bradman</li></ul>South Africa worked, then wilted, feeling that perhaps rain interruptions were not such a bad idea as the second d…",
      url: "https://www.theguardian.com/sport/2023/jan/05/usman-khawaja-on-verge-of-maiden-test-200-as-australia-dominate-south-africa",
      urlToImage:
        "https://i.guim.co.uk/img/media/251284cdde9d25c8139d05c661dcf4695de0a424/572_1_2710_1627/master/2710.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=d53852830e2cd4c13e28e7b85891b619",
      publishedAt: "2023-01-05T07:07:27Z",
      content:
        "South Africa worked, then wilted, feeling that perhaps rain interruptions were not such a bad idea as the second day of the third Test in Sydney became more a matter of Australians chasing milestones… [+3879 chars]",
    },
    {
      source: { id: null, name: "The Guardian" },
      author: "Tanya Aldred (now) and Rob Smyth (later)",
      title: "South Africa v England: third men’s one-day international – live",
      description:
        "<ul><li>Updates from the final match of the series, in Kimberley</li><li>You can contact Tanya by email or on Twitter</li></ul>England XI: Roy, Malan, Duckett, Brook, Buttler, Moeen Ali, Woakes, S Curran, Adil Rashid, Archer, Topley.Olly Stone sits back on th…",
      url: "https://www.theguardian.com/sport/live/2023/feb/01/cricket-south-africa-england-third-one-day-international-odi-live",
      urlToImage:
        "https://i.guim.co.uk/img/media/ce27d9e274de3d1cbd8af7d5eee64e373ac34091/0_0_3226_1936/master/3226.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=c7225d513107d8375a405067d9492632",
      publishedAt: "2023-02-01T10:36:49Z",
      content:
        "Show key events onlyPlease turn on JavaScript to use this feature\r\nHeres a fab piece (thanks to Rob for pointing it out) on how little Englands best ODI team have played together since the greatestTM… [+3596 chars]",
    },
    {
      source: { id: null, name: "The Guardian" },
      author: "Ali Martin",
      title:
        "‘General’ Franks adds another chapter to English success story in Pakistan",
      description:
        "Nottinghamshire’s assistant coach and Bilal Shafayat overcame a host of challenges to lead Central Punjab to 50-over cup gloryThe English adventure in Pakistan this winter did not end with Ben Stokes and his players celebrating a famous 3-0 Test clean sweep b…",
      url: "https://www.theguardian.com/sport/2023/jan/07/general-paul-franks-adds-to-english-success-story-pakistan-cricket",
      urlToImage:
        "https://i.guim.co.uk/img/media/a8e5ebca4410454112b36b50954e3a5fb1e3ab4e/70_50_1424_854/master/1424.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=7318d679d5dd2b172aceadaf67afb758",
      publishedAt: "2023-01-07T08:00:14Z",
      content:
        "The English adventure in Pakistan this winter did not end with Ben Stokes and his players celebrating a famous 3-0 Test clean sweep but rather last Monday, as Central Punjab beat Balochistan by 50 ru… [+4661 chars]",
    },
    {
      source: { id: null, name: "The Guardian" },
      author: "Geoff Lemon (now) and Jonathan Howcroft (later)",
      title: "Australia v South Africa: third Test, day three – live",
      description:
        "<ul><li>Updates on the three-Test finale at the SCG</li><li>Start time in Sydney is 10am AEDT/11pm GMT</li><li>Any thoughts? Email Geoff or tweet @GeoffLemonSport</li></ul>As for players departing, there are some absurd headlines about Steve Smith this mornin…",
      url: "https://www.theguardian.com/sport/live/2023/jan/06/australia-v-south-africa-third-test-day-three-live",
      urlToImage:
        "https://i.guim.co.uk/img/media/0d139ae50380f7416984f4d51c656f62063a918b/0_74_3500_2101/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=2b1457aed4628d7716c44b500d0ec48c",
      publishedAt: "2023-01-05T23:07:07Z",
      content:
        "Show key events onlyPlease turn on JavaScript to use this feature\r\nReally hosing it down at the SCG now. Even if the rain clears, there will be a lot of clean-up time. My sweepstake entry is 2pm loca… [+4411 chars]",
    },
    {
      source: { id: null, name: "The Guardian" },
      author: "Jonathan Liew",
      title:
        "A rancid melody has been directed at Azeem Rafiq but he's not the only target | Jonathan Liew",
      description:
        "There are plenty of potential whistleblowers with their own stories, seeing what happens when you dare to speak outOn the evening of 5 October last year, a man approached a house in Barnsley with a mobile phone in one hand and some toilet rolls in the other. …",
      url: "https://www.theguardian.com/sport/2023/jan/30/rancid-melody-azeem-rafiq-not-the-only-target-cricket",
      urlToImage:
        "https://i.guim.co.uk/img/media/693884c2174046fdd3f3b043dfd2855e623d20f2/0_125_4373_2624/master/4373.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctb3BpbmlvbnMucG5n&enable=upscale&s=599f075db3932be0b89ccea09d2d8ab0",
      publishedAt: "2023-01-30T20:00:26Z",
      content:
        "On the evening of 5 October last year, a man approached a house in Barnsley with a mobile phone in one hand and some toilet rolls in the other. According to written testimony submitted to a parliamen… [+5466 chars]",
    },
    {
      source: { id: null, name: "The Guardian" },
      author: "Neil Manthorp at the Manguang Oval",
      title:
        "South Africa claim victory after England collapse in first one-day international",
      description:
        "<ul><li>South Africa 298-7; England 271</li><li>England were 146-0 with Jason Roy hitting a century</li></ul>Jason Roy scored a vintage century to signal a welcome and overdue return to form but it wasn’t enough to prevent England losing a game they should ha…",
      url: "https://www.theguardian.com/sport/2023/jan/27/south-africa-england-first-one-day-international-match-report-cricket",
      urlToImage:
        "https://i.guim.co.uk/img/media/a73e7fc5e320a05e8b66ae3bb26b2348d553f538/0_66_3078_1847/master/3078.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=c0b4a2b404ade1a06929d9cc30235a99",
      publishedAt: "2023-01-27T19:41:16Z",
      content:
        "Jason Roy scored a vintage century to signal a welcome and overdue return to form but it wasnt enough to prevent England losing a game they should have won comfortably when they went down by 27 runs … [+4122 chars]",
    },
    {
      source: { id: "reuters", name: "Reuters" },
      author: null,
      title: "Naseem stars with five-wicket haul as Pakistan beat NZ - Reuters",
      description:
        "Fast bowler Naseem Shah picked up five wickets before the trio of Fakhar Zaman, Babar Azam and Mohammad Rizwan all scored half-centuries as Pakistan chased down a target of 256 for a comfortable six-wicket win over New Zealand on Monday.",
      url: "https://www.reuters.com/lifestyle/sports/naseem-stars-with-five-wicket-haul-pakistan-beat-nz-2023-01-09/",
      urlToImage:
        "https://www.reuters.com/resizer/Pbn1OfZMzxpNi6cjaYHW7y4RWq8=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/QI2XSBPMCJNFBMHFZNKTQYZB24.jpg",
      publishedAt: "2023-01-09T18:12:00Z",
      content:
        "Jan 9 (Reuters) - Fast bowler Naseem Shah picked up five wickets before the trio of Fakhar Zaman, Babar Azam and Mohammad Rizwan all scored half-centuries as Pakistan chased down a target of 256 for … [+1275 chars]",
    },
    {
      source: { id: "reuters", name: "Reuters" },
      author: null,
      title:
        "India's Network18 posts quarterly loss on expenses, ad slowdown - Reuters",
      description:
        'India\'s Network18 Media & Investments <a href="https://www.reuters.com/companies/NEFI.NS" target="_blank">(NEFI.NS)</a> reported a third-quarter loss on Tuesday, as the billionaire Mukesh Ambani-backed conglomerate splurged to push up its share of television …',
      url: "https://www.reuters.com/business/media-telecom/indias-network18-posts-quarterly-loss-expenses-ad-slowdown-2023-01-17/",
      urlToImage:
        "https://www.reuters.com/resizer/DUEcVw4X-U3Z_EfcSpRxwTGByQk=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/VAMLF3UY2BPVBH7WBPZMGSJOG4.jpg",
      publishedAt: "2023-01-17T08:34:00Z",
      content:
        "BENGALURU, Jan 17 (Reuters) - India's Network18 Media &amp; Investments (NEFI.NS) reported a third-quarter loss on Tuesday, as the billionaire Mukesh Ambani-backed conglomerate splurged to push up it… [+1932 chars]",
    },
    {
      source: { id: "reuters", name: "Reuters" },
      author: null,
      title:
        "Rare rhinos dodge poachers in world's top reserve for first time since ... - Reuters.com",
      description:
        "No rhinos were poached last year in the world's largest reserve for the endangered great one-horned rhinoceros, India's Assam state, in what authorities said was the first time since 1977.",
      url: "https://www.reuters.com/world/india/rare-rhinos-dodge-poachers-worlds-top-reserve-first-time-since-1977-2023-01-09/",
      urlToImage:
        "https://www.reuters.com/resizer/scOTSl61I2wx3w3t6YqKL3GBtdU=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/WPWQJURUOBJS7LRLY7TCCBOC34.jpg",
      publishedAt: "2023-01-09T14:45:00Z",
      content:
        "NEW DELHI, Jan 9 (Reuters) - No rhinos were poached last year in the world's largest reserve for the endangered great one-horned rhinoceros, India's Assam state, in what authorities said was the firs… [+1608 chars]",
    },
    {
      source: { id: "reuters", name: "Reuters" },
      author: null,
      title:
        "Players could play at Australian Open with COVID - Tiley - Reuters",
      description:
        "Players at this month's Australian Open will not be required to take COVID-19 tests and could play even if they had the virus, tournament director Craig Tiley said on Monday.",
      url: "https://www.reuters.com/lifestyle/sports/players-could-play-australian-open-with-covid-tiley-2023-01-09/",
      urlToImage:
        "https://www.reuters.com/resizer/SA4Z0UnrhLDmDvTpcf1PdX-i5OU=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/XX6VTLYJSZKVNKVWHTFT45KKN4.jpg",
      publishedAt: "2023-01-09T04:59:00Z",
      content:
        "MELBOURNE, Jan 9 (Reuters) - Players at this month's Australian Open will not be required to take COVID-19 tests and could play even if they had the virus, tournament director Craig Tiley said on Mon… [+1632 chars]",
    },
    {
      source: { id: "reuters", name: "Reuters" },
      author: null,
      title: "Run machine Smith wins fourth Allan Border medal - Reuters",
      description:
        "Australia run machine Steve Smith clinched his fourth Allan Border Medal on Monday, becoming only the third player, after Ricky Ponting and Michael Clarke, to achieve the feat.",
      url: "https://www.reuters.com/lifestyle/sports/run-machine-smith-wins-fourth-allan-border-medal-2023-01-30/",
      urlToImage:
        "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=127",
      publishedAt: "2023-01-30T11:34:00Z",
      content:
        "SYDNEY, Jan 30 (Reuters) - Australia run machine Steve Smith clinched his fourth Allan Border Medal on Monday, becoming only the third player, after Ricky Ponting and Michael Clarke, to achieve the f… [+1463 chars]",
    },
    {
      source: { id: null, name: "The Guardian" },
      author: "PA Media",
      title:
        "London church described as ‘historical treasure’ destroyed by fire",
      description:
        "London fire brigade report no injuries after 80 firefighters battle blaze at St Mark’s church in St John’s WoodAuthorities are investigating after a heritage-listed north-west London church described as an “architectural and historical treasure” was destroyed…",
      url: "https://www.theguardian.com/uk-news/2023/jan/27/st-marks-church-st-johns-wood-london-destroyed-by-fire",
      urlToImage:
        "https://i.guim.co.uk/img/media/63c06d41853380c2d4005a89b4090822a08f3163/0_352_960_576/master/960.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=b59bbf575d3583494fbdb161f1188e4d",
      publishedAt: "2023-01-27T09:06:51Z",
      content:
        "Authorities are investigating after a heritage-listed north-west London church described as an architectural and historical treasure was destroyed by fire.\r\nEighty firefighters battled the blaze at S… [+1711 chars]",
    },
    {
      source: { id: null, name: "Phandroid - News for Android" },
      author: "Mike Viray",
      title: "Grab the Samsung Galaxy A14 with AT&T and Cricket Wireless Plans",
      description:
        "AT&T and Cricket Wireless have announced the availability of the Samsung Galaxy A14 with unlimited plans.\nThe post Grab the Samsung Galaxy A14 with AT&T and Cricket Wireless Plans first appeared on Phandroid.",
      url: "https://phandroid.com/2023/01/04/grab-the-samsung-galaxy-a14-with-att-and-cricket-wireless-plans/",
      urlToImage:
        "https://phandroid.com/wp-content/uploads/2023/01/Galaxy-A14-5G_Black_Front-1-640x427.jpg",
      publishedAt: "2023-01-04T19:53:20Z",
      content:
        "Following the official reveal of the new Samsung Galaxy A14, AT&amp;T has likewise announced the availability of the handset with its unlimited 5G plans. Targeted at price conscious customers, the ph… [+1455 chars]",
    },
    {
      source: { id: "reuters", name: "Reuters" },
      author: null,
      title:
        "Roy ton in vain as England collapse to defeat in first S.Africa ODI - Reuters.com",
      description:
        "England opener Jason Roy smashed his way back into form with 113 from 91 balls but the tourists lost from a commanding position as South Africa claimed victory by 27 runs in the first One-Day International at Manguang Oval in Bloemfontein on Friday.",
      url: "https://www.reuters.com/lifestyle/sports/roy-ton-vain-england-collapse-defeat-first-safrica-odi-2023-01-27/",
      urlToImage:
        "https://www.reuters.com/resizer/WjzVP_OravTj1PbhbE4UYYUpMpU=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/HXVHOFDI5FLHLDSMINW522UYF4.jpg",
      publishedAt: "2023-01-27T19:41:00Z",
      content:
        "Jan 27 (Reuters) - England opener Jason Roy smashed his way back into form with 113 from 91 balls but the tourists lost from a commanding position as South Africa claimed victory by 27 runs in the fi… [+2031 chars]",
    },
    {
      source: { id: "reuters", name: "Reuters" },
      author: null,
      title:
        "India's Gandhi ends 135-day march to revive Congress party in ... - Reuters India",
      description:
        "Several hundred people gathered as snow fell in Indian Kashmir's main city of Srinagar on Monday to mark the end of Congress party leader Rahul Gandhi's foot march that he began at the southern tip of the country 135 days ago.",
      url: "https://www.reuters.com/world/india/indias-gandhi-ends-135-day-march-revive-congress-party-snowy-kashmir-2023-01-30/",
      urlToImage:
        "https://www.reuters.com/resizer/hT6GS1mMJYKLBiuvL4dc9eJThN8=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/UKPPZE66QZKL3FW6WATX2BTC5Y.jpg",
      publishedAt: "2023-01-30T11:25:00Z",
      content:
        "SRINAGAR, India, Jan 30 (Reuters) - Several hundred people gathered as snow fell in Indian Kashmir's main city of Srinagar on Monday to mark the end of Congress party leader Rahul Gandhi's foot march… [+1879 chars]",
    },
    {
      source: { id: "reuters", name: "Reuters" },
      author: null,
      title:
        "Buttler, Malan smash tons as England seal big win over S Africa - Reuters",
      description:
        "Jos Buttler and Dawid Malan struck superb centuries and Jofra Archer took six wickets as a resurgent England secured a 59-run victory over hosts South Africa in the third and final one-day International in Kimberley on Wednesday.",
      url: "https://www.reuters.com/lifestyle/sports/buttler-malan-smash-tons-england-seal-big-win-over-s-africa-2023-02-01/",
      urlToImage:
        "https://www.reuters.com/resizer/mBVo23uctX471qVFvbn9oLyNhCI=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/GDX4Q4DBKNON5HOHD2SWMJFD3A.jpg",
      publishedAt: "2023-02-01T19:01:00Z",
      content:
        "Feb 1 (Reuters) - Jos Buttler and Dawid Malan struck superb centuries and Jofra Archer took six wickets as a resurgent England secured a 59-run victory over hosts South Africa in the third and final … [+1762 chars]",
    },
    {
      source: { id: null, name: "The Guardian" },
      author: "Rachel Dixon",
      title:
        "Yoga, spas, meditation and more: 10 of the best UK retreats for 2023",
      description:
        "Our pick of healthy getaways from the Highlands to the Isle of Wight aslo includes cold-water therapies and wild swimmingSeven of Warner’s country house hotels offer wellness breaks once or twice a year, with sunrise and sunset yoga, meditation and mindfulnes…",
      url: "https://www.theguardian.com/travel/2023/jan/21/yoga-spas-meditation-10-of-the-best-uk-retreats-for-2023",
      urlToImage:
        "https://i.guim.co.uk/img/media/d7f811bb7f68c75a4a9f5c375433c2c0fdd29529/0_197_5663_3397/master/5663.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=8203a56acdea2e2347fb4e161a251083",
      publishedAt: "2023-01-21T11:00:07Z",
      content:
        "Hotel getaways, various locations\r\nSeven of Warners country house hotels offer wellness breaks once or twice a year, with sunrise and sunset yoga, meditation and mindfulness, qigong and pilates, soun… [+6280 chars]",
    },
    {
      source: { id: null, name: "The Guardian" },
      author: "Gerard Meagher",
      title:
        "Johnny Sexton criticises RFU for lowering tackle height for amateurs",
      description:
        "<ul><li>Andy Farrell says players could become ‘sitting ducks’ for injury</li><li>Owen Farrell and Steve Borthwick more supportive of move</li></ul>The Ireland captain, Johnny Sexton, has criticised the Rugby Football Union’s decision to lower the legal tackl…",
      url: "https://www.theguardian.com/sport/2023/jan/23/johnny-sexton-criticises-rfu-for-lowering-tackle-height-for-amateurs-rugby-union",
      urlToImage:
        "https://i.guim.co.uk/img/media/6a1a3aee5223d47460c50eaabf11c285bc79509d/0_283_5005_3005/master/5005.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=d468c71f958e1c753020a2901c3b8e57",
      publishedAt: "2023-01-23T17:46:28Z",
      content:
        "The Ireland captain, Johnny Sexton, has criticised the Rugby Football Unions decision to lower the legal tackle height to the waist at amateur level in England next season. Sextons views were echoed … [+2724 chars]",
    },
    {
      source: { id: null, name: "The Guardian" },
      author: "Stephen Bates",
      title: "Donald Trelford obituary",
      description:
        "Editor of the Observer in the 1970s and 80s who fought to retain the paper’s integrity and identityDonald Trelford, who has died from cancer aged 85, edited the Observer, the world’s oldest Sunday newspaper, for 18 years from 1975, while fighting for much of …",
      url: "https://www.theguardian.com/media/2023/jan/27/donald-trelford-obituary",
      urlToImage:
        "https://i.guim.co.uk/img/media/ccea3a63ea37818cd76d4247fa3d151a6aad8d77/0_369_6693_4015/master/6693.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=95bf61f45374db60e7b1358a56a0246b",
      publishedAt: "2023-01-27T15:26:19Z",
      content:
        "Donald Trelford, who has died from cancer aged 85, edited the Observer, the worlds oldest Sunday newspaper, for 18 years from 1975, while fighting for much of that time to preserve its existence, its… [+9897 chars]",
    },
    {
      source: { id: null, name: "The Guardian" },
      author: "Geoff Lemon",
      title:
        "Australia fire after the rain as Pat Cummins leads charge to victory",
      description:
        "<ul><li>South Africa finish Day 4 at 6 for 149, still 326 runs behind</li><li>Australia need 14 wickets from 98 overs tomorrow for victory</li></ul>After a day and a half of waiting through rain and darkness, play finally resumed at the Sydney Cricket Ground.…",
      url: "https://www.theguardian.com/sport/2023/jan/07/australia-fire-after-the-rain-as-pat-cummins-leads-charge-to-victory",
      urlToImage:
        "https://i.guim.co.uk/img/media/f47c33c7c11c7ace74ca94ebb86d089f2c3f4289/0_59_3000_1800/master/3000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=403251534cecd9b7875fe930ea33999c",
      publishedAt: "2023-01-07T07:56:34Z",
      content:
        "After a day and a half of waiting through rain and darkness, play finally resumed at the Sydney Cricket Ground. After three matches waiting through injury, Josh Hazlewood resumed his Test career. On … [+3803 chars]",
    },
    {
      source: { id: null, name: "The Guardian" },
      author: "Alan Connor",
      title:
        "Cryptic crosswords for beginners: mind the gap – when clues get completely heartless",
      description:
        "Continuing our series for those tempted or daunted by cryptics, we explore directions that ask us to remove middle letters In the example clues below, I explain the two parts of each one: there is a definition of the answer and there is some wordplay – a reci…",
      url: "https://www.theguardian.com/crosswords/crossword-blog/2023/jan/23/cryptic-crosswords-for-beginners-mind-the-gap-when-clues-get-completely-heartless",
      urlToImage:
        "https://i.guim.co.uk/img/media/fdfb9d9d64bd35555bbe43aab62fb83898156607/451_2_2733_1641/master/2733.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=0309d7e71bb8c8e0cfb8a642d96c2664",
      publishedAt: "2023-01-23T10:56:44Z",
      content:
        "In the example clues below, I explain the two parts of each one: there is a definition of the answer and there is some wordplay a recipe for assembling its letters. In a genuine puzzle environment, o… [+3742 chars]",
    },
    {
      source: { id: null, name: "The Guardian" },
      author: "Neil Manthorp at Kimberly Oval",
      title:
        "Jofra Archer takes six wickets as England beat South Africa in final ODI",
      description:
        "<ul><li>England 346-7; South Africa 287 - England win by 59 runs</li><li>Dawid Malan and Jos Buttler hit hundreds</li></ul>Jos Buttler and Dawid Malan scored backs-to-the-wall centuries but it was Jofra Archer’s stunning return of six for 40 which led England…",
      url: "https://www.theguardian.com/sport/2023/feb/01/jofra-archer-takes-six-wickets-as-england-beat-south-africa-in-final-odi",
      urlToImage:
        "https://i.guim.co.uk/img/media/c726bba815b6519fe0894bbb89eb503d5ded2634/391_165_4536_2724/master/4536.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=18c28e4b155843e59dc9050443466745",
      publishedAt: "2023-02-01T19:10:37Z",
      content:
        "Jos Buttler and Dawid Malan scored backs-to-the-wall centuries but it was Jofra Archers stunning return of six for 40 which led England to a consolation victory by 59 runs in the final match of their… [+4216 chars]",
    },
    {
      source: { id: null, name: "The Guardian" },
      author: "PA Media",
      title:
        "Capsey named in England Women’s T20 World Cup squad despite injury concern",
      description:
        "<ul><li>All-rounder, 18, will be given ‘every chance’ to prove fitness</li><li>Capsey broke her collarbone last month against West Indies</li></ul>The England all-rounder Alice Capsey will be given every opportunity to prove her fitness for next month’s Women…",
      url: "https://www.theguardian.com/sport/2023/jan/06/capsey-named-in-england-womens-t20-world-cup-squad-despite-injury-concern",
      urlToImage:
        "https://i.guim.co.uk/img/media/5d78df51fdc7f33024d0bbe8db758494fe142aa8/0_191_3500_2101/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=f0bdf682c104334eb46c75086e7fef41",
      publishedAt: "2023-01-06T11:59:47Z",
      content:
        "The England all-rounder Alice Capsey will be given every opportunity to prove her fitness for next months Womens T20 World Cup in South Africa.\r\nCapsey has been included in Jon Lewiss 15-strong squad… [+2410 chars]",
    },
    {
      source: { id: null, name: "The Guardian" },
      author: "Peter Bradshaw",
      title:
        "If These Walls Could Sing review – mystery tour of Abbey Road Studios",
      description:
        "Mary McCartney’s documentary about the legendary home to the Beatles’ and many other stars’ recordings is an enjoyable diversionPutting her privileged access to good use, Mary McCartney has directed this enjoyable documentary about Abbey Road Studios in Londo…",
      url: "https://www.theguardian.com/film/2023/jan/03/if-these-walls-could-sing-review-mystery-tour-of-abbey-road-studios",
      urlToImage:
        "https://i.guim.co.uk/img/media/6a54c3634578922eb49b1c47ab2466388706033a/0_16_2000_1200/master/2000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctcmV2aWV3LTQucG5n&enable=upscale&s=4505d6fef716119af10636cb30c7c744",
      publishedAt: "2023-01-03T09:00:39Z",
      content:
        "Putting her privileged access to good use, Mary McCartney has directed this enjoyable documentary about Abbey Road Studios in London famously the site of the Beatles classic recordings (her dad is Pa… [+1940 chars]",
    },
    {
      source: { id: null, name: "The Guardian" },
      author: "Sarah Maria Griffin",
      title: "Sports Story review – all the charm of a forgotten SNES classic",
      description:
        "Nintendo Switch; Sidebar GamesThe long-awaited follow-up to Golf Story is rough but characterful, with plenty of retro warmthLike developer Sidebar’s 2017 cult triumph Golf Story, Sport Story feels like an exceptional title from the Super Nintendo era. You’re…",
      url: "https://www.theguardian.com/games/2023/jan/12/sports-story-review-all-the-charm-of-a-forgotten-snes-classic",
      urlToImage:
        "https://i.guim.co.uk/img/media/8f51d8ac5c70f6dfd39015c2cce98d38c0e0f685/0_0_1800_1080/master/1800.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctcmV2aWV3LTMucG5n&enable=upscale&s=9323452be01f7667130195abfd77494b",
      publishedAt: "2023-01-12T12:00:09Z",
      content:
        "Like developer Sidebars 2017 cult triumph Golf Story, Sport Story feels like an exceptional title from the Super Nintendo era. Youre holidaying on a bright, retro-flavoured, pixelated island with you… [+1912 chars]",
    },
    {
      source: { id: null, name: "The Guardian" },
      author: "Ali Martin",
      title:
        "Steve Smith in talks to play for Sussex during buildup to Ashes series",
      description:
        "<ul><li>Australia batsman hopes to acclimatise to conditions in England</li><li>Smith also looking to World Test Championship final in June</li></ul>Steve Smith is in discussions over a deal to play for Sussex in the runup to Australia’s attempt to win both t…",
      url: "https://www.theguardian.com/sport/2023/jan/12/steve-smith-in-talks-to-play-for-sussex-during-buildup-to-ashes-series",
      urlToImage:
        "https://i.guim.co.uk/img/media/1059b0efc3c2dd88ff36f911575f89c250d48afc/226_456_1394_836/master/1394.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=4f8634839790ca1ac4fd04025a680908",
      publishedAt: "2023-01-12T21:02:52Z",
      content:
        "Steve Smith is in discussions over a deal to play for Sussex in the runup to Australias attempt to win both the World Test Championship and a first Ashes series in England since 2001.\r\nSmith is yet t… [+2297 chars]",
    },
    {
      source: { id: null, name: "The Guardian" },
      author: "PA Media",
      title:
        "India deny England in final to win first Women’s Under-19 T20 World Cup",
      description:
        "<ul><li>England 68 all out, India 69-3; India won by seven wickets</li><li>Shafali Verma leads batting charge after England collapse</li></ul>England fell at the last hurdle as India eased to victory in the final of the inaugural Women’s Under-19 T20 World Cu…",
      url: "https://www.theguardian.com/sport/2023/jan/29/cricket-india-england-womens-under-19-t20-world-cup-final-report",
      urlToImage:
        "https://i.guim.co.uk/img/media/32e2730cac1818ffc43935d65740cbfe2a8138d5/0_107_5244_3148/master/5244.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=cf5693f6e48ede3cb69b34b0177f1362",
      publishedAt: "2023-01-29T16:42:17Z",
      content:
        "England fell at the last hurdle as India eased to victory in the final of the inaugural Womens Under-19 T20 World Cup on Sunday in South Africa.\r\nGrace Scrivens youngsters had successfully defended 1… [+1950 chars]",
    },
    {
      source: { id: null, name: "MakeUseOf" },
      author: "Sai Ashish Konchada",
      title: "Play a Game of Hand Cricket Using Python",
      description:
        "Step up to the crease and try your hand at this text-based cricket simulation.",
      url: "https://www.makeuseof.com/python-game-hand-cricket/",
      urlToImage:
        "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2022/12/batsman-holding-cricket-bat.jpg",
      publishedAt: "2023-01-15T11:30:15Z",
      content:
        "With an estimated 2.5 billion fans, cricket is one of the biggest and most popular sports in the world. In India alone, cricket is worth a whopping 5.3 billion dollars. Sachin Tendulkar, Donald Bradm… [+6747 chars]",
    },
    {
      source: { id: null, name: "Entrepreneur" },
      author: "Entrepreneur Staff",
      title:
        "FA Cup Soccer Match Broadcast Disrupted By 'Sex Noises' Live on the BBC",
      description:
        "A prankster brought new meaning to having passion for the sport.",
      url: "https://www.entrepreneur.com/business-news/fa-cup-soccer-broadcast-disrupted-by-sex-noises-on-live-tv/443210",
      urlToImage:
        "https://assets.entrepreneur.com/content/3x2/2000/1674056842-GettyImages-1246310879.jpg",
      publishedAt: "2023-01-18T15:47:00Z",
      content:
        "Who says soccer is boring?\r\nSimon Stacpoole/Offside | Getty Images\r\nYesterday, as presenters and analysts Gary Lineker, Paul Ince, and Danny Murphy broke down the FA Cup Wolves vs. Liverpool match li… [+2392 chars]",
    },
    {
      source: { id: "reuters", name: "Reuters" },
      author: null,
      title:
        "Australia eye WTC final and series sweep against South Africa - Reuters.com",
      description:
        "A relaxed and confident Australia head into the third and final test against South Africa in Sydney eyeing a series sweep and a berth in the World Test Championship (WTC) final to cap a dominant home summer.",
      url: "https://www.reuters.com/lifestyle/sports/australia-eye-wtc-final-series-sweep-against-south-africa-2023-01-03/",
      urlToImage:
        "https://www.reuters.com/resizer/cT5lQYLuG34kT9u_--xlJaPlbbk=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/SZ7L47UEKJNSHN4PKRCBVOBBCM.jpg",
      publishedAt: "2023-01-03T06:41:00Z",
      content:
        "SYDNEY, Jan 3 (Reuters) - A relaxed and confident Australia head into the third and final test against South Africa in Sydney eyeing a series sweep and a berth in the World Test Championship (WTC) fi… [+2649 chars]",
    },
    {
      source: { id: "bbc-news", name: "BBC News" },
      author: null,
      title: "The night tournament changing girls' cricket in Pakistan",
      description:
        "Khelo Kricket, a dusk-til-dawn cricket tournament, has been controversial but is changing the landscape of cricket in Pakistan.",
      url: "https://www.bbc.co.uk/sport/cricket/64010532",
      urlToImage:
        "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/506F/production/_128319502_whatsappimage2022-12-17at6.14.02am.jpg",
      publishedAt: "2023-01-17T08:01:01Z",
      content:
        "Khelo Kricket is scheduled to feature 12 teams across Pakistan in 2023\r\n\"Let's just see if there's a market out there. And so we put an advertisement out and within 24 hours, we got 250 registrations… [+5020 chars]",
    },
    {
      source: { id: "bbc-news", name: "BBC News" },
      author: null,
      title: "New Ireland stadium talks 'serious' says Deutrom",
      description:
        "Cricket Ireland chief executive Warren Deutrom believes the Irish Government is ready to begin discussions on a new national cricket stadium.",
      url: "https://www.bbc.co.uk/sport/cricket/64504351",
      urlToImage:
        "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/14000/production/_128502918_mediaitem128502917.jpg",
      publishedAt: "2023-02-02T17:30:42Z",
      content:
        "Ireland have alternated between Malahide (above), Stormont and Bready as the venues for their home internationals\r\nCricket Ireland chief executive Warren Deutrom says the Irish government is to begin… [+4472 chars]",
    },
    {
      source: { id: null, name: "HuffPost" },
      author: "David Moye",
      title: "BBC Apologizes For Porn Noises Heard During Soccer Game",
      description:
        "The naughty noises were played on air during live coverage of an FA Cup match between Wolverhampton and Liverpool at Molineux Stadium on Tuesday.",
      url: "https://www.huffpost.com/entry/porn-noises-bbc-coverage_n_63c72e9ae4b07c0c7df897e3",
      urlToImage:
        "https://img.huffingtonpost.com/asset/63c72fbe2500005e0085520e.jpeg?cache=HqniVoiXYR&ops=1200_630",
      publishedAt: "2023-01-17T23:38:06Z",
      content:
        "Pornographic noises were played on air during live coverage of an FA Cup match between Wolverhampton and Liverpool at Molineux Stadium on Tuesday (AP Photo/Rui Vieira)\r\nLONDON (AP) The BBC has apolog… [+1445 chars]",
    },
    {
      source: { id: null, name: "NPR" },
      author: "Emily Olson",
      title: "Lisa Loring, the original Wednesday Addams, is dead at 64",
      description:
        "Lisa Loring will be remembered as a Hollywood icon for playing the gloomy Wednesday Addams at age 6. She went on to fill roles on As the World Turns and the Girl from U.N.C.L.E..",
      url: "https://www.npr.org/2023/01/30/1152472309/lisa-loring-wednesday-addams",
      urlToImage:
        "https://media.npr.org/assets/img/2023/01/30/gettyimages-93775808_wide-850f315dabba4d951b07b62df66269337ffdb939-s1400-c100.jpg",
      publishedAt: "2023-01-30T15:45:48Z",
      content:
        "The Addams Family characters Wednesday and Uncle Fester. The actress who played the iconic Wednesday, Lisa Loring, died this weekend.\r\nABC Photo Archives/Disney General Entertainment Content via Gett… [+2590 chars]",
    },
    {
      source: { id: null, name: "The Guardian" },
      author: "Chris Godfrey",
      title:
        "‘I’m not always nice’: Hugh Jackman on his reputation, returning as Wolverine and the loss of his father",
      description:
        "X-Men made him a star; now The Son is giving him a shot at an Oscar. The actor talks about family, superheroes and the sexual misconduct claims against director Bryan SingerHugh Jackman is feeling reflective. It’s easy to understand why. In his latest film, T…",
      url: "https://www.theguardian.com/film/2023/jan/05/hugh-jackman-wolverine-father-the-son-x-men",
      urlToImage:
        "https://i.guim.co.uk/img/media/35cb17775ac619e6f77cd9af9619addd7df55652/0_0_4778_2867/master/4778.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=dc5083a4c12f20e14ff8bb43f7c7da46",
      publishedAt: "2023-01-05T06:00:13Z",
      content:
        "Hugh Jackman is feeling reflective. Its easy to understand why. In his latest film, The Son, he plays an absentee, workaholic father struggling to help his estranged and acutely depressed teenage son… [+11333 chars]",
    },
    {
      source: { id: "bbc-news", name: "BBC News" },
      author: null,
      title: "English cricket loses key sponsorship deals",
      description:
        "Car retailer Cazoo and insurance firm LV= both opt against renewing sponsorship deals with English cricket.",
      url: "https://www.bbc.co.uk/sport/cricket/64345417",
      urlToImage:
        "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/DBE7/production/_128359265_trentrocketsmencelebrate.jpg",
      publishedAt: "2023-01-20T10:27:16Z",
      content:
        "Cazoo sponsored the first two years of The Hundred\r\nCar retailer Cazoo and insurance firm LV= have both opted against renewing sponsorship deals with English cricket.\r\nCazoo was the title sponsor of … [+1868 chars]",
    },
    {
      source: { id: "bbc-news", name: "BBC News" },
      author: null,
      title: "England bowler Brunt retires from county cricket",
      description:
        "England bowler Katherine Brunt is retiring from county cricket, although she will still play in The Hundred.",
      url: "https://www.bbc.co.uk/sport/cricket/64413288",
      urlToImage:
        "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/17C3E/production/_128424379_shutterstock_editorial_9785188a.jpg",
      publishedAt: "2023-01-26T12:14:40Z",
      content:
        "Katherine Brunt sees Yorkshires 2015 One-Day Championship win in as a domestic career high\r\nVeteran England bowler Katherine Brunt has announced her retirement from regional and county cricket.\r\nBrun… [+1117 chars]",
    },
    {
      source: { id: "bbc-news", name: "BBC News" },
      author: null,
      title: "Dressing-room culture needs to change - Strauss",
      description:
        'Former England captain Sir Andrew Strauss says "dressing-room banter" in cricket needs to be "softened".',
      url: "https://www.bbc.co.uk/sport/cricket/64493179",
      urlToImage:
        "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/5E55/production/_128494142_gettyimages-1033172408.jpg",
      publishedAt: "2023-02-01T23:45:09Z",
      content:
        'Sir Andrew Strauss captained England in 50 of his 100 Tests\r\nFormer England captain Sir Andrew Strauss says "dressing-room banter" in cricket needs to be "softened".\r\nDisciplinary hearings relating t… [+1300 chars]',
    },
    {
      source: { id: "reuters", name: "Reuters" },
      author: null,
      title:
        "Analysis: Pakistan moves toward deal-or-default endgame - Reuters",
      description:
        "Pakistan's full-blown economic turmoil, from its biggest ever currency devaluation to a rash of emergency spending cuts, offers the clearest sign yet that the nuclear-armed nation faces the risk of a default unless it receives massive support.",
      url: "https://www.reuters.com/world/asia-pacific/pakistan-moves-toward-deal-or-default-endgame-2023-02-01/",
      urlToImage:
        "https://www.reuters.com/resizer/Zor6PYRS030uOA98NGXU7koJjlE=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/CCX3OGQ7WBITDDPDOTDZZEGJ7I.jpg",
      publishedAt: "2023-02-01T06:07:20Z",
      content:
        "ISLAMABAD/LONDON, Feb 1 (Reuters) - Pakistan's full-blown economic turmoil, from its biggest ever currency devaluation to a rash of emergency spending cuts, offers the clearest sign yet that the nucl… [+5033 chars]",
    },
    {
      source: { id: "bbc-news", name: "BBC News" },
      author: null,
      title: "Tom Curran to take break from red-ball cricket",
      description:
        'England and Surrey all-rounder Tom Curran is to take a break from playing red-ball cricket to "prioritise his physical and mental health".',
      url: "https://www.bbc.co.uk/sport/cricket/64483645",
      urlToImage:
        "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/AA80/production/_128484634_tomcurrangetty1.jpg",
      publishedAt: "2023-02-01T10:27:54Z",
      content:
        'Tom Curran has scored 5,709 runs and taken 195 wickets in County Championship matches\r\nSurrey and England all-rounder Tom Curran is to take a break from red-ball cricket to "prioritise his physical a… [+2150 chars]',
    },
    {
      source: { id: null, name: "The Guardian" },
      author: "Guardian sport",
      title:
        "‘I feel like a different person’: AFLW star opens up on aftershocks from lightning strike",
      description:
        "<ul><li>Jessica Wuetschner was hit by lightning working as a stevedore</li><li>Essendon star goes public with struggles since 2020 accident</li></ul>AFLW star Jessica Wuetschner has revealed the terrifying physical and mental toll of the 2020 lightning strike…",
      url: "https://www.theguardian.com/sport/2023/jan/03/i-feel-like-a-different-person-aflw-star-opens-up-on-aftershocks-from-lightning-strike",
      urlToImage:
        "https://i.guim.co.uk/img/media/bee325efdbf19fdab6863cd70069ee20409a4194/0_47_3138_1883/master/3138.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=392ba115282bec1444bb0ab158909d65",
      publishedAt: "2023-01-03T02:54:21Z",
      content:
        "AFLW star Jessica Wuetschner has revealed the terrifying physical and mental toll of the 2020 lightning strike that ruined my life and almost derailed her football career.\r\nIt was two weeks out from … [+3835 chars]",
    },
  ];

  constructor(props) {
    super();
    console.log("Hello I am from News.js");
    this.state = {
      articles: this.articles,
      loading: false,
      page: 2,
    };
  }
  async componentDidMount() {
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=b2da89043bab4d25b3efff3f21101603&page=${this.props.pageSize}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalArtical: parsedData.totalResults,
      loading: false,
    });
  }
  handlePrevClcik = async () => {
    this.setState({ articles: parsedData.articles });
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=b2da89043bab4d25b3efff3f21101603&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false,
    });
  };
  handleNextClcik = async () => {
    if (
      this.state.page + 1 >
      Math.ceil(this.state.totalResults / this.props.pageSize)
    )
      this.setState({ articles: parsedData.articles });
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=b2da89043bab4d25b3efff3f21101603&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
      loading: false,
    });
  };
  render() {
    return (
      <>
        <h2>Top 🎯</h2>
        <div className="container d-flex justify-content-around my-2">
          {this.state.loading && <Spinner />}
          {/* This is News Component */}

          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="row" key={element.url}>
                  <div className="col-md-4">
                    <NewsItem
                      title={element.title ? element.title.slice(0, 45) : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 88)
                          : ""
                      }
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                    />
                  </div>
                </div>
              );
            })}
          <div className="container d-flex justify-content-around">
            <button
              disabled={this.state.page <= 1}
              type="button"
              className="btn btn-dark"
              onClick={this.handlePrevClcik}
            >
              &larr; Prev
            </button>
            <button
              disabled={
                this.state.page + 1 >
                Math.ceil(this.state.totalResults / this.props.pageSize)
              }
              type="button"
              className="btn btn-dark"
              onClick={this.handleNextClcik}
            >
              Next &rarr;
            </button>
          </div>
          {/* <div className="col-md-4">
                        <NewsItem title="title" description="This is a description"/>
                        </div>
                        <div className="col-md-4">
                        <NewsItem title="title" description="This is a description"/>
                      </div> */}
        </div>
      </>
    );
  }
}
