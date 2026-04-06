### Roster Details<br />
Team Name: Wildcard<br />
Roster: F1KU, JBa, Peeping, phzy, stanislaw<br />
Global Rank: [270](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_04_06.md)<br />
Regional Rank: [68]( ../../standings_americas_2026_04_06.md)<br />
<br />
Final Rank Value:  619.8<br />
<br />
Final Rank Value (619.8) = Starting Rank Value (616.4) + Head To Head Adjustments (3.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.239[<sup>1</sup>](#table2)
- Bounty Collected: 0.201[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.111<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 616.4
- 400 + ( ( 0.111 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 616.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     5463 | 2025-10-19 | Rave            | L   | 0.077      | -            | -                | -                | -         |    -0.67 | F1KU, JBa, Peeping, phzy, stanislaw |
|            5 |     5479 | 2025-10-18 | Marsborne       | W   | 0.069      | 0.363        | 0.038 (0.001)    | 0.491 (0.012)    | 0 (0.000) |     2.13 | F1KU, JBa, Peeping, phzy, stanislaw |
|            4 |     5530 | 2025-10-16 | Voca            | W   | 0.057      | 0.363        | 0.004 (0.000)    | 0.044 (0.001)    | 0 (0.000) |     1.02 | F1KU, JBa, Peeping, phzy, stanislaw |
|            3 |     5568 | 2025-10-15 | regain          | W   | 0.050      | 0.363        | 0.003 (0.000)    | 0.237 (0.004)    | 0 (0.000) |     0.91 | F1KU, JBa, Peeping, phzy, stanislaw |
|            2 |     5606 | 2025-10-14 | Marsborne       | L   | 0.043      | -            | -                | -                | -         |    -0.03 | F1KU, JBa, Peeping, phzy, stanislaw |
|            1 |     5779 | 2025-10-08 | ex-Chicken Coop | W   | 0.003      | 0.363        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.03 | F1KU, JBa, Peeping, phzy, stanislaw |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($306.63)
- Divide that value by the 5th highest value among all rosters ($459,637.54)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-10-19 |      0.077 | $4,000.00      | $306.63         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
