### Roster Details<br />
Team Name: The Golden Horde<br />
Roster: aRTYSAN, dijarom, forzaN, lyoli, regoshka<br />
Global Rank: [215](../../standings_global_2026_11_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_11_02.md)<br />
Regional Rank: [151]( ../../standings_europe_2026_11_02.md)<br />
<br />
Final Rank Value:  687.6<br />
<br />
Final Rank Value (687.6) = Starting Rank Value (635.6) + Head To Head Adjustments (52.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.244[<sup>1</sup>](#table2)
- Bounty Collected: 0.239[<sup>2</sup>](#table1)
- Opponent Network: 0.020[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.126<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 635.6
- 400 + ( ( 0.126 - 0.000 ) / ( 0.854 - 0.000 ) ) * 1600 = 635.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |      734 | 2026-10-12 | ex-RUSTEC            | L   | 1.000      | -            | -                | -                | -         |    -3.69 | aRTYSAN, dijarom, forzaN, lyoli, regoshka |
|            5 |      737 | 2026-10-12 | GenOne               | W   | 1.000      | 0.143        | 0.037 (0.005)    | 0.709 (0.101)    | 0 (0.000) |    29.47 | aRTYSAN, dijarom, forzaN, lyoli, regoshka |
|            4 |      743 | 2026-10-12 | Inner Circle Academy | W   | 1.000      | 0.143        | 0.009 (0.001)    | 0.657 (0.094)    | 0 (0.000) |    28.21 | aRTYSAN, dijarom, forzaN, lyoli, regoshka |
|            3 |     2104 | 2026-09-13 | TitanFlow            | L   | 0.867      | -            | -                | -                | -         |   -12.72 | aRTYSAN, dijarom, forzaN, lyoli, regoshka |
|            2 |     2155 | 2026-09-12 | BOJONG               | W   | 0.860      | 0.278        | 0.000 (0.000)    | 0.027 (0.006)    | 0 (0.000) |     5.28 | aRTYSAN, dijarom, forzaN, lyoli, regoshka |
|            1 |     2212 | 2026-09-11 | gothboiclique        | W   | 0.853      | 0.278        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.45 | aRTYSAN, dijarom, forzaN, lyoli, regoshka |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($433.72)
- Divide that value by the 5th highest value among all rosters ($549,790.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-09-13 |      0.867 | $500.00        | $433.72         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
