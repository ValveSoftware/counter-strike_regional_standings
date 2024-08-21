### Roster Details<br />
Team Name: BLEED<br />
Roster: CeRq, CYPHER, faveN, hampus, VLDN<br />
Global Rank: [52](../../standings_global_2024_08_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_08_06.md)<br />
Regional Rank: [39]( ../../standings_europe_2024_08_06.md)<br />
<br />
Final Rank Value:  1055.6<br />
<br />
Final Rank Value (1055.6) = Starting Rank Value (956.5) + Head To Head Adjustments (99.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.488[<sup>1</sup>](#table2)
- Bounty Collected: 0.391[<sup>2</sup>](#table1)
- Opponent Network: 0.203[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.271<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 956.5
- 400 + ( ( 0.271 - 0.000 ) / ( 0.778 - 0.000 ) ) * 1600 = 956.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           42 |     2296 | 2024-05-11 | B8                | L   | 0.618      | -            | -                | -                | -         |    -9.60 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           41 |     2324 | 2024-05-09 | Sampi             | W   | 0.607      | 0.435        | -                | 1.000 (0.264)    | 0 (0.000) |     6.16 | CYPHER, draken, faveN, hampus, VLDN |
|           40 |     2366 | 2024-05-07 | 1WIN              | L   | 0.593      | -            | -                | -                | -         |   -12.07 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           39 |     2390 | 2024-05-06 | Insilio           | W   | 0.585      | -            | -                | -                | 0 (0.000) |     6.30 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           38 |     2456 | 2024-05-02 | AMKAL             | L   | 0.561      | -            | -                | -                | -         |    -6.95 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           37 |     2490 | 2024-05-01 | MOUZ NXT          | L   | 0.552      | -            | -                | -                | -         |    -9.18 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           36 |     2522 | 2024-04-30 | Permitta          | W   | 0.545      | 0.384        | -                | 0.919 (0.192)    | 0 (0.000) |     6.12 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           35 |     2545 | 2024-04-28 | B8                | W   | 0.534      | 0.500        | 0.170 (0.045)    | 0.912 (0.244)    | 0 (0.000) |     7.79 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           34 |     2596 | 2024-04-26 | ex-Guild Eagles   | W   | 0.520      | -            | -                | -                | 0 (0.000) |     3.92 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           33 |     2604 | 2024-04-26 | DMS               | W   | 0.519      | -            | -                | -                | 0 (0.000) |     4.77 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           32 |     2644 | 2024-04-24 | Permitta          | W   | 0.507      | 0.435        | 0.039 (0.009)    | 0.919 (0.202)    | 0 (0.000) |     6.72 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           31 |     2647 | 2024-04-24 | Nemiga            | L   | 0.506      | -            | -                | -                | -         |    -5.41 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           30 |     2663 | 2024-04-23 | B8                | W   | 0.500      | 0.500        | 0.170 (0.043)    | 0.912 (0.228)    | 0 (0.000) |     7.76 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           29 |     2672 | 2024-04-23 | Sashi             | L   | 0.499      | -            | -                | -                | -         |    -5.61 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           28 |     2681 | 2024-04-22 | Sangal            | W   | 0.493      | 0.500        | 0.219 (0.054)    | 0.846 (0.208)    | 0 (0.000) |     9.61 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           27 |     2683 | 2024-04-22 | Gaimin Gladiators | W   | 0.492      | -            | -                | -                | 0 (0.000) |     7.53 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           26 |     2698 | 2024-04-21 | Illuminar         | W   | 0.487      | -            | -                | -                | -         |     0.92 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           25 |     2704 | 2024-04-21 | BIG               | W   | 0.485      | 0.384        | 0.154 (0.029)    | -                | -         |    12.46 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           24 |     2728 | 2024-04-20 | MOUZ NXT          | W   | 0.480      | 0.500        | 0.139 (0.033)    | 0.961 (0.231)    | -         |     8.33 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           23 |     2784 | 2024-04-19 | Sampi             | W   | 0.472      | 0.384        | -                | 1.000 (0.181)    | -         |     5.51 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           22 |     2841 | 2024-04-18 | ALTERNATE aTTaX   | W   | 0.465      | -            | -                | -                | -         |     6.73 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           21 |     2865 | 2024-04-17 | 3DMAX             | L   | 0.459      | -            | -                | -                | -         |    -0.43 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           20 |     2893 | 2024-04-16 | KOI               | W   | 0.454      | 0.384        | 0.058 (0.010)    | -                | -         |     8.69 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           19 |     2905 | 2024-04-16 | SINNERS           | W   | 0.451      | 0.384        | -                | 0.800 (0.139)    | -         |    10.70 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           18 |     3083 | 2024-04-09 | Alliance          | W   | 0.407      | -            | -                | -                | -         |     4.20 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           17 |     3096 | 2024-04-09 | HAVU              | W   | 0.405      | -            | -                | -                | -         |     2.18 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           16 |     3177 | 2024-04-05 | BetBoom           | L   | 0.380      | -            | -                | -                | -         |    -1.07 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           15 |     3180 | 2024-04-05 | Alliance          | W   | 0.379      | -            | -                | -                | -         |     4.07 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           14 |     3221 | 2024-04-04 | Benched Heroes    | W   | 0.373      | -            | -                | -                | -         |     0.45 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           13 |     3227 | 2024-04-04 | BetBoom           | L   | 0.372      | -            | -                | -                | -         |    -1.04 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           12 |     3296 | 2024-04-02 | Passion UA        | W   | 0.360      | 0.384        | 0.173 (0.024)    | 1.000 (0.138)    | -         |     6.83 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           11 |     3319 | 2024-04-01 | Enterprise        | L   | 0.352      | -            | -                | -                | -         |    -6.57 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           10 |     3669 | 2024-03-13 | Sashi             | W   | 0.225      | -            | -                | -                | -         |     5.05 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            9 |     3770 | 2024-03-09 | Endpoint          | W   | 0.198      | -            | -                | -                | -         |     2.47 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            8 |     3837 | 2024-03-06 | fnatic            | L   | 0.180      | -            | -                | -                | -         |    -0.22 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            7 |     3883 | 2024-03-05 | BetBoom           | W   | 0.173      | 0.500        | 0.248 (0.021)    | -                | -         |     5.02 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            6 |     3892 | 2024-03-04 | Rebels            | W   | 0.167      | -            | -                | -                | -         |     2.90 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            5 |     3898 | 2024-03-04 | AURA              | W   | 0.165      | -            | -                | -                | -         |     0.35 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            4 |     3964 | 2024-03-01 | Young Ninjas      | W   | 0.147      | -            | -                | -                | -         |     1.13 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            3 |     3979 | 2024-02-29 | AURA              | W   | 0.139      | -            | -                | -                | -         |     0.30 | CeRq, CYPHER, faveN, hampus, lauNX  |
|            2 |     3995 | 2024-02-28 | BIG               | W   | 0.132      | 0.500        | 0.154 (0.010)    | -                | -         |     3.65 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            1 |     4030 | 2024-02-26 | MOUZ NXT          | L   | 0.119      | -            | -                | -                | -         |    -1.41 | CeRq, faveN, hampus, lauNX, VLDN    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($28,593.88)
- Divide that value by the 5th highest value among all rosters ($320,194.86)
- The final value (0.09) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-18 |      0.667 | $500.00        | $333.51         |
| 2024-05-12 |      0.627 | $2,000.00      | $1,254.02       |
| 2024-04-24 |      0.506 | $25,000.00     | $12,656.22      |
| 2024-04-22 |      0.492 | $20,000.00     | $9,846.03       |
| 2024-03-06 |      0.180 | $25,000.00     | $4,504.10       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
