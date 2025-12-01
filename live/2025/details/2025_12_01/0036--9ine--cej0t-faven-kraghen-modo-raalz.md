### Roster Details<br />
Team Name: 9INE<br />
Roster: cej0t, faveN, kraghen, MoDo, raalz<br />
Global Rank: [36](../../standings_global_2025_12_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_12_01.md)<br />
Regional Rank: [26]( ../../standings_europe_2025_12_01.md)<br />
<br />
Final Rank Value:  1305.6<br />
<br />
Final Rank Value (1305.6) = Starting Rank Value (1308.3) + Head To Head Adjustments (-2.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.434[<sup>1</sup>](#table2)
- Bounty Collected: 0.446[<sup>2</sup>](#table1)
- Opponent Network: 0.235[<sup>2</sup>](#table1)
- LAN Wins: 0.795[<sup>2</sup>](#table1)

The average of these factors is 0.477<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1308.3
- 400 + ( ( 0.477 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 1308.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           72 |       30 | 2025-11-29 | GenOne            | L   | 1.000      | -            | -                | -                | -         |   -27.35 | bnox, cej0t, kraghen, MoDo, raalz      |
|           71 |      304 | 2025-11-15 | Gentle Mates      | L   | 1.000      | -            | -                | -                | -         |   -10.11 | cej0t, kraghen, kRaSnaL, MoDo, raalz   |
|           70 |      326 | 2025-11-15 | Lynn Vision       | L   | 1.000      | -            | -                | -                | -         |   -15.19 | cej0t, kraghen, kRaSnaL, MoDo, raalz   |
|           69 |      349 | 2025-11-13 | BORING PLAYERS    | W   | 1.000      | -            | -                | -                | 1 (1.000) |     1.32 | cej0t, kraghen, kRaSnaL, MoDo, raalz   |
|           68 |     1233 | 2025-10-19 | Nemiga            | L   | 0.912      | -            | -                | -                | -         |   -23.58 | cej0t, faveN, kraghen, MoDo, raalz     |
|           67 |     1253 | 2025-10-18 | RUBY              | W   | 0.906      | 0.384        | 0.049 (0.017)    | 1.000 (0.348)    | -         |     5.52 | cej0t, faveN, kraghen, MoDo, raalz     |
|           66 |     1414 | 2025-10-12 | SINNERS           | L   | 0.867      | -            | -                | -                | -         |   -21.08 | cej0t, faveN, kraghen, MoDo, raalz     |
|           65 |     1485 | 2025-10-10 | TPuDCATb TPu      | W   | 0.852      | 0.487        | -                | 0.790 (0.328)    | -         |     3.89 | cej0t, faveN, kraghen, MoDo, raalz     |
|           64 |     1711 | 2025-10-05 | fnatic            | L   | 0.823      | -            | -                | -                | -         |   -11.51 | cej0t, faveN, kraghen, MoDo, raalz     |
|           63 |     1731 | 2025-10-05 | ECSTATIC          | W   | 0.821      | 0.333        | 0.081 (0.022)    | 0.727 (0.199)    | 1 (0.821) |    11.82 | cej0t, faveN, kraghen, MoDo, raalz     |
|           62 |     1773 | 2025-10-04 | SAW               | W   | 0.816      | 0.333        | 0.334 (0.091)    | -                | 1 (0.816) |    18.85 | cej0t, faveN, kraghen, MoDo, raalz     |
|           61 |     1780 | 2025-10-04 | 9z                | W   | 0.814      | 0.333        | 0.088 (0.024)    | -                | 1 (0.814) |     7.45 | cej0t, faveN, kraghen, MoDo, raalz     |
|           60 |     2011 | 2025-09-28 | ex-Inner Circle   | W   | 0.774      | -            | -                | -                | 1 (0.774) |     3.30 | cej0t, faveN, kraghen, MoDo, raalz     |
|           59 |     2026 | 2025-09-28 | Liquid            | W   | 0.772      | 0.354        | 0.536 (0.146)    | -                | 1 (0.772) |    21.12 | cej0t, faveN, kraghen, MoDo, raalz     |
|           58 |     2036 | 2025-09-28 | Johnny Speeds     | W   | 0.771      | 0.354        | -                | 0.799 (0.218)    | 1 (0.771) |     8.27 | cej0t, faveN, kraghen, MoDo, raalz     |
|           57 |     2089 | 2025-09-27 | Liquid            | W   | 0.765      | 0.354        | 0.536 (0.145)    | -                | 1 (0.765) |    21.59 | cej0t, faveN, kraghen, MoDo, raalz     |
|           56 |     2096 | 2025-09-27 | Betclic           | W   | 0.765      | -            | -                | -                | 1 (0.765) |     3.32 | cej0t, faveN, kraghen, MoDo, raalz     |
|           55 |     2291 | 2025-09-20 | Friendly Campers  | L   | 0.720      | -            | -                | -                | -         |   -13.03 | cej0t, faveN, kraghen, MoDo, raalz     |
|           54 |     2316 | 2025-09-19 | HOTU              | W   | 0.714      | -            | -                | -                | -         |    10.19 | cej0t, faveN, kraghen, MoDo, raalz     |
|           53 |     2334 | 2025-09-19 | Gentle Mates      | L   | 0.712      | -            | -                | -                | -         |    -5.63 | cej0t, faveN, kraghen, MoDo, raalz     |
|           52 |     2352 | 2025-09-18 | Natus Vincere     | L   | 0.708      | -            | -                | -                | -         |    -2.64 | cej0t, faveN, kraghen, MoDo, raalz     |
|           51 |     2362 | 2025-09-18 | BC.Game           | L   | 0.706      | -            | -                | -                | -         |   -16.53 | cej0t, faveN, kraghen, MoDo, raalz     |
|           50 |     2521 | 2025-09-13 | Sangal            | W   | 0.674      | 0.384        | -                | 0.925 (0.240)    | -         |     4.62 | cej0t, faveN, kraghen, MoDo, raalz     |
|           49 |     2627 | 2025-09-11 | TPuDCATb TPu      | W   | 0.661      | 0.384        | -                | 0.790 (0.201)    | -         |     3.33 | cej0t, faveN, kraghen, MoDo, raalz     |
|           48 |     2729 | 2025-09-09 | Johnny Speeds     | W   | 0.647      | 0.384        | -                | 0.799 (0.199)    | -         |    10.43 | cej0t, faveN, kraghen, MoDo, raalz     |
|           47 |     2924 | 2025-08-31 | PARIVISION        | L   | 0.587      | -            | -                | -                | -         |    -7.39 | cej0t, faveN, kraghen, phzy, raalz     |
|           46 |     2948 | 2025-08-30 | ENCE              | L   | 0.581      | -            | -                | -                | -         |    -7.33 | cej0t, faveN, kraghen, phzy, raalz     |
|           45 |     2954 | 2025-08-30 | EYEBALLERS        | W   | 0.580      | 0.333        | -                | 1.000 (0.193)    | 1 (0.580) |    11.74 | cej0t, faveN, kraghen, phzy, raalz     |
|           44 |     2955 | 2025-08-30 | BetBoom           | L   | 0.580      | -            | -                | -                | -         |    -4.14 | cej0t, faveN, kraghen, phzy, raalz     |
|           43 |     2964 | 2025-08-30 | Passion UA        | W   | 0.579      | 0.333        | 0.112 (0.022)    | -                | -         |    10.78 | cej0t, faveN, kraghen, phzy, raalz     |
|           42 |     2979 | 2025-08-29 | Gentle Mates      | L   | 0.574      | -            | -                | -                | -         |    -3.73 | cej0t, faveN, kraghen, phzy, raalz     |
|           41 |     2998 | 2025-08-29 | ex-Inner Circle   | W   | 0.572      | -            | -                | -                | -         |     2.02 | cej0t, faveN, kraghen, phzy, raalz     |
|           40 |     3005 | 2025-08-29 | HyperSpirit       | W   | 0.571      | -            | -                | -                | -         |     0.58 | cej0t, faveN, kraghen, phzy, raalz     |
|           39 |     3049 | 2025-08-27 | PARIVISION        | W   | 0.561      | 0.384        | 0.135 (0.029)    | -                | -         |    10.84 | cej0t, faveN, kraghen, phzy, raalz     |
|           38 |     3216 | 2025-08-19 | Inner Circle      | L   | 0.505      | -            | -                | -                | -         |    -5.29 | cej0t, faveN, kraghen, phzy, raalz     |
|           37 |     3229 | 2025-08-18 | Nexus             | W   | 0.499      | 0.486        | -                | 0.840 (0.203)    | -         |     4.26 | cej0t, faveN, kraghen, phzy, raalz     |
|           36 |     3260 | 2025-08-17 | BIG               | W   | 0.493      | -            | -                | -                | -         |     1.07 | cej0t, faveN, kraghen, phzy, raalz     |
|           35 |     3281 | 2025-08-16 | Johnny Speeds     | W   | 0.487      | -            | -                | -                | -         |     8.65 | cej0t, faveN, kraghen, phzy, raalz     |
|           34 |     3303 | 2025-08-16 | CYBERSHOKE        | L   | 0.486      | -            | -                | -                | -         |   -10.59 | cej0t, faveN, kraghen, phzy, raalz     |
|           33 |     3326 | 2025-08-15 | HOTU              | W   | 0.481      | -            | -                | -                | -         |     7.28 | cej0t, faveN, kraghen, phzy, raalz     |
|           32 |     3377 | 2025-08-14 | OG                | W   | 0.474      | 0.384        | 0.081 (0.015)    | -                | -         |     8.84 | cej0t, faveN, kraghen, phzy, raalz     |
|           31 |     3428 | 2025-08-13 | BIG               | W   | 0.467      | -            | -                | -                | -         |     1.05 | cej0t, faveN, kraghen, phzy, raalz     |
|           30 |     3442 | 2025-08-13 | Ninjas in Pyjamas | W   | 0.466      | 0.624        | 0.208 (0.061)    | -                | -         |     8.93 | cej0t, faveN, kraghen, phzy, raalz     |
|           29 |     3457 | 2025-08-13 | GUN5              | W   | 0.465      | 0.486        | -                | 0.967 (0.218)    | -         |     5.41 | cej0t, faveN, kraghen, phzy, raalz     |
|           28 |     3481 | 2025-08-12 | Tricked           | W   | 0.461      | -            | -                | -                | -         |     0.47 | cej0t, faveN, kraghen, phzy, raalz     |
|           27 |     3554 | 2025-08-11 | 500               | L   | 0.452      | -            | -                | -                | -         |   -11.28 | cej0t, faveN, kraghen, phzy, raalz     |
|           26 |     3605 | 2025-08-09 | fnatic            | L   | 0.440      | -            | -                | -                | -         |    -4.04 | cej0t, faveN, kraghen, phzy, raalz     |
|           25 |     3636 | 2025-08-07 | Spirit Academy    | W   | 0.427      | -            | -                | -                | -         |     1.32 | cej0t, faveN, kraghen, phzy, raalz     |
|           24 |     3667 | 2025-08-05 | Zero Tenacity     | W   | 0.412      | -            | -                | -                | -         |     2.35 | cej0t, faveN, kraghen, phzy, raalz     |
|           23 |     3689 | 2025-08-03 | Johnny Speeds     | W   | 0.399      | -            | -                | -                | -         |     7.30 | cej0t, faveN, kraghen, phzy, raalz     |
|           22 |     3725 | 2025-08-01 | Tricked           | L   | 0.386      | -            | -                | -                | -         |   -11.88 | cej0t, faveN, kraghen, phzy, raalz     |
|           21 |     3758 | 2025-07-29 | Sashi             | W   | 0.367      | -            | -                | -                | -         |     6.90 | cej0t, faveN, kraghen, phzy, raalz     |
|           20 |     3899 | 2025-07-21 | OG                | L   | 0.313      | -            | -                | -                | -         |    -4.29 | cej0t, faveN, kraghen, phzy, raalz     |
|           19 |     3901 | 2025-07-21 | EYEBALLERS        | W   | 0.313      | -            | -                | -                | -         |     7.15 | cej0t, faveN, kraghen, phzy, raalz     |
|           18 |     4044 | 2025-07-15 | Betera            | L   | 0.273      | -            | -                | -                | -         |    -7.22 | cej0t, faveN, kraghen, noni, raalz     |
|           17 |     4059 | 2025-07-14 | TPuDCATb TPu      | W   | 0.267      | -            | -                | -                | -         |     1.64 | cej0t, faveN, kraghen, noni, raalz     |
|           16 |     4064 | 2025-07-14 | Inner Circle      | L   | 0.267      | -            | -                | -                | -         |    -2.28 | cej0t, faveN, kraghen, noni, raalz     |
|           15 |     4086 | 2025-07-13 | Betera            | L   | 0.260      | -            | -                | -                | -         |    -6.94 | cej0t, faveN, kraghen, noni, raalz     |
|           14 |     4154 | 2025-07-11 | KHAN              | L   | 0.244      | -            | -                | -                | -         |    -7.29 | cej0t, faveN, flayy, kraghen, raalz    |
|           13 |     4361 | 2025-06-20 | Venom             | L   | 0.105      | -            | -                | -                | -         |    -2.18 | bobeksde, faveN, kraghen, MoDo, raalz  |
|           12 |     4377 | 2025-06-19 | Gentle Mates      | L   | 0.099      | -            | -                | -                | -         |    -0.58 | bobeksde, faveN, kraghen, MoDo, raalz  |
|           11 |     4393 | 2025-06-18 | Inner Circle      | L   | 0.091      | -            | -                | -                | -         |    -0.83 | bobeksde, faveN, kraghen, MoDo, raalz  |
|           10 |     4408 | 2025-06-17 | KHAN              | W   | 0.084      | -            | -                | -                | -         |     0.14 | bobeksde, faveN, kraghen, MoDo, raalz  |
|            9 |     4414 | 2025-06-16 | Zero Tenacity     | L   | 0.081      | -            | -                | -                | -         |    -2.19 | bobeksde, cej0t, faveN, kraghen, raalz |
|            8 |     4437 | 2025-06-15 | Passion UA        | L   | 0.073      | -            | -                | -                | -         |    -2.20 | bobeksde, faveN, kraghen, MoDo, raalz  |
|            7 |     4450 | 2025-06-15 | fnatic            | L   | 0.071      | -            | -                | -                | -         |    -0.67 | bobeksde, faveN, kraghen, MoDo, raalz  |
|            6 |     4474 | 2025-06-14 | Alliance          | W   | 0.067      | -            | -                | -                | -         |     1.25 | bobeksde, faveN, kraghen, MoDo, raalz  |
|            5 |     4483 | 2025-06-14 | ECSTATIC          | W   | 0.066      | -            | -                | -                | -         |     1.27 | bobeksde, faveN, kraghen, MoDo, raalz  |
|            4 |     4497 | 2025-06-13 | Sashi             | W   | 0.061      | -            | -                | -                | -         |     1.07 | bobeksde, faveN, kraghen, MoDo, raalz  |
|            3 |     4553 | 2025-06-12 | Partizan          | L   | 0.051      | -            | -                | -                | -         |    -1.53 | bobeksde, faveN, kraghen, MoDo, raalz  |
|            2 |     4597 | 2025-06-09 | CYBERSHOKE        | W   | 0.032      | -            | -                | -                | -         |     0.29 | bobeksde, faveN, kraghen, MoDo, raalz  |
|            1 |     4632 | 2025-06-07 | ECLOT             | W   | 0.019      | -            | -                | -                | -         |     0.17 | bobeksde, faveN, kraghen, MoDo, raalz  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($28,436.48)
- Divide that value by the 5th highest value among all rosters ($574,782.45)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-11-16 |      1.000 | $3,511.00      | $3,511.00       |
| 2025-10-19 |      0.914 | $3,000.00      | $2,741.63       |
| 2025-10-13 |      0.874 | $2,936.00      | $2,566.13       |
| 2025-10-05 |      0.823 | $2,500.00      | $2,057.69       |
| 2025-09-28 |      0.774 | $8,000.00      | $6,190.17       |
| 2025-09-23 |      0.741 | $1,750.00      | $1,296.16       |
| 2025-09-21 |      0.727 | $10,000.00     | $7,267.01       |
| 2025-09-01 |      0.594 | $2,250.00      | $1,336.50       |
| 2025-08-31 |      0.586 | $983.00        | $576.47         |
| 2025-08-10 |      0.447 | $2,000.00      | $893.71         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
