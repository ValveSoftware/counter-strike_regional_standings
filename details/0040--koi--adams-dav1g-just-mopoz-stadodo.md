### Roster Details<br />
Team Name: KOI<br />
Roster: adamS, dav1g, JUST, mopoz, stadodo<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [40](../standings_global.md)<br />
Regional Rank: [28]( ../standings_europe.md)<br />
Final Rank Value:  1193.2<br />
<br />
Final Rank Value (1193.2) = Starting Rank Value (1195.7) + Head To Head Adjustments (-2.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.490[<sup>1</sup>](#table2)
- Bounty Collected: 0.459[<sup>2</sup>](#table1)
- Opponent Network: 0.242[<sup>2</sup>](#table1)
- LAN Wins: 0.291[<sup>2</sup>](#table1)

The average of these factors is 0.370<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1195.7
- 400 + ( ( 0.370 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 1195.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           47 |       52 | 2024-07-16 | Insilio         | W   | 1.000      | 0.500        | 0.035 (0.018)    | 0.570 (0.285)    | 0 (0.000) |     9.07 | adamS, dav1g, JUST, mopoz, stadodo |
|           46 |      319 | 2024-06-16 | 9z              | L   | 0.994      | -            | -                | -                | -         |    -2.85 | adamS, dav1g, JUST, mopoz, stadodo |
|           45 |      371 | 2024-06-14 | RED Canids      | W   | 0.983      | 0.548        | 0.123 (0.066)    | 0.714 (0.385)    | 1 (0.983) |    18.83 | adamS, dav1g, JUST, mopoz, stadodo |
|           44 |      374 | 2024-06-14 | Imperial        | W   | 0.982      | 0.548        | 0.386 (0.208)    | 0.607 (0.327)    | 1 (0.982) |    25.52 | adamS, dav1g, JUST, mopoz, stadodo |
|           43 |      531 | 2024-06-09 | Sangal          | L   | 0.948      | -            | -                | -                | -         |   -11.91 | adamS, dav1g, JUST, mopoz, stadodo |
|           42 |      725 | 2024-06-06 | SINNERS         | W   | 0.927      | 0.500        | 0.058 (0.027)    | 0.744 (0.345)    | 0 (0.000) |     9.88 | adamS, dav1g, JUST, mopoz, stadodo |
|           41 |      787 | 2024-06-05 | 3DMAX           | W   | 0.921      | 0.500        | 0.209 (0.096)    | 1.000 (0.460)    | 0 (0.000) |    18.06 | adamS, dav1g, JUST, mopoz, stadodo |
|           40 |      919 | 2024-06-01 | ENCE            | L   | 0.894      | -            | -                | -                | -         |    -6.22 | adamS, dav1g, JUST, mopoz, stadodo |
|           39 |      927 | 2024-06-01 | Zero Tenacity   | L   | 0.893      | -            | -                | -                | -         |   -14.19 | adamS, dav1g, JUST, mopoz, stadodo |
|           38 |     1594 | 2024-05-09 | B8              | L   | 0.738      | -            | -                | -                | -         |   -13.15 | adamS, dav1g, JUST, mopoz, stadodo |
|           37 |     1756 | 2024-05-01 | Zero Tenacity   | L   | 0.686      | -            | -                | -                | -         |   -13.69 | adamS, dav1g, JUST, mopoz, stadodo |
|           36 |     2076 | 2024-04-18 | ex-Guild Eagles | L   | 0.600      | -            | -                | -                | -         |   -15.51 | adamS, dav1g, JUST, mopoz, stadodo |
|           35 |     2085 | 2024-04-18 | fnatic          | W   | 0.600      | 0.143        | 0.300 (0.026)    | 0.632 (0.054)    | 0 (0.000) |    16.89 | adamS, dav1g, JUST, mopoz, stadodo |
|           34 |     2155 | 2024-04-16 | BLEED           | L   | 0.588      | -            | -                | -                | -         |   -11.00 | adamS, dav1g, JUST, mopoz, stadodo |
|           33 |     2288 | 2024-04-10 | RUSH B          | W   | 0.548      | 0.500        | -                | 0.327 (0.089)    | 0 (0.000) |     2.66 | adamS, dav1g, JUST, mopoz, stadodo |
|           32 |     2342 | 2024-04-09 | Aurora          | W   | 0.541      | 0.500        | 0.514 (0.139)    | 0.813 (0.220)    | -         |    15.93 | adamS, dav1g, JUST, mopoz, stadodo |
|           31 |     2348 | 2024-04-09 | Apeks           | L   | 0.540      | -            | -                | -                | -         |   -11.56 | adamS, dav1g, JUST, mopoz, stadodo |
|           30 |     2376 | 2024-04-08 | GUN5            | W   | 0.534      | -            | -                | -                | -         |     0.21 | adamS, dav1g, JUST, mopoz, stadodo |
|           29 |     2381 | 2024-04-08 | fnatic          | L   | 0.533      | -            | -                | -                | -         |    -1.62 | adamS, dav1g, JUST, mopoz, stadodo |
|           28 |     2482 | 2024-04-04 | NOM             | W   | 0.507      | -            | -                | -                | -         |     0.44 | adamS, dav1g, JUST, mopoz, stadodo |
|           27 |     2516 | 2024-04-03 | 9INE            | W   | 0.501      | -            | -                | -                | -         |     0.41 | adamS, dav1g, JUST, mopoz, stadodo |
|           26 |     2553 | 2024-04-02 | TSM             | W   | 0.494      | -            | -                | -                | -         |     1.25 | adamS, dav1g, JUST, mopoz, stadodo |
|           25 |     2619 | 2024-03-28 | EYEBALLERS      | L   | 0.460      | -            | -                | -                | -         |   -11.62 | adamS, dav1g, JUST, mopoz, stadodo |
|           24 |     2791 | 2024-03-18 | FURIA           | L   | 0.394      | -            | -                | -                | -         |    -0.96 | adamS, dav1g, JUST, mopoz, stadodo |
|           23 |     2808 | 2024-03-17 | ENCE            | L   | 0.388      | -            | -                | -                | -         |    -2.31 | adamS, dav1g, JUST, mopoz, stadodo |
|           22 |     2823 | 2024-03-17 | SAW             | L   | 0.386      | -            | -                | -                | -         |    -4.57 | adamS, dav1g, JUST, mopoz, stadodo |
|           21 |     2914 | 2024-03-13 | Sangal          | W   | 0.361      | 0.500        | 0.232 (0.042)    | 0.893 (0.161)    | -         |     4.83 | adamS, dav1g, JUST, mopoz, stadodo |
|           20 |     2969 | 2024-03-11 | B8              | L   | 0.348      | -            | -                | -                | -         |    -6.02 | adamS, dav1g, JUST, mopoz, stadodo |
|           19 |     2975 | 2024-03-11 | Apeks           | L   | 0.347      | -            | -                | -                | -         |    -7.68 | adamS, dav1g, JUST, mopoz, stadodo |
|           18 |     3087 | 2024-03-06 | 9 Pandas        | W   | 0.315      | 0.500        | 0.126 (0.020)    | 0.591 (0.093)    | -         |     3.74 | adamS, dav1g, JUST, mopoz, stadodo |
|           17 |     3124 | 2024-03-05 | FORZE           | W   | 0.308      | -            | -                | -                | -         |     2.47 | adamS, dav1g, JUST, mopoz, stadodo |
|           16 |     3130 | 2024-03-05 | Nemiga          | W   | 0.307      | 0.143        | 0.498 (0.022)    | -                | -         |     6.11 | adamS, dav1g, JUST, mopoz, stadodo |
|           15 |     3139 | 2024-03-05 | ex-Sprout       | W   | 0.307      | -            | -                | -                | -         |     0.27 | adamS, dav1g, JUST, mopoz, stadodo |
|           14 |     3180 | 2024-03-03 | The Chosen Few  | L   | 0.294      | -            | -                | -                | -         |    -8.73 | adamS, dav1g, JUST, mopoz, stadodo |
|           13 |     3232 | 2024-02-29 | Aurora          | L   | 0.275      | -            | -                | -                | -         |    -0.61 | adamS, dav1g, JUST, mopoz, stadodo |
|           12 |     3238 | 2024-02-29 | HAVU            | W   | 0.273      | -            | -                | -                | -         |     0.67 | adamS, dav1g, JUST, mopoz, stadodo |
|           11 |     3246 | 2024-02-28 | FORZE           | L   | 0.268      | -            | -                | -                | -         |    -6.57 | adamS, dav1g, JUST, mopoz, stadodo |
|           10 |     3250 | 2024-02-28 | kONO            | W   | 0.267      | -            | -                | -                | -         |     1.12 | adamS, dav1g, JUST, mopoz, stadodo |
|            9 |     3540 | 2024-02-16 | fnatic          | W   | 0.186      | -            | -                | -                | 1 (0.186) |     5.32 | adamS, dav1g, JUST, mopoz, stadodo |
|            8 |     3567 | 2024-02-15 | 9 Pandas        | W   | 0.179      | -            | -                | -                | 1 (0.179) |     2.13 | adamS, dav1g, JUST, mopoz, stadodo |
|            7 |     3593 | 2024-02-14 | 3DMAX           | W   | 0.174      | -            | -                | -                | 1 (0.174) |     3.07 | adamS, dav1g, JUST, mopoz, stadodo |
|            6 |     3606 | 2024-02-14 | Natus Vincere   | L   | 0.172      | -            | -                | -                | -         |    -0.11 | adamS, dav1g, JUST, mopoz, stadodo |
|            5 |     3764 | 2024-02-03 | SAW             | L   | 0.100      | -            | -                | -                | -         |    -1.30 | adamS, dav1g, JUST, mopoz, stadodo |
|            4 |     3794 | 2024-02-02 | Rhyno           | W   | 0.093      | -            | -                | -                | -         |     0.88 | adamS, dav1g, JUST, mopoz, stadodo |
|            3 |     3800 | 2024-02-02 | ABT             | W   | 0.093      | -            | -                | -                | -         |     0.05 | adamS, dav1g, JUST, mopoz, stadodo |
|            2 |     4052 | 2024-01-20 | PERA            | W   | 0.008      | -            | -                | -                | -         |     0.06 | adamS, dav1g, JUST, mopoz, stadodo |
|            1 |     4060 | 2024-01-20 | Enterprise      | L   | 0.007      | -            | -                | -                | -         |    -0.17 | adamS, dav1g, JUST, mopoz, stadodo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($22,415.03)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.09) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.996 | $7,000.00      | $6,970.43       |
| 2024-06-09 |      0.948 | $12,000.00     | $11,371.26      |
| 2024-03-20 |      0.407 | $10,000.00     | $4,073.34       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
