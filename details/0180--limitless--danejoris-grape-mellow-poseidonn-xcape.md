### Roster Details<br />
Team Name: Limitless<br />
Roster: Danejoris, grape, Mellow, PoseidoNN, xCAPE<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [180](../standings_global.md)<br />
Regional Rank: [48]( ../standings_americas.md)<br />
Final Rank Value:  603.4<br />
<br />
Final Rank Value (603.4) = Starting Rank Value (689.9) + Head To Head Adjustments (-86.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.262[<sup>1</sup>](#table2)
- Bounty Collected: 0.252[<sup>2</sup>](#table1)
- Opponent Network: 0.035[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.137<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 689.9
- 400 + ( ( 0.137 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 689.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           40 |      250 | 2024-06-13 | Nouns            | L   | 1.000      | -            | -                | -                | -         |    -2.32 | Danejoris, grape, Mellow, PoseidoNN, xCAPE  |
|           39 |      279 | 2024-06-12 | regain           | L   | 1.000      | -            | -                | -                | -         |   -20.81 | Danejoris, DooM, grape, PoseidoNN, xCAPE    |
|           38 |      281 | 2024-06-12 | E-Xolos LAZER    | L   | 1.000      | -            | -                | -                | -         |    -9.80 | Coastal, Danejoris, grape, PoseidoNN, xCAPE |
|           37 |      307 | 2024-06-11 | Perseverance     | W   | 1.000      | 0.371        | 0.000 (0.000)    | 0.079 (0.029)    | 0 (0.000) |    12.19 | Danejoris, grape, Mellow, PoseidoNN, xCAPE  |
|           36 |      326 | 2024-06-10 | Snakes Den       | L   | 0.994      | -            | -                | -                | -         |   -18.50 | Danejoris, grape, Mellow, PoseidoNN, xCAPE  |
|           35 |      477 | 2024-06-07 | Vibe             | W   | 0.976      | 0.371        | 0.000 (0.000)    | 0.039 (0.014)    | 0 (0.000) |     6.79 | Danejoris, grape, Mellow, PoseidoNN, xCAPE  |
|           34 |      542 | 2024-06-06 | Strife           | L   | 0.968      | -            | -                | -                | -         |   -10.87 | Danejoris, grape, Mellow, PoseidoNN, xCAPE  |
|           33 |      706 | 2024-06-03 | Asian Kings      | W   | 0.946      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.99 | Danejoris, grape, Mellow, PoseidoNN, xCAPE  |
|           32 |      967 | 2024-05-22 | LAG              | L   | 0.869      | -            | -                | -                | -         |    -6.33 | Danejoris, DooM, grape, Mellow, PoseidoNN   |
|           31 |      970 | 2024-05-22 | LAG              | L   | 0.869      | -            | -                | -                | -         |    -6.69 | Danejoris, DooM, grape, Mellow, PoseidoNN   |
|           30 |     1010 | 2024-05-21 | Party Astronauts | L   | 0.863      | -            | -                | -                | -         |    -3.33 | Danejoris, DooM, grape, Mellow, PoseidoNN   |
|           29 |     1013 | 2024-05-21 | Party Astronauts | L   | 0.862      | -            | -                | -                | -         |    -3.44 | Danejoris, DooM, grape, Mellow, PoseidoNN   |
|           28 |     1084 | 2024-05-19 | Wildcard         | L   | 0.848      | -            | -                | -                | -         |    -3.81 | CAJUN, Danejoris, Mellow, PoseidoNN, xCAPE  |
|           27 |     1214 | 2024-05-15 | Elevate          | L   | 0.822      | -            | -                | -                | -         |    -2.86 | Danejoris, DooM, grape, Mellow, PoseidoNN   |
|           26 |     1221 | 2024-05-15 | Elevate          | L   | 0.822      | -            | -                | -                | -         |    -2.95 | Danejoris, DooM, grape, Mellow, PoseidoNN   |
|           25 |     1396 | 2024-05-10 | M80              | L   | 0.789      | -            | -                | -                | -         |    -0.90 | Danejoris, DooM, grape, Mellow, PoseidoNN   |
|           24 |     1398 | 2024-05-10 | M80              | L   | 0.789      | -            | -                | -                | -         |    -0.91 | Danejoris, DooM, grape, Mellow, PoseidoNN   |
|           23 |     1410 | 2024-05-09 | FLUFFY AIMERS    | L   | 0.783      | -            | -                | -                | -         |    -7.91 | Danejoris, DooM, grape, Mellow, PoseidoNN   |
|           22 |     1412 | 2024-05-09 | FLUFFY AIMERS    | W   | 0.782      | 0.477        | 0.016 (0.006)    | 0.297 (0.111)    | 0 (0.000) |    17.18 | Danejoris, DooM, grape, Mellow, PoseidoNN   |
|           21 |     1431 | 2024-05-08 | Wildcard         | L   | 0.776      | -            | -                | -                | -         |    -3.56 | Danejoris, DooM, grape, Mellow, PoseidoNN   |
|           20 |     1434 | 2024-05-08 | Wildcard         | L   | 0.775      | -            | -                | -                | -         |    -3.69 | Danejoris, DooM, grape, Mellow, PoseidoNN   |
|           19 |     2007 | 2024-04-15 | Nouns            | L   | 0.623      | -            | -                | -                | -         |    -2.37 | Danejoris, DooM, grape, Mellow, PoseidoNN   |
|           18 |     2008 | 2024-04-15 | Nouns            | L   | 0.622      | -            | -                | -                | -         |    -2.42 | Danejoris, DooM, grape, Mellow, PoseidoNN   |
|           17 |     2066 | 2024-04-11 | BOSS             | L   | 0.596      | -            | -                | -                | -         |    -4.88 | Danejoris, DooM, grape, Mellow, PoseidoNN   |
|           16 |     2070 | 2024-04-11 | BOSS             | L   | 0.595      | -            | -                | -                | -         |    -5.08 | Danejoris, DooM, grape, Mellow, PoseidoNN   |
|           15 |     2284 | 2024-04-04 | One More         | L   | 0.549      | -            | -                | -                | -         |    -8.01 | Danejoris, DooM, grape, Mellow, PoseidoNN   |
|           14 |     2289 | 2024-04-04 | One More         | W   | 0.549      | 0.477        | 0.003 (0.001)    | 0.219 (0.057)    | 0 (0.000) |     9.50 | Danejoris, DooM, grape, Mellow, PoseidoNN   |
|           13 |     2330 | 2024-04-03 | Take Flyte       | L   | 0.542      | -            | -                | -                | -         |    -6.51 | Danejoris, DooM, grape, Mellow, PoseidoNN   |
|           12 |     2333 | 2024-04-03 | Take Flyte       | L   | 0.542      | -            | -                | -                | -         |    -6.82 | Danejoris, DooM, grape, Mellow, PoseidoNN   |
|           11 |     2459 | 2024-03-27 | MIGHT            | W   | 0.496      | 0.477        | 0.000 (0.000)    | 0.089 (0.021)    | 0 (0.000) |     5.27 | Danejoris, DooM, grape, Mellow, PoseidoNN   |
|           10 |     2466 | 2024-03-27 | MIGHT            | W   | 0.496      | 0.477        | 0.000 (0.000)    | 0.089 (0.021)    | 0 (0.000) |     5.48 | Danejoris, DooM, grape, Mellow, PoseidoNN   |
|            9 |     2509 | 2024-03-26 | Mythic           | L   | 0.489      | -            | -                | -                | -         |    -4.01 | Danejoris, DooM, grape, Mellow, PoseidoNN   |
|            8 |     2514 | 2024-03-26 | Mythic           | W   | 0.489      | 0.477        | 0.014 (0.003)    | 0.359 (0.084)    | 0 (0.000) |    11.65 | Danejoris, DooM, grape, Mellow, PoseidoNN   |
|            7 |     2701 | 2024-03-14 | NRG              | L   | 0.409      | -            | -                | -                | -         |    -3.03 | Danejoris, grape, Mellow, PoseidoNN, RiFT   |
|            6 |     2706 | 2024-03-14 | NRG              | L   | 0.409      | -            | -                | -                | -         |    -3.11 | Danejoris, grape, Mellow, PoseidoNN, RiFT   |
|            5 |     2914 | 2024-03-06 | Carpe Diem       | L   | 0.356      | -            | -                | -                | -         |    -3.94 | Danejoris, DooM, grape, Mellow, PoseidoNN   |
|            4 |     2917 | 2024-03-06 | Carpe Diem       | L   | 0.356      | -            | -                | -                | -         |    -4.05 | Danejoris, DooM, grape, Mellow, PoseidoNN   |
|            3 |     3162 | 2024-02-24 | NRG              | L   | 0.282      | -            | -                | -                | -         |    -2.15 | Danejoris, DooM, grape, Mellow, RiFT        |
|            2 |     3166 | 2024-02-24 | LAG              | W   | 0.282      | 0.143        | 0.021 (0.001)    | 0.396 (0.016)    | 0 (0.000) |     6.76 | Danejoris, DooM, grape, Mellow, RiFT        |
|            1 |     3381 | 2024-02-15 | OMiT             | L   | 0.222      | -            | -                | -                | -         |    -2.26 | Danejoris, DooM, grape, Mellow, RiFT        |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($395.65)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
