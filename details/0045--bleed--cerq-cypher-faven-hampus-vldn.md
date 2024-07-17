### Roster Details<br />
Team Name: BLEED<br />
Roster: CeRq, CYPHER, faveN, hampus, VLDN<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [45](../standings_global.md)<br />
Regional Rank: [32]( ../standings_europe.md)<br />
Final Rank Value:  1148.4<br />
<br />
Final Rank Value (1148.4) = Starting Rank Value (1065.7) + Head To Head Adjustments (82.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.553[<sup>1</sup>](#table2)
- Bounty Collected: 0.430[<sup>2</sup>](#table1)
- Opponent Network: 0.257[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.310<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1065.7
- 400 + ( ( 0.310 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 1065.7


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
|           47 |     1558 | 2024-05-11 | B8                | L   | 0.752      | -            | -                | -                | -         |   -13.00 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           46 |     1586 | 2024-05-09 | Sampi             | W   | 0.741      | 0.435        | -                | 0.975 (0.314)    | 0 (0.000) |     6.54 | CYPHER, draken, faveN, hampus, VLDN |
|           45 |     1628 | 2024-05-07 | 1WIN              | L   | 0.727      | -            | -                | -                | -         |   -16.58 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           44 |     1652 | 2024-05-06 | Insilio           | W   | 0.719      | -            | -                | -                | 0 (0.000) |     6.71 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           43 |     1718 | 2024-05-02 | AMKAL             | L   | 0.694      | -            | -                | -                | -         |   -11.49 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           42 |     1752 | 2024-05-01 | MOUZ NXT          | L   | 0.686      | -            | -                | -                | -         |   -13.20 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           41 |     1784 | 2024-04-30 | Permitta          | W   | 0.678      | 0.384        | -                | 0.794 (0.207)    | 0 (0.000) |     5.12 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           40 |     1807 | 2024-04-28 | B8                | W   | 0.668      | 0.500        | 0.246 (0.082)    | 1.000 (0.334)    | 0 (0.000) |     7.93 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           39 |     1858 | 2024-04-26 | ex-Guild Eagles   | W   | 0.654      | -            | -                | -                | 0 (0.000) |     4.29 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           38 |     1866 | 2024-04-26 | DMS               | W   | 0.652      | -            | -                | -                | 0 (0.000) |     3.78 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           37 |     1906 | 2024-04-24 | Permitta          | W   | 0.641      | 0.435        | -                | 0.794 (0.221)    | 0 (0.000) |     5.85 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           36 |     1909 | 2024-04-24 | Nemiga            | L   | 0.640      | -            | -                | -                | -         |    -6.98 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           35 |     1925 | 2024-04-23 | B8                | W   | 0.634      | 0.500        | 0.246 (0.078)    | 1.000 (0.317)    | 0 (0.000) |     7.98 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           34 |     1934 | 2024-04-23 | Sashi             | L   | 0.632      | -            | -                | -                | -         |    -9.60 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           33 |     1943 | 2024-04-22 | Sangal            | W   | 0.627      | 0.500        | 0.232 (0.073)    | 0.893 (0.280)    | 0 (0.000) |     8.99 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           32 |     1945 | 2024-04-22 | Gaimin Gladiators | W   | 0.626      | 0.384        | 0.067 (0.016)    | -                | 0 (0.000) |    10.60 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           31 |     1960 | 2024-04-21 | Illuminar         | W   | 0.621      | -            | -                | -                | -         |     0.70 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           30 |     1966 | 2024-04-21 | BIG               | W   | 0.619      | 0.384        | 0.212 (0.050)    | -                | -         |    15.22 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           29 |     1990 | 2024-04-20 | MOUZ NXT          | W   | 0.614      | 0.500        | 0.150 (0.046)    | 1.000 (0.307)    | -         |     9.04 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           28 |     2046 | 2024-04-19 | Sampi             | W   | 0.606      | 0.384        | -                | 0.975 (0.227)    | -         |     6.08 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           27 |     2103 | 2024-04-18 | ALTERNATE aTTaX   | W   | 0.598      | 0.500        | -                | 0.644 (0.193)    | -         |     7.15 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           26 |     2127 | 2024-04-17 | 3DMAX             | L   | 0.593      | -            | -                | -                | -         |    -6.62 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           25 |     2155 | 2024-04-16 | KOI               | W   | 0.588      | 0.384        | 0.091 (0.021)    | -                | -         |    11.00 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           24 |     2167 | 2024-04-16 | SINNERS           | W   | 0.585      | 0.384        | -                | 0.744 (0.167)    | -         |    10.71 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           23 |     2345 | 2024-04-09 | Alliance          | W   | 0.541      | -            | -                | -                | -         |     4.64 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           22 |     2358 | 2024-04-09 | HAVU              | W   | 0.539      | -            | -                | -                | -         |     2.18 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           21 |     2439 | 2024-04-05 | BetBoom           | L   | 0.514      | -            | -                | -                | -         |    -0.95 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           20 |     2442 | 2024-04-05 | Alliance          | W   | 0.513      | -            | -                | -                | -         |     4.52 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           19 |     2483 | 2024-04-04 | Benched Heroes    | W   | 0.507      | -            | -                | -                | -         |     0.33 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           18 |     2489 | 2024-04-04 | BetBoom           | L   | 0.506      | -            | -                | -                | -         |    -0.92 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           17 |     2558 | 2024-04-02 | Passion UA        | W   | 0.494      | 0.384        | 0.087 (0.017)    | -                | -         |     5.52 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           16 |     2581 | 2024-04-01 | Enterprise        | L   | 0.486      | -            | -                | -                | -         |    -9.99 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           15 |     2931 | 2024-03-13 | Sashi             | W   | 0.359      | -            | -                | -                | -         |     6.07 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           14 |     3032 | 2024-03-09 | Endpoint          | W   | 0.332      | -            | -                | -                | -         |     3.01 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           13 |     3099 | 2024-03-06 | fnatic            | L   | 0.314      | -            | -                | -                | -         |    -0.58 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           12 |     3145 | 2024-03-05 | BetBoom           | W   | 0.306      | 0.500        | 0.403 (0.062)    | -                | -         |     9.19 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           11 |     3154 | 2024-03-04 | Rebels            | W   | 0.301      | -            | -                | -                | -         |     4.68 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           10 |     3160 | 2024-03-04 | AURA              | W   | 0.299      | -            | -                | -                | -         |     0.43 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            9 |     3226 | 2024-03-01 | Young Ninjas      | W   | 0.280      | -            | -                | -                | -         |     1.82 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            8 |     3241 | 2024-02-29 | AURA              | W   | 0.272      | -            | -                | -                | -         |     0.40 | CeRq, CYPHER, faveN, hampus, lauNX  |
|            7 |     3257 | 2024-02-28 | BIG               | W   | 0.265      | 0.500        | 0.212 (0.028)    | -                | -         |     7.22 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            6 |     3292 | 2024-02-26 | MOUZ NXT          | L   | 0.253      | -            | -                | -                | -         |    -3.51 | CeRq, faveN, hampus, lauNX, VLDN    |
|            5 |     3692 | 2024-02-08 | Passion UA        | W   | 0.133      | -            | -                | -                | -         |     1.94 | CeRq, CYPHER, faveN, hampus, lauNX  |
|            4 |     3830 | 2024-02-01 | Into the Breach   | L   | 0.086      | -            | -                | -                | -         |    -2.44 | CeRq, CYPHER, faveN, hampus, lauNX  |
|            3 |     3849 | 2024-01-31 | 9INE              | W   | 0.079      | -            | -                | -                | -         |     0.11 | CeRq, CYPHER, faveN, hampus, lauNX  |
|            2 |     3874 | 2024-01-29 | Metizport         | L   | 0.066      | -            | -                | -                | -         |    -1.33 | CeRq, CYPHER, faveN, hampus, lauNX  |
|            1 |     3940 | 2024-01-25 | Into the Breach   | W   | 0.038      | -            | -                | -                | -         |     0.12 | CeRq, CYPHER, faveN, hampus, lauNX  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($38,285.48)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.16) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-18 |      0.801 | $500.00        | $400.35         |
| 2024-05-12 |      0.761 | $2,000.00      | $1,521.37       |
| 2024-04-24 |      0.640 | $25,000.00     | $15,998.15      |
| 2024-04-22 |      0.626 | $20,000.00     | $12,519.58      |
| 2024-03-06 |      0.314 | $25,000.00     | $7,846.03       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
