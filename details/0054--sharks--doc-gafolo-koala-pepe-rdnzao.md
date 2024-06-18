### Roster Details<br />
Team Name: Sharks<br />
Roster: doc, gafolo, koala, pepe, rdnzao<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [54](../standings_global.md)<br />
Regional Rank: [12]( ../standings_americas.md)<br />
Final Rank Value:  1075.5<br />
<br />
Final Rank Value (1075.5) = Starting Rank Value (975.7) + Head To Head Adjustments (99.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.424[<sup>1</sup>](#table2)
- Bounty Collected: 0.451[<sup>2</sup>](#table1)
- Opponent Network: 0.258[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.283<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 975.7
- 400 + ( ( 0.283 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 975.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           74 |       75 | 2024-06-14 | Fluxo       | L   | 1.000      | -            | -                | -                | -         |   -13.19 | doc, gafolo, koala, pepe, rdnzao |
|           73 |      201 | 2024-06-10 | Vikings KR  | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.92 | doc, gafolo, koala, pepe, rdnzao |
|           72 |      230 | 2024-06-09 | paiN        | L   | 1.000      | -            | -                | -                | -         |    -3.42 | doc, gafolo, koala, pepe, rdnzao |
|           71 |      246 | 2024-06-09 | BESTIA      | W   | 1.000      | 0.450        | 0.052 (0.023)    | 0.594 (0.268)    | 0 (0.000) |    14.60 | doc, gafolo, koala, pepe, rdnzao |
|           70 |      305 | 2024-06-08 | Hype        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.13 | doc, gafolo, koala, pepe, rdnzao |
|           69 |      314 | 2024-06-08 | Corinthians | L   | 1.000      | -            | -                | -                | -         |   -28.12 | doc, gafolo, koala, pepe, rdnzao |
|           68 |      345 | 2024-06-07 | 9z          | L   | 1.000      | -            | -                | -                | -         |    -2.52 | doc, gafolo, koala, pepe, rdnzao |
|           67 |      403 | 2024-06-06 | paiN        | W   | 1.000      | 0.450        | 0.492 (0.221)    | 0.775 (0.349)    | 0 (0.000) |    28.33 | doc, gafolo, koala, pepe, rdnzao |
|           66 |      471 | 2024-06-05 | Imperial    | L   | 1.000      | -            | -                | -                | -         |    -3.35 | doc, gafolo, koala, pepe, rdnzao |
|           65 |      523 | 2024-06-04 | BESTIA      | W   | 1.000      | 0.450        | 0.052 (0.023)    | 0.594 (0.268)    | 0 (0.000) |    17.60 | doc, gafolo, koala, pepe, rdnzao |
|           64 |      854 | 2024-05-22 | Imperial    | W   | 1.000      | 0.450        | 0.406 (0.183)    | 0.694 (0.312)    | 0 (0.000) |    28.30 | doc, drg, gafolo, pepe, rdnzao   |
|           63 |      858 | 2024-05-22 | Imperial    | L   | 1.000      | -            | -                | -                | -         |    -2.84 | doc, drg, gafolo, pepe, rdnzao   |
|           62 |      884 | 2024-05-21 | Case        | L   | 1.000      | -            | -                | -                | -         |   -20.82 | doc, drg, gafolo, pepe, rdnzao   |
|           61 |      885 | 2024-05-21 | Case        | W   | 1.000      | 0.450        | 0.026 (0.012)    | 0.579 (0.261)    | 0 (0.000) |    10.28 | doc, drg, gafolo, pepe, rdnzao   |
|           60 |      888 | 2024-05-21 | RED Canids  | W   | 1.000      | 0.450        | 0.115 (0.052)    | 0.693 (0.312)    | 0 (0.000) |    23.57 | doc, drg, gafolo, pepe, rdnzao   |
|           59 |      892 | 2024-05-21 | RED Canids  | L   | 1.000      | -            | -                | -                | -         |    -7.43 | doc, drg, gafolo, pepe, rdnzao   |
|           58 |     1020 | 2024-05-17 | ODDIK       | L   | 0.990      | -            | -                | -                | -         |   -20.12 | doc, drg, gafolo, rdnzao, togs   |
|           57 |     1048 | 2024-05-16 | W7M         | W   | 0.984      | 0.450        | -                | 0.364 (0.161)    | 0 (0.000) |     5.53 | doc, drg, gafolo, rdnzao, togs   |
|           56 |     1051 | 2024-05-16 | W7M         | W   | 0.983      | 0.450        | -                | 0.364 (0.161)    | 0 (0.000) |     5.82 | doc, drg, gafolo, rdnzao, togs   |
|           55 |     1053 | 2024-05-16 | Hype        | W   | 0.983      | -            | -                | -                | -         |     7.02 | doc, drg, gafolo, rdnzao, togs   |
|           54 |     1093 | 2024-05-15 | Vikings KR  | W   | 0.978      | -            | -                | -                | -         |     5.57 | doc, drg, gafolo, rdnzao, togs   |
|           53 |     1096 | 2024-05-15 | 9z          | L   | 0.977      | -            | -                | -                | -         |    -1.26 | doc, drg, gafolo, rdnzao, togs   |
|           52 |     1160 | 2024-05-14 | Fluxo       | L   | 0.970      | -            | -                | -                | -         |    -9.62 | doc, drg, gafolo, rdnzao, togs   |
|           51 |     1187 | 2024-05-13 | RED Canids  | W   | 0.964      | 0.384        | 0.115 (0.043)    | 0.693 (0.257)    | -         |    20.88 | doc, drg, gafolo, rdnzao, togs   |
|           50 |     1195 | 2024-05-13 | W7M         | W   | 0.962      | -            | -                | -                | -         |     7.16 | doc, drg, gafolo, rdnzao, togs   |
|           49 |     1244 | 2024-05-11 | W7M         | W   | 0.949      | -            | -                | -                | -         |     7.51 | doc, drg, gafolo, rdnzao, togs   |
|           48 |     1283 | 2024-05-09 | BESTIA      | L   | 0.938      | -            | -                | -                | -         |   -18.38 | doc, drg, gafolo, rdnzao, togs   |
|           47 |     1306 | 2024-05-08 | 9z          | L   | 0.931      | -            | -                | -                | -         |    -1.08 | doc, drg, gafolo, rdnzao, togs   |
|           46 |     1344 | 2024-05-06 | BESTIA      | W   | 0.917      | 0.435        | 0.052 (0.021)    | 0.594 (0.237)    | -         |    10.32 | doc, drg, gafolo, rdnzao, togs   |
|           45 |     1942 | 2024-04-11 | paiN        | L   | 0.750      | -            | -                | -                | -         |    -0.80 | doc, drg, gafolo, rdnzao, togs   |
|           44 |     2206 | 2024-04-03 | ex-2GAME    | W   | 0.697      | -            | -                | -                | -         |     3.81 | doc, drg, gafolo, rdnzao, togs   |
|           43 |     2209 | 2024-04-03 | ex-2GAME    | W   | 0.697      | -            | -                | -                | -         |     3.95 | doc, drg, gafolo, rdnzao, togs   |
|           42 |     2578 | 2024-03-14 | MIBR        | L   | 0.564      | -            | -                | -                | -         |    -0.71 | doc, drg, gafolo, rdnzao, togs   |
|           41 |     2580 | 2024-03-14 | MIBR        | L   | 0.564      | -            | -                | -                | -         |    -0.71 | doc, drg, gafolo, rdnzao, togs   |
|           40 |     2606 | 2024-03-13 | Yawara      | W   | 0.558      | -            | -                | -                | -         |     1.16 | doc, drg, gafolo, rdnzao, togs   |
|           39 |     2613 | 2024-03-13 | ODDIK       | W   | 0.557      | -            | -                | -                | -         |     8.30 | doc, drg, gafolo, rdnzao, togs   |
|           38 |     2681 | 2024-03-11 | Fluxo       | L   | 0.542      | -            | -                | -                | -         |    -6.69 | doc, drg, gafolo, rdnzao, togs   |
|           37 |     2711 | 2024-03-09 | Case        | L   | 0.530      | -            | -                | -                | -         |   -11.31 | doc, drg, gafolo, rdnzao, togs   |
|           36 |     2775 | 2024-03-07 | Corinthians | W   | 0.515      | -            | -                | -                | -         |     2.66 | doc, drg, gafolo, rdnzao, togs   |
|           35 |     2831 | 2024-03-05 | Solid       | W   | 0.503      | -            | -                | -                | -         |     5.65 | doc, drg, gafolo, rdnzao, togs   |
|           34 |     2835 | 2024-03-05 | Solid       | W   | 0.503      | -            | -                | -                | -         |     5.89 | doc, drg, gafolo, rdnzao, togs   |
|           33 |     3028 | 2024-02-24 | Galorys     | W   | 0.438      | -            | -                | -                | -         |     4.16 | doc, drg, gafolo, rdnzao, togs   |
|           32 |     3039 | 2024-02-24 | Galorys     | W   | 0.437      | -            | -                | -                | -         |     4.30 | doc, drg, gafolo, rdnzao, togs   |
|           31 |     3041 | 2024-02-24 | Fluxo       | L   | 0.437      | -            | -                | -                | -         |    -5.44 | doc, drg, gafolo, rdnzao, togs   |
|           30 |     3094 | 2024-02-21 | Corinthians | W   | 0.418      | -            | -                | -                | -         |     2.42 | doc, drg, gafolo, rdnzao, togs   |
|           29 |     3098 | 2024-02-21 | Case        | W   | 0.417      | -            | -                | -                | -         |     4.99 | doc, drg, gafolo, rdnzao, togs   |
|           28 |     3100 | 2024-02-21 | Galorys     | W   | 0.416      | -            | -                | -                | -         |     4.61 | doc, drg, gafolo, rdnzao, togs   |
|           27 |     3129 | 2024-02-20 | Flamengo    | L   | 0.410      | -            | -                | -                | -         |   -12.08 | doc, drg, gafolo, rdnzao, togs   |
|           26 |     3134 | 2024-02-20 | Case        | W   | 0.409      | -            | -                | -                | -         |     4.85 | doc, drg, gafolo, rdnzao, togs   |
|           25 |     3156 | 2024-02-19 | Solid       | W   | 0.403      | -            | -                | -                | -         |     4.92 | doc, drg, gafolo, rdnzao, togs   |
|           24 |     3172 | 2024-02-18 | Galorys     | W   | 0.398      | -            | -                | -                | -         |     4.52 | doc, drg, gafolo, rdnzao, togs   |
|           23 |     3194 | 2024-02-17 | W7M         | L   | 0.391      | -            | -                | -                | -         |    -8.82 | doc, drg, gafolo, rdnzao, togs   |
|           22 |     3198 | 2024-02-17 | Galorys     | L   | 0.390      | -            | -                | -                | -         |    -8.28 | doc, drg, gafolo, rdnzao, togs   |
|           21 |     3228 | 2024-02-16 | W7M         | W   | 0.383      | -            | -                | -                | -         |     3.40 | doc, drg, gafolo, rdnzao, togs   |
|           20 |     3253 | 2024-02-15 | Case        | L   | 0.377      | -            | -                | -                | -         |    -7.74 | doc, drg, gafolo, rdnzao, togs   |
|           19 |     3258 | 2024-02-15 | Fluxo       | L   | 0.376      | -            | -                | -                | -         |    -4.95 | doc, drg, gafolo, rdnzao, togs   |
|           18 |     3261 | 2024-02-15 | Fluxo       | L   | 0.376      | -            | -                | -                | -         |    -5.11 | doc, drg, gafolo, rdnzao, togs   |
|           17 |     3287 | 2024-02-14 | Hype        | W   | 0.371      | -            | -                | -                | -         |     0.37 | doc, drg, gafolo, rdnzao, togs   |
|           16 |     3297 | 2024-02-14 | Galorys     | W   | 0.369      | -            | -                | -                | -         |     3.62 | doc, drg, gafolo, rdnzao, togs   |
|           15 |     3342 | 2024-02-12 | Solid       | W   | 0.358      | -            | -                | -                | -         |     4.29 | doc, drg, gafolo, rdnzao, togs   |
|           14 |     3645 | 2024-01-24 | paiN        | W   | 0.231      | 0.143        | 0.492 (0.016)    | -                | -         |     7.06 | doc, drg, gafolo, rdnzao, togs   |
|           13 |     3663 | 2024-01-23 | adalYamigos | W   | 0.224      | -            | -                | -                | -         |     0.87 | doc, drg, gafolo, rdnzao, togs   |
|           12 |     3689 | 2024-01-22 | Legacy      | W   | 0.218      | -            | -                | -                | -         |     4.35 | doc, drg, gafolo, rdnzao, togs   |
|           11 |     3723 | 2024-01-21 | 9z          | L   | 0.209      | -            | -                | -                | -         |    -0.14 | doc, drg, gafolo, rdnzao, togs   |
|           10 |     3762 | 2024-01-20 | paiN        | L   | 0.203      | -            | -                | -                | -         |    -0.18 | doc, drg, gafolo, rdnzao, togs   |
|            9 |     3798 | 2024-01-19 | Galorys     | W   | 0.198      | -            | -                | -                | -         |     2.19 | doc, drg, gafolo, rdnzao, togs   |
|            8 |     3805 | 2024-01-19 | TIMACETA    | L   | 0.197      | -            | -                | -                | -         |    -5.79 | doc, drg, gafolo, rdnzao, togs   |
|            7 |     3864 | 2024-01-18 | MIBR        | L   | 0.190      | -            | -                | -                | -         |    -0.17 | doc, drg, gafolo, rdnzao, togs   |
|            6 |     3910 | 2024-01-17 | RED Canids  | W   | 0.184      | -            | -                | -                | -         |     4.26 | doc, drg, gafolo, rdnzao, togs   |
|            5 |     3928 | 2024-01-17 | MIBR        | L   | 0.183      | -            | -                | -                | -         |    -0.16 | doc, drg, gafolo, rdnzao, togs   |
|            4 |     4039 | 2024-01-14 | paiN        | W   | 0.165      | 0.143        | 0.492 (0.012)    | -                | -         |     5.05 | doc, drg, gafolo, rdnzao, togs   |
|            3 |     4042 | 2024-01-14 | BESTIA      | W   | 0.164      | -            | -                | -                | -         |     2.90 | doc, drg, gafolo, rdnzao, togs   |
|            2 |     4048 | 2024-01-14 | Corinthians | W   | 0.163      | -            | -                | -                | -         |     1.15 | doc, drg, gafolo, rdnzao, togs   |
|            1 |     4064 | 2024-01-13 | Galorys     | W   | 0.158      | -            | -                | -                | -         |     1.82 | doc, drg, gafolo, rdnzao, togs   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($13,173.78)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      1.000 | $2,500.00      | $2,500.00       |
| 2024-06-10 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-06-09 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-05-19 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-02-25 |      0.443 | $5,000.00      | $2,216.80       |
| 2024-02-21 |      0.416 | $3,500.00      | $1,456.98       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
