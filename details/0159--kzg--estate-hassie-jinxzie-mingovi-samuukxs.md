### Roster Details<br />
Team Name: KZG<br />
Roster: Estate, Hassie, JiNxZiE, Mingovi, Samuukxs<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [159](../standings_global.md)<br />
Regional Rank: [15]( ../standings_asia.md)<br />
Final Rank Value:  689.1<br />
<br />
Final Rank Value (689.1) = Starting Rank Value (719.7) + Head To Head Adjustments (-30.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.319[<sup>1</sup>](#table2)
- Bounty Collected: 0.235[<sup>2</sup>](#table1)
- Opponent Network: 0.033[<sup>2</sup>](#table1)
- LAN Wins: 0.045[<sup>2</sup>](#table1)

The average of these factors is 0.158<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 719.7
- 400 + ( ( 0.158 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 719.7


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
|           34 |       51 | 2024-07-23 | DXA                | W   | 1.000      | 0.333        | 0.003 (0.001)    | 0.217 (0.072)    | 0 (0.000) |    14.36 | Estate, Hassie, JiNxZiE, Mingovi, Samuukxs |
|           33 |       56 | 2024-07-23 | DXA                | W   | 1.000      | 0.333        | 0.003 (0.001)    | 0.217 (0.072)    | 0 (0.000) |    15.68 | Estate, Hassie, JiNxZiE, Mingovi, Samuukxs |
|           32 |       78 | 2024-07-22 | Arcade             | W   | 1.000      | 0.333        | 0.004 (0.001)    | 0.159 (0.053)    | 0 (0.000) |    15.18 | Estate, Hassie, JiNxZiE, Mingovi, Samuukxs |
|           31 |       81 | 2024-07-22 | Arcade             | L   | 1.000      | -            | -                | -                | -         |   -16.38 | Estate, Hassie, JiNxZiE, Mingovi, Samuukxs |
|           30 |     1453 | 2024-05-22 | Bad News Kangaroos | L   | 0.778      | -            | -                | -                | -         |   -10.51 | Estate, Hassie, JiNxZiE, Mingovi, Samuukxs |
|           29 |     1458 | 2024-05-22 | Bad News Kangaroos | L   | 0.777      | -            | -                | -                | -         |   -11.25 | Estate, Hassie, JiNxZiE, Mingovi, Samuukxs |
|           28 |     1712 | 2024-05-15 | DXA                | W   | 0.731      | 0.333        | 0.003 (0.001)    | 0.217 (0.053)    | 0 (0.000) |    10.52 | Estate, Hassie, JiNxZiE, Mingovi, Samuukxs |
|           27 |     1716 | 2024-05-15 | DXA                | W   | 0.731      | 0.333        | 0.003 (0.001)    | 0.217 (0.053)    | 0 (0.000) |    11.22 | Estate, Hassie, JiNxZiE, Mingovi, Samuukxs |
|           26 |     1905 | 2024-05-08 | Rooster            | L   | 0.684      | -            | -                | -                | -         |    -6.17 | Estate, Hassie, JiNxZiE, Mingovi, Samuukxs |
|           25 |     1907 | 2024-05-08 | Rooster            | L   | 0.684      | -            | -                | -                | -         |    -6.49 | Estate, Hassie, JiNxZiE, Mingovi, Samuukxs |
|           24 |     2159 | 2024-04-26 | Rooster            | L   | 0.604      | -            | -                | -                | -         |    -6.01 | Estate, Hassie, KRAXYT, Mingovi, Samuukxs  |
|           23 |     2163 | 2024-04-25 | MIBR               | L   | 0.602      | -            | -                | -                | -         |    -0.19 | Estate, Hassie, KRAXYT, Mingovi, Samuukxs  |
|           22 |     2424 | 2024-04-17 | Mindfreak          | L   | 0.545      | -            | -                | -                | -         |    -8.36 | Hassie, Jynx, KRAXYT, Mingovi, Samuukxs    |
|           21 |     2595 | 2024-04-10 | Canon Event        | W   | 0.498      | 0.333        | 0.000 (0.000)    | -                | 0 (0.000) |     3.86 | Estate, Hassie, KRAXYT, Mingovi, Samuukxs  |
|           20 |     2601 | 2024-04-10 | Canon Event        | W   | 0.497      | 0.333        | 0.000 (0.000)    | -                | 0 (0.000) |     3.98 | Estate, Hassie, KRAXYT, Mingovi, Samuukxs  |
|           19 |     2822 | 2024-04-03 | Vantage            | L   | 0.451      | -            | -                | -                | -         |    -7.34 | Estate, Hassie, KRAXYT, Mingovi, Samuukxs  |
|           18 |     2823 | 2024-04-03 | Vantage            | L   | 0.451      | -            | -                | -                | -         |    -7.63 | Estate, Hassie, KRAXYT, Mingovi, Samuukxs  |
|           17 |     2951 | 2024-03-27 | FlyQuest           | L   | 0.405      | -            | -                | -                | -         |    -0.57 | Estate, Hassie, KRAXYT, Mingovi, Samuukxs  |
|           16 |     2957 | 2024-03-27 | FlyQuest           | L   | 0.404      | -            | -                | -                | -         |    -0.58 | Estate, Hassie, KRAXYT, Mingovi, Samuukxs  |
|           15 |     3000 | 2024-03-23 | Arcade             | W   | 0.378      | 0.315        | 0.004 (0.000)    | 0.159 (0.019)    | 1 (0.378) |     5.90 | Estate, Hassie, KRAXYT, Mingovi, Samuukxs  |
|           14 |     3001 | 2024-03-23 | DXA                | L   | 0.377      | -            | -                | -                | -         |    -5.97 | Estate, Hassie, KRAXYT, Mingovi, Samuukxs  |
|           13 |     3221 | 2024-03-13 | RKON               | L   | 0.311      | -            | -                | -                | -         |    -7.30 | bebest, Estate, Hassie, Mingovi, Samuukxs  |
|           12 |     3227 | 2024-03-13 | RKON               | W   | 0.311      | 0.333        | -                | 0.045 (0.005)    | 0 (0.000) |     2.53 | bebest, Estate, Hassie, Mingovi, Samuukxs  |
|           11 |     3395 | 2024-03-06 | Arcade             | L   | 0.265      | -            | -                | -                | -         |    -4.34 | Estate, Hassie, Mingovi, pain, Samuukxs    |
|           10 |     3402 | 2024-03-06 | Arcade             | L   | 0.264      | -            | -                | -                | -         |    -4.44 | Estate, Hassie, Mingovi, pain, Samuukxs    |
|            9 |     3698 | 2024-02-21 | Mindfreak          | L   | 0.171      | -            | -                | -                | -         |    -2.96 | Estate, Hassie, Mingovi, pain, Samuukxs    |
|            8 |     3705 | 2024-02-21 | Mindfreak          | L   | 0.171      | -            | -                | -                | -         |    -3.00 | Estate, Hassie, Mingovi, pain, Samuukxs    |
|            7 |     3731 | 2024-02-20 | Cringexe           | L   | 0.164      | -            | -                | -                | -         |    -4.05 | dpr, Estate, Hassie, Mingovi, Samuukxs     |
|            6 |     3775 | 2024-02-18 | Arcade             | L   | 0.151      | -            | -                | -                | -         |    -2.66 | dpr, Hassie, Lexon, Mingovi, Samuukxs      |
|            5 |     3829 | 2024-02-16 | sunday school      | L   | 0.138      | -            | -                | -                | -         |    -2.67 | Estate, Hassie, Mingovi, pain, Samuukxs    |
|            4 |     3854 | 2024-02-15 | sunday school      | W   | 0.131      | 0.143        | 0.004 (0.000)    | 0.016 (0.000)    | 0 (0.000) |     1.61 | Estate, Hassie, Mingovi, pain, Samuukxs    |
|            3 |     3858 | 2024-02-14 | Vantage            | W   | 0.130      | -            | -                | -                | -         |     0.84 | Estate, Hassie, Mingovi, pain, Samuukxs    |
|            2 |     3899 | 2024-02-14 | Mindfreak          | W   | 0.124      | 0.143        | 0.005 (0.000)    | 0.067 (0.001)    | -         |     1.70 | Estate, Hassie, Mingovi, pain, Samuukxs    |
|            1 |     3924 | 2024-02-13 | RKON               | W   | 0.117      | 0.143        | -                | 0.045 (0.001)    | -         |     0.86 | Estate, Hassie, Mingovi, pain, Samuukxs    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,014.25)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.897 | $450.00        | $403.82         |
| 2024-04-28 |      0.618 | $2,000.00      | $1,235.62       |
| 2024-03-23 |      0.378 | $992.00        | $374.80         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
