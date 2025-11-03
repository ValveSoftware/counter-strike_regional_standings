### Roster Details<br />
Team Name: HOTU<br />
Roster: dukefissura, frontales, kade0, mizu, n0rb3r7<br />
Global Rank: [24](../../standings_global_2025_11_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_11_03.md)<br />
Regional Rank: [19]( ../../standings_europe_2025_11_03.md)<br />
<br />
Final Rank Value:  1379.6<br />
<br />
Final Rank Value (1379.6) = Starting Rank Value (1250.3) + Head To Head Adjustments (129.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.437[<sup>1</sup>](#table2)
- Bounty Collected: 0.597[<sup>2</sup>](#table1)
- Opponent Network: 0.385[<sup>2</sup>](#table1)
- LAN Wins: 0.395[<sup>2</sup>](#table1)

The average of these factors is 0.454<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1250.3
- 400 + ( ( 0.454 - 0.000 ) / ( 0.853 - 0.000 ) ) * 1600 = 1250.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           21 |      618 | 2025-10-07 | Natus Vincere | L   | 1.000      | -            | -                | -                | -         |    -2.91 | dukefissura, frontales, kade0, mizu, n0rb3r7 |
|           20 |      686 | 2025-10-06 | Vitality      | L   | 1.000      | -            | -                | -                | -         |    -2.11 | dukefissura, frontales, kade0, mizu, n0rb3r7 |
|           19 |      727 | 2025-10-05 | Spirit        | L   | 1.000      | -            | -                | -                | -         |    -3.22 | dukefissura, frontales, kade0, mizu, n0rb3r7 |
|           18 |      779 | 2025-10-04 | The MongolZ   | W   | 0.999      | 1.000        | 1.000 (0.999)    | 0.487 (0.486)    | 1 (0.999) |    30.14 | dukefissura, frontales, kade0, mizu, n0rb3r7 |
|           17 |      940 | 2025-09-30 | ENCE          | W   | 0.971      | 0.769        | 0.089 (0.066)    | 0.860 (0.642)    | 1 (0.971) |    12.16 | dukefissura, frontales, kade0, mizu, n0rb3r7 |
|           16 |      973 | 2025-09-29 | B8            | W   | 0.965      | 0.769        | 0.234 (0.174)    | -                | 1 (0.965) |    23.70 | dukefissura, frontales, kade0, mizu, n0rb3r7 |
|           15 |     1002 | 2025-09-28 | FURIA         | W   | 0.959      | 0.769        | 1.000 (0.737)    | 0.719 (0.530)    | 1 (0.959) |    29.46 | dukefissura, frontales, kade0, mizu, n0rb3r7 |
|           14 |     1161 | 2025-09-25 | Sashi         | W   | 0.939      | 0.371        | 0.018 (0.006)    | -                | 0 (0.000) |     6.61 | dukefissura, frontales, kade0, mizu, n0rb3r7 |
|           13 |     1208 | 2025-09-23 | RUBY          | W   | 0.926      | 0.371        | 0.052 (0.018)    | 1.000 (0.343)    | 0 (0.000) |     4.22 | dukefissura, frontales, kade0, mizu, n0rb3r7 |
|           12 |     1235 | 2025-09-21 | ESC           | W   | 0.914      | 0.371        | 0.134 (0.045)    | 1.000 (0.339)    | 0 (0.000) |    14.99 | dukefissura, frontales, kade0, mizu, n0rb3r7 |
|           11 |     1295 | 2025-09-19 | 9INE          | L   | 0.901      | -            | -                | -                | -         |   -13.65 | dukefissura, frontales, kade0, mizu, n0rb3r7 |
|           10 |     1306 | 2025-09-19 | Sashi         | L   | 0.900      | -            | -                | -                | -         |   -23.12 | dukefissura, frontales, kade0, mizu, n0rb3r7 |
|            9 |     1317 | 2025-09-19 | FAVBET        | W   | 0.898      | -            | -                | -                | 0 (0.000) |     3.56 | dukefissura, frontales, kade0, mizu, n0rb3r7 |
|            8 |     1333 | 2025-09-18 | Monte         | W   | 0.894      | 0.384        | -                | 0.819 (0.281)    | 0 (0.000) |     9.43 | dukefissura, frontales, kade0, mizu, n0rb3r7 |
|            7 |     1373 | 2025-09-17 | RUBY          | W   | 0.887      | 0.384        | 0.052 (0.018)    | 1.000 (0.341)    | 0 (0.000) |     3.53 | dukefissura, frontales, kade0, mizu, n0rb3r7 |
|            6 |     1468 | 2025-09-14 | Oramond       | W   | 0.866      | 0.435        | -                | 0.838 (0.316)    | -         |     4.56 | dukefissura, frontales, kade0, mizu, n0rb3r7 |
|            5 |     1504 | 2025-09-13 | OG            | W   | 0.861      | 0.384        | 0.096 (0.032)    | 0.892 (0.295)    | -         |    17.56 | dukefissura, frontales, kade0, mizu, n0rb3r7 |
|            4 |     1563 | 2025-09-12 | Nemiga        | W   | 0.853      | 0.384        | 0.075 (0.025)    | -                | -         |     6.99 | dukefissura, frontales, kade0, mizu, n0rb3r7 |
|            3 |     1567 | 2025-09-12 | Eternal Fire  | W   | 0.853      | -            | -                | -                | -         |     3.56 | dukefissura, frontales, kade0, mizu, n0rb3r7 |
|            2 |     1663 | 2025-09-10 | Insilio       | W   | 0.840      | -            | -                | -                | -         |     1.15 | dukefissura, frontales, kade0, mizu, n0rb3r7 |
|            1 |     1683 | 2025-09-10 | CPH Wolves    | W   | 0.838      | 0.435        | -                | 0.756 (0.275)    | -         |     2.68 | dukefissura, frontales, kade0, mizu, n0rb3r7 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($31,984.02)
- Divide that value by the 5th highest value among all rosters ($619,318.60)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-10-12 |      1.000 | $20,500.00     | $20,500.00      |
| 2025-09-25 |      0.939 | $11,000.00     | $10,324.88      |
| 2025-09-23 |      0.927 | $1,250.00      | $1,159.14       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
