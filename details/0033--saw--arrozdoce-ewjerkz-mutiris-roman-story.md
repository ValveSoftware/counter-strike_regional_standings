### Roster Details<br />
Team Name: SAW<br />
Roster: arrozdoce, ewjerkz, MUTiRiS, roman, story<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [33](../standings_global.md)<br />
Regional Rank: [23]( ../standings_europe.md)<br />
Final Rank Value:  1257.9<br />
<br />
Final Rank Value (1257.9) = Starting Rank Value (1316.6) + Head To Head Adjustments (-58.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.540[<sup>1</sup>](#table2)
- Bounty Collected: 0.581[<sup>2</sup>](#table1)
- Opponent Network: 0.265[<sup>2</sup>](#table1)
- LAN Wins: 0.419[<sup>2</sup>](#table1)

The average of these factors is 0.451<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1316.6
- 400 + ( ( 0.451 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 1316.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           54 |      138 | 2024-06-13 | Astralis          | L   | 1.000      | -            | -                | -                | -         |    -1.21 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           53 |      164 | 2024-06-12 | FaZe              | L   | 1.000      | -            | -                | -                | -         |    -0.66 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           52 |      204 | 2024-06-10 | 3DMAX             | L   | 1.000      | -            | -                | -                | -         |   -19.40 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           51 |      213 | 2024-06-10 | RUSH B            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.90 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           50 |      216 | 2024-06-10 | Aurora            | W   | 1.000      | 0.143        | 0.526 (0.075)    | 0.874 (0.125)    | 0 (0.000) |    18.71 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           49 |      252 | 2024-06-09 | SINNERS           | L   | 1.000      | -            | -                | -                | -         |   -24.03 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           48 |      259 | 2024-06-09 | Monte             | W   | 1.000      | 0.143        | -                | 0.674 (0.096)    | 0 (0.000) |    12.50 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           47 |      264 | 2024-06-09 | 9 Pandas          | L   | 1.000      | -            | -                | -                | -         |   -19.28 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           46 |      272 | 2024-06-09 | PARIVISION        | W   | 1.000      | -            | -                | -                | -         |     6.69 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           45 |      481 | 2024-06-05 | Sangal            | L   | 1.000      | -            | -                | -                | -         |   -20.97 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           44 |      536 | 2024-06-04 | RUSH B            | L   | 1.000      | -            | -                | -                | -         |   -29.02 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           43 |      585 | 2024-06-02 | Zero Tenacity     | L   | 1.000      | -            | -                | -                | -         |   -23.36 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           42 |      654 | 2024-05-31 | Sangal            | W   | 1.000      | 0.143        | 0.216 (0.031)    | 0.884 (0.126)    | -         |     7.58 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           41 |      660 | 2024-05-31 | fnatic            | L   | 1.000      | -            | -                | -                | -         |   -12.77 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           40 |      663 | 2024-05-31 | FAVBET            | W   | 1.000      | -            | -                | -                | -         |     1.55 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           39 |     1035 | 2024-05-17 | Aurora            | L   | 0.988      | -            | -                | -                | -         |    -9.81 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           38 |     1056 | 2024-05-16 | Eternal Fire      | L   | 0.983      | -            | -                | -                | -         |    -2.84 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           37 |     1072 | 2024-05-16 | Aurora            | W   | 0.981      | 0.769        | 0.526 (0.397)    | 0.874 (0.659)    | -         |    21.84 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           36 |     1516 | 2024-04-28 | Virtus.pro        | L   | 0.862      | -            | -                | -                | -         |    -2.76 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           35 |     1531 | 2024-04-27 | Eternal Fire      | W   | 0.856      | 0.889        | 1.000 (0.761)    | 0.485 (0.369)    | 1 (0.856) |    25.00 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           34 |     1563 | 2024-04-26 | Imperial          | W   | 0.849      | 0.889        | 0.406 (0.306)    | 0.694 (0.524)    | 1 (0.849) |    20.01 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           33 |     1612 | 2024-04-24 | Virtus.pro        | L   | 0.835      | -            | -                | -                | -         |    -2.17 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           32 |     1634 | 2024-04-23 | 3DMAX             | L   | 0.828      | -            | -                | -                | -         |   -15.76 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           31 |     1867 | 2024-04-16 | Sampi             | L   | 0.781      | -            | -                | -                | -         |   -21.39 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           30 |     1985 | 2024-04-10 | 9 Pandas          | W   | 0.743      | 0.500        | 0.114 (0.042)    | 0.663 (0.246)    | -         |     5.44 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           29 |     2037 | 2024-04-09 | 3DMAX             | L   | 0.737      | -            | -                | -                | -         |   -15.23 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           28 |     2147 | 2024-04-05 | PGE Turow         | W   | 0.707      | -            | -                | -                | -         |     0.60 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           27 |     2181 | 2024-04-04 | Betera            | W   | 0.702      | -            | -                | -                | -         |     0.73 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           26 |     2224 | 2024-04-03 | PERA              | W   | 0.695      | 0.500        | -                | 0.455 (0.158)    | -         |     2.10 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           25 |     2470 | 2024-03-20 | FURIA             | L   | 0.603      | -            | -                | -                | -         |    -3.39 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           24 |     2487 | 2024-03-19 | paiN              | L   | 0.595      | -            | -                | -                | -         |    -3.90 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           23 |     2495 | 2024-03-18 | Cloud9            | L   | 0.589      | -            | -                | -                | -         |    -9.48 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           22 |     2509 | 2024-03-17 | GamerLegion       | W   | 0.583      | -            | -                | -                | 1 (0.583) |     3.64 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           21 |     2526 | 2024-03-17 | KOI               | W   | 0.582      | -            | -                | -                | 1 (0.582) |     5.11 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           20 |     2614 | 2024-03-13 | System5           | W   | 0.557      | -            | -                | -                | -         |     0.21 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           19 |     2698 | 2024-03-10 | OG                | W   | 0.536      | 0.535        | 0.235 (0.067)    | -                | -         |     5.04 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           18 |     2739 | 2024-03-08 | Cloud9            | W   | 0.523      | 0.535        | 0.146 (0.041)    | -                | -         |     8.31 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           17 |     2773 | 2024-03-07 | Liquid            | W   | 0.516      | 0.535        | 0.498 (0.137)    | 0.629 (0.174)    | -         |    13.61 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           16 |     2829 | 2024-03-05 | Monte             | W   | 0.503      | 0.500        | 0.189 (0.048)    | 0.674 (0.169)    | -         |     7.32 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           15 |     2993 | 2024-02-26 | RUSH B            | W   | 0.450      | -            | -                | -                | -         |     0.90 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           14 |     3207 | 2024-02-17 | fnatic            | W   | 0.388      | -            | -                | -                | 1 (0.388) |     9.69 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           13 |     3231 | 2024-02-16 | Enterprise        | W   | 0.383      | -            | -                | -                | 1 (0.383) |     2.02 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           12 |     3263 | 2024-02-15 | Ninjas in Pyjamas | W   | 0.375      | -            | -                | -                | 1 (0.375) |     0.47 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           11 |     3301 | 2024-02-14 | 9 Pandas          | L   | 0.369      | -            | -                | -                | -         |    -8.33 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           10 |     3312 | 2024-02-14 | Virtus.pro        | L   | 0.367      | -            | -                | -                | -         |    -0.90 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|            9 |     3437 | 2024-02-04 | Rhyno             | W   | 0.302      | -            | -                | -                | -         |     1.55 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|            8 |     3467 | 2024-02-03 | KOI               | W   | 0.295      | -            | -                | -                | -         |     3.03 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|            7 |     3522 | 2024-02-01 | AL QATRAO         | W   | 0.283      | -            | -                | -                | -         |     0.34 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|            6 |     3523 | 2024-02-01 | Agency            | W   | 0.282      | -            | -                | -                | -         |     0.05 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|            5 |     3528 | 2024-02-01 | AL QATRAO         | L   | 0.282      | -            | -                | -                | -         |    -8.55 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|            4 |     3767 | 2024-01-20 | 9 Pandas          | W   | 0.202      | -            | -                | -                | -         |     1.73 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|            3 |     3824 | 2024-01-19 | Zero Tenacity     | W   | 0.195      | -            | -                | -                | -         |     1.44 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|            2 |     3874 | 2024-01-18 | Virtus.pro        | L   | 0.189      | -            | -                | -                | -         |    -0.43 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|            1 |     3881 | 2024-01-18 | fnatic            | W   | 0.189      | -            | -                | -                | -         |     4.90 | arrozdoce, ewjerkz, MUTiRiS, roman, story |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($42,225.82)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.14) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      1.000 | $10,000.00     | $10,000.00      |
| 2024-06-09 |      1.000 | $4,000.00      | $4,000.00       |
| 2024-05-12 |      0.956 | $12,000.00     | $11,466.34      |
| 2024-03-20 |      0.603 | $10,000.00     | $6,026.17       |
| 2024-03-10 |      0.537 | $20,000.00     | $10,733.30      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
