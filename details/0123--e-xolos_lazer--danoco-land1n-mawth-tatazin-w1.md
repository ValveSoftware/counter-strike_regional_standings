### Roster Details<br />
Team Name: E-Xolos LAZER<br />
Roster: danoco, land1n, mawth, tatazin, w1<br />
Global Rank: [123](../standings_global.md)<br />
<br />
Region: [Americas]( ../standings_americas.md)<br />
Regional Rank: [30]( ../standings_americas.md)<br />
<br />
Final Rank Value:  789.8<br />
<br />
Final Rank Value (789.8) = Starting Rank Value (761.9) + Head To Head Adjustments (27.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.332[<sup>1</sup>](#table2)
- Bounty Collected: 0.300[<sup>2</sup>](#table1)
- Opponent Network: 0.101[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.183<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 761.9
- 400 + ( ( 0.183 - 0.000 ) / ( 0.811 - 0.000 ) ) * 1600 = 761.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           32 |       13 | 2024-08-13 | Elevate          | L   | 1.000      | -            | -                | -                | -         |   -10.19 | danoco, land1n, mawth, tatazin, w1   |
|           31 |      125 | 2024-08-10 | NoVum            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.19 | danoco, land1n, mawth, tatazin, w1   |
|           30 |      201 | 2024-08-07 | Revenge Nation   | W   | 1.000      | 0.371        | 0.005 (0.002)    | 0.131 (0.049)    | 0 (0.000) |    12.82 | danoco, land1n, mawth, tatazin, w1   |
|           29 |      356 | 2024-08-03 | undefined        | L   | 1.000      | -            | -                | -                | -         |   -24.41 | danoco, land1n, mawth, tatazin, w1   |
|           28 |      462 | 2024-07-31 | LAG              | W   | 1.000      | 0.477        | 0.011 (0.005)    | 0.337 (0.161)    | 0 (0.000) |    13.84 | danoco, land1n, mawth, tatazin, w1   |
|           27 |      467 | 2024-07-31 | LAG              | W   | 1.000      | 0.477        | 0.011 (0.005)    | 0.337 (0.161)    | 0 (0.000) |    15.11 | danoco, land1n, mawth, tatazin, w1   |
|           26 |      513 | 2024-07-30 | M80              | L   | 1.000      | -            | -                | -                | -         |    -2.36 | danoco, land1n, mawth, tatazin, w1   |
|           25 |      518 | 2024-07-30 | M80              | L   | 1.000      | -            | -                | -                | -         |    -2.42 | danoco, land1n, mawth, tatazin, w1   |
|           24 |      642 | 2024-07-26 | Vibe             | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.09 | danoco, land1n, mawth, tatazin, w1   |
|           23 |      709 | 2024-07-24 | FLUFFY AIMERS    | W   | 1.000      | 0.477        | 0.003 (0.001)    | 0.373 (0.178)    | 0 (0.000) |    12.93 | danoco, land1n, mawth, tatazin, w1   |
|           22 |      712 | 2024-07-24 | FLUFFY AIMERS    | L   | 1.000      | -            | -                | -                | -         |   -18.83 | danoco, land1n, mawth, tatazin, w1   |
|           21 |      903 | 2024-07-18 | NRG              | L   | 1.000      | -            | -                | -                | -         |    -8.26 | danoco, land1n, mawth, tatazin, w1   |
|           20 |      907 | 2024-07-18 | NRG              | L   | 1.000      | -            | -                | -                | -         |    -8.86 | danoco, land1n, mawth, tatazin, w1   |
|           19 |     1029 | 2024-07-16 | Nouns            | W   | 1.000      | 0.477        | 0.053 (0.025)    | 0.549 (0.262)    | 0 (0.000) |    22.94 | danoco, land1n, mawth, tatazin, w1   |
|           18 |     1033 | 2024-07-16 | Nouns            | L   | 1.000      | -            | -                | -                | -         |    -8.07 | danoco, land1n, mawth, tatazin, w1   |
|           17 |     1318 | 2024-06-16 | Akimbo           | W   | 0.808      | 0.143        | 0.012 (0.001)    | 0.306 (0.035)    | 0 (0.000) |    11.18 | land1n, mawth, RenanZin, tatazin, w1 |
|           16 |     1346 | 2024-06-15 | Homyno           | W   | 0.802      | 0.143        | -                | 0.181 (0.021)    | 0 (0.000) |     8.57 | land1n, mawth, RenanZin, tatazin, w1 |
|           15 |     1380 | 2024-06-14 | Take Flyte       | L   | 0.795      | -            | -                | -                | -         |   -16.45 | land1n, mawth, RenanZin, tatazin, w1 |
|           14 |     1430 | 2024-06-13 | Limitless        | W   | 0.787      | 0.371        | 0.005 (0.001)    | 0.156 (0.045)    | 0 (0.000) |    11.25 | land1n, mawth, RenanZin, tatazin, w1 |
|           13 |     1455 | 2024-06-12 | Homyno           | W   | 0.782      | -            | -                | -                | -         |     8.79 | land1n, mawth, RenanZin, tatazin, w1 |
|           12 |     1456 | 2024-06-12 | Limitless        | W   | 0.781      | -            | -                | -                | -         |     6.97 | land1n, mawth, RenanZin, tatazin, w1 |
|           11 |     1507 | 2024-06-10 | Homyno           | W   | 0.766      | 0.371        | 0.006 (0.002)    | 0.181 (0.051)    | -         |     9.61 | land1n, mawth, RenanZin, tatazin, w1 |
|           10 |     1532 | 2024-06-09 | Akimbo           | L   | 0.762      | -            | -                | -                | -         |   -12.55 | land1n, mawth, RenanZin, tatazin, w1 |
|            9 |     1594 | 2024-06-08 | straykids        | W   | 0.755      | 0.368        | 0.005 (0.001)    | -                | -         |     8.46 | land1n, mawth, RenanZin, tatazin, w1 |
|            8 |     1603 | 2024-06-08 | Akimbo           | W   | 0.754      | -            | -                | -                | -         |     8.37 | land1n, mawth, RenanZin, tatazin, w1 |
|            7 |     1650 | 2024-06-07 | Homyno           | W   | 0.748      | 0.368        | 0.006 (0.002)    | 0.181 (0.050)    | -         |    10.44 | land1n, mawth, RenanZin, tatazin, w1 |
|            6 |     1711 | 2024-06-06 | Final Form       | L   | 0.741      | -            | -                | -                | -         |   -17.81 | land1n, mawth, RenanZin, tatazin, w1 |
|            5 |     1724 | 2024-06-06 | Party Astronauts | L   | 0.740      | -            | -                | -                | -         |    -6.45 | land1n, mawth, RenanZin, tatazin, w1 |
|            4 |     1829 | 2024-06-04 | Legacy           | L   | 0.729      | -            | -                | -                | -         |    -5.94 | land1n, mawth, RenanZin, tatazin, w1 |
|            3 |     1870 | 2024-06-03 | Perseverance     | W   | 0.721      | -            | -                | -                | -         |     4.58 | land1n, mawth, RenanZin, tatazin, w1 |
|            2 |     2237 | 2024-05-20 | M80              | L   | 0.627      | -            | -                | -                | -         |    -1.60 | land1n, mawth, RenanZin, tatazin, w1 |
|            1 |     4528 | 2024-02-16 | Mythic           | L   | 0.001      | -            | -                | -                | -         |    -0.01 | land1n, mawth, RenanZin, tatazin, w1 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,142.12)
- Divide that value by the 5th highest value among all rosters ($320,160.38)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.808 | $750.00        | $606.34         |
| 2024-06-10 |      0.768 | $3,300.00      | $2,535.78       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
