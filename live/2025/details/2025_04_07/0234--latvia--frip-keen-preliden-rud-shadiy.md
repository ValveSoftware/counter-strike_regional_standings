### Roster Details<br />
Team Name: Latvia<br />
Roster: Frip, keen, prelideN, rud, shadiy<br />
Global Rank: [234](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_04_07.md)<br />
Regional Rank: [134]( ../../standings_europe_2025_04_07.md)<br />
<br />
Final Rank Value:  544.5<br />
<br />
Final Rank Value (544.5) = Starting Rank Value (536.0) + Head To Head Adjustments (8.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.214[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.078[<sup>2</sup>](#table1)

The average of these factors is 0.074<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 536.0
- 400 + ( ( 0.074 - 0.000 ) / ( 0.869 - 0.000 ) ) * 1600 = 536.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     2426 | 2024-11-15 | Tunisia  | W   | 0.247      | 0.617        | 0.000 (0.000)    | 0.013 (0.002)    | 1 (0.247) |     2.54 | Frip, keen, prelideN, rud, shadiy |
|            4 |     2430 | 2024-11-15 | Nexus    | L   | 0.246      | -            | -                | -                | -         |    -0.53 | Frip, keen, prelideN, rud, shadiy |
|            3 |     2463 | 2024-11-14 | kONO     | W   | 0.241      | 0.617        | 0.014 (0.002)    | 0.224 (0.033)    | 1 (0.241) |     5.51 | Frip, keen, prelideN, rud, shadiy |
|            2 |     2466 | 2024-11-14 | Novaq    | L   | 0.240      | -            | -                | -                | -         |    -1.40 | Frip, keen, prelideN, rud, shadiy |
|            1 |     2472 | 2024-11-14 | USA      | W   | 0.240      | 0.617        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.240) |     2.40 | Frip, keen, prelideN, rud, shadiy |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($274,489.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
