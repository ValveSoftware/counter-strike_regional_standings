### Roster Details<br />
Team Name: Viperio<br />
Roster: dezt, shyyne, Skrimo, swicher, zodi<br />
Global Rank: [226](../../standings_global_2025_03_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_03.md)<br />
Regional Rank: [134]( ../../standings_europe_2025_03_03.md)<br />
<br />
Final Rank Value:  600.0<br />
<br />
Final Rank Value (600.0) = Starting Rank Value (632.6) + Head To Head Adjustments (-32.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.267[<sup>1</sup>](#table2)
- Bounty Collected: 0.208[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.121<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 632.6
- 400 + ( ( 0.121 - 0.000 ) / ( 0.830 - 0.000 ) ) * 1600 = 632.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           16 |      837 | 2024-12-19 | Astralis Talent | L   | 0.706      | -            | -                | -                | -         |    -8.95 | dezt, shyyne, Skrimo, swicher, zodi  |
|           15 |      849 | 2024-12-18 | WOPA            | L   | 0.699      | -            | -                | -                | -         |    -6.47 | dezt, shyyne, Skrimo, swicher, zodi  |
|           14 |     1137 | 2024-12-03 | FORZE Reload    | L   | 0.599      | -            | -                | -                | -         |    -7.31 | dezt, shyyne, Skrimo, swicher, zodi  |
|           13 |     1158 | 2024-12-02 | Illuminar       | W   | 0.593      | 0.333        | 0.007 (0.001)    | 0.311 (0.061)    | 0 (0.000) |    12.75 | dezt, shyyne, Skrimo, swicher, zodi  |
|           12 |     1171 | 2024-12-01 | ALTERNATE aTTaX | L   | 0.587      | -            | -                | -                | -         |    -3.77 | dezt, shyyne, Skrimo, swicher, zodi  |
|           11 |     1258 | 2024-11-27 | BC.Game         | L   | 0.560      | -            | -                | -                | -         |    -5.16 | dezt, shyyne, Skrimo, swicher, zodi  |
|           10 |     1308 | 2024-11-24 | Tricked         | L   | 0.538      | -            | -                | -                | -         |    -4.18 | dezt, shyyne, Skrimo, swicher, zodi  |
|            9 |     1360 | 2024-11-22 | Chimera         | L   | 0.526      | -            | -                | -                | -         |    -3.96 | dezt, shyyne, Skrimo, swicher, zodi  |
|            8 |     1581 | 2024-11-13 | GenOne          | L   | 0.465      | -            | -                | -                | -         |    -4.89 | dezt, Silence, Skrimo, swicher, zodi |
|            7 |     1608 | 2024-11-12 | Leo             | L   | 0.459      | -            | -                | -                | -         |    -4.62 | dezt, shyyne, Skrimo, swicher, zodi  |
|            6 |     1693 | 2024-11-09 | Case            | W   | 0.438      | 0.333        | 0.001 (0.000)    | 0.073 (0.011)    | 0 (0.000) |     7.88 | dezt, shyyne, Skrimo, swicher, zodi  |
|            5 |     2036 | 2024-10-21 | CPH Wolves      | L   | 0.312      | -            | -                | -                | -         |    -3.05 | dezt, shyyne, Skrimo, swicher, zodi  |
|            4 |     2085 | 2024-10-19 | ADEPTS          | W   | 0.299      | 0.333        | 0.000 (0.000)    | 0.044 (0.004)    | 0 (0.000) |     3.07 | dezt, shyyne, Skrimo, swicher, zodi  |
|            3 |     2114 | 2024-10-18 | NAVI Junior     | L   | 0.292      | -            | -                | -                | -         |    -1.31 | dezt, shyyne, Skrimo, swicher, zodi  |
|            2 |     2510 | 2024-10-03 | NAVI Junior     | L   | 0.192      | -            | -                | -                | -         |    -0.87 | dezt, shyyne, Skrimo, swicher, zodi  |
|            1 |     2552 | 2024-10-02 | UNiTY           | L   | 0.185      | -            | -                | -                | -         |    -1.78 | dezt, shyyne, Skrimo, swicher, zodi  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($606.87)
- Divide that value by the 5th highest value among all rosters ($333,212.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-04 |      0.607 | $1,000.00      | $606.87         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
