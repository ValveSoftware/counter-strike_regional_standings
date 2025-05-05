### Roster Details<br />
Team Name: GhoulsW<br />
Roster: Diviiii, ex1st, SBT, sk1tt, smekk-<br />
Global Rank: [250](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_05_05.md)<br />
Regional Rank: [140]( ../../standings_europe_2025_05_05.md)<br />
<br />
Final Rank Value:  521.9<br />
<br />
Final Rank Value (521.9) = Starting Rank Value (495.4) + Head To Head Adjustments (26.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.206[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.053<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 495.4
- 400 + ( ( 0.053 - 0.000 ) / ( 0.882 - 0.000 ) ) * 1600 = 495.4


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
|            5 |      896 | 2025-03-24 | WildLotus      | L   | 0.921      | -            | -                | -                | -         |   -13.23 | Diviiii, ex1st, SBT, sk1tt, smekk- |
|            4 |      899 | 2025-03-24 | HEROIC Academy | W   | 0.921      | 0.143        | 0.004 (0.001)    | 0.150 (0.020)    | 0 (0.000) |    20.85 | Diviiii, ex1st, SBT, sk1tt, smekk- |
|            3 |      909 | 2025-03-24 | EYEBALLERS     | W   | 0.920      | 0.143        | 0.006 (0.001)    | 0.199 (0.026)    | 0 (0.000) |    21.76 | Diviiii, ex1st, SBT, sk1tt, smekk- |
|            2 |     1070 | 2025-03-15 | Mercenaires    | L   | 0.861      | -            | -                | -                | -         |   -12.45 | Diviiii, ex1st, SBT, sk1tt, smekk- |
|            1 |     1077 | 2025-03-15 | HyperSpirit    | W   | 0.860      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     9.64 | Diviiii, ex1st, SBT, sk1tt, smekk- |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($360,998.53)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
