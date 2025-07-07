### Roster Details<br />
Team Name: GhoulsW<br />
Roster: Diviiii, ex1st, SBT, sk1tt, smekk-<br />
Global Rank: [239](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_07_07.md)<br />
Regional Rank: [126]( ../../standings_europe_2025_07_07.md)<br />
<br />
Final Rank Value:  499.1<br />
<br />
Final Rank Value (499.1) = Starting Rank Value (482.3) + Head To Head Adjustments (16.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.174[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.044<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 482.3
- 400 + ( ( 0.044 - 0.000 ) / ( 0.858 - 0.000 ) ) * 1600 = 482.3


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
|            5 |     2171 | 2025-03-24 | WildLotus      | L   | 0.501      | -            | -                | -                | -         |    -5.00 | Diviiii, ex1st, SBT, sk1tt, smekk- |
|            4 |     2174 | 2025-03-24 | HEROIC Academy | W   | 0.500      | 0.143        | 0.002 (0.000)    | 0.197 (0.014)    | 0 (0.000) |    11.88 | Diviiii, ex1st, SBT, sk1tt, smekk- |
|            3 |     2184 | 2025-03-24 | EYEBALLERS     | W   | 0.499      | 0.143        | 0.000 (0.000)    | 0.170 (0.012)    | 0 (0.000) |    10.81 | Diviiii, ex1st, SBT, sk1tt, smekk- |
|            2 |     2409 | 2025-03-15 | Mercenaires    | L   | 0.440      | -            | -                | -                | -         |    -6.24 | Diviiii, ex1st, SBT, sk1tt, smekk- |
|            1 |     2416 | 2025-03-15 | HyperSpirit    | W   | 0.439      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.31 | Diviiii, ex1st, SBT, sk1tt, smekk- |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($499,535.85)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
