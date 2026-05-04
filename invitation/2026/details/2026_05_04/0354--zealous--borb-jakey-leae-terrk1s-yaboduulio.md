### Roster Details<br />
Team Name: Zealous<br />
Roster: borb, JAKEY, leae, terrk1s, Yaboduulio<br />
Global Rank: [354](../../standings_global_2026_05_04.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_05_04.md)<br />
Regional Rank: [92]( ../../standings_americas_2026_05_04.md)<br />
<br />
Final Rank Value:  393.9<br />
<br />
Final Rank Value (393.9) = Starting Rank Value (401.0) + Head To Head Adjustments (-7.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.002[<sup>2</sup>](#table1)

The average of these factors is 0.001<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 401.0
- 400 + ( ( 0.001 - 0.000 ) / ( 0.862 - 0.000 ) ) * 1600 = 401.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     1506 | 2026-03-28 | Wanted Goons | L   | 0.954      | -            | -                | -                | -         |    -6.45 | borb, JAKEY, leae, terrk1s, Yaboduulio |
|            4 |     1520 | 2026-03-28 | LAG          | L   | 0.953      | -            | -                | -                | -         |    -0.82 | borb, JAKEY, leae, terrk1s, Yaboduulio |
|            3 |     5833 | 2025-11-08 | FlyQuest RED | L   | 0.022      | -            | -                | -                | -         |    -0.14 | borb, JAKEY, leae, terrk1s, Yaboduulio |
|            2 |     5845 | 2025-11-08 | Aura         | W   | 0.021      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.021) |     0.33 | borb, JAKEY, leae, terrk1s, Yaboduulio |
|            1 |     5857 | 2025-11-08 | BC.Game      | L   | 0.020      | -            | -                | -                | -         |    -0.01 | borb, JAKEY, leae, terrk1s, Yaboduulio |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($468,528.41)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
