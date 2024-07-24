### Roster Details<br />
Team Name: PARIVISION<br />
Roster: alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [53](../standings_global.md)<br />
Regional Rank: [40]( ../standings_europe.md)<br />
Final Rank Value:  1048.5<br />
<br />
Final Rank Value (1048.5) = Starting Rank Value (1043.2) + Head To Head Adjustments (5.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.377[<sup>1</sup>](#table2)
- Bounty Collected: 0.506[<sup>2</sup>](#table1)
- Opponent Network: 0.270[<sup>2</sup>](#table1)
- LAN Wins: 0.118[<sup>2</sup>](#table1)

The average of these factors is 0.318<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1043.2
- 400 + ( ( 0.318 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 1043.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           45 |       12 | 2024-07-24 | The MongolZ       | W   | 1.000      | 0.650        | 1.000 (0.650)    | 0.725 (0.472)    | 1 (1.000) |    30.82 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           44 |       18 | 2024-07-24 | Aurora            | L   | 1.000      | -            | -                | -                | -         |    -3.81 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           43 |      692 | 2024-06-14 | Permitta          | L   | 0.932      | -            | -                | -                | -         |   -19.03 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           42 |      794 | 2024-06-10 | RUSH B            | W   | 0.905      | -            | -                | -                | 0 (0.000) |    10.04 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           41 |      799 | 2024-06-10 | 3DMAX             | L   | 0.905      | -            | -                | -                | -         |   -10.10 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           40 |      805 | 2024-06-10 | SINNERS           | L   | 0.904      | -            | -                | -                | -         |   -15.64 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           39 |      839 | 2024-06-09 | Aurora            | L   | 0.899      | -            | -                | -                | -         |    -4.58 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           38 |      846 | 2024-06-09 | 9 Pandas          | W   | 0.899      | -            | -                | -                | 0 (0.000) |    16.33 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           37 |      855 | 2024-06-09 | Monte             | W   | 0.898      | -            | -                | -                | 0 (0.000) |    11.75 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           36 |      860 | 2024-06-09 | SAW               | L   | 0.898      | -            | -                | -                | -         |    -8.83 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           35 |     1070 | 2024-06-05 | Aurora            | L   | 0.874      | -            | -                | -                | -         |    -2.66 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           34 |     1120 | 2024-06-04 | Monte             | W   | 0.867      | 0.500        | 0.083 (0.036)    | 0.428 (0.185)    | 0 (0.000) |    11.90 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           33 |     1527 | 2024-05-20 | Sangal            | L   | 0.765      | -            | -                | -                | -         |   -10.40 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           32 |     1605 | 2024-05-17 | Zero Tenacity     | W   | 0.747      | 0.500        | 0.173 (0.065)    | 1.000 (0.374)    | 0 (0.000) |    12.82 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           31 |     1636 | 2024-05-16 | Aurora            | L   | 0.741      | -            | -                | -                | -         |    -1.74 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           30 |     1654 | 2024-05-16 | Eternal Fire      | L   | 0.739      | -            | -                | -                | -         |    -0.72 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           29 |     1694 | 2024-05-15 | B8                | W   | 0.734      | 0.500        | 0.206 (0.075)    | 0.933 (0.342)    | 0 (0.000) |    14.60 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           28 |     1877 | 2024-05-09 | Endpoint          | L   | 0.693      | -            | -                | -                | -         |   -13.20 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           27 |     2036 | 2024-05-01 | Passion UA        | L   | 0.639      | -            | -                | -                | -         |   -10.85 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           26 |     2050 | 2024-05-01 | fnatic            | L   | 0.638      | -            | -                | -                | -         |    -1.22 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           25 |     2075 | 2024-04-29 | 3DMAX             | L   | 0.627      | -            | -                | -                | -         |    -4.87 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           24 |     2085 | 2024-04-29 | Zero Tenacity     | W   | 0.625      | 0.500        | 0.173 (0.054)    | 1.000 (0.313)    | 0 (0.000) |    10.29 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           23 |     2122 | 2024-04-27 | Sangal            | W   | 0.613      | 0.500        | 0.195 (0.060)    | 0.860 (0.263)    | 0 (0.000) |    11.25 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           22 |     2150 | 2024-04-26 | SINNERS           | W   | 0.606      | 0.435        | -                | 0.769 (0.203)    | 0 (0.000) |    10.27 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           21 |     2178 | 2024-04-25 | ex-Guild Eagles   | W   | 0.599      | -            | -                | -                | -         |     6.43 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           20 |     2200 | 2024-04-24 | MOUZ NXT          | W   | 0.592      | 0.435        | 0.169 (0.044)    | 1.000 (0.257)    | -         |    10.70 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           19 |     2249 | 2024-04-21 | Nexus             | W   | 0.573      | -            | -                | -                | -         |     6.10 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           18 |     2252 | 2024-04-21 | B8                | L   | 0.572      | -            | -                | -                | -         |    -7.81 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           17 |     2309 | 2024-04-19 | Zero Tenacity     | L   | 0.561      | -            | -                | -                | -         |    -7.75 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           16 |     2408 | 2024-04-17 | HAVU              | W   | 0.547      | -            | -                | -                | -         |     2.75 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           15 |     2409 | 2024-04-17 | Permitta          | L   | 0.546      | -            | -                | -                | -         |    -9.77 | ArtFr0st, bl1x1, Jerry, Patsi, Qikert      |
|           14 |     2531 | 2024-04-11 | 500               | L   | 0.507      | -            | -                | -                | -         |   -13.12 | ArtFr0st, bl1x1, Jerry, Patsi, Qikert      |
|           13 |     2570 | 2024-04-10 | Aurora            | L   | 0.501      | -            | -                | -                | -         |    -0.76 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|           12 |     2629 | 2024-04-09 | RUSH B            | L   | 0.494      | -            | -                | -                | -         |   -11.60 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|           11 |     2801 | 2024-04-03 | MOUZ NXT          | L   | 0.454      | -            | -                | -                | -         |    -7.11 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|           10 |     2812 | 2024-04-03 | Space             | W   | 0.453      | -            | -                | -                | -         |     3.40 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|            9 |     2847 | 2024-04-02 | AMKAL             | L   | 0.446      | -            | -                | -                | -         |    -6.53 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|            8 |     2856 | 2024-04-02 | Insilio           | L   | 0.445      | -            | -                | -                | -         |    -9.59 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|            7 |     2867 | 2024-04-01 | Metizport         | W   | 0.440      | -            | -                | -                | -         |     4.87 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|            6 |     3030 | 2024-03-21 | FORZE             | W   | 0.366      | 0.500        | 0.078 (0.014)    | -                | -         |     4.18 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|            5 |     3212 | 2024-03-13 | 3DMAX             | W   | 0.313      | 0.500        | 0.175 (0.027)    | 1.000 (0.157)    | -         |     7.21 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|            4 |     3329 | 2024-03-08 | B8                | W   | 0.280      | 0.500        | 0.206 (0.029)    | 0.933 (0.130)    | -         |     5.15 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|            3 |     3384 | 2024-03-06 | Apeks             | W   | 0.267      | -            | -                | -                | -         |     3.41 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|            2 |     3497 | 2024-03-02 | Gaimin Gladiators | L   | 0.239      | -            | -                | -                | -         |    -3.87 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|            1 |     3528 | 2024-02-29 | Monte             | L   | 0.226      | -            | -                | -                | -         |    -3.38 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,175.78)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.900 | $6,500.00      | $5,852.47       |
| 2024-05-02 |      0.647 | $500.00        | $323.31         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
