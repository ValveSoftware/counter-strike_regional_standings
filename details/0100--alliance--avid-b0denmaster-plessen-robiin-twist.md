### Roster Details<br />
Team Name: Alliance<br />
Roster: avid, b0denmaster, PlesseN, robiin, twist<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [100](../standings_global.md)<br />
Regional Rank: [72]( ../standings_europe.md)<br />
Final Rank Value:  872.0<br />
<br />
Final Rank Value (872.0) = Starting Rank Value (865.6) + Head To Head Adjustments (6.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.363[<sup>1</sup>](#table2)
- Bounty Collected: 0.350[<sup>2</sup>](#table1)
- Opponent Network: 0.100[<sup>2</sup>](#table1)
- LAN Wins: 0.106[<sup>2</sup>](#table1)

The average of these factors is 0.230<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 865.6
- 400 + ( ( 0.230 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 865.6


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
|           48 |      674 | 2024-06-14 | MIBR            | L   | 0.933      | -            | -                | -                | -         |    -1.22 | avid, b0denmaster, PlesseN, robiin, twist |
|           47 |      694 | 2024-06-14 | Complexity      | L   | 0.931      | -            | -                | -                | -         |    -0.39 | avid, b0denmaster, PlesseN, robiin, twist |
|           46 |      827 | 2024-06-09 | Johnny Speeds   | L   | 0.900      | -            | -                | -                | -         |    -2.96 | avid, b0denmaster, PlesseN, robiin, twist |
|           45 |      851 | 2024-06-09 | Lilmix          | W   | 0.898      | 0.347        | 0.029 (0.009)    | 0.107 (0.033)    | 1 (0.898) |    15.10 | avid, b0denmaster, PlesseN, robiin, twist |
|           44 |     1250 | 2024-05-31 | VP.Prodigy      | L   | 0.838      | -            | -                | -                | -         |   -11.27 | avid, b0denmaster, PlesseN, robiin, twist |
|           43 |     1387 | 2024-05-24 | B8              | L   | 0.793      | -            | -                | -                | -         |    -4.15 | avid, b0denmaster, PlesseN, robiin, twist |
|           42 |     1760 | 2024-05-14 | kONO            | L   | 0.726      | -            | -                | -                | -         |   -11.51 | avid, b0denmaster, PlesseN, robiin, twist |
|           41 |     2066 | 2024-04-30 | B8              | L   | 0.632      | -            | -                | -                | -         |    -6.32 | avid, b0denmaster, PlesseN, robiin, twist |
|           40 |     2091 | 2024-04-29 | Endpoint        | W   | 0.624      | 0.384        | 0.015 (0.004)    | 0.466 (0.112)    | 0 (0.000) |    10.33 | avid, b0denmaster, PlesseN, robiin, twist |
|           39 |     2103 | 2024-04-28 | DMS             | W   | 0.619      | 0.500        | 0.004 (0.001)    | 0.461 (0.143)    | 0 (0.000) |     9.07 | avid, b0denmaster, PlesseN, robiin, twist |
|           38 |     2143 | 2024-04-26 | B8              | L   | 0.607      | -            | -                | -                | -         |    -5.50 | avid, b0denmaster, PlesseN, robiin, twist |
|           37 |     2217 | 2024-04-23 | Metizport       | L   | 0.586      | -            | -                | -                | -         |    -7.06 | avid, b0denmaster, PlesseN, robiin, twist |
|           36 |     2234 | 2024-04-22 | B8              | W   | 0.579      | 0.384        | 0.206 (0.046)    | 0.933 (0.207)    | 0 (0.000) |    13.14 | avid, b0denmaster, PlesseN, robiin, twist |
|           35 |     2257 | 2024-04-21 | Sangal          | L   | 0.571      | -            | -                | -                | -         |    -4.06 | avid, b0denmaster, PlesseN, robiin, twist |
|           34 |     2337 | 2024-04-19 | 9 Pandas        | W   | 0.558      | 0.500        | 0.105 (0.029)    | 0.578 (0.161)    | 0 (0.000) |    12.23 | avid, b0denmaster, PlesseN, robiin, twist |
|           33 |     2411 | 2024-04-17 | Nemiga          | L   | 0.546      | -            | -                | -                | -         |    -2.40 | avid, b0denmaster, PlesseN, robiin, twist |
|           32 |     2418 | 2024-04-17 | ECLOT           | L   | 0.545      | -            | -                | -                | -         |    -3.47 | avid, b0denmaster, PlesseN, robiin, twist |
|           31 |     2469 | 2024-04-15 | HAVU            | W   | 0.532      | 0.384        | -                | 0.186 (0.038)    | 0 (0.000) |     4.96 | avid, b0denmaster, PlesseN, robiin, twist |
|           30 |     2473 | 2024-04-15 | MOUZ NXT        | L   | 0.531      | -            | -                | -                | -         |    -4.29 | avid, b0denmaster, PlesseN, robiin, twist |
|           29 |     2501 | 2024-04-13 | ALTERNATE aTTaX | L   | 0.518      | -            | -                | -                | -         |    -5.70 | avid, b0denmaster, PlesseN, robiin, twist |
|           28 |     2543 | 2024-04-11 | Zero Tenacity   | W   | 0.505      | 0.384        | 0.173 (0.034)    | 1.000 (0.194)    | 0 (0.000) |    11.95 | avid, b0denmaster, PlesseN, robiin, twist |
|           27 |     2633 | 2024-04-09 | BLEED           | L   | 0.493      | -            | -                | -                | -         |    -4.54 | avid, b0denmaster, PlesseN, robiin, twist |
|           26 |     2648 | 2024-04-09 | Astralis Talent | W   | 0.491      | 0.371        | 0.012 (0.002)    | 0.180 (0.033)    | 0 (0.000) |     6.28 | avid, b0denmaster, PlesseN, robiin, twist |
|           25 |     2696 | 2024-04-07 | Johnny Speeds   | L   | 0.480      | -            | -                | -                | -         |    -1.16 | avid, b0denmaster, PlesseN, robiin, twist |
|           24 |     2699 | 2024-04-07 | EYEBALLERS      | L   | 0.479      | -            | -                | -                | -         |    -6.94 | avid, b0denmaster, PlesseN, robiin, twist |
|           23 |     2708 | 2024-04-06 | Lilmix          | W   | 0.474      | -            | -                | -                | 0 (0.000) |     0.99 | avid, b0denmaster, PlesseN, robiin, twist |
|           22 |     2713 | 2024-04-06 | BetBoom         | L   | 0.472      | -            | -                | -                | -         |    -0.49 | avid, b0denmaster, PlesseN, robiin, twist |
|           21 |     2730 | 2024-04-05 | BLEED           | L   | 0.466      | -            | -                | -                | -         |    -4.49 | avid, b0denmaster, PlesseN, robiin, twist |
|           20 |     2765 | 2024-04-04 | BetBoom         | L   | 0.460      | -            | -                | -                | -         |    -0.50 | avid, b0denmaster, PlesseN, robiin, twist |
|           19 |     2775 | 2024-04-04 | Benched Heroes  | W   | 0.459      | -            | -                | -                | 0 (0.000) |     0.94 | avid, b0denmaster, PlesseN, robiin, twist |
|           18 |     2818 | 2024-04-03 | AMKAL           | L   | 0.452      | -            | -                | -                | -         |    -3.46 | avid, b0denmaster, PlesseN, robiin, twist |
|           17 |     3216 | 2024-03-13 | MOUZ NXT        | L   | 0.312      | -            | -                | -                | -         |    -2.67 | avid, b0denmaster, PlesseN, robiin, twist |
|           16 |     3248 | 2024-03-12 | Passion UA      | L   | 0.306      | -            | -                | -                | -         |    -2.53 | avid, b0denmaster, PlesseN, robiin, twist |
|           15 |     3288 | 2024-03-10 | EYEBALLERS      | W   | 0.293      | -            | -                | -                | -         |     4.98 | avid, b0denmaster, PlesseN, robiin, twist |
|           14 |     3303 | 2024-03-09 | BLUDS           | W   | 0.287      | -            | -                | -                | -         |     0.60 | avid, b0denmaster, PlesseN, robiin, twist |
|           13 |     3314 | 2024-03-09 | Johnny Speeds   | W   | 0.285      | 0.143        | 0.154 (0.006)    | 0.858 (0.035)    | -         |     8.35 | avid, b0denmaster, PlesseN, robiin, twist |
|           12 |     3319 | 2024-03-09 | Entropiq        | W   | 0.285      | -            | -                | -                | -         |     1.45 | avid, b0denmaster, PlesseN, robiin, twist |
|           11 |     3362 | 2024-03-07 | ex-Sprout       | W   | 0.272      | -            | -                | -                | -         |     1.13 | avid, b0denmaster, PlesseN, robiin, twist |
|           10 |     3394 | 2024-03-06 | Sashi           | L   | 0.265      | -            | -                | -                | -         |    -1.51 | avid, b0denmaster, PlesseN, robiin, twist |
|            9 |     3437 | 2024-03-05 | Viperio         | W   | 0.258      | -            | -                | -                | -         |     0.55 | avid, b0denmaster, PlesseN, robiin, twist |
|            8 |     3517 | 2024-03-01 | 9INE            | L   | 0.232      | -            | -                | -                | -         |    -6.49 | avid, b0denmaster, PlesseN, robiin, twist |
|            7 |     3544 | 2024-02-28 | Sangal          | W   | 0.219      | 0.143        | 0.195 (0.006)    | -                | -         |     5.46 | avid, b0denmaster, PlesseN, robiin, twist |
|            6 |     3599 | 2024-02-25 | ALTERNATE aTTaX | W   | 0.200      | 0.358        | 0.041 (0.003)    | 0.638 (0.046)    | -         |     4.38 | avid, b0denmaster, PlesseN, robiin, twist |
|            5 |     3769 | 2024-02-18 | Portugal        | W   | 0.152      | -            | -                | -                | -         |     1.42 | avid, b0denmaster, PlesseN, robiin, twist |
|            4 |     3998 | 2024-02-06 | 9INE            | W   | 0.072      | -            | -                | -                | -         |     0.27 | avid, b0denmaster, PlesseN, robiin, twist |
|            3 |     4023 | 2024-02-04 | Secret          | L   | 0.059      | -            | -                | -                | -         |    -1.60 | avid, b0denmaster, PlesseN, robiin, twist |
|            2 |     4161 | 2024-01-29 | Passion UA      | L   | 0.019      | -            | -                | -                | -         |    -0.13 | avid, b0denmaster, PlesseN, robiin, twist |
|            1 |     4175 | 2024-01-28 | Spirit Academy  | L   | 0.011      | -            | -                | -                | -         |    -0.30 | avid, b0denmaster, PlesseN, robiin, twist |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,868.00)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.946 | $2,000.00      | $1,891.68       |
| 2024-06-09 |      0.900 | $2,889.00      | $2,599.59       |
| 2024-05-18 |      0.753 | $500.00        | $376.73         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
