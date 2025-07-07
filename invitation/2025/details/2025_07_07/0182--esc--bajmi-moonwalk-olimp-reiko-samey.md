### Roster Details<br />
Team Name: ESC<br />
Roster: bajmi, moonwalk, olimp, reiko, SaMey<br />
Global Rank: [182](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_07_07.md)<br />
Regional Rank: [98]( ../../standings_europe_2025_07_07.md)<br />
<br />
Final Rank Value:  610.7<br />
<br />
Final Rank Value (610.7) = Starting Rank Value (595.6) + Head To Head Adjustments (15.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.244[<sup>1</sup>](#table2)
- Bounty Collected: 0.171[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.105<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 595.6
- 400 + ( ( 0.105 - 0.000 ) / ( 0.858 - 0.000 ) ) * 1600 = 595.6


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
|            5 |      430 | 2025-05-31 | Bad News Eagles | L   | 0.954      | -            | -                | -                | -         |   -13.21 | bajmi, moonwalk, olimp, reiko, SaMey |
|            4 |      550 | 2025-05-22 | Mousquetaires   | W   | 0.892      | 0.143        | 0.000 (0.000)    | 0.086 (0.011)    | 0 (0.000) |     9.87 | bajmi, moonwalk, olimp, reiko, SaMey |
|            3 |      628 | 2025-05-19 | FORZE Reload    | W   | 0.872      | 0.143        | 0.000 (0.000)    | 0.136 (0.017)    | 0 (0.000) |    11.73 | bajmi, moonwalk, olimp, reiko, SaMey |
|            2 |     2374 | 2025-03-17 | RUBY            | L   | 0.454      | -            | -                | -                | -         |    -2.45 | bajmi, Grashog, nestee, reiko, SaMey |
|            1 |     2382 | 2025-03-17 | HEROIC Academy  | W   | 0.453      | 0.143        | 0.002 (0.000)    | 0.197 (0.013)    | 0 (0.000) |     9.10 | bajmi, Grashog, nestee, reiko, SaMey |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($402.15)
- Divide that value by the 5th highest value among all rosters ($499,535.85)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-06-01 |      0.960 | $419.00        | $402.15         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
