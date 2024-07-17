### Roster Details<br />
Team Name: Wildcard<br />
Roster: JBa, phzy, Sonic, stanislaw, susp<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [69](../standings_global.md)<br />
Regional Rank: [49]( ../standings_europe.md)<br />
Final Rank Value:  1022.1<br />
<br />
Final Rank Value (1022.1) = Starting Rank Value (963.0) + Head To Head Adjustments (59.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.456[<sup>1</sup>](#table2)
- Bounty Collected: 0.372[<sup>2</sup>](#table1)
- Opponent Network: 0.187[<sup>2</sup>](#table1)
- LAN Wins: 0.033[<sup>2</sup>](#table1)

The average of these factors is 0.262<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 963.0
- 400 + ( ( 0.262 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 963.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           65 |       23 | 2024-07-16 | LAG              | W   | 1.000      | 0.477        | 0.020 (0.010)    | 0.417 (0.199)    | 0 (0.000) |    12.44 | JBa, phzy, Sonic, stanislaw, susp        |
|           64 |       29 | 2024-07-16 | LAG              | L   | 1.000      | -            | -                | -                | -         |   -19.36 | JBa, phzy, Sonic, stanislaw, susp        |
|           63 |      313 | 2024-06-16 | Nouns            | L   | 0.995      | -            | -                | -                | -         |   -14.91 | JBa, motm, SLIGHT, Sonic, stanislaw      |
|           62 |      337 | 2024-06-15 | Mythic           | W   | 0.989      | -            | -                | -                | 0 (0.000) |     9.11 | JBa, motm, SLIGHT, Sonic, stanislaw      |
|           61 |      411 | 2024-06-13 | Final Form       | W   | 0.977      | -            | -                | -                | 0 (0.000) |     3.71 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           60 |      522 | 2024-06-09 | M80              | L   | 0.950      | -            | -                | -                | -         |    -5.78 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           59 |      581 | 2024-06-08 | Nouns            | W   | 0.943      | 0.477        | 0.087 (0.039)    | 0.566 (0.255)    | 0 (0.000) |    15.85 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           58 |      591 | 2024-06-08 | Party Astronauts | L   | 0.942      | -            | -                | -                | -         |   -14.03 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           57 |      640 | 2024-06-07 | LAG              | W   | 0.936      | 0.384        | -                | 0.417 (0.150)    | 0 (0.000) |     9.52 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           56 |      696 | 2024-06-06 | M80              | L   | 0.930      | -            | -                | -                | -         |    -5.20 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           55 |      709 | 2024-06-06 | NRG              | L   | 0.928      | -            | -                | -                | -         |   -17.45 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           54 |      716 | 2024-06-06 | M80              | L   | 0.928      | -            | -                | -                | -         |    -5.91 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           53 |      732 | 2024-06-06 | NRG              | W   | 0.927      | -            | -                | -                | 0 (0.000) |    11.17 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           52 |      767 | 2024-06-05 | Party Astronauts | W   | 0.923      | 0.477        | 0.063 (0.028)    | 0.604 (0.266)    | 0 (0.000) |    13.92 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           51 |      821 | 2024-06-04 | Strife           | W   | 0.916      | -            | -                | -                | 0 (0.000) |     5.00 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           50 |     1111 | 2024-05-23 | M80              | L   | 0.835      | -            | -                | -                | -         |    -5.09 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           49 |     1125 | 2024-05-22 | Take Flyte       | W   | 0.830      | -            | -                | -                | 0 (0.000) |     3.58 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           48 |     1129 | 2024-05-22 | Take Flyte       | W   | 0.829      | -            | -                | -                | -         |     3.71 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           47 |     1137 | 2024-05-22 | LAG              | W   | 0.829      | 0.384        | -                | 0.417 (0.133)    | -         |     8.31 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           46 |     1185 | 2024-05-21 | Limitless        | W   | 0.822      | -            | -                | -                | -         |     7.38 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           45 |     1191 | 2024-05-21 | Limitless        | W   | 0.821      | -            | -                | -                | -         |     7.84 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           44 |     1248 | 2024-05-19 | Limitless        | W   | 0.809      | -            | -                | -                | -         |     3.42 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           43 |     1376 | 2024-05-15 | BOSS             | W   | 0.783      | 0.477        | 0.022 (0.008)    | 0.345 (0.129)    | -         |     7.57 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           42 |     1387 | 2024-05-15 | BOSS             | W   | 0.782      | 0.477        | 0.022 (0.008)    | -                | -         |     8.03 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           41 |     1432 | 2024-05-14 | FLUFFY AIMERS    | W   | 0.776      | -            | -                | -                | -         |     6.56 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           40 |     1436 | 2024-05-14 | FLUFFY AIMERS    | W   | 0.776      | -            | -                | -                | -         |     6.93 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           39 |     1482 | 2024-05-13 | Nouns            | W   | 0.769      | 0.477        | 0.087 (0.032)    | 0.566 (0.208)    | -         |    13.89 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           38 |     1484 | 2024-05-13 | Nouns            | L   | 0.769      | -            | -                | -                | -         |   -10.41 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           37 |     1527 | 2024-05-11 | Elevate          | L   | 0.755      | -            | -                | -                | -         |    -9.39 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           36 |     1529 | 2024-05-11 | Mythic           | L   | 0.755      | -            | -                | -                | -         |   -16.88 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           35 |     1579 | 2024-05-09 | MIGHT            | W   | 0.742      | -            | -                | -                | -         |     2.00 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           34 |     1583 | 2024-05-09 | MIGHT            | W   | 0.742      | -            | -                | -                | -         |     2.04 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           33 |     1595 | 2024-05-08 | Limitless        | W   | 0.736      | -            | -                | -                | -         |     3.36 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           32 |     1598 | 2024-05-08 | Limitless        | W   | 0.736      | -            | -                | -                | -         |     3.47 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           31 |     1712 | 2024-05-02 | Party Astronauts | W   | 0.696      | 0.477        | 0.063 (0.021)    | 0.604 (0.200)    | -         |    12.46 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|           30 |     1713 | 2024-05-02 | Party Astronauts | L   | 0.696      | -            | -                | -                | -         |    -9.57 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|           29 |     1876 | 2024-04-25 | NRG              | W   | 0.649      | 0.477        | 0.026 (0.008)    | 0.515 (0.159)    | -         |     8.82 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|           28 |     1878 | 2024-04-25 | NRG              | L   | 0.649      | -            | -                | -                | -         |   -11.93 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|           27 |     1918 | 2024-04-23 | Elevate          | W   | 0.636      | 0.477        | 0.042 (0.013)    | 0.583 (0.177)    | -         |    12.56 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|           26 |     1920 | 2024-04-23 | Elevate          | L   | 0.636      | -            | -                | -                | -         |    -7.54 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|           25 |     2112 | 2024-04-17 | Elevate          | L   | 0.595      | -            | -                | -                | -         |    -7.31 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|           24 |     2633 | 2024-03-27 | Mythic           | W   | 0.456      | -            | -                | -                | -         |     4.73 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|           23 |     2636 | 2024-03-27 | Mythic           | W   | 0.455      | -            | -                | -                | -         |     4.90 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|           22 |     2672 | 2024-03-26 | LAG              | W   | 0.450      | -            | -                | -                | -         |     6.51 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|           21 |     2676 | 2024-03-26 | LAG              | L   | 0.449      | -            | -                | -                | -         |    -7.84 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|           20 |     2872 | 2024-03-14 | Perseverance     | W   | 0.369      | -            | -                | -                | -         |     3.01 | JBa, motm, SLIGHT, Sonic, stanislaw      |
|           19 |     2874 | 2024-03-14 | Perseverance     | W   | 0.369      | -            | -                | -                | -         |     3.09 | JBa, motm, SLIGHT, Sonic, stanislaw      |
|           18 |     2898 | 2024-03-13 | M80              | W   | 0.363      | 0.477        | 0.219 (0.038)    | -                | -         |     9.56 | JBa, motm, SLIGHT, Sonic, stanislaw      |
|           17 |     2900 | 2024-03-13 | M80              | L   | 0.363      | -            | -                | -                | -         |    -1.87 | JBa, motm, SLIGHT, Sonic, stanislaw      |
|           16 |     2946 | 2024-03-12 | Mythic           | L   | 0.356      | -            | -                | -                | -         |    -7.43 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           15 |     3179 | 2024-03-03 | M80              | L   | 0.294      | -            | -                | -                | -         |    -1.54 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           14 |     3199 | 2024-03-02 | BESTIA           | W   | 0.287      | -            | -                | -                | 1 (0.287) |     5.49 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           13 |     3220 | 2024-03-01 | RED Canids       | L   | 0.281      | -            | -                | -                | -         |    -2.04 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           12 |     3300 | 2024-02-25 | Liquid           | L   | 0.250      | -            | -                | -                | -         |    -0.26 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           11 |     3305 | 2024-02-25 | BOSS             | L   | 0.249      | -            | -                | -                | -         |    -5.19 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           10 |     3323 | 2024-02-24 | NRG              | W   | 0.243      | -            | -                | -                | -         |     3.15 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|            9 |     3324 | 2024-02-24 | Party Astronauts | W   | 0.242      | -            | -                | -                | -         |     4.23 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|            8 |     3335 | 2024-02-24 | OMiT             | W   | 0.242      | -            | -                | -                | -         |     2.30 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|            7 |     3372 | 2024-02-22 | NRG              | L   | 0.229      | -            | -                | -                | -         |    -4.27 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|            6 |     3721 | 2024-02-04 | Elevate          | L   | 0.109      | -            | -                | -                | -         |    -1.15 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|            5 |     3778 | 2024-02-02 | NRG              | W   | 0.095      | -            | -                | -                | -         |     1.20 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|            4 |     3783 | 2024-02-02 | Carpe Diem       | W   | 0.095      | -            | -                | -                | -         |     0.59 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|            3 |     4047 | 2024-01-20 | M80              | L   | 0.009      | -            | -                | -                | -         |    -0.05 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|            2 |     4091 | 2024-01-19 | Liquid           | L   | 0.003      | -            | -                | -                | -         |    -0.00 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|            1 |     4096 | 2024-01-19 | M80              | W   | 0.002      | -            | -                | -                | -         |     0.07 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($15,737.02)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.996 | $1,500.00      | $1,494.31       |
| 2024-06-09 |      0.950 | $15,000.00     | $14,242.70      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
