### Roster Details<br />
Team Name: BLEED<br />
Roster: CeRq, CYPHER, faveN, hampus, VLDN<br />
Global Rank: [53](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [38]( ../standings_europe.md)<br />
<br />
Final Rank Value:  1008.1<br />
<br />
Final Rank Value (1008.1) = Starting Rank Value (913.1) + Head To Head Adjustments (95.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.473[<sup>1</sup>](#table2)
- Bounty Collected: 0.384[<sup>2</sup>](#table1)
- Opponent Network: 0.183[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.260<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 913.1
- 400 + ( ( 0.260 - 0.000 ) / ( 0.811 - 0.000 ) ) * 1600 = 913.1


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
|           42 |     2569 | 2024-05-11 | B8                | L   | 0.564      | -            | -                | -                | -         |    -8.38 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           41 |     2597 | 2024-05-09 | Sampi             | W   | 0.553      | 0.435        | -                | 0.981 (0.236)    | 0 (0.000) |     6.01 | CYPHER, draken, faveN, hampus, VLDN |
|           40 |     2639 | 2024-05-07 | 1WIN              | L   | 0.539      | -            | -                | -                | -         |   -10.42 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           39 |     2663 | 2024-05-06 | Insilio           | W   | 0.531      | -            | -                | -                | 0 (0.000) |     6.08 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           38 |     2729 | 2024-05-02 | AMKAL             | L   | 0.507      | -            | -                | -                | -         |    -5.96 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           37 |     2763 | 2024-05-01 | MOUZ NXT          | L   | 0.498      | -            | -                | -                | -         |    -7.91 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           36 |     2795 | 2024-04-30 | Permitta          | W   | 0.491      | 0.384        | -                | 0.957 (0.181)    | 0 (0.000) |     5.98 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           35 |     2818 | 2024-04-28 | B8                | W   | 0.480      | 0.500        | 0.174 (0.042)    | 0.903 (0.217)    | 0 (0.000) |     7.44 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           34 |     2869 | 2024-04-26 | ex-Guild Eagles   | W   | 0.466      | -            | -                | -                | 0 (0.000) |     3.66 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           33 |     2877 | 2024-04-26 | DMS               | W   | 0.465      | 0.500        | -                | 0.514 (0.119)    | 0 (0.000) |     4.97 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           32 |     2917 | 2024-04-24 | Permitta          | W   | 0.453      | 0.435        | 0.036 (0.007)    | 0.957 (0.188)    | 0 (0.000) |     6.39 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           31 |     2920 | 2024-04-24 | Nemiga            | L   | 0.452      | -            | -                | -                | -         |    -3.62 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           30 |     2936 | 2024-04-23 | B8                | W   | 0.446      | 0.500        | 0.174 (0.039)    | 0.903 (0.201)    | 0 (0.000) |     7.35 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           29 |     2945 | 2024-04-23 | Sashi             | L   | 0.445      | -            | -                | -                | -         |    -4.70 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           28 |     2954 | 2024-04-22 | Sangal            | W   | 0.439      | 0.500        | 0.276 (0.061)    | 0.851 (0.187)    | 0 (0.000) |     9.54 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           27 |     2956 | 2024-04-22 | Gaimin Gladiators | W   | 0.438      | -            | -                | -                | 0 (0.000) |     6.44 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           26 |     2971 | 2024-04-21 | Illuminar         | W   | 0.433      | -            | -                | -                | -         |     1.02 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           25 |     2977 | 2024-04-21 | BIG               | W   | 0.431      | 0.384        | 0.155 (0.026)    | -                | -         |    11.49 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           24 |     3001 | 2024-04-20 | MOUZ NXT          | W   | 0.426      | 0.500        | 0.130 (0.028)    | 0.929 (0.198)    | -         |     7.67 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           23 |     3057 | 2024-04-19 | Sampi             | W   | 0.418      | 0.384        | -                | 0.981 (0.158)    | -         |     5.22 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           22 |     3114 | 2024-04-18 | ALTERNATE aTTaX   | W   | 0.411      | 0.500        | 0.036 (0.007)    | -                | -         |     6.30 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           21 |     3138 | 2024-04-17 | 3DMAX             | L   | 0.405      | -            | -                | -                | -         |    -0.38 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           20 |     3166 | 2024-04-16 | KOI               | W   | 0.400      | 0.384        | 0.053 (0.008)    | -                | -         |     7.59 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           19 |     3178 | 2024-04-16 | SINNERS           | W   | 0.397      | 0.384        | -                | 0.922 (0.141)    | -         |     9.57 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           18 |     3356 | 2024-04-09 | Alliance          | W   | 0.353      | -            | -                | -                | -         |     3.96 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           17 |     3369 | 2024-04-09 | HAVU              | W   | 0.351      | -            | -                | -                | -         |     2.12 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           16 |     3450 | 2024-04-05 | BetBoom           | L   | 0.326      | -            | -                | -                | -         |    -1.13 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           15 |     3453 | 2024-04-05 | Alliance          | W   | 0.325      | -            | -                | -                | -         |     3.78 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           14 |     3494 | 2024-04-04 | Benched Heroes    | W   | 0.319      | -            | -                | -                | -         |     0.49 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           13 |     3500 | 2024-04-04 | BetBoom           | L   | 0.318      | -            | -                | -                | -         |    -1.09 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           12 |     3569 | 2024-04-02 | Passion UA        | W   | 0.306      | 0.384        | 0.168 (0.020)    | -                | -         |     6.15 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           11 |     3592 | 2024-04-01 | Enterprise        | L   | 0.298      | -            | -                | -                | -         |    -5.19 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           10 |     3942 | 2024-03-13 | Sashi             | W   | 0.171      | -            | -                | -                | -         |     3.93 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            9 |     4043 | 2024-03-09 | Endpoint          | W   | 0.144      | -            | -                | -                | -         |     2.60 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            8 |     4110 | 2024-03-06 | fnatic            | L   | 0.126      | -            | -                | -                | -         |    -0.19 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            7 |     4156 | 2024-03-05 | BetBoom           | W   | 0.118      | 0.500        | 0.223 (0.013)    | -                | -         |     3.37 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            6 |     4165 | 2024-03-04 | Rebels            | W   | 0.113      | -            | -                | -                | -         |     1.99 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            5 |     4171 | 2024-03-04 | AURA              | W   | 0.111      | -            | -                | -                | -         |     0.29 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            4 |     4237 | 2024-03-01 | Young Ninjas      | W   | 0.092      | -            | -                | -                | -         |     0.87 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            3 |     4252 | 2024-02-29 | AURA              | W   | 0.085      | -            | -                | -                | -         |     0.22 | CeRq, CYPHER, faveN, hampus, lauNX  |
|            2 |     4268 | 2024-02-28 | BIG               | W   | 0.078      | -            | -                | -                | -         |     2.19 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            1 |     4303 | 2024-02-26 | MOUZ NXT          | L   | 0.065      | -            | -                | -                | -         |    -0.76 | CeRq, faveN, hampus, lauNX, VLDN    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($24,673.14)
- Divide that value by the 5th highest value among all rosters ($320,160.38)
- The final value (0.08) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-18 |      0.613 | $500.00        | $306.47         |
| 2024-05-12 |      0.573 | $2,000.00      | $1,145.86       |
| 2024-04-24 |      0.452 | $25,000.00     | $11,304.24      |
| 2024-04-22 |      0.438 | $20,000.00     | $8,764.45       |
| 2024-03-06 |      0.126 | $25,000.00     | $3,152.12       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
