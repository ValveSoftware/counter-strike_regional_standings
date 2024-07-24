### Roster Details<br />
Team Name: Limitless<br />
Roster: Danejoris, grape, Mellow, PoseidoNN, xCAPE<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [184](../standings_global.md)<br />
Regional Rank: [50]( ../standings_americas.md)<br />
Final Rank Value:  585.7<br />
<br />
Final Rank Value (585.7) = Starting Rank Value (664.8) + Head To Head Adjustments (-79.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.257[<sup>1</sup>](#table2)
- Bounty Collected: 0.243[<sup>2</sup>](#table1)
- Opponent Network: 0.023[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.131<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 664.8
- 400 + ( ( 0.131 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 664.8


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
|           40 |      702 | 2024-06-13 | Nouns            | L   | 0.928      | -            | -                | -                | -         |    -2.56 | Danejoris, grape, Mellow, PoseidoNN, xCAPE  |
|           39 |      731 | 2024-06-12 | regain           | L   | 0.923      | -            | -                | -                | -         |   -18.81 | Danejoris, DooM, grape, PoseidoNN, xCAPE    |
|           38 |      733 | 2024-06-12 | E-Xolos LAZER    | L   | 0.921      | -            | -                | -                | -         |    -8.51 | Coastal, Danejoris, grape, PoseidoNN, xCAPE |
|           37 |      759 | 2024-06-11 | Perseverance     | W   | 0.914      | 0.371        | 0.000 (0.000)    | 0.072 (0.024)    | 0 (0.000) |    11.48 | Danejoris, grape, Mellow, PoseidoNN, xCAPE  |
|           36 |      778 | 2024-06-10 | Snakes Den       | L   | 0.908      | -            | -                | -                | -         |   -16.60 | Danejoris, grape, Mellow, PoseidoNN, xCAPE  |
|           35 |      929 | 2024-06-07 | Vibe             | W   | 0.889      | 0.371        | 0.000 (0.000)    | 0.035 (0.012)    | 0 (0.000) |     6.75 | Danejoris, grape, Mellow, PoseidoNN, xCAPE  |
|           34 |      994 | 2024-06-06 | Strife           | L   | 0.881      | -            | -                | -                | -         |   -10.10 | Danejoris, grape, Mellow, PoseidoNN, xCAPE  |
|           33 |     1158 | 2024-06-03 | Asian Kings      | W   | 0.859      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     6.03 | Danejoris, grape, Mellow, PoseidoNN, xCAPE  |
|           32 |     1419 | 2024-05-22 | LAG              | L   | 0.782      | -            | -                | -                | -         |    -5.52 | Danejoris, DooM, grape, Mellow, PoseidoNN   |
|           31 |     1422 | 2024-05-22 | LAG              | L   | 0.782      | -            | -                | -                | -         |    -5.80 | Danejoris, DooM, grape, Mellow, PoseidoNN   |
|           30 |     1462 | 2024-05-21 | Party Astronauts | L   | 0.776      | -            | -                | -                | -         |    -3.32 | Danejoris, DooM, grape, Mellow, PoseidoNN   |
|           29 |     1465 | 2024-05-21 | Party Astronauts | L   | 0.775      | -            | -                | -                | -         |    -3.42 | Danejoris, DooM, grape, Mellow, PoseidoNN   |
|           28 |     1536 | 2024-05-19 | Wildcard         | L   | 0.762      | -            | -                | -                | -         |    -3.40 | CAJUN, Danejoris, Mellow, PoseidoNN, xCAPE  |
|           27 |     1666 | 2024-05-15 | Elevate          | L   | 0.735      | -            | -                | -                | -         |    -2.61 | Danejoris, DooM, grape, Mellow, PoseidoNN   |
|           26 |     1673 | 2024-05-15 | Elevate          | L   | 0.735      | -            | -                | -                | -         |    -2.68 | Danejoris, DooM, grape, Mellow, PoseidoNN   |
|           25 |     1848 | 2024-05-10 | M80              | L   | 0.702      | -            | -                | -                | -         |    -0.53 | Danejoris, DooM, grape, Mellow, PoseidoNN   |
|           24 |     1850 | 2024-05-10 | M80              | L   | 0.702      | -            | -                | -                | -         |    -0.53 | Danejoris, DooM, grape, Mellow, PoseidoNN   |
|           23 |     1862 | 2024-05-09 | FLUFFY AIMERS    | L   | 0.696      | -            | -                | -                | -         |    -7.55 | Danejoris, DooM, grape, Mellow, PoseidoNN   |
|           22 |     1864 | 2024-05-09 | FLUFFY AIMERS    | W   | 0.696      | 0.477        | 0.013 (0.004)    | 0.125 (0.042)    | 0 (0.000) |    14.75 | Danejoris, DooM, grape, Mellow, PoseidoNN   |
|           21 |     1883 | 2024-05-08 | Wildcard         | L   | 0.689      | -            | -                | -                | -         |    -3.32 | Danejoris, DooM, grape, Mellow, PoseidoNN   |
|           20 |     1886 | 2024-05-08 | Wildcard         | L   | 0.689      | -            | -                | -                | -         |    -3.43 | Danejoris, DooM, grape, Mellow, PoseidoNN   |
|           19 |     2459 | 2024-04-15 | Nouns            | L   | 0.536      | -            | -                | -                | -         |    -2.49 | Danejoris, DooM, grape, Mellow, PoseidoNN   |
|           18 |     2460 | 2024-04-15 | Nouns            | L   | 0.536      | -            | -                | -                | -         |    -2.55 | Danejoris, DooM, grape, Mellow, PoseidoNN   |
|           17 |     2518 | 2024-04-11 | BOSS             | L   | 0.509      | -            | -                | -                | -         |    -4.00 | Danejoris, DooM, grape, Mellow, PoseidoNN   |
|           16 |     2522 | 2024-04-11 | BOSS             | L   | 0.509      | -            | -                | -                | -         |    -4.13 | Danejoris, DooM, grape, Mellow, PoseidoNN   |
|           15 |     2736 | 2024-04-04 | Take Flyte       | L   | 0.462      | -            | -                | -                | -         |    -6.41 | Danejoris, DooM, grape, Mellow, PoseidoNN   |
|           14 |     2741 | 2024-04-04 | Take Flyte       | W   | 0.462      | 0.477        | 0.003 (0.001)    | 0.228 (0.050)    | 0 (0.000) |     8.34 | Danejoris, DooM, grape, Mellow, PoseidoNN   |
|           13 |     2782 | 2024-04-03 | Perseverance     | L   | 0.456      | -            | -                | -                | -         |    -5.53 | Danejoris, DooM, grape, Mellow, PoseidoNN   |
|           12 |     2785 | 2024-04-03 | Perseverance     | L   | 0.455      | -            | -                | -                | -         |    -5.74 | Danejoris, DooM, grape, Mellow, PoseidoNN   |
|           11 |     2911 | 2024-03-27 | MIGHT            | W   | 0.409      | 0.477        | 0.000 (0.000)    | 0.073 (0.014)    | 0 (0.000) |     4.43 | Danejoris, DooM, grape, Mellow, PoseidoNN   |
|           10 |     2918 | 2024-03-27 | MIGHT            | W   | 0.409      | 0.477        | 0.000 (0.000)    | 0.073 (0.014)    | 0 (0.000) |     4.58 | Danejoris, DooM, grape, Mellow, PoseidoNN   |
|            9 |     2961 | 2024-03-26 | Mythic           | L   | 0.402      | -            | -                | -                | -         |    -3.83 | Danejoris, DooM, grape, Mellow, PoseidoNN   |
|            8 |     2966 | 2024-03-26 | Mythic           | W   | 0.402      | 0.477        | 0.012 (0.002)    | 0.310 (0.059)    | 0 (0.000) |     9.03 | Danejoris, DooM, grape, Mellow, PoseidoNN   |
|            7 |     3153 | 2024-03-14 | NRG              | L   | 0.322      | -            | -                | -                | -         |    -2.44 | Danejoris, grape, Mellow, PoseidoNN, RiFT   |
|            6 |     3158 | 2024-03-14 | NRG              | L   | 0.322      | -            | -                | -                | -         |    -2.49 | Danejoris, grape, Mellow, PoseidoNN, RiFT   |
|            5 |     3366 | 2024-03-06 | Carpe Diem       | L   | 0.269      | -            | -                | -                | -         |    -3.93 | Danejoris, DooM, grape, Mellow, PoseidoNN   |
|            4 |     3369 | 2024-03-06 | Carpe Diem       | L   | 0.269      | -            | -                | -                | -         |    -4.02 | Danejoris, DooM, grape, Mellow, PoseidoNN   |
|            3 |     3614 | 2024-02-24 | NRG              | L   | 0.195      | -            | -                | -                | -         |    -1.51 | Danejoris, DooM, grape, Mellow, RiFT        |
|            2 |     3618 | 2024-02-24 | LAG              | W   | 0.195      | 0.143        | 0.017 (0.000)    | 0.385 (0.011)    | 0 (0.000) |     4.76 | Danejoris, DooM, grape, Mellow, RiFT        |
|            1 |     3833 | 2024-02-15 | OMiT             | L   | 0.136      | -            | -                | -                | -         |    -1.48 | Danejoris, DooM, grape, Mellow, RiFT        |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($360.92)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
