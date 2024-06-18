### Roster Details<br />
Team Name: KZG<br />
Roster: Estate, Hassie, JiNxZiE, Mingovi, Samuukxs<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [170](../standings_global.md)<br />
Regional Rank: [18]( ../standings_asia.md)<br />
Final Rank Value:  653.4<br />
<br />
Final Rank Value (653.4) = Starting Rank Value (726.6) + Head To Head Adjustments (-73.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.330[<sup>1</sup>](#table2)
- Bounty Collected: 0.231[<sup>2</sup>](#table1)
- Opponent Network: 0.018[<sup>2</sup>](#table1)
- LAN Wins: 0.065[<sup>2</sup>](#table1)

The average of these factors is 0.161<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 726.6
- 400 + ( ( 0.161 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 726.6


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
|           32 |      867 | 2024-05-22 | Bad News Kangaroos | L   | 1.000      | -            | -                | -                | -         |    -6.32 | Estate, Hassie, JiNxZiE, Mingovi, Samuukxs    |
|           31 |      872 | 2024-05-22 | Bad News Kangaroos | L   | 1.000      | -            | -                | -                | -         |    -6.69 | Estate, Hassie, JiNxZiE, Mingovi, Samuukxs    |
|           30 |     1126 | 2024-05-15 | DXA                | W   | 0.974      | 0.333        | 0.004 (0.001)    | 0.179 (0.058)    | 0 (0.000) |    13.87 | Estate, Hassie, JiNxZiE, Mingovi, Samuukxs    |
|           29 |     1130 | 2024-05-15 | DXA                | W   | 0.973      | 0.333        | 0.004 (0.001)    | 0.179 (0.058)    | 0 (0.000) |    15.11 | Estate, Hassie, JiNxZiE, Mingovi, Samuukxs    |
|           28 |     1319 | 2024-05-08 | Rooster            | L   | 0.927      | -            | -                | -                | -         |    -6.36 | Estate, Hassie, JiNxZiE, Mingovi, Samuukxs    |
|           27 |     1321 | 2024-05-08 | Rooster            | L   | 0.927      | -            | -                | -                | -         |    -6.73 | Estate, Hassie, JiNxZiE, Mingovi, Samuukxs    |
|           26 |     1573 | 2024-04-26 | Rooster            | L   | 0.847      | -            | -                | -                | -         |    -6.51 | Estate, Hassie, KRAXYT, Mingovi, Samuukxs     |
|           25 |     1577 | 2024-04-25 | MIBR               | L   | 0.845      | -            | -                | -                | -         |    -0.12 | Estate, Hassie, KRAXYT, Mingovi, Samuukxs     |
|           24 |     1838 | 2024-04-17 | Mindfreak          | L   | 0.787      | -            | -                | -                | -         |    -9.20 | Hassie, Jynx, KRAXYT, Mingovi, Samuukxs       |
|           23 |     2009 | 2024-04-10 | Canon Event        | W   | 0.740      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.80 | Estate, Hassie, KRAXYT, Mingovi, Samuukxs     |
|           22 |     2015 | 2024-04-10 | Canon Event        | W   | 0.740      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     6.10 | Estate, Hassie, KRAXYT, Mingovi, Samuukxs     |
|           21 |     2236 | 2024-04-03 | Vantage            | L   | 0.694      | -            | -                | -                | -         |   -10.15 | Estate, Hassie, KRAXYT, Mingovi, Samuukxs     |
|           20 |     2237 | 2024-04-03 | Vantage            | L   | 0.694      | -            | -                | -                | -         |   -10.80 | Estate, Hassie, KRAXYT, Mingovi, Samuukxs     |
|           19 |     2366 | 2024-03-27 | FlyQuest           | L   | 0.647      | -            | -                | -                | -         |    -0.40 | Estate, Hassie, KRAXYT, Mingovi, Samuukxs     |
|           18 |     2372 | 2024-03-27 | FlyQuest           | L   | 0.647      | -            | -                | -                | -         |    -0.40 | Estate, Hassie, KRAXYT, Mingovi, Samuukxs     |
|           17 |     2415 | 2024-03-23 | Arcade             | W   | 0.620      | 0.315        | 0.005 (0.001)    | 0.157 (0.031)    | 1 (0.620) |    10.67 | Estate, Hassie, KRAXYT, Mingovi, Samuukxs     |
|           16 |     2416 | 2024-03-23 | DXA                | L   | 0.620      | -            | -                | -                | -         |    -9.45 | Estate, Hassie, KRAXYT, Mingovi, Samuukxs     |
|           15 |     2636 | 2024-03-13 | RKON               | L   | 0.554      | -            | -                | -                | -         |   -12.35 | bebest, Estate, Hassie, Mingovi, Samuukxs     |
|           14 |     2642 | 2024-03-13 | RKON               | W   | 0.554      | 0.333        | 0.000 (0.000)    | 0.074 (0.014)    | 0 (0.000) |     5.11 | bebest, Estate, Hassie, Mingovi, Samuukxs     |
|           13 |     2810 | 2024-03-06 | Arcade             | L   | 0.507      | -            | -                | -                | -         |    -7.60 | Estate, Hassie, Mingovi, pain, Samuukxs       |
|           12 |     2817 | 2024-03-06 | Arcade             | L   | 0.507      | -            | -                | -                | -         |    -7.95 | Estate, Hassie, Mingovi, pain, Samuukxs       |
|           11 |     3113 | 2024-02-21 | Mindfreak          | L   | 0.414      | -            | -                | -                | -         |    -6.11 | Estate, Hassie, Mingovi, pain, Samuukxs       |
|           10 |     3120 | 2024-02-21 | Mindfreak          | L   | 0.414      | -            | -                | -                | -         |    -6.34 | Estate, Hassie, Mingovi, pain, Samuukxs       |
|            9 |     3146 | 2024-02-20 | Cringexe           | L   | 0.407      | -            | -                | -                | -         |    -9.91 | dpr, Estate, Hassie, Mingovi, Samuukxs        |
|            8 |     3190 | 2024-02-18 | Arcade             | L   | 0.393      | -            | -                | -                | -         |    -6.91 | dpr, Hassie, Lexon, Mingovi, Samuukxs         |
|            7 |     3244 | 2024-02-16 | sunday school      | L   | 0.381      | -            | -                | -                | -         |    -7.15 | Estate, Hassie, Mingovi, pain, Samuukxs       |
|            6 |     3269 | 2024-02-15 | sunday school      | W   | 0.374      | 0.143        | 0.006 (0.000)    | 0.040 (0.002)    | 0 (0.000) |     4.78 | Estate, Hassie, Mingovi, pain, Samuukxs       |
|            5 |     3273 | 2024-02-14 | Vantage            | W   | 0.373      | 0.143        | 0.000 (0.000)    | 0.013 (0.001)    | 0 (0.000) |     2.46 | Estate, Hassie, Mingovi, pain, Samuukxs       |
|            4 |     3314 | 2024-02-14 | Mindfreak          | W   | 0.366      | 0.143        | 0.005 (0.000)    | 0.226 (0.012)    | 0 (0.000) |     5.72 | Estate, Hassie, Mingovi, pain, Samuukxs       |
|            3 |     3339 | 2024-02-13 | RKON               | W   | 0.360      | 0.143        | 0.000 (0.000)    | 0.074 (0.004)    | 0 (0.000) |     2.74 | Estate, Hassie, Mingovi, pain, Samuukxs       |
|            2 |     3660 | 2024-01-24 | Vantage            | L   | 0.227      | -            | -                | -                | -         |    -4.09 | Estate, Hassie, Mingovi, pain, Samuukxs       |
|            1 |     4032 | 2024-01-15 | Mindfreak          | L   | 0.167      | -            | -                | -                | -         |    -4.02 | constantinos, Hassie, Mingovi, pain, Samuukxs |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,786.01)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      1.000 | $450.00        | $450.00         |
| 2024-04-28 |      0.860 | $2,000.00      | $1,720.63       |
| 2024-03-23 |      0.620 | $992.00        | $615.37         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
