### Roster Details<br />
Team Name: KZG<br />
Roster: Estate, Hassie, JiNxZiE, Mingovi, Samuukxs<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [166](../standings_global.md)<br />
Regional Rank: [15]( ../standings_asia.md)<br />
Final Rank Value:  670.4<br />
<br />
Final Rank Value (670.4) = Starting Rank Value (725.9) + Head To Head Adjustments (-55.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.328[<sup>1</sup>](#table2)
- Bounty Collected: 0.224[<sup>2</sup>](#table1)
- Opponent Network: 0.012[<sup>2</sup>](#table1)
- LAN Wins: 0.054[<sup>2</sup>](#table1)

The average of these factors is 0.155<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 725.9
- 400 + ( ( 0.155 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 725.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           32 |     1001 | 2024-05-22 | Bad News Kangaroos | L   | 0.864      | -            | -                | -                | -         |    -6.38 | Estate, Hassie, JiNxZiE, Mingovi, Samuukxs    |
|           31 |     1006 | 2024-05-22 | Bad News Kangaroos | L   | 0.864      | -            | -                | -                | -         |    -6.74 | Estate, Hassie, JiNxZiE, Mingovi, Samuukxs    |
|           30 |     1260 | 2024-05-15 | DXA                | W   | 0.818      | 0.333        | 0.004 (0.001)    | 0.156 (0.042)    | 0 (0.000) |    11.72 | Estate, Hassie, JiNxZiE, Mingovi, Samuukxs    |
|           29 |     1264 | 2024-05-15 | DXA                | W   | 0.818      | 0.333        | 0.004 (0.001)    | 0.156 (0.042)    | 0 (0.000) |    12.60 | Estate, Hassie, JiNxZiE, Mingovi, Samuukxs    |
|           28 |     1453 | 2024-05-08 | Rooster            | L   | 0.771      | -            | -                | -                | -         |    -6.02 | Estate, Hassie, JiNxZiE, Mingovi, Samuukxs    |
|           27 |     1455 | 2024-05-08 | Rooster            | L   | 0.771      | -            | -                | -                | -         |    -6.33 | Estate, Hassie, JiNxZiE, Mingovi, Samuukxs    |
|           26 |     1707 | 2024-04-26 | Rooster            | L   | 0.691      | -            | -                | -                | -         |    -5.97 | Estate, Hassie, KRAXYT, Mingovi, Samuukxs     |
|           25 |     1711 | 2024-04-25 | MIBR               | L   | 0.689      | -            | -                | -                | -         |    -0.12 | Estate, Hassie, KRAXYT, Mingovi, Samuukxs     |
|           24 |     1972 | 2024-04-17 | Mindfreak          | L   | 0.631      | -            | -                | -                | -         |    -8.05 | Hassie, Jynx, KRAXYT, Mingovi, Samuukxs       |
|           23 |     2143 | 2024-04-10 | Canon Event        | W   | 0.585      | 0.333        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.59 | Estate, Hassie, KRAXYT, Mingovi, Samuukxs     |
|           22 |     2149 | 2024-04-10 | Canon Event        | W   | 0.584      | 0.333        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.77 | Estate, Hassie, KRAXYT, Mingovi, Samuukxs     |
|           21 |     2370 | 2024-04-03 | Vantage            | L   | 0.538      | -            | -                | -                | -         |    -8.23 | Estate, Hassie, KRAXYT, Mingovi, Samuukxs     |
|           20 |     2371 | 2024-04-03 | Vantage            | L   | 0.538      | -            | -                | -                | -         |    -8.63 | Estate, Hassie, KRAXYT, Mingovi, Samuukxs     |
|           19 |     2499 | 2024-03-27 | FlyQuest           | L   | 0.491      | -            | -                | -                | -         |    -0.42 | Estate, Hassie, KRAXYT, Mingovi, Samuukxs     |
|           18 |     2505 | 2024-03-27 | FlyQuest           | L   | 0.491      | -            | -                | -                | -         |    -0.42 | Estate, Hassie, KRAXYT, Mingovi, Samuukxs     |
|           17 |     2548 | 2024-03-23 | Arcade             | W   | 0.465      | 0.315        | 0.005 (0.001)    | 0.123 (0.018)    | 1 (0.465) |     7.52 | Estate, Hassie, KRAXYT, Mingovi, Samuukxs     |
|           16 |     2549 | 2024-03-23 | DXA                | L   | 0.464      | -            | -                | -                | -         |    -7.26 | Estate, Hassie, KRAXYT, Mingovi, Samuukxs     |
|           15 |     2769 | 2024-03-13 | RKON               | L   | 0.398      | -            | -                | -                | -         |    -9.17 | bebest, Estate, Hassie, Mingovi, Samuukxs     |
|           14 |     2775 | 2024-03-13 | RKON               | W   | 0.398      | 0.333        | 0.000 (0.000)    | 0.059 (0.008)    | 0 (0.000) |     3.40 | bebest, Estate, Hassie, Mingovi, Samuukxs     |
|           13 |     2943 | 2024-03-06 | Arcade             | L   | 0.352      | -            | -                | -                | -         |    -5.60 | Estate, Hassie, Mingovi, pain, Samuukxs       |
|           12 |     2950 | 2024-03-06 | Arcade             | L   | 0.351      | -            | -                | -                | -         |    -5.78 | Estate, Hassie, Mingovi, pain, Samuukxs       |
|           11 |     3246 | 2024-02-21 | Mindfreak          | L   | 0.258      | -            | -                | -                | -         |    -3.94 | Estate, Hassie, Mingovi, pain, Samuukxs       |
|           10 |     3253 | 2024-02-21 | Mindfreak          | L   | 0.258      | -            | -                | -                | -         |    -4.02 | Estate, Hassie, Mingovi, pain, Samuukxs       |
|            9 |     3279 | 2024-02-20 | Cringexe           | L   | 0.251      | -            | -                | -                | -         |    -6.17 | dpr, Estate, Hassie, Mingovi, Samuukxs        |
|            8 |     3323 | 2024-02-18 | Arcade             | L   | 0.238      | -            | -                | -                | -         |    -4.19 | dpr, Hassie, Lexon, Mingovi, Samuukxs         |
|            7 |     3377 | 2024-02-16 | sunday school      | L   | 0.225      | -            | -                | -                | -         |    -4.22 | Estate, Hassie, Mingovi, pain, Samuukxs       |
|            6 |     3402 | 2024-02-15 | sunday school      | W   | 0.218      | 0.143        | 0.005 (0.000)    | 0.027 (0.001)    | 0 (0.000) |     2.80 | Estate, Hassie, Mingovi, pain, Samuukxs       |
|            5 |     3406 | 2024-02-14 | Vantage            | W   | 0.217      | 0.143        | 0.000 (0.000)    | 0.009 (0.000)    | 0 (0.000) |     1.42 | Estate, Hassie, Mingovi, pain, Samuukxs       |
|            4 |     3447 | 2024-02-14 | Mindfreak          | W   | 0.211      | 0.143        | 0.005 (0.000)    | 0.212 (0.006)    | 0 (0.000) |     3.29 | Estate, Hassie, Mingovi, pain, Samuukxs       |
|            3 |     3472 | 2024-02-13 | RKON               | W   | 0.204      | 0.143        | 0.000 (0.000)    | 0.059 (0.002)    | 0 (0.000) |     1.52 | Estate, Hassie, Mingovi, pain, Samuukxs       |
|            2 |     3793 | 2024-01-24 | Vantage            | L   | 0.071      | -            | -                | -                | -         |    -1.26 | Estate, Hassie, Mingovi, pain, Samuukxs       |
|            1 |     4165 | 2024-01-15 | Mindfreak          | L   | 0.011      | -            | -                | -                | -         |    -0.27 | constantinos, Hassie, Mingovi, pain, Samuukxs |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,313.13)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.984 | $450.00        | $442.90         |
| 2024-04-28 |      0.705 | $2,000.00      | $1,409.29       |
| 2024-03-23 |      0.465 | $992.00        | $460.95         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
