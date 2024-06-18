### Roster Details<br />
Team Name: ENCE<br />
Roster: gla1ve, Goofy, Kylar, podi, sdy<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [22](../standings_global.md)<br />
Regional Rank: [15]( ../standings_europe.md)<br />
Final Rank Value:  1404.2<br />
<br />
Final Rank Value (1404.2) = Starting Rank Value (1525.3) + Head To Head Adjustments (-121.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.609[<sup>1</sup>](#table2)
- Bounty Collected: 0.544[<sup>2</sup>](#table1)
- Opponent Network: 0.343[<sup>2</sup>](#table1)
- LAN Wins: 0.719[<sup>2</sup>](#table1)

The average of these factors is 0.554<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1525.3
- 400 + ( ( 0.554 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 1525.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           44 |       27 | 2024-06-16 | Falcons            | L   | 1.000      | -            | -                | -                | -         |    -8.46 | gla1ve, Goofy, Kylar, podi, sdy    |
|           43 |       96 | 2024-06-14 | Complexity         | W   | 1.000      | 0.500        | 0.426 (0.213)    | 0.442 (0.221)    | 1 (1.000) |    26.82 | gla1ve, Goofy, Kylar, podi, sdy    |
|           42 |      103 | 2024-06-14 | MIBR               | W   | 1.000      | 0.500        | 0.281 (0.141)    | 0.688 (0.344)    | 1 (1.000) |    22.53 | gla1ve, Goofy, Kylar, podi, sdy    |
|           41 |      438 | 2024-06-06 | HEROIC             | L   | 1.000      | -            | -                | -                | -         |    -4.28 | gla1ve, Goofy, Kylar, podi, sdy    |
|           40 |      451 | 2024-06-06 | Astralis           | L   | 1.000      | -            | -                | -                | -         |    -2.09 | gla1ve, Goofy, Kylar, podi, sdy    |
|           39 |      488 | 2024-06-05 | Sashi              | W   | 1.000      | 0.715        | 0.200 (0.143)    | 1.000 (0.715)    | 1 (1.000) |    12.59 | gla1ve, Goofy, Kylar, podi, sdy    |
|           38 |      498 | 2024-06-05 | The MongolZ        | L   | 1.000      | -            | -                | -                | -         |    -1.86 | gla1ve, Goofy, Kylar, podi, sdy    |
|           37 |      508 | 2024-06-05 | Ninjas in Pyjamas  | L   | 1.000      | -            | -                | -                | -         |    -7.63 | gla1ve, Goofy, Kylar, podi, sdy    |
|           36 |      615 | 2024-06-01 | DMS                | L   | 1.000      | -            | -                | -                | -         |   -28.20 | gla1ve, Goofy, Kylar, podi, sdy    |
|           35 |      621 | 2024-06-01 | KOI                | W   | 1.000      | -            | -                | -                | -         |     5.71 | gla1ve, Goofy, Kylar, podi, sdy    |
|           34 |      630 | 2024-06-01 | DMS                | L   | 1.000      | -            | -                | -                | -         |   -28.85 | gla1ve, Goofy, Kylar, podi, sdy    |
|           33 |      910 | 2024-05-21 | Liquid             | L   | 1.000      | -            | -                | -                | -         |    -6.86 | dycha, gla1ve, Goofy, hades, Kylar |
|           32 |      993 | 2024-05-18 | fnatic             | W   | 0.995      | 0.769        | 0.290 (0.221)    | 0.666 (0.510)    | -         |    15.63 | dycha, gla1ve, Goofy, hades, Kylar |
|           31 |     1017 | 2024-05-17 | Gaimin Gladiators  | W   | 0.990      | 0.769        | 0.076 (0.058)    | 0.632 (0.481)    | -         |     6.23 | dycha, gla1ve, Goofy, hades, Kylar |
|           30 |     1030 | 2024-05-17 | fnatic             | L   | 0.988      | -            | -                | -                | -         |   -14.39 | dycha, gla1ve, Goofy, hades, Kylar |
|           29 |     1386 | 2024-05-04 | FURIA              | L   | 0.902      | -            | -                | -                | -         |    -9.55 | dycha, gla1ve, Goofy, hades, Kylar |
|           28 |     1402 | 2024-05-03 | GamerLegion        | L   | 0.895      | -            | -                | -                | -         |   -19.98 | dycha, gla1ve, Goofy, hades, Kylar |
|           27 |     1421 | 2024-05-02 | Monte              | W   | 0.889      | 0.889        | 0.189 (0.150)    | 0.674 (0.533)    | 1 (0.889) |     7.23 | dycha, gla1ve, Goofy, hades, Kylar |
|           26 |     1448 | 2024-05-01 | Bad News Kangaroos | W   | 0.882      | 0.889        | -                | 0.225 (0.177)    | 1 (0.882) |     1.18 | dycha, gla1ve, Goofy, hades, Kylar |
|           25 |     1479 | 2024-04-30 | GamerLegion        | L   | 0.874      | -            | -                | -                | -         |   -20.74 | dycha, gla1ve, Goofy, hades, Kylar |
|           24 |     1744 | 2024-04-19 | AMKAL              | L   | 0.802      | -            | -                | -                | -         |   -20.97 | dycha, gla1ve, Goofy, hades, Kylar |
|           23 |     1827 | 2024-04-17 | Enterprise         | W   | 0.788      | 0.384        | -                | 0.575 (0.174)    | -         |     1.66 | dycha, gla1ve, Goofy, hades, Kylar |
|           22 |     1996 | 2024-04-10 | OG                 | L   | 0.742      | -            | -                | -                | -         |   -19.47 | dycha, gla1ve, Goofy, hades, Kylar |
|           21 |     2079 | 2024-04-08 | FORZE              | L   | 0.728      | -            | -                | -                | -         |   -21.23 | dycha, gla1ve, Goofy, hades, Kylar |
|           20 |     2190 | 2024-04-04 | Aurora Young Blud  | W   | 0.701      | -            | -                | -                | -         |     0.30 | dycha, gla1ve, Goofy, hades, Kylar |
|           19 |     2486 | 2024-03-19 | FURIA              | L   | 0.596      | -            | -                | -                | -         |    -6.92 | dycha, gla1ve, Goofy, hades, Kylar |
|           18 |     2502 | 2024-03-18 | paiN               | L   | 0.587      | -            | -                | -                | -         |    -7.76 | dycha, gla1ve, Goofy, hades, Kylar |
|           17 |     2511 | 2024-03-17 | KOI                | W   | 0.583      | -            | -                | -                | 1 (0.583) |     2.32 | dycha, gla1ve, Goofy, hades, Kylar |
|           16 |     2528 | 2024-03-17 | Imperial           | L   | 0.581      | -            | -                | -                | -         |    -9.40 | dycha, gla1ve, Goofy, hades, Kylar |
|           15 |     2658 | 2024-03-12 | B8                 | L   | 0.549      | -            | -                | -                | -         |   -15.46 | dycha, gla1ve, Goofy, hades, Kylar |
|           14 |     2671 | 2024-03-11 | HEROIC             | L   | 0.543      | -            | -                | -                | -         |    -4.06 | dycha, gla1ve, Goofy, hades, Kylar |
|           13 |     2684 | 2024-03-11 | Metizport          | W   | 0.542      | -            | -                | -                | -         |     0.79 | dycha, gla1ve, Goofy, hades, Kylar |
|           12 |     3084 | 2024-02-22 | Astralis           | W   | 0.421      | 0.143        | 0.533 (0.032)    | -                | 1 (0.421) |    11.57 | dycha, gla1ve, Goofy, hades, Kylar |
|           11 |     3106 | 2024-02-21 | Vitality           | L   | 0.415      | -            | -                | -                | -         |    -1.19 | dycha, gla1ve, Goofy, hades, Kylar |
|           10 |     3138 | 2024-02-20 | GamerLegion        | W   | 0.408      | -            | -                | -                | 1 (0.408) |     0.92 | dycha, gla1ve, Goofy, hades, Kylar |
|            9 |     3159 | 2024-02-19 | ex-Guild Eagles    | W   | 0.402      | -            | -                | -                | 1 (0.402) |     0.39 | dycha, gla1ve, Goofy, hades, Kylar |
|            8 |     3167 | 2024-02-19 | Spirit             | L   | 0.401      | -            | -                | -                | -         |    -0.94 | dycha, gla1ve, Goofy, hades, Kylar |
|            7 |     3371 | 2024-02-09 | Falcons            | L   | 0.337      | -            | -                | -                | -         |    -4.27 | dycha, gla1ve, Goofy, hades, Kylar |
|            6 |     3405 | 2024-02-06 | MOUZ               | L   | 0.316      | -            | -                | -                | -         |    -0.78 | dycha, gla1ve, Goofy, hades, Kylar |
|            5 |     3416 | 2024-02-05 | G2                 | W   | 0.309      | 1.000        | 0.756 (0.233)    | 0.508 (0.157)    | 1 (0.309) |     8.74 | dycha, gla1ve, Goofy, hades, Kylar |
|            4 |     3452 | 2024-02-03 | Vitality           | W   | 0.297      | 1.000        | 0.738 (0.219)    | 0.414 (0.123)    | -         |     8.64 | dycha, gla1ve, Goofy, hades, Kylar |
|            3 |     3491 | 2024-02-02 | The MongolZ        | W   | 0.289      | 0.143        | 0.986 (0.041)    | -                | -         |     8.28 | dycha, gla1ve, Goofy, hades, Kylar |
|            2 |     3520 | 2024-02-01 | Astralis           | W   | 0.283      | -            | -                | -                | -         |     8.04 | dycha, gla1ve, Goofy, hades, Kylar |
|            1 |     3546 | 2024-01-31 | BIG                | L   | 0.275      | -            | -                | -                | -         |    -5.33 | dycha, gla1ve, Goofy, hades, Kylar |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($68,718.69)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.23) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      1.000 | $10,000.00     | $10,000.00      |
| 2024-06-09 |      1.000 | $8,000.00      | $8,000.00       |
| 2024-05-23 |      1.000 | $12,500.00     | $12,500.00      |
| 2024-05-12 |      0.956 | $7,000.00      | $6,688.70       |
| 2024-04-14 |      0.769 | $15,000.00     | $11,535.06      |
| 2024-03-20 |      0.603 | $10,000.00     | $6,026.17       |
| 2024-02-11 |      0.349 | $40,000.00     | $13,968.75      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
