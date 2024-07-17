### Roster Details<br />
Team Name: Elevate<br />
Roster: dare, Fr3nk1e, Peeping, shane, snav<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [71](../standings_global.md)<br />
Regional Rank: [18]( ../standings_americas.md)<br />
Final Rank Value:  1020.5<br />
<br />
Final Rank Value (1020.5) = Starting Rank Value (1085.2) + Head To Head Adjustments (-64.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.420[<sup>1</sup>](#table2)
- Bounty Collected: 0.346[<sup>2</sup>](#table1)
- Opponent Network: 0.162[<sup>2</sup>](#table1)
- LAN Wins: 0.348[<sup>2</sup>](#table1)

The average of these factors is 0.319<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1085.2
- 400 + ( ( 0.319 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 1085.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           62 |       19 | 2024-07-16 | Mythic           | W   | 1.000      | 0.477        | -                | 0.341 (0.163)    | 0 (0.000) |     8.21 | dare, Fr3nk1e, Peeping, shane, snav |
|           61 |       26 | 2024-07-16 | Mythic           | W   | 1.000      | 0.477        | -                | 0.341 (0.163)    | 0 (0.000) |     8.80 | dare, Fr3nk1e, Peeping, shane, snav |
|           60 |       72 | 2024-07-15 | LAG              | L   | 1.000      | -            | -                | -                | -         |   -19.93 | dare, dea, Peeping, shane, snav     |
|           59 |       77 | 2024-07-15 | LAG              | L   | 1.000      | -            | -                | -                | -         |   -21.58 | dare, dea, Peeping, shane, snav     |
|           58 |      287 | 2024-06-23 | Locke's Kittens  | W   | 1.000      | -            | -                | -                | 1 (1.000) |     6.75 | dare, dea, Peeping, shane, snav     |
|           57 |      289 | 2024-06-23 | WICKED           | W   | 1.000      | -            | -                | -                | 1 (1.000) |     2.67 | dare, dea, Peeping, shane, snav     |
|           56 |      295 | 2024-06-22 | LOCK IN          | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.87 | dare, dea, Peeping, shane, snav     |
|           55 |      310 | 2024-06-16 | Legacy           | L   | 0.995      | -            | -                | -                | -         |   -11.71 | dare, dea, Peeping, shane, snav     |
|           54 |      333 | 2024-06-15 | BOSS             | W   | 0.990      | 0.371        | 0.022 (0.008)    | 0.345 (0.127)    | 0 (0.000) |     6.93 | dare, dea, Peeping, shane, snav     |
|           53 |      368 | 2024-06-14 | FLUFFY AIMERS    | W   | 0.983      | -            | -                | -                | 0 (0.000) |     3.90 | dare, dea, Peeping, shane, snav     |
|           52 |      646 | 2024-06-07 | Nouns            | L   | 0.935      | -            | -                | -                | -         |   -15.03 | dare, dea, Peeping, shane, snav     |
|           51 |      651 | 2024-06-07 | Nouns            | W   | 0.935      | 0.143        | 0.087 (0.012)    | -                | 0 (0.000) |    14.47 | dare, dea, Peeping, shane, snav     |
|           50 |      655 | 2024-06-07 | Legacy           | L   | 0.934      | -            | -                | -                | -         |   -11.63 | dare, dea, Peeping, shane, snav     |
|           49 |      695 | 2024-06-06 | Nouns            | L   | 0.930      | -            | -                | -                | -         |   -14.84 | dare, dea, Peeping, shane, snav     |
|           48 |      707 | 2024-06-06 | FlyQuest RED     | W   | 0.928      | 0.384        | 0.027 (0.010)    | -                | 0 (0.000) |     5.71 | dare, dea, Peeping, shane, snav     |
|           47 |      764 | 2024-06-05 | Mythic           | W   | 0.923      | 0.477        | -                | 0.341 (0.150)    | 0 (0.000) |     8.03 | dare, dea, Peeping, shane, snav     |
|           46 |      816 | 2024-06-04 | Party Astronauts | L   | 0.917      | -            | -                | -                | -         |   -16.02 | dare, dea, Peeping, shane, snav     |
|           45 |     1127 | 2024-05-22 | NRG              | W   | 0.829      | 0.477        | 0.026 (0.010)    | 0.515 (0.204)    | -         |    10.13 | dare, dea, Peeping, shane, snav     |
|           44 |     1132 | 2024-05-22 | NRG              | W   | 0.829      | 0.477        | 0.026 (0.010)    | 0.515 (0.204)    | -         |    10.87 | dare, dea, Peeping, shane, snav     |
|           43 |     1175 | 2024-05-21 | Take Flyte       | W   | 0.823      | -            | -                | -                | -         |     3.42 | dare, dea, Peeping, shane, snav     |
|           42 |     1179 | 2024-05-21 | Take Flyte       | W   | 0.822      | -            | -                | -                | -         |     3.54 | dare, dea, Peeping, shane, snav     |
|           41 |     1214 | 2024-05-20 | Mythic           | L   | 0.816      | -            | -                | -                | -         |   -19.32 | dare, dea, Peeping, shane, snav     |
|           40 |     1307 | 2024-05-17 | FLUFFY AIMERS    | W   | 0.796      | -            | -                | -                | -         |     2.99 | dare, dea, Peeping, shane, snav     |
|           39 |     1308 | 2024-05-17 | FLUFFY AIMERS    | W   | 0.796      | -            | -                | -                | -         |     3.08 | dare, dea, Peeping, shane, snav     |
|           38 |     1378 | 2024-05-15 | Limitless        | W   | 0.783      | -            | -                | -                | -         |     2.60 | dare, dea, Peeping, shane, snav     |
|           37 |     1385 | 2024-05-15 | Limitless        | W   | 0.782      | -            | -                | -                | -         |     2.66 | dare, dea, Peeping, shane, snav     |
|           36 |     1431 | 2024-05-14 | M80              | L   | 0.776      | -            | -                | -                | -         |    -4.84 | dare, dea, Peeping, shane, snav     |
|           35 |     1437 | 2024-05-14 | M80              | L   | 0.776      | -            | -                | -                | -         |    -5.05 | dare, dea, Peeping, shane, snav     |
|           34 |     1448 | 2024-05-14 | Perseverance     | W   | 0.775      | -            | -                | -                | -         |     4.66 | dare, dea, Peeping, shane, snav     |
|           33 |     1452 | 2024-05-14 | Perseverance     | W   | 0.775      | -            | -                | -                | -         |     4.87 | dare, dea, Peeping, shane, snav     |
|           32 |     1506 | 2024-05-12 | NRG              | L   | 0.762      | -            | -                | -                | -         |   -15.66 | dare, dea, intra, Peeping, snav     |
|           31 |     1526 | 2024-05-11 | Nouns            | W   | 0.756      | 0.270        | 0.087 (0.018)    | 0.566 (0.116)    | -         |    10.47 | dare, dea, intra, Peeping, snav     |
|           30 |     1527 | 2024-05-11 | Wildcard         | W   | 0.755      | 0.270        | 0.064 (0.013)    | 0.553 (0.113)    | -         |     9.39 | dare, dea, intra, Peeping, snav     |
|           29 |     1530 | 2024-05-11 | Nouns            | L   | 0.755      | -            | -                | -                | -         |   -12.69 | dare, dea, intra, Peeping, snav     |
|           28 |     1597 | 2024-05-08 | MIGHT            | W   | 0.736      | -            | -                | -                | -         |     1.44 | dare, dea, Peeping, shane, snav     |
|           27 |     1599 | 2024-05-08 | MIGHT            | W   | 0.736      | -            | -                | -                | -         |     1.46 | dare, dea, Peeping, shane, snav     |
|           26 |     1621 | 2024-05-07 | Party Astronauts | W   | 0.730      | 0.477        | 0.063 (0.022)    | 0.604 (0.210)    | -         |    10.50 | dare, dea, Peeping, shane, snav     |
|           25 |     1622 | 2024-05-07 | Party Astronauts | L   | 0.729      | -            | -                | -                | -         |   -12.76 | dare, dea, Peeping, shane, snav     |
|           24 |     1918 | 2024-04-23 | Wildcard         | L   | 0.636      | -            | -                | -                | -         |   -12.56 | dare, dea, Peeping, shane, snav     |
|           23 |     1920 | 2024-04-23 | Wildcard         | W   | 0.636      | 0.477        | 0.064 (0.019)    | 0.553 (0.168)    | -         |     7.54 | dare, dea, Peeping, shane, snav     |
|           22 |     2055 | 2024-04-18 | Legacy           | L   | 0.603      | -            | -                | -                | -         |    -7.83 | dare, dea, Peeping, shane, snav     |
|           21 |     2063 | 2024-04-18 | M80              | L   | 0.602      | -            | -                | -                | -         |    -5.17 | dare, dea, Peeping, shane, snav     |
|           20 |     2107 | 2024-04-17 | Nouns            | W   | 0.596      | 0.143        | 0.087 (0.007)    | -                | -         |     8.05 | dare, dea, Peeping, shane, snav     |
|           19 |     2112 | 2024-04-17 | Wildcard         | W   | 0.595      | -            | -                | -                | -         |     7.31 | dare, dea, Peeping, shane, snav     |
|           18 |     2261 | 2024-04-10 | Nouns            | L   | 0.549      | -            | -                | -                | -         |   -10.16 | dare, dea, Peeping, shane, snav     |
|           17 |     2267 | 2024-04-10 | Nouns            | L   | 0.549      | -            | -                | -                | -         |   -10.64 | dare, dea, Peeping, shane, snav     |
|           16 |     2495 | 2024-04-03 | LAG              | W   | 0.503      | -            | -                | -                | -         |     5.12 | dare, dea, Peeping, shane, snav     |
|           15 |     2498 | 2024-04-03 | LAG              | L   | 0.502      | -            | -                | -                | -         |   -10.97 | dare, dea, Peeping, shane, snav     |
|           14 |     2670 | 2024-03-26 | BOSS             | W   | 0.450      | -            | -                | -                | -         |     3.02 | dare, dea, Peeping, shane, snav     |
|           13 |     2677 | 2024-03-26 | BOSS             | W   | 0.449      | -            | -                | -                | -         |     3.11 | dare, dea, Peeping, shane, snav     |
|           12 |     2844 | 2024-03-15 | Carpe Diem       | W   | 0.376      | -            | -                | -                | -         |     1.45 | dare, dea, Peeping, shane, snav     |
|           11 |     2846 | 2024-03-15 | Carpe Diem       | W   | 0.376      | -            | -                | -                | -         |     1.47 | dare, dea, Peeping, shane, snav     |
|           10 |     2944 | 2024-03-12 | Party Astronauts | L   | 0.356      | -            | -                | -                | -         |    -6.85 | dare, dea, Peeping, shane, snav     |
|            9 |     3044 | 2024-03-08 | Spirit           | L   | 0.326      | -            | -                | -                | -         |    -0.06 | dare, MRC9, Peeping, shane, snav    |
|            8 |     3195 | 2024-03-02 | ODDIK            | L   | 0.288      | -            | -                | -                | -         |    -5.17 | dare, nbgee12, Peeping, shane, snav |
|            7 |     3225 | 2024-03-01 | Complexity       | L   | 0.281      | -            | -                | -                | -         |    -0.14 | dare, nbgee12, Peeping, shane, snav |
|            6 |     3613 | 2024-02-13 | Mythic           | L   | 0.170      | -            | -                | -                | -         |    -4.24 | dare, dea, Peeping, shane, snav     |
|            5 |     3615 | 2024-02-13 | Mythic           | W   | 0.169      | -            | -                | -                | -         |     1.11 | dare, dea, Peeping, shane, snav     |
|            4 |     3721 | 2024-02-04 | Wildcard         | W   | 0.109      | -            | -                | -                | -         |     1.15 | dare, dea, Peeping, shane, snav     |
|            3 |     3748 | 2024-02-03 | NRG              | W   | 0.102      | -            | -                | -                | -         |     0.81 | dare, dea, Peeping, shane, snav     |
|            2 |     3810 | 2024-02-01 | Nouns            | W   | 0.089      | -            | -                | -                | -         |     0.98 | dare, dea, Peeping, shane, snav     |
|            1 |     3813 | 2024-02-01 | BOSS             | W   | 0.088      | -            | -                | -                | -         |     0.58 | dare, dea, Peeping, shane, snav     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($10,236.65)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-23 |      1.000 | $3,000.00      | $3,000.00       |
| 2024-06-16 |      0.996 | $1,500.00      | $1,494.31       |
| 2024-06-09 |      0.950 | $4,250.00      | $4,035.43       |
| 2024-03-10 |      0.341 | $5,000.00      | $1,706.91       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
