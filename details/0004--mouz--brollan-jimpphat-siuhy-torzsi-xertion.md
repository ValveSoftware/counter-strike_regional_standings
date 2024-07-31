### Roster Details<br />
Team Name: MOUZ<br />
Roster: Brollan, Jimpphat, siuhy, torzsi, xertioN<br />
Global Rank: [4](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [4]( ../standings_europe.md)<br />
<br />
Final Rank Value:  1893.2<br />
<br />
Final Rank Value (1893.2) = Starting Rank Value (1876.7) + Head To Head Adjustments (16.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 1.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.663[<sup>2</sup>](#table1)
- Opponent Network: 0.333[<sup>2</sup>](#table1)
- LAN Wins: 0.865[<sup>2</sup>](#table1)

The average of these factors is 0.715<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1876.7
- 400 + ( ( 0.715 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 1876.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           32 |      361 | 2024-07-20 | Natus Vincere      | L   | 1.000      | -            | -                | -                | -         |   -13.56 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           31 |      401 | 2024-07-19 | FURIA              | W   | 1.000      | 1.000        | 0.286 (0.286)    | 0.495 (0.495)    | 1 (1.000) |     5.33 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           30 |      536 | 2024-07-17 | Sashi              | W   | 1.000      | 1.000        | 0.187 (0.187)    | 0.973 (0.973)    | 1 (1.000) |     0.56 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           29 |     1543 | 2024-05-28 | G2                 | L   | 0.775      | -            | -                | -                | -         |   -11.58 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           28 |     1564 | 2024-05-27 | Complexity         | W   | 0.768      | 0.624        | -                | 0.367 (0.176)    | 1 (0.768) |     4.57 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           27 |     1575 | 2024-05-27 | 9z                 | L   | 0.766      | -            | -                | -                | -         |   -22.61 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           26 |     1792 | 2024-05-19 | Spirit             | W   | 0.712      | 0.769        | 1.000 (0.547)    | 0.424 (0.232)    | 1 (0.712) |    11.03 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           25 |     1820 | 2024-05-18 | HEROIC             | W   | 0.705      | 0.769        | -                | 0.382 (0.207)    | 1 (0.705) |     2.82 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           24 |     1899 | 2024-05-16 | Virtus.pro         | W   | 0.691      | 0.769        | 0.483 (0.257)    | -                | 1 (0.691) |     5.15 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           23 |     2004 | 2024-05-14 | BetBoom            | W   | 0.678      | 0.769        | -                | 0.554 (0.289)    | 1 (0.678) |     1.08 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           22 |     2047 | 2024-05-12 | Vitality           | W   | 0.666      | 0.889        | 0.592 (0.350)    | 0.385 (0.228)    | 1 (0.666) |     9.26 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           21 |     2067 | 2024-05-11 | Complexity         | W   | 0.660      | 0.889        | 0.319 (0.187)    | 0.367 (0.215)    | 1 (0.660) |     4.56 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           20 |     2117 | 2024-05-09 | G2                 | W   | 0.646      | 0.889        | 1.000 (0.575)    | 0.492 (0.283)    | 1 (0.646) |    11.71 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           19 |     2210 | 2024-05-04 | Liquid             | W   | 0.613      | 0.889        | 0.323 (0.176)    | 0.430 (0.234)    | -         |     1.74 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           18 |     2279 | 2024-05-01 | GamerLegion        | W   | 0.592      | -            | -                | -                | -         |     0.29 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           17 |     2309 | 2024-04-30 | Bad News Kangaroos | W   | 0.584      | -            | -                | -                | -         |     0.04 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           16 |     2728 | 2024-04-14 | FaZe               | L   | 0.478      | -            | -                | -                | -         |   -10.51 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           15 |     2745 | 2024-04-13 | G2                 | W   | 0.470      | 0.624        | 1.000 (0.294)    | -                | -         |     9.23 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           14 |     2838 | 2024-04-10 | Liquid             | W   | 0.450      | -            | -                | -                | -         |     1.26 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           13 |     2908 | 2024-04-08 | FURIA              | W   | 0.439      | -            | -                | -                | -         |     3.95 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           12 |     2926 | 2024-04-08 | TYLOO              | W   | 0.436      | -            | -                | -                | -         |     0.03 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           11 |     3127 | 2024-03-29 | G2                 | L   | 0.374      | -            | -                | -                | -         |    -4.18 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           10 |     3250 | 2024-03-22 | Complexity         | W   | 0.325      | -            | -                | -                | -         |     2.15 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            9 |     3270 | 2024-03-21 | Eternal Fire       | W   | 0.319      | 1.000        | 0.759 (0.242)    | -                | -         |     3.08 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            8 |     3281 | 2024-03-21 | Gaimin Gladiators  | W   | 0.318      | -            | -                | -                | -         |     0.08 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            7 |     3960 | 2024-02-20 | Spirit             | W   | 0.119      | -            | -                | -                | -         |     2.10 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            6 |     3982 | 2024-02-19 | Gaimin Gladiators  | W   | 0.113      | -            | -                | -                | -         |     0.02 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            5 |     3995 | 2024-02-19 | ex-Guild Eagles    | W   | 0.111      | -            | -                | -                | -         |     0.01 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            4 |     4189 | 2024-02-10 | FaZe               | L   | 0.052      | -            | -                | -                | -         |    -1.16 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            3 |     4232 | 2024-02-06 | ENCE               | W   | 0.026      | -            | -                | -                | -         |     0.09 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            2 |     4244 | 2024-02-05 | GamerLegion        | W   | 0.019      | -            | -                | -                | -         |     0.00 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            1 |     4267 | 2024-02-04 | Cloud9             | W   | 0.012      | -            | -                | -                | -         |     0.00 | Brollan, Jimpphat, siuhy, torzsi, xertioN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($457,979.80)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (1.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-21 |      1.000 | $85,000.00     | $85,000.00      |
| 2024-06-02 |      0.807 | $5,000.00      | $4,034.40       |
| 2024-05-19 |      0.712 | $300,000.00    | $213,564.28     |
| 2024-05-12 |      0.666 | $170,000.00    | $113,174.51     |
| 2024-04-14 |      0.478 | $42,000.00     | $20,059.60      |
| 2024-03-31 |      0.387 | $45,000.00     | $17,393.19      |
| 2024-02-11 |      0.059 | $80,000.00     | $4,753.81       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
