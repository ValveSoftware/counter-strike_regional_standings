### Roster Details<br />
Team Name: TNL<br />
Roster: cairne, onic, St0m4k, yukitoro, zogeN<br />
Global Rank: [126](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_04_07.md)<br />
Regional Rank: [80]( ../../standings_europe_2025_04_07.md)<br />
<br />
Final Rank Value:  696.2<br />
<br />
Final Rank Value (696.2) = Starting Rank Value (686.1) + Head To Head Adjustments (10.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.345[<sup>1</sup>](#table2)
- Bounty Collected: 0.250[<sup>2</sup>](#table1)
- Opponent Network: 0.026[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.155<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 686.1
- 400 + ( ( 0.155 - 0.000 ) / ( 0.869 - 0.000 ) ) * 1600 = 686.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     1734 | 2024-12-22 | kONO         | L   | 0.494      | -            | -                | -                | -         |    -7.99 | cairne, onic, St0m4k, yukitoro, zogeN |
|            6 |     1792 | 2024-12-17 | FAVBET       | L   | 0.461      | -            | -                | -                | -         |    -6.44 | cairne, onic, St0m4k, yukitoro, zogeN |
|            5 |     1804 | 2024-12-16 | Dragon EC    | W   | 0.453      | 0.382        | 0.004 (0.001)    | 0.020 (0.004)    | 0 (0.000) |     5.49 | cairne, onic, St0m4k, yukitoro, zogeN |
|            4 |     1921 | 2024-12-09 | TNL          | W   | 0.408      | 0.382        | 0.002 (0.000)    | 0.518 (0.081)    | 0 (0.000) |     5.93 | cairne, onic, St0m4k, yukitoro, zogeN |
|            3 |     2198 | 2024-11-27 | Iberian Soul | L   | 0.327      | -            | -                | -                | -         |    -2.33 | cairne, onic, St0m4k, yukitoro, zogeN |
|            2 |     2213 | 2024-11-26 | NAVI Junior  | W   | 0.320      | 0.333        | 0.073 (0.008)    | 0.953 (0.102)    | 0 (0.000) |     8.38 | cairne, onic, St0m4k, yukitoro, zogeN |
|            1 |     2239 | 2024-11-24 | Monte        | W   | 0.306      | 0.333        | 0.012 (0.001)    | 0.768 (0.078)    | 0 (0.000) |     7.05 | cairne, onic, St0m4k, yukitoro, zogeN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,444.29)
- Divide that value by the 5th highest value among all rosters ($274,489.55)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-22 |      0.494 | $478.00        | $236.08         |
| 2024-12-17 |      0.461 | $4,835.00      | $2,227.96       |
| 2024-11-27 |      0.327 | $3,000.00      | $980.25         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
