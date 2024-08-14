### Roster Details<br />
Team Name: RED Canids<br />
Roster: coldzera, dav1deuS, HEN1, nython, venomzera<br />
Global Rank: [34](../standings_global.md)<br />
<br />
Region: [Americas]( ../standings_americas.md)<br />
Regional Rank: [9]( ../standings_americas.md)<br />
<br />
Final Rank Value:  1123.4<br />
<br />
Final Rank Value (1123.4) = Starting Rank Value (1038.0) + Head To Head Adjustments (85.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.463[<sup>1</sup>](#table2)
- Bounty Collected: 0.471[<sup>2</sup>](#table1)
- Opponent Network: 0.260[<sup>2</sup>](#table1)
- LAN Wins: 0.099[<sup>2</sup>](#table1)

The average of these factors is 0.323<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1038.0
- 400 + ( ( 0.323 - 0.000 ) / ( 0.811 - 0.000 ) ) * 1600 = 1038.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           90 |      209 | 2024-08-07 | Case            | W   | 1.000      | 0.450        | -                | 0.768 (0.346)    | 0 (0.000) |     6.55 | coldzera, dav1deuS, HEN1, nython, venomzera    |
|           89 |      211 | 2024-08-07 | Case            | W   | 1.000      | 0.450        | -                | 0.768 (0.346)    | 0 (0.000) |     6.95 | coldzera, dav1deuS, HEN1, nython, venomzera    |
|           88 |      321 | 2024-08-04 | ODDIK           | L   | 1.000      | -            | -                | -                | -         |   -16.60 | coldzera, dav1deuS, HEN1, nython, venomzera    |
|           87 |      324 | 2024-08-04 | BESTIA          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.37 | coldzera, dav1deuS, HEN1, nython, venomzera    |
|           86 |      353 | 2024-08-03 | ODDIK           | L   | 1.000      | -            | -                | -                | -         |   -17.69 | coldzera, dav1deuS, HEN1, nython, venomzera    |
|           85 |      362 | 2024-08-03 | Vikings KR      | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.80 | coldzera, dav1deuS, HEN1, nython, venomzera    |
|           84 |      588 | 2024-07-28 | MIBR            | L   | 1.000      | -            | -                | -                | -         |    -7.09 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           83 |      594 | 2024-07-28 | paiN            | L   | 1.000      | -            | -                | -                | -         |    -5.33 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           82 |      648 | 2024-07-26 | ODDIK           | L   | 1.000      | -            | -                | -                | -         |   -21.88 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           81 |      713 | 2024-07-24 | Fluxo           | W   | 1.000      | -            | -                | -                | 0 (0.000) |    15.54 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           80 |      717 | 2024-07-24 | ODDIK           | W   | 1.000      | -            | -                | -                | 0 (0.000) |    10.39 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           79 |      746 | 2024-07-23 | KRÜ             | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.38 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           78 |      754 | 2024-07-23 | LaChampionsLiga | W   | 1.000      | -            | -                | -                | 0 (0.000) |     0.99 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           77 |      790 | 2024-07-22 | paiN Academy    | W   | 1.000      | -            | -                | -                | -         |     0.49 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           76 |      813 | 2024-07-21 | BESTIA          | L   | 1.000      | -            | -                | -                | -         |   -23.60 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           75 |      844 | 2024-07-20 | Case            | W   | 1.000      | 0.384        | -                | 0.768 (0.295)    | -         |     5.82 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           74 |      880 | 2024-07-19 | Intense         | W   | 1.000      | -            | -                | -                | -         |     3.54 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           73 |      985 | 2024-07-17 | Hype            | W   | 1.000      | 0.450        | -                | 0.469 (0.211)    | -         |     5.90 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           72 |      991 | 2024-07-17 | Hype            | W   | 1.000      | 0.450        | -                | 0.469 (0.211)    | -         |     6.24 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           71 |     1043 | 2024-07-16 | Sharks          | W   | 1.000      | 0.450        | -                | 0.533 (0.240)    | -         |     8.03 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           70 |     1051 | 2024-07-16 | Sharks          | W   | 1.000      | 0.450        | -                | 0.533 (0.240)    | -         |     8.60 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           69 |     1147 | 2024-07-13 | Legacy          | L   | 0.987      | -            | -                | -                | -         |   -19.58 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           68 |     1173 | 2024-07-11 | KRÜ             | W   | 0.973      | -            | -                | -                | -         |     5.30 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           67 |     1208 | 2024-07-09 | Bounty Hunters  | W   | 0.961      | -            | -                | -                | -         |     7.43 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           66 |     1231 | 2024-07-08 | SPORT           | W   | 0.953      | -            | -                | -                | -         |     2.68 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           65 |     1347 | 2024-06-15 | fnatic          | L   | 0.802      | -            | -                | -                | -         |    -4.66 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           64 |     1382 | 2024-06-14 | KOI             | L   | 0.795      | -            | -                | -                | -         |   -15.69 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           63 |     1388 | 2024-06-14 | fnatic          | W   | 0.794      | 0.548        | 0.352 (0.153)    | 0.639 (0.278)    | 1 (0.794) |    20.35 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           62 |     1534 | 2024-06-09 | BESTIA          | L   | 0.761      | -            | -                | -                | -         |   -15.98 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           61 |     1538 | 2024-06-09 | Imperial        | L   | 0.761      | -            | -                | -                | -         |    -8.43 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           60 |     1673 | 2024-06-07 | Intense         | W   | 0.746      | -            | -                | -                | -         |     2.32 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           59 |     1713 | 2024-06-06 | Imperial        | W   | 0.741      | 0.450        | 0.213 (0.071)    | 0.653 (0.218)    | -         |    14.81 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           58 |     1781 | 2024-06-05 | 9z              | W   | 0.735      | 0.450        | 0.408 (0.135)    | -                | -         |    20.66 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           57 |     2197 | 2024-05-21 | Sharks          | L   | 0.634      | -            | -                | -                | -         |   -13.86 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           56 |     2201 | 2024-05-21 | Sharks          | W   | 0.634      | -            | -                | -                | -         |     6.10 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           55 |     2231 | 2024-05-20 | Fluxo           | L   | 0.628      | -            | -                | -                | -         |   -12.04 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           54 |     2233 | 2024-05-20 | Fluxo           | W   | 0.627      | 0.450        | 0.105 (0.030)    | -                | -         |     7.81 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           53 |     2262 | 2024-05-19 | 9z              | W   | 0.621      | 0.371        | 0.408 (0.094)    | -                | -         |    17.68 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           52 |     2287 | 2024-05-18 | ODDIK           | W   | 0.614      | -            | -                | -                | -         |     6.34 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           51 |     2358 | 2024-05-16 | Fluxo           | W   | 0.601      | 0.371        | 0.105 (0.023)    | -                | -         |     8.40 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           50 |     2401 | 2024-05-15 | 9z              | L   | 0.595      | -            | -                | -                | -         |    -1.49 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           49 |     2403 | 2024-05-15 | 9z              | W   | 0.594      | 0.450        | 0.408 (0.109)    | -                | -         |    17.41 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           48 |     2461 | 2024-05-14 | Corinthians     | W   | 0.588      | -            | -                | -                | -         |     2.21 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           47 |     2465 | 2024-05-14 | Corinthians     | W   | 0.587      | -            | -                | -                | -         |     2.26 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           46 |     2479 | 2024-05-14 | BESTIA          | W   | 0.586      | 0.371        | 0.112 (0.024)    | -                | -         |     6.52 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           45 |     2496 | 2024-05-13 | Sharks          | L   | 0.581      | -            | -                | -                | -         |   -11.84 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           44 |     2516 | 2024-05-12 | Vikings KR      | W   | 0.574      | -            | -                | -                | -         |     3.36 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           43 |     2525 | 2024-05-12 | FURIA Academy   | W   | 0.573      | -            | -                | -                | -         |     0.82 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           42 |     2579 | 2024-05-10 | paiN            | L   | 0.559      | -            | -                | -                | -         |    -1.38 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           41 |     2596 | 2024-05-09 | Intense         | W   | 0.554      | -            | -                | -                | -         |     2.29 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           40 |     2614 | 2024-05-08 | paiN            | L   | 0.548      | -            | -                | -                | -         |    -1.25 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           39 |     2616 | 2024-05-08 | paiN            | W   | 0.548      | 0.450        | 0.369 (0.091)    | 0.874 (0.215)    | -         |    16.14 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           38 |     2617 | 2024-05-08 | Solid           | L   | 0.547      | -            | -                | -                | -         |   -13.22 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           37 |     2661 | 2024-05-06 | Intense         | W   | 0.532      | -            | -                | -                | -         |     2.23 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           36 |     2891 | 2024-04-25 | BESTIA          | W   | 0.461      | 0.450        | 0.112 (0.023)    | -                | -         |     4.73 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           35 |     2893 | 2024-04-25 | BESTIA          | W   | 0.461      | -            | -                | -                | -         |     4.90 | coldzera, dav1deuS, hardzao, nython, venomzera |
|           34 |     3120 | 2024-04-17 | MIBR            | L   | 0.408      | -            | -                | -                | -         |    -1.61 | dav1deuS, hardzao, nython, righi, venomzera    |
|           33 |     3128 | 2024-04-17 | O PLANO         | W   | 0.407      | -            | -                | -                | -         |     0.65 | dav1deuS, hardzao, nython, righi, venomzera    |
|           32 |     3162 | 2024-04-16 | LaChampionsLiga | W   | 0.401      | -            | -                | -                | -         |     0.64 | dav1deuS, hardzao, nython, righi, venomzera    |
|           31 |     3211 | 2024-04-13 | Imperial        | L   | 0.381      | -            | -                | -                | -         |    -3.74 | dav1deuS, hardzao, nython, righi, venomzera    |
|           30 |     3230 | 2024-04-12 | W7M             | W   | 0.373      | -            | -                | -                | -         |     2.40 | dav1deuS, hardzao, nython, righi, venomzera    |
|           29 |     3285 | 2024-04-10 | 2GAME           | W   | 0.361      | -            | -                | -                | -         |     1.08 | dav1deuS, hardzao, nython, righi, venomzera    |
|           28 |     3289 | 2024-04-10 | 2GAME           | W   | 0.361      | -            | -                | -                | -         |     1.09 | dav1deuS, hardzao, nython, righi, venomzera    |
|           27 |     3292 | 2024-04-10 | paiN            | L   | 0.360      | -            | -                | -                | -         |    -0.55 | dav1deuS, hardzao, nython, righi, venomzera    |
|           26 |     3339 | 2024-04-09 | W7M             | W   | 0.354      | -            | -                | -                | -         |     2.34 | dav1deuS, hardzao, nython, righi, venomzera    |
|           25 |     3344 | 2024-04-09 | W7M             | W   | 0.354      | -            | -                | -                | -         |     2.39 | dav1deuS, hardzao, nython, righi, venomzera    |
|           24 |     3345 | 2024-04-09 | MIBR            | L   | 0.354      | -            | -                | -                | -         |    -1.51 | dav1deuS, hardzao, nython, righi, venomzera    |
|           23 |     3378 | 2024-04-08 | BESTIA          | W   | 0.348      | -            | -                | -                | -         |     4.17 | dav1deuS, hardzao, nython, righi, venomzera    |
|           22 |     3386 | 2024-04-08 | Bounty Hunters  | W   | 0.346      | -            | -                | -                | -         |     2.95 | dav1deuS, hardzao, nython, righi, venomzera    |
|           21 |     3414 | 2024-04-07 | Imperial        | L   | 0.341      | -            | -                | -                | -         |    -3.25 | dav1deuS, hardzao, nython, righi, venomzera    |
|           20 |     3433 | 2024-04-06 | W7M             | L   | 0.333      | -            | -                | -                | -         |    -8.34 | dav1deuS, hardzao, nython, righi, venomzera    |
|           19 |     3474 | 2024-04-04 | Case            | L   | 0.321      | -            | -                | -                | -         |    -7.22 | dav1deuS, hardzao, nython, righi, venomzera    |
|           18 |     3477 | 2024-04-04 | Case            | W   | 0.321      | -            | -                | -                | -         |     2.91 | dav1deuS, hardzao, nython, righi, venomzera    |
|           17 |     3491 | 2024-04-04 | Fluxo           | W   | 0.319      | -            | -                | -                | -         |     2.08 | dav1deuS, hardzao, nython, righi, venomzera    |
|           16 |     3514 | 2024-04-03 | ODDIK           | W   | 0.314      | -            | -                | -                | -         |     4.54 | dav1deuS, hardzao, nython, righi, venomzera    |
|           15 |     3517 | 2024-04-03 | ODDIK           | W   | 0.314      | -            | -                | -                | -         |     4.66 | dav1deuS, hardzao, nython, righi, venomzera    |
|           14 |     3801 | 2024-03-18 | ODDIK           | W   | 0.207      | -            | -                | -                | -         |     3.15 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           13 |     3844 | 2024-03-16 | ODDIK           | W   | 0.194      | -            | -                | -                | -         |     2.99 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           12 |     3861 | 2024-03-15 | Case            | W   | 0.187      | -            | -                | -                | -         |     1.89 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           11 |     3894 | 2024-03-14 | Solid           | L   | 0.181      | -            | -                | -                | -         |    -4.93 | dav1deuS, destiny, hardzao, nython, venomzera  |
|           10 |     3902 | 2024-03-14 | Flamengo        | W   | 0.179      | -            | -                | -                | -         |     0.23 | dav1deuS, destiny, hardzao, nython, venomzera  |
|            9 |     3920 | 2024-03-13 | Case            | W   | 0.174      | -            | -                | -                | -         |     1.75 | dav1deuS, destiny, hardzao, nython, venomzera  |
|            8 |     3933 | 2024-03-13 | Galorys         | W   | 0.173      | -            | -                | -                | -         |     1.50 | dav1deuS, destiny, hardzao, nython, venomzera  |
|            7 |     3964 | 2024-03-12 | BESTIA          | W   | 0.166      | -            | -                | -                | -         |     2.30 | dav1deuS, destiny, hardzao, nython, venomzera  |
|            6 |     3982 | 2024-03-11 | Corinthians     | W   | 0.160      | -            | -                | -                | -         |     0.76 | dav1deuS, destiny, hardzao, nython, venomzera  |
|            5 |     4018 | 2024-03-09 | W7M             | W   | 0.148      | -            | -                | -                | -         |     1.04 | dav1deuS, destiny, hardzao, nython, venomzera  |
|            4 |     4065 | 2024-03-07 | VELOX           | W   | 0.134      | -            | -                | -                | -         |     0.12 | dav1deuS, destiny, hardzao, nython, venomzera  |
|            3 |     4182 | 2024-03-03 | ODDIK           | L   | 0.107      | -            | -                | -                | -         |    -1.67 | dav1deuS, destiny, hardzao, nython, venomzera  |
|            2 |     4216 | 2024-03-02 | paiN            | L   | 0.099      | -            | -                | -                | -         |    -0.13 | dav1deuS, destiny, hardzao, nython, venomzera  |
|            1 |     4231 | 2024-03-01 | Wildcard        | W   | 0.094      | -            | -                | -                | 1 (0.094) |     0.94 | dav1deuS, destiny, hardzao, nython, venomzera  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($22,161.19)
- Divide that value by the 5th highest value among all rosters ($320,160.38)
- The final value (0.07) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-14 |      0.993 | $2,000.00      | $1,986.65       |
| 2024-06-16 |      0.808 | $1,500.00      | $1,212.03       |
| 2024-06-10 |      0.768 | $750.00        | $575.86         |
| 2024-06-09 |      0.761 | $11,500.00     | $8,747.97       |
| 2024-05-19 |      0.621 | $10,000.00     | $6,206.87       |
| 2024-03-18 |      0.207 | $3,500.00      | $723.38         |
| 2024-03-14 |      0.181 | $15,000.00     | $2,708.42       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
