### Roster Details<br />
Team Name: E-Xolos LAZER<br />
Roster: danoco, land1n, mawth, tatazin, w1<br />
Global Rank: [123](../standings_global.md)<br />
<br />
Region: [Americas]( ../standings_americas.md)<br />
Regional Rank: [32]( ../standings_americas.md)<br />
<br />
Final Rank Value:  803.5<br />
<br />
Final Rank Value (803.5) = Starting Rank Value (778.6) + Head To Head Adjustments (24.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.336[<sup>1</sup>](#table2)
- Bounty Collected: 0.303[<sup>2</sup>](#table1)
- Opponent Network: 0.097[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.184<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 778.6
- 400 + ( ( 0.184 - 0.000 ) / ( 0.778 - 0.000 ) ) * 1600 = 778.6


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
|           29 |       83 | 2024-08-03 | undefined        | L   | 1.000      | -            | -                | -                | -         |   -25.00 | danoco, land1n, mawth, tatazin, w1   |
|           28 |      189 | 2024-07-31 | LAG              | W   | 1.000      | 0.477        | 0.012 (0.006)    | 0.364 (0.173)    | 0 (0.000) |    13.93 | danoco, land1n, mawth, tatazin, w1   |
|           27 |      194 | 2024-07-31 | LAG              | W   | 1.000      | 0.477        | 0.012 (0.006)    | 0.364 (0.173)    | 0 (0.000) |    15.21 | danoco, land1n, mawth, tatazin, w1   |
|           26 |      240 | 2024-07-30 | M80              | L   | 1.000      | -            | -                | -                | -         |    -2.08 | danoco, land1n, mawth, tatazin, w1   |
|           25 |      245 | 2024-07-30 | M80              | L   | 1.000      | -            | -                | -                | -         |    -2.13 | danoco, land1n, mawth, tatazin, w1   |
|           24 |      369 | 2024-07-26 | Vibe             | W   | 1.000      | 0.371        | -                | 0.068 (0.025)    | 0 (0.000) |     3.01 | danoco, land1n, mawth, tatazin, w1   |
|           23 |      436 | 2024-07-24 | FLUFFY AIMERS    | W   | 1.000      | 0.477        | 0.003 (0.001)    | 0.304 (0.145)    | 0 (0.000) |    12.64 | danoco, land1n, mawth, tatazin, w1   |
|           22 |      439 | 2024-07-24 | FLUFFY AIMERS    | L   | 1.000      | -            | -                | -                | -         |   -19.14 | danoco, land1n, mawth, tatazin, w1   |
|           21 |      630 | 2024-07-18 | NRG              | L   | 1.000      | -            | -                | -                | -         |    -8.15 | danoco, land1n, mawth, tatazin, w1   |
|           20 |      634 | 2024-07-18 | NRG              | L   | 1.000      | -            | -                | -                | -         |    -8.73 | danoco, land1n, mawth, tatazin, w1   |
|           19 |      756 | 2024-07-16 | Nouns            | W   | 1.000      | 0.477        | 0.057 (0.027)    | 0.566 (0.270)    | 0 (0.000) |    23.08 | danoco, land1n, mawth, tatazin, w1   |
|           18 |      760 | 2024-07-16 | Nouns            | L   | 1.000      | -            | -                | -                | -         |    -7.92 | danoco, land1n, mawth, tatazin, w1   |
|           17 |     1045 | 2024-06-16 | Akimbo           | W   | 0.862      | 0.143        | 0.015 (0.002)    | 0.263 (0.032)    | 0 (0.000) |    12.68 | land1n, mawth, RenanZin, tatazin, w1 |
|           16 |     1073 | 2024-06-15 | Homyno           | W   | 0.856      | 0.143        | 0.007 (0.001)    | -                | 0 (0.000) |     9.04 | land1n, mawth, RenanZin, tatazin, w1 |
|           15 |     1107 | 2024-06-14 | Take Flyte       | L   | 0.849      | -            | -                | -                | -         |   -17.99 | land1n, mawth, RenanZin, tatazin, w1 |
|           14 |     1157 | 2024-06-13 | Limitless        | W   | 0.841      | 0.371        | 0.005 (0.002)    | 0.128 (0.040)    | 0 (0.000) |    11.89 | land1n, mawth, RenanZin, tatazin, w1 |
|           13 |     1182 | 2024-06-12 | Homyno           | W   | 0.836      | -            | -                | -                | 0 (0.000) |     9.27 | land1n, mawth, RenanZin, tatazin, w1 |
|           12 |     1183 | 2024-06-12 | Limitless        | W   | 0.835      | -            | -                | -                | 0 (0.000) |     7.28 | land1n, mawth, RenanZin, tatazin, w1 |
|           11 |     1234 | 2024-06-10 | Homyno           | W   | 0.820      | 0.371        | 0.007 (0.002)    | 0.153 (0.046)    | -         |    10.24 | land1n, mawth, RenanZin, tatazin, w1 |
|           10 |     1259 | 2024-06-09 | Akimbo           | L   | 0.816      | -            | -                | -                | -         |   -12.47 | land1n, mawth, RenanZin, tatazin, w1 |
|            9 |     1321 | 2024-06-08 | straykids        | W   | 0.809      | 0.368        | 0.005 (0.002)    | -                | -         |     8.94 | land1n, mawth, RenanZin, tatazin, w1 |
|            8 |     1330 | 2024-06-08 | Akimbo           | W   | 0.808      | 0.371        | -                | 0.071 (0.021)    | -         |     9.05 | land1n, mawth, RenanZin, tatazin, w1 |
|            7 |     1377 | 2024-06-07 | Homyno           | W   | 0.802      | 0.368        | 0.007 (0.002)    | 0.153 (0.045)    | -         |    11.25 | land1n, mawth, RenanZin, tatazin, w1 |
|            6 |     1438 | 2024-06-06 | Final Form       | L   | 0.795      | -            | -                | -                | -         |   -19.30 | land1n, mawth, RenanZin, tatazin, w1 |
|            5 |     1451 | 2024-06-06 | Party Astronauts | L   | 0.794      | -            | -                | -                | -         |    -6.61 | land1n, mawth, RenanZin, tatazin, w1 |
|            4 |     1556 | 2024-06-04 | Legacy           | L   | 0.783      | -            | -                | -                | -         |    -5.50 | land1n, mawth, RenanZin, tatazin, w1 |
|            3 |     1597 | 2024-06-03 | Perseverance     | W   | 0.775      | -            | -                | -                | -         |     4.72 | land1n, mawth, RenanZin, tatazin, w1 |
|            2 |     1964 | 2024-05-20 | M80              | L   | 0.681      | -            | -                | -                | -         |    -1.45 | land1n, mawth, RenanZin, tatazin, w1 |
|            1 |     4255 | 2024-02-16 | Mythic           | L   | 0.055      | -            | -                | -                | -         |    -0.83 | land1n, mawth, RenanZin, tatazin, w1 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,361.14)
- Divide that value by the 5th highest value among all rosters ($320,194.86)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.863 | $750.00        | $646.90         |
| 2024-06-10 |      0.822 | $3,300.00      | $2,714.24       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
