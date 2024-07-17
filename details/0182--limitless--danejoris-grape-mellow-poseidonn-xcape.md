### Roster Details<br />
Team Name: Limitless<br />
Roster: Danejoris, grape, Mellow, PoseidoNN, xCAPE<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [182](../standings_global.md)<br />
Regional Rank: [49]( ../standings_americas.md)<br />
Final Rank Value:  607.7<br />
<br />
Final Rank Value (607.7) = Starting Rank Value (690.0) + Head To Head Adjustments (-82.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.262[<sup>1</sup>](#table2)
- Bounty Collected: 0.250[<sup>2</sup>](#table1)
- Opponent Network: 0.027[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.135<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 690.0
- 400 + ( ( 0.135 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 690.0


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
|           40 |      414 | 2024-06-13 | Nouns            | L   | 0.975      | -            | -                | -                | -         |    -2.46 | Danejoris, grape, Mellow, PoseidoNN, xCAPE  |
|           39 |      443 | 2024-06-12 | regain           | L   | 0.970      | -            | -                | -                | -         |   -20.30 | Danejoris, DooM, grape, PoseidoNN, xCAPE    |
|           38 |      445 | 2024-06-12 | E-Xolos LAZER    | L   | 0.969      | -            | -                | -                | -         |    -8.64 | Coastal, Danejoris, grape, PoseidoNN, xCAPE |
|           37 |      471 | 2024-06-11 | Perseverance     | W   | 0.961      | 0.371        | 0.000 (0.000)    | 0.077 (0.027)    | 0 (0.000) |    11.61 | Danejoris, grape, Mellow, PoseidoNN, xCAPE  |
|           36 |      490 | 2024-06-10 | Snakes Den       | L   | 0.955      | -            | -                | -                | -         |   -17.84 | Danejoris, grape, Mellow, PoseidoNN, xCAPE  |
|           35 |      641 | 2024-06-07 | Vibe             | W   | 0.936      | 0.371        | 0.000 (0.000)    | 0.037 (0.013)    | 0 (0.000) |     6.44 | Danejoris, grape, Mellow, PoseidoNN, xCAPE  |
|           34 |      706 | 2024-06-06 | Strife           | L   | 0.928      | -            | -                | -                | -         |   -10.44 | Danejoris, grape, Mellow, PoseidoNN, xCAPE  |
|           33 |      870 | 2024-06-03 | Asian Kings      | W   | 0.907      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.68 | Danejoris, grape, Mellow, PoseidoNN, xCAPE  |
|           32 |     1131 | 2024-05-22 | LAG              | L   | 0.829      | -            | -                | -                | -         |    -5.47 | Danejoris, DooM, grape, Mellow, PoseidoNN   |
|           31 |     1134 | 2024-05-22 | LAG              | L   | 0.829      | -            | -                | -                | -         |    -5.75 | Danejoris, DooM, grape, Mellow, PoseidoNN   |
|           30 |     1174 | 2024-05-21 | Party Astronauts | L   | 0.823      | -            | -                | -                | -         |    -3.24 | Danejoris, DooM, grape, Mellow, PoseidoNN   |
|           29 |     1177 | 2024-05-21 | Party Astronauts | L   | 0.823      | -            | -                | -                | -         |    -3.34 | Danejoris, DooM, grape, Mellow, PoseidoNN   |
|           28 |     1248 | 2024-05-19 | Wildcard         | L   | 0.809      | -            | -                | -                | -         |    -3.42 | CAJUN, Danejoris, Mellow, PoseidoNN, xCAPE  |
|           27 |     1378 | 2024-05-15 | Elevate          | L   | 0.783      | -            | -                | -                | -         |    -2.60 | Danejoris, DooM, grape, Mellow, PoseidoNN   |
|           26 |     1385 | 2024-05-15 | Elevate          | L   | 0.782      | -            | -                | -                | -         |    -2.66 | Danejoris, DooM, grape, Mellow, PoseidoNN   |
|           25 |     1560 | 2024-05-10 | M80              | L   | 0.749      | -            | -                | -                | -         |    -0.71 | Danejoris, DooM, grape, Mellow, PoseidoNN   |
|           24 |     1562 | 2024-05-10 | M80              | L   | 0.749      | -            | -                | -                | -         |    -0.72 | Danejoris, DooM, grape, Mellow, PoseidoNN   |
|           23 |     1574 | 2024-05-09 | FLUFFY AIMERS    | L   | 0.743      | -            | -                | -                | -         |    -7.78 | Danejoris, DooM, grape, Mellow, PoseidoNN   |
|           22 |     1576 | 2024-05-09 | FLUFFY AIMERS    | W   | 0.743      | 0.477        | 0.016 (0.006)    | 0.140 (0.050)    | 0 (0.000) |    16.03 | Danejoris, DooM, grape, Mellow, PoseidoNN   |
|           21 |     1595 | 2024-05-08 | Wildcard         | L   | 0.736      | -            | -                | -                | -         |    -3.36 | Danejoris, DooM, grape, Mellow, PoseidoNN   |
|           20 |     1598 | 2024-05-08 | Wildcard         | L   | 0.736      | -            | -                | -                | -         |    -3.47 | Danejoris, DooM, grape, Mellow, PoseidoNN   |
|           19 |     2171 | 2024-04-15 | Nouns            | L   | 0.583      | -            | -                | -                | -         |    -2.39 | Danejoris, DooM, grape, Mellow, PoseidoNN   |
|           18 |     2172 | 2024-04-15 | Nouns            | L   | 0.583      | -            | -                | -                | -         |    -2.45 | Danejoris, DooM, grape, Mellow, PoseidoNN   |
|           17 |     2230 | 2024-04-11 | BOSS             | L   | 0.556      | -            | -                | -                | -         |    -4.40 | Danejoris, DooM, grape, Mellow, PoseidoNN   |
|           16 |     2234 | 2024-04-11 | BOSS             | L   | 0.556      | -            | -                | -                | -         |    -4.57 | Danejoris, DooM, grape, Mellow, PoseidoNN   |
|           15 |     2448 | 2024-04-04 | Take Flyte       | L   | 0.509      | -            | -                | -                | -         |    -6.98 | Danejoris, DooM, grape, Mellow, PoseidoNN   |
|           14 |     2453 | 2024-04-04 | Take Flyte       | W   | 0.509      | 0.477        | 0.003 (0.001)    | 0.245 (0.059)    | 0 (0.000) |     9.28 | Danejoris, DooM, grape, Mellow, PoseidoNN   |
|           13 |     2494 | 2024-04-03 | Perseverance     | L   | 0.503      | -            | -                | -                | -         |    -5.98 | Danejoris, DooM, grape, Mellow, PoseidoNN   |
|           12 |     2497 | 2024-04-03 | Perseverance     | L   | 0.502      | -            | -                | -                | -         |    -6.23 | Danejoris, DooM, grape, Mellow, PoseidoNN   |
|           11 |     2623 | 2024-03-27 | MIGHT            | W   | 0.456      | 0.477        | 0.000 (0.000)    | 0.082 (0.018)    | 0 (0.000) |     4.84 | Danejoris, DooM, grape, Mellow, PoseidoNN   |
|           10 |     2630 | 2024-03-27 | MIGHT            | W   | 0.456      | 0.477        | 0.000 (0.000)    | 0.082 (0.018)    | 0 (0.000) |     5.02 | Danejoris, DooM, grape, Mellow, PoseidoNN   |
|            9 |     2673 | 2024-03-26 | Mythic           | L   | 0.450      | -            | -                | -                | -         |    -4.02 | Danejoris, DooM, grape, Mellow, PoseidoNN   |
|            8 |     2678 | 2024-03-26 | Mythic           | W   | 0.449      | 0.477        | 0.015 (0.003)    | 0.341 (0.073)    | 0 (0.000) |    10.37 | Danejoris, DooM, grape, Mellow, PoseidoNN   |
|            7 |     2865 | 2024-03-14 | NRG              | L   | 0.370      | -            | -                | -                | -         |    -2.70 | Danejoris, grape, Mellow, PoseidoNN, RiFT   |
|            6 |     2870 | 2024-03-14 | NRG              | L   | 0.369      | -            | -                | -                | -         |    -2.76 | Danejoris, grape, Mellow, PoseidoNN, RiFT   |
|            5 |     3078 | 2024-03-06 | Carpe Diem       | L   | 0.316      | -            | -                | -                | -         |    -4.59 | Danejoris, DooM, grape, Mellow, PoseidoNN   |
|            4 |     3081 | 2024-03-06 | Carpe Diem       | L   | 0.316      | -            | -                | -                | -         |    -4.71 | Danejoris, DooM, grape, Mellow, PoseidoNN   |
|            3 |     3326 | 2024-02-24 | NRG              | L   | 0.242      | -            | -                | -                | -         |    -1.82 | Danejoris, DooM, grape, Mellow, RiFT        |
|            2 |     3330 | 2024-02-24 | LAG              | W   | 0.242      | 0.143        | 0.020 (0.001)    | 0.417 (0.014)    | 0 (0.000) |     6.11 | Danejoris, DooM, grape, Mellow, RiFT        |
|            1 |     3545 | 2024-02-15 | OMiT             | L   | 0.183      | -            | -                | -                | -         |    -1.89 | Danejoris, DooM, grape, Mellow, RiFT        |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($379.81)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
