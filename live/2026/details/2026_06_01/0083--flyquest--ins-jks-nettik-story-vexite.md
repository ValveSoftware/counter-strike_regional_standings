### Roster Details<br />
Team Name: FlyQuest<br />
Roster: INS, jks, nettik, story, Vexite<br />
Global Rank: [83](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_06_01.md)<br />
Regional Rank: [8]( ../../standings_asia_2026_06_01.md)<br />
<br />
Final Rank Value:  1112.3<br />
<br />
Final Rank Value (1112.3) = Starting Rank Value (1073.8) + Head To Head Adjustments (38.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.368[<sup>1</sup>](#table2)
- Bounty Collected: 0.299[<sup>2</sup>](#table1)
- Opponent Network: 0.121[<sup>2</sup>](#table1)
- LAN Wins: 0.627[<sup>2</sup>](#table1)

The average of these factors is 0.354<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1073.8
- 400 + ( ( 0.354 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 1073.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           21 |      645 | 2026-05-12 | 5star             | L   | 1.000      | -            | -                | -                | -         |   -13.68 | INS, jks, nettik, story, Vexite |
|           20 |      677 | 2026-05-12 | NEXVOID           | W   | 1.000      | 0.548        | 0.013 (0.007)    | 0.408 (0.223)    | 1 (1.000) |    15.97 | INS, jks, nettik, story, Vexite |
|           19 |      725 | 2026-05-11 | JiJieHao          | L   | 1.000      | -            | -                | -                | -         |    -8.21 | INS, jks, nettik, story, Vexite |
|           18 |     1846 | 2026-04-05 | TYLOO             | L   | 0.818      | -            | -                | -                | -         |    -4.56 | INS, jks, nettik, story, Vexite |
|           17 |     1920 | 2026-04-04 | Chinggis Warriors | W   | 0.812      | 0.354        | 0.018 (0.005)    | 0.486 (0.140)    | 1 (0.812) |    13.41 | INS, jks, nettik, story, Vexite |
|           16 |     2117 | 2026-04-01 | SemperFi          | W   | 0.797      | 0.354        | 0.011 (0.003)    | 0.347 (0.098)    | 1 (0.797) |    12.69 | INS, jks, nettik, story, Vexite |
|           15 |     2207 | 2026-03-31 | UR                | W   | 0.790      | -            | -                | -                | 1 (0.790) |     0.57 | INS, jks, nettik, story, Vexite |
|           14 |     3337 | 2026-03-11 | Alter Ego         | L   | 0.657      | -            | -                | -                | -         |   -15.23 | INS, jks, nettik, story, Vexite |
|           13 |     3365 | 2026-03-11 | Rare Atom         | W   | 0.652      | 0.769        | 0.010 (0.005)    | 0.340 (0.170)    | -         |    10.42 | INS, jks, nettik, story, Vexite |
|           12 |     3371 | 2026-03-10 | FengDa            | W   | 0.650      | 0.769        | 0.013 (0.007)    | 0.233 (0.117)    | -         |     2.52 | INS, jks, nettik, story, Vexite |
|           11 |     3476 | 2026-03-09 | Chinggis Warriors | L   | 0.638      | -            | -                | -                | -         |    -9.13 | INS, jks, nettik, story, Vexite |
|           10 |     3486 | 2026-03-08 | Chaos             | W   | 0.637      | -            | -                | -                | -         |     0.71 | INS, jks, nettik, story, Vexite |
|            9 |     3908 | 2026-02-28 | 100 Thieves       | L   | 0.580      | -            | -                | -                | -         |    -3.93 | INS, jks, nettik, story, Vexite |
|            8 |     3941 | 2026-02-27 | HEROIC            | L   | 0.574      | -            | -                | -                | -         |    -2.38 | INS, jks, nettik, story, Vexite |
|            7 |     3990 | 2026-02-26 | Eternal Fire      | W   | 0.568      | 0.354        | 0.008 (0.002)    | 0.775 (0.156)    | 1 (0.568) |    11.16 | INS, jks, nettik, story, Vexite |
|            6 |     4024 | 2026-02-26 | Nexus             | W   | 0.566      | -            | -                | -                | 1 (0.566) |     2.40 | INS, jks, nettik, story, Vexite |
|            5 |     4075 | 2026-02-25 | HYPERSPIRIT       | W   | 0.559      | 0.354        | 0.005 (0.001)    | 0.550 (0.109)    | 1 (0.559) |     5.76 | INS, jks, nettik, story, Vexite |
|            4 |     5285 | 2026-01-25 | JiJieHao          | W   | 0.352      | 0.423        | 0.061 (0.009)    | 0.566 (0.084)    | 1 (0.352) |     9.23 | INS, jks, nettik, story, Vexite |
|            3 |     5326 | 2026-01-24 | Kaleido           | W   | 0.344      | 0.423        | 0.021 (0.003)    | 0.312 (0.045)    | 1 (0.344) |     3.87 | INS, jks, nettik, story, Vexite |
|            2 |     5368 | 2026-01-23 | Chinggis Warriors | W   | 0.339      | 0.423        | 0.018 (0.003)    | 0.486 (0.070)    | 1 (0.339) |     6.69 | INS, jks, nettik, story, Vexite |
|            1 |     5515 | 2026-01-18 | Steel Helmet      | W   | 0.306      | -            | -                | -                | -         |     0.22 | INS, jks, nettik, story, Vexite |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($11,950.88)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-04-05 |      0.818 | $3,750.00      | $3,067.46       |
| 2026-02-28 |      0.581 | $2,250.00      | $1,307.57       |
| 2026-01-25 |      0.352 | $21,498.00     | $7,575.86       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
