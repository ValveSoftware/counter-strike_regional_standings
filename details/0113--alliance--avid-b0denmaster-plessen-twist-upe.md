### Roster Details<br />
Team Name: Alliance<br />
Roster: avid, b0denmaster, PlesseN, twist, upE<br />
Global Rank: [113](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [82]( ../standings_europe.md)<br />
<br />
Final Rank Value:  817.8<br />
<br />
Final Rank Value (817.8) = Starting Rank Value (828.5) + Head To Head Adjustments (-10.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.358[<sup>1</sup>](#table2)
- Bounty Collected: 0.329[<sup>2</sup>](#table1)
- Opponent Network: 0.097[<sup>2</sup>](#table1)
- LAN Wins: 0.085[<sup>2</sup>](#table1)

The average of these factors is 0.217<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 828.5
- 400 + ( ( 0.217 - 0.000 ) / ( 0.811 - 0.000 ) ) * 1600 = 828.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           50 |       89 | 2024-08-12 | Permitta        | W   | 1.000      | 0.143        | 0.036 (0.005)    | 0.957 (0.137)    | 0 (0.000) |    19.08 | avid, b0denmaster, PlesseN, twist, upE    |
|           49 |      310 | 2024-08-05 | Sampi           | L   | 1.000      | -            | -                | -                | -         |   -13.35 | avid, b0denmaster, PlesseN, twist, upE    |
|           48 |      326 | 2024-08-04 | Young Ninjas    | L   | 1.000      | -            | -                | -                | -         |   -18.21 | avid, b0denmaster, PlesseN, twist, upE    |
|           47 |      380 | 2024-08-03 | RUSH B          | L   | 1.000      | -            | -                | -                | -         |   -10.83 | avid, b0denmaster, PlesseN, twist, upE    |
|           46 |      454 | 2024-08-01 | The Suspect     | W   | 1.000      | 0.342        | 0.008 (0.003)    | 0.256 (0.088)    | 0 (0.000) |    16.57 | avid, b0denmaster, PlesseN, twist, upE    |
|           45 |      578 | 2024-07-29 | SINNERS         | L   | 1.000      | -            | -                | -                | -         |    -9.69 | avid, b0denmaster, PlesseN, twist, upE    |
|           44 |     1397 | 2024-06-14 | MIBR            | L   | 0.793      | -            | -                | -                | -         |    -1.11 | avid, b0denmaster, PlesseN, robiin, twist |
|           43 |     1417 | 2024-06-14 | Complexity      | L   | 0.791      | -            | -                | -                | -         |    -0.32 | avid, b0denmaster, PlesseN, robiin, twist |
|           42 |     1550 | 2024-06-09 | Johnny Speeds   | L   | 0.759      | -            | -                | -                | -         |    -2.76 | avid, b0denmaster, PlesseN, robiin, twist |
|           41 |     1574 | 2024-06-09 | Lilmix          | W   | 0.758      | 0.347        | 0.021 (0.006)    | 0.091 (0.024)    | 1 (0.758) |    12.03 | avid, b0denmaster, PlesseN, robiin, twist |
|           40 |     1973 | 2024-05-31 | VP.Prodigy      | L   | 0.697      | -            | -                | -                | -         |    -9.09 | avid, b0denmaster, PlesseN, robiin, twist |
|           39 |     2110 | 2024-05-24 | B8              | L   | 0.653      | -            | -                | -                | -         |    -3.54 | avid, b0denmaster, PlesseN, robiin, twist |
|           38 |     2483 | 2024-05-14 | kONO            | L   | 0.585      | -            | -                | -                | -         |    -8.29 | avid, b0denmaster, PlesseN, robiin, twist |
|           37 |     2789 | 2024-04-30 | B8              | L   | 0.491      | -            | -                | -                | -         |    -4.69 | avid, b0denmaster, PlesseN, robiin, twist |
|           36 |     2814 | 2024-04-29 | Endpoint        | W   | 0.484      | 0.384        | 0.042 (0.008)    | 0.591 (0.110)    | 0 (0.000) |    10.35 | avid, b0denmaster, PlesseN, robiin, twist |
|           35 |     2826 | 2024-04-28 | DMS             | W   | 0.479      | 0.500        | -                | 0.514 (0.123)    | 0 (0.000) |     8.54 | avid, b0denmaster, PlesseN, robiin, twist |
|           34 |     2866 | 2024-04-26 | B8              | L   | 0.467      | -            | -                | -                | -         |    -4.03 | avid, b0denmaster, PlesseN, robiin, twist |
|           33 |     2940 | 2024-04-23 | Metizport       | L   | 0.445      | -            | -                | -                | -         |    -6.89 | avid, b0denmaster, PlesseN, robiin, twist |
|           32 |     2957 | 2024-04-22 | B8              | W   | 0.438      | 0.384        | 0.174 (0.029)    | 0.903 (0.152)    | 0 (0.000) |    10.13 | avid, b0denmaster, PlesseN, robiin, twist |
|           31 |     2980 | 2024-04-21 | Sangal          | L   | 0.431      | -            | -                | -                | -         |    -2.00 | avid, b0denmaster, PlesseN, robiin, twist |
|           30 |     3060 | 2024-04-19 | 9 Pandas        | W   | 0.418      | 0.500        | 0.075 (0.016)    | 0.717 (0.150)    | 0 (0.000) |     9.11 | avid, b0denmaster, PlesseN, robiin, twist |
|           29 |     3134 | 2024-04-17 | Nemiga          | L   | 0.406      | -            | -                | -                | -         |    -1.51 | avid, b0denmaster, PlesseN, robiin, twist |
|           28 |     3141 | 2024-04-17 | ECLOT           | L   | 0.404      | -            | -                | -                | -         |    -1.41 | avid, b0denmaster, PlesseN, robiin, twist |
|           27 |     3192 | 2024-04-15 | HAVU            | W   | 0.392      | 0.384        | -                | 0.176 (0.027)    | 0 (0.000) |     3.65 | avid, b0denmaster, PlesseN, robiin, twist |
|           26 |     3196 | 2024-04-15 | MOUZ NXT        | L   | 0.391      | -            | -                | -                | -         |    -3.21 | avid, b0denmaster, PlesseN, robiin, twist |
|           25 |     3224 | 2024-04-13 | ALTERNATE aTTaX | L   | 0.378      | -            | -                | -                | -         |    -4.17 | avid, b0denmaster, PlesseN, robiin, twist |
|           24 |     3266 | 2024-04-11 | Zero Tenacity   | W   | 0.365      | 0.384        | 0.135 (0.019)    | 1.000 (0.140)    | 0 (0.000) |     8.82 | avid, b0denmaster, PlesseN, robiin, twist |
|           23 |     3356 | 2024-04-09 | BLEED           | L   | 0.353      | -            | -                | -                | -         |    -3.96 | avid, b0denmaster, PlesseN, robiin, twist |
|           22 |     3371 | 2024-04-09 | Astralis Talent | W   | 0.351      | 0.371        | 0.008 (0.001)    | -                | 0 (0.000) |     4.33 | avid, b0denmaster, PlesseN, robiin, twist |
|           21 |     3419 | 2024-04-07 | Johnny Speeds   | L   | 0.339      | -            | -                | -                | -         |    -0.97 | avid, b0denmaster, PlesseN, robiin, twist |
|           20 |     3422 | 2024-04-07 | EYEBALLERS      | L   | 0.339      | -            | -                | -                | -         |    -4.36 | avid, b0denmaster, PlesseN, robiin, twist |
|           19 |     3431 | 2024-04-06 | Lilmix          | W   | 0.334      | -            | -                | -                | -         |     0.87 | avid, b0denmaster, PlesseN, robiin, twist |
|           18 |     3436 | 2024-04-06 | BetBoom         | L   | 0.332      | -            | -                | -                | -         |    -0.68 | avid, b0denmaster, PlesseN, robiin, twist |
|           17 |     3453 | 2024-04-05 | BLEED           | L   | 0.325      | -            | -                | -                | -         |    -3.78 | avid, b0denmaster, PlesseN, robiin, twist |
|           16 |     3488 | 2024-04-04 | BetBoom         | L   | 0.320      | -            | -                | -                | -         |    -0.67 | avid, b0denmaster, PlesseN, robiin, twist |
|           15 |     3498 | 2024-04-04 | Benched Heroes  | W   | 0.318      | -            | -                | -                | -         |     0.81 | avid, b0denmaster, PlesseN, robiin, twist |
|           14 |     3541 | 2024-04-03 | AMKAL           | L   | 0.311      | -            | -                | -                | -         |    -1.84 | avid, b0denmaster, PlesseN, robiin, twist |
|           13 |     3939 | 2024-03-13 | MOUZ NXT        | L   | 0.172      | -            | -                | -                | -         |    -1.49 | avid, b0denmaster, PlesseN, robiin, twist |
|           12 |     3971 | 2024-03-12 | Passion UA      | L   | 0.165      | -            | -                | -                | -         |    -1.19 | avid, b0denmaster, PlesseN, robiin, twist |
|           11 |     4011 | 2024-03-10 | EYEBALLERS      | W   | 0.152      | -            | -                | -                | -         |     2.84 | avid, b0denmaster, PlesseN, robiin, twist |
|           10 |     4026 | 2024-03-09 | BLUDS           | W   | 0.146      | -            | -                | -                | -         |     0.38 | avid, b0denmaster, PlesseN, robiin, twist |
|            9 |     4037 | 2024-03-09 | Johnny Speeds   | W   | 0.145      | 0.143        | 0.122 (0.003)    | 1.000 (0.021)    | -         |     4.16 | avid, b0denmaster, PlesseN, robiin, twist |
|            8 |     4042 | 2024-03-09 | Entropiq        | W   | 0.144      | -            | -                | -                | -         |     0.74 | avid, b0denmaster, PlesseN, robiin, twist |
|            7 |     4085 | 2024-03-07 | ex-Sprout       | W   | 0.131      | -            | -                | -                | -         |     0.34 | avid, b0denmaster, PlesseN, robiin, twist |
|            6 |     4117 | 2024-03-06 | Sashi           | L   | 0.124      | -            | -                | -                | -         |    -0.69 | avid, b0denmaster, PlesseN, robiin, twist |
|            5 |     4160 | 2024-03-05 | Viperio         | W   | 0.117      | -            | -                | -                | -         |     0.30 | avid, b0denmaster, PlesseN, robiin, twist |
|            4 |     4240 | 2024-03-01 | 9INE            | L   | 0.092      | -            | -                | -                | -         |    -2.51 | avid, b0denmaster, PlesseN, robiin, twist |
|            3 |     4267 | 2024-02-28 | Sangal          | W   | 0.078      | 0.143        | 0.276 (0.003)    | -                | -         |     2.13 | avid, b0denmaster, PlesseN, robiin, twist |
|            2 |     4322 | 2024-02-25 | ALTERNATE aTTaX | W   | 0.059      | -            | -                | -                | -         |     1.24 | avid, b0denmaster, PlesseN, robiin, twist |
|            1 |     4492 | 2024-02-18 | Portugal        | W   | 0.012      | -            | -                | -                | -         |     0.10 | avid, b0denmaster, PlesseN, robiin, twist |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,110.68)
- Divide that value by the 5th highest value among all rosters ($320,160.38)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-08-04 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-06-16 |      0.805 | $2,000.00      | $1,610.62       |
| 2024-06-09 |      0.759 | $2,889.00      | $2,193.60       |
| 2024-05-18 |      0.613 | $500.00        | $306.47         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
