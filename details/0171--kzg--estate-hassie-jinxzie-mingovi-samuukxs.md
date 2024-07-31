### Roster Details<br />
Team Name: KZG<br />
Roster: Estate, Hassie, JiNxZiE, Mingovi, Samuukxs<br />
Global Rank: [171](../standings_global.md)<br />
<br />
Region: [Asia]( ../standings_asia.md)<br />
Regional Rank: [15]( ../standings_asia.md)<br />
<br />
Final Rank Value:  665.4<br />
<br />
Final Rank Value (665.4) = Starting Rank Value (712.6) + Head To Head Adjustments (-47.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.308[<sup>1</sup>](#table2)
- Bounty Collected: 0.228[<sup>2</sup>](#table1)
- Opponent Network: 0.032[<sup>2</sup>](#table1)
- LAN Wins: 0.038[<sup>2</sup>](#table1)

The average of these factors is 0.151<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 712.6
- 400 + ( ( 0.151 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 712.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           35 |       74 | 2024-07-30 | Above The Rest     | L   | 1.000      | -            | -                | -                | -         |   -22.51 | Estate, Hassie, JiNxZiE, Mingovi, Samuukxs |
|           34 |      293 | 2024-07-23 | DXA                | W   | 1.000      | 0.333        | 0.002 (0.001)    | 0.228 (0.076)    | 0 (0.000) |    14.29 | Estate, Hassie, JiNxZiE, Mingovi, Samuukxs |
|           33 |      298 | 2024-07-23 | DXA                | W   | 1.000      | 0.333        | 0.002 (0.001)    | 0.228 (0.076)    | 0 (0.000) |    15.61 | Estate, Hassie, JiNxZiE, Mingovi, Samuukxs |
|           32 |      320 | 2024-07-22 | Arcade             | W   | 1.000      | 0.333        | 0.003 (0.001)    | 0.139 (0.046)    | 0 (0.000) |    15.04 | Estate, Hassie, JiNxZiE, Mingovi, Samuukxs |
|           31 |      323 | 2024-07-22 | Arcade             | L   | 1.000      | -            | -                | -                | -         |   -16.53 | Estate, Hassie, JiNxZiE, Mingovi, Samuukxs |
|           30 |     1695 | 2024-05-22 | Bad News Kangaroos | L   | 0.730      | -            | -                | -                | -         |   -10.05 | Estate, Hassie, JiNxZiE, Mingovi, Samuukxs |
|           29 |     1700 | 2024-05-22 | Bad News Kangaroos | L   | 0.730      | -            | -                | -                | -         |   -10.72 | Estate, Hassie, JiNxZiE, Mingovi, Samuukxs |
|           28 |     1954 | 2024-05-15 | DXA                | W   | 0.684      | 0.333        | 0.002 (0.001)    | 0.228 (0.052)    | 0 (0.000) |     9.85 | Estate, Hassie, JiNxZiE, Mingovi, Samuukxs |
|           27 |     1958 | 2024-05-15 | DXA                | W   | 0.684      | 0.333        | 0.002 (0.001)    | 0.228 (0.052)    | 0 (0.000) |    10.46 | Estate, Hassie, JiNxZiE, Mingovi, Samuukxs |
|           26 |     2147 | 2024-05-08 | Rooster            | L   | 0.637      | -            | -                | -                | -         |    -6.10 | Estate, Hassie, JiNxZiE, Mingovi, Samuukxs |
|           25 |     2149 | 2024-05-08 | Rooster            | L   | 0.637      | -            | -                | -                | -         |    -6.41 | Estate, Hassie, JiNxZiE, Mingovi, Samuukxs |
|           24 |     2401 | 2024-04-26 | Rooster            | L   | 0.557      | -            | -                | -                | -         |    -5.87 | Estate, Hassie, KRAXYT, Mingovi, Samuukxs  |
|           23 |     2405 | 2024-04-25 | MIBR               | L   | 0.555      | -            | -                | -                | -         |    -0.21 | Estate, Hassie, KRAXYT, Mingovi, Samuukxs  |
|           22 |     2666 | 2024-04-17 | Mindfreak          | L   | 0.497      | -            | -                | -                | -         |    -7.74 | Hassie, Jynx, KRAXYT, Mingovi, Samuukxs    |
|           21 |     2837 | 2024-04-10 | Canon Event        | W   | 0.450      | 0.333        | 0.000 (0.000)    | -                | 0 (0.000) |     3.56 | Estate, Hassie, KRAXYT, Mingovi, Samuukxs  |
|           20 |     2843 | 2024-04-10 | Canon Event        | W   | 0.450      | 0.333        | 0.000 (0.000)    | -                | 0 (0.000) |     3.67 | Estate, Hassie, KRAXYT, Mingovi, Samuukxs  |
|           19 |     3064 | 2024-04-03 | Vantage            | L   | 0.404      | -            | -                | -                | -         |    -6.66 | Estate, Hassie, KRAXYT, Mingovi, Samuukxs  |
|           18 |     3065 | 2024-04-03 | Vantage            | L   | 0.404      | -            | -                | -                | -         |    -6.90 | Estate, Hassie, KRAXYT, Mingovi, Samuukxs  |
|           17 |     3193 | 2024-03-27 | FlyQuest           | L   | 0.357      | -            | -                | -                | -         |    -0.67 | Estate, Hassie, KRAXYT, Mingovi, Samuukxs  |
|           16 |     3199 | 2024-03-27 | FlyQuest           | L   | 0.357      | -            | -                | -                | -         |    -0.68 | Estate, Hassie, KRAXYT, Mingovi, Samuukxs  |
|           15 |     3242 | 2024-03-23 | Arcade             | W   | 0.331      | 0.315        | 0.003 (0.000)    | 0.139 (0.014)    | 1 (0.331) |     5.05 | Estate, Hassie, KRAXYT, Mingovi, Samuukxs  |
|           14 |     3243 | 2024-03-23 | DXA                | L   | 0.330      | -            | -                | -                | -         |    -5.27 | Estate, Hassie, KRAXYT, Mingovi, Samuukxs  |
|           13 |     3463 | 2024-03-13 | RKON               | L   | 0.264      | -            | -                | -                | -         |    -6.20 | bebest, Estate, Hassie, Mingovi, Samuukxs  |
|           12 |     3469 | 2024-03-13 | RKON               | W   | 0.264      | 0.333        | -                | 0.035 (0.003)    | 0 (0.000) |     2.14 | bebest, Estate, Hassie, Mingovi, Samuukxs  |
|           11 |     3637 | 2024-03-06 | Arcade             | L   | 0.217      | -            | -                | -                | -         |    -3.63 | Estate, Hassie, Mingovi, pain, Samuukxs    |
|           10 |     3644 | 2024-03-06 | Arcade             | L   | 0.217      | -            | -                | -                | -         |    -3.69 | Estate, Hassie, Mingovi, pain, Samuukxs    |
|            9 |     3940 | 2024-02-21 | Mindfreak          | L   | 0.124      | -            | -                | -                | -         |    -2.15 | Estate, Hassie, Mingovi, pain, Samuukxs    |
|            8 |     3947 | 2024-02-21 | Mindfreak          | L   | 0.124      | -            | -                | -                | -         |    -2.17 | Estate, Hassie, Mingovi, pain, Samuukxs    |
|            7 |     3973 | 2024-02-20 | Cringexe           | L   | 0.117      | -            | -                | -                | -         |    -2.87 | dpr, Estate, Hassie, Mingovi, Samuukxs     |
|            6 |     4017 | 2024-02-18 | Arcade             | L   | 0.103      | -            | -                | -                | -         |    -1.82 | dpr, Hassie, Lexon, Mingovi, Samuukxs      |
|            5 |     4071 | 2024-02-16 | sunday school      | L   | 0.091      | -            | -                | -                | -         |    -1.73 | Estate, Hassie, Mingovi, pain, Samuukxs    |
|            4 |     4096 | 2024-02-15 | sunday school      | W   | 0.084      | 0.143        | 0.003 (0.000)    | -                | 0 (0.000) |     1.04 | Estate, Hassie, Mingovi, pain, Samuukxs    |
|            3 |     4100 | 2024-02-14 | Vantage            | W   | 0.083      | 0.143        | -                | 0.076 (0.001)    | -         |     1.10 | Estate, Hassie, Mingovi, pain, Samuukxs    |
|            2 |     4141 | 2024-02-14 | Mindfreak          | W   | 0.077      | 0.143        | 0.004 (0.000)    | 0.054 (0.001)    | -         |     1.06 | Estate, Hassie, Mingovi, pain, Samuukxs    |
|            1 |     4166 | 2024-02-13 | RKON               | W   | 0.070      | 0.143        | -                | 0.035 (0.000)    | -         |     0.53 | Estate, Hassie, Mingovi, pain, Samuukxs    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,851.48)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.850 | $450.00        | $382.54         |
| 2024-04-28 |      0.571 | $2,000.00      | $1,141.04       |
| 2024-03-23 |      0.331 | $992.00        | $327.90         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
