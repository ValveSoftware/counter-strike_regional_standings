### Roster Details<br />
Team Name: Tunisia<br />
Roster: Falez, Potei, Remind, RiglA, zaca<br />
Global Rank: [289](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_05_05.md)<br />
Regional Rank: [41]( ../../standings_asia_2025_05_05.md)<br />
<br />
Final Rank Value:  402.0<br />
<br />
Final Rank Value (402.0) = Starting Rank Value (402.6) + Head To Head Adjustments (-0.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.006[<sup>2</sup>](#table1)

The average of these factors is 0.001<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 402.6
- 400 + ( ( 0.001 - 0.000 ) / ( 0.882 - 0.000 ) ) * 1600 = 402.6


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
|            5 |     3178 | 2024-11-15 | Latvia   | L   | 0.060      | -            | -                | -                | -         |    -0.72 | Falez, Potei, Remind, RiglA, zaca |
|            4 |     3185 | 2024-11-15 | NOVAQ    | L   | 0.059      | -            | -                | -                | -         |    -0.29 | Falez, Potei, Remind, RiglA, zaca |
|            3 |     3217 | 2024-11-14 | Nexus    | L   | 0.054      | -            | -                | -                | -         |    -0.06 | Falez, Potei, Remind, RiglA, zaca |
|            2 |     3221 | 2024-11-14 | USA      | W   | 0.054      | 0.617        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.054) |     0.84 | Falez, Potei, Remind, RiglA, zaca |
|            1 |     3226 | 2024-11-14 | kONO     | L   | 0.053      | -            | -                | -                | -         |    -0.34 | Falez, Potei, Remind, RiglA, zaca |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($360,998.53)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
