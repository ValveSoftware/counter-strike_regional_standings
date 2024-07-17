### Roster Details<br />
Team Name: BIG EQUIPA<br />
Roster: JennyR, juliano, kyossa, pauliiee, Zana<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [120](../standings_global.md)<br />
Regional Rank: [83]( ../standings_europe.md)<br />
Final Rank Value:  832.2<br />
<br />
Final Rank Value (832.2) = Starting Rank Value (821.2) + Head To Head Adjustments (11.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.389[<sup>1</sup>](#table2)
- Bounty Collected: 0.275[<sup>2</sup>](#table1)
- Opponent Network: 0.018[<sup>2</sup>](#table1)
- LAN Wins: 0.103[<sup>2</sup>](#table1)

The average of these factors is 0.196<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 821.2
- 400 + ( ( 0.196 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 821.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           18 |      902 | 2024-06-01 | HSG fe            | L   | 0.896      | -            | -                | -                | -         |   -11.22 | JennyR, juliano, kyossa, pauliiee, Zana |
|           17 |      940 | 2024-05-31 | Imperial fe       | L   | 0.888      | -            | -                | -                | -         |    -4.53 | JennyR, juliano, kyossa, pauliiee, Zana |
|           16 |      951 | 2024-05-31 | FlyQuest RED      | W   | 0.887      | 0.524        | 0.027 (0.013)    | 0.190 (0.088)    | 1 (0.887) |    13.47 | JennyR, juliano, kyossa, pauliiee, Zana |
|           15 |     1265 | 2024-05-19 | NAVI Javelins     | L   | 0.806      | -            | -                | -                | -         |    -9.94 | JennyR, juliano, kyossa, pauliiee, Zana |
|           14 |     1292 | 2024-05-18 | Nemesis fe        | W   | 0.800      | 0.281        | -                | 0.000 (0.000)    | 0 (0.000) |     1.94 | JennyR, juliano, kyossa, pauliiee, Zana |
|           13 |     1978 | 2024-04-20 | Fearless Cheetahs | W   | 0.614      | 0.331        | 0.005 (0.001)    | 0.088 (0.018)    | 0 (0.000) |     7.43 | JennyR, juliano, kyossa, pauliiee, Zana |
|           12 |     2024 | 2024-04-19 | NIP Impact        | W   | 0.608      | 0.331        | 0.008 (0.002)    | 0.191 (0.038)    | 0 (0.000) |     7.91 | JennyR, juliano, kyossa, pauliiee, Zana |
|           11 |     2413 | 2024-04-07 | Imperial fe       | L   | 0.526      | -            | -                | -                | -         |    -2.43 | JennyR, juliano, kyossa, pauliiee, Zana |
|           10 |     2428 | 2024-04-06 | Spirit fe         | W   | 0.519      | 0.262        | 0.004 (0.001)    | 0.038 (0.005)    | 0 (0.000) |     4.78 | JennyR, juliano, kyossa, pauliiee, Zana |
|            9 |     2478 | 2024-04-04 | ENCE Athena       | W   | 0.507      | 0.331        | 0.004 (0.001)    | 0.057 (0.010)    | 0 (0.000) |     4.79 | JennyR, juliano, kyossa, pauliiee, Zana |
|            8 |     2611 | 2024-03-28 | ex-GUILD fe       | L   | 0.461      | -            | -                | -                | -         |    -9.86 | JennyR, juliano, kyossa, pauliiee, Zana |
|            7 |     2886 | 2024-03-14 | Imperial fe       | L   | 0.368      | -            | -                | -                | -         |    -1.76 | JennyR, juliano, kyossa, pauliiee, Zana |
|            6 |     3094 | 2024-03-06 | Astralis W        | W   | 0.314      | 0.331        | 0.002 (0.000)    | 0.031 (0.003)    | 0 (0.000) |     2.53 | JennyR, juliano, kyossa, pauliiee, Zana |
|            5 |     3170 | 2024-03-03 | ex-FORZE Ladies   | W   | 0.295      | 0.250        | 0.005 (0.000)    | 0.045 (0.003)    | 0 (0.000) |     2.66 | JennyR, juliano, kyossa, pauliiee, Zana |
|            4 |     3312 | 2024-02-25 | NAVI Javelins     | L   | 0.247      | -            | -                | -                | -         |    -3.28 | JennyR, juliano, kyossa, pauliiee, Zana |
|            3 |     3317 | 2024-02-25 | Let Her Cook      | W   | 0.245      | 0.238        | 0.092 (0.005)    | 0.185 (0.011)    | 0 (0.000) |     5.79 | JennyR, juliano, kyossa, pauliiee, Zana |
|            2 |     3348 | 2024-02-24 | ex-GUILD fe       | W   | 0.240      | 0.238        | 0.004 (0.000)    | 0.091 (0.005)    | 0 (0.000) |     2.48 | JennyR, juliano, kyossa, pauliiee, Zana |
|            1 |     3881 | 2024-01-28 | QM fe             | W   | 0.060      | 0.250        | 0.000 (0.000)    | -                | -         |     0.28 | JennyR, juliano, kyossa, pauliiee, Zana |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,577.50)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-02 |      0.902 | $7,000.00      | $6,311.15       |
| 2024-03-03 |      0.295 | $750.00        | $220.98         |
| 2024-01-28 |      0.060 | $750.00        | $45.37          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
