### Roster Details<br />
Team Name: HAVU<br />
Roster: Alxc, ottob, p3kko, puuha, uli<br />
Global Rank: [183](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_06_02.md)<br />
Regional Rank: [101]( ../../standings_europe_2025_06_02.md)<br />
<br />
Final Rank Value:  628.9<br />
<br />
Final Rank Value (628.9) = Starting Rank Value (620.9) + Head To Head Adjustments (8.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.285[<sup>1</sup>](#table2)
- Bounty Collected: 0.195[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.120<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 620.9
- 400 + ( ( 0.120 - 0.000 ) / ( 0.872 - 0.000 ) ) * 1600 = 620.9


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
|            5 |      687 | 2025-04-27 | ENCE Academy | L   | 0.965      | -            | -                | -                | -         |    -7.64 | Alxc, ottob, p3kko, puuha, uli |
|            4 |      692 | 2025-04-27 | 4 EYEZ       | W   | 0.964      | 0.308        | 0.001 (0.000)    | 0.040 (0.012)    | 0 (0.000) |    13.62 | Alxc, ottob, p3kko, puuha, uli |
|            3 |      730 | 2025-04-26 | ENCE Academy | L   | 0.957      | -            | -                | -                | -         |    -7.63 | Alxc, ottob, p3kko, puuha, uli |
|            2 |      742 | 2025-04-25 | 4 EYEZ       | W   | 0.952      | 0.308        | 0.001 (0.000)    | 0.040 (0.012)    | 0 (0.000) |    13.80 | Alxc, ottob, p3kko, puuha, uli |
|            1 |     2660 | 2025-02-21 | ENCE Academy | L   | 0.533      | -            | -                | -                | -         |    -4.17 | Alxc, ottob, p3kko, puuha, uli |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,371.29)
- Divide that value by the 5th highest value among all rosters ($444,744.78)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-04-27 |      0.965 | $1,134.00      | $1,093.81       |
| 2025-02-22 |      0.538 | $516.00        | $277.48         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
