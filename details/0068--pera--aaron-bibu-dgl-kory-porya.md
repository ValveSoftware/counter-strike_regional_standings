### Roster Details<br />
Team Name: PERA<br />
Roster: Aaron, Bibu, DGL, kory, Porya<br />
Global Rank: [68](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [48]( ../standings_europe.md)<br />
<br />
Final Rank Value:  960.0<br />
<br />
Final Rank Value (960.0) = Starting Rank Value (936.5) + Head To Head Adjustments (23.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.432[<sup>1</sup>](#table2)
- Bounty Collected: 0.370[<sup>2</sup>](#table1)
- Opponent Network: 0.169[<sup>2</sup>](#table1)
- LAN Wins: 0.069[<sup>2</sup>](#table1)

The average of these factors is 0.260<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 936.5
- 400 + ( ( 0.260 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 936.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           35 |        1 | 2024-07-31 | B8                | L   | 1.000      | -            | -                | -                | -         |    -7.64 | Aaron, Bibu, DGL, kory, Porya      |
|           34 |       50 | 2024-07-30 | Space             | W   | 1.000      | 0.500        | 0.006 (0.003)    | 0.406 (0.203)    | 0 (0.000) |    11.64 | Aaron, Bibu, DGL, kory, Porya      |
|           33 |       85 | 2024-07-29 | ARCRED            | L   | 1.000      | -            | -                | -                | -         |   -16.61 | Aaron, Bibu, DGL, kory, Porya      |
|           32 |      410 | 2024-07-19 | Nexus             | L   | 1.000      | -            | -                | -                | -         |   -23.90 | Aaron, Bibu, DGL, kory, Porya      |
|           31 |      443 | 2024-07-18 | Nemiga            | L   | 1.000      | -            | -                | -                | -         |    -8.42 | Aaron, Bibu, DGL, kory, Porya      |
|           30 |      522 | 2024-07-17 | Verdant           | W   | 1.000      | 0.333        | 0.015 (0.005)    | 0.300 (0.100)    | 0 (0.000) |     8.86 | Aaron, Bibu, DGL, kory, Porya      |
|           29 |      578 | 2024-07-16 | Aurora            | L   | 1.000      | -            | -                | -                | -         |    -2.47 | Aaron, Bibu, DGL, kory, Porya      |
|           28 |      629 | 2024-07-15 | Betera            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.54 | Aaron, Bibu, DGL, kory, Porya      |
|           27 |      946 | 2024-06-13 | Enterprise        | W   | 0.880      | 0.379        | 0.040 (0.013)    | 0.622 (0.207)    | 0 (0.000) |    12.47 | Aaron, Bibu, DGL, kory, Porya      |
|           26 |      982 | 2024-06-12 | Rebels            | W   | 0.873      | 0.379        | 0.041 (0.013)    | 0.596 (0.197)    | 0 (0.000) |    15.85 | Aaron, Bibu, DGL, kory, Porya      |
|           25 |     1002 | 2024-06-11 | ECLOT             | W   | 0.866      | 0.379        | 0.065 (0.021)    | 0.502 (0.165)    | 0 (0.000) |    18.55 | Aaron, Bibu, DGL, kory, Porya      |
|           24 |     1205 | 2024-06-07 | B8                | L   | 0.839      | -            | -                | -                | -         |    -6.87 | Aaron, Bibu, DGL, kory, Porya      |
|           23 |     1209 | 2024-06-07 | Aurora            | L   | 0.838      | -            | -                | -                | -         |    -1.05 | Aaron, Bibu, DGL, kory, Porya      |
|           22 |     1309 | 2024-06-05 | The Prodigies     | W   | 0.827      | -            | -                | -                | 0 (0.000) |     2.78 | Aaron, Bibu, DGL, kory, Porya      |
|           21 |     1392 | 2024-06-03 | GL Academy        | W   | 0.813      | 0.379        | 0.007 (0.002)    | -                | 0 (0.000) |     6.82 | Aaron, Bibu, DGL, kory, Porya      |
|           20 |     1498 | 2024-05-30 | Rebels            | L   | 0.787      | -            | -                | -                | -         |   -10.73 | Aaron, Bibu, DGL, kory, Porya      |
|           19 |     1678 | 2024-05-22 | System5           | W   | 0.733      | -            | -                | -                | 0 (0.000) |     4.08 | Aaron, Bibu, DGL, kory, Porya      |
|           18 |     1726 | 2024-05-21 | EYEBALLERS        | W   | 0.726      | 0.500        | -                | 0.513 (0.186)    | -         |     9.27 | Aaron, Bibu, DGL, kory, Porya      |
|           17 |     1765 | 2024-05-20 | Nexus             | W   | 0.719      | 0.379        | 0.014 (0.004)    | 0.465 (0.127)    | -         |     6.84 | Aaron, Bibu, DGL, kory, Porya      |
|           16 |     1935 | 2024-05-15 | Norway            | W   | 0.686      | -            | -                | -                | -         |     4.61 | Aaron, Bibu, DGL, kory, Porya      |
|           15 |     1994 | 2024-05-14 | ALTERNATE aTTaX   | W   | 0.680      | 0.500        | 0.032 (0.011)    | 0.564 (0.192)    | -         |    12.38 | Aaron, Bibu, DGL, kory, Porya      |
|           14 |     2218 | 2024-05-04 | FlyQuest          | L   | 0.611      | -            | -                | -                | -         |    -3.33 | Aaron, Bibu, Ciocardau, DGL, Porya |
|           13 |     2233 | 2024-05-03 | BIG               | L   | 0.605      | -            | -                | -                | -         |    -3.04 | Aaron, Bibu, Ciocardau, DGL, Porya |
|           12 |     2253 | 2024-05-02 | Ninjas in Pyjamas | W   | 0.599      | 0.889        | 0.227 (0.121)    | 0.477 (0.254)    | 1 (0.599) |    18.40 | Aaron, Bibu, Ciocardau, DGL, Porya |
|           11 |     2303 | 2024-04-30 | Complexity        | L   | 0.585      | -            | -                | -                | -         |    -0.31 | Aaron, Bibu, Ciocardau, DGL, Porya |
|           10 |     2513 | 2024-04-20 | EYEBALLERS        | L   | 0.520      | -            | -                | -                | -         |    -8.90 | Aaron, Bibu, Ciocardau, DGL, Porya |
|            9 |     3052 | 2024-04-03 | SAW               | L   | 0.406      | -            | -                | -                | -         |    -2.27 | Aaron, Bibu, Ciocardau, DGL, Porya |
|            8 |     3107 | 2024-04-01 | RUSH B            | W   | 0.393      | 0.500        | 0.017 (0.003)    | 0.308 (0.061)    | -         |     5.15 | Aaron, Bibu, Ciocardau, DGL, Porya |
|            7 |     3384 | 2024-03-15 | Betera            | L   | 0.280      | -            | -                | -                | -         |    -6.85 | Aaron, DGL, Kamion, msN, Porya     |
|            6 |     3442 | 2024-03-13 | Monte             | L   | 0.267      | -            | -                | -                | -         |    -3.15 | Aaron, DGL, Kamion, msN, Porya     |
|            5 |     3821 | 2024-02-26 | System5           | L   | 0.160      | -            | -                | -                | -         |    -4.04 | Aaron, DGL, Kamion, msN, Porya     |
|            4 |     3959 | 2024-02-20 | ex-Preasy         | L   | 0.119      | -            | -                | -                | -         |    -2.58 | Aaron, DGL, Kamion, msN, Porya     |
|            3 |     3987 | 2024-02-19 | GamerLegion       | L   | 0.112      | -            | -                | -                | -         |    -2.42 | Aaron, DGL, Kamion, msN, Porya     |
|            2 |     3990 | 2024-02-19 | Cloud9            | L   | 0.111      | -            | -                | -                | -         |    -1.16 | Aaron, DGL, Kamion, msN, Porya     |
|            1 |     4060 | 2024-02-16 | SINNERS           | L   | 0.092      | -            | -                | -                | -         |    -1.04 | Aaron, DGL, Kamion, msN, Porya     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($15,925.78)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-20 |      1.000 | $1,250.00      | $1,250.00       |
| 2024-06-13 |      0.880 | $10,895.00     | $9,589.11       |
| 2024-06-09 |      0.853 | $500.00        | $426.55         |
| 2024-05-12 |      0.666 | $7,000.00      | $4,660.13       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
