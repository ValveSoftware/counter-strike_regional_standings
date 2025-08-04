### Roster Details<br />
Team Name: HAVU<br />
Roster: Alxc, ottob, p3kko, puuha, uli<br />
Global Rank: [183](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_04.md)<br />
Regional Rank: [98]( ../../standings_europe_2025_08_04.md)<br />
<br />
Final Rank Value:  614.0<br />
<br />
Final Rank Value (614.0) = Starting Rank Value (608.4) + Head To Head Adjustments (5.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.262[<sup>1</sup>](#table2)
- Bounty Collected: 0.177[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.110<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 608.4
- 400 + ( ( 0.110 - 0.000 ) / ( 0.845 - 0.000 ) ) * 1600 = 608.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     1690 | 2025-04-27 | ENCE Academy | L   | 0.540      | -            | -                | -                | -         |    -4.66 | Alxc, ottob, p3kko, puuha, uli |
|            4 |     1695 | 2025-04-27 | 4 EYEZ       | W   | 0.539      | 0.308        | 0.001 (0.000)    | 0.026 (0.004)    | 0 (0.000) |     7.96 | Alxc, ottob, p3kko, puuha, uli |
|            3 |     1733 | 2025-04-26 | ENCE Academy | L   | 0.533      | -            | -                | -                | -         |    -4.62 | Alxc, ottob, p3kko, puuha, uli |
|            2 |     1745 | 2025-04-25 | 4 EYEZ       | W   | 0.527      | 0.308        | 0.001 (0.000)    | 0.026 (0.004)    | 0 (0.000) |     7.89 | Alxc, ottob, p3kko, puuha, uli |
|            1 |     3663 | 2025-02-21 | ENCE Academy | L   | 0.109      | -            | -                | -                | -         |    -0.93 | Alxc, ottob, p3kko, puuha, uli |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($671.22)
- Divide that value by the 5th highest value among all rosters ($440,967.54)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-04-27 |      0.540 | $1,134.00      | $612.68         |
| 2025-02-22 |      0.113 | $516.00        | $58.55          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
