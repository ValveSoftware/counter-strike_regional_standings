### Roster Details<br />
Team Name: KZG<br />
Roster: Estate, Hassie, JiNxZiE, Mingovi, Samuukxs<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [170](../standings_global.md)<br />
Regional Rank: [14]( ../standings_asia.md)<br />
Final Rank Value:  667.7<br />
<br />
Final Rank Value (667.7) = Starting Rank Value (728.4) + Head To Head Adjustments (-60.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.328[<sup>1</sup>](#table2)
- Bounty Collected: 0.222[<sup>2</sup>](#table1)
- Opponent Network: 0.013[<sup>2</sup>](#table1)
- LAN Wins: 0.049[<sup>2</sup>](#table1)

The average of these factors is 0.153<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 728.4
- 400 + ( ( 0.153 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 728.4


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
|           31 |     1165 | 2024-05-22 | Bad News Kangaroos | L   | 0.825      | -            | -                | -                | -         |   -10.76 | Estate, Hassie, JiNxZiE, Mingovi, Samuukxs |
|           30 |     1170 | 2024-05-22 | Bad News Kangaroos | L   | 0.825      | -            | -                | -                | -         |   -11.55 | Estate, Hassie, JiNxZiE, Mingovi, Samuukxs |
|           29 |     1424 | 2024-05-15 | DXA                | W   | 0.778      | 0.333        | 0.004 (0.001)    | 0.187 (0.049)    | 0 (0.000) |    11.26 | Estate, Hassie, JiNxZiE, Mingovi, Samuukxs |
|           28 |     1428 | 2024-05-15 | DXA                | W   | 0.778      | 0.333        | 0.004 (0.001)    | 0.187 (0.048)    | 0 (0.000) |    12.07 | Estate, Hassie, JiNxZiE, Mingovi, Samuukxs |
|           27 |     1617 | 2024-05-08 | Rooster            | L   | 0.732      | -            | -                | -                | -         |    -5.90 | Estate, Hassie, JiNxZiE, Mingovi, Samuukxs |
|           26 |     1619 | 2024-05-08 | Rooster            | L   | 0.731      | -            | -                | -                | -         |    -6.21 | Estate, Hassie, JiNxZiE, Mingovi, Samuukxs |
|           25 |     1871 | 2024-04-26 | Rooster            | L   | 0.652      | -            | -                | -                | -         |    -5.80 | Estate, Hassie, KRAXYT, Mingovi, Samuukxs  |
|           24 |     1875 | 2024-04-25 | MIBR               | L   | 0.650      | -            | -                | -                | -         |    -0.12 | Estate, Hassie, KRAXYT, Mingovi, Samuukxs  |
|           23 |     2136 | 2024-04-17 | Mindfreak          | L   | 0.592      | -            | -                | -                | -         |    -7.90 | Hassie, Jynx, KRAXYT, Mingovi, Samuukxs    |
|           22 |     2307 | 2024-04-10 | Canon Event        | W   | 0.545      | 0.333        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.25 | Estate, Hassie, KRAXYT, Mingovi, Samuukxs  |
|           21 |     2313 | 2024-04-10 | Canon Event        | W   | 0.545      | 0.333        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.41 | Estate, Hassie, KRAXYT, Mingovi, Samuukxs  |
|           20 |     2534 | 2024-04-03 | Vantage            | L   | 0.499      | -            | -                | -                | -         |    -7.71 | Estate, Hassie, KRAXYT, Mingovi, Samuukxs  |
|           19 |     2535 | 2024-04-03 | Vantage            | L   | 0.498      | -            | -                | -                | -         |    -8.05 | Estate, Hassie, KRAXYT, Mingovi, Samuukxs  |
|           18 |     2663 | 2024-03-27 | FlyQuest           | L   | 0.452      | -            | -                | -                | -         |    -0.42 | Estate, Hassie, KRAXYT, Mingovi, Samuukxs  |
|           17 |     2669 | 2024-03-27 | FlyQuest           | L   | 0.452      | -            | -                | -                | -         |    -0.42 | Estate, Hassie, KRAXYT, Mingovi, Samuukxs  |
|           16 |     2712 | 2024-03-23 | Arcade             | W   | 0.425      | 0.315        | 0.004 (0.001)    | 0.110 (0.015)    | 1 (0.425) |     6.77 | Estate, Hassie, KRAXYT, Mingovi, Samuukxs  |
|           15 |     2713 | 2024-03-23 | DXA                | L   | 0.424      | -            | -                | -                | -         |    -6.60 | Estate, Hassie, KRAXYT, Mingovi, Samuukxs  |
|           14 |     2933 | 2024-03-13 | RKON               | L   | 0.359      | -            | -                | -                | -         |    -8.33 | bebest, Estate, Hassie, Mingovi, Samuukxs  |
|           13 |     2939 | 2024-03-13 | RKON               | W   | 0.358      | 0.333        | 0.000 (0.000)    | 0.053 (0.006)    | 0 (0.000) |     2.99 | bebest, Estate, Hassie, Mingovi, Samuukxs  |
|           12 |     3107 | 2024-03-06 | Arcade             | L   | 0.312      | -            | -                | -                | -         |    -5.04 | Estate, Hassie, Mingovi, pain, Samuukxs    |
|           11 |     3114 | 2024-03-06 | Arcade             | L   | 0.312      | -            | -                | -                | -         |    -5.18 | Estate, Hassie, Mingovi, pain, Samuukxs    |
|           10 |     3410 | 2024-02-21 | Mindfreak          | L   | 0.219      | -            | -                | -                | -         |    -3.44 | Estate, Hassie, Mingovi, pain, Samuukxs    |
|            9 |     3417 | 2024-02-21 | Mindfreak          | L   | 0.218      | -            | -                | -                | -         |    -3.50 | Estate, Hassie, Mingovi, pain, Samuukxs    |
|            8 |     3443 | 2024-02-20 | Cringexe           | L   | 0.211      | -            | -                | -                | -         |    -5.22 | dpr, Estate, Hassie, Mingovi, Samuukxs     |
|            7 |     3487 | 2024-02-18 | Arcade             | L   | 0.198      | -            | -                | -                | -         |    -3.49 | dpr, Hassie, Lexon, Mingovi, Samuukxs      |
|            6 |     3541 | 2024-02-16 | sunday school      | L   | 0.185      | -            | -                | -                | -         |    -3.48 | Estate, Hassie, Mingovi, pain, Samuukxs    |
|            5 |     3566 | 2024-02-15 | sunday school      | W   | 0.179      | 0.143        | 0.005 (0.000)    | 0.023 (0.001)    | 0 (0.000) |     2.29 | Estate, Hassie, Mingovi, pain, Samuukxs    |
|            4 |     3570 | 2024-02-14 | Vantage            | W   | 0.177      | 0.143        | 0.000 (0.000)    | 0.007 (0.000)    | 0 (0.000) |     1.15 | Estate, Hassie, Mingovi, pain, Samuukxs    |
|            3 |     3611 | 2024-02-14 | Mindfreak          | W   | 0.171      | 0.143        | 0.005 (0.000)    | 0.218 (0.005)    | 0 (0.000) |     2.60 | Estate, Hassie, Mingovi, pain, Samuukxs    |
|            2 |     3636 | 2024-02-13 | RKON               | W   | 0.165      | 0.143        | 0.000 (0.000)    | 0.053 (0.001)    | 0 (0.000) |     1.22 | Estate, Hassie, Mingovi, pain, Samuukxs    |
|            1 |     3957 | 2024-01-24 | Vantage            | L   | 0.031      | -            | -                | -                | -         |    -0.55 | Estate, Hassie, Mingovi, pain, Samuukxs    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,176.79)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.945 | $450.00        | $425.08         |
| 2024-04-28 |      0.665 | $2,000.00      | $1,330.07       |
| 2024-03-23 |      0.425 | $992.00        | $421.65         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
