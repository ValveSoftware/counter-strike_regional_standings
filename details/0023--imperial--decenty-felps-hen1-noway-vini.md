### Roster Details<br />
Team Name: Imperial<br />
Roster: decenty, felps, HEN1, noway, VINI<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [23](../standings_global.md)<br />
Regional Rank: [7]( ../standings_americas.md)<br />
Final Rank Value:  1402.2<br />
<br />
Final Rank Value (1402.2) = Starting Rank Value (1547.2) + Head To Head Adjustments (-145.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.719[<sup>1</sup>](#table2)
- Bounty Collected: 0.579[<sup>2</sup>](#table1)
- Opponent Network: 0.312[<sup>2</sup>](#table1)
- LAN Wins: 0.649[<sup>2</sup>](#table1)

The average of these factors is 0.565<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1547.2
- 400 + ( ( 0.565 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 1547.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           96 |       47 | 2024-06-15 | fnatic            | L   | 1.000      | -            | -                | -                | -         |   -15.27 | decenty, felps, HEN1, noway, VINI |
|           95 |       74 | 2024-06-14 | KOI               | L   | 1.000      | -            | -                | -                | -         |   -26.08 | decenty, felps, HEN1, noway, VINI |
|           94 |      199 | 2024-06-10 | paiN              | L   | 1.000      | -            | -                | -                | -         |   -14.83 | decenty, felps, HEN1, noway, VINI |
|           93 |      227 | 2024-06-09 | RED Canids        | W   | 1.000      | 0.450        | -                | 0.693 (0.312)    | -         |     7.82 | decenty, felps, HEN1, noway, VINI |
|           92 |      243 | 2024-06-09 | ODDIK             | W   | 1.000      | -            | -                | -                | -         |     1.51 | decenty, felps, HEN1, noway, VINI |
|           91 |      288 | 2024-06-08 | 9z                | W   | 1.000      | 0.450        | 0.525 (0.236)    | 0.749 (0.337)    | -         |    19.41 | decenty, felps, HEN1, noway, VINI |
|           90 |      348 | 2024-06-07 | Galorys           | W   | 1.000      | -            | -                | -                | -         |     1.01 | decenty, felps, HEN1, noway, VINI |
|           89 |      402 | 2024-06-06 | RED Canids        | L   | 1.000      | -            | -                | -                | -         |   -23.52 | decenty, felps, HEN1, noway, VINI |
|           88 |      471 | 2024-06-05 | Sharks            | W   | 1.000      | -            | -                | -                | -         |     3.35 | decenty, felps, HEN1, noway, VINI |
|           87 |      842 | 2024-05-22 | 9z                | W   | 1.000      | 0.450        | 0.525 (0.236)    | 0.749 (0.337)    | -         |    16.84 | decenty, felps, HEN1, noway, VINI |
|           86 |      844 | 2024-05-22 | 9z                | W   | 1.000      | 0.450        | 0.525 (0.236)    | 0.749 (0.337)    | -         |    18.38 | decenty, felps, HEN1, noway, VINI |
|           85 |      854 | 2024-05-22 | Sharks            | L   | 1.000      | -            | -                | -                | -         |   -28.30 | decenty, felps, HEN1, noway, VINI |
|           84 |      858 | 2024-05-22 | Sharks            | W   | 1.000      | -            | -                | -                | -         |     2.84 | decenty, felps, HEN1, noway, VINI |
|           83 |      895 | 2024-05-21 | BESTIA            | L   | 1.000      | -            | -                | -                | -         |   -28.72 | decenty, felps, HEN1, noway, VINI |
|           82 |      897 | 2024-05-21 | BESTIA            | L   | 1.000      | -            | -                | -                | -         |   -29.45 | decenty, felps, HEN1, noway, VINI |
|           81 |     1054 | 2024-05-16 | 9z                | W   | 0.983      | 0.384        | 0.525 (0.198)    | 0.749 (0.283)    | -         |    18.22 | decenty, felps, HEN1, noway, VINI |
|           80 |     1111 | 2024-05-15 | Fluxo             | W   | 0.976      | 0.384        | 0.159 (0.060)    | -                | -         |     4.62 | decenty, felps, HEN1, noway, VINI |
|           79 |     1145 | 2024-05-14 | W7M               | W   | 0.971      | -            | -                | -                | -         |     0.60 | decenty, felps, HEN1, noway, VINI |
|           78 |     1148 | 2024-05-14 | W7M               | W   | 0.971      | -            | -                | -                | -         |     0.61 | decenty, felps, HEN1, noway, VINI |
|           77 |     1157 | 2024-05-14 | BESTIA            | W   | 0.970      | -            | -                | -                | -         |     1.64 | decenty, felps, HEN1, noway, VINI |
|           76 |     1198 | 2024-05-13 | KRÜ               | W   | 0.962      | -            | -                | -                | -         |     0.89 | decenty, felps, HEN1, noway, VINI |
|           75 |     1267 | 2024-05-10 | BESTIA            | L   | 0.943      | -            | -                | -                | -         |   -28.39 | decenty, felps, HEN1, noway, VINI |
|           74 |     1325 | 2024-05-07 | ODDIK             | W   | 0.924      | -            | -                | -                | -         |     1.47 | decenty, felps, HEN1, noway, VINI |
|           73 |     1365 | 2024-05-05 | inSanitY          | W   | 0.909      | -            | -                | -                | -         |     0.71 | decenty, felps, HEN1, noway, VINI |
|           72 |     1563 | 2024-04-26 | SAW               | L   | 0.849      | -            | -                | -                | -         |   -20.01 | decenty, felps, HEN1, noway, VINI |
|           71 |     1606 | 2024-04-24 | Eternal Fire      | L   | 0.836      | -            | -                | -                | -         |    -4.49 | decenty, felps, HEN1, noway, VINI |
|           70 |     1625 | 2024-04-23 | FaZe              | L   | 0.829      | -            | -                | -                | -         |    -1.93 | decenty, felps, HEN1, noway, VINI |
|           69 |     1677 | 2024-04-20 | paiN              | L   | 0.810      | -            | -                | -                | -         |   -10.65 | decenty, felps, HEN1, noway, VINI |
|           68 |     1708 | 2024-04-20 | paiN              | W   | 0.806      | 0.589        | 0.492 (0.233)    | 0.775 (0.368)    | 1 (0.806) |    14.59 | decenty, felps, HEN1, noway, VINI |
|           67 |     1722 | 2024-04-19 | paiN              | L   | 0.803      | -            | -                | -                | -         |   -10.40 | decenty, felps, HEN1, noway, VINI |
|           66 |     1759 | 2024-04-18 | MIBR              | L   | 0.798      | -            | -                | -                | -         |    -9.46 | decenty, felps, HEN1, noway, VINI |
|           65 |     1762 | 2024-04-18 | 9z                | W   | 0.797      | 0.589        | 0.525 (0.246)    | 0.749 (0.352)    | 1 (0.797) |    15.89 | decenty, felps, HEN1, noway, VINI |
|           64 |     1763 | 2024-04-18 | Fluxo             | W   | 0.797      | -            | -                | -                | -         |     2.45 | decenty, felps, HEN1, noway, VINI |
|           63 |     1774 | 2024-04-18 | Metizport         | W   | 0.796      | 0.589        | -                | 0.587 (0.275)    | 1 (0.796) |     1.72 | decenty, felps, HEN1, noway, VINI |
|           62 |     1877 | 2024-04-15 | MIBR              | L   | 0.777      | -            | -                | -                | -         |    -9.73 | decenty, felps, HEN1, noway, VINI |
|           61 |     1892 | 2024-04-14 | paiN              | W   | 0.769      | 0.435        | 0.492 (0.164)    | 0.775 (0.259)    | -         |    14.32 | decenty, felps, HEN1, noway, VINI |
|           60 |     1902 | 2024-04-13 | RED Canids        | W   | 0.764      | -            | -                | -                | -         |     2.95 | decenty, felps, HEN1, noway, VINI |
|           59 |     1938 | 2024-04-11 | adalYamigos       | W   | 0.751      | -            | -                | -                | -         |     0.34 | decenty, felps, HEN1, noway, VINI |
|           58 |     1948 | 2024-04-11 | paiN              | L   | 0.749      | -            | -                | -                | -         |    -9.23 | decenty, felps, HEN1, noway, VINI |
|           57 |     1975 | 2024-04-10 | Fluxo             | L   | 0.744      | -            | -                | -                | -         |   -21.38 | decenty, felps, HEN1, noway, VINI |
|           56 |     1979 | 2024-04-10 | Fluxo             | W   | 0.744      | 0.450        | 0.159 (0.053)    | -                | -         |     1.92 | decenty, felps, HEN1, noway, VINI |
|           55 |     1995 | 2024-04-10 | MIBR              | L   | 0.742      | -            | -                | -                | -         |   -10.78 | decenty, felps, HEN1, noway, VINI |
|           54 |     2041 | 2024-04-09 | Solid             | W   | 0.736      | -            | -                | -                | -         |     0.58 | decenty, felps, HEN1, noway, VINI |
|           53 |     2046 | 2024-04-09 | Solid             | W   | 0.736      | -            | -                | -                | -         |     0.58 | decenty, felps, HEN1, noway, VINI |
|           52 |     2051 | 2024-04-09 | paiN              | W   | 0.735      | -            | -                | -                | -         |    13.43 | decenty, felps, HEN1, noway, VINI |
|           51 |     2105 | 2024-04-07 | RED Canids        | W   | 0.724      | -            | -                | -                | -         |     2.31 | decenty, felps, HEN1, noway, VINI |
|           50 |     2108 | 2024-04-07 | FURIA Academy     | W   | 0.723      | -            | -                | -                | -         |     0.10 | decenty, felps, HEN1, noway, VINI |
|           49 |     2166 | 2024-04-04 | ODDIK             | W   | 0.704      | -            | -                | -                | -         |     0.86 | decenty, felps, HEN1, noway, VINI |
|           48 |     2171 | 2024-04-04 | ODDIK             | W   | 0.704      | -            | -                | -                | -         |     0.87 | decenty, felps, HEN1, noway, VINI |
|           47 |     2174 | 2024-04-04 | BESTIA            | W   | 0.703      | -            | -                | -                | -         |     0.99 | decenty, felps, HEN1, noway, VINI |
|           46 |     2204 | 2024-04-03 | Case              | W   | 0.697      | -            | -                | -                | -         |     0.49 | decenty, felps, HEN1, noway, VINI |
|           45 |     2207 | 2024-04-03 | Case              | W   | 0.697      | -            | -                | -                | -         |     0.50 | decenty, felps, HEN1, noway, VINI |
|           44 |     2412 | 2024-03-23 | FaZe              | L   | 0.621      | -            | -                | -                | -         |    -1.80 | decenty, felps, HEN1, noway, VINI |
|           43 |     2425 | 2024-03-22 | Vitality          | L   | 0.614      | -            | -                | -                | -         |    -1.66 | decenty, felps, HEN1, noway, VINI |
|           42 |     2435 | 2024-03-21 | Spirit            | L   | 0.610      | -            | -                | -                | -         |    -1.31 | decenty, felps, HEN1, noway, VINI |
|           41 |     2453 | 2024-03-21 | Virtus.pro        | W   | 0.608      | 1.000        | 0.345 (0.210)    | 0.427 (0.260)    | 1 (0.608) |    15.45 | decenty, felps, HEN1, noway, VINI |
|           40 |     2472 | 2024-03-20 | GamerLegion       | W   | 0.602      | -            | -                | -                | 1 (0.602) |     1.86 | decenty, felps, HEN1, noway, VINI |
|           39 |     2485 | 2024-03-19 | Gaimin Gladiators | L   | 0.596      | -            | -                | -                | -         |   -15.73 | decenty, felps, HEN1, noway, VINI |
|           38 |     2501 | 2024-03-18 | Apeks             | W   | 0.587      | -            | -                | -                | 1 (0.587) |     1.86 | decenty, felps, HEN1, noway, VINI |
|           37 |     2519 | 2024-03-17 | HEROIC            | L   | 0.583      | -            | -                | -                | -         |    -3.96 | decenty, felps, HEN1, noway, VINI |
|           36 |     2528 | 2024-03-17 | ENCE              | W   | 0.581      | -            | -                | -                | 1 (0.581) |     9.40 | decenty, felps, HEN1, noway, VINI |
|           35 |     2758 | 2024-03-07 | Monte             | L   | 0.517      | -            | -                | -                | -         |   -12.90 | decenty, felps, HEN1, noway, VINI |
|           34 |     2876 | 2024-03-03 | paiN              | W   | 0.489      | -            | -                | -                | 1 (0.489) |     9.08 | decenty, felps, HEN1, noway, VINI |
|           33 |     2907 | 2024-03-02 | M80               | W   | 0.482      | -            | -                | -                | 1 (0.482) |     2.94 | decenty, felps, HEN1, noway, VINI |
|           32 |     2920 | 2024-03-01 | NRG               | W   | 0.477      | -            | -                | -                | 1 (0.477) |     0.43 | decenty, felps, HEN1, noway, VINI |
|           31 |     3011 | 2024-02-25 | Fluxo             | L   | 0.443      | -            | -                | -                | -         |   -13.00 | decenty, felps, HEN1, noway, VINI |
|           30 |     3043 | 2024-02-24 | BESTIA            | W   | 0.436      | -            | -                | -                | -         |     0.77 | decenty, felps, HEN1, noway, VINI |
|           29 |     3070 | 2024-02-22 | BESTIA            | L   | 0.424      | -            | -                | -                | -         |   -12.69 | decenty, felps, HEN1, noway, VINI |
|           28 |     3080 | 2024-02-22 | FURIA             | L   | 0.423      | -            | -                | -                | -         |    -5.33 | decenty, felps, HEN1, noway, VINI |
|           27 |     3095 | 2024-02-21 | ex-2GAME          | W   | 0.417      | -            | -                | -                | -         |     0.12 | decenty, felps, HEN1, noway, VINI |
|           26 |     3099 | 2024-02-21 | ex-2GAME          | W   | 0.417      | -            | -                | -                | -         |     0.12 | decenty, felps, HEN1, noway, VINI |
|           25 |     3108 | 2024-02-21 | LA RUGONETA       | W   | 0.415      | -            | -                | -                | -         |     0.06 | decenty, felps, HEN1, noway, VINI |
|           24 |     3200 | 2024-02-17 | adalYamigos       | W   | 0.390      | -            | -                | -                | -         |     0.09 | decenty, felps, HEN1, noway, VINI |
|           23 |     3229 | 2024-02-16 | Galorys           | W   | 0.383      | -            | -                | -                | -         |     0.23 | decenty, felps, HEN1, noway, VINI |
|           22 |     3232 | 2024-02-16 | Galorys           | W   | 0.382      | -            | -                | -                | -         |     0.23 | decenty, felps, HEN1, noway, VINI |
|           21 |     3249 | 2024-02-15 | 9z                | W   | 0.378      | -            | -                | -                | -         |     7.75 | decenty, felps, HEN1, noway, VINI |
|           20 |     3251 | 2024-02-15 | Fluxo             | W   | 0.377      | -            | -                | -                | -         |     0.75 | decenty, felps, HEN1, noway, VINI |
|           19 |     3256 | 2024-02-15 | Solid             | W   | 0.377      | -            | -                | -                | -         |     0.31 | decenty, felps, HEN1, noway, VINI |
|           18 |     3286 | 2024-02-14 | Yawara            | W   | 0.371      | -            | -                | -                | -         |     0.04 | decenty, felps, HEN1, noway, VINI |
|           17 |     3323 | 2024-02-13 | RED Canids        | W   | 0.364      | -            | -                | -                | -         |     1.18 | decenty, felps, HEN1, noway, VINI |
|           16 |     3327 | 2024-02-13 | RED Canids        | L   | 0.364      | -            | -                | -                | -         |   -10.38 | decenty, felps, HEN1, noway, VINI |
|           15 |     3330 | 2024-02-13 | Solid             | W   | 0.364      | -            | -                | -                | -         |     0.30 | decenty, felps, HEN1, noway, VINI |
|           14 |     3427 | 2024-02-04 | 9z                | W   | 0.304      | -            | -                | -                | -         |     6.30 | decenty, felps, HEN1, noway, VINI |
|           13 |     3450 | 2024-02-03 | MIBR              | W   | 0.297      | -            | -                | -                | -         |     5.60 | decenty, felps, HEN1, noway, VINI |
|           12 |     3476 | 2024-02-02 | BESTIA            | W   | 0.291      | -            | -                | -                | -         |     0.48 | decenty, felps, HEN1, noway, VINI |
|           11 |     3480 | 2024-02-02 | 9z                | L   | 0.291      | -            | -                | -                | -         |    -3.10 | decenty, felps, HEN1, noway, VINI |
|           10 |     3482 | 2024-02-02 | BESTIA            | W   | 0.290      | -            | -                | -                | -         |     0.46 | decenty, felps, HEN1, noway, VINI |
|            9 |     3646 | 2024-01-24 | 9z                | W   | 0.231      | -            | -                | -                | -         |     4.89 | decenty, felps, HEN1, noway, VINI |
|            8 |     3666 | 2024-01-23 | BESTIA            | W   | 0.224      | -            | -                | -                | -         |     0.37 | decenty, felps, HEN1, noway, VINI |
|            7 |     3686 | 2024-01-22 | Hype              | W   | 0.218      | -            | -                | -                | -         |     0.01 | decenty, felps, HEN1, noway, VINI |
|            6 |     3720 | 2024-01-21 | paiN              | W   | 0.210      | -            | -                | -                | -         |     4.06 | decenty, felps, HEN1, noway, VINI |
|            5 |     3759 | 2024-01-20 | Fluxo             | W   | 0.203      | -            | -                | -                | -         |     0.41 | decenty, felps, HEN1, noway, VINI |
|            4 |     3802 | 2024-01-19 | BESTIA            | L   | 0.198      | -            | -                | -                | -         |    -5.91 | decenty, felps, HEN1, noway, VINI |
|            3 |     3811 | 2024-01-19 | Galorys           | W   | 0.196      | -            | -                | -                | -         |     0.14 | decenty, felps, HEN1, noway, VINI |
|            2 |     3969 | 2024-01-16 | Legacy            | L   | 0.177      | -            | -                | -                | -         |    -5.22 | decenty, felps, HEN1, noway, VINI |
|            1 |     4014 | 2024-01-15 | Corinthians       | W   | 0.171      | -            | -                | -                | -         |     0.06 | decenty, felps, HEN1, noway, VINI |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($122,042.46)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.41) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      1.000 | $1,500.00      | $1,500.00       |
| 2024-06-10 |      1.000 | $2,500.00      | $2,500.00       |
| 2024-06-09 |      1.000 | $20,000.00     | $20,000.00      |
| 2024-05-16 |      0.983 | $20,000.00     | $19,660.27      |
| 2024-05-12 |      0.956 | $3,500.00      | $3,344.35       |
| 2024-04-20 |      0.810 | $50,000.00     | $40,523.69      |
| 2024-04-15 |      0.777 | $15,000.00     | $11,654.20      |
| 2024-03-31 |      0.676 | $20,000.00     | $13,526.23      |
| 2024-03-10 |      0.537 | $5,000.00      | $2,683.33       |
| 2024-02-25 |      0.443 | $15,000.00     | $6,650.39       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
