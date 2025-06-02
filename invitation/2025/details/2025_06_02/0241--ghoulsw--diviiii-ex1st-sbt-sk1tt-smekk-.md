### Roster Details<br />
Team Name: GhoulsW<br />
Roster: Diviiii, ex1st, SBT, sk1tt, smekk-<br />
Global Rank: [241](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_06_02.md)<br />
Regional Rank: [128]( ../../standings_europe_2025_06_02.md)<br />
<br />
Final Rank Value:  514.5<br />
<br />
Final Rank Value (514.5) = Starting Rank Value (489.6) + Head To Head Adjustments (25.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.193[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.049<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 489.6
- 400 + ( ( 0.049 - 0.000 ) / ( 0.872 - 0.000 ) ) * 1600 = 489.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     1695 | 2025-03-24 | WildLotus      | L   | 0.739      | -            | -                | -                | -         |    -7.27 | Diviiii, ex1st, SBT, sk1tt, smekk- |
|            4 |     1698 | 2025-03-24 | HEROIC Academy | W   | 0.738      | 0.143        | 0.003 (0.000)    | 0.110 (0.012)    | 0 (0.000) |    16.96 | Diviiii, ex1st, SBT, sk1tt, smekk- |
|            3 |     1708 | 2025-03-24 | EYEBALLERS     | W   | 0.737      | 0.143        | 0.003 (0.000)    | 0.106 (0.011)    | 0 (0.000) |    17.23 | Diviiii, ex1st, SBT, sk1tt, smekk- |
|            2 |     1933 | 2025-03-15 | Mercenaires    | L   | 0.678      | -            | -                | -                | -         |    -9.85 | Diviiii, ex1st, SBT, sk1tt, smekk- |
|            1 |     1940 | 2025-03-15 | HyperSpirit    | W   | 0.678      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     7.89 | Diviiii, ex1st, SBT, sk1tt, smekk- |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($444,744.78)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
