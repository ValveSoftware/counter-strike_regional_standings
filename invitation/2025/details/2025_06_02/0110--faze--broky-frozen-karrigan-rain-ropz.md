### Roster Details<br />
Team Name: FaZe<br />
Roster: broky, frozen, karrigan, rain, ropz<br />
Global Rank: [110](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_06_02.md)<br />
Regional Rank: [68]( ../../standings_europe_2025_06_02.md)<br />
<br />
Final Rank Value:  759.7<br />
<br />
Final Rank Value (759.7) = Starting Rank Value (754.1) + Head To Head Adjustments (5.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.395[<sup>1</sup>](#table2)
- Bounty Collected: 0.350[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.019[<sup>2</sup>](#table1)

The average of these factors is 0.193<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 754.1
- 400 + ( ( 0.193 - 0.000 ) / ( 0.872 - 0.000 ) ) * 1600 = 754.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |     3671 | 2024-12-15 | Spirit   | L   | 0.076      | -            | -                | -                | -         |    -0.00 | broky, frozen, karrigan, rain, ropz |
|            7 |     3695 | 2024-12-14 | G2       | W   | 0.070      | 1.000        | 0.719 (0.050)    | 0.464 (0.032)    | 1 (0.070) |     2.19 | broky, frozen, karrigan, rain, ropz |
|            6 |     3719 | 2024-12-13 | Vitality | W   | 0.063      | 1.000        | 1.000 (0.063)    | 0.506 (0.032)    | 1 (0.063) |     1.99 | broky, frozen, karrigan, rain, ropz |
|            5 |     3788 | 2024-12-08 | FURIA    | W   | 0.030      | 1.000        | 0.344 (0.010)    | 0.295 (0.009)    | 1 (0.030) |     0.92 | broky, frozen, karrigan, rain, ropz |
|            4 |     3829 | 2024-12-06 | G2       | L   | 0.021      | -            | -                | -                | -         |    -0.00 | broky, frozen, karrigan, rain, ropz |
|            3 |     3853 | 2024-12-05 | MOUZ     | W   | 0.014      | 1.000        | 1.000 (0.014)    | 0.508 (0.007)    | 1 (0.014) |     0.45 | broky, frozen, karrigan, rain, ropz |
|            2 |     3865 | 2024-12-05 | HEROIC   | L   | 0.010      | -            | -                | -                | -         |    -0.19 | broky, frozen, karrigan, rain, ropz |
|            1 |     3883 | 2024-12-04 | Wildcard | W   | 0.008      | 1.000        | 0.106 (0.001)    | 0.488 (0.004)    | 1 (0.008) |     0.19 | broky, frozen, karrigan, rain, ropz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($12,985.78)
- Divide that value by the 5th highest value among all rosters ($444,744.78)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-15 |      0.076 | $170,000.00    | $12,985.78      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
